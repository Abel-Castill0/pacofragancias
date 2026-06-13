/*
 * optimize-images.js — Genera versiones pequeñas (400px) de los webp de producto.
 *
 * Las cards muestran las imágenes a ~260px, pero los archivos originales son de
 * ~2048px (~1MB c/u). Este script crea copias de 400px de ancho y calidad 80,
 * que el sitio usará automáticamente vía `srcset` cuando actives el flag
 * IMG_OPTIMIZED en script.js.
 *
 * USO (ejecútalo tú manualmente):
 *   1) npm install sharp
 *   2) node tools/optimize-images.js
 *   3) En script.js, cambia  const IMG_OPTIMIZED = false;  ->  true
 *
 * Salida: img/perfumes_optimized/<mismo_nombre>.webp
 * No modifica ni borra los originales.
 */
"use strict";

const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch (e) {
  console.error(
    "\n❌ Falta la dependencia 'sharp'.\n   Instálala con:  npm install sharp\n",
  );
  process.exit(1);
}

const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "img", "perfumes");
const OUT_DIR = path.join(ROOT, "img", "perfumes_optimized");

const TARGET_WIDTH = 400;
const QUALITY = 80;

async function run() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error("❌ No existe la carpeta de origen:", SRC_DIR);
    process.exit(1);
  }
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const files = fs
    .readdirSync(SRC_DIR)
    .filter((f) => f.toLowerCase().endsWith(".webp"));

  if (files.length === 0) {
    console.log("⚠️  No se encontraron .webp en", SRC_DIR);
    return;
  }

  console.log(`🔧 Optimizando ${files.length} imágenes a ${TARGET_WIDTH}px (q${QUALITY})...\n`);

  let ok = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of files) {
    const inPath = path.join(SRC_DIR, file);
    const outPath = path.join(OUT_DIR, file);
    try {
      const meta = await sharp(inPath).metadata();
      // No agrandar imágenes que ya son pequeñas.
      const width = meta.width && meta.width < TARGET_WIDTH ? meta.width : TARGET_WIDTH;
      await sharp(inPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath);
      ok++;
      process.stdout.write(`  ✓ ${file}\n`);
    } catch (err) {
      failed++;
      console.error(`  ✗ ${file} — ${err.message}`);
    }
  }

  console.log(
    `\n✅ Listo. Generadas: ${ok} · Omitidas: ${skipped} · Fallidas: ${failed}`,
  );
  console.log(`📁 Carpeta de salida: ${OUT_DIR}`);
  console.log(
    "\n👉 Ahora activa el flag en script.js:  const IMG_OPTIMIZED = true;\n",
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
