(function () {
  "use strict";
  /* ══════════════════════════════════════════════════════════════
     DATA — PRODUCTOS
  ══════════════════════════════════════════════════════════════ */
  const products = [
    { id: 1, name: "Tropical Vibe", brand: "Rayhaan", category: "arabe", gender: "unisex", notes: "Mango, Piña, Bergamota, Coco, Vainilla, Almizcle, Sándalo, Vetiver", description: "Explosión tropical fresca y adictiva con mango, piña y coco cremoso sobre una base amaderada.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/tropical_vibe_ryhaan.webp", decantImage: "img/perfumes/tropical_vibe_ryhaan2.webp", cardImage: "img/perfumes/tropical_vibe_ryhaan.webp", featured: true, badge: "new", badgeText: "Nuevo" },
    { id: 2, name: "Jean Lowe Azure", brand: "Maison Alhambra", category: "arabe", gender: "unisex", notes: "Bergamota, Limón, Pimienta Rosa, Lavanda, Geranio, Jazmín, Sándalo, Almizcle, Ámbar", description: "Elegancia cítrica y amaderada con un corazón aromático de lavanda y geranio.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/jean_lowe_azure.webp", decantImage: "img/perfumes/jean_lowe_azure2.webp", cardImage: "img/perfumes/jean_lowe_azure.webp", featured: true, badge: "top", badgeText: "Top" },
    { id: 3, name: "Jean Lowe Immortel", brand: "Maison Alhambra", category: "arabe", gender: "masculino", notes: "Jengibre, Pomelo, Bergamota, Romero, Notas Acuáticas, Salvia, Geranio, Ambroxan, Ámbar, Ládano", description: "Fresco y aromático con un toque acuático. Inspiración del lujo francés con carácter propio.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/jean_lowe_immortel.webp", decantImage: "img/perfumes/jean_lowe_immortel2.webp", cardImage: "img/perfumes/jean_lowe_immortel.webp", featured: false, badge: null, badgeText: "" },
    { id: 4, name: "Jean Lowe Vibe", brand: "Maison Alhambra", category: "arabe", gender: "unisex", notes: "Limón, Naranja, Menta, Grosella Negra, Cilantro, Albaricoque, Albahaca, Rosa, Higo, Dátiles, Ambreta", description: "Vibrante y refrescante con una explosión cítrica y un corazón frutal exótico.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/jean_lowe_vibe.webp", decantImage: "img/perfumes/jean_lowe_vibe2.webp", cardImage: "img/perfumes/jean_lowe_vibe.webp", featured: false, badge: null, badgeText: "" },
    { id: 5, name: "Mast Rome Pour Homme", brand: "Bharara", category: "arabe", gender: "masculino", notes: "Lavanda, Cítricos, Vainilla, Especias Suaves, Vetiver, Ámbar, Almizcle", description: "Aromático y sofisticado. Lavanda fresca con un corazón dulce de vainilla y base amaderada.", fullSizes: { "100ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/mast_rome_pour_homme.webp", decantImage: "img/perfumes/mast_rome_pour_homme2.webp", cardImage: "img/perfumes/mast_rome_pour_homme.webp", featured: false, badge: null, badgeText: "" },
    { id: 6, name: "Mast Rome Extradose", brand: "Bharara", category: "arabe", gender: "masculino", notes: "Bergamota, Limón, Hoja de Higuera, Musgo Blanco, Jazmín, Manzana Verde, Clavo, Canela, Vainilla", description: "Intenso y especiado. Una versión más potente con clavo y canela marcados sobre vainilla.", fullSizes: { "100ml": 455 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/mast_rome_extradose.webp", decantImage: "img/perfumes/mast_rome_extradose2.webp", cardImage: "img/perfumes/mast_rome_extradose.webp", featured: false, badge: null, badgeText: "" },
    { id: 7, name: "Rome Imagine", brand: "Bharara Mast", category: "arabe", gender: "masculino", notes: "Bergamota, Limón, Lavanda, Geranio, Pimienta Negra, Cardamomo, Salvia, Vetiver, Cedro, Almizcle", description: "Fresco y especiado. Cítricos brillantes con un corazón aromático y base amaderada.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/rome_imagine.webp", decantImage: "img/perfumes/rome_imagine2.webp", cardImage: "img/perfumes/rome_imagine.webp", featured: false, badge: null, badgeText: "" },
    { id: 8, name: "Musamam White Intense", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Bergamota, Naranja, Especias, Coco, Ylang-Ylang, Ambroxan, Sándalo, Benjuí, Almizcle", description: "Cremoso y adictivo. Coco exótico con ylang-ylang sobre una base cálida de sándalo.", fullSizes: { "100ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/musamam_white_intense.webp", decantImage: "img/perfumes/musamam_white_intense2.webp", cardImage: "img/perfumes/musamam_white_intense.webp", featured: false, badge: null, badgeText: "" },
    { id: 9, name: "Veneno Bianco", brand: "French Avenue", category: "arabe", gender: "unisex", notes: "Bergamota, Neroli, Leche, Tiaré, Flores Blancas, Ylang-Ylang, Coco, Vainilla, Guayaco, Ládano", description: "Floral y cremoso. Una fragancia luminosa con leche, flores blancas y un fondo de vainilla.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/veneno_bianco.webp", decantImage: "img/perfumes/veneno_bianco2.webp", cardImage: "img/perfumes/veneno_bianco.webp", featured: false, badge: null, badgeText: "" },
    { id: 10, name: "Veneno", brand: "French Avenue", category: "arabe", gender: "unisex", notes: "Manzana, Canela, Humo, Tabaco, Musgo, Vainilla Bourbon, Orcanox", description: "Seductor y ahumado. Manzana crujiente con tabaco y un fondo cálido de vainilla bourbon.", fullSizes: { "100ml": 190 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/veneno.webp", decantImage: "img/perfumes/veneno2.webp", cardImage: "img/perfumes/veneno.webp", featured: false, badge: null, badgeText: "" },
    { id: 11, name: "Mango Ice", brand: "Gulf Orchid", category: "arabe", gender: "unisex", notes: "Jengibre, Mango, Limón, Ruibarbo, Flores Blancas, Ámbar, Regaliz, Almizcle, Caramelo, Vainilla", description: "Tropical y refrescante. Mango jugoso con un toque de jengibre y un fondo goloso.", fullSizes: { "100ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/mango_ice.webp", decantImage: "img/perfumes/mango_ice2.webp", cardImage: "img/perfumes/mango_ice.webp", featured: false, badge: null, badgeText: "" },
    { id: 12, name: "Freeze", brand: "Riiffs", category: "arabe", gender: "unisex", notes: "Menta Verde, Bergamota, Limón, Pomelo, Hielo, Jengibre, Té, Salvia, Peonía, Ambermax, Cedro", description: "Ultra refrescante. Menta helada con cítricos y un corazón de té verde.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/freeze.webp", decantImage: "img/perfumes/freeze2.webp", cardImage: "img/perfumes/freeze.webp", featured: false, badge: null, badgeText: "" },
    { id: 13, name: "Beach Party", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Frutas Tropicales, Pomelo, Agua de Mar, Guayaba, Almizcle, Notas Amaderadas", description: "Veraniego y divertido. Frutas tropicales con notas marinas que evocan un día de playa.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/beach_party.webp", decantImage: "img/perfumes/beach_party2.webp", cardImage: "img/perfumes/beach_party.webp", featured: false, badge: null, badgeText: "" },
    { id: 14, name: "Your Touch Intense", brand: "Maison Alhambra", category: "arabe", gender: "unisex", notes: "Pimienta Rosa, Violeta, Enebro, Toffee, Canela, Lavanda, Salvia, Vainilla, Haba Tonka, Ámbar, Gamuza", description: "Oriental y goloso. Toffee dulce con canela y lavanda sobre una base de vainilla y gamuza.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/your_touch_intense.webp", decantImage: "img/perfumes/your_touch_intense2.webp", cardImage: "img/perfumes/your_touch_intense.webp", featured: false, badge: null, badgeText: "" },
    { id: 15, name: "Hawas Lava Gold", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Piña, Manzana, Pomelo, Limón, Azafrán, Cuero, Oud, Frambuesa, Caramelo, Ámbar, Pachulí, Musgo", description: "Frutal y lujoso. Piña y manzana con azafrán, cuero y un fondo de caramelo y ámbar.", fullSizes: { "100ml": 225 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_lava_gold.webp", decantImage: "img/perfumes/hawas_lava_gold2.webp", cardImage: "img/perfumes/hawas_lava_gold.webp", featured: false, badge: "top", badgeText: "Top" },
    { id: 16, name: "Hawas Thunder", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Manzana, Bergamota, Jengibre, Cedro, Mandarina, Mate, Peonía, Azahar, Pachulí, Ámbar, Vainilla, Almizcle", description: "Energético y vibrante. Manzana fresca con jengibre y un corazón floral sobre maderas.", fullSizes: { "100ml": 225 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_thunder.webp", decantImage: "img/perfumes/hawas_thunder2.webp", cardImage: "img/perfumes/hawas_thunder.webp", featured: false, badge: null, badgeText: "" },
    { id: 17, name: "Hawas Viper", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Cannabis, Azafrán, Tomillo, Davana, Tabaco, Café, Frambuesa, Canela, Violeta, Haba Tonka, Almizcle", description: "Oscuro y provocativo. Cannabis y azafrán con tabaco y café sobre una base de tonka.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_viper.webp", decantImage: "img/perfumes/hawas_viper2.webp", cardImage: "img/perfumes/hawas_viper.webp", featured: false, badge: null, badgeText: "" },
    { id: 18, name: "Hawas Exotic", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Artemisa, Coco, Lavanda, Cardamomo, Zanahoria, Bergamota, Jazmín, Freesia, Lirio, Canela, Almizcle, Pachulí, Benjuí", description: "Exótico y envolvente. Coco cremoso con artemisa y un corazón floral especiado.", fullSizes: { "100ml": 225 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_exotic.webp", decantImage: "img/perfumes/hawas_exotic2.webp", cardImage: "img/perfumes/hawas_exotic.webp", featured: false, badge: null, badgeText: "" },
    { id: 19, name: "Hawas for Him", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Manzana, Bergamota, Limón, Canela, Flor de Azahar, Cardamomo, Ciruela, Pachulí, Ámbar Gris, Almizcle", description: "Acuático y vigorizante. Manzana y cítricos con canela sobre una base marina ambarada.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_for_him.webp", decantImage: "img/perfumes/hawas_for_him2.webp", cardImage: "img/perfumes/hawas_for_him.webp", featured: true, badge: "top", badgeText: "Top" },
    { id: 20, name: "Hawas Black", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Bergamota, Piña, Pomelo, Pachulí, Cedro, Jazmín, Musgo de Roble, Notas Amaderadas, Ámbar", description: "Fresco y profundo. Piña y pomelo con un corazón de jazmín sobre musgo de roble.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_black.webp", decantImage: "img/perfumes/hawas_black2.webp", cardImage: "img/perfumes/hawas_black.webp", featured: false, badge: null, badgeText: "" },
    { id: 21, name: "Hawas Tropical", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Frutas Tropicales, Coco, Bergamota, Jazmín, Vainilla, Sándalo, Almizcle", description: "Paraíso tropical en un frasco. Frutas exóticas con coco y un fondo amaderado.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_tropical.webp", decantImage: "img/perfumes/hawas_tropical2.webp", cardImage: "img/perfumes/hawas_tropical.webp", featured: false, badge: null, badgeText: "" },
    { id: 22, name: "Hawas Ice", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Manzana, Limón, Bergamota, Anís Estrellado, Ciruela, Flor de Azahar, Cardamomo, Almizcle, Ámbar, Musgo", description: "Helado y revitalizante. Manzana congelada con anís y un corazón floral especiado.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_ice.webp", decantImage: "img/perfumes/hawas_ice2.webp", cardImage: "img/perfumes/hawas_ice.webp", featured: false, badge: null, badgeText: "" },
    { id: 23, name: "Hawas Kobra", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Bergamota, Mandarina, Jengibre, Té Verde, Canela, Neroli, Madera, Almizcle, Ámbar", description: "Cítrico y especiado. Jengibre y té verde con mandarina sobre maderas limpias.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_kobra.webp", decantImage: "img/perfumes/hawas_kobra2.webp", cardImage: "img/perfumes/hawas_kobra.webp", featured: false, badge: null, badgeText: "" },
    { id: 24, name: "Hawas Elixir", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Nuez Moscada, Cardamomo, Canela, Lavanda, Cuero, Pachulí, Vainilla, Ládano, Ámbar", description: "Intenso y magnético. Especias cálidas con cuero y un fondo de vainilla y ámbar.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_elixir.webp", decantImage: "img/perfumes/hawas_elixir2.webp", cardImage: "img/perfumes/hawas_elixir.webp", featured: false, badge: null, badgeText: "" },
    { id: 25, name: "Hawas Malibu", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Coco, Piña, Cítricos, Notas Marinas, Jazmín, Sándalo, Almizcle, Ámbar", description: "Playero y relajado. Coco y piña con brisa marina sobre un fondo amaderado.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_malibu.webp", decantImage: "img/perfumes/hawas_malibu2.webp", cardImage: "img/perfumes/hawas_malibu.webp", featured: false, badge: null, badgeText: "" },
    { id: 26, name: "Hawas Fire", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Pimienta, Canela, Nuez Moscada, Cuero, Tabaco, Ámbar, Pachulí, Vainilla, Almizcle", description: "Cálido y ardiente. Especias intensas con tabaco y cuero sobre una base ambarada.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_fire.webp", decantImage: "img/perfumes/hawas_fire2.webp", cardImage: "img/perfumes/hawas_fire.webp", featured: false, badge: null, badgeText: "" },
    { id: 27, name: "Hawas Verde", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Hojas Verdes, Bergamota, Manzana, Violeta, Jazmín, Cedro, Musgo, Almizcle", description: "Fresco y natural. Notas verdes con manzana crujiente sobre un fondo de cedro.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_verde.webp", decantImage: "img/perfumes/hawas_verde2.webp", cardImage: "img/perfumes/hawas_verde.webp", featured: false, badge: null, badgeText: "" },
    { id: 28, name: "Hawas Atlantis", brand: "Rasasi", category: "arabe", gender: "masculino", notes: "Notas Marinas, Bergamota, Limón, Lavanda, Romero, Sándalo, Ámbar Gris, Almizcle", description: "Oceánico y profundo. Brisa marina con lavanda sobre un fondo de ámbar gris.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_atlantis.webp", decantImage: "img/perfumes/hawas_atlantis2.webp", cardImage: "img/perfumes/hawas_atlantis.webp", featured: false, badge: null, badgeText: "" },
    { id: 29, name: "Supremacy Not Only Intense", brand: "Afnan", category: "arabe", gender: "masculino", notes: "Grosella Negra, Bergamota, Manzana, Lavanda, Pachulí, Musgo de Roble, Azafrán, Almizcle, Ámbar Gris", description: "Frutal y musgoso. Grosella negra y manzana con un corazón de lavanda sobre musgo de roble.", fullSizes: { "150ml": 225 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/supremacy_not_only_intense.webp", decantImage: "img/perfumes/supremacy_not_only_intense2.webp", cardImage: "img/perfumes/supremacy_not_only_intense.webp", featured: true, badge: "top", badgeText: "Top" },
    { id: 30, name: "Supremacy Collector's Edition", brand: "Afnan", category: "arabe", gender: "masculino", notes: "Piña, Bergamota, Manzana, Flores Blancas, Flor de Azahar, Abedul, Ámbar, Musgo de Roble, Almizcle, Ámbar Gris", description: "Frutal y elegante. Piña jugosa con flores blancas sobre una base de musgo de roble.", fullSizes: { "100ml": 225 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/supremacy_collectors.webp", decantImage: "img/perfumes/supremacy_collectors2.webp", cardImage: "img/perfumes/supremacy_collectors.webp", featured: false, badge: null, badgeText: "" },
    { id: 31, name: "Khamrah", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Canela, Nuez Moscada, Bergamota, Dátiles, Praliné, Tuberosa, Vainilla, Haba Tonka, Benjuí, Mirra", description: "Cálido y goloso. Canela y dátiles con praliné sobre una base de vainilla y benjuí.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/khamrah.webp", decantImage: "img/perfumes/khamrah2.webp", cardImage: "img/perfumes/khamrah.webp", featured: true, badge: "top", badgeText: "Top" },
    { id: 32, name: "Khamrah Qahwa", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Canela, Cardamomo, Jengibre, Praliné, Frutas Confitadas, Flores Blancas, Vainilla, Café, Haba Tonka, Benjuí, Almizcle", description: "Gourmand y adictivo. Café árabe con canela y cardamomo sobre praliné y vainilla.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/khamrah_qahwa.webp", decantImage: "img/perfumes/khamrah_qahwa2.webp", cardImage: "img/perfumes/khamrah_qahwa.webp", featured: false, badge: null, badgeText: "" },
    { id: 33, name: "Khamrah Dukhan", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Incienso, Canela, Dátiles, Praliné, Vainilla, Haba Tonka, Ámbar, Madera de Oud", description: "Ahumado y dulce. Incienso y dátiles con un toque de oud sobre vainilla.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/khamrah_dukhan.webp", decantImage: "img/perfumes/khamrah_dukhan2.webp", cardImage: "img/perfumes/khamrah_dukhan.webp", featured: false, badge: null, badgeText: "" },
    { id: 34, name: "The Kingdom", brand: "Lattafa", category: "arabe", gender: "masculino", notes: "Salvia, Lavanda, Menta, Tabaco, Vainilla, Flor de Azahar, Benjuí, Haba Tonka, Ládano", description: "Aromático y real. Lavanda y menta con tabaco y vainilla sobre una base resinosa.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/the_kingdom.webp", decantImage: "img/perfumes/the_kingdom2.webp", cardImage: "img/perfumes/the_kingdom.webp", featured: false, badge: null, badgeText: "" },
    { id: 35, name: "Liquid Brun", brand: "French Avenue", category: "arabe", gender: "unisex", notes: "Canela, Flor de Azahar, Cardamomo, Bergamota, Vainilla Bourbon, Elemí, Praliné, Ambroxan, Guayaco, Almizcle", description: "Gourmand y especiado. Canela y cardamomo con vainilla bourbon sobre praliné.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/liquid_brun.webp", decantImage: "img/perfumes/liquid_brun2.webp", cardImage: "img/perfumes/liquid_brun.webp", featured: false, badge: null, badgeText: "" },
    { id: 36, name: "Vintage Radio", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Lavanda, Salvia, Bergamota, Ciruela, Palo Santo, Pimienta Negra, Sándalo, Amberwood", description: "Amaderado y nostálgico. Lavanda y ciruela con palo santo sobre sándalo.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/vintage_radio.webp", decantImage: "img/perfumes/vintage_radio2.webp", cardImage: "img/perfumes/vintage_radio.webp", featured: false, badge: null, badgeText: "" },
    { id: 37, name: "His Confession", brand: "Lattafa", category: "arabe", gender: "masculino", notes: "Mandarina, Canela, Lavanda, Iris, Benjuí, Ciprés, Vainilla, Haba Tonka, Ámbar, Incienso, Cedro, Pachulí", description: "Oriental y complejo. Canela y mandarina con iris sobre incienso y vainilla.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/his_confession.webp", decantImage: "img/perfumes/his_confession2.webp", cardImage: "img/perfumes/his_confession.webp", featured: false, badge: null, badgeText: "" },
    { id: 38, name: "Sceptre Malachite", brand: "Maison Alhambra", category: "arabe", gender: "unisex", notes: "Mandarina Verde, Bergamota, Grosella Negra, Notas Aromáticas, Especias, Jazmín, Pimienta Rosa, Lavanda, Ámbar, Almizcle, Vetiver", description: "Cítrico y especiado. Mandarina verde con grosella negra sobre un fondo almizclado.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/sceptre_malachite.webp", decantImage: "img/perfumes/sceptre_malachite2.webp", cardImage: "img/perfumes/sceptre_malachite.webp", featured: false, badge: null, badgeText: "" },
    { id: 39, name: "Arabian Sky", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Bergamota, Manzana, Canela, Jazmín, Rosa, Pachulí, Sándalo, Ámbar, Almizcle", description: "Fresco y oriental. Manzana y canela con un corazón floral sobre maderas cálidas.", fullSizes: { "100ml": 205 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/arabian_sky.webp", decantImage: "img/perfumes/arabian_sky2.webp", cardImage: "img/perfumes/arabian_sky.webp", featured: false, badge: null, badgeText: "" },
    { id: 40, name: "Afeef", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Azafrán, Rosa, Oud, Ámbar, Sándalo, Almizcle, Vainilla", description: "Oriental y lujoso. Azafrán y rosa con oud sobre una base de sándalo y vainilla.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/afeef.webp", decantImage: "img/perfumes/afeef2.webp", cardImage: "img/perfumes/afeef.webp", featured: false, badge: null, badgeText: "" },
    { id: 41, name: "Vulcan Feu", brand: "French Avenue", category: "arabe", gender: "unisex", notes: "Pimienta Negra, Canela, Tabaco, Cuero, Vainilla, Ámbar, Pachulí, Almizcle", description: "Ardiente y magnético. Pimienta y canela con tabaco y cuero sobre vainilla.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/vulcan_feu.webp", decantImage: "img/perfumes/vulcan_feu2.webp", cardImage: "img/perfumes/vulcan_feu.webp", featured: false, badge: null, badgeText: "" },
    { id: 42, name: "Island", brand: "Khadlaj", category: "arabe", gender: "unisex", notes: "Coco, Piña, Notas Marinas, Jazmín, Vainilla, Sándalo, Almizcle", description: "Paraíso isleño. Coco y piña con brisa marina sobre un fondo amaderado.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/island.webp", decantImage: "img/perfumes/island2.webp", cardImage: "img/perfumes/island.webp", featured: false, badge: null, badgeText: "" },
    { id: 43, name: "9 PM", brand: "Afnan", category: "arabe", gender: "masculino", notes: "Manzana, Canela, Lavanda, Bergamota, Flor de Azahar, Lirio del Valle, Vainilla, Haba Tonka, Ámbar, Pachulí", description: "Dulce y adictivo. Manzana y canela con un corazón floral sobre vainilla y ámbar.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/9_pm.webp", decantImage: "img/perfumes/9_pm2.webp", cardImage: "img/perfumes/9_pm.webp", featured: true, badge: "top", badgeText: "Top" },
    { id: 44, name: "9 AM Dive", brand: "Afnan", category: "arabe", gender: "masculino", notes: "Cítricos, Manzana Verde, Notas Acuáticas, Lavanda, Geranio, Almizcle, Ámbar, Sándalo", description: "Fresco matutino. Cítricos y manzana verde con notas acuáticas sobre almizcle.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/9_am_dive.webp", decantImage: "img/perfumes/9_am_dive2.webp", cardImage: "img/perfumes/9_am_dive.webp", featured: false, badge: null, badgeText: "" },
    { id: 45, name: "9 PM Rebel", brand: "Afnan", category: "arabe", gender: "unisex", notes: "Mandarina, Piña, Manzana Verde, Cedro, Musgo de Roble, Vainilla, Caramelo, Ámbar Gris, Almizcle", description: "Rebelde y frutal. Mandarina y piña con cedro sobre caramelo y ámbar.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/9_pm_rebel.webp", decantImage: "img/perfumes/9_pm_rebel2.webp", cardImage: "img/perfumes/9_pm_rebel.webp", featured: false, badge: null, badgeText: "" },
    { id: 46, name: "9 PM Elixir", brand: "Afnan", category: "arabe", gender: "masculino", notes: "Nuez Moscada, Elemí, Cardamomo, Pimiento, Lavandín, Cuero, Ládano, Pachulí, Vainilla", description: "Intenso y especiado. Cardamomo y nuez moscada con cuero sobre ládano y vainilla.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/9_pm_elixir.webp", decantImage: "img/perfumes/9_pm_elixir2.webp", cardImage: "img/perfumes/9_pm_elixir.webp", featured: false, badge: null, badgeText: "" },
    { id: 47, name: "9 PM Night Out", brand: "Afnan", category: "arabe", gender: "masculino", notes: "Bergamota, Pimienta Negra, Lavanda, Violeta, Vainilla, Ámbar, Pachulí, Almizcle", description: "Nocturno y seductor. Bergamota y pimienta con lavanda sobre un fondo oriental.", fullSizes: { "100ml": 205 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/9_pm_night_out.webp", decantImage: "img/perfumes/9_pm_night_out2.webp", cardImage: "img/perfumes/9_pm_night_out.webp", featured: false, badge: null, badgeText: "" },
    { id: 48, name: "Opulent Dubai", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Azafrán, Rosa, Oud, Ámbar, Sándalo, Almizcle, Vainilla, Pachulí", description: "Lujoso y opulento. Azafrán y rosa con oud sobre una base de sándalo.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/opulent_dubai.webp", decantImage: "img/perfumes/opulent_dubai2.webp", cardImage: "img/perfumes/opulent_dubai.webp", featured: false, badge: null, badgeText: "" },
    { id: 49, name: "Odyssey Mandarin Sky", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Mandarina, Bergamota, Neroli, Jazmín, Vainilla, Almizcle, Ámbar", description: "Cítrico celestial. Mandarina jugosa con neroli sobre vainilla y almizcle.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_mandarin_sky.webp", decantImage: "img/perfumes/odyssey_mandarin_sky2.webp", cardImage: "img/perfumes/odyssey_mandarin_sky.webp", featured: false, badge: null, badgeText: "" },
    { id: 50, name: "Odyssey Mandarin Sky Elixir", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Mandarina, Bergamota, Cardamomo, Jazmín, Rosa, Vainilla, Ámbar, Almizcle, Oud", description: "Cítrico intenso. Mandarina y cardamomo con rosa sobre oud y vainilla.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_mandarin_sky_elixir.webp", decantImage: "img/perfumes/odyssey_mandarin_sky_elixir2.webp", cardImage: "img/perfumes/odyssey_mandarin_sky_elixir.webp", featured: false, badge: null, badgeText: "" },
    { id: 51, name: "Odyssey Mandarin Sky Vintage", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Mandarina, Limón, Lavanda, Romero, Musgo de Roble, Sándalo, Ámbar, Almizcle", description: "Clásico renovado. Mandarina y lavanda con musgo de roble sobre sándalo.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_mandarin_sky_vintage.webp", decantImage: "img/perfumes/odyssey_mandarin_sky_vintage2.webp", cardImage: "img/perfumes/odyssey_mandarin_sky_vintage.webp", featured: false, badge: null, badgeText: "" },
    { id: 52, name: "Odyssey Limoni Fresh", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Limón, Bergamota, Jengibre, Lavanda, Geranio, Vetiver, Cedro, Almizcle", description: "Ultra cítrico. Limón vibrante con jengibre sobre un fondo de vetiver.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_limoni_fresh.webp", decantImage: "img/perfumes/odyssey_limoni_fresh2.webp", cardImage: "img/perfumes/odyssey_limoni_fresh.webp", featured: false, badge: null, badgeText: "" },
    { id: 53, name: "Odyssey Homme Black Edition", brand: "Armaf", category: "arabe", gender: "masculino", notes: "Bergamota, Manzana, Canela, Jazmín, Rosa, Pachulí, Sándalo, Ámbar, Almizcle", description: "Masculino y versátil. Manzana y canela con un corazón floral sobre pachulí.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_homme_edition.webp", decantImage: "img/perfumes/odyssey_homme_edition2.webp", cardImage: "img/perfumes/odyssey_homme_edition.webp", featured: false, badge: null, badgeText: "" },
    { id: 54, name: "Odyssey Homme White Edition", brand: "Armaf", category: "arabe", gender: "masculino", notes: "Limón, Bergamota, Lavanda, Jazmín, Cedro, Vetiver, Almizcle Blanco, Ámbar", description: "Luminoso y limpio. Cítricos frescos con lavanda sobre almizcle blanco.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_homme_white.webp", decantImage: "img/perfumes/odyssey_homme_white2.webp", cardImage: "img/perfumes/odyssey_homme_white.webp", featured: false, badge: null, badgeText: "" },
    { id: 55, name: "Odyssey BA HA MAS", brand: "Armaf", category: "arabe", gender: "masculino", notes: "Pimienta, Bergamota, Lavanda, Cardamomo, Sándalo, Cedro, Ámbar, Almizcle", description: "Especiado y oriental. Pimienta y cardamomo con sándalo sobre almizcle.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_ba_ha_mas.webp", decantImage: "img/perfumes/odyssey_ba_ha_mas2.webp", cardImage: "img/perfumes/odyssey_ba_ha_mas.webp", featured: false, badge: null, badgeText: "" },
    { id: 56, name: "Odyssey Aqua Edition", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Notas Acuáticas, Bergamota, Limón, Lavanda, Jazmín, Almizcle, Ámbar, Cedro", description: "Acuático y fresco. Notas marinas con cítricos sobre un fondo de cedro.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_aqua.webp", decantImage: "img/perfumes/odyssey_aqua2.webp", cardImage: "img/perfumes/odyssey_aqua.webp", featured: false, badge: null, badgeText: "" },
    { id: 57, name: "Odyssey Go Mango", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Mango, Piña, Bergamota, Coco, Jazmín, Vainilla, Sándalo, Almizcle", description: "Tropical y jugoso. Mango y piña con coco sobre vainilla.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_go_mango.webp", decantImage: "img/perfumes/odyssey_go_mango2.webp", cardImage: "img/perfumes/odyssey_go_mango.webp", featured: false, badge: null, badgeText: "" },
    { id: 58, name: "Odyssey Artistico", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Bergamota, Mandarina, Canela, Jazmín, Rosa, Pachulí, Vainilla, Ámbar, Almizcle", description: "Artístico y floral. Mandarina y canela con rosa sobre pachulí.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_artistico.webp", decantImage: "img/perfumes/odyssey_artistico2.webp", cardImage: "img/perfumes/odyssey_artistico.webp", featured: false, badge: null, badgeText: "" },
    { id: 59, name: "Odyssey Toffee Coffee", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Café, Toffee, Bergamota, Canela, Vainilla, Haba Tonka, Ámbar, Sándalo", description: "Gourmand y cálido. Café y toffee con canela sobre vainilla y haba tonka.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_toffee_coffee.webp", decantImage: "img/perfumes/odyssey_toffee_coffee2.webp", cardImage: "img/perfumes/odyssey_toffee_coffee.webp", featured: false, badge: null, badgeText: "" },
    { id: 60, name: "Odyssey Mega", brand: "Armaf", category: "arabe", gender: "masculino", notes: "Piña, Bergamota, Grosella Negra, Jazmín, Pachulí, Musgo de Roble, Ámbar, Almizcle", description: "Potente y frutal. Piña y grosella negra con jazmín sobre musgo de roble.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_mega.webp", decantImage: "img/perfumes/odyssey_mega2.webp", cardImage: "img/perfumes/odyssey_mega.webp", featured: false, badge: null, badgeText: "" },
    { id: 61, name: "Asad Bourbon", brand: "Lattafa", category: "arabe", gender: "masculino", notes: "Pimienta Negra, Bourbon, Tabaco, Vainilla, Ámbar, Cedro, Almizcle", description: "Cálido y licoroso. Bourbon y tabaco con pimienta negra sobre vainilla.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/asad_bourbon.webp", decantImage: "img/perfumes/asad_bourbon2.webp", cardImage: "img/perfumes/asad_bourbon.webp", featured: false, badge: null, badgeText: "" },
    { id: 62, name: "Asad Elixir", brand: "Lattafa", category: "arabe", gender: "masculino", notes: "Bergamota, Cardamomo, Pimienta Rosa, Cedro, Pachulí, Rosa, Oud, Almizcle, Ámbar", description: "Intenso y amaderado. Cardamomo y pimienta con oud sobre cedro y almizcle.", fullSizes: { "100ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/asad_elixir.webp", decantImage: "img/perfumes/asad_elixir2.webp", cardImage: "img/perfumes/asad_elixir.webp", featured: false, badge: null, badgeText: "" },
    { id: 63, name: "Asad Zanzibar", brand: "Lattafa", category: "arabe", gender: "masculino", notes: "Lavanda, Pimienta Negra, Vainilla, Iris, Ámbar, Almizcle, Notas Amaderadas", description: "Exótico y especiado. Lavanda y pimienta negra con vainilla sobre iris.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/asad_zanzibar.webp", decantImage: "img/perfumes/asad_zanzibar2.webp", cardImage: "img/perfumes/asad_zanzibar.webp", featured: false, badge: null, badgeText: "" },
    { id: 64, name: "Asad", brand: "Lattafa", category: "arabe", gender: "masculino", notes: "Pimienta Negra, Piña, Tabaco, Café, Pachulí, Iris, Vainilla, Ámbar, Benjuí, Ládano", description: "Legendario y audaz. Piña y tabaco con café sobre vainilla y ámbar.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/asad.webp", decantImage: "img/perfumes/asad2.webp", cardImage: "img/perfumes/asad.webp", featured: true, badge: "top", badgeText: "Top" },
    { id: 65, name: "Nitro Red", brand: "Dumont Paris", category: "arabe", gender: "masculino", notes: "Bergamota, Lavanda, Manzana, Sandía, Cedro, Cálamo, Sándalo, Pachulí, Ámbar", description: "Energético y frutal. Manzana y sandía con lavanda sobre sándalo.", fullSizes: { "100ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/nitro_red.webp", decantImage: "img/perfumes/nitro_red2.webp", cardImage: "img/perfumes/nitro_red.webp", featured: false, badge: null, badgeText: "" },
    { id: 66, name: "Nitro Red Intensely", brand: "Dumont Paris", category: "arabe", gender: "masculino", notes: "Canela, Coñac, Haba Tonka, Clavo, Roble, Sándalo, Vainilla, Ámbar", description: "Intenso y especiado. Coñac y canela con clavo sobre vainilla.", fullSizes: { "100ml": 205 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/nitro_red_intensely.webp", decantImage: "img/perfumes/nitro_red_intensely2.webp", cardImage: "img/perfumes/nitro_red_intensely.webp", featured: false, badge: null, badgeText: "" },
    { id: 67, name: "Nitro Elixir", brand: "Dumont Paris", category: "arabe", gender: "masculino", notes: "Cardamomo, Canela, Lavanda, Cuero, Pachulí, Vainilla, Ámbar, Almizcle", description: "Elixir magnético. Cardamomo y canela con cuero sobre pachulí.", fullSizes: { "100ml": 205 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/nitro_elixir.webp", decantImage: "img/perfumes/nitro_elixir2.webp", cardImage: "img/perfumes/nitro_elixir.webp", featured: false, badge: null, badgeText: "" },
    { id: 68, name: "Nitro White", brand: "Dumont Paris", category: "arabe", gender: "masculino", notes: "Limón, Bergamota, Lavanda, Pimienta Negra, Cardamomo, Cedro, Vetiver, Almizcle", description: "Fresco y limpio. Cítricos brillantes con lavanda sobre vetiver.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/nitro_white.webp", decantImage: "img/perfumes/nitro_white2.webp", cardImage: "img/perfumes/nitro_white.webp", featured: false, badge: null, badgeText: "" },
    { id: 69, name: "Club de Nuit Intense Man", brand: "Armaf", category: "arabe", gender: "masculino", notes: "Limón, Piña, Grosella Negra, Bergamota, Manzana, Abedul, Jazmín, Rosa, Almizcle, Ámbar Gris, Pachulí, Vainilla", description: "El legendario clon premium. Piña ahumada con grosella negra sobre ámbar gris.", fullSizes: { "105ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/club_de_nuit_intense_man.webp", decantImage: "img/perfumes/club_de_nuit_intense_man2.webp", cardImage: "img/perfumes/club_de_nuit_intense_man.webp", featured: true, badge: "top", badgeText: "Top" },
    { id: 70, name: "Club de Nuit Sillage", brand: "Armaf", category: "arabe", gender: "masculino", notes: "Bergamota, Limón, Grosella Negra, Jazmín, Rosa, Pachulí, Almizcle, Ámbar, Vainilla", description: "Estela impecable. Cítricos y grosella negra con rosa sobre almizcle.", fullSizes: { "105ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/club_de_nuit_sillage.webp", decantImage: "img/perfumes/club_de_nuit_sillage2.webp", cardImage: "img/perfumes/club_de_nuit_sillage.webp", featured: false, badge: null, badgeText: "" },
    { id: 71, name: "Club de Nuit Urban Elixir", brand: "Armaf", category: "arabe", gender: "masculino", notes: "Bergamota, Pimienta Negra, Lavanda, Geranio, Pachulí, Cedro, Ámbar, Almizcle", description: "Urbano y moderno. Pimienta y bergamota con lavanda sobre cedro.", fullSizes: { "105ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/club_de_nuit_urban_elixir.webp", decantImage: "img/perfumes/club_de_nuit_urban_elixir2.webp", cardImage: "img/perfumes/club_de_nuit_urban_elixir.webp", featured: false, badge: null, badgeText: "" },
    { id: 72, name: "Club de Nuit Blue Iconic", brand: "Armaf", category: "arabe", gender: "masculino", notes: "Bergamota, Limón, Notas Acuáticas, Lavanda, Jazmín, Cedro, Sándalo, Almizcle", description: "Azul e icónico. Cítricos acuáticos con lavanda sobre sándalo.", fullSizes: { "105ml": 205 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/club_de_nuit_blue_iconic.webp", decantImage: "img/perfumes/club_de_nuit_blue_iconic2.webp", cardImage: "img/perfumes/club_de_nuit_blue_iconic.webp", featured: false, badge: null, badgeText: "" },
    { id: 73, name: "Club de Nuit Untold", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Azafrán, Jazmín, Cedro, Ámbar, Almizcle, Vainilla", description: "Misterioso y oriental. Azafrán y jazmín sobre ámbar y vainilla.", fullSizes: { "105ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/club_de_nuit_untold.webp", decantImage: "img/perfumes/club_de_nuit_untold2.webp", cardImage: "img/perfumes/club_de_nuit_untold.webp", featured: false, badge: null, badgeText: "" },
    { id: 74, name: "Club de Nuit Milestone", brand: "Armaf", category: "arabe", gender: "unisex", notes: "Bergamota, Limón, Notas Marinas, Jazmín, Violeta, Sándalo, Ámbar, Almizcle", description: "Acuático y limpio. Notas marinas con jazmín sobre sándalo.", fullSizes: { "105ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/club_de_nuit_milestone.webp", decantImage: "img/perfumes/club_de_nuit_milestone2.webp", cardImage: "img/perfumes/club_de_nuit_milestone.webp", featured: false, badge: null, badgeText: "" },
    { id: 75, name: "Bade'e Al Oud Sublime", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Manzana, Lichi, Rosa, Ciruela, Jazmín, Musgo, Vainilla, Pachulí", description: "Frutal y musgoso. Manzana y lichi con ciruela sobre vainilla.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/badee_al_oud_sublime.webp", decantImage: "img/perfumes/badee_al_oud_sublime2.webp", cardImage: "img/perfumes/badee_al_oud_sublime.webp", featured: false, badge: null, badgeText: "" },
    { id: 76, name: "Bade'e Al Oud Amethyst", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Rosa, Jazmín, Azafrán, Oud, Ámbar, Vainilla, Almizcle", description: "Floral y oud. Rosa y jazmín con azafrán sobre oud aterciopelado.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/badee_al_oud_amethyst.webp", decantImage: "img/perfumes/badee_al_oud_amethyst2.webp", cardImage: "img/perfumes/badee_al_oud_amethyst.webp", featured: false, badge: null, badgeText: "" },
    { id: 77, name: "Bade'e Al Oud Honor & Glory", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Piña, Bergamota, Azafrán, Canela, Jazmín, Oud, Vainilla, Ámbar, Almizcle", description: "Glorioso y frutal. Piña y canela con azafrán sobre oud.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/badee_al_oud_honor_glory.webp", decantImage: "img/perfumes/badee_al_oud_honor_glory2.webp", cardImage: "img/perfumes/badee_al_oud_honor_glory.webp", featured: false, badge: null, badgeText: "" },
    { id: 78, name: "Glacier Le Noir", brand: "Maison Alhambra", category: "arabe", gender: "masculino", notes: "Bergamota, Cardamomo, Lavanda, Iris, Vainilla, Notas Orientales, Maderas", description: "Oscuro y elegante. Lavanda e iris con cardamomo sobre vainilla.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/glacier_le_noir.webp", decantImage: "img/perfumes/glacier_le_noir2.webp", cardImage: "img/perfumes/glacier_le_noir.webp", featured: false, badge: null, badgeText: "" },
    { id: 79, name: "Amber Oud Aqua Dubai", brand: "Al Haramain", category: "arabe", gender: "unisex", notes: "Bergamota, Limón, Notas Acuáticas, Jazmín, Rosa, Ámbar, Almizcle, Sándalo", description: "Acuático y lujoso. Cítricos con notas acuáticas sobre ámbar y sándalo.", fullSizes: { "100ml": 265 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/amber_oud_aqua_dubai.webp", decantImage: "img/perfumes/amber_oud_aqua_dubai2.webp", cardImage: "img/perfumes/amber_oud_aqua_dubai.webp", featured: false, badge: null, badgeText: "" },
    { id: 80, name: "Amber Oud Gold Edition", brand: "Al Haramain", category: "arabe", gender: "unisex", notes: "Bergamota, Melón, Piña, Jazmín, Rosa, Ámbar, Almizcle, Vainilla, Sándalo", description: "Dorado y afrutado. Melón y piña con rosa sobre ámbar dorado.", fullSizes: { "120ml": 250 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/amber_oud_gold_edition.webp", decantImage: "img/perfumes/amber_oud_gold_edition2.webp", cardImage: "img/perfumes/amber_oud_gold_edition.webp", featured: false, badge: null, badgeText: "" },
    { id: 81, name: "Amber Oud Gold Edition Extreme", brand: "Al Haramain", category: "arabe", gender: "unisex", notes: "Bergamota, Melón, Piña, Jazmín, Rosa, Ámbar, Almizcle, Vainilla, Oud, Sándalo", description: "Extremo y lujoso. Versión intensificada con oud sobre ámbar dorado.", fullSizes: { "100ml": 295 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/amber_oud_gold_extreme.webp", decantImage: "img/perfumes/amber_oud_gold_extreme2.webp", cardImage: "img/perfumes/amber_oud_gold_extreme.webp", featured: false, badge: null, badgeText: "" },
    { id: 82, name: "Bharara King", brand: "Bharara", category: "arabe", gender: "masculino", notes: "Bergamota, Manzana, Canela, Jazmín, Rosa, Pachulí, Ámbar, Almizcle, Vainilla", description: "Majestuoso y oriental. Manzana y canela con rosa sobre pachulí.", fullSizes: { "100ml": 250 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/bharara_king.webp", decantImage: "img/perfumes/bharara_king2.webp", cardImage: "img/perfumes/bharara_king.webp", featured: false, badge: null, badgeText: "" },
    { id: 83, name: "Art of Universe", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Bergamota, Notas Verdes, Jazmín, Violeta, Cedro, Sándalo, Ámbar, Almizcle", description: "Cósmico y verde. Notas verdes con jazmín sobre cedro.", fullSizes: { "100ml": 225 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/art_of_universe.webp", decantImage: "img/perfumes/art_of_universe2.webp", cardImage: "img/perfumes/art_of_universe.webp", featured: false, badge: null, badgeText: "" },
    { id: 84, name: "Pisa", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Mandarina, Bergamota, Lavanda, Jazmín, Cedro, Vetiver, Ámbar, Almizcle", description: "Italiano y fresco. Mandarina con lavanda sobre vetiver.", fullSizes: { "100ml": 225 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/pisa.webp", decantImage: "img/perfumes/pisa2.webp", cardImage: "img/perfumes/pisa.webp", featured: false, badge: null, badgeText: "" },
    { id: 85, name: "Yeah! Man", brand: "Maison Alhambra", category: "arabe", gender: "masculino", notes: "Bergamota, Manzana, Lavanda, Geranio, Cedro, Sándalo, Vainilla, Almizcle", description: "Energético y moderno. Manzana y lavanda sobre cedro y vainilla.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/yeah_man.webp", decantImage: "img/perfumes/yeah_man2.webp", cardImage: "img/perfumes/yeah_man.webp", featured: false, badge: null, badgeText: "" },
    { id: 86, name: "Salvo", brand: "Maison Alhambra", category: "arabe", gender: "masculino", notes: "Bergamota, Limón, Lavanda, Pimienta Negra, Geranio, Cedro, Pachulí, Almizcle", description: "Audaz y fresco. Limón y pimienta negra con lavanda sobre pachulí.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/salvo.webp", decantImage: "img/perfumes/salvo2.webp", cardImage: "img/perfumes/salvo.webp", featured: false, badge: null, badgeText: "" },
    { id: 87, name: "Jasoor", brand: "Lattafa", category: "arabe", gender: "masculino", notes: "Bergamota, Manzana, Canela, Jazmín, Rosa, Pachulí, Ámbar, Almizcle, Vainilla", description: "Audaz y oriental. Manzana y canela con rosa sobre vainilla.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/jasoor.webp", decantImage: "img/perfumes/jasoor2.webp", cardImage: "img/perfumes/jasoor.webp", featured: false, badge: null, badgeText: "" },
    { id: 88, name: "Ishq Al Shuyukh Silver", brand: "Lattafa", category: "arabe", gender: "unisex", notes: "Bergamota, Azafrán, Rosa, Oud, Ámbar, Sándalo, Almizcle, Vainilla", description: "Plateado y noble. Azafrán y rosa con oud sobre sándalo.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/ishq_al_shuyukh_silver.webp", decantImage: "img/perfumes/ishq_al_shuyukh_silver2.webp", cardImage: "img/perfumes/ishq_al_shuyukh_silver.webp", featured: false, badge: null, badgeText: "" },
    { id: 89, name: "Liam Blue Shine", brand: "Lattafa", category: "arabe", gender: "masculino", notes: "Bergamota, Limón, Notas Acuáticas, Lavanda, Jazmín, Sándalo, Almizcle, Ámbar", description: "Azul y brillante. Cítricos acuáticos con lavanda sobre sándalo.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/liam_blue_shine.webp", decantImage: "img/perfumes/liam_blue_shine2.webp", cardImage: "img/perfumes/liam_blue_shine.webp", featured: false, badge: null, badgeText: "" },
    { id: 90, name: "Tag Him Uomo Rosso", brand: "Armaf", category: "arabe", gender: "masculino", notes: "Bergamota, Manzana, Canela, Jazmín, Cedro, Pachulí, Ámbar, Almizcle", description: "Italiano y apasionado. Manzana y canela con jazmín sobre cedro.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/tag_him_uomo_rosso.webp", decantImage: "img/perfumes/tag_him_uomo_rosso2.webp", cardImage: "img/perfumes/tag_him_uomo_rosso.webp", featured: false, badge: null, badgeText: "" },
    { id: 91, name: "Nautica Voyage", brand: "Nautica", category: "disenador", gender: "masculino", notes: "Manzana Verde, Hojas Verdes, Mimosa, Loto, Notas Acuáticas, Cedro, Ámbar, Almizcle", description: "Clásico acuático. Manzana verde y loto con brisa marina sobre cedro.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/nautica_voyage.webp", decantImage: "img/perfumes/nautica_voyage2.webp", cardImage: "img/perfumes/nautica_voyage.webp", featured: false, badge: null, badgeText: "" },
    { id: 92, name: "Lovely Cherie", brand: "Maison Alhambra", category: "arabe", gender: "femenino", notes: "Cereza, Almendra, Rosa, Jazmín, Vainilla, Sándalo, Almizcle", description: "Dulce y encantador. Cereza y almendra con rosa sobre vainilla.", fullSizes: { "80ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/lovely_cherie.webp", decantImage: "img/perfumes/lovely_cherie2.webp", cardImage: "img/perfumes/lovely_cherie.webp", featured: false, badge: null, badgeText: "" },
    { id: 93, name: "Qaed Al Fursan", brand: "Lattafa", category: "arabe", gender: "masculino", notes: "Piña, Bergamota, Jazmín, Cedro, Ámbar, Almizcle, Vainilla", description: "Legendario y frutal. Piña jugosa con jazmín sobre ámbar.", fullSizes: { "90ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/qaed_al_fursan.webp", decantImage: "img/perfumes/qaed_al_fursan2.webp", cardImage: "img/perfumes/qaed_al_fursan.webp", featured: false, badge: null, badgeText: "" },
    { id: 94, name: "Fakhar Black", brand: "Lattafa", category: "arabe", gender: "masculino", notes: "Manzana, Bergamota, Lavanda, Geranio, Cedro, Haba Tonka, Ámbar, Almizcle", description: "Orgulloso y elegante. Manzana y lavanda sobre cedro y haba tonka.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/fakhar_black.webp", decantImage: "img/perfumes/fakhar_black2.webp", cardImage: "img/perfumes/fakhar_black.webp", featured: false, badge: null, badgeText: "" },
    { id: 95, name: "Chapter I King of Kings", brand: "King of Kings", category: "deluxe", gender: "masculino", notes: "Azafrán, Oud, Rosa, Ámbar, Sándalo, Almizcle, Pachulí", description: "Soberano y majestuoso. Azafrán y rosa con oud real sobre sándalo.", fullSizes: { "100ml": 259 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/chapter_i_king_of_kings.webp", decantImage: "img/perfumes/chapter_i_king_of_kings2.webp", cardImage: "img/perfumes/chapter_i_king_of_kings.webp", featured: false, badge: null, badgeText: "" },
    { id: 96, name: "Chapter II King of Kings", brand: "King of Kings", category: "deluxe", gender: "masculino", notes: "Bergamota, Canela, Cuero, Tabaco, Vainilla, Ámbar, Almizcle, Cedro", description: "Sucesor audaz. Canela y cuero con tabaco sobre vainilla.", fullSizes: { "100ml": 259 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/chapter_ii_king_of_kings.webp", decantImage: "img/perfumes/chapter_ii_king_of_kings2.webp", cardImage: "img/perfumes/chapter_ii_king_of_kings.webp", featured: false, badge: null, badgeText: "" },
    { id: 97, name: "Royal Crown", brand: "King of Kings", category: "deluxe", gender: "masculino", notes: "Azafrán, Bergamota, Jazmín, Oud, Ámbar, Sándalo, Almizcle, Vainilla", description: "Corona real. Azafrán y jazmín con oud sobre sándalo.", fullSizes: { "100ml": 259 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/royal_crown.webp", decantImage: "img/perfumes/royal_crown2.webp", cardImage: "img/perfumes/royal_crown.webp", featured: false, badge: null, badgeText: "" },
    { id: 98, name: "Royal Amber", brand: "King of Kings", category: "deluxe", gender: "masculino", notes: "Ámbar, Bergamota, Canela, Rosa, Pachulí, Cedro, Almizcle, Vainilla", description: "Ámbar soberano. Cálido y envolvente con canela y rosa sobre pachulí.", fullSizes: { "100ml": 259 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/royal_amber.webp", decantImage: "img/perfumes/royal_amber2.webp", cardImage: "img/perfumes/royal_amber.webp", featured: false, badge: null, badgeText: "" },
    { id: 99, name: "Game of Spades Full House", brand: "Jo Milano Paris", category: "deluxe", gender: "unisex", notes: "Bergamota, Manzana, Canela, Jazmín, Cedro, Ámbar, Almizcle, Vainilla", description: "Mano ganadora. Manzana y canela con jazmín sobre ámbar.", fullSizes: { "100ml": 299 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/game_of_spades_full_house.webp", decantImage: "img/perfumes/game_of_spades_full_house2.webp", cardImage: "img/perfumes/game_of_spades_full_house.webp", featured: false, badge: null, badgeText: "" },
    { id: 100, name: "Game of Spades Royale", brand: "Jo Milano Paris", category: "deluxe", gender: "unisex", notes: "Azafrán, Rosa, Oud, Ámbar, Sándalo, Almizcle, Vainilla, Pachulí", description: "As bajo la manga. Azafrán y rosa con oud sobre sándalo.", fullSizes: { "100ml": 299 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/game_of_spades_royale.webp", decantImage: "img/perfumes/game_of_spades_royale2.webp", cardImage: "img/perfumes/game_of_spades_royale.webp", featured: false, badge: null, badgeText: "" },
    { id: 101, name: "Game of Spades Win", brand: "Jo Milano Paris", category: "deluxe", gender: "unisex", notes: "Limón, Bergamota, Lavanda, Geranio, Cedro, Vetiver, Almizcle, Ámbar", description: "Triunfador fresco. Limón y lavanda sobre cedro y vetiver.", fullSizes: { "100ml": 299 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/game_of_spades_win.webp", decantImage: "img/perfumes/game_of_spades_win2.webp", cardImage: "img/perfumes/game_of_spades_win.webp", featured: false, badge: null, badgeText: "" },
    { id: 102, name: "Game of Spades Wildcard", brand: "Jo Milano Paris", category: "deluxe", gender: "unisex", notes: "Pimienta Negra, Bergamota, Canela, Cuero, Tabaco, Vainilla, Ámbar, Almizcle", description: "Comodín audaz. Pimienta y canela con cuero sobre vainilla.", fullSizes: { "100ml": 299 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/game_of_spades_wildcard.webp", decantImage: "img/perfumes/game_of_spades_wildcard2.webp", cardImage: "img/perfumes/game_of_spades_wildcard.webp", featured: false, badge: null, badgeText: "" },
    { id: 103, name: "Game of Spades Double Bonus", brand: "Jo Milano Paris", category: "deluxe", gender: "unisex", notes: "Manzana, Bergamota, Azafrán, Jazmín, Rosa, Ámbar, Oud, Almizcle", description: "Doble recompensa. Manzana y azafrán con rosa sobre oud.", fullSizes: { "100ml": 320 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/game_of_spades_double_bonus.webp", decantImage: "img/perfumes/game_of_spades_double_bonus2.webp", cardImage: "img/perfumes/game_of_spades_double_bonus.webp", featured: false, badge: null, badgeText: "" },
    { id: 104, name: "Game of Spades Opal", brand: "Jo Milano Paris", category: "deluxe", gender: "unisex", notes: "Coco, Piña, Bergamota, Jazmín, Vainilla, Sándalo, Almizcle, Ámbar", description: "Joya tropical. Coco y piña con jazmín sobre vainilla.", fullSizes: { "100ml": 320 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/game_of_spades_opal.webp", decantImage: "img/perfumes/game_of_spades_opal2.webp", cardImage: "img/perfumes/game_of_spades_opal.webp", featured: false, badge: null, badgeText: "" },
    { id: 105, name: "Game of Spades Emerald", brand: "Jo Milano Paris", category: "deluxe", gender: "unisex", notes: "Hojas Verdes, Bergamota, Violeta, Jazmín, Cedro, Musgo, Almizcle, Ámbar", description: "Esmeralda verde. Notas verdes con violeta sobre cedro.", fullSizes: { "100ml": 320 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/game_of_spades_emerald.webp", decantImage: "img/perfumes/game_of_spades_emerald2.webp", cardImage: "img/perfumes/game_of_spades_emerald.webp", featured: false, badge: null, badgeText: "" },
    { id: 106, name: "Game of Spades Diamond", brand: "Jo Milano Paris", category: "deluxe", gender: "unisex", notes: "Bergamota, Mandarina, Jazmín, Rosa, Pachulí, Ámbar, Almizcle, Vainilla", description: "Diamante puro. Mandarina y jazmín con rosa sobre pachulí.", fullSizes: { "100ml": 330 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/game_of_spades_diamond.webp", decantImage: "img/perfumes/game_of_spades_diamond2.webp", cardImage: "img/perfumes/game_of_spades_diamond.webp", featured: false, badge: null, badgeText: "" },
    { id: 107, name: "Game of Spades Bonus", brand: "Jo Milano Paris", category: "deluxe", gender: "unisex", notes: "Bergamota, Canela, Lavanda, Geranio, Cedro, Ámbar, Almizcle, Vainilla", description: "Bono aromático. Canela y lavanda sobre cedro y ámbar.", fullSizes: { "100ml": 320 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/game_of_spades_bonus.webp", decantImage: "img/perfumes/game_of_spades_bonus2.webp", cardImage: "img/perfumes/game_of_spades_bonus.webp", featured: false, badge: null, badgeText: "" },
    { id: 108, name: "Game of Spades All In", brand: "Jo Milano Paris", category: "deluxe", gender: "unisex", notes: "Azafrán, Oud, Rosa, Ámbar, Sándalo, Almizcle, Pachulí, Vainilla", description: "Apuesta total. Azafrán y oud con rosa sobre sándalo.", fullSizes: { "100ml": 320 }, decantSizes: { "2ml": 14.90, "3ml": 19.90, "5ml": 24.90, "10ml": 44.90, "30ml": 109.90 }, fullImage: "img/perfumes/game_of_spades_all_in.webp", decantImage: "img/perfumes/game_of_spades_all_in2.webp", cardImage: "img/perfumes/game_of_spades_all_in.webp", featured: false, badge: null, badgeText: "" },
    { id: 109, name: "Yara", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Orquídea, Heliotropo, Vainilla, Sándalo, Almizcle, Frutos Rojos", description: "Dulce y empolvado. Orquídea y vainilla con un toque de frutos rojos sobre sándalo.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/yara.webp", decantImage: "img/perfumes/yara2.webp", cardImage: "img/perfumes/yara.webp", featured: false, badge: null, badgeText: "" },
    { id: 110, name: "Yara Candy", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Caramelo, Fresas, Vainilla, Almizcle, Praliné, Sándalo", description: "Golosina irresistible. Caramelo y fresas con un fondo de praliné.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/yara_candy.webp", decantImage: "img/perfumes/yara_candy2.webp", cardImage: "img/perfumes/yara_candy.webp", featured: false, badge: null, badgeText: "" },
    { id: 111, name: "Yara Tous", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Bergamota, Mandarina, Jazmín, Rosa, Vainilla, Almizcle", description: "Cítrico floral. Mandarina y bergamota con un corazón de jazmín y rosa.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/yara_tous.webp", decantImage: "img/perfumes/yara_tous2.webp", cardImage: "img/perfumes/yara_tous.webp", featured: false, badge: null, badgeText: "" },
    { id: 112, name: "Yara Moi", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Pimienta Rosa, Jazmín, Vainilla, Cedro, Almizcle, Ámbar", description: "Seductor y especiado. Pimienta rosa y jazmín sobre vainilla y cedro.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/yara_moi.webp", decantImage: "img/perfumes/yara_moi2.webp", cardImage: "img/perfumes/yara_moi.webp", featured: false, badge: null, badgeText: "" },
    { id: 113, name: "Yara Elixir", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Pimienta Rosa, Jazmín, Vainilla, Pachulí, Ámbar, Almizcle", description: "Intenso y adictivo. Jazmín y pimienta rosa realzados con pachulí.", fullSizes: { "100ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/yara_elixir.webp", decantImage: "img/perfumes/yara_elixir2.webp", cardImage: "img/perfumes/yara_elixir.webp", featured: false, badge: null, badgeText: "" },
    { id: 114, name: "Yara Collection Pack", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Variadas (Yara, Yara Candy, Yara Tous)", description: "Pack especial con las tres Yara originales en presentación 20ml cada una.", fullSizes: { "Full set": 225 }, decantSizes: { "U. 25ml": 65 }, fullImage: "img/perfumes/yara_pack.webp", decantImage: "img/perfumes/yara_pack.webp", cardImage: "img/perfumes/yara_pack.webp", featured: false, badge: "new", badgeText: "Nuevo" },
    { id: 115, name: "Nebras", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Frutas Rojas, Jazmín, Vainilla, Sándalo, Almizcle, Pachulí", description: "Frutal profundo. Frutos rojos con jazmín sobre un fondo amaderado.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/nebras.webp", decantImage: "img/perfumes/nebras2.webp", cardImage: "img/perfumes/nebras.webp", featured: false, badge: null, badgeText: "" },
    { id: 116, name: "Eclaire", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Bergamota, Pimienta Rosa, Jazmín, Vainilla, Haba Tonka, Ámbar", description: "Luminoso y cálido. Pimienta rosa y jazmín con haba tonka.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/eclaire.webp", decantImage: "img/perfumes/eclaire2.webp", cardImage: "img/perfumes/eclaire.webp", featured: false, badge: null, badgeText: "" },
    { id: 117, name: "Angham", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Azafrán, Rosa, Vainilla, Ámbar, Almizcle, Sándalo", description: "Floral oriental. Rosa y azafrán sobre una base cálida de vainilla.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/angham.webp", decantImage: "img/perfumes/angham2.webp", cardImage: "img/perfumes/angham.webp", featured: false, badge: null, badgeText: "" },
    { id: 118, name: "Her Confession", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Pimienta Rosa, Jazmín, Vainilla, Cedro, Ámbar, Almizcle Blanco", description: "Confesión floral. Pimienta rosa y jazmín con un velo de almizcle blanco.", fullSizes: { "100ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/her_confession.webp", decantImage: "img/perfumes/her_confession2.webp", cardImage: "img/perfumes/her_confession.webp", featured: false, badge: null, badgeText: "" },
    { id: 119, name: "Mayar", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Pimienta Rosa, Bergamota, Jazmín, Rosa, Vainilla, Almizcle", description: "Energía floral. Bergamota y pimienta rosa con un bouquet de jazmín.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/mayar.webp", decantImage: "img/perfumes/mayar2.webp", cardImage: "img/perfumes/mayar.webp", featured: false, badge: null, badgeText: "" },
    { id: 120, name: "Mayar Cherry", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Cereza, Almendra, Jazmín, Vainilla, Sándalo, Almizcle", description: "Cereza jugosa. Cereza y almendra con jazmín sobre sándalo.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/mayar_cherry.webp", decantImage: "img/perfumes/mayar_cherry2.webp", cardImage: "img/perfumes/mayar_cherry.webp", featured: false, badge: null, badgeText: "" },
    { id: 121, name: "Now Women", brand: "Rave", category: "arabe", gender: "femenino", notes: "Mandarina, Bergamota, Jazmín, Rosa, Vainilla, Almizcle", description: "Fresco y juvenil. Cítricos con un corazón floral suave.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/now_women.webp", decantImage: "img/perfumes/now_women2.webp", cardImage: "img/perfumes/now_women.webp", featured: false, badge: null, badgeText: "" },
    { id: 122, name: "Fakhar Rose", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Rosa, Jazmín, Vainilla, Sándalo, Almizcle, Ámbar", description: "Orgullo floral. Rosa y jazmín exquisitos sobre un lecho de vainilla.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/fakhar_rose.webp", decantImage: "img/perfumes/fakhar_rose2.webp", cardImage: "img/perfumes/fakhar_rose.webp", featured: false, badge: null, badgeText: "" },
    { id: 123, name: "Kismet Magic", brand: "Maison Alhambra", category: "arabe", gender: "femenino", notes: "Pimienta Rosa, Jazmín, Vainilla, Pachulí, Ámbar, Almizcle", description: "Magia oriental. Jazmín y pimienta rosa sobre pachulí ambarado.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/kismet_magic.webp", decantImage: "img/perfumes/kismet_magic2.webp", cardImage: "img/perfumes/kismet_magic.webp", featured: false, badge: null, badgeText: "" },
    { id: 124, name: "Odyssey Candee", brand: "Armaf", category: "arabe", gender: "femenino", notes: "Caramelo, Mandarina, Jazmín, Vainilla, Sándalo, Almizcle", description: "Dulce y vibrante. Caramelo con mandarina sobre un fondo amaderado.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/odyssey_candee.webp", decantImage: "img/perfumes/odyssey_candee2.webp", cardImage: "img/perfumes/odyssey_candee.webp", featured: false, badge: null, badgeText: "" },
    { id: 125, name: "Qaed Al Fursan Unlimited", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Piña, Bergamota, Jazmín, Cedro, Ámbar, Almizcle", description: "Frescor infinito. Piña jugosa con bergamota sobre cedro.", fullSizes: { "90ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/qaed_al_fursan_unlimited.webp", decantImage: "img/perfumes/qaed_al_fursan_unlimited2.webp", cardImage: "img/perfumes/qaed_al_fursan_unlimited.webp", featured: false, badge: null, badgeText: "" },
    { id: 126, name: "Noble Blush", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Pimienta Rosa, Rosa, Jazmín, Vainilla, Almizcle, Ámbar", description: "Rubor noble. Rosa y pimienta rosa con un velo de vainilla.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/noble_blush.webp", decantImage: "img/perfumes/noble_blush2.webp", cardImage: "img/perfumes/noble_blush.webp", featured: false, badge: null, badgeText: "" },
    { id: 127, name: "Hawas Pink", brand: "Rasasi", category: "arabe", gender: "femenino", notes: "Frutas Tropicales, Jazmín, Vainilla, Sándalo, Almizcle, Ámbar", description: "Diversión rosa. Frutas tropicales con jazmín sobre una base golosa.", fullSizes: { "100ml": 205 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_pink.webp", decantImage: "img/perfumes/hawas_pink2.webp", cardImage: "img/perfumes/hawas_pink.webp", featured: false, badge: null, badgeText: "" },
    { id: 128, name: "Hawas Diva", brand: "Rasasi", category: "arabe", gender: "femenino", notes: "Bergamota, Mandarina, Jazmín, Rosa, Pachulí, Ámbar, Almizcle", description: "Diva radiante. Cítricos y rosas con un toque de pachulí.", fullSizes: { "100ml": 205 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/hawas_diva.webp", decantImage: "img/perfumes/hawas_diva2.webp", cardImage: "img/perfumes/hawas_diva.webp", featured: false, badge: null, badgeText: "" },
    { id: 129, name: "Delilah", brand: "Maison Alhambra", category: "arabe", gender: "femenino", notes: "Pimienta Rosa, Jazmín, Vainilla, Cedro, Almizcle, Ámbar", description: "Feminidad misteriosa. Jazmín y pimienta rosa sobre cedro.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/delilah.webp", decantImage: "img/perfumes/delilah2.webp", cardImage: "img/perfumes/delilah.webp", featured: false, badge: null, badgeText: "" },
    { id: 130, name: "9AM Pour Femme", brand: "Afnan", category: "arabe", gender: "femenino", notes: "Bergamota, Mandarina, Jazmín, Rosa, Vainilla, Almizcle, Ámbar", description: "Frescura matutina femenina. Cítricos brillantes con un corazón floral.", fullSizes: { "100ml": 165 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/9am_pour_femme.webp", decantImage: "img/perfumes/9am_pour_femme2.webp", cardImage: "img/perfumes/9am_pour_femme.webp", featured: false, badge: null, badgeText: "" },
    { id: 131, name: "Rome Yum Yum", brand: "Bharara Mast", category: "arabe", gender: "femenino", notes: "Frutos Rojos, Caramelo, Jazmín, Vainilla, Sándalo, Almizcle", description: "Delicia golosa. Frutos rojos y caramelo con un fondo de vainilla.", fullSizes: { "100ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/rome_yum_yum.webp", decantImage: "img/perfumes/rome_yum_yum2.webp", cardImage: "img/perfumes/rome_yum_yum.webp", featured: false, badge: null, badgeText: "" },
    { id: 132, name: "Rome Pour Femme", brand: "Bharara Mast", category: "arabe", gender: "femenino", notes: "Mandarina, Bergamota, Jazmín, Rosa, Vainilla, Almizcle, Ámbar", description: "Elegancia romana femenina. Cítricos y flores blancas con un toque de ámbar.", fullSizes: { "100ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/rome_pour_femme.webp", decantImage: "img/perfumes/rome_pour_femme2.webp", cardImage: "img/perfumes/rome_pour_femme.webp", featured: false, badge: null, badgeText: "" },
    { id: 133, name: "Club de Nuit Woman", brand: "Armaf", category: "arabe", gender: "femenino", notes: "Bergamota, Geranio, Rosa, Jazmín, Vainilla, Pachulí, Almizcle", description: "La mujer icónica. Rosa y geranio con pachulí sobre vainilla.", fullSizes: { "105ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/club_de_nuit_woman.webp", decantImage: "img/perfumes/club_de_nuit_woman2.webp", cardImage: "img/perfumes/club_de_nuit_woman.webp", featured: false, badge: null, badgeText: "" },
    { id: 134, name: "Club de Nuit Maleka", brand: "Armaf", category: "arabe", gender: "femenino", notes: "Mandarina, Jazmín, Rosa, Ámbar, Almizcle, Vainilla, Sándalo", description: "Reina nocturna. Mandarina y rosa sobre un fondo de ámbar real.", fullSizes: { "105ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/club_de_nuit_maleka.webp", decantImage: "img/perfumes/club_de_nuit_maleka2.webp", cardImage: "img/perfumes/club_de_nuit_maleka.webp", featured: false, badge: null, badgeText: "" },
    { id: 135, name: "Vulcan Baie", brand: "French Avenue", category: "arabe", gender: "unisex", notes: "Grosella Negra, Bergamota, Jazmín, Vainilla, Ámbar, Almizcle", description: "Bayas volcánicas. Grosella negra y bergamota con jazmín.", fullSizes: { "100ml": 185 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/vulcan_baie.webp", decantImage: "img/perfumes/vulcan_baie2.webp", cardImage: "img/perfumes/vulcan_baie.webp", featured: false, badge: null, badgeText: "" },
    { id: 136, name: "Yum Yum", brand: "Armaf", category: "arabe", gender: "femenino", notes: "Melocotón, Caramelo, Jazmín, Vainilla, Sándalo, Almizcle", description: "Dulzura tentadora. Melocotón y caramelo sobre un fondo de vainilla.", fullSizes: { "100ml": 199 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/yum_yum.webp", decantImage: "img/perfumes/yum_yum2.webp", cardImage: "img/perfumes/yum_yum.webp", featured: false, badge: null, badgeText: "" },
    { id: 137, name: "Atheeri", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Azafrán, Rosa, Ámbar, Vainilla, Sándalo, Almizcle", description: "Misterio oriental. Azafrán y rosa sobre un fondo cálido de sándalo.", fullSizes: { "100ml": 199 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/atheeri.webp", decantImage: "img/perfumes/atheeri2.webp", cardImage: "img/perfumes/atheeri.webp", featured: false, badge: null, badgeText: "" },
    { id: 138, name: "Winners Trophy Gold", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Piña, Bergamota, Jazmín, Cedro, Ámbar, Almizcle", description: "Triunfo dorado. Piña y bergamota con un toque amaderado.", fullSizes: { "100ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/winners_trophy_gold.webp", decantImage: "img/perfumes/winners_trophy_gold2.webp", cardImage: "img/perfumes/winners_trophy_gold.webp", featured: false, badge: null, badgeText: "" },
    { id: 139, name: "Eclaire Pistache", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Pistacho, Bergamota, Jazmín, Vainilla, Haba Tonka, Almizcle", description: "Dulzura verde. Pistacho cremoso con bergamota y haba tonka.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/eclaire_pistache.webp", decantImage: "img/perfumes/eclaire_pistache2.webp", cardImage: "img/perfumes/eclaire_pistache.webp", featured: false, badge: null, badgeText: "" },
    { id: 140, name: "Eclaire Banoffi", brand: "Lattafa", category: "arabe", gender: "femenino", notes: "Plátano, Caramelo, Vainilla, Cacao, Ámbar, Almizcle", description: "Postre goloso. Plátano caramelizado con cacao y vainilla.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/eclaire_banoffi.webp", decantImage: "img/perfumes/eclaire_banoffi2.webp", cardImage: "img/perfumes/eclaire_banoffi.webp", featured: false, badge: null, badgeText: "" },
    { id: 141, name: "The Most Wanted Parfum", brand: "Azzaro", category: "disenador", gender: "masculino", notes: "Jengibre, Vainilla Bourbon, Maderas", description: "Intenso y seductor con dulzura especiada.", fullSizes: { "100ml": 345 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/the_most_wanted_parfum.webp", decantImage: "img/perfumes/the_most_wanted_parfum2.webp", cardImage: "img/perfumes/the_most_wanted_parfum.webp", featured: false, badge: null, badgeText: "" },
    { id: 142, name: "The Most Wanted Intense", brand: "Azzaro", category: "disenador", gender: "masculino", notes: "Toffee, Cardamomo, Ámbar", description: "Dulce, potente y nocturno.", fullSizes: { "100ml": 345 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/the_most_wanted_intense.webp", decantImage: "img/perfumes/the_most_wanted_intense2.webp", cardImage: "img/perfumes/the_most_wanted_intense.webp", featured: false, badge: null, badgeText: "" },
    { id: 143, name: "Stronger With You Intensely", brand: "Armani", category: "disenador", gender: "masculino", notes: "Vainilla, Canela, Caramelo", description: "Muy dulce, cálido y envolvente.", fullSizes: { "100ml": 445 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/swy_intensely.webp", decantImage: "img/perfumes/swy_intensely2.webp", cardImage: "img/perfumes/swy_intensely.webp", featured: false, badge: null, badgeText: "" },
    { id: 176, name: "Stronger With You Intensely (Tester)", brand: "Armani", category: "disenador", gender: "masculino", notes: "Vainilla, Canela, Caramelo", description: "Muy dulce, cálido y envolvente. Tester a precio especial.", fullSizes: { "100ml": 395 }, decantSizes: {}, fullImage: "img/perfumes/swy_intensely.webp", decantImage: "img/perfumes/swy_intensely2.webp", cardImage: "img/perfumes/swy_intensely.webp", featured: false, badge: "tester", badgeText: "TESTER", tester: true },
    { id: 144, name: "Stronger With You Powerfully", brand: "Armani", category: "disenador", gender: "masculino", notes: "Ron, Vainilla, Madera", description: "Más profundo y licoroso.", fullSizes: { "100ml": 495 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/swy_Powerfully.webp", decantImage: "img/perfumes/swy_Powerfully2.webp", cardImage: "img/perfumes/swy_Powerfully.webp", featured: false, badge: null, badgeText: "" },
    { id: 145, name: "Born In Roma Purple", brand: "Valentino", category: "disenador", gender: "masculino", notes: "Lavanda, Vainilla, Madera", description: "Elegante con toque moderno.", fullSizes: { "100ml": 550 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/born_in_roma_purple.webp", decantImage: "img/perfumes/born_in_roma_purple2.webp", cardImage: "img/perfumes/born_in_roma_purple.webp", featured: false, badge: null, badgeText: "" },
    { id: 146, name: "Born In Roma Intense", brand: "Valentino", category: "disenador", gender: "masculino", notes: "Vainilla, Lavanda", description: "Más oscuro y sensual.", fullSizes: { "100ml": 525 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/born_in_roma_intense.webp", decantImage: "img/perfumes/born_in_roma_intense2.webp", cardImage: "img/perfumes/born_in_roma_intense.webp", featured: false, badge: null, badgeText: "" },
    { id: 147, name: "Born In Roma Coral Fantasy", brand: "Valentino", category: "disenador", gender: "masculino", notes: "Manzana, Tabaco", description: "Fresco con fondo dulce.", fullSizes: { "100ml": 495 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/coral_fantasy.webp", decantImage: "img/perfumes/coral_fantasy2.webp", cardImage: "img/perfumes/coral_fantasy.webp", featured: false, badge: null, badgeText: "" },
    { id: 148, name: "MYSLF EDP", brand: "Yves Saint Laurent", category: "disenador", gender: "masculino", notes: "Bergamota, Azahar, Madera", description: "Moderno, limpio y elegante.", fullSizes: { "100ml": 495 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/myslf.webp", decantImage: "img/perfumes/myslf2.webp", cardImage: "img/perfumes/myslf.webp", featured: false, badge: null, badgeText: "" },
    { id: 149, name: "Scandal Le Parfum", brand: "Jean Paul Gaultier", category: "disenador", gender: "masculino", notes: "Caramelo, Tonka", description: "Dulce extremo y nocturno.", fullSizes: { "100ml": 450, "150ml": 545 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/scandal_le_parfum.webp", decantImage: "img/perfumes/scandal_le_parfum2.webp", cardImage: "img/perfumes/scandal_le_parfum.webp", featured: false, badge: null, badgeText: "" },
    { id: 150, name: "Eros Flame", brand: "Versace", category: "disenador", gender: "masculino", notes: "Cítricos, Pimienta, Vainilla", description: "Fresco con toque picante.", fullSizes: { "100ml": 350, "200ml": 450 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/eros_flame.webp", decantImage: "img/perfumes/eros_flame2.webp", cardImage: "img/perfumes/eros_flame.webp", featured: false, badge: null, badgeText: "" },
    { id: 151, name: "Acqua Di Giò Profondo Parfum", brand: "Giorgio Armani", category: "disenador", gender: "masculino", notes: "Marino, Aromático", description: "Fresco profundo y elegante.", fullSizes: { "100ml": 445 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/profondo_parfum.webp", decantImage: "img/perfumes/profondo_parfum2.webp", cardImage: "img/perfumes/profondo_parfum.webp", featured: false, badge: null, badgeText: "" },
    { id: 152, name: "Eros EDP", brand: "Versace", category: "disenador", gender: "masculino", notes: "Vainilla, Menta", description: "Más intenso que el EDT.", fullSizes: { "100ml": 350 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/eros_edp.webp", decantImage: "img/perfumes/eros_edp2.webp", cardImage: "img/perfumes/eros_edp.webp", featured: false, badge: null, badgeText: "" },
    { id: 153, name: "Invictus Victory Elixir", brand: "Rabanne", category: "disenador", gender: "masculino", notes: "Ámbar, Vainilla", description: "Muy potente y dulce.", fullSizes: { "100ml": 450, "200ml": 600 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/victory_elixir.webp", decantImage: "img/perfumes/victory_elixir2.webp", cardImage: "img/perfumes/victory_elixir.webp", featured: false, badge: null, badgeText: "" },
    { id: 154, name: "Invictus Parfum", brand: "Rabanne", category: "disenador", gender: "masculino", notes: "Marino, Lavanda", description: "Fresco moderno.", fullSizes: { "100ml": 385 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/invictus_parfum.webp", decantImage: "img/perfumes/invictus_parfum2.webp", cardImage: "img/perfumes/invictus_parfum.webp", featured: false, badge: null, badgeText: "" },
    { id: 155, name: "Le Beau Paradise Garden", brand: "Jean Paul Gaultier", category: "disenador", gender: "masculino", notes: "Coco, Verde", description: "Exótico tropical.", fullSizes: { "125ml": 475 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/le_beau_paradise.webp", decantImage: "img/perfumes/le_beau_paradise2.webp", cardImage: "img/perfumes/le_beau_paradise.webp", featured: false, badge: null, badgeText: "" },
    { id: 156, name: "Le Beau De Toilette", brand: "Jean Paul Gaultier", category: "disenador", gender: "masculino", notes: "Coco, Tonka", description: "Dulce tropical.", fullSizes: { "125ml": 450 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/le_beau_de_toilette.webp", decantImage: "img/perfumes/le_beau_de_toilette2.webp", cardImage: "img/perfumes/le_beau_de_toilette.webp", featured: false, badge: null, badgeText: "" },
    { id: 167, name: "Le Beau Le Parfum", brand: "Jean Paul Gaultier", category: "disenador", gender: "masculino", notes: "Piña, Coco, Haba Tonka, Ámbar, Maderas", description: "Fragancia tropical intensa y seductora. Dulce, cremosa y cálida, con un fondo ambarado y masculino.", fullSizes: { "125ml": 475 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/le_beau_parfum.webp", decantImage: "img/perfumes/le_beau_parfum2.webp", cardImage: "img/perfumes/le_beau_parfum.webp", featured: false, badge: null, badgeText: "" },
    { id: 157, name: "Le Male Le Parfum", brand: "Jean Paul Gaultier", category: "disenador", gender: "masculino", notes: "Vainilla, Cardamomo", description: "Elegante y dulce.", fullSizes: { "125ml": 475, "200ml": 585 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/le_male_parfum.webp", decantImage: "img/perfumes/le_male_parfum2.webp", cardImage: "img/perfumes/le_male_parfum.webp", featured: false, badge: null, badgeText: "" },
    { id: 158, name: "Le Male Elixir", brand: "Jean Paul Gaultier", category: "disenador", gender: "masculino", notes: "Miel, Tabaco", description: "Extremadamente dulce y fuerte.", fullSizes: { "125ml": 485, "200ml": 595 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/le_male_elixir.webp", decantImage: "img/perfumes/le_male_elixir2.webp", cardImage: "img/perfumes/le_male_elixir.webp", featured: false, badge: null, badgeText: "" },
    { id: 159, name: "Y Eau de Parfum", brand: "Yves Saint Laurent", category: "disenador", gender: "masculino", notes: "Manzana, Jengibre", description: "Fresco, limpio y versátil.", fullSizes: { "100ml": 485, "200ml": 645 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/y_edp.webp", decantImage: "img/perfumes/y_edp2.webp", cardImage: "img/perfumes/y_edp.webp", featured: false, badge: null, badgeText: "" },
    { id: 177, name: "Y Eau de Parfum (Tester)", brand: "Yves Saint Laurent", category: "disenador", gender: "masculino", notes: "Manzana, Jengibre", description: "Fresco, limpio y versátil. Tester.", fullSizes: { "100ml": 425 }, decantSizes: {}, fullImage: "img/perfumes/y_edp.webp", decantImage: "img/perfumes/y_edp2.webp", cardImage: "img/perfumes/y_edp.webp", featured: false, badge: "tester", badgeText: "TESTER", tester: true },
    { id: 160, name: "Erba Pura", brand: "Xerjoff", category: "nicho", gender: "unisex", notes: "Frutas, Almizcle, Vainilla", description: "Explosión frutal dulce con gran proyección.", fullSizes: { "100ml": 850 }, decantSizes: { "2ml": 24.90, "3ml": 34.90, "5ml": 64.90, "10ml": 119.90 }, fullImage: "img/perfumes/erba_pura.webp", decantImage: "img/perfumes/erba_pura2.webp", cardImage: "img/perfumes/erba_pura.webp", featured: false, badge: "nicho", badgeText: "NICHO" },
    { id: 161, name: "French Riviera", brand: "Mancera", category: "nicho", gender: "unisex", notes: "Cítricos, Marino, Floral", description: "Fresco, elegante y veraniego.", fullSizes: { "120ml": 550 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/french_riviera.webp", decantImage: "img/perfumes/french_riviera2.webp", cardImage: "img/perfumes/french_riviera.webp", featured: false, badge: "nicho", badgeText: "NICHO" },
    { id: 162, name: "Born In Roma Extradose (Tester)", brand: "Valentino", category: "disenador", gender: "masculino", notes: "Vainilla, Ámbar, Lavanda", description: "Versión más intensa y concentrada. Tester a precio especial.", fullSizes: { "100ml": 455 }, decantSizes: {}, fullImage: "img/perfumes/born_in_roma_extradose.webp", decantImage: "img/perfumes/born_in_roma_extradose2.webp", cardImage: "img/perfumes/born_in_roma_extradose.webp", featured: false, badge: "tester", badgeText: "TESTER", tester: true },
    { id: 163, name: "Stronger With You Parfum (Tester)", brand: "Armani", category: "disenador", gender: "masculino", notes: "Vainilla, Ámbar, Madera", description: "Más refinado y potente que la línea clásica. Tester.", fullSizes: { "100ml": 405 }, decantSizes: {}, fullImage: "img/perfumes/swy_parfum.webp", decantImage: "img/perfumes/swy_parfum2.webp", cardImage: "img/perfumes/swy_parfum.webp", featured: false, badge: "tester", badgeText: "TESTER", tester: true },
    { id: 164, name: "Luna Rossa Ocean EDT (Tester)", brand: "Prada", category: "disenador", gender: "masculino", notes: "Bergamota, Lavanda, Iris", description: "Fresco, limpio y tecnológico. Tester.", fullSizes: { "100ml": 375 }, decantSizes: {}, fullImage: "img/perfumes/luna_rossa_ocean_edt.webp", decantImage: "img/perfumes/luna_rossa_ocean_edt2.webp", cardImage: "img/perfumes/luna_rossa_ocean_edt.webp", featured: false, badge: "tester", badgeText: "TESTER", tester: true },
    { id: 165, name: "Luna Rossa Ocean Le Parfum (Tester)", brand: "Prada", category: "disenador", gender: "masculino", notes: "Ámbar, Vainilla, Madera", description: "Más profundo y elegante que el EDT. Tester.", fullSizes: { "100ml": 395 }, decantSizes: {}, fullImage: "img/perfumes/luna_rossa_ocean_parfum.webp", decantImage: "img/perfumes/luna_rossa_ocean_parfum2.webp", cardImage: "img/perfumes/luna_rossa_ocean_parfum.webp", featured: false, badge: "tester", badgeText: "TESTER", tester: true },
    { id: 166, name: "Versace Pour Homme (Tester)", brand: "Versace", category: "disenador", gender: "masculino", notes: "Cítricos, Neroli, Almizcle", description: "Clásico fresco, limpio y versátil. Tester.", fullSizes: { "100ml": 285 }, decantSizes: {}, fullImage: "img/perfumes/versace_pour_homme.webp", decantImage: "img/perfumes/versace_pour_homme2.webp", cardImage: "img/perfumes/versace_pour_homme.webp", featured: false, badge: "tester", badgeText: "TESTER", tester: true },
    { id: 168, name: "212 VIP Black", brand: "Carolina Herrera", category: "disenador", gender: "masculino", notes: "Absenta, Pimienta Negra, Lavanda, Cuero, Vainilla, Almizcle", description: "Cóctel vibrante y adictivo. La absenta helada y la pimienta negra se mezclan con cuero suave y un fondo cálido de vainilla y almizcle.", fullSizes: { "100ml": 350 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/212_vip_black.webp", decantImage: "img/perfumes/212_vip_black2.webp", cardImage: "img/perfumes/212_vip_black.webp", featured: false, badge: null, badgeText: "" },
    { id: 169, name: "Scandal Absolu", brand: "Jean Paul Gaultier", category: "disenador", gender: "masculino", notes: "Pachulí, Caramelo, Vainilla Bourbon, Benjuí", description: "Oscuro, sensual y embriagador. La intensidad del pachulí se funde con la dulzura golosa del caramelo y la vainilla bourbon, creando una estela magnética y nocturna.", fullSizes: { "100ml": 495 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/scandal_pour_homme_edt.webp", decantImage: "img/perfumes/scandal_pour_homme_edt2.webp", cardImage: "img/perfumes/scandal_pour_homme_edt.webp", featured: false, badge: null, badgeText: "" },
    { id: 170, name: "Scandal Pour Homme EDT", brand: "Jean Paul Gaultier", category: "disenador", gender: "masculino", notes: "Salvia, Notas Verdes, Caramelo, Haba Tonka, Vetiver", description: "Fresco, moderno y adictivo. La salvia vibrante y las notas verdes dan paso a un corazón dulce de caramelo, con un fondo terroso de haba tonka y vetiver.", fullSizes: { "100ml": 400, "150ml": 500 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/scandal_absolu.webp", decantImage: "img/perfumes/scandal_absolu2.webp", cardImage: "img/perfumes/scandal_absolu.webp", featured: false, badge: null, badgeText: "" },
    { id: 171, name: "Acqua Di Giò Profondo EDP", brand: "Giorgio Armani", category: "disenador", gender: "masculino", notes: "Notas Marinas, Bergamota, Romero, Lavanda, Almizcle, Pachulí", description: "La esencia del océano en su máxima expresión. Frescura acuática y cítricos se envuelven en un corazón aromático de romero y lavanda, asentado sobre un fondo mineral de almizcle y pachulí.", fullSizes: { "100ml": 450 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/profondo_edp.webp", decantImage: "img/perfumes/profondo_edp2.webp", cardImage: "img/perfumes/profondo_edp.webp", featured: false, badge: null, badgeText: "" },
    { id: 172, name: "MYSLF Le Parfum", brand: "Yves Saint Laurent", category: "disenador", gender: "masculino", notes: "Vainilla Bourbon, Cuero, Salvia, Azahar, Almizcle Blanco", description: "El refinamiento contemporáneo llevado al extremo. La riqueza de la vainilla bourbon y el cuero suave se fusionan con la frescura de la salvia y un toque luminoso de azahar, creando una firma elegante y profunda.", fullSizes: { "100ml": 495 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 39.90, "10ml": 74.90, "30ml": 199.90 }, fullImage: "img/perfumes/myslf_le_parfum.webp", decantImage: "img/perfumes/myslf_le_parfum2.webp", cardImage: "img/perfumes/myslf_le_parfum.webp", featured: false, badge: null, badgeText: "" },
    { id: 173, name: "Naxos (XJ1861)", brand: "Xerjoff", category: "nicho", gender: "unisex", notes: "Bergamota, Limón, Lavanda, Miel, Canela, Haba Tonka, Tabaco, Vainilla", description: "Una obra maestra de la perfumería de lujo. La frescura cítrica y la lavanda se envuelven en la dulzura embriagadora de la miel y la canela, culminando con un fondo profundamente adictivo de tabaco, haba tonka y vainilla.", fullSizes: { "100ml": 900 }, decantSizes: { "2ml": 29.90, "3ml": 39.90, "5ml": 69.90, "10ml": 129.90 }, fullImage: "img/perfumes/naxos_xerjoff.webp", decantImage: "img/perfumes/naxos_xerjoff2.webp", cardImage: "img/perfumes/naxos_xerjoff.webp", featured: false, badge: null, badgeText: "" },
    { id: 174, name: "Arabians Tonka", brand: "Montale", category: "nicho", gender: "unisex", notes: "Bergamota, Azafrán, Rosa de Damasco, Haba Tonka, Cuero, Ámbar, Almizcle", description: "Exótico y opulento. El azafrán y la rosa se entrelazan con una dosis generosa de haba tonka cremosa, sobre una base cálida de cuero y ámbar, creando un aroma embriagador y oriental.", fullSizes: { "100ml": 550 }, decantSizes: { "2ml": 19.90, "3ml": 29.90, "5ml": 44.90, "10ml": 89.90 }, fullImage: "img/perfumes/arabians_tonka.webp", decantImage: "img/perfumes/arabians_tonka2.webp", cardImage: "img/perfumes/arabians_tonka.webp", featured: false, badge: null, badgeText: "" },
    { id: 175, name: "Island Bliss", brand: "Armaf", category: "arabe", gender: "femenino", notes: "Piña, Coco, Bergamota, Jazmín, Notas Marinas, Vainilla, Sándalo, Almizcle", description: "Un paraíso tropical embotellado. La jugosidad de la piña y el coco se sumerge en una brisa marina fresca, adornada con jazmín y suavizada por un fondo de vainilla y sándalo.", fullSizes: { "100ml": 195 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/island_bliss.webp", decantImage: "img/perfumes/island_bliss2.webp", cardImage: "img/perfumes/island_bliss.webp", featured: false, badge: null, badgeText: "" },
    { id: 178, name: "Erba Gold", brand: "Xerjoff", category: "nicho", gender: "unisex", notes: "Mandarina, Bergamota, Flor de Naranjo, Té Verde, Almizcle, Vainilla, Ámbar", description: "Lujo dorado y luminoso. Cítricos chispeantes y flor de naranjo sobre un fondo cremoso de almizcle y vainilla.", fullSizes: { "100ml": 850 }, decantSizes: { "2ml": 24.90, "3ml": 34.90, "5ml": 64.90, "10ml": 119.90 }, fullImage: "img/perfumes/erba_gold.webp", decantImage: "img/perfumes/erba_gold2.webp", cardImage: "img/perfumes/erba_gold.webp", featured: false, badge: "nicho", badgeText: "NICHO" },
    { id: 179, name: "Liquid Brun Limited Edition", brand: "French Avenue", category: "arabe", gender: "unisex", notes: "Canela, Cardamomo, Flor de Azahar, Vainilla Bourbon, Praliné, Ambroxan, Almizcle", description: "Edición limitada del gourmand favorito. Más profundo, más cremoso y con una estela aún más adictiva.", fullSizes: { "150ml": 225 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/liquid_brun_limited.webp", decantImage: "img/perfumes/liquid_brun_limited2.webp", cardImage: "img/perfumes/liquid_brun_limited.webp", featured: false, badge: "new", badgeText: "Nuevo" },
    { id: 180, name: "Club de Nuit Urban Man", brand: "Armaf", category: "arabe", gender: "masculino", notes: "Bergamota, Limón, Lavanda, Jengibre, Vetiver, Cedro, Almizcle, Ámbar", description: "Frescura urbana y elegante. Cítricos vibrantes con lavanda y jengibre sobre un fondo amaderado y limpio.", fullSizes: { "105ml": 175 }, decantSizes: { "2ml": 11.90, "3ml": 14.90, "5ml": 19.90, "10ml": 34.90, "30ml": 89.90 }, fullImage: "img/perfumes/club_de_nuit_urban_man.webp", decantImage: "img/perfumes/club_de_nuit_urban_man2.webp", cardImage: "img/perfumes/club_de_nuit_urban_man.webp", featured: false, badge: "new", badgeText: "Nuevo" },
  ];
  /* ══════════════════════════════════════════════════════════════
      DATA — PROMOCIONES
   ══════════════════════════════════════════════════════════════ */
  const promos = [
    { id: "group-disenador-3u", type: "group", category: "disenador", name: "3 Decants Diseñador", desc: "Elige el tamaño y 3 perfumes de diseñador.", icon: "⭐", image: "img/promos/disenador_3u.webp", allowedCategories: ["disenador"], quantity: 3, options: [ { size: "2ml", price: 49.90 }, { size: "3ml", price: 79.90 }, { size: "5ml", price: 99.90 }, { size: "10ml", price: 189.90 } ] },
    { id: "group-disenador-5u", type: "group", category: "disenador", name: "5 Decants Diseñador", desc: "Elige el tamaño y 5 perfumes de diseñador.", icon: "⭐", image: "img/promos/disenador_5u.webp", allowedCategories: ["disenador"], quantity: 5, options: [ { size: "2ml", price: 89.90 }, { size: "3ml", price: 129.90 }, { size: "5ml", price: 159.90 }, { size: "10ml", price: 289.90 } ] },
    { id: "group-disenador-10u", type: "group", category: "disenador", name: "10 Decants Diseñador", desc: "Elige el tamaño y 10 perfumes de diseñador.", icon: "⭐", image: "img/promos/disenador_10u.webp", allowedCategories: ["disenador"], quantity: 10, options: [ { size: "2ml", price: 149.90 }, { size: "3ml", price: 229.90 }, { size: "5ml", price: 299.90 }, { size: "10ml", price: 549.90 } ] },
    { id: "group-arabe-fem-3u", type: "group", category: "arabe", name: "3 Decants Árabes Mujer", desc: "Elige el tamaño y 3 perfumes árabes femeninos.", icon: "🕌", image: "img/promos/arabe_fem_3u.webp", allowedCategories: ["arabe"], allowedGenders: ["femenino"], eligibleGenders: ["femenino", "unisex"], quantity: 3, options: [ { size: "2ml", price: 29.90 }, { size: "3ml", price: 39.90 }, { size: "5ml", price: 49.90 }, { size: "10ml", price: 89.90 } ] },
    { id: "group-arabe-fem-5u", type: "group", category: "arabe", name: "5 Decants Árabes Mujer", desc: "Elige el tamaño y 5 perfumes árabes femeninos.", icon: "🕌", image: "img/promos/arabe_fem_5u.webp", allowedCategories: ["arabe"], allowedGenders: ["femenino"], eligibleGenders: ["femenino", "unisex"], quantity: 5, options: [ { size: "2ml", price: 44.90 }, { size: "3ml", price: 59.90 }, { size: "5ml", price: 74.90 }, { size: "10ml", price: 134.90 } ] },
    { id: "group-arabe-fem-10u", type: "group", category: "arabe", name: "10 Decants Árabes Mujer", desc: "Elige el tamaño y 10 perfumes árabes femeninos.", icon: "🕌", image: "img/promos/arabe_fem_10u.webp", allowedCategories: ["arabe"], allowedGenders: ["femenino"], eligibleGenders: ["femenino", "unisex"], quantity: 10, options: [ { size: "2ml", price: 79.90 }, { size: "3ml", price: 99.90 }, { size: "5ml", price: 139.90 }, { size: "10ml", price: 249.90 } ] },
    { id: "group-arabe-mas-3u", type: "group", category: "arabe", name: "3 Decants Árabes Hombre", desc: "Elige el tamaño y 3 perfumes árabes masculinos.", icon: "🕌", image: "img/promos/arabe_mas_3u.webp", allowedCategories: ["arabe"], allowedGenders: ["masculino"], eligibleGenders: ["masculino", "unisex"], quantity: 3, options: [ { size: "2ml", price: 29.90 }, { size: "3ml", price: 39.90 }, { size: "5ml", price: 49.90 }, { size: "10ml", price: 89.90 } ] },
    { id: "group-arabe-mas-5u", type: "group", category: "arabe", name: "5 Decants Árabes Hombre", desc: "Elige el tamaño y 5 perfumes árabes masculinos.", icon: "🕌", image: "img/promos/arabe_mas_5u.webp", allowedCategories: ["arabe"], allowedGenders: ["masculino"], eligibleGenders: ["masculino", "unisex"], quantity: 5, options: [ { size: "2ml", price: 44.90 }, { size: "3ml", price: 59.90 }, { size: "5ml", price: 74.90 }, { size: "10ml", price: 134.90 } ] },
    { id: "group-arabe-mas-10u", type: "group", category: "arabe", name: "10 Decants Árabes Hombre", desc: "Elige el tamaño y 10 perfumes árabes masculinos.", icon: "🕌", image: "img/promos/arabe_mas_10u.webp", allowedCategories: ["arabe"], allowedGenders: ["masculino"], eligibleGenders: ["masculino", "unisex"], quantity: 10, options: [ { size: "2ml", price: 79.90 }, { size: "3ml", price: 99.90 }, { size: "5ml", price: 139.90 }, { size: "10ml", price: 249.90 } ] },
    { id: "group-nicho-3u", type: "group", category: "deluxe", name: "3 Decants Árabes Deluxe", desc: "Elige el tamaño y 3 perfumes Game of Spades o King of Kings.", icon: "💎", image: "img/promos/deluxe_3u.webp", allowedCategories: ["deluxe"], quantity: 3, options: [ { size: "2ml", price: 39.90 }, { size: "3ml", price: 49.90 }, { size: "5ml", price: 74.90 }, { size: "10ml", price: 119.90 } ] },
    { id: "group-nicho-5u", type: "group", category: "deluxe", name: "5 Decants Árabes Deluxe", desc: "Elige el tamaño y 5 perfumes Game of Spades o King of Kings.", icon: "💎", image: "img/promos/deluxe_5u.webp", allowedCategories: ["deluxe"], quantity: 5, options: [ { size: "2ml", price: 54.90 }, { size: "3ml", price: 69.90 }, { size: "5ml", price: 114.90 }, { size: "10ml", price: 184.90 } ] },
    { id: "group-nicho-10u", type: "group", category: "deluxe", name: "10 Decants Árabes Deluxe", desc: "Elige el tamaño y 10 perfumes Game of Spades o King of Kings.", icon: "💎", image: "img/promos/deluxe_10u.webp", allowedCategories: ["deluxe"], quantity: 10, options: [ { size: "2ml", price: 99.90 }, { size: "3ml", price: 109.90 }, { size: "5ml", price: 199.90 }, { size: "10ml", price: 349.90 } ] },
  ];

  /* ══════════════════════════════════════════════════════════════
     CONSTANTES
  ══════════════════════════════════════════════════════════════ */
  const PLACEHOLDER_IMG = "img/perfumes/placeholder.webp";
  const WHATSAPP_NUMBER = "51903283353";
  const SITE_URL = "https://pacofragancias.com/";
  // Modo desarrollo (solo localhost): habilita logs de diagnóstico.
  const IS_DEV = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

  /* ── Google Analytics: envío seguro de eventos (no falla sin ID) ── */
  function track(name, params) {
    try {
      if (typeof window.gtag === "function") window.gtag("event", name, params || {});
    } catch (e) { /* noop */ }
  }

  /* ── SEO dinámico por producto (meta tags al compartir ?producto=ID) ── */
  const META = {};
  function metaEl(sel) { return document.querySelector(sel); }
  function snapshotMeta() {
    META.title = document.title;
    META.desc = metaEl('meta[name="description"]')?.content || "";
    META.ogTitle = metaEl('meta[property="og:title"]')?.content || "";
    META.ogDesc = metaEl('meta[property="og:description"]')?.content || "";
    META.ogImage = metaEl('meta[property="og:image"]')?.content || "";
    META.ogUrl = metaEl('meta[property="og:url"]')?.content || "";
    META.canonical = metaEl('link[rel="canonical"]')?.href || SITE_URL;
  }
  function setMeta(map) {
    if (map.title != null) document.title = map.title;
    const set = (sel, attr, val) => { const el = metaEl(sel); if (el && val != null) el.setAttribute(attr, val); };
    set('meta[name="description"]', "content", map.desc);
    set('meta[property="og:title"]', "content", map.ogTitle);
    set('meta[property="og:description"]', "content", map.ogDesc);
    set('meta[property="og:image"]', "content", map.ogImage);
    set('meta[name="twitter:image"]', "content", map.ogImage);
    set('meta[property="og:url"]', "content", map.ogUrl);
    set('link[rel="canonical"]', "href", map.canonical);
  }
  function setProductMeta(product) {
    const sizes = Object.values(product.decantSizes || {});
    const min = sizes.length ? Math.min(...sizes) : (Object.values(product.fullSizes || {})[0] || null);
    const desde = min ? `Desde ${formatPrice(min)}. ` : "";
    const img = product.cardImage ? SITE_URL + product.cardImage : META.ogImage;
    const url = SITE_URL + "?producto=" + product.id;
    setMeta({
      title: `${product.name} · Paco Fragancias`,
      desc: `Compra ${product.name} de ${product.brand} en decant. ${desde}Envíos a todo el Perú.`,
      ogTitle: `${product.name} · ${product.brand}`,
      ogDesc: `${product.name} de ${product.brand} en decant. ${desde}Paco Fragancias.`,
      ogImage: img,
      ogUrl: url,
      canonical: url,
    });
  }
  function restoreMeta() {
    setMeta({
      title: META.title, desc: META.desc, ogTitle: META.ogTitle, ogDesc: META.ogDesc,
      ogImage: META.ogImage, ogUrl: META.ogUrl, canonical: META.canonical,
    });
  }

  /* Optimización de imágenes:
     Pon esto en `true` SOLO después de ejecutar `node tools/optimize-images.js`,
     que genera las versiones de 400px en img/perfumes_optimized/.
     Mientras esté en `false`, se usa el original de siempre (sin romper nada). */
  const IMG_OPTIMIZED = false;
  const OPTIMIZED_DIR = "img/perfumes_optimized/";
  const IMG_SIZES = "(max-width: 640px) 160px, (max-width: 1024px) 200px, 260px";

  // Devuelve los atributos srcset/sizes para una imagen de producto.
  // Si IMG_OPTIMIZED está desactivado, devuelve cadena vacía (solo se usa src).
  function imgSrcsetAttrs(src) {
    if (!IMG_OPTIMIZED || !src) return "";
    const file = src.split("/").pop();
    const small = OPTIMIZED_DIR + file;
    return ` srcset="${esc(small)} 400w, ${esc(src)} 2048w" sizes="${IMG_SIZES}"`;
  }

  /* ══════════════════════════════════════════════════════════════
     STATE
  ══════════════════════════════════════════════════════════════ */
  let cart = [];
  let activeFilters = { category: null, gender: null };
  let activePromoFilter = null;
  let activePromoGender = null;
  let currentModalProduct = null;
  let currentModalView = "full";
  let currentModalSize = null;
  let currentPage = "home";
  let currentPackPromo = null;
  let selectedPackProducts = [];
  let currentPackIsGroup = false;
  let currentPackGroupSize = null;
  let currentPackGroupQty = null;
  let packGroupPrice = 0;
  /* currentSearchTerm eliminado — búsqueda removida */

  try {
    const saved = localStorage.getItem("paco_cart_v4");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  /* ══════════════════════════════════════════════════════════════
     UTILITIES
  ══════════════════════════════════════════════════════════════ */
  const $ = (id) => document.getElementById(id);

  function saveCart() {
    try { localStorage.setItem("paco_cart_v4", JSON.stringify(cart)); } catch (e) { /* almacenamiento no disponible */ }
  }
  function getCartTotal() {
    return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  }
  function getCartCount() {
    return cart.reduce((sum, i) => sum + i.qty, 0);
  }
  function getProductById(id) {
    return products.find((p) => p.id === id);
  }
  function formatPrice(p) {
    return "S/ " + p.toFixed(2);
  }
  // Escapa texto que se inyecta en HTML para prevenir roturas de markup
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  // Detecta el tipo de toast a partir del emoji inicial del mensaje (retrocompatible).
  function detectToastType(msg) {
    if (/^[⚠️❌🚫]/u.test(msg) || msg.startsWith("⚠")) return "error";
    if (/^[🛒🛍️📲ℹ️]/u.test(msg) || msg.startsWith("🛒") || msg.startsWith("🛍")) return "info";
    return "success";
  }
  const TOAST_ICONS = { success: "✓", error: "✗", info: "ℹ" };
  function showToast(msg, type) {
    const t = $("toast");
    if (!t) return;
    const kind = type || detectToastType(String(msg));
    t.className = "toast toast-" + kind;
    t.innerHTML =
      `<span class="toast-icon" aria-hidden="true">${TOAST_ICONS[kind] || "✓"}</span>` +
      `<span class="toast-msg">${esc(msg)}</span>`;
    // reinicia la animación de entrada
    void t.offsetWidth;
    t.classList.add("show");
    clearTimeout(t._timeout);
    t._timeout = setTimeout(() => t.classList.remove("show"), 2600);
  }
  function pulseCartCount() {
    const el = $("cartCount");
    if (!el) return;
    el.classList.remove("pulse");
    void el.offsetWidth;
    el.classList.add("pulse");
  }
  // Animación: una miniatura "vuela" desde el origen hasta el ícono del carrito.
  function flyToCart(imgSrc, originEl) {
    if (!imgSrc || !originEl) return;
    const cartBtn = $("btnCart");
    if (!cartBtn) return;
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const o = originEl.getBoundingClientRect();
    const c = cartBtn.getBoundingClientRect();
    const startX = o.left + o.width / 2;
    const startY = o.top + o.height / 2;
    const endX = c.left + c.width / 2;
    const endY = c.top + c.height / 2;
    const fly = document.createElement("img");
    fly.src = imgSrc;
    fly.className = "fly-to-cart";
    fly.alt = "";
    fly.setAttribute("aria-hidden", "true");
    fly.style.left = startX - 28 + "px";
    fly.style.top = startY - 28 + "px";
    fly.onerror = () => fly.remove();
    document.body.appendChild(fly);
    requestAnimationFrame(() => {
      fly.style.transform =
        `translate(${endX - startX}px, ${endY - startY}px) scale(.18)`;
      fly.style.opacity = "0.25";
    });
    setTimeout(() => fly.remove(), 650);
  }
  function getCategoryIcon(cat) {
    const icons = {
      arabe: "🕌",
      disenador: "⭐",
      nicho: "💎",
      mixto: "🎁",
    };
    return icons[cat] || "✨";
  }

  /* ══════════════════════════════════════════════════════════════
     CART — CORE LOGIC
  ══════════════════════════════════════════════════════════════ */
  function addToCart(productId, type, size, qty = 1) {
    const product = getProductById(productId);
    if (!product) return;
    const sizes = type === "full" ? product.fullSizes : product.decantSizes;
    if (!sizes || Object.keys(sizes).length === 0) {
      showToast("⚠️ Este producto solo está disponible en presentación completa");
      return;
    }
    const price = sizes[size];
    if (!price) return;
    const existing = cart.find(
      (item) =>
        item.productId === productId &&
        item.size === size &&
        item.type === type,
    );
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        productId,
        type,
        name: product.name,
        brand: product.brand,
        image: type === "full" ? product.fullImage : product.decantImage,
        size,
        price,
        qty,
      });
    }
    saveCart();
    updateCartUI();
    showToast("✅ ¡Añadido al carrito!");
    pulseCartCount();
    track("add_to_cart", { currency: "PEN", value: price * qty, items: [{ item_id: productId, item_name: product.name, item_brand: product.brand, price: price, quantity: qty }] });
  }
  function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
  }
  function updateCartQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    saveCart();
    updateCartUI();
  }
  function updateCartUI() {
    const countEl = $("cartCount");
    if (countEl) countEl.textContent = getCartCount();
    const headerCount = $("cartHeaderCount");
    if (headerCount) {
      const c = getCartCount();
      headerCount.textContent = c;
      headerCount.style.display = c > 0 ? "inline-flex" : "none";
    }
    renderCartItems();
    updateCartFooter();
    if (currentPage === "checkout") renderCheckoutPage();
  }

  /* ══════════════════════════════════════════════════════════════
     CART — RENDER
  ══════════════════════════════════════════════════════════════ */
  function renderCartItems() {
    const container = $("cartItems");
    if (!container) return;
    if (cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <p>Tu carrito está vacío.</p>
          <span>¡Explora nuestra colección y encuentra tu próxima fragancia!</span>
          <button type="button" class="btn-empty-action" data-action="keep-shopping">
            <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Seguir comprando
          </button>
        </div>`;
      return;
    }
    container.innerHTML = cart
      .map((item, i) => {
        const hasGift = item.isPack && item.gift;
        const isMultiPack =
          item.isPack &&
          item.includedProducts &&
          item.includedProducts.length > 0 &&
          !hasGift;
        let imageHtml = "";
        if (!isMultiPack) {
          imageHtml = `<img src="${esc(item.image)}" alt="${esc(item.name)}" loading="lazy" decoding="async" onerror="this.style.display='none'" />`;
          if (hasGift) {
            imageHtml = `
              <div style="position:relative;display:inline-block;">
                ${imageHtml}
                <img src="${esc(item.gift.image)}" alt="${esc(item.gift.name)}" loading="lazy" decoding="async"
                     style="position:absolute;bottom:-4px;right:-4px;width:22px;height:22px;border-radius:50%;border:2px solid white;object-fit:cover;"
                     onerror="this.style.display='none'" />
              </div>`;
          }
        }
        let nameHtml = `<div class="cart-item-name">${esc(item.name)}</div>`;
        let metaHtml = `<div class="cart-item-meta">${esc(item.brand)} · ${item.type === "full" ? "Frasco" : item.type === "decant" ? "Decant" : "Pack"} ${esc(item.size)}</div>`;
        if (hasGift) {
          metaHtml += `<div style="font-size:.7rem;color:var(--gold);margin-top:2px;">🎁 Incluye: ${esc(item.gift.name)} (${esc(item.gift.size)})</div>`;
        }
        let extraProductsHtml = "";
        if (isMultiPack) {
          extraProductsHtml = `
            <div style="display:flex;gap:6px;overflow-x:auto;padding-top:6px;margin-top:6px;border-top:1px dashed var(--border-light);">
              ${item.includedProducts
              .map(
                (p) => `
                <div style="flex:0 0 auto;text-align:center;width:55px;">
                  <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" decoding="async"
                       style="width:36px;height:36px;border-radius:6px;object-fit:cover;display:block;margin:0 auto;"
                       onerror="this.src='${PLACEHOLDER_IMG}'" />
                  <div style="font-size:.62rem;line-height:1.2;margin-top:2px;max-width:55px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-muted);">${esc(p.name)}</div>
                </div>`,
              )
              .join("")}
            </div>`;
        }
        return `
          <div class="cart-item">
            ${imageHtml}
            <div class="cart-item-info">
              ${nameHtml}
              ${metaHtml}
              ${extraProductsHtml}
              <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
            </div>
            <div class="cart-item-qty">
              <button data-action="qty" data-index="${i}" data-delta="-1" aria-label="Restar">−</button>
              <span>${item.qty}</span>
              <button data-action="qty" data-index="${i}" data-delta="1" aria-label="Sumar">+</button>
            </div>
            <button class="cart-item-remove" data-action="remove" data-index="${i}" title="Eliminar" aria-label="Eliminar">🗑</button>
          </div>`;
      })
      .join("");
  }
  function updateCartFooter() {
    const footer = $("cartFooter");
    const total = $("cartTotal");
    if (!footer || !total) return;
    if (cart.length === 0) {
      footer.style.display = "none";
    } else {
      footer.style.display = "block";
      total.textContent = formatPrice(getCartTotal());
    }
  }
  const cartItemsEl = $("cartItems");
  if (cartItemsEl) {
    cartItemsEl.addEventListener("click", function (e) {
      const btn = e.target.closest("button");
      if (!btn) return;
      const action = btn.dataset.action;
      const index = parseInt(btn.dataset.index, 10);
      if (action === "qty") updateCartQty(index, parseInt(btn.dataset.delta, 10));
      else if (action === "remove") {
        const row = btn.closest(".cart-item");
        if (row && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          row.classList.add("removing");
          setTimeout(() => removeFromCart(index), 240);
        } else {
          removeFromCart(index);
        }
      } else if (action === "keep-shopping") closeCart();
    });

    // Swipe-to-delete en móvil: deslizar el item a la izquierda lo elimina.
    let swipeRow = null, startX = 0, startY = 0, dx = 0, locked = null;
    cartItemsEl.addEventListener("touchstart", function (e) {
      const row = e.target.closest(".cart-item");
      if (!row || e.touches.length !== 1) return;
      swipeRow = row; startX = e.touches[0].clientX; startY = e.touches[0].clientY;
      dx = 0; locked = null;
      row.classList.add("swiping");
    }, { passive: true });
    cartItemsEl.addEventListener("touchmove", function (e) {
      if (!swipeRow) return;
      dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      if (locked === null) locked = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (locked !== "x") return;
      const t = Math.min(0, dx); // solo hacia la izquierda
      swipeRow.style.transform = `translateX(${t}px)`;
      swipeRow.style.background = t < -40 ? "rgba(210,75,75,.12)" : "";
    }, { passive: true });
    cartItemsEl.addEventListener("touchend", function () {
      if (!swipeRow) return;
      const row = swipeRow; swipeRow = null;
      row.classList.remove("swiping");
      row.style.background = "";
      if (locked === "x" && dx < -80) {
        const btn = row.querySelector('[data-action="remove"]');
        const idx = btn ? parseInt(btn.dataset.index, 10) : -1;
        row.classList.add("removing");
        setTimeout(() => { if (idx >= 0) removeFromCart(idx); }, 240);
      } else {
        row.classList.add("swipe-reset");
        row.style.transform = "";
        setTimeout(() => row.classList.remove("swipe-reset"), 260);
      }
    });
  }

  /* ══════════════════════════════════════════════════════════════
     CART — OPEN / CLOSE
  ══════════════════════════════════════════════════════════════ */
  function openCart() {
    $("cartOverlay").classList.add("active");
    $("cartSidebar").classList.add("active");
    document.body.style.overflow = "hidden";
    updateCartUI();
  }
  function closeCart() {
    $("cartOverlay").classList.remove("active");
    $("cartSidebar").classList.remove("active");
    document.body.style.overflow = "";
  }
  function goToCheckout() {
    if (cart.length === 0) {
      showToast("🛒 Tu carrito está vacío");
      return;
    }
    track("begin_checkout", { currency: "PEN", value: getCartTotal() });
    closeCart();
    navigateTo("checkout");
  }

  /* ══════════════════════════════════════════════════════════════
     MODAL — PRODUCT
  ══════════════════════════════════════════════════════════════ */
  function openModal(productId, skipHistory) {
    const product = getProductById(productId);
    if (!product) return;
    currentModalProduct = product;
    currentModalView = "full";
    currentModalSize =
      Object.keys(product.fullSizes)[0] || Object.keys(product.decantSizes)[0];
    updateModalContent();
    $("modalOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
    // SEO dinámico + analítica
    setProductMeta(product);
    track("view_item", { item_id: product.id, item_name: product.name, item_brand: product.brand, item_category: product.category });
    // URL compartible: ?producto=ID
    if (!skipHistory) {
      try { history.pushState({ producto: productId }, "", "?producto=" + productId); } catch (e) { /* noop */ }
    }
  }
  function closeModal(skipHistory) {
    $("modalOverlay").classList.remove("active");
    document.body.style.overflow = "";
    currentModalProduct = null;
    restoreMeta();
    if (!skipHistory && /[?&]producto=/.test(location.search)) {
      try { history.pushState({}, "", location.pathname); } catch (e) { /* noop */ }
    }
  }
  function updateModalContent() {
    const product = currentModalProduct;
    if (!product) return;
    // Los testers (y productos sin decants) solo se venden en frasco completo:
    // se oculta la pestaña "Decant" y se fuerza la vista de frasco.
    const hasDecants =
      !product.tester &&
      product.decantSizes &&
      Object.keys(product.decantSizes).length > 0;
    if (!hasDecants) currentModalView = "full";
    const tabSwitch = $("tabSwitch");
    if (tabSwitch) tabSwitch.style.display = hasDecants ? "" : "none";
    const isFull = currentModalView === "full";
    const sizes = isFull ? product.fullSizes : product.decantSizes;
    const image = isFull ? product.fullImage : product.decantImage;
    const modalImg = $("modalImage").querySelector("img");
    modalImg.src = image;
    modalImg.alt = product.name;
    $("modalName").textContent = product.name;
    $("modalBrand").textContent = product.brand;
    $("modalNotes").textContent =
      "✨ " + product.description + "\n\nNotas: " + product.notes;
    $("tabFull").classList.toggle("active", isFull);
    $("tabDecant").classList.toggle("active", !isFull);
    if (!sizes || Object.keys(sizes).length === 0) {
      currentModalSize = null;
    } else {
      if (!sizes[currentModalSize]) currentModalSize = Object.keys(sizes)[0];
    }
    const sizeContainer = $("modalSizes");
    sizeContainer.innerHTML = Object.keys(sizes)
      .map(
        (size) =>
          `<button class="size-option${size === currentModalSize ? " selected" : ""}" data-size="${esc(size)}">${esc(size)}</button>`,
      )
      .join("");
    const price = currentModalSize ? sizes[currentModalSize] : null;
    $("modalPrice").innerHTML = price
      ? `${esc(formatPrice(price))} <span class="price-size-badge">${esc(currentModalSize)}</span>`
      : "Selecciona tamaño";
  }
  $("tabFull").addEventListener("click", function () {
    currentModalView = "full";
    updateModalContent();
  });
  $("tabDecant").addEventListener("click", function () {
    currentModalView = "decant";
    updateModalContent();
  });
  $("modalSizes").addEventListener("click", function (e) {
    const btn = e.target.closest(".size-option");
    if (!btn) return;
    currentModalSize = btn.dataset.size;
    updateModalContent();
  });
  $("modalAddBtn").addEventListener("click", function () {
    if (!currentModalProduct || !currentModalSize) {
      showToast("⚠️ Selecciona un tamaño");
      return;
    }
    const flyImg =
      currentModalView === "full"
        ? currentModalProduct.fullImage
        : currentModalProduct.decantImage;
    flyToCart(flyImg, this);
    addToCart(currentModalProduct.id, currentModalView, currentModalSize);
    // micro-check ✓ antes de cerrar
    const btn = this;
    btn.classList.add("added");
    setTimeout(() => {
      btn.classList.remove("added");
      closeModal();
      openCart();
    }, 550);
  });
  $("modalOverlay").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });

  /* ══════════════════════════════════════════════════════════════
     MODAL — PACK
  ══════════════════════════════════════════════════════════════ */
  function openPackModal(promoId) {
    const promo = promos.find((p) => p.id === promoId);
    if (!promo) return;
    currentPackPromo = promo;
    currentPackIsGroup = (promo.type === "group");
    selectedPackProducts = [];
    currentPackGroupSize = null;
    currentPackGroupQty = promo.quantity || null;
    packGroupPrice = 0;
    $("packModalTitle").textContent = promo.name;
    $("packModalDesc").textContent = promo.desc;
    const sizeSelector = $("packGroupSizeSelector");
    const productGrid = $("packProductGrid");
    const counterEl = $("packCounter");
    const confirmBtn = $("packConfirmBtn");
    const priceDisplay = $("packGroupPrice");
    if (currentPackIsGroup) {
      sizeSelector.style.display = "block";
      productGrid.style.display = "grid";
      counterEl.style.display = "block";
      confirmBtn.style.display = "flex";
      priceDisplay.textContent = "";
      currentPackPromo.size = undefined;
      currentPackPromo.price = undefined;
      renderPackSizeOptions();
      productGrid.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1;padding:1.5rem;">Selecciona un tamaño para ver los perfumes disponibles</p>';
      counterEl.style.display = "none";
      confirmBtn.style.display = "none";
    } else {
      sizeSelector.style.display = "none";
      productGrid.style.display = "grid";
      counterEl.style.display = "block";
      confirmBtn.style.display = "flex";
      renderPackGrid();
      updatePackCounter();
    }
    $("packModalOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closePackModal() {
    $("packModalOverlay").classList.remove("active");
    document.body.style.overflow = "";
    currentPackPromo = null;
    currentPackIsGroup = false;
    currentPackGroupSize = null;
    currentPackGroupQty = null;
    selectedPackProducts = [];
    $("packGroupSizeSelector").style.display = "none";
    $("packGroupPrice").textContent = "";
  }
  function getEligibleProducts(promo) {
    let eligible = products.filter((p) => !p.tester);
    if (promo.allowedCategories) {
      eligible = eligible.filter((p) =>
        promo.allowedCategories.includes(p.category),
      );
    }
    const genderRules = promo.eligibleGenders || promo.allowedGenders;
    if (genderRules) {
      eligible = eligible.filter((p) => genderRules.includes(p.gender));
    }
    if (promo.allowedBrands) {
      eligible = eligible.filter((p) =>
        promo.allowedBrands.includes(p.brand),
      );
    }
    if (IS_DEV) {
      console.log(
        `[promo] "${promo.name}" → ${eligible.length} perfumes`,
        { allowedCategories: promo.allowedCategories, allowedGenders: promo.allowedGenders, allowedBrands: promo.allowedBrands },
      );
    }
    return eligible;
  }
  function renderPackGrid() {
    const promo = currentPackPromo;
    if (!promo) return;
    const eligible = getEligibleProducts(promo);
    const grid = $("packProductGrid");
    if (eligible.length === 0) {
      grid.innerHTML =
        '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1;">No hay perfumes disponibles para esta promoción.</p>';
      return;
    }
    grid.innerHTML = eligible
      .map((prod) => {
        const isSelected = selectedPackProducts.includes(prod.id);
        const imgSrc = prod.cardImage || PLACEHOLDER_IMG;
        return `
        <div class="pack-product-item ${isSelected ? "selected" : ""}"
             data-product-id="${prod.id}" role="button" tabindex="0" aria-pressed="${isSelected}">
          <img src="${esc(imgSrc)}" alt="${esc(prod.name)}" loading="lazy" decoding="async"
               onerror="this.src='${PLACEHOLDER_IMG}';" />
          <span class="pack-product-name">${esc(prod.name)}</span>
          <span class="pack-product-brand">${esc(prod.brand)}</span>
        </div>`;
      })
      .join("");
  }
  function togglePackProduct(productId) {
    const promo = currentPackPromo;
    if (!promo) return;
    const index = selectedPackProducts.indexOf(productId);
    if (index > -1) {
      selectedPackProducts.splice(index, 1);
    } else {
      if (selectedPackProducts.length >= promo.quantity) {
        showToast(`⚠️ Solo puedes elegir ${promo.quantity} perfumes`);
        return;
      }
      selectedPackProducts.push(productId);
    }
    renderPackGrid();
    updatePackCounter();
  }
  window.togglePackProduct = togglePackProduct;
  function updatePackCounter() {
    const promo = currentPackPromo;
    const counter = $("packCounter");
    if (promo && counter) {
      const qty = promo.quantity;
      counter.textContent = `Seleccionados: ${selectedPackProducts.length} de ${qty}`;
      counter.classList.toggle("complete", selectedPackProducts.length === qty);
    }
  }
  function renderPackSizeOptions() {
    if (!currentPackIsGroup || !currentPackPromo) return;
    const sizes = currentPackPromo.options.map((opt) => opt.size);
    const container = $("packSizeGrid");
    container.innerHTML = sizes
      .map(
        (size) =>
          `<button class="size-option${size === currentPackGroupSize ? " selected" : ""}" data-size="${esc(size)}">${esc(size)}</button>`,
      )
      .join("");
    $("packGroupPrice").textContent = "";
  }
  function selectPackSize(size) {
    currentPackGroupSize = size;
    currentPackGroupQty = currentPackPromo.quantity;
    packGroupPrice = 0;
    document.querySelectorAll("#packSizeGrid .size-option").forEach((btn) => {
      btn.classList.toggle("selected", btn.dataset.size === size);
    });
    const option = currentPackPromo.options.find((o) => o.size === size);
    const priceEl = $("packGroupPrice");
    if (option) {
      packGroupPrice = option.price;
      priceEl.textContent = `Precio: ${formatPrice(packGroupPrice)}`;
      priceEl.classList.remove("price-anim");
      void priceEl.offsetWidth;
      priceEl.classList.add("price-anim");
    } else {
      priceEl.textContent = "";
    }
    const productGrid = $("packProductGrid");
    const counterEl = $("packCounter");
    const confirmBtn = $("packConfirmBtn");
    productGrid.style.display = "grid";
    counterEl.style.display = "block";
    confirmBtn.style.display = "flex";
    currentPackPromo.size = currentPackGroupSize;
    currentPackPromo.price = packGroupPrice;
    selectedPackProducts = [];
    renderPackGrid();
    updatePackCounter();
  }
  $("packSizeGrid").addEventListener("click", function (e) {
    const btn = e.target.closest(".size-option");
    if (!btn) return;
    selectPackSize(btn.dataset.size);
  });
  // Selección de perfumes en el pack (click + teclado)
  $("packProductGrid").addEventListener("click", function (e) {
    const item = e.target.closest(".pack-product-item");
    if (!item) return;
    const id = parseInt(item.dataset.productId, 10);
    if (id) togglePackProduct(id);
  });
  $("packProductGrid").addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    const item = e.target.closest(".pack-product-item");
    if (!item) return;
    e.preventDefault();
    const id = parseInt(item.dataset.productId, 10);
    if (id) togglePackProduct(id);
  });

  function confirmPack() {
    const promo = currentPackPromo;
    if (!promo) return;
    const qty = promo.quantity;
    const sz = currentPackIsGroup ? currentPackGroupSize : promo.size;
    const prc = currentPackIsGroup ? packGroupPrice : promo.price;
    if (selectedPackProducts.length < qty) {
      showToast(`⚠️ Selecciona exactamente ${qty} perfume(s)`);
      return;
    }
    const mainProduct = getProductById(selectedPackProducts[0]);
    const mainImage = mainProduct ? mainProduct.cardImage : "";
    const includedProducts = selectedPackProducts
      .map((pid) => {
        const prod = getProductById(pid);
        return prod ? { id: pid, name: prod.name, image: prod.cardImage } : null;
      })
      .filter(Boolean);
    const packItem = {
      productId: "pack-" + promo.id + "-" + Date.now(),
      type: "pack",
      name: promo.name,
      brand: "Pack Personalizado",
      image: mainImage,
      size: `${qty} × ${sz}`,
      price: prc,
      qty: 1,
      isPack: true,
      includedProductIds: [...selectedPackProducts],
      includedProducts: includedProducts,
    };
    if (promo.gift) {
      const giftProduct = getProductById(160);
      packItem.gift = {
        name: promo.giftName || (giftProduct ? giftProduct.name : "Regalo"),
        image: promo.giftImage || (giftProduct ? giftProduct.cardImage : ""),
        size: sz,
        price: 0,
      };
    }
    const packBtn = $("packConfirmBtn");
    if (mainImage && packBtn) flyToCart(mainImage, packBtn);
    cart.push(packItem);
    saveCart();
    updateCartUI();
    const mensaje = promo.gift
      ? `🎁 ¡Pack añadido! (incluye ${packItem.gift.name} de regalo)`
      : "✅ ¡Pack añadido al carrito!";
    showToast(mensaje);
    pulseCartCount();
    if (packBtn) packBtn.classList.add("added");
    setTimeout(() => {
      if (packBtn) packBtn.classList.remove("added");
      closePackModal();
      openCart();
    }, 550);
  }
  window.confirmPack = confirmPack;
  $("packModalOverlay").addEventListener("click", function (e) {
    if (e.target === this) closePackModal();
  });

  /* ══════════════════════════════════════════════════════════════
     NAVIGATION
  ══════════════════════════════════════════════════════════════ */
  function navigateTo(page) {
    currentPage = page;
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
    const target = $("page-" + page);
    if (target) target.classList.add("active");
    document.querySelectorAll(".nav a").forEach((a) => a.classList.remove("active"));
    const navLink = document.querySelector(`.nav a[data-page="${page}"]`);
    if (navLink) navLink.classList.add("active");
    if (page === "catalogo") {
      activeFilters = { category: null, gender: null };
      updateCatalogFilterButtons();
      renderCatalog();
    }
    if (page === "promos") {
      activePromoFilter = null;
      activePromoGender = null;
      updatePromoFilterButtons();
      renderPromos();
    }
    if (page === "checkout") renderCheckoutPage();
    if (page === "home") renderFeatured();
    track("page_view", { page_title: "Paco Fragancias · " + page, page_path: "/" + (page === "home" ? "" : page) });
    const nav = $("nav");
    nav.classList.remove("open");
    const hb = $("hamburger");
    if (hb) hb.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.navigateTo = navigateTo;

  /* ══════════════════════════════════════════════════════════════
     RENDER — PRODUCT CARD
  ══════════════════════════════════════════════════════════════ */
  function createProductCard(product) {
    const decantSizes = Object.keys(product.decantSizes);
    const minPrice = decantSizes.length > 0 ? Math.min(...Object.values(product.decantSizes)) : null;
    const BADGE_TOOLTIPS = {
      new: "Producto recién agregado",
      top: "Más vendido",
      tester: "Versión de prueba",
      nicho: "Fragancia nicho",
      deluxe: "Colección Deluxe de alta gama",
    };
    // Los perfumes Deluxe muestran siempre su badge dorado "Deluxe".
    const effectiveBadge = product.category === "deluxe" ? "deluxe" : product.badge;
    const effectiveBadgeText = product.category === "deluxe" ? "Deluxe" : product.badgeText;
    const badgeTip = effectiveBadge ? BADGE_TOOLTIPS[effectiveBadge] : "";
    const badgeHTML = effectiveBadge
      ? `<span class="product-badge ${esc(effectiveBadge)}"${badgeTip ? ` data-tooltip="${esc(badgeTip)}"` : ""}>${esc(effectiveBadgeText)}</span>`
      : "";
    const priceText = minPrice ? `Desde ${formatPrice(minPrice)}` : "Consultar";
    const catLabel =
      product.category === "nicho" ? "Nicho"
      : product.category === "arabe" ? "Árabe"
      : product.category === "deluxe" ? "Deluxe"
      : "Diseñador";
    const stockHTML = product.tester ? "" : `<span class="stock-chip">${stockLabel(product.id)}</span>`;
    return `
      <div class="product-card reveal-item" data-product-id="${product.id}">
        <div class="img-wrapper">
          ${badgeHTML}
          <img src="${esc(product.cardImage)}"${imgSrcsetAttrs(product.cardImage)} alt="${esc(product.name)} - ${esc(product.brand)}" loading="lazy" decoding="async" onload="this.classList.add('img-loaded'); this.closest('.img-wrapper').classList.add('skeleton-done');" onerror="this.style.display='none'; this.closest('.img-wrapper').classList.add('skeleton-done');" />
        </div>
        <div class="product-info">
          <div class="product-category">${catLabel} · ${esc(product.gender)}</div>
          <div class="product-name">${esc(product.name)}</div>
          <div class="product-brand">${esc(product.brand)}</div>
          <div class="product-price-row">
            <span class="product-price">${priceText}</span>
            ${stockHTML}
          </div>
          <button class="btn-add" data-add-id="${product.id}">Ver y Comprar</button>
        </div>
      </div>`;
  }
  // Stock simulado, determinista por id (no cambia al recargar).
  function stockLabel(id) {
    const opts = ["Quedan 2", "Quedan 3", "Quedan 5", "Quedan 8", "Últimas unidades"];
    return opts[id % opts.length];
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER — FEATURED
  ══════════════════════════════════════════════════════════════ */
  function renderFeatured() {
    const grid = $("featuredGrid");
    if (!grid) return;
    grid.innerHTML = products
      .filter((p) => p.featured)
      .map(createProductCard)
      .join("");
    observeRevealElements();
    window.PacoAnimations?.refresh?.();
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER — CATALOG
  ══════════════════════════════════════════════════════════════ */
  function renderCatalog() {
    const grid = $("catalogGrid");
    if (!grid) return;

    // Sin categoría seleccionada: grid vacío
    if (!activeFilters.category) {
      grid.innerHTML = activeFilters.gender
        ? `<div class="catalog-hint">
             <div class="catalog-hint-icon">👆</div>
             <p class="catalog-hint-text">Primero elige una categoría para descubrir fragancias.</p>
           </div>`
        : "";
      return;
    }

    let filtered = products;

    if (activeFilters.category === "tester") {
      filtered = filtered.filter((p) => p.tester === true);
    } else {
      filtered = filtered.filter((p) => !p.tester);
      filtered = filtered.filter((p) => p.category === activeFilters.category);
    }
    if (activeFilters.gender) {
      filtered = filtered.filter((p) => p.gender === activeFilters.gender);
    }

    if (filtered.length) {
      grid.innerHTML = filtered.map(createProductCard).join("");
    } else {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3 class="empty-state-title">No encontramos productos</h3>
          <p class="empty-state-text">No hay perfumes con esos filtros. Prueba con otras opciones.</p>
        </div>`;
    }
    observeRevealElements();
    window.PacoAnimations?.refresh?.();
  }

   /* ══════════════════════════════════════════════════════════════
     RENDER — PROMOS
  ══════════════════════════════════════════════════════════════ */
  function renderPromos() {
    const grid = $("promoGrid");
    if (!grid) return;

    if (!activePromoFilter) {
      grid.innerHTML = "";
      return;
    }

    let filtered = promos.filter((p) => p.category === activePromoFilter);

    if (activePromoFilter === "arabe" && activePromoGender) {
      filtered = filtered.filter((p) => {
        if (!p.allowedGenders) return true;
        return p.allowedGenders.includes(activePromoGender);
      });
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🎁</div>
          <h3 class="empty-state-title">Sin promociones aquí</h3>
          <p class="empty-state-text">No hay packs en esta categoría por ahora. Prueba con otra opción del filtro.</p>
        </div>`;
      return;
    }

    grid.innerHTML = filtered
      .map((promo) => {
        let priceHtml = "";
        const imageUrl = promo.image || "";

        // Calcular precio
        if (promo.type === "group" && Array.isArray(promo.options) && promo.options.length) {
          const allPrices = promo.options.map((opt) => opt.price);
          const minPrice = Math.min(...allPrices);
          const maxPrice = Math.max(...allPrices);
          priceHtml = minPrice === maxPrice ? formatPrice(minPrice) : `Desde ${formatPrice(minPrice)}`;
        } else if (promo.price) {
          priceHtml = formatPrice(promo.price);
        } else {
          priceHtml = "Consultar";
        }

        // Texto informativo
        const infoLine = promo.type === "group"
          ? `${promo.quantity} perfumes · Elige tamaño`
          : `${promo.quantity} perfume(s) · ${promo.size}`;

        // Badge (flota sobre la banda de imagen)
        const badgeHtml = promo.badge
          ? `<span class="promo-badge">${esc(promo.badge)}</span>`
          : "";

        // Banda de imagen (40% superior). El placeholder dorado con icono + cantidad
        // queda detrás; si la imagen real carga, la cubre; si falta (404), se elimina
        // y se ve el placeholder. Cuando subas la foto real a esa ruta, aparece sola.
        const promoIcon = promo.icon || getCategoryIcon(promo.category);
        const countLabel = promo.quantity
          ? `${promo.quantity} decants`
          : "Pack";
        const imgHtml = imageUrl
          ? `<img src="${esc(imageUrl)}"${imgSrcsetAttrs(imageUrl)} alt="${esc(promo.name)}" class="promo-img" loading="lazy" decoding="async" onload="this.classList.add('img-loaded')" onerror="this.remove()" />`
          : "";

        return `
          <div class="promo-card reveal-item" data-promo-id="${esc(promo.id)}">
            <div class="promo-media" data-cat="${esc(promo.category)}">
              <div class="promo-media-fallback" aria-hidden="true">
                <span class="promo-media-icon">${promoIcon}</span>
                <span class="promo-media-count">${esc(countLabel)}</span>
              </div>
              ${imgHtml}
              ${badgeHtml}
            </div>
            <div class="promo-body">
              <h3>${esc(promo.name)}</h3>
              <p class="promo-desc">${esc(promo.desc)}</p>
              <p class="promo-meta">📦 ${infoLine}</p>
              <div class="promo-price">${priceHtml}</div>
              <button class="btn-add" data-promo-id="${esc(promo.id)}" aria-label="Seleccionar perfumes para ${esc(promo.name)}">
                Seleccionar Perfumes
              </button>
            </div>
          </div>`;
      })
      .join("");

    observeRevealElements();
    window.PacoAnimations?.refresh?.();
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER — CHECKOUT
  ══════════════════════════════════════════════════════════════ */
  function renderCheckoutPage() {
    const emptyMsg = $("checkout-empty-cart");
    const formWrapper = $("checkout-form-wrapper");
    const summaryItems = $("checkoutSummaryItems");
    const totalEl = $("checkoutTotal");

    if (!emptyMsg || !formWrapper) return;

    if (cart.length === 0) {
      emptyMsg.style.display = "block";
      formWrapper.style.display = "none";
      return;
    }

    emptyMsg.style.display = "none";
    formWrapper.style.display = "block";

    if (summaryItems) {
      summaryItems.innerHTML = cart
        .map((item) => {
          const isMultiPack = item.isPack && item.includedProducts && item.includedProducts.length > 0 && !item.gift;
          const hasGift = item.isPack && item.gift;
          let infoHtml = "";

          if (isMultiPack) {
            const miniImgs = item.includedProducts
              .map(
                (p) =>
                  `<img src="${esc(p.image)}" alt="${esc(p.name)}"
                  style="width:32px;height:32px;border-radius:6px;object-fit:cover;margin-right:4px;"
                  loading="lazy" decoding="async" onerror="this.src='${PLACEHOLDER_IMG}'" />`,
              )
              .join("");
            infoHtml = `
            <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;">
              <div style="display:flex;">${miniImgs}</div>
              <div>
                <div style="font-weight:600;font-size:.85rem;">${esc(item.name)}</div>
                <div style="font-size:.75rem;color:var(--text-secondary);">${item.includedProducts.length} × ${esc(item.size)}</div>
              </div>
            </div>`;
          } else if (hasGift) {
            infoHtml = `
            <div style="display:flex;align-items:center;gap:.5rem;">
              <div style="position:relative;">
                <img src="${esc(item.image)}" alt="${esc(item.name)}" style="width:32px;height:32px;border-radius:6px;object-fit:cover;" loading="lazy" decoding="async" />
                <img src="${esc(item.gift.image)}" alt="${esc(item.gift.name)}"
                     style="position:absolute;bottom:-4px;right:-4px;width:20px;height:20px;border-radius:50%;border:2px solid white;object-fit:cover;" loading="lazy" decoding="async" />
              </div>
              <div>
                <div style="font-weight:600;font-size:.85rem;">${esc(item.name)}</div>
                <div style="font-size:.75rem;color:var(--text-secondary);">${esc(item.size)} (incluye ${esc(item.gift.name)})</div>
              </div>
            </div>`;
          } else {
            const typeLabel = item.type === "full" ? "Frasco" : "Decant";
            infoHtml = `
            <div style="display:flex;align-items:center;gap:.5rem;">
              <img src="${esc(item.image)}" alt="${esc(item.name)}" style="width:32px;height:32px;border-radius:6px;object-fit:cover;" loading="lazy" decoding="async" />
              <div>
                <div style="font-weight:600;font-size:.85rem;">${esc(item.name)}</div>
                <div style="font-size:.75rem;color:var(--text-secondary);">${typeLabel} ${esc(item.size)} × ${item.qty}</div>
              </div>
            </div>`;
          }

          return `
          <div class="checkout-summary-item" style="display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;border-bottom:1px solid var(--border-light);">
            ${infoHtml}
            <span style="font-weight:700;color:var(--gold-deep);white-space:nowrap;margin-left:1rem;">${formatPrice(item.price * item.qty)}</span>
          </div>`;
        })
        .join("");
    }

    if (totalEl) {
      totalEl.textContent = formatPrice(getCartTotal());
    }
  }

  /* ══════════════════════════════════════════════════════════════
     FILTERS — CATALOG
  ══════════════════════════════════════════════════════════════ */
  function updateCatalogFilterButtons() {
    document.querySelectorAll("#filtersCategory .filter-btn").forEach((btn) => {
      const active = activeFilters.category === btn.dataset.filter;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    const genderGroup = $("catalogGenderGroup");
    if (genderGroup) genderGroup.style.display = activeFilters.category ? "flex" : "none";
    document.querySelectorAll("#filtersGender .filter-btn").forEach((btn) => {
      const active = activeFilters.gender === btn.dataset.filter;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  const filtersCat = $("filtersCategory");
  if (filtersCat) {
    filtersCat.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeFilters.category = btn.dataset.filter;
      activeFilters.gender = null;
      updateCatalogFilterButtons();
      renderCatalog();
    });
  }

  const filtersGender = $("filtersGender");
  if (filtersGender) {
    filtersGender.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      const val = btn.dataset.filter;
      activeFilters.gender = activeFilters.gender === val ? null : val;
      updateCatalogFilterButtons();
      renderCatalog();
    });
  }

  /* ══════════════════════════════════════════════════════════════
     FILTERS — PROMOS
  ══════════════════════════════════════════════════════════════ */
  function updatePromoFilterButtons() {
    document.querySelectorAll("#promoFilters .filter-btn").forEach((btn) => {
      const active = btn.dataset.promoFilter === activePromoFilter;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    const genderGroup = $("promoGenderGroup");
    if (genderGroup) {
      if (activePromoFilter === "arabe") {
        genderGroup.style.display = "flex";
      } else {
        genderGroup.style.display = "none";
        activePromoGender = null;
      }
    }

    document.querySelectorAll("#promoGenderFilters .filter-btn").forEach((btn) => {
      const active = btn.dataset.promoGender === activePromoGender;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  const promoFilters = $("promoFilters");
  if (promoFilters) {
    promoFilters.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activePromoFilter = btn.dataset.promoFilter;
      activePromoGender = null;
      btn.classList.remove("chip-pop");
      void btn.offsetWidth;
      btn.classList.add("chip-pop");
      updatePromoFilterButtons();
      renderPromos();
    });
  }

  const promoGenderFilters = $("promoGenderFilters");
  if (promoGenderFilters) {
    promoGenderFilters.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      const val = btn.dataset.promoGender;
      activePromoGender = activePromoGender === val ? null : val;
      updatePromoFilterButtons();
      renderPromos();
    });
  }

  /* búsqueda eliminada — catálogo filtra solo por categoría y género */

  /* ══════════════════════════════════════════════════════════════
     GLOBAL CLICK DELEGATION (cards, add buttons, promo buttons)
  ══════════════════════════════════════════════════════════════ */
  document.addEventListener("click", function (e) {
    // Product card body (not a button)
    const card = e.target.closest(".product-card");
    if (card && !e.target.closest("button")) {
      const id = parseInt(card.dataset.productId, 10);
      if (id) openModal(id);
      return;
    }

    // "Ver y Comprar" button on product card
    const addBtn = e.target.closest(".btn-add[data-add-id]");
    if (addBtn) {
      e.stopPropagation();
      const id = parseInt(addBtn.dataset.addId, 10);
      if (id) openModal(id);
      return;
    }

    // "Seleccionar Perfumes" button on promo card
    const promoBtn = e.target.closest(".btn-add[data-promo-id]");
    if (promoBtn) {
      e.stopPropagation();
      openPackModal(promoBtn.dataset.promoId);
      return;
    }
  });

  /* ══════════════════════════════════════════════════════════════
     WHATSAPP CHECKOUT
  ══════════════════════════════════════════════════════════════ */
  window.confirmarWhatsApp = function () {
    const nombre = $("chNombre")?.value.trim() ?? "";
    const apellido = $("chApellido")?.value.trim() ?? "";
    const telefono = $("chTelefono")?.value.trim() ?? "";
    const direccion = $("chDireccion")?.value.trim() ?? "";
    const distrito = $("chDistrito")?.value.trim() ?? "";
    const referencia = $("chReferencia")?.value.trim() ?? "";
    const dni = $("chDNI")?.value.trim() ?? "";

    if (!nombre || !apellido || !telefono || !direccion || !distrito) {
      showToast("⚠️ Completa todos los campos obligatorios");
      return;
    }
    if (cart.length === 0) {
      showToast("⚠️ El carrito está vacío");
      return;
    }

    let mensaje = `🛍️ *NUEVO PEDIDO – PACO Fragancias* 🛍️\n\n`;
    mensaje += `👤 *Cliente:* ${nombre} ${apellido}\n`;
    mensaje += `📞 *Teléfono:* ${telefono}\n`;
    if (dni) mensaje += `🪪 *DNI:* ${dni}\n`;
    mensaje += `📍 *Dirección:* ${direccion}\n🏙️ *Distrito:* ${distrito}\n`;
    if (referencia) mensaje += `📝 *Referencia:* ${referencia}\n`;
    mensaje += `\n📦 *PRODUCTOS:*\n`;

    cart.forEach((item) => {
      mensaje += `\n  ✦ ${item.name}\n`;
      if (item.isPack && item.includedProducts && item.includedProducts.length > 0) {
        const lista = item.includedProducts.map((p) => `      • ${p.name}`).join("\n");
        mensaje += `${lista}\n`;
        if (item.gift) {
          mensaje += `      🎁 *Regalo:* ${item.gift.name} (${item.gift.size})\n`;
        }
      } else if (item.gift) {
        mensaje += `      🎁 *Regalo:* ${item.gift.name}\n`;
      }
      mensaje += `  Cantidad: ${item.qty} | Precio: ${formatPrice(item.price * item.qty)}\n`;
    });

    mensaje += `\n💰 *TOTAL: ${formatPrice(getCartTotal())}*\n`;
    mensaje += `✅ ¡Gracias por tu pedido! Quedo atento para coordinar el envío. 🙌`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
    );
    // Guardar el pedido para el panel de administración
    saveOrderRecord({ nombre, apellido, telefono, dni, direccion, distrito, referencia });
    track("purchase", {
      transaction_id: "T-" + Date.now(),
      currency: "PEN",
      value: getCartTotal(),
      items: cart.map((it) => ({ item_id: it.productId, item_name: it.name, price: it.price, quantity: it.qty })),
    });
    showToast("📲 Redirigiendo a WhatsApp...");
    notifyOrderSent();
    // Página de agradecimiento post-compra (tras abrir WhatsApp)
    setTimeout(() => { window.location.href = "gracias.html"; }, 1600);
  };

  // Guarda el pedido en localStorage (paco_pedidos) para el panel admin.
  function saveOrderRecord(datos) {
    try {
      const now = new Date();
      const pad = (n) => String(n).padStart(2, "0");
      const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
      const fecha = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
      const productos = cart.map((item) => ({
        nombre: item.name,
        cantidad: item.qty,
        precio: item.price,
        size: item.size || "",
      }));
      const pedido = {
        id: "pedido-" + stamp,
        fecha,
        nombre: datos.nombre,
        apellido: datos.apellido,
        telefono: datos.telefono,
        dni: datos.dni,
        direccion: datos.direccion,
        distrito: datos.distrito,
        referencia: datos.referencia,
        productos,
        total: getCartTotal(),
        estado: "Pendiente",
      };
      let arr = [];
      try { arr = JSON.parse(localStorage.getItem("paco_pedidos")) || []; } catch (e) { arr = []; }
      if (!Array.isArray(arr)) arr = [];
      arr.unshift(pedido);
      localStorage.setItem("paco_pedidos", JSON.stringify(arr));
    } catch (e) { /* almacenamiento no disponible */ }
  }

  // Notificación del navegador tras enviar el pedido. Pide permiso en la
  // primera compra exitosa; en las siguientes muestra la notificación si está concedido.
  function notifyOrderSent() {
    if (!("Notification" in window)) return;
    const show = () => {
      try {
        new Notification("Paco Fragancias", {
          body: "✅ Pedido enviado a WhatsApp. Te contactaremos pronto.",
          icon: "logo.webp",
          badge: "logo.webp",
        });
      } catch (e) { /* algunos navegadores requieren SW para notificar */ }
    };
    if (Notification.permission === "granted") {
      show();
    } else if (Notification.permission === "default") {
      Notification.requestPermission().then((p) => { if (p === "granted") show(); });
    }
  }

  /* ══════════════════════════════════════════════════════════════
     SCROLL REVEAL
  ══════════════════════════════════════════════════════════════ */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
  );

  function observeRevealElements() {
    document.querySelectorAll(".reveal-item:not(.visible)").forEach((el) => {
      revealObserver.observe(el);
    });
    hydrateLoadedImages();
  }
  // Red de seguridad para skeletons: marca como cargadas las imágenes que ya
  // estaban completas en caché antes de adjuntar el handler onload inline.
  function hydrateLoadedImages() {
    document.querySelectorAll(".img-wrapper img:not(.img-loaded), .promo-img:not(.img-loaded), .pill-bg img:not(.img-loaded)").forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add("img-loaded");
        const wrap = img.closest(".img-wrapper");
        if (wrap) wrap.classList.add("skeleton-done");
      }
    });
  }

  /* ══════════════════════════════════════════════════════════════
     GLOBAL EXPOSE (for HTML onclick attributes)
  ══════════════════════════════════════════════════════════════ */
  window.closeCart = closeCart;
  window.closeModal = closeModal;
  window.closePackModal = closePackModal;
  window.goToCheckout = goToCheckout;
  window.openModal = openModal;

  /* ══════════════════════════════════════════════════════════════
     EVENT LISTENERS — UI
  ══════════════════════════════════════════════════════════════ */
  const btnCart = $("btnCart");
  if (btnCart) btnCart.addEventListener("click", openCart);

  const cartOverlay = $("cartOverlay");
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  const cartClose = document.querySelector(".cart-close");
  if (cartClose) cartClose.addEventListener("click", closeCart);

  const hamburger = $("hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      const nav = $("nav");
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      nav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(!expanded));
    });
  }

  window.addEventListener("scroll", () => {
    const header = $("header");
    if (header) header.classList.toggle("scrolled", window.scrollY > 50);
    const btt = $("backToTop");
    if (btt) btt.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });

  /* ══════════════════════════════════════════════════════════════
     BOTÓN "VOLVER ARRIBA"
  ══════════════════════════════════════════════════════════════ */
  function setupBackToTop() {
    const btt = $("backToTop");
    if (!btt) return;
    btt.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    // estado inicial correcto (p. ej. si se recarga con scroll)
    btt.classList.toggle("visible", window.scrollY > 500);
  }

  /* ══════════════════════════════════════════════════════════════
     TOGGLE DE TEMA (claro / oscuro) — persistente en localStorage
  ══════════════════════════════════════════════════════════════ */
  function setupThemeToggle() {
    const btn = $("themeToggle");
    if (!btn) return;
    const icon = btn.querySelector(".theme-icon");
    let usedOnce = false;

    function syncUI() {
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      if (icon) icon.textContent = dark ? "☀️" : "🌙";
      btn.setAttribute("aria-pressed", String(dark));
      // El tooltip indica la acción que realizará el botón
      btn.setAttribute("data-tooltip", dark ? "Modo claro" : "Modo oscuro");
    }
    syncUI();

    btn.addEventListener("click", () => {
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      const next = dark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("paco_theme", next); } catch (e) { /* storage no disponible */ }
      // Animación de rotación del ícono
      btn.classList.remove("rotating");
      void btn.offsetWidth;
      btn.classList.add("rotating");
      // Pulso sutil la primera vez que se usa
      if (!usedOnce) {
        usedOnce = true;
        btn.classList.add("pulse");
        setTimeout(() => btn.classList.remove("pulse"), 650);
      }
      syncUI();
    });
  }

  /* ══════════════════════════════════════════════════════════════
     PARALLAX SUTIL DEL HERO (solo desktop, respeta reduced-motion)
  ══════════════════════════════════════════════════════════════ */
  function setupHeroParallax() {
    const video = document.querySelector(".hero-video");
    if (!video) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ticking = false;
    function update() {
      ticking = false;
      if (!desktop.matches || reduce.matches) {
        video.style.removeProperty("--hero-parallax");
        return;
      }
      const y = Math.min(window.scrollY * 0.1, 45); // cap 45px (gap-free con scale)
      video.style.setProperty("--hero-parallax", -y + "px");
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true },
    );
    update();
  }

  /* ══════════════════════════════════════════════════════════════
     RUTEO POR HASH (deep-links: #catalogo, #promos)
  ══════════════════════════════════════════════════════════════ */
  function applyHashRoute() {
    const hash = (window.location.hash || "").replace("#", "");
    const valid = ["home", "catalogo", "promos"];
    if (valid.includes(hash)) navigateTo(hash);
  }

  /* ══════════════════════════════════════════════════════════════
     VALIDACIÓN EN TIEMPO REAL — CHECKOUT
     (capa visual aditiva; NO altera confirmarWhatsApp)
  ══════════════════════════════════════════════════════════════ */
  function setupCheckoutValidation() {
    const rules = {
      chNombre: (v) => v.trim().length >= 3,
      chApellido: (v) => v.trim().length >= 3,
      chTelefono: (v) => /^9\d{8}$/.test(v.trim()),
      chDNI: (v) => /^\d{8}$/.test(v.trim()),
      chDireccion: (v) => v.trim().length >= 3,
      chDistrito: (v) => v.trim().length >= 3,
    };
    const ids = Object.keys(rules);
    const fields = ids.map((id) => $(id)).filter(Boolean);
    if (fields.length === 0) return;
    const confirmBtn = document.querySelector(".btn-whatsapp");

    function validateField(input, showState) {
      const valid = rules[input.id](input.value);
      const group = input.closest(".form-group");
      if (group && showState) {
        group.classList.toggle("field-valid", valid);
        group.classList.toggle("field-invalid", !valid);
      }
      return valid;
    }
    function allValid() {
      return ids.every((id) => {
        const el = $(id);
        return el && rules[id](el.value);
      });
    }
    function refreshButton() {
      if (!confirmBtn) return;
      const ok = allValid();
      confirmBtn.classList.toggle("is-disabled", !ok);
      confirmBtn.setAttribute("aria-disabled", String(!ok));
    }

    fields.forEach((input) => {
      // Asegura contenedor de ícono de estado
      const group = input.closest(".form-group");
      if (group && !group.querySelector(".field-status")) {
        const span = document.createElement("span");
        span.className = "field-status";
        span.setAttribute("aria-hidden", "true");
        group.appendChild(span);
      }
      input.addEventListener("input", () => {
        // mientras escribe: solo marca verde si ya es válido (evita rojo prematuro)
        const valid = rules[input.id](input.value);
        const g = input.closest(".form-group");
        if (g) {
          if (valid) {
            g.classList.add("field-valid");
            g.classList.remove("field-invalid");
          } else {
            g.classList.remove("field-valid");
          }
        }
        refreshButton();
      });
      input.addEventListener("blur", () => {
        if (input.value.trim() !== "") validateField(input, true);
        refreshButton();
      });
    });
    refreshButton();
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCart();
      closePackModal();
    }
  });

  /* ══════════════════════════════════════════════════════════════
     EFECTOS 3D / MICROINTERACCIONES
  ══════════════════════════════════════════════════════════════ */
  /* Recomendador inteligente: clasifica por las notas reales del perfume */
  const NOTE_KEYWORDS = {
    fresco: ["limón", "limon", "bergamota", "menta", "acuátic", "acuatic", "marin", "pomelo", "mandarina", "cítric", "citric", "neroli", "verde", "hoja"],
    dulce: ["vainilla", "caramelo", "miel", "pralin", "chocolate", "toffee", "coco", "dátil", "datil", "azúcar", "frutas", "fruto", "cereza", "mango"],
    amaderado: ["cedro", "sándalo", "sandalo", "oud", "pachulí", "pachuli", "cuero", "canela", "pimienta", "tabaco", "ámbar", "ambar", "incienso", "vetiver", "haba tonka"],
    floral: ["rosa", "jazmín", "jazmin", "lavanda", "iris", "violeta", "azahar", "flor", "tuberosa", "ylang"],
  };
  function classifyFamilies(p) {
    const notes = ((p.notes || "") + " " + (p.description || "")).toLowerCase();
    const fams = new Set();
    for (const fam in NOTE_KEYWORDS) {
      if (NOTE_KEYWORDS[fam].some((k) => notes.includes(k))) fams.add(fam);
    }
    return fams;
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  /* Cuestionario interactivo de 4 pasos */
  const QUIZ_STEPS = [
    { key: "genero", q: "¿Para quién es?", opts: [{ v: "masculino", l: "👨 Hombre" }, { v: "femenino", l: "👩 Mujer" }, { v: "unisex", l: "🧑 Unisex" }] },
    { key: "ocasion", q: "¿Para qué ocasión?", opts: [{ v: "diario", l: "☀️ Uso diario" }, { v: "trabajo", l: "💼 Trabajo / Oficina" }, { v: "noche", l: "🌙 Noche / Fiestas" }, { v: "cita", l: "❤️ Citas románticas" }] },
    { key: "tipo", q: "¿Qué tipo de fragancia prefieres?", opts: [{ v: "fresco", l: "🍋 Fresca / Cítrica" }, { v: "dulce", l: "🍭 Dulce / Golosa" }, { v: "amaderado", l: "🌲 Amaderada / Especiada" }, { v: "floral", l: "🌸 Floral" }] },
    { key: "intensidad", q: "¿Qué intensidad buscas?", opts: [{ v: "ligera", l: "🌤️ Ligera / Discreta" }, { v: "moderada", l: "⚡ Moderada / Versátil" }, { v: "intensa", l: "🔥 Intensa / Duradera" }] },
  ];
  const OCA_FAM = { diario: ["fresco", "floral"], trabajo: ["fresco", "amaderado"], noche: ["amaderado", "dulce"], cita: ["dulce", "floral", "amaderado"] };
  const INT_FAM = { ligera: ["fresco", "floral"], moderada: ["fresco", "floral", "dulce", "amaderado"], intensa: ["amaderado", "dulce"] };
  let quizIndex = 0;
  const quizAnswers = {};

  function renderQuizProgress() {
    const p = $("quizProgress");
    if (!p) return;
    const done = quizAnswers.__done;
    p.innerHTML = QUIZ_STEPS.map((_, i) =>
      `<span class="quiz-dot${(done || i <= quizIndex) ? " filled" : ""}${(!done && i === quizIndex) ? " current" : ""}"></span>`,
    ).join("");
  }
  function renderQuizStep() {
    const stepEl = $("quizStep");
    const grid = $("recoGrid");
    const restart = $("quizRestart");
    if (!stepEl) return;
    quizAnswers.__done = false;
    if (grid) grid.innerHTML = "";
    if (restart) restart.style.display = "none";
    renderQuizProgress();
    const step = QUIZ_STEPS[quizIndex];
    stepEl.classList.remove("quiz-in"); void stepEl.offsetWidth; stepEl.classList.add("quiz-in");
    stepEl.innerHTML =
      `<h3 class="quiz-q">${esc(step.q)}</h3>` +
      `<div class="quiz-opts">` +
      step.opts.map((o) => `<button class="quiz-opt" data-v="${esc(o.v)}" type="button">${esc(o.l)}</button>`).join("") +
      `</div>`;
  }
  function answerQuiz(v) {
    const step = QUIZ_STEPS[quizIndex];
    quizAnswers[step.key] = v;
    const btn = $("quizStep").querySelector('.quiz-opt[data-v="' + v + '"]');
    if (btn) btn.classList.add("selected");
    setTimeout(() => {
      if (quizIndex < QUIZ_STEPS.length - 1) { quizIndex++; renderQuizStep(); }
      else showQuizResults();
    }, 340);
  }
  function scoreProduct(p, a) {
    const fams = classifyFamilies(p);
    let s = 0;
    if (a.tipo && fams.has(a.tipo)) s += 2;
    if (a.ocasion && (OCA_FAM[a.ocasion] || []).some((f) => fams.has(f))) s += 1;
    if (a.intensidad && (INT_FAM[a.intensidad] || []).some((f) => fams.has(f))) s += 1;
    if (p.featured) s += 1;
    return s;
  }
  function showQuizResults() {
    quizAnswers.__done = true;
    renderQuizProgress();
    const stepEl = $("quizStep");
    const grid = $("recoGrid");
    const restart = $("quizRestart");
    const a = quizAnswers;
    const genderMap = { masculino: ["masculino", "unisex"], femenino: ["femenino", "unisex"], unisex: ["unisex"] };
    const allow = genderMap[a.genero] || ["masculino", "femenino", "unisex"];
    let pool = products.filter((p) => !p.tester && Object.keys(p.decantSizes || {}).length && allow.includes(p.gender));
    if (pool.length < 6) pool = products.filter((p) => !p.tester && Object.keys(p.decantSizes || {}).length);
    const ranked = shuffle(pool).map((p) => ({ p, s: scoreProduct(p, a) })).sort((x, y) => y.s - x.s);
    const items = ranked.slice(0, 6).map((r) => r.p);
    if (stepEl) stepEl.innerHTML = `<h3 class="quiz-q quiz-result-title">✨ Tus fragancias ideales</h3>`;
    grid.classList.remove("reco-fade-in"); void grid.offsetWidth;
    grid.innerHTML = items.map((p, i) => {
      const sizes = Object.values(p.decantSizes || {});
      const min = sizes.length ? Math.min(...sizes) : null;
      const price = min ? `Desde ${formatPrice(min)}` : "Consultar";
      return `
        <div class="reco-card" data-product-id="${p.id}" role="button" tabindex="0" aria-label="Ver ${esc(p.name)}" style="animation-delay:${(i * 0.05).toFixed(2)}s">
          <div class="reco-img"><img src="${esc(p.cardImage)}" alt="${esc(p.name)}" loading="lazy" decoding="async" onerror="this.style.display='none'" /></div>
          <div class="reco-info">
            <div class="reco-name">${esc(p.name)}</div>
            <div class="reco-brand">${esc(p.brand)}</div>
            <div class="reco-price">${price}</div>
          </div>
        </div>`;
    }).join("");
    grid.classList.add("reco-fade-in");
    if (restart) restart.style.display = "block";
  }
  function setupRecommender() {
    const stepEl = $("quizStep");
    if (!stepEl) return;
    stepEl.addEventListener("click", (e) => {
      const b = e.target.closest(".quiz-opt");
      if (b) answerQuiz(b.dataset.v);
    });
    const grid = $("recoGrid");
    const open = (el) => { const id = parseInt(el.dataset.productId, 10); if (id) openModal(id); };
    grid.addEventListener("click", (e) => { const c = e.target.closest(".reco-card"); if (c) open(c); });
    grid.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const c = e.target.closest(".reco-card"); if (c) { e.preventDefault(); open(c); }
    });
    const rb = $("quizRestartBtn");
    if (rb) rb.addEventListener("click", () => { quizIndex = 0; Object.keys(quizAnswers).forEach((k) => delete quizAnswers[k]); renderQuizStep(); });
    renderQuizStep();
  }

  /* Carrusel de reseñas (flechas) */
  function setupReviewsCarousel() {
    const track = $("reviewsTrack");
    const prev = $("revPrev");
    const next = $("revNext");
    if (!track || !prev || !next) return;
    const step = () => {
      const card = track.querySelector(".review-card");
      return card ? card.getBoundingClientRect().width + 21 : 320;
    };
    function updateArrows() {
      const maxScroll = track.scrollWidth - track.clientWidth - 2;
      prev.hidden = track.scrollLeft <= 2;
      next.hidden = track.scrollLeft >= maxScroll;
    }
    prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    updateArrows();
  }

  /* Deep-link de producto: ?producto=ID abre el modal */
  function applyProductRoute(skipHistory) {
    const id = new URLSearchParams(location.search).get("producto");
    if (id) {
      const pid = parseInt(id, 10);
      if (getProductById(pid)) openModal(pid, skipHistory !== false);
    }
  }

  /* Recordatorio de carrito abandonado (una vez por sesión) */
  function showCartReminder() {
    const t = $("toast");
    if (!t || cart.length === 0) return;
    const count = getCartCount();
    t.className = "toast toast-info toast-cart";
    t.innerHTML =
      `<span class="toast-emoji" aria-hidden="true">🛒</span>` +
      `<span class="toast-msg">Tienes ${count} producto${count > 1 ? "s" : ""} en tu carrito. ¿Finalizar tu pedido?</span>` +
      `<button class="toast-action" type="button">Ir al carrito</button>`;
    void t.offsetWidth;
    t.classList.add("show");
    const btn = t.querySelector(".toast-action");
    if (btn) btn.addEventListener("click", () => { t.classList.remove("show"); openCart(); });
    clearTimeout(t._timeout);
    t._timeout = setTimeout(() => t.classList.remove("show"), 6500);
  }
  function maybeRemindCart() {
    try {
      if (cart.length > 0 && !sessionStorage.getItem("paco_cart_reminded")) {
        sessionStorage.setItem("paco_cart_reminded", "1");
        setTimeout(showCartReminder, 1600);
      }
    } catch (e) { /* sessionStorage no disponible */ }
  }

  /* En móvil no se descarga el video del hero: solo se muestra el poster */
  function setupHeroMobile() {
    const video = document.querySelector(".hero-video");
    if (!video) return;
    if (window.matchMedia("(max-width: 768px)").matches) {
      try {
        video.pause();
        video.removeAttribute("autoplay");
        // quita las fuentes para evitar la descarga del .mp4 en móvil
        video.querySelectorAll("source").forEach((s) => s.remove());
        video.removeAttribute("src");
        video.load();
      } catch (e) { /* noop */ }
    }
  }

  /* Botón flotante de Instagram (fade-in tras 2s) */
  function setupInstagramFab() {
    const fab = $("igFab");
    if (!fab) return;
    setTimeout(() => fab.classList.add("visible"), 2000);
  }

  /* Avisos de conexión (online / offline) */
  function setupConnectivityToasts() {
    window.addEventListener("offline", () =>
      showToast("📡 Sin conexión. Los productos ya visitados siguen disponibles.", "info"));
    window.addEventListener("online", () =>
      showToast("✅ Conexión restablecida.", "success"));
  }

  // Ripple dorado desde el punto de clic
  function setupRipple() {
    const SEL = ".btn, .btn-add, .btn-add-large, .btn-checkout, .btn-whatsapp, .btn-empty-action, .btn-outline-dark";
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(SEL);
      if (!btn) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = btn.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const ink = document.createElement("span");
      ink.className = "ripple-ink";
      ink.style.width = ink.style.height = size + "px";
      ink.style.left = e.clientX - r.left - size / 2 + "px";
      ink.style.top = e.clientY - r.top - size / 2 + "px";
      btn.appendChild(ink);
      setTimeout(() => ink.remove(), 600);
    });
  }

  // Datos estructurados ItemList de los destacados (SEO)
  function injectItemList() {
    const featured = products.filter((p) => p.featured).slice(0, 12);
    if (!featured.length) return;
    const data = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Fragancias Destacadas · Paco Fragancias",
      itemListElement: featured.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        item: { "@type": "Product", name: p.name, brand: p.brand, image: p.cardImage },
      })),
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  // Registro del Service Worker (PWA)
  function registerSW() {
    if (!("serviceWorker" in navigator)) return;
    if (location.protocol !== "https:" && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch((e) => { if (IS_DEV) console.warn("SW:", e); });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     TIKTOK — embed oficial (blockquote + embed.js) con lazy load
     y fallback elegante.
     Por qué blockquote+embed.js y no <iframe src="tiktok.com/embed/v2/...">:
     TikTok rechaza en silencio (sin error de red, sin 404, página en
     blanco) el hotlink directo del iframe cuando no reconoce el
     origen/referrer. El embed oficial es el único método soportado
     de forma fiable cross-browser.
  ══════════════════════════════════════════════════════════════ */
  function setupTikTok() {
    const cards = document.querySelectorAll(".tiktok-card");
    if (!cards.length) return;

    const TIKTOK_SCRIPT_SRC = "https://www.tiktok.com/embed.js";
    let scriptEl = document.querySelector(`script[src="${TIKTOK_SCRIPT_SRC}"]`);

    function ensureTikTokScript(forceReload) {
      if (forceReload && scriptEl) {
        scriptEl.remove();
        scriptEl = null;
      }
      if (scriptEl) return;
      scriptEl = document.createElement("script");
      scriptEl.src = TIKTOK_SCRIPT_SRC;
      scriptEl.async = true;
      document.body.appendChild(scriptEl);
    }

    function showTikTokFallback(card) {
      if (card.classList.contains("tiktok-card--fallback")) return;
      const url = card.dataset.videoUrl || "https://www.tiktok.com/@pacofragancias.pe";
      card.classList.add("tiktok-card--fallback");
      card.innerHTML = `
        <a class="tiktok-fallback" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Ver video en TikTok">
          <div class="tiktok-fallback__icon"><i class="fab fa-tiktok" aria-hidden="true"></i></div>
          <div class="tiktok-fallback__text">Mira este video en TikTok</div>
          <span class="tiktok-fallback__btn">Ver en TikTok</span>
          <div class="tiktok-fallback__brand">@pacofragancias.pe</div>
        </a>`;
    }

    function activateCard(card) {
      if (card.dataset.activated) return;
      card.dataset.activated = "1";

      const videoId = card.dataset.videoId;
      const videoUrl = card.dataset.videoUrl;
      const bq = document.createElement("blockquote");
      bq.className = "tiktok-embed";
      bq.setAttribute("cite", videoUrl);
      bq.setAttribute("data-video-id", videoId);
      bq.appendChild(document.createElement("section"));
      card.appendChild(bq);

      ensureTikTokScript(false);

      // Si a los 3s el script ya estaba cargado de antes pero no
      // procesó este blockquote nuevo, forzamos una recarga del script
      // (TikTok re-escanea el documento completo al cargar).
      const retryTimer = setTimeout(() => {
        if (!card.querySelector("iframe")) ensureTikTokScript(true);
      }, 3000);

      // Si en 8s definitivamente no hay iframe renderizado, fallback.
      const fallbackTimer = setTimeout(() => {
        if (!card.querySelector("iframe")) showTikTokFallback(card);
      }, 8000);

      const mo = new MutationObserver(() => {
        if (card.querySelector("iframe")) {
          card.classList.add("tiktok-loaded");
          clearTimeout(retryTimer);
          clearTimeout(fallbackTimer);
          mo.disconnect();
        }
      });
      mo.observe(card, { childList: true, subtree: true });
    }

    // Activar solo cuando la card entra al viewport
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activateCard(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: "200px" });
      cards.forEach((c) => obs.observe(c));
    } else {
      cards.forEach(activateCard);
    }
  }

  /* ══════════════════════════════════════════════════════════════
     INIT
  ══════════════════════════════════════════════════════════════ */
  function init() {
    snapshotMeta();
    setupHeroMobile();
    renderFeatured();
    updateCartUI();
    setupBackToTop();
    setupCheckoutValidation();
    setupHeroParallax();
    setupThemeToggle();
    setupRipple();
    setupRecommender();
    setupReviewsCarousel();
    setupConnectivityToasts();
    setupInstagramFab();
    setupTikTok();
    maybeRemindCart();
    injectItemList();
    registerSW();
    navigateTo("home");
    applyHashRoute();
    window.addEventListener("hashchange", applyHashRoute);
    // Deep-link de producto al cargar + navegación con back/forward
    applyProductRoute(false);
    window.addEventListener("popstate", () => {
      const id = new URLSearchParams(location.search).get("producto");
      if (id && getProductById(parseInt(id, 10))) {
        openModal(parseInt(id, 10), true);
      } else if ($("modalOverlay").classList.contains("active")) {
        closeModal(true);
      }
    });

    // Trust cards reveal (they're static, not rendered dynamically)
    setTimeout(() => observeRevealElements(), 100);
  }

  init();
})();