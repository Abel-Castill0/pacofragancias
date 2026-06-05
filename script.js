(function () {
  "use strict";

  /* ══════════════════════════════════════════════════════════════
     DATA — PRODUCTOS
  ══════════════════════════════════════════════════════════════ */
  const products = [
    {
      id: 1,
      name: "Tropical Vibe",
      brand: "Rayhaan",
      category: "arabe",
      gender: "unisex",
      notes:
        "Mango, Piña, Bergamota, Coco, Vainilla, Almizcle, Sándalo, Vetiver",
      description:
        "Explosión tropical fresca y adictiva con mango, piña y coco cremoso sobre una base amaderada.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/tropical_vibe_ryhaan.webp",
      decantImage: "img/perfumes/tropical_vibe_ryhaan2.webp",
      cardImage: "img/perfumes/tropical_vibe_ryhaan.webp",
      featured: true,
      badge: "new",
      badgeText: "Nuevo",
    },
    {
      id: 2,
      name: "Jean Lowe Azure",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "unisex",
      notes:
        "Bergamota, Limón, Pimienta Rosa, Lavanda, Geranio, Jazmín, Sándalo, Almizcle, Ámbar",
      description:
        "Elegancia cítrica y amaderada con un corazón aromático de lavanda y geranio.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/jean_lowe_azure.webp",
      decantImage: "img/perfumes/jean_lowe_azure2.webp",
      cardImage: "img/perfumes/jean_lowe_azure.webp",
      featured: true,
      badge: "top",
      badgeText: "Top",
    },
    {
      id: 3,
      name: "Jean Lowe Immortel",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "masculino",
      notes:
        "Jengibre, Pomelo, Bergamota, Romero, Notas Acuáticas, Salvia, Geranio, Ambroxan, Ámbar, Ládano",
      description:
        "Fresco y aromático con un toque acuático. Inspiración del lujo francés con carácter propio.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/jean_lowe_immortel.webp",
      decantImage: "img/perfumes/jean_lowe_immortel2.webp",
      cardImage: "img/perfumes/jean_lowe_immortel.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 4,
      name: "Jean Lowe Vibe",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "unisex",
      notes:
        "Limón, Naranja, Menta, Grosella Negra, Cilantro, Albaricoque, Albahaca, Rosa, Higo, Dátiles, Ambreta",
      description:
        "Vibrante y refrescante con una explosión cítrica y un corazón frutal exótico.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/jean_lowe_vibe.webp",
      decantImage: "img/perfumes/jean_lowe_vibe2.webp",
      cardImage: "img/perfumes/jean_lowe_vibe.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 5,
      name: "Mast Rome Pour Homme",
      brand: "Bharara",
      category: "arabe",
      gender: "masculino",
      notes:
        "Lavanda, Cítricos, Vainilla, Especias Suaves, Vetiver, Ámbar, Almizcle",
      description:
        "Aromático y sofisticado. Lavanda fresca con un corazón dulce de vainilla y base amaderada.",
      fullSizes: { "100ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/mast_rome_pour_homme.webp",
      decantImage: "img/perfumes/mast_rome_pour_homme2.webp",
      cardImage: "img/perfumes/mast_rome_pour_homme.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 6,
      name: "Mast Rome Extradose",
      brand: "Bharara",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Limón, Hoja de Higuera, Musgo Blanco, Jazmín, Manzana Verde, Clavo, Canela, Vainilla",
      description:
        "Intenso y especiado. Una versión más potente con clavo y canela marcados sobre vainilla.",
      fullSizes: { "100ml": 455 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/mast_rome_extradose.webp",
      decantImage: "img/perfumes/mast_rome_extradose2.webp",
      cardImage: "img/perfumes/mast_rome_extradose.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 7,
      name: "Rome Imagine",
      brand: "Bharara Mast",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Limón, Lavanda, Geranio, Pimienta Negra, Cardamomo, Salvia, Vetiver, Cedro, Almizcle",
      description:
        "Fresco y especiado. Cítricos brillantes con un corazón aromático y base amaderada.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/rome_imagine.webp",
      decantImage: "img/perfumes/rome_imagine2.webp",
      cardImage: "img/perfumes/rome_imagine.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 8,
      name: "Musamam White Intense",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes:
        "Bergamota, Naranja, Especias, Coco, Ylang-Ylang, Ambroxan, Sándalo, Benjuí, Almizcle",
      description:
        "Cremoso y adictivo. Coco exótico con ylang-ylang sobre una base cálida de sándalo.",
      fullSizes: { "100ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/musamam_white_intense.webp",
      decantImage: "img/perfumes/musamam_white_intense2.webp",
      cardImage: "img/perfumes/musamam_white_intense.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 9,
      name: "Veneno Bianco",
      brand: "French Avenue",
      category: "arabe",
      gender: "unisex",
      notes:
        "Bergamota, Neroli, Leche, Tiaré, Flores Blancas, Ylang-Ylang, Coco, Vainilla, Guayaco, Ládano",
      description:
        "Floral y cremoso. Una fragancia luminosa con leche, flores blancas y un fondo de vainilla.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/veneno_bianco.webp",
      decantImage: "img/perfumes/veneno_bianco2.webp",
      cardImage: "img/perfumes/veneno_bianco.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 10,
      name: "Veneno",
      brand: "French Avenue",
      category: "arabe",
      gender: "unisex",
      notes: "Manzana, Canela, Humo, Tabaco, Musgo, Vainilla Bourbon, Orcanox",
      description:
        "Seductor y ahumado. Manzana crujiente con tabaco y un fondo cálido de vainilla bourbon.",
      fullSizes: { "100ml": 190 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/veneno.webp",
      decantImage: "img/perfumes/veneno2.webp",
      cardImage: "img/perfumes/veneno.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 11,
      name: "Mango Ice",
      brand: "Gulf Orchid",
      category: "arabe",
      gender: "unisex",
      notes:
        "Jengibre, Mango, Limón, Ruibarbo, Flores Blancas, Ámbar, Regaliz, Almizcle, Caramelo, Vainilla",
      description:
        "Tropical y refrescante. Mango jugoso con un toque de jengibre y un fondo goloso.",
      fullSizes: { "100ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/mango_ice.webp",
      decantImage: "img/perfumes/mango_ice2.webp",
      cardImage: "img/perfumes/mango_ice.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 12,
      name: "Freeze",
      brand: "Riiffs",
      category: "arabe",
      gender: "unisex",
      notes:
        "Menta Verde, Bergamota, Limón, Pomelo, Hielo, Jengibre, Té, Salvia, Peonía, Ambermax, Cedro",
      description:
        "Ultra refrescante. Menta helada con cítricos y un corazón de té verde.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/freeze.webp",
      decantImage: "img/perfumes/freeze2.webp",
      cardImage: "img/perfumes/freeze.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 13,
      name: "Beach Party",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Frutas Tropicales, Pomelo, Agua de Mar, Guayaba, Almizcle, Notas Amaderadas",
      description:
        "Veraniego y divertido. Frutas tropicales con notas marinas que evocan un día de playa.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/beach_party.webp",
      decantImage: "img/perfumes/beach_party2.webp",
      cardImage: "img/perfumes/beach_party.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 14,
      name: "Your Touch Intense",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "unisex",
      notes:
        "Pimienta Rosa, Violeta, Enebro, Toffee, Canela, Lavanda, Salvia, Vainilla, Haba Tonka, Ámbar, Gamuza",
      description:
        "Oriental y goloso. Toffee dulce con canela y lavanda sobre una base de vainilla y gamuza.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/your_touch_intense.webp",
      decantImage: "img/perfumes/your_touch_intense2.webp",
      cardImage: "img/perfumes/your_touch_intense.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 15,
      name: "Hawas Lava Gold",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Piña, Manzana, Pomelo, Limón, Azafrán, Cuero, Oud, Frambuesa, Caramelo, Ámbar, Pachulí, Musgo",
      description:
        "Frutal y lujoso. Piña y manzana con azafrán, cuero y un fondo de caramelo y ámbar.",
      fullSizes: { "100ml": 225 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_lava_gold.webp",
      decantImage: "img/perfumes/hawas_lava_gold2.webp",
      cardImage: "img/perfumes/hawas_lava_gold.webp",
      featured: false,
      badge: "top",
      badgeText: "Top",
    },
    {
      id: 16,
      name: "Hawas Thunder",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Manzana, Bergamota, Jengibre, Cedro, Mandarina, Mate, Peonía, Azahar, Pachulí, Ámbar, Vainilla, Almizcle",
      description:
        "Energético y vibrante. Manzana fresca con jengibre y un corazón floral sobre maderas.",
      fullSizes: { "100ml": 225 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_thunder.webp",
      decantImage: "img/perfumes/hawas_thunder2.webp",
      cardImage: "img/perfumes/hawas_thunder.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 17,
      name: "Hawas Viper",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Cannabis, Azafrán, Tomillo, Davana, Tabaco, Café, Frambuesa, Canela, Violeta, Haba Tonka, Almizcle",
      description:
        "Oscuro y provocativo. Cannabis y azafrán con tabaco y café sobre una base de tonka.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_viper.webp",
      decantImage: "img/perfumes/hawas_viper2.webp",
      cardImage: "img/perfumes/hawas_viper.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 18,
      name: "Hawas Exotic",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Artemisa, Coco, Lavanda, Cardamomo, Zanahoria, Bergamota, Jazmín, Freesia, Lirio, Canela, Almizcle, Pachulí, Benjuí",
      description:
        "Exótico y envolvente. Coco cremoso con artemisa y un corazón floral especiado.",
      fullSizes: { "100ml": 225 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_exotic.webp",
      decantImage: "img/perfumes/hawas_exotic2.webp",
      cardImage: "img/perfumes/hawas_exotic.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 19,
      name: "Hawas for Him",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Manzana, Bergamota, Limón, Canela, Flor de Azahar, Cardamomo, Ciruela, Pachulí, Ámbar Gris, Almizcle",
      description:
        "Acuático y vigorizante. Manzana y cítricos con canela sobre una base marina ambarada.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_for_him.webp",
      decantImage: "img/perfumes/hawas_for_him2.webp",
      cardImage: "img/perfumes/hawas_for_him.webp",
      featured: true,
      badge: "top",
      badgeText: "Top",
    },
    {
      id: 20,
      name: "Hawas Black",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Piña, Pomelo, Pachulí, Cedro, Jazmín, Musgo de Roble, Notas Amaderadas, Ámbar",
      description:
        "Fresco y profundo. Piña y pomelo con un corazón de jazmín sobre musgo de roble.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_black.webp",
      decantImage: "img/perfumes/hawas_black2.webp",
      cardImage: "img/perfumes/hawas_black.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 21,
      name: "Hawas Tropical",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Frutas Tropicales, Coco, Bergamota, Jazmín, Vainilla, Sándalo, Almizcle",
      description:
        "Paraíso tropical en un frasco. Frutas exóticas con coco y un fondo amaderado.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_tropical.webp",
      decantImage: "img/perfumes/hawas_tropical2.webp",
      cardImage: "img/perfumes/hawas_tropical.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 22,
      name: "Hawas Ice",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Manzana, Limón, Bergamota, Anís Estrellado, Ciruela, Flor de Azahar, Cardamomo, Almizcle, Ámbar, Musgo",
      description:
        "Helado y revitalizante. Manzana congelada con anís y un corazón floral especiado.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_ice.webp",
      decantImage: "img/perfumes/hawas_ice2.webp",
      cardImage: "img/perfumes/hawas_ice.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 23,
      name: "Hawas Kobra",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Mandarina, Jengibre, Té Verde, Canela, Neroli, Madera, Almizcle, Ámbar",
      description:
        "Cítrico y especiado. Jengibre y té verde con mandarina sobre maderas limpias.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_kobra.webp",
      decantImage: "img/perfumes/hawas_kobra2.webp",
      cardImage: "img/perfumes/hawas_kobra.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 24,
      name: "Hawas Elixir",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Nuez Moscada, Cardamomo, Canela, Lavanda, Cuero, Pachulí, Vainilla, Ládano, Ámbar",
      description:
        "Intenso y magnético. Especias cálidas con cuero y un fondo de vainilla y ámbar.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_elixir.webp",
      decantImage: "img/perfumes/hawas_elixir2.webp",
      cardImage: "img/perfumes/hawas_elixir.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 25,
      name: "Hawas Malibu",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Coco, Piña, Cítricos, Notas Marinas, Jazmín, Sándalo, Almizcle, Ámbar",
      description:
        "Playero y relajado. Coco y piña con brisa marina sobre un fondo amaderado.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_malibu.webp",
      decantImage: "img/perfumes/hawas_malibu2.webp",
      cardImage: "img/perfumes/hawas_malibu.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 26,
      name: "Hawas Fire",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Pimienta, Canela, Nuez Moscada, Cuero, Tabaco, Ámbar, Pachulí, Vainilla, Almizcle",
      description:
        "Cálido y ardiente. Especias intensas con tabaco y cuero sobre una base ambarada.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_fire.webp",
      decantImage: "img/perfumes/hawas_fire2.webp",
      cardImage: "img/perfumes/hawas_fire.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 27,
      name: "Hawas Verde",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Hojas Verdes, Bergamota, Manzana, Violeta, Jazmín, Cedro, Musgo, Almizcle",
      description:
        "Fresco y natural. Notas verdes con manzana crujiente sobre un fondo de cedro.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_verde.webp",
      decantImage: "img/perfumes/hawas_verde2.webp",
      cardImage: "img/perfumes/hawas_verde.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 28,
      name: "Hawas Atlantis",
      brand: "Rasasi",
      category: "arabe",
      gender: "masculino",
      notes:
        "Notas Marinas, Bergamota, Limón, Lavanda, Romero, Sándalo, Ámbar Gris, Almizcle",
      description:
        "Oceánico y profundo. Brisa marina con lavanda sobre un fondo de ámbar gris.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_atlantis.webp",
      decantImage: "img/perfumes/hawas_atlantis2.webp",
      cardImage: "img/perfumes/hawas_atlantis.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 29,
      name: "Supremacy Not Only Intense",
      brand: "Afnan",
      category: "nicho",
      gender: "masculino",
      notes:
        "Grosella Negra, Bergamota, Manzana, Lavanda, Pachulí, Musgo de Roble, Azafrán, Almizcle, Ámbar Gris",
      description:
        "Frutal y musgoso. Grosella negra y manzana con un corazón de lavanda sobre musgo de roble.",
      fullSizes: { "150ml": 225 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/supremacy_not_only_intense.webp",
      decantImage: "img/perfumes/supremacy_not_only_intense2.webp",
      cardImage: "img/perfumes/supremacy_not_only_intense.webp",
      featured: true,
      badge: "top",
      badgeText: "Top",
    },
    {
      id: 30,
      name: "Supremacy Collector's Edition",
      brand: "Afnan",
      category: "nicho",
      gender: "masculino",
      notes:
        "Piña, Bergamota, Manzana, Flores Blancas, Flor de Azahar, Abedul, Ámbar, Musgo de Roble, Almizcle, Ámbar Gris",
      description:
        "Frutal y elegante. Piña jugosa con flores blancas sobre una base de musgo de roble.",
      fullSizes: { "100ml": 225 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/supremacy_collectors.webp",
      decantImage: "img/perfumes/supremacy_collectors2.webp",
      cardImage: "img/perfumes/supremacy_collectors.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 31,
      name: "Khamrah",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes:
        "Canela, Nuez Moscada, Bergamota, Dátiles, Praliné, Tuberosa, Vainilla, Haba Tonka, Benjuí, Mirra",
      description:
        "Cálido y goloso. Canela y dátiles con praliné sobre una base de vainilla y benjuí.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/khamrah.webp",
      decantImage: "img/perfumes/khamrah2.webp",
      cardImage: "img/perfumes/khamrah.webp",
      featured: true,
      badge: "top",
      badgeText: "Top",
    },
    {
      id: 32,
      name: "Khamrah Qahwa",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes:
        "Canela, Cardamomo, Jengibre, Praliné, Frutas Confitadas, Flores Blancas, Vainilla, Café, Haba Tonka, Benjuí, Almizcle",
      description:
        "Gourmand y adictivo. Café árabe con canela y cardamomo sobre praliné y vainilla.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/khamrah_qahwa.webp",
      decantImage: "img/perfumes/khamrah_qahwa2.webp",
      cardImage: "img/perfumes/khamrah_qahwa.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 33,
      name: "Khamrah Dukhan",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes:
        "Incienso, Canela, Dátiles, Praliné, Vainilla, Haba Tonka, Ámbar, Madera de Oud",
      description:
        "Ahumado y dulce. Incienso y dátiles con un toque de oud sobre vainilla.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/khamrah_dukhan.webp",
      decantImage: "img/perfumes/khamrah_dukhan2.webp",
      cardImage: "img/perfumes/khamrah_dukhan.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 34,
      name: "The Kingdom",
      brand: "Lattafa",
      category: "arabe",
      gender: "masculino",
      notes:
        "Salvia, Lavanda, Menta, Tabaco, Vainilla, Flor de Azahar, Benjuí, Haba Tonka, Ládano",
      description:
        "Aromático y real. Lavanda y menta con tabaco y vainilla sobre una base resinosa.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/the_kingdom.webp",
      decantImage: "img/perfumes/the_kingdom2.webp",
      cardImage: "img/perfumes/the_kingdom.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 35,
      name: "Liquid Brun",
      brand: "French Avenue",
      category: "arabe",
      gender: "unisex",
      notes:
        "Canela, Flor de Azahar, Cardamomo, Bergamota, Vainilla Bourbon, Elemí, Praliné, Ambroxan, Guayaco, Almizcle",
      description:
        "Gourmand y especiado. Canela y cardamomo con vainilla bourbon sobre praliné.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/liquid_brun.webp",
      decantImage: "img/perfumes/liquid_brun2.webp",
      cardImage: "img/perfumes/liquid_brun.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 36,
      name: "Vintage Radio",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes:
        "Lavanda, Salvia, Bergamota, Ciruela, Palo Santo, Pimienta Negra, Sándalo, Amberwood",
      description:
        "Amaderado y nostálgico. Lavanda y ciruela con palo santo sobre sándalo.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/vintage_radio.webp",
      decantImage: "img/perfumes/vintage_radio2.webp",
      cardImage: "img/perfumes/vintage_radio.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 37,
      name: "His Confession",
      brand: "Lattafa",
      category: "arabe",
      gender: "masculino",
      notes:
        "Mandarina, Canela, Lavanda, Iris, Benjuí, Ciprés, Vainilla, Haba Tonka, Ámbar, Incienso, Cedro, Pachulí",
      description:
        "Oriental y complejo. Canela y mandarina con iris sobre incienso y vainilla.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/his_confession.webp",
      decantImage: "img/perfumes/his_confession2.webp",
      cardImage: "img/perfumes/his_confession.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 38,
      name: "Sceptre Malachite",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "unisex",
      notes:
        "Mandarina Verde, Bergamota, Grosella Negra, Notas Aromáticas, Especias, Jazmín, Pimienta Rosa, Lavanda, Ámbar, Almizcle, Vetiver",
      description:
        "Cítrico y especiado. Mandarina verde con grosella negra sobre un fondo almizclado.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/sceptre_malachite.webp",
      decantImage: "img/perfumes/sceptre_malachite2.webp",
      cardImage: "img/perfumes/sceptre_malachite.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 39,
      name: "Arabian Sky",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Bergamota, Manzana, Canela, Jazmín, Rosa, Pachulí, Sándalo, Ámbar, Almizcle",
      description:
        "Fresco y oriental. Manzana y canela con un corazón floral sobre maderas cálidas.",
      fullSizes: { "100ml": 205 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/arabian_sky.webp",
      decantImage: "img/perfumes/arabian_sky2.webp",
      cardImage: "img/perfumes/arabian_sky.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 40,
      name: "Afeef",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes: "Azafrán, Rosa, Oud, Ámbar, Sándalo, Almizcle, Vainilla",
      description:
        "Oriental y lujoso. Azafrán y rosa con oud sobre una base de sándalo y vainilla.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/afeef.webp",
      decantImage: "img/perfumes/afeef2.webp",
      cardImage: "img/perfumes/afeef.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 41,
      name: "Vulcan Feu",
      brand: "French Avenue",
      category: "arabe",
      gender: "unisex",
      notes:
        "Pimienta Negra, Canela, Tabaco, Cuero, Vainilla, Ámbar, Pachulí, Almizcle",
      description:
        "Ardiente y magnético. Pimienta y canela con tabaco y cuero sobre vainilla.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/vulcan_feu.webp",
      decantImage: "img/perfumes/vulcan_feu2.webp",
      cardImage: "img/perfumes/vulcan_feu.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 42,
      name: "Island",
      brand: "Khadlaj",
      category: "arabe",
      gender: "unisex",
      notes: "Coco, Piña, Notas Marinas, Jazmín, Vainilla, Sándalo, Almizcle",
      description:
        "Paraíso isleño. Coco y piña con brisa marina sobre un fondo amaderado.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/island.webp",
      decantImage: "img/perfumes/island2.webp",
      cardImage: "img/perfumes/island.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 43,
      name: "9 PM",
      brand: "Afnan",
      category: "nicho",
      gender: "masculino",
      notes:
        "Manzana, Canela, Lavanda, Bergamota, Flor de Azahar, Lirio del Valle, Vainilla, Haba Tonka, Ámbar, Pachulí",
      description:
        "Dulce y adictivo. Manzana y canela con un corazón floral sobre vainilla y ámbar.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/9_pm.webp",
      decantImage: "img/perfumes/9_pm2.webp",
      cardImage: "img/perfumes/9_pm.webp",
      featured: true,
      badge: "top",
      badgeText: "Top",
    },
    {
      id: 44,
      name: "9 AM Dive",
      brand: "Afnan",
      category: "nicho",
      gender: "masculino",
      notes:
        "Cítricos, Manzana Verde, Notas Acuáticas, Lavanda, Geranio, Almizcle, Ámbar, Sándalo",
      description:
        "Fresco matutino. Cítricos y manzana verde con notas acuáticas sobre almizcle.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/9_am_dive.webp",
      decantImage: "img/perfumes/9_am_dive2.webp",
      cardImage: "img/perfumes/9_am_dive.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 45,
      name: "9 PM Rebel",
      brand: "Afnan",
      category: "nicho",
      gender: "unisex",
      notes:
        "Mandarina, Piña, Manzana Verde, Cedro, Musgo de Roble, Vainilla, Caramelo, Ámbar Gris, Almizcle",
      description:
        "Rebelde y frutal. Mandarina y piña con cedro sobre caramelo y ámbar.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/9_pm_rebel.webp",
      decantImage: "img/perfumes/9_pm_rebel2.webp",
      cardImage: "img/perfumes/9_pm_rebel.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 46,
      name: "9 PM Elixir",
      brand: "Afnan",
      category: "nicho",
      gender: "masculino",
      notes:
        "Nuez Moscada, Elemí, Cardamomo, Pimiento, Lavandín, Cuero, Ládano, Pachulí, Vainilla",
      description:
        "Intenso y especiado. Cardamomo y nuez moscada con cuero sobre ládano y vainilla.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/9_pm_elixir.webp",
      decantImage: "img/perfumes/9_pm_elixir2.webp",
      cardImage: "img/perfumes/9_pm_elixir.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 47,
      name: "9 PM Night Out",
      brand: "Afnan",
      category: "nicho",
      gender: "masculino",
      notes:
        "Bergamota, Pimienta Negra, Lavanda, Violeta, Vainilla, Ámbar, Pachulí, Almizcle",
      description:
        "Nocturno y seductor. Bergamota y pimienta con lavanda sobre un fondo oriental.",
      fullSizes: { "100ml": 205 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/9_pm_night_out.webp",
      decantImage: "img/perfumes/9_pm_night_out2.webp",
      cardImage: "img/perfumes/9_pm_night_out.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 48,
      name: "Opulent Dubai",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes: "Azafrán, Rosa, Oud, Ámbar, Sándalo, Almizcle, Vainilla, Pachulí",
      description:
        "Lujoso y opulento. Azafrán y rosa con oud sobre una base de sándalo.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/opulent_dubai.webp",
      decantImage: "img/perfumes/opulent_dubai2.webp",
      cardImage: "img/perfumes/opulent_dubai.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 49,
      name: "Odyssey Mandarin Sky",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes: "Mandarina, Bergamota, Neroli, Jazmín, Vainilla, Almizcle, Ámbar",
      description:
        "Cítrico celestial. Mandarina jugosa con neroli sobre vainilla y almizcle.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_mandarin_sky.webp",
      decantImage: "img/perfumes/odyssey_mandarin_sky2.webp",
      cardImage: "img/perfumes/odyssey_mandarin_sky.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 50,
      name: "Odyssey Mandarin Sky Elixir",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Mandarina, Bergamota, Cardamomo, Jazmín, Rosa, Vainilla, Ámbar, Almizcle, Oud",
      description:
        "Cítrico intenso. Mandarina y cardamomo con rosa sobre oud y vainilla.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_mandarin_sky_elixir.webp",
      decantImage: "img/perfumes/odyssey_mandarin_sky_elixir2.webp",
      cardImage: "img/perfumes/odyssey_mandarin_sky_elixir.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 51,
      name: "Odyssey Mandarin Sky Vintage",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Mandarina, Limón, Lavanda, Romero, Musgo de Roble, Sándalo, Ámbar, Almizcle",
      description:
        "Clásico renovado. Mandarina y lavanda con musgo de roble sobre sándalo.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_mandarin_sky_vintage.webp",
      decantImage: "img/perfumes/odyssey_mandarin_sky_vintage2.webp",
      cardImage: "img/perfumes/odyssey_mandarin_sky_vintage.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 52,
      name: "Odyssey Limoni Fresh",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Limón, Bergamota, Jengibre, Lavanda, Geranio, Vetiver, Cedro, Almizcle",
      description:
        "Ultra cítrico. Limón vibrante con jengibre sobre un fondo de vetiver.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_limoni_fresh.webp",
      decantImage: "img/perfumes/odyssey_limoni_fresh2.webp",
      cardImage: "img/perfumes/odyssey_limoni_fresh.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 53,
      name: "Odyssey Homme Black Edition",
      brand: "Armaf",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Manzana, Canela, Jazmín, Rosa, Pachulí, Sándalo, Ámbar, Almizcle",
      description:
        "Masculino y versátil. Manzana y canela con un corazón floral sobre pachulí.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_homme_edition.webp",
      decantImage: "img/perfumes/odyssey_homme_edition2.webp",
      cardImage: "img/perfumes/odyssey_homme_edition.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 54,
      name: "Odyssey Homme White Edition",
      brand: "Armaf",
      category: "arabe",
      gender: "masculino",
      notes:
        "Limón, Bergamota, Lavanda, Jazmín, Cedro, Vetiver, Almizcle Blanco, Ámbar",
      description:
        "Luminoso y limpio. Cítricos frescos con lavanda sobre almizcle blanco.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_homme_white.webp",
      decantImage: "img/perfumes/odyssey_homme_white2.webp",
      cardImage: "img/perfumes/odyssey_homme_white.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 55,
      name: "Odyssey BA HA MAS",
      brand: "Armaf",
      category: "arabe",
      gender: "masculino",
      notes:
        "Pimienta, Bergamota, Lavanda, Cardamomo, Sándalo, Cedro, Ámbar, Almizcle",
      description:
        "Especiado y oriental. Pimienta y cardamomo con sándalo sobre almizcle.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_ba_ha_mas.webp",
      decantImage: "img/perfumes/odyssey_ba_ha_mas2.webp",
      cardImage: "img/perfumes/odyssey_ba_ha_mas.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 56,
      name: "Odyssey Aqua Edition",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Notas Acuáticas, Bergamota, Limón, Lavanda, Jazmín, Almizcle, Ámbar, Cedro",
      description:
        "Acuático y fresco. Notas marinas con cítricos sobre un fondo de cedro.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_aqua.webp",
      decantImage: "img/perfumes/odyssey_aqua2.webp",
      cardImage: "img/perfumes/odyssey_aqua.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 57,
      name: "Odyssey Go Mango",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Mango, Piña, Bergamota, Coco, Jazmín, Vainilla, Sándalo, Almizcle",
      description: "Tropical y jugoso. Mango y piña con coco sobre vainilla.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_go_mango.webp",
      decantImage: "img/perfumes/odyssey_go_mango2.webp",
      cardImage: "img/perfumes/odyssey_go_mango.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 58,
      name: "Odyssey Artistico",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Bergamota, Mandarina, Canela, Jazmín, Rosa, Pachulí, Vainilla, Ámbar, Almizcle",
      description:
        "Artístico y floral. Mandarina y canela con rosa sobre pachulí.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_artistico.webp",
      decantImage: "img/perfumes/odyssey_artistico2.webp",
      cardImage: "img/perfumes/odyssey_artistico.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 59,
      name: "Odyssey Toffee Coffee",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Café, Toffee, Bergamota, Canela, Vainilla, Haba Tonka, Ámbar, Sándalo",
      description:
        "Gourmand y cálido. Café y toffee con canela sobre vainilla y haba tonka.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_toffee_coffee.webp",
      decantImage: "img/perfumes/odyssey_toffee_coffee2.webp",
      cardImage: "img/perfumes/odyssey_toffee_coffee.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 60,
      name: "Odyssey Mega",
      brand: "Armaf",
      category: "arabe",
      gender: "masculino",
      notes:
        "Piña, Bergamota, Grosella Negra, Jazmín, Pachulí, Musgo de Roble, Ámbar, Almizcle",
      description:
        "Potente y frutal. Piña y grosella negra con jazmín sobre musgo de roble.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_mega.webp",
      decantImage: "img/perfumes/odyssey_mega2.webp",
      cardImage: "img/perfumes/odyssey_mega.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 61,
      name: "Asad Bourbon",
      brand: "Lattafa",
      category: "arabe",
      gender: "masculino",
      notes:
        "Pimienta Negra, Bourbon, Tabaco, Vainilla, Ámbar, Cedro, Almizcle",
      description:
        "Cálido y licoroso. Bourbon y tabaco con pimienta negra sobre vainilla.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/asad_bourbon.webp",
      decantImage: "img/perfumes/asad_bourbon2.webp",
      cardImage: "img/perfumes/asad_bourbon.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 62,
      name: "Asad Elixir",
      brand: "Lattafa",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Cardamomo, Pimienta Rosa, Cedro, Pachulí, Rosa, Oud, Almizcle, Ámbar",
      description:
        "Intenso y amaderado. Cardamomo y pimienta con oud sobre cedro y almizcle.",
      fullSizes: { "100ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/asad_elixir.webp",
      decantImage: "img/perfumes/asad_elixir2.webp",
      cardImage: "img/perfumes/asad_elixir.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 63,
      name: "Asad Zanzibar",
      brand: "Lattafa",
      category: "arabe",
      gender: "masculino",
      notes:
        "Lavanda, Pimienta Negra, Vainilla, Iris, Ámbar, Almizcle, Notas Amaderadas",
      description:
        "Exótico y especiado. Lavanda y pimienta negra con vainilla sobre iris.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/asad_zanzibar.webp",
      decantImage: "img/perfumes/asad_zanzibar2.webp",
      cardImage: "img/perfumes/asad_zanzibar.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 64,
      name: "Asad",
      brand: "Lattafa",
      category: "arabe",
      gender: "masculino",
      notes:
        "Pimienta Negra, Piña, Tabaco, Café, Pachulí, Iris, Vainilla, Ámbar, Benjuí, Ládano",
      description:
        "Legendario y audaz. Piña y tabaco con café sobre vainilla y ámbar.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/asad.webp",
      decantImage: "img/perfumes/asad2.webp",
      cardImage: "img/perfumes/asad.webp",
      featured: true,
      badge: "top",
      badgeText: "Top",
    },
    {
      id: 65,
      name: "Nitro Red",
      brand: "Dumont Paris",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Lavanda, Manzana, Sandía, Cedro, Cálamo, Sándalo, Pachulí, Ámbar",
      description:
        "Energético y frutal. Manzana y sandía con lavanda sobre sándalo.",
      fullSizes: { "100ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/nitro_red.webp",
      decantImage: "img/perfumes/nitro_red2.webp",
      cardImage: "img/perfumes/nitro_red.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 66,
      name: "Nitro Red Intensely",
      brand: "Dumont Paris",
      category: "arabe",
      gender: "masculino",
      notes:
        "Canela, Coñac, Haba Tonka, Clavo, Roble, Sándalo, Vainilla, Ámbar",
      description:
        "Intenso y especiado. Coñac y canela con clavo sobre vainilla.",
      fullSizes: { "100ml": 205 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/nitro_red_intensely.webp",
      decantImage: "img/perfumes/nitro_red_intensely2.webp",
      cardImage: "img/perfumes/nitro_red_intensely.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 67,
      name: "Nitro Elixir",
      brand: "Dumont Paris",
      category: "arabe",
      gender: "masculino",
      notes:
        "Cardamomo, Canela, Lavanda, Cuero, Pachulí, Vainilla, Ámbar, Almizcle",
      description:
        "Elixir magnético. Cardamomo y canela con cuero sobre pachulí.",
      fullSizes: { "100ml": 205 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/nitro_elixir.webp",
      decantImage: "img/perfumes/nitro_elixir2.webp",
      cardImage: "img/perfumes/nitro_elixir.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 68,
      name: "Nitro White",
      brand: "Dumont Paris",
      category: "arabe",
      gender: "masculino",
      notes:
        "Limón, Bergamota, Lavanda, Pimienta Negra, Cardamomo, Cedro, Vetiver, Almizcle",
      description:
        "Fresco y limpio. Cítricos brillantes con lavanda sobre vetiver.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/nitro_white.webp",
      decantImage: "img/perfumes/nitro_white2.webp",
      cardImage: "img/perfumes/nitro_white.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 69,
      name: "Club de Nuit Intense Man",
      brand: "Armaf",
      category: "arabe",
      gender: "masculino",
      notes:
        "Limón, Piña, Grosella Negra, Bergamota, Manzana, Abedul, Jazmín, Rosa, Almizcle, Ámbar Gris, Pachulí, Vainilla",
      description:
        "El legendario clon premium. Piña ahumada con grosella negra sobre ámbar gris.",
      fullSizes: { "105ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/club_de_nuit_intense_man.webp",
      decantImage: "img/perfumes/club_de_nuit_intense_man2.webp",
      cardImage: "img/perfumes/club_de_nuit_intense_man.webp",
      featured: true,
      badge: "top",
      badgeText: "Top",
    },
    {
      id: 70,
      name: "Club de Nuit Sillage",
      brand: "Armaf",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Limón, Grosella Negra, Jazmín, Rosa, Pachulí, Almizcle, Ámbar, Vainilla",
      description:
        "Estela impecable. Cítricos y grosella negra con rosa sobre almizcle.",
      fullSizes: { "105ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/club_de_nuit_sillage.webp",
      decantImage: "img/perfumes/club_de_nuit_sillage2.webp",
      cardImage: "img/perfumes/club_de_nuit_sillage.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 71,
      name: "Club de Nuit Urban Elixir",
      brand: "Armaf",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Pimienta Negra, Lavanda, Geranio, Pachulí, Cedro, Ámbar, Almizcle",
      description:
        "Urbano y moderno. Pimienta y bergamota con lavanda sobre cedro.",
      fullSizes: { "105ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/club_de_nuit_urban_elixir.webp",
      decantImage: "img/perfumes/club_de_nuit_urban_elixir2.webp",
      cardImage: "img/perfumes/club_de_nuit_urban_elixir.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 72,
      name: "Club de Nuit Blue Iconic",
      brand: "Armaf",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Limón, Notas Acuáticas, Lavanda, Jazmín, Cedro, Sándalo, Almizcle",
      description:
        "Azul e icónico. Cítricos acuáticos con lavanda sobre sándalo.",
      fullSizes: { "105ml": 205 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/club_de_nuit_blue_iconic.webp",
      decantImage: "img/perfumes/club_de_nuit_blue_iconic2.webp",
      cardImage: "img/perfumes/club_de_nuit_blue_iconic.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 73,
      name: "Club de Nuit Untold",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes: "Azafrán, Jazmín, Cedro, Ámbar, Almizcle, Vainilla",
      description:
        "Misterioso y oriental. Azafrán y jazmín sobre ámbar y vainilla.",
      fullSizes: { "105ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/club_de_nuit_untold.webp",
      decantImage: "img/perfumes/club_de_nuit_untold2.webp",
      cardImage: "img/perfumes/club_de_nuit_untold.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 74,
      name: "Club de Nuit Milestone",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Bergamota, Limón, Notas Marinas, Jazmín, Violeta, Sándalo, Ámbar, Almizcle",
      description: "Acuático y limpio. Notas marinas con jazmín sobre sándalo.",
      fullSizes: { "105ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/club_de_nuit_milestone.webp",
      decantImage: "img/perfumes/club_de_nuit_milestone2.webp",
      cardImage: "img/perfumes/club_de_nuit_milestone.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 75,
      name: "Bade'e Al Oud Sublime",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes: "Manzana, Lichi, Rosa, Ciruela, Jazmín, Musgo, Vainilla, Pachulí",
      description:
        "Frutal y musgoso. Manzana y lichi con ciruela sobre vainilla.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/badee_al_oud_sublime.webp",
      decantImage: "img/perfumes/badee_al_oud_sublime2.webp",
      cardImage: "img/perfumes/badee_al_oud_sublime.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 76,
      name: "Bade'e Al Oud Amethyst",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes: "Rosa, Jazmín, Azafrán, Oud, Ámbar, Vainilla, Almizcle",
      description:
        "Floral y oud. Rosa y jazmín con azafrán sobre oud aterciopelado.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/badee_al_oud_amethyst.webp",
      decantImage: "img/perfumes/badee_al_oud_amethyst2.webp",
      cardImage: "img/perfumes/badee_al_oud_amethyst.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 77,
      name: "Bade'e Al Oud Honor & Glory",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes:
        "Piña, Bergamota, Azafrán, Canela, Jazmín, Oud, Vainilla, Ámbar, Almizcle",
      description: "Glorioso y frutal. Piña y canela con azafrán sobre oud.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/badee_al_oud_honor_glory.webp",
      decantImage: "img/perfumes/badee_al_oud_honor_glory2.webp",
      cardImage: "img/perfumes/badee_al_oud_honor_glory.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 78,
      name: "Glacier Le Noir",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Cardamomo, Lavanda, Iris, Vainilla, Notas Orientales, Maderas",
      description:
        "Oscuro y elegante. Lavanda e iris con cardamomo sobre vainilla.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/glacier_le_noir.webp",
      decantImage: "img/perfumes/glacier_le_noir2.webp",
      cardImage: "img/perfumes/glacier_le_noir.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 79,
      name: "Amber Oud Aqua Dubai",
      brand: "Al Haramain",
      category: "nicho",
      gender: "unisex",
      notes:
        "Bergamota, Limón, Notas Acuáticas, Jazmín, Rosa, Ámbar, Almizcle, Sándalo",
      description:
        "Acuático y lujoso. Cítricos con notas acuáticas sobre ámbar y sándalo.",
      fullSizes: { "100ml": 265 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/amber_oud_aqua_dubai.webp",
      decantImage: "img/perfumes/amber_oud_aqua_dubai2.webp",
      cardImage: "img/perfumes/amber_oud_aqua_dubai.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 80,
      name: "Amber Oud Gold Edition",
      brand: "Al Haramain",
      category: "nicho",
      gender: "unisex",
      notes:
        "Bergamota, Melón, Piña, Jazmín, Rosa, Ámbar, Almizcle, Vainilla, Sándalo",
      description:
        "Dorado y afrutado. Melón y piña con rosa sobre ámbar dorado.",
      fullSizes: { "120ml": 250 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/amber_oud_gold_edition.webp",
      decantImage: "img/perfumes/amber_oud_gold_edition2.webp",
      cardImage: "img/perfumes/amber_oud_gold_edition.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 81,
      name: "Amber Oud Gold Edition Extreme",
      brand: "Al Haramain",
      category: "nicho",
      gender: "unisex",
      notes:
        "Bergamota, Melón, Piña, Jazmín, Rosa, Ámbar, Almizcle, Vainilla, Oud, Sándalo",
      description:
        "Extremo y lujoso. Versión intensificada con oud sobre ámbar dorado.",
      fullSizes: { "100ml": 295 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/amber_oud_gold_extreme.webp",
      decantImage: "img/perfumes/amber_oud_gold_extreme2.webp",
      cardImage: "img/perfumes/amber_oud_gold_extreme.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 82,
      name: "Bharara King",
      brand: "Bharara",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Manzana, Canela, Jazmín, Rosa, Pachulí, Ámbar, Almizcle, Vainilla",
      description:
        "Majestuoso y oriental. Manzana y canela con rosa sobre pachulí.",
      fullSizes: { "100ml": 250 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/bharara_king.webp",
      decantImage: "img/perfumes/bharara_king2.webp",
      cardImage: "img/perfumes/bharara_king.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 83,
      name: "Art of Universe",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes:
        "Bergamota, Notas Verdes, Jazmín, Violeta, Cedro, Sándalo, Ámbar, Almizcle",
      description: "Cósmico y verde. Notas verdes con jazmín sobre cedro.",
      fullSizes: { "100ml": 225 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/art_of_universe.webp",
      decantImage: "img/perfumes/art_of_universe2.webp",
      cardImage: "img/perfumes/art_of_universe.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 84,
      name: "Pisa",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes:
        "Mandarina, Bergamota, Lavanda, Jazmín, Cedro, Vetiver, Ámbar, Almizcle",
      description: "Italiano y fresco. Mandarina con lavanda sobre vetiver.",
      fullSizes: { "100ml": 225 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/pisa.webp",
      decantImage: "img/perfumes/pisa2.webp",
      cardImage: "img/perfumes/pisa.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 85,
      name: "Yeah! Man",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Manzana, Lavanda, Geranio, Cedro, Sándalo, Vainilla, Almizcle",
      description:
        "Energético y moderno. Manzana y lavanda sobre cedro y vainilla.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/yeah_man.webp",
      decantImage: "img/perfumes/yeah_man2.webp",
      cardImage: "img/perfumes/yeah_man.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 86,
      name: "Salvo",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Limón, Lavanda, Pimienta Negra, Geranio, Cedro, Pachulí, Almizcle",
      description:
        "Audaz y fresco. Limón y pimienta negra con lavanda sobre pachulí.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/salvo.webp",
      decantImage: "img/perfumes/salvo2.webp",
      cardImage: "img/perfumes/salvo.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 87,
      name: "Jasoor",
      brand: "Lattafa",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Manzana, Canela, Jazmín, Rosa, Pachulí, Ámbar, Almizcle, Vainilla",
      description:
        "Audaz y oriental. Manzana y canela con rosa sobre vainilla.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/jasoor.webp",
      decantImage: "img/perfumes/jasoor2.webp",
      cardImage: "img/perfumes/jasoor.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 88,
      name: "Ishq Al Shuyukh Silver",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes:
        "Bergamota, Azafrán, Rosa, Oud, Ámbar, Sándalo, Almizcle, Vainilla",
      description: "Plateado y noble. Azafrán y rosa con oud sobre sándalo.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/ishq_al_shuyukh_silver.webp",
      decantImage: "img/perfumes/ishq_al_shuyukh_silver2.webp",
      cardImage: "img/perfumes/ishq_al_shuyukh_silver.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 89,
      name: "Liam Blue Shine",
      brand: "Lattafa",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Limón, Notas Acuáticas, Lavanda, Jazmín, Sándalo, Almizcle, Ámbar",
      description:
        "Azul y brillante. Cítricos acuáticos con lavanda sobre sándalo.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/liam_blue_shine.webp",
      decantImage: "img/perfumes/liam_blue_shine2.webp",
      cardImage: "img/perfumes/liam_blue_shine.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 90,
      name: "Tag Him Uomo Rosso",
      brand: "Armaf",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Manzana, Canela, Jazmín, Cedro, Pachulí, Ámbar, Almizcle",
      description:
        "Italiano y apasionado. Manzana y canela con jazmín sobre cedro.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/tag_him_uomo_rosso.webp",
      decantImage: "img/perfumes/tag_him_uomo_rosso2.webp",
      cardImage: "img/perfumes/tag_him_uomo_rosso.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 91,
      name: "Nautica Voyage",
      brand: "Nautica",
      category: "disenador",
      gender: "masculino",
      notes:
        "Manzana Verde, Hojas Verdes, Mimosa, Loto, Notas Acuáticas, Cedro, Ámbar, Almizcle",
      description:
        "Clásico acuático. Manzana verde y loto con brisa marina sobre cedro.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/nautica_voyage.webp",
      decantImage: "img/perfumes/nautica_voyage2.webp",
      cardImage: "img/perfumes/nautica_voyage.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 92,
      name: "Lovely Cherie",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "femenino",
      notes: "Cereza, Almendra, Rosa, Jazmín, Vainilla, Sándalo, Almizcle",
      description:
        "Dulce y encantador. Cereza y almendra con rosa sobre vainilla.",
      fullSizes: { "80ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/lovely_cherie.webp",
      decantImage: "img/perfumes/lovely_cherie2.webp",
      cardImage: "img/perfumes/lovely_cherie.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 93,
      name: "Qaed Al Fursan",
      brand: "Lattafa",
      category: "arabe",
      gender: "masculino",
      notes: "Piña, Bergamota, Jazmín, Cedro, Ámbar, Almizcle, Vainilla",
      description: "Legendario y frutal. Piña jugosa con jazmín sobre ámbar.",
      fullSizes: { "90ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/qaed_al_fursan.webp",
      decantImage: "img/perfumes/qaed_al_fursan2.webp",
      cardImage: "img/perfumes/qaed_al_fursan.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 94,
      name: "Fakhar Black",
      brand: "Lattafa",
      category: "arabe",
      gender: "masculino",
      notes:
        "Manzana, Bergamota, Lavanda, Geranio, Cedro, Haba Tonka, Ámbar, Almizcle",
      description:
        "Orgulloso y elegante. Manzana y lavanda sobre cedro y haba tonka.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/fakhar_black.webp",
      decantImage: "img/perfumes/fakhar_black2.webp",
      cardImage: "img/perfumes/fakhar_black.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 95,
      name: "Chapter I King of Kings",
      brand: "King of Kings",
      category: "arabe",
      gender: "masculino",
      notes: "Azafrán, Oud, Rosa, Ámbar, Sándalo, Almizcle, Pachulí",
      description:
        "Soberano y majestuoso. Azafrán y rosa con oud real sobre sándalo.",
      fullSizes: { "100ml": 259 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/chapter_i_king_of_kings.webp",
      decantImage: "img/perfumes/chapter_i_king_of_kings2.webp",
      cardImage: "img/perfumes/chapter_i_king_of_kings.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 96,
      name: "Chapter II King of Kings",
      brand: "King of Kings",
      category: "arabe",
      gender: "masculino",
      notes:
        "Bergamota, Canela, Cuero, Tabaco, Vainilla, Ámbar, Almizcle, Cedro",
      description: "Sucesor audaz. Canela y cuero con tabaco sobre vainilla.",
      fullSizes: { "100ml": 259 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/chapter_ii_king_of_kings.webp",
      decantImage: "img/perfumes/chapter_ii_king_of_kings2.webp",
      cardImage: "img/perfumes/chapter_ii_king_of_kings.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 97,
      name: "Royal Crown",
      brand: "King of Kings",
      category: "arabe",
      gender: "masculino",
      notes:
        "Azafrán, Bergamota, Jazmín, Oud, Ámbar, Sándalo, Almizcle, Vainilla",
      description: "Corona real. Azafrán y jazmín con oud sobre sándalo.",
      fullSizes: { "100ml": 259 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/royal_crown.webp",
      decantImage: "img/perfumes/royal_crown2.webp",
      cardImage: "img/perfumes/royal_crown.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 98,
      name: "Royal Amber",
      brand: "King of Kings",
      category: "arabe",
      gender: "masculino",
      notes:
        "Ámbar, Bergamota, Canela, Rosa, Pachulí, Cedro, Almizcle, Vainilla",
      description:
        "Ámbar soberano. Cálido y envolvente con canela y rosa sobre pachulí.",
      fullSizes: { "100ml": 259 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/royal_amber.webp",
      decantImage: "img/perfumes/royal_amber2.webp",
      cardImage: "img/perfumes/royal_amber.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 99,
      name: "Game of Spades Full House",
      brand: "Jo Milano Paris",
      category: "nicho",
      gender: "unisex",
      notes:
        "Bergamota, Manzana, Canela, Jazmín, Cedro, Ámbar, Almizcle, Vainilla",
      description: "Mano ganadora. Manzana y canela con jazmín sobre ámbar.",
      fullSizes: { "100ml": 299 },
      decantSizes: {
        "2ml": 12,
        "3ml": 18,
        "5ml": 25,
        "10ml": 45,
        "30ml": 125,
      },
      fullImage: "img/perfumes/game_of_spades_full_house.webp",
      decantImage: "img/perfumes/game_of_spades_full_house2.webp",
      cardImage: "img/perfumes/game_of_spades_full_house.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 100,
      name: "Game of Spades Royale",
      brand: "Jo Milano Paris",
      category: "nicho",
      gender: "unisex",
      notes: "Azafrán, Rosa, Oud, Ámbar, Sándalo, Almizcle, Vainilla, Pachulí",
      description: "As bajo la manga. Azafrán y rosa con oud sobre sándalo.",
      fullSizes: { "100ml": 299 },
      decantSizes: {
        "2ml": 12,
        "3ml": 18,
        "5ml": 25,
        "10ml": 45,
        "30ml": 125,
      },
      fullImage: "img/perfumes/game_of_spades_royale.webp",
      decantImage: "img/perfumes/game_of_spades_royale2.webp",
      cardImage: "img/perfumes/game_of_spades_royale.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 101,
      name: "Game of Spades Win",
      brand: "Jo Milano Paris",
      category: "nicho",
      gender: "unisex",
      notes:
        "Limón, Bergamota, Lavanda, Geranio, Cedro, Vetiver, Almizcle, Ámbar",
      description: "Triunfador fresco. Limón y lavanda sobre cedro y vetiver.",
      fullSizes: { "100ml": 299 },
      decantSizes: {
        "2ml": 12,
        "3ml": 18,
        "5ml": 25,
        "10ml": 45,
        "30ml": 125,
      },
      fullImage: "img/perfumes/game_of_spades_win.webp",
      decantImage: "img/perfumes/game_of_spades_win2.webp",
      cardImage: "img/perfumes/game_of_spades_win.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 102,
      name: "Game of Spades Wildcard",
      brand: "Jo Milano Paris",
      category: "nicho",
      gender: "unisex",
      notes:
        "Pimienta Negra, Bergamota, Canela, Cuero, Tabaco, Vainilla, Ámbar, Almizcle",
      description: "Comodín audaz. Pimienta y canela con cuero sobre vainilla.",
      fullSizes: { "100ml": 299 },
      decantSizes: {
        "2ml": 12,
        "3ml": 18,
        "5ml": 25,
        "10ml": 45,
        "30ml": 125,
      },
      fullImage: "img/perfumes/game_of_spades_wildcard.webp",
      decantImage: "img/perfumes/game_of_spades_wildcard2.webp",
      cardImage: "img/perfumes/game_of_spades_wildcard.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 103,
      name: "Game of Spades Double Bonus",
      brand: "Jo Milano Paris",
      category: "nicho",
      gender: "unisex",
      notes: "Manzana, Bergamota, Azafrán, Jazmín, Rosa, Ámbar, Oud, Almizcle",
      description: "Doble recompensa. Manzana y azafrán con rosa sobre oud.",
      fullSizes: { "100ml": 320 },
      decantSizes: {
        "2ml": 12,
        "3ml": 18,
        "5ml": 25,
        "10ml": 45,
        "30ml": 125,
      },
      fullImage: "img/perfumes/game_of_spades_double_bonus.webp",
      decantImage: "img/perfumes/game_of_spades_double_bonus2.webp",
      cardImage: "img/perfumes/game_of_spades_double_bonus.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 104,
      name: "Game of Spades Opal",
      brand: "Jo Milano Paris",
      category: "nicho",
      gender: "unisex",
      notes:
        "Coco, Piña, Bergamota, Jazmín, Vainilla, Sándalo, Almizcle, Ámbar",
      description: "Joya tropical. Coco y piña con jazmín sobre vainilla.",
      fullSizes: { "100ml": 320 },
      decantSizes: {
        "2ml": 12,
        "3ml": 18,
        "5ml": 25,
        "10ml": 45,
        "30ml": 125,
      },
      fullImage: "img/perfumes/game_of_spades_opal.webp",
      decantImage: "img/perfumes/game_of_spades_opal2.webp",
      cardImage: "img/perfumes/game_of_spades_opal.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 105,
      name: "Game of Spades Emerald",
      brand: "Jo Milano Paris",
      category: "nicho",
      gender: "unisex",
      notes:
        "Hojas Verdes, Bergamota, Violeta, Jazmín, Cedro, Musgo, Almizcle, Ámbar",
      description: "Esmeralda verde. Notas verdes con violeta sobre cedro.",
      fullSizes: { "100ml": 320 },
      decantSizes: {
        "2ml": 12,
        "3ml": 18,
        "5ml": 25,
        "10ml": 45,
        "30ml": 125,
      },
      fullImage: "img/perfumes/game_of_spades_emerald.webp",
      decantImage: "img/perfumes/game_of_spades_emerald2.webp",
      cardImage: "img/perfumes/game_of_spades_emerald.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 106,
      name: "Game of Spades Diamond",
      brand: "Jo Milano Paris",
      category: "nicho",
      gender: "unisex",
      notes:
        "Bergamota, Mandarina, Jazmín, Rosa, Pachulí, Ámbar, Almizcle, Vainilla",
      description: "Diamante puro. Mandarina y jazmín con rosa sobre pachulí.",
      fullSizes: { "100ml": 330 },
      decantSizes: {
        "2ml": 12,
        "3ml": 18,
        "5ml": 25,
        "10ml": 45,
        "30ml": 125,
      },
      fullImage: "img/perfumes/game_of_spades_diamond.webp",
      decantImage: "img/perfumes/game_of_spades_diamond2.webp",
      cardImage: "img/perfumes/game_of_spades_diamond.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 107,
      name: "Game of Spades Bonus",
      brand: "Jo Milano Paris",
      category: "nicho",
      gender: "unisex",
      notes:
        "Bergamota, Canela, Lavanda, Geranio, Cedro, Ámbar, Almizcle, Vainilla",
      description: "Bono aromático. Canela y lavanda sobre cedro y ámbar.",
      fullSizes: { "100ml": 320 },
      decantSizes: {
        "2ml": 12,
        "3ml": 18,
        "5ml": 25,
        "10ml": 45,
        "30ml": 125,
      },
      fullImage: "img/perfumes/game_of_spades_bonus.webp",
      decantImage: "img/perfumes/game_of_spades_bonus2.webp",
      cardImage: "img/perfumes/game_of_spades_bonus.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 108,
      name: "Game of Spades All In",
      brand: "Jo Milano Paris",
      category: "nicho",
      gender: "unisex",
      notes: "Azafrán, Oud, Rosa, Ámbar, Sándalo, Almizcle, Pachulí, Vainilla",
      description: "Apuesta total. Azafrán y oud con rosa sobre sándalo.",
      fullSizes: { "100ml": 320 },
      decantSizes: {
        "2ml": 12,
        "3ml": 18,
        "5ml": 25,
        "10ml": 45,
        "30ml": 125,
      },
      fullImage: "img/perfumes/game_of_spades_all_in.webp",
      decantImage: "img/perfumes/game_of_spades_all_in2.webp",
      cardImage: "img/perfumes/game_of_spades_all_in.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 109,
      name: "Yara",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Orquídea, Heliotropo, Vainilla, Sándalo, Almizcle, Frutos Rojos",
      description:
        "Dulce y empolvado. Orquídea y vainilla con un toque de frutos rojos sobre sándalo.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/yara.webp",
      decantImage: "img/perfumes/yara2.webp",
      cardImage: "img/perfumes/yara.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 110,
      name: "Yara Candy",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Caramelo, Fresas, Vainilla, Almizcle, Praliné, Sándalo",
      description:
        "Golosina irresistible. Caramelo y fresas con un fondo de praliné.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/yara_candy.webp",
      decantImage: "img/perfumes/yara_candy2.webp",
      cardImage: "img/perfumes/yara_candy.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 111,
      name: "Yara Tous",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Bergamota, Mandarina, Jazmín, Rosa, Vainilla, Almizcle",
      description:
        "Cítrico floral. Mandarina y bergamota con un corazón de jazmín y rosa.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/yara_tous.webp",
      decantImage: "img/perfumes/yara_tous2.webp",
      cardImage: "img/perfumes/yara_tous.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 112,
      name: "Yara Moi",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Pimienta Rosa, Jazmín, Vainilla, Cedro, Almizcle, Ámbar",
      description:
        "Seductor y especiado. Pimienta rosa y jazmín sobre vainilla y cedro.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/yara_moi.webp",
      decantImage: "img/perfumes/yara_moi2.webp",
      cardImage: "img/perfumes/yara_moi.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 113,
      name: "Yara Elixir",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Pimienta Rosa, Jazmín, Vainilla, Pachulí, Ámbar, Almizcle",
      description:
        "Intenso y adictivo. Jazmín y pimienta rosa realzados con pachulí.",
      fullSizes: { "100ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/yara_elixir.webp",
      decantImage: "img/perfumes/yara_elixir2.webp",
      cardImage: "img/perfumes/yara_elixir.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 114,
      name: "Yara Collection Pack",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Variadas (Yara, Yara Candy, Yara Tous)",
      description:
        "Pack especial con las tres Yara originales en presentación 20ml cada una.",
      fullSizes: { "Full set": 225 },
      decantSizes: { "U. 25ml": 65 },
      fullImage: "img/perfumes/yara_pack.webp",
      decantImage: "img/perfumes/yara_pack.webp",
      cardImage: "img/perfumes/yara_pack.webp",
      featured: false,
      badge: "new",
      badgeText: "Nuevo",
    },
    {
      id: 115,
      name: "Nebras",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Frutas Rojas, Jazmín, Vainilla, Sándalo, Almizcle, Pachulí",
      description:
        "Frutal profundo. Frutos rojos con jazmín sobre un fondo amaderado.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/nebras.webp",
      decantImage: "img/perfumes/nebras2.webp",
      cardImage: "img/perfumes/nebras.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 116,
      name: "Eclaire",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Bergamota, Pimienta Rosa, Jazmín, Vainilla, Haba Tonka, Ámbar",
      description: "Luminoso y cálido. Pimienta rosa y jazmín con haba tonka.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/eclaire.webp",
      decantImage: "img/perfumes/eclaire2.webp",
      cardImage: "img/perfumes/eclaire.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 117,
      name: "Angham",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Azafrán, Rosa, Vainilla, Ámbar, Almizcle, Sándalo",
      description:
        "Floral oriental. Rosa y azafrán sobre una base cálida de vainilla.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/angham.webp",
      decantImage: "img/perfumes/angham2.webp",
      cardImage: "img/perfumes/angham.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 118,
      name: "Her Confession",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Pimienta Rosa, Jazmín, Vainilla, Cedro, Ámbar, Almizcle Blanco",
      description:
        "Confesión floral. Pimienta rosa y jazmín con un velo de almizcle blanco.",
      fullSizes: { "100ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/her_confession.webp",
      decantImage: "img/perfumes/her_confession2.webp",
      cardImage: "img/perfumes/her_confession.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 119,
      name: "Mayar",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Pimienta Rosa, Bergamota, Jazmín, Rosa, Vainilla, Almizcle",
      description:
        "Energía floral. Bergamota y pimienta rosa con un bouquet de jazmín.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/mayar.webp",
      decantImage: "img/perfumes/mayar2.webp",
      cardImage: "img/perfumes/mayar.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 120,
      name: "Mayar Cherry",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Cereza, Almendra, Jazmín, Vainilla, Sándalo, Almizcle",
      description: "Cereza jugosa. Cereza y almendra con jazmín sobre sándalo.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/mayar_cherry.webp",
      decantImage: "img/perfumes/mayar_cherry2.webp",
      cardImage: "img/perfumes/mayar_cherry.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 121,
      name: "Now Women",
      brand: "Rave",
      category: "arabe",
      gender: "femenino",
      notes: "Mandarina, Bergamota, Jazmín, Rosa, Vainilla, Almizcle",
      description: "Fresco y juvenil. Cítricos con un corazón floral suave.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/now_women.webp",
      decantImage: "img/perfumes/now_women2.webp",
      cardImage: "img/perfumes/now_women.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 122,
      name: "Fakhar Rose",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Rosa, Jazmín, Vainilla, Sándalo, Almizcle, Ámbar",
      description:
        "Orgullo floral. Rosa y jazmín exquisitos sobre un lecho de vainilla.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/fakhar_rose.webp",
      decantImage: "img/perfumes/fakhar_rose2.webp",
      cardImage: "img/perfumes/fakhar_rose.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 123,
      name: "Kismet Magic",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "femenino",
      notes: "Pimienta Rosa, Jazmín, Vainilla, Pachulí, Ámbar, Almizcle",
      description:
        "Magia oriental. Jazmín y pimienta rosa sobre pachulí ambarado.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/kismet_magic.webp",
      decantImage: "img/perfumes/kismet_magic2.webp",
      cardImage: "img/perfumes/kismet_magic.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 124,
      name: "Odyssey Candee",
      brand: "Armaf",
      category: "arabe",
      gender: "femenino",
      notes: "Caramelo, Mandarina, Jazmín, Vainilla, Sándalo, Almizcle",
      description:
        "Dulce y vibrante. Caramelo con mandarina sobre un fondo amaderado.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/odyssey_candee.webp",
      decantImage: "img/perfumes/odyssey_candee2.webp",
      cardImage: "img/perfumes/odyssey_candee.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 125,
      name: "Qaed Al Fursan Unlimited",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes: "Piña, Bergamota, Jazmín, Cedro, Ámbar, Almizcle",
      description: "Frescor infinito. Piña jugosa con bergamota sobre cedro.",
      fullSizes: { "90ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/qaed_al_fursan_unlimited.webp",
      decantImage: "img/perfumes/qaed_al_fursan_unlimited2.webp",
      cardImage: "img/perfumes/qaed_al_fursan_unlimited.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 126,
      name: "Noble Blush",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Pimienta Rosa, Rosa, Jazmín, Vainilla, Almizcle, Ámbar",
      description: "Rubor noble. Rosa y pimienta rosa con un velo de vainilla.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/noble_blush.webp",
      decantImage: "img/perfumes/noble_blush2.webp",
      cardImage: "img/perfumes/noble_blush.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 127,
      name: "Hawas Pink",
      brand: "Rasasi",
      category: "arabe",
      gender: "femenino",
      notes: "Frutas Tropicales, Jazmín, Vainilla, Sándalo, Almizcle, Ámbar",
      description:
        "Diversión rosa. Frutas tropicales con jazmín sobre una base golosa.",
      fullSizes: { "100ml": 205 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_pink.webp",
      decantImage: "img/perfumes/hawas_pink2.webp",
      cardImage: "img/perfumes/hawas_pink.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 128,
      name: "Hawas Diva",
      brand: "Rasasi",
      category: "arabe",
      gender: "femenino",
      notes: "Bergamota, Mandarina, Jazmín, Rosa, Pachulí, Ámbar, Almizcle",
      description: "Diva radiante. Cítricos y rosas con un toque de pachulí.",
      fullSizes: { "100ml": 205 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/hawas_diva.webp",
      decantImage: "img/perfumes/hawas_diva2.webp",
      cardImage: "img/perfumes/hawas_diva.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 129,
      name: "Delilah",
      brand: "Maison Alhambra",
      category: "arabe",
      gender: "femenino",
      notes: "Pimienta Rosa, Jazmín, Vainilla, Cedro, Almizcle, Ámbar",
      description: "Feminidad misteriosa. Jazmín y pimienta rosa sobre cedro.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/delilah.webp",
      decantImage: "img/perfumes/delilah2.webp",
      cardImage: "img/perfumes/delilah.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 130,
      name: "9AM Pour Femme",
      brand: "Afnan",
      category: "nicho",
      gender: "femenino",
      notes: "Bergamota, Mandarina, Jazmín, Rosa, Vainilla, Almizcle, Ámbar",
      description:
        "Frescura matutina femenina. Cítricos brillantes con un corazón floral.",
      fullSizes: { "100ml": 165 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/9am_pour_femme.webp",
      decantImage: "img/perfumes/9am_pour_femme2.webp",
      cardImage: "img/perfumes/9am_pour_femme.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 131,
      name: "Rome Yum Yum",
      brand: "Bharara Mast",
      category: "arabe",
      gender: "femenino",
      notes: "Frutos Rojos, Caramelo, Jazmín, Vainilla, Sándalo, Almizcle",
      description:
        "Delicia golosa. Frutos rojos y caramelo con un fondo de vainilla.",
      fullSizes: { "100ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/rome_yum_yum.webp",
      decantImage: "img/perfumes/rome_yum_yum2.webp",
      cardImage: "img/perfumes/rome_yum_yum.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 132,
      name: "Rome Pour Femme",
      brand: "Bharara Mast",
      category: "arabe",
      gender: "femenino",
      notes: "Mandarina, Bergamota, Jazmín, Rosa, Vainilla, Almizcle, Ámbar",
      description:
        "Elegancia romana femenina. Cítricos y flores blancas con un toque de ámbar.",
      fullSizes: { "100ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/rome_pour_femme.webp",
      decantImage: "img/perfumes/rome_pour_femme2.webp",
      cardImage: "img/perfumes/rome_pour_femme.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 133,
      name: "Club de Nuit Woman",
      brand: "Armaf",
      category: "arabe",
      gender: "femenino",
      notes: "Bergamota, Geranio, Rosa, Jazmín, Vainilla, Pachulí, Almizcle",
      description:
        "La mujer icónica. Rosa y geranio con pachulí sobre vainilla.",
      fullSizes: { "105ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/club_de_nuit_woman.webp",
      decantImage: "img/perfumes/club_de_nuit_woman2.webp",
      cardImage: "img/perfumes/club_de_nuit_woman.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 134,
      name: "Club de Nuit Maleka",
      brand: "Armaf",
      category: "arabe",
      gender: "femenino",
      notes: "Mandarina, Jazmín, Rosa, Ámbar, Almizcle, Vainilla, Sándalo",
      description:
        "Reina nocturna. Mandarina y rosa sobre un fondo de ámbar real.",
      fullSizes: { "105ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/club_de_nuit_maleka.webp",
      decantImage: "img/perfumes/club_de_nuit_maleka2.webp",
      cardImage: "img/perfumes/club_de_nuit_maleka.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 135,
      name: "Vulcan Baie",
      brand: "French Avenue",
      category: "arabe",
      gender: "unisex",
      notes: "Grosella Negra, Bergamota, Jazmín, Vainilla, Ámbar, Almizcle",
      description: "Bayas volcánicas. Grosella negra y bergamota con jazmín.",
      fullSizes: { "100ml": 185 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/vulcan_baie.webp",
      decantImage: "img/perfumes/vulcan_baie2.webp",
      cardImage: "img/perfumes/vulcan_baie.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 136,
      name: "Yum Yum",
      brand: "Armaf",
      category: "arabe",
      gender: "femenino",
      notes: "Melocotón, Caramelo, Jazmín, Vainilla, Sándalo, Almizcle",
      description:
        "Dulzura tentadora. Melocotón y caramelo sobre un fondo de vainilla.",
      fullSizes: { "100ml": 199 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/yum_yum.webp",
      decantImage: "img/perfumes/yum_yum2.webp",
      cardImage: "img/perfumes/yum_yum.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 137,
      name: "Atheeri",
      brand: "Lattafa",
      category: "arabe",
      gender: "femenino",
      notes: "Azafrán, Rosa, Ámbar, Vainilla, Sándalo, Almizcle",
      description:
        "Misterio oriental. Azafrán y rosa sobre un fondo cálido de sándalo.",
      fullSizes: { "100ml": 199 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/atheeri.webp",
      decantImage: "img/perfumes/atheeri2.webp",
      cardImage: "img/perfumes/atheeri.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 138,
      name: "Winners Trophy Gold",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes: "Piña, Bergamota, Jazmín, Cedro, Ámbar, Almizcle",
      description: "Triunfo dorado. Piña y bergamota con un toque amaderado.",
      fullSizes: { "100ml": 175 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/winners_trophy_gold.webp",
      decantImage: "img/perfumes/winners_trophy_gold2.webp",
      cardImage: "img/perfumes/winners_trophy_gold.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 139,
      name: "Eclaire Pistache",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes: "Pistacho, Bergamota, Jazmín, Vainilla, Haba Tonka, Almizcle",
      description:
        "Dulzura verde. Pistacho cremoso con bergamota y haba tonka.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/eclaire_pistache.webp",
      decantImage: "img/perfumes/eclaire_pistache2.webp",
      cardImage: "img/perfumes/eclaire_pistache.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 140,
      name: "Eclaire Banoffi",
      brand: "Lattafa",
      category: "arabe",
      gender: "unisex",
      notes: "Plátano, Caramelo, Vainilla, Cacao, Ámbar, Almizcle",
      description: "Postre goloso. Plátano caramelizado con cacao y vainilla.",
      fullSizes: { "100ml": 195 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/eclaire_banoffi.webp",
      decantImage: "img/perfumes/eclaire_banoffi2.webp",
      cardImage: "img/perfumes/eclaire_banoffi.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 141,
      name: "The Most Wanted Parfum",
      brand: "Azzaro",
      category: "disenador",
      gender: "masculino",
      notes: "Jengibre, Vainilla Bourbon, Maderas",
      description: "Intenso y seductor con dulzura especiada.",
      fullSizes: { "100ml": 345 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/the_most_wanted_parfum.webp",
      decantImage: "img/perfumes/the_most_wanted_parfum2.webp",
      cardImage: "img/perfumes/the_most_wanted_parfum.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 142,
      name: "The Most Wanted Intense",
      brand: "Azzaro",
      category: "disenador",
      gender: "masculino",
      notes: "Toffee, Cardamomo, Ámbar",
      description: "Dulce, potente y nocturno.",
      fullSizes: { "100ml": 345 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/the_most_wanted_intense.webp",
      decantImage: "img/perfumes/the_most_wanted_intense2.webp",
      cardImage: "img/perfumes/the_most_wanted_intense.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 143,
      name: "Stronger With You Intensely",
      brand: "Armani",
      category: "disenador",
      gender: "masculino",
      notes: "Vainilla, Canela, Caramelo",
      description: "Muy dulce, cálido y envolvente.",
      fullSizes: { "100ml": 445 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/swy_intensely.webp",
      decantImage: "img/perfumes/swy_intensely2.webp",
      cardImage: "img/perfumes/swy_intensely.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 176, // nuevo id
      name: "Stronger With You Intensely (Tester)",
      brand: "Armani",
      category: "disenador",
      gender: "masculino",
      notes: "Vainilla, Canela, Caramelo",
      description: "Muy dulce, cálido y envolvente. Tester a precio especial.",
      fullSizes: { "100ml": 395 },
      decantSizes: {},
      fullImage: "img/perfumes/swy_intensely.webp",
      decantImage: "img/perfumes/swy_intensely2.webp",
      cardImage: "img/perfumes/swy_intensely.webp",
      featured: false,
      badge: "tester",
      badgeText: "TESTER",
      tester: true,
    },
    {
      id: 144,
      name: "Stronger With You Powerfully",
      brand: "Armani",
      category: "disenador",
      gender: "masculino",
      notes: "Ron, Vainilla, Madera",
      description: "Más profundo y licoroso.",
      fullSizes: { "100ml": 495 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/swy_Powerfully.webp",
      decantImage: "img/perfumes/swy_Powerfully2.webp",
      cardImage: "img/perfumes/swy_Powerfully.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 145,
      name: "Born In Roma Purple",
      brand: "Valentino",
      category: "disenador",
      gender: "masculino",
      notes: "Lavanda, Vainilla, Madera",
      description: "Elegante con toque moderno.",
      fullSizes: { "100ml": 550 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/born_in_roma_purple.webp",
      decantImage: "img/perfumes/born_in_roma_purple2.webp",
      cardImage: "img/perfumes/born_in_roma_purple.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 146,
      name: "Born In Roma Intense",
      brand: "Valentino",
      category: "disenador",
      gender: "masculino",
      notes: "Vainilla, Lavanda",
      description: "Más oscuro y sensual.",
      fullSizes: { "100ml": 525 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/born_in_roma_intense.webp",
      decantImage: "img/perfumes/born_in_roma_intense2.webp",
      cardImage: "img/perfumes/born_in_roma_intense.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 147,
      name: "Born In Roma Coral Fantasy",
      brand: "Valentino",
      category: "disenador",
      gender: "masculino",
      notes: "Manzana, Tabaco",
      description: "Fresco con fondo dulce.",
      fullSizes: { "100ml": 495 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/coral_fantasy.webp",
      decantImage: "img/perfumes/coral_fantasy2.webp",
      cardImage: "img/perfumes/coral_fantasy.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 148,
      name: "MYSLF EDP",
      brand: "Yves Saint Laurent",
      category: "disenador",
      gender: "masculino",
      notes: "Bergamota, Azahar, Madera",
      description: "Moderno, limpio y elegante.",
      fullSizes: { "100ml": 495 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/myslf.webp",
      decantImage: "img/perfumes/myslf2.webp",
      cardImage: "img/perfumes/myslf.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 149,
      name: "Scandal Le Parfum",
      brand: "Jean Paul Gaultier",
      category: "disenador",
      gender: "masculino",
      notes: "Caramelo, Tonka",
      description: "Dulce extremo y nocturno.",
      fullSizes: { "100ml": 450, "150ml": 545 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/scandal_le_parfum.webp",
      decantImage: "img/perfumes/scandal_le_parfum2.webp",
      cardImage: "img/perfumes/scandal_le_parfum.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 150,
      name: "Eros Flame",
      brand: "Versace",
      category: "disenador",
      gender: "masculino",
      notes: "Cítricos, Pimienta, Vainilla",
      description: "Fresco con toque picante.",
      fullSizes: { "100ml": 350, "200ml": 450 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/eros_flame.webp",
      decantImage: "img/perfumes/eros_flame2.webp",
      cardImage: "img/perfumes/eros_flame.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 151,
      name: "Acqua Di Giò Profondo Parfum",
      brand: "Giorgio Armani",
      category: "disenador",
      gender: "masculino",
      notes: "Marino, Aromático",
      description: "Fresco profundo y elegante.",
      fullSizes: { "100ml": 445 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/profondo_parfum.webp",
      decantImage: "img/perfumes/profondo_parfum2.webp",
      cardImage: "img/perfumes/profondo_parfum.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 152,
      name: "Eros EDP",
      brand: "Versace",
      category: "disenador",
      gender: "masculino",
      notes: "Vainilla, Menta",
      description: "Más intenso que el EDT.",
      fullSizes: { "100ml": 350 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/eros_edp.webp",
      decantImage: "img/perfumes/eros_edp2.webp",
      cardImage: "img/perfumes/eros_edp.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 153,
      name: "Invictus Victory Elixir",
      brand: "Rabanne",
      category: "disenador",
      gender: "masculino",
      notes: "Ámbar, Vainilla",
      description: "Muy potente y dulce.",
      fullSizes: { "100ml": 450, "200ml": 600 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/victory_elixir.webp",
      decantImage: "img/perfumes/victory_elixir2.webp",
      cardImage: "img/perfumes/victory_elixir.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 154,
      name: "Invictus Parfum",
      brand: "Rabanne",
      category: "disenador",
      gender: "masculino",
      notes: "Marino, Lavanda",
      description: "Fresco moderno.",
      fullSizes: { "100ml": 385 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/invictus_parfum.webp",
      decantImage: "img/perfumes/invictus_parfum2.webp",
      cardImage: "img/perfumes/invictus_parfum.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 155,
      name: "Le Beau Paradise Garden",
      brand: "Jean Paul Gaultier",
      category: "disenador",
      gender: "masculino",
      notes: "Coco, Verde",
      description: "Exótico tropical.",
      fullSizes: { "125ml": 475 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/le_beau_paradise.webp",
      decantImage: "img/perfumes/le_beau_paradise2.webp",
      cardImage: "img/perfumes/le_beau_paradise.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 156,
      name: "Le Beau De Toilette",
      brand: "Jean Paul Gaultier",
      category: "disenador",
      gender: "masculino",
      notes: "Coco, Tonka",
      description: "Dulce tropical.",
      fullSizes: { "125ml": 450 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/le_beau_de_toilette.webp",
      decantImage: "img/perfumes/le_beau_de_toilette2.webp",
      cardImage: "img/perfumes/le_beau_de_toilette.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 167,
      name: "Le Beau Le Parfum",
      brand: "Jean Paul Gaultier",
      category: "disenador",
      gender: "masculino",
      notes: "Piña, Coco, Haba Tonka, Ámbar, Maderas",
      description:
        "Fragancia tropical intensa y seductora. Dulce, cremosa y cálida, con un fondo ambarado y masculino.",
      fullSizes: { "125ml": 475 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/le_beau_parfum.webp",
      decantImage: "img/perfumes/le_beau_parfum2.webp",
      cardImage: "img/perfumes/le_beau_parfum.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 157,
      name: "Le Male Le Parfum",
      brand: "Jean Paul Gaultier",
      category: "disenador",
      gender: "masculino",
      notes: "Vainilla, Cardamomo",
      description: "Elegante y dulce.",
      fullSizes: { "125ml": 475, "200ml": 585 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/le_male_parfum.webp",
      decantImage: "img/perfumes/le_male_parfum2.webp",
      cardImage: "img/perfumes/le_male_parfum.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 158,
      name: "Le Male Elixir",
      brand: "Jean Paul Gaultier",
      category: "disenador",
      gender: "masculino",
      notes: "Miel, Tabaco",
      description: "Extremadamente dulce y fuerte.",
      fullSizes: { "125ml": 485, "200ml": 595 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/le_male_elixir.webp",
      decantImage: "img/perfumes/le_male_elixir2.webp",
      cardImage: "img/perfumes/le_male_elixir.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 159,
      name: "Y Eau de Parfum",
      brand: "Yves Saint Laurent",
      category: "disenador",
      gender: "masculino",
      notes: "Manzana, Jengibre",
      description: "Fresco, limpio y versátil.",
      fullSizes: { "100ml": 485, "200ml": 645 },
      decantSizes: {
        "2ml": 18,
        "3ml": 25,
        "5ml": 35,
        "10ml": 75,
        "30ml": 185,
      },
      fullImage: "img/perfumes/y_edp.webp",
      decantImage: "img/perfumes/y_edp2.webp",
      cardImage: "img/perfumes/y_edp.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 177,
      name: "Y Eau de Parfum (Tester)",
      brand: "Yves Saint Laurent",
      category: "disenador",
      gender: "masculino",
      notes: "Manzana, Jengibre",
      description: "Fresco, limpio y versátil. Tester.",
      fullSizes: { "100ml": 425 },
      decantSizes: {},
      fullImage: "img/perfumes/y_edp.webp",
      decantImage: "img/perfumes/y_edp2.webp",
      cardImage: "img/perfumes/y_edp.webp",
      featured: false,
      badge: "tester",
      badgeText: "TESTER",
      tester: true,
    },
    {
      id: 160,
      name: "Erba Pura",
      brand: "Xerjoff",
      category: "nicho",
      gender: "unisex",
      notes: "Frutas, Almizcle, Vainilla",
      description: "Explosión frutal dulce con gran proyección.",
      fullSizes: { "100ml": 850 },
      decantSizes: {
        "2ml": 25,
        "3ml": 35,
        "5ml": 65,
        "10ml": 125,
        "30ml": 365,
      },
      fullImage: "img/perfumes/erba_pura.webp",
      decantImage: "img/perfumes/erba_pura2.webp",
      cardImage: "img/perfumes/erba_pura.webp",
      featured: false,
      badge: "nicho",
      badgeText: "NICHO",
    },
    {
      id: 161,
      name: "French Riviera",
      brand: "Mancera",
      category: "nicho",
      gender: "unisex",
      notes: "Cítricos, Marino, Floral",
      description: "Fresco, elegante y veraniego.",
      fullSizes: { "120ml": 550 },
      decantSizes: {
        "2ml": 10,
        "3ml": 15,
        "5ml": 20,
        "10ml": 30,
        "30ml": 85,
      },
      fullImage: "img/perfumes/french_riviera.webp",
      decantImage: "img/perfumes/french_riviera2.webp",
      cardImage: "img/perfumes/french_riviera.webp",
      featured: false,
      badge: "nicho",
      badgeText: "NICHO",
    },
    {
      id: 162,
      name: "Born In Roma Extradose (Tester)",
      brand: "Valentino",
      category: "disenador",
      gender: "masculino",
      notes: "Vainilla, Ámbar, Lavanda",
      description:
        "Versión más intensa y concentrada. Tester a precio especial.",
      fullSizes: { "100ml": 455 },
      decantSizes: {},
      fullImage: "img/perfumes/born_in_roma_extradose.webp",
      decantImage: "img/perfumes/born_in_roma_extradose2.webp",
      cardImage: "img/perfumes/born_in_roma_extradose.webp",
      featured: false,
      badge: "tester",
      badgeText: "TESTER",
      tester: true,
    },
    {
      id: 163,
      name: "Stronger With You Parfum (Tester)",
      brand: "Armani",
      category: "disenador",
      gender: "masculino",
      notes: "Vainilla, Ámbar, Madera",
      description: "Más refinado y potente que la línea clásica. Tester.",
      fullSizes: { "100ml": 405 },
      decantSizes: {},
      fullImage: "img/perfumes/swy_parfum.webp",
      decantImage: "img/perfumes/swy_parfum2.webp",
      cardImage: "img/perfumes/swy_parfum.webp",
      featured: false,
      badge: "tester",
      badgeText: "TESTER",
      tester: true,
    },
    {
      id: 164,
      name: "Luna Rossa Ocean EDT (Tester)",
      brand: "Prada",
      category: "disenador",
      gender: "masculino",
      notes: "Bergamota, Lavanda, Iris",
      description: "Fresco, limpio y tecnológico. Tester.",
      fullSizes: { "100ml": 375 },
      decantSizes: {},
      fullImage: "img/perfumes/luna_rossa_ocean_edt.webp",
      decantImage: "img/perfumes/luna_rossa_ocean_edt2.webp",
      cardImage: "img/perfumes/luna_rossa_ocean_edt.webp",
      featured: false,
      badge: "tester",
      badgeText: "TESTER",
      tester: true,
    },
    {
      id: 165,
      name: "Luna Rossa Ocean Le Parfum (Tester)",
      brand: "Prada",
      category: "disenador",
      gender: "masculino",
      notes: "Ámbar, Vainilla, Madera",
      description: "Más profundo y elegante que el EDT. Tester.",
      fullSizes: { "100ml": 395 },
      decantSizes: {},
      fullImage: "img/perfumes/luna_rossa_ocean_parfum.webp",
      decantImage: "img/perfumes/luna_rossa_ocean_parfum2.webp",
      cardImage: "img/perfumes/luna_rossa_ocean_parfum.webp",
      featured: false,
      badge: "tester",
      badgeText: "TESTER",
      tester: true,
    },
    {
      id: 166,
      name: "Versace Pour Homme (Tester)",
      brand: "Versace",
      category: "disenador",
      gender: "masculino",
      notes: "Cítricos, Neroli, Almizcle",
      description: "Clásico fresco, limpio y versátil. Tester.",
      fullSizes: { "100ml": 285 },
      decantSizes: {},
      fullImage: "img/perfumes/versace_pour_homme.webp",
      decantImage: "img/perfumes/versace_pour_homme2.webp",
      cardImage: "img/perfumes/versace_pour_homme.webp",
      featured: false,
      badge: "tester",
      badgeText: "TESTER",
      tester: true,
    },
    {
      id: 168,
      name: "212 VIP Black",
      brand: "Carolina Herrera",
      category: "disenador",
      gender: "masculino",
      notes: "Absenta, Pimienta Negra, Lavanda, Cuero, Vainilla, Almizcle",
      description:
        "Cóctel vibrante y adictivo. La absenta helada y la pimienta negra se mezclan con cuero suave y un fondo cálido de vainilla y almizcle.",
      fullSizes: { "100ml": 350 },
      decantSizes: { "2ml": 18, "3ml": 25, "5ml": 35, "10ml": 75, "30ml": 185 },
      fullImage: "img/perfumes/212_vip_black.webp",
      decantImage: "img/perfumes/212_vip_black2.webp",
      cardImage: "img/perfumes/212_vip_black.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 169,
      name: "Scandal Absolu",
      brand: "Jean Paul Gaultier",
      category: "disenador",
      gender: "masculino",
      notes: "Pachulí, Caramelo, Vainilla Bourbon, Benjuí",
      description:
        "Oscuro, sensual y embriagador. La intensidad del pachulí se funde con la dulzura golosa del caramelo y la vainilla bourbon, creando una estela magnética y nocturna.",
      fullSizes: { "100ml": 495 },
      decantSizes: { "2ml": 18, "3ml": 25, "5ml": 35, "10ml": 75, "30ml": 185 },
      fullImage: "img/perfumes/scandal_absolu.webp",
      decantImage: "img/perfumes/scandal_absolu2.webp",
      cardImage: "img/perfumes/scandal_absolu.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 170,
      name: "Scandal Pour Homme EDT",
      brand: "Jean Paul Gaultier",
      category: "disenador",
      gender: "masculino",
      notes: "Salvia, Notas Verdes, Caramelo, Haba Tonka, Vetiver",
      description:
        "Fresco, moderno y adictivo. La salvia vibrante y las notas verdes dan paso a un corazón dulce de caramelo, con un fondo terroso de haba tonka y vetiver.",
      fullSizes: { "100ml": 400, "150ml": 500 },
      decantSizes: { "2ml": 18, "3ml": 25, "5ml": 35, "10ml": 75, "30ml": 185 },
      fullImage: "img/perfumes/scandal_pour_homme_edt.webp",
      decantImage: "img/perfumes/scandal_pour_homme_edt2.webp",
      cardImage: "img/perfumes/scandal_pour_homme_edt.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 171,
      name: "Acqua Di Giò Profondo EDP",
      brand: "Giorgio Armani",
      category: "disenador",
      gender: "masculino",
      notes: "Notas Marinas, Bergamota, Romero, Lavanda, Almizcle, Pachulí",
      description:
        "La esencia del océano en su máxima expresión. Frescura acuática y cítricos se envuelven en un corazón aromático de romero y lavanda, asentado sobre un fondo mineral de almizcle y pachulí.",
      fullSizes: { "100ml": 450 },
      decantSizes: { "2ml": 18, "3ml": 25, "5ml": 35, "10ml": 75, "30ml": 185 },
      fullImage: "img/perfumes/profondo_edp.webp",
      decantImage: "img/perfumes/profondo_edp2.webp",
      cardImage: "img/perfumes/profondo_edp.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 172,
      name: "MYSLF Le Parfum",
      brand: "Yves Saint Laurent",
      category: "disenador",
      gender: "masculino",
      notes: "Vainilla Bourbon, Cuero, Salvia, Azahar, Almizcle Blanco",
      description:
        "El refinamiento contemporáneo llevado al extremo. La riqueza de la vainilla bourbon y el cuero suave se fusionan con la frescura de la salvia y un toque luminoso de azahar, creando una firma elegante y profunda.",
      fullSizes: { "100ml": 495 },
      decantSizes: { "2ml": 18, "3ml": 25, "5ml": 35, "10ml": 75, "30ml": 185 },
      fullImage: "img/perfumes/myslf_le_parfum.webp",
      decantImage: "img/perfumes/myslf_le_parfum2.webp",
      cardImage: "img/perfumes/myslf_le_parfum.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 173,
      name: "Naxos (XJ1861)",
      brand: "Xerjoff",
      category: "nicho",
      gender: "unisex",
      notes:
        "Bergamota, Limón, Lavanda, Miel, Canela, Haba Tonka, Tabaco, Vainilla",
      description:
        "Una obra maestra de la perfumería de lujo. La frescura cítrica y la lavanda se envuelven en la dulzura embriagadora de la miel y la canela, culminando con un fondo profundamente adictivo de tabaco, haba tonka y vainilla.",
      fullSizes: { "100ml": 900 },
      decantSizes: {
        "2ml": 25,
        "3ml": 35,
        "5ml": 65,
        "10ml": 125,
        "30ml": 365,
      },
      fullImage: "img/perfumes/naxos_xerjoff.webp",
      decantImage: "img/perfumes/naxos_xerjoff2.webp",
      cardImage: "img/perfumes/naxos_xerjoff.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 174,
      name: "Arabians Tonka",
      brand: "Montale",
      category: "nicho",
      gender: "unisex",
      notes:
        "Bergamota, Azafrán, Rosa de Damasco, Haba Tonka, Cuero, Ámbar, Almizcle",
      description:
        "Exótico y opulento. El azafrán y la rosa se entrelazan con una dosis generosa de haba tonka cremosa, sobre una base cálida de cuero y ámbar, creando un aroma embriagador y oriental.",
      fullSizes: { "100ml": 550 },
      decantSizes: {
        "2ml": 25,
        "3ml": 35,
        "5ml": 65,
        "10ml": 125,
        "30ml": 365,
      },
      fullImage: "img/perfumes/arabians_tonka.webp",
      decantImage: "img/perfumes/arabians_tonka2.webp",
      cardImage: "img/perfumes/arabians_tonka.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
    {
      id: 175,
      name: "Island Bliss",
      brand: "Armaf",
      category: "arabe",
      gender: "unisex",
      notes:
        "Piña, Coco, Bergamota, Jazmín, Notas Marinas, Vainilla, Sándalo, Almizcle",
      description:
        "Un paraíso tropical embotellado. La jugosidad de la piña y el coco se sumerge en una brisa marina fresca, adornada con jazmín y suavizada por un fondo de vainilla y sándalo.",
      fullSizes: { "100ml": 195 },
      decantSizes: { "2ml": 10, "3ml": 15, "5ml": 20, "10ml": 30, "30ml": 85 },
      fullImage: "img/perfumes/island_bliss.webp",
      decantImage: "img/perfumes/island_bliss2.webp",
      cardImage: "img/perfumes/island_bliss.webp",
      featured: false,
      badge: null,
      badgeText: "",
    },
  ];

  /* ══════════════════════════════════════════════════════════════
      DATA — PROMOCIONES
   ══════════════════════════════════════════════════════════════ */
  const promos = [
    // ── PROMOS DE REGALO (Erba Pura) – tarjetas individuales ──
    {
      id: "group-erba",
      type: "group",
      category: "erba",
      name: "1 Diseñador + Erba Pura",
      desc: "Elige el tamaño y 1 perfume de diseñador, y recibe Erba Pura de regalo.",
      icon: "🧪",
      badge: "🎁 Regalo",
      gift: true,
      giftName: "Erba Pura Xerjoff",
      giftImage: "img/perfumes/erba_pura.webp",
      allowedCategories: ["disenador"],
      quantity: 1,
      options: [
        { size: "2ml", price: 55 },
        { size: "3ml", price: 75 },
        { size: "5ml", price: 105 },
        { size: "10ml", price: 155 }
      ],
      image: "img/promos/erba_pura.webp"
    },

    // ── DISEÑADOR: 2 y 3 unidades (grupos) ──
    {
      id: "group-disenador-2u",
      type: "group",
      category: "disenador",
      name: "2 Decants Diseñador",
      desc: "Elige el tamaño y 2 perfumes de diseñador.",
      icon: "⭐",
      image: "img/promos/diseñador2.webp",
      allowedCategories: ["disenador"],
      quantity: 2,
      options: [
        { size: "2ml", price: 40 },
        { size: "3ml", price: 55 },
        { size: "5ml", price: 90 },
        { size: "10ml", price: 120 }
      ]
    },
    {
      id: "group-disenador-3u",
      type: "group",
      category: "disenador",
      name: "3 Decants Diseñador",
      desc: "Elige el tamaño y 3 perfumes de diseñador.",
      icon: "⭐",
      image: "img/promos/diseñador3.webp",
      allowedCategories: ["disenador"],
      quantity: 3,
      options: [
        { size: "2ml", price: 55 },
        { size: "3ml", price: 75 },
        { size: "5ml", price: 120 },
        { size: "10ml", price: 165 }
      ]
    },

    // ── ÁRABES MUJER (3 y 5 unidades) ──
    {
      id: "group-arabe-fem-3u",
      type: "group",
      category: "arabe",
      name: "3 Decants Árabes Mujer",
      desc: "Elige el tamaño y 3 perfumes árabes femeninos.",
      icon: "🕌",
      image: "img/promos/arabes_fem_3u.webp",
      allowedCategories: ["arabe"],
      allowedGenders: ["femenino"],
      quantity: 3,
      options: [
        { size: "2ml", price: 35 },
        { size: "3ml", price: 45 },
        { size: "5ml", price: 65 },
        { size: "10ml", price: 85 }
      ]
    },
    {
      id: "group-arabe-fem-5u",
      type: "group",
      category: "arabe",
      name: "5 Decants Árabes Mujer",
      desc: "Elige el tamaño y 5 perfumes árabes femeninos.",
      icon: "🕌",
      image: "img/promos/arabes_fem_5u.webp",
      allowedCategories: ["arabe"],
      allowedGenders: ["femenino"],
      quantity: 5,
      options: [
        { size: "2ml", price: 55 },
        { size: "3ml", price: 65 },
        { size: "5ml", price: 75 },
        { size: "10ml", price: 125 }
      ]
    },

    // ── ÁRABES HOMBRE (3 y 5 unidades) ──
    {
      id: "group-arabe-mas-3u",
      type: "group",
      category: "arabe",
      name: "3 Decants Árabes Hombre",
      desc: "Elige el tamaño y 3 perfumes árabes masculinos.",
      icon: "🕌",
      image: "img/promos/arabes_mas_3u.webp",
      allowedCategories: ["arabe"],
      allowedGenders: ["masculino"],
      quantity: 3,
      options: [
        { size: "2ml", price: 35 },
        { size: "3ml", price: 45 },
        { size: "5ml", price: 65 },
        { size: "10ml", price: 85 }
      ]
    },
    {
      id: "group-arabe-mas-5u",
      type: "group",
      category: "arabe",
      name: "5 Decants Árabes Hombre",
      desc: "Elige el tamaño y 5 perfumes árabes masculinos.",
      icon: "🕌",
      image: "img/promos/arabes_mas_5u.webp",
      allowedCategories: ["arabe"],
      allowedGenders: ["masculino"],
      quantity: 5,
      options: [
        { size: "2ml", price: 45 },
        { size: "3ml", price: 55 },
        { size: "5ml", price: 65 },
        { size: "10ml", price: 115 }
      ]
    },

    // ── ÁRABES DELUXE (3 y 4 unidades) ──
    {
      id: "group-nicho-3u",
      type: "group",
      category: "nicho",
      name: "3 Decants Árabes Deluxe",
      desc: "Elige el tamaño y 3 perfumes de la colección Deluxe.",
      icon: "💎",
      image: "img/promos/deluxe_3u.webp",
      allowedCategories: ["nicho"],
      quantity: 3,
      options: [
        { size: "2ml", price: 45 },
        { size: "3ml", price: 55 },
        { size: "5ml", price: 95 },
        { size: "10ml", price: 115 }
      ]
    },
    {
      id: "group-nicho-4u",
      type: "group",
      category: "nicho",
      name: "4 Decants Árabes Deluxe",
      desc: "Elige el tamaño y 4 perfumes de la colección Deluxe.",
      icon: "💎",
      image: "img/promos/deluxe_4u.webp",
      allowedCategories: ["nicho"],
      quantity: 4,
      options: [
        { size: "2ml", price: 55 },
        { size: "3ml", price: 65 },
        { size: "5ml", price: 105 },
        { size: "10ml", price: 145 }
      ]
    },
  ];

  /* ══════════════════════════════════════════════════════════════
     STATE
  ══════════════════════════════════════════════════════════════ */
  let cart = [];
  let activeFilters = { category: "all", gender: "all" };
  let activePromoFilter = "all";
  let activePromoGender = "all";
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
  let currentSearchTerm = "";

  try {
    const saved = localStorage.getItem("paco_cart_v4");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  /* ══════════════════════════════════════════════════════════════
     UTILITIES
  ══════════════════════════════════════════════════════════════ */
  function saveCart() {
    try { localStorage.setItem("paco_cart_v4", JSON.stringify(cart)); } catch (e) { }
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

  function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._timeout);
    t._timeout = setTimeout(() => t.classList.remove("show"), 2300);
  }

  function pulseCartCount() {
    const el = document.getElementById("cartCount");
    el.classList.remove("pulse");
    void el.offsetWidth;
    el.classList.add("pulse");
  }

  function getCategoryIcon(cat) {
    const icons = {
      arabe: "🕌",
      disenador: "⭐",
      nicho: "💎",
      erba: "🧪",
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
    document.getElementById("cartCount").textContent = getCartCount();
    renderCartItems();
    updateCartFooter();
    if (currentPage === "checkout") renderCheckoutPage();
  }

  /* ══════════════════════════════════════════════════════════════
     CART — RENDER
  ══════════════════════════════════════════════════════════════ */
  function renderCartItems() {
    const container = document.getElementById("cartItems");

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛍️</div>
          <p>Tu carrito está vacío.</p>
          <span>¡Explora nuestra colección!</span>
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
          imageHtml = `<img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'" />`;
          if (hasGift) {
            imageHtml = `
              <div style="position:relative;display:inline-block;">
                ${imageHtml}
                <img src="${item.gift.image}" alt="${item.gift.name}"
                     style="position:absolute;bottom:-4px;right:-4px;width:22px;height:22px;border-radius:50%;border:2px solid white;object-fit:cover;"
                     onerror="this.style.display='none'" />
              </div>`;
          }
        }

        let nameHtml = `<div class="cart-item-name">${item.name}</div>`;
        let metaHtml = `<div class="cart-item-meta">${item.brand} · ${item.type === "full" ? "Frasco" : item.type === "decant" ? "Decant" : "Pack"} ${item.size}</div>`;

        if (hasGift) {
          metaHtml += `<div style="font-size:.7rem;color:var(--gold);margin-top:2px;">🎁 Incluye: ${item.gift.name} (${item.gift.size})</div>`;
        }

        let extraProductsHtml = "";
        if (isMultiPack) {
          extraProductsHtml = `
            <div style="display:flex;gap:6px;overflow-x:auto;padding-top:6px;margin-top:6px;border-top:1px dashed var(--border-light);">
              ${item.includedProducts
              .map(
                (p) => `
                <div style="flex:0 0 auto;text-align:center;width:55px;">
                  <img src="${p.image}" alt="${p.name}"
                       style="width:36px;height:36px;border-radius:6px;object-fit:cover;display:block;margin:0 auto;"
                       onerror="this.src='img/perfumes/placeholder.webp'" />
                  <div style="font-size:.62rem;line-height:1.2;margin-top:2px;max-width:55px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-muted);">${p.name}</div>
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
              <button data-action="qty" data-index="${i}" data-delta="-1">−</button>
              <span>${item.qty}</span>
              <button data-action="qty" data-index="${i}" data-delta="1">+</button>
            </div>
            <button class="cart-item-remove" data-action="remove" data-index="${i}" title="Eliminar">🗑</button>
          </div>`;
      })
      .join("");
  }

  function updateCartFooter() {
    const footer = document.getElementById("cartFooter");
    const total = document.getElementById("cartTotal");
    if (cart.length === 0) {
      footer.style.display = "none";
    } else {
      footer.style.display = "block";
      total.textContent = formatPrice(getCartTotal());
    }
  }

  document.getElementById("cartItems").addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    const action = btn.dataset.action;
    const index = parseInt(btn.dataset.index);
    if (action === "qty") updateCartQty(index, parseInt(btn.dataset.delta));
    else if (action === "remove") removeFromCart(index);
  });

  /* ══════════════════════════════════════════════════════════════
     CART — OPEN / CLOSE
  ══════════════════════════════════════════════════════════════ */
  function openCart() {
    document.getElementById("cartOverlay").classList.add("active");
    document.getElementById("cartSidebar").classList.add("active");
    document.body.style.overflow = "hidden";
    updateCartUI();
  }
  function closeCart() {
    document.getElementById("cartOverlay").classList.remove("active");
    document.getElementById("cartSidebar").classList.remove("active");
    document.body.style.overflow = "";
  }
  function goToCheckout() {
    if (cart.length === 0) {
      showToast("🛒 Tu carrito está vacío");
      return;
    }
    closeCart();
    navigateTo("checkout");
  }

  /* ══════════════════════════════════════════════════════════════
     MODAL — PRODUCT
  ══════════════════════════════════════════════════════════════ */
  function openModal(productId) {
    const product = getProductById(productId);
    if (!product) return;
    currentModalProduct = product;
    currentModalView = "full";
    currentModalSize =
      Object.keys(product.fullSizes)[0] || Object.keys(product.decantSizes)[0];
    updateModalContent();
    document.getElementById("modalOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
    document.body.style.overflow = "";
    currentModalProduct = null;
  }

  function updateModalContent() {
    const product = currentModalProduct;
    if (!product) return;

    const isFull = currentModalView === "full";
    const sizes = isFull ? product.fullSizes : product.decantSizes;
    const image = isFull ? product.fullImage : product.decantImage;

    document.getElementById("modalImage").querySelector("img").src = image;
    document.getElementById("modalName").textContent = product.name;
    document.getElementById("modalBrand").textContent = product.brand;
    document.getElementById("modalNotes").textContent =
      "✨ " + product.description + "\n\nNotas: " + product.notes;

    document.getElementById("tabFull").classList.toggle("active", isFull);
    document.getElementById("tabDecant").classList.toggle("active", !isFull);

    if (!sizes || Object.keys(sizes).length === 0) {
      currentModalSize = null;
    } else {
      if (!sizes[currentModalSize]) currentModalSize = Object.keys(sizes)[0];
    }

    const sizeContainer = document.getElementById("modalSizes");
    sizeContainer.innerHTML = Object.keys(sizes)
      .map(
        (size) =>
          `<button class="size-option${size === currentModalSize ? " selected" : ""}" data-size="${size}">${size}</button>`,
      )
      .join("");

    const price = currentModalSize ? sizes[currentModalSize] : null;
    document.getElementById("modalPrice").textContent = price
      ? formatPrice(price) + " · " + currentModalSize
      : "Selecciona tamaño";
  }

  document.getElementById("tabFull").addEventListener("click", function () {
    currentModalView = "full";
    updateModalContent();
  });
  document.getElementById("tabDecant").addEventListener("click", function () {
    currentModalView = "decant";
    updateModalContent();
  });

  document.getElementById("modalSizes").addEventListener("click", function (e) {
    const btn = e.target.closest(".size-option");
    if (!btn) return;
    currentModalSize = btn.dataset.size;
    updateModalContent();
  });

  document.getElementById("modalAddBtn").addEventListener("click", function () {
    if (!currentModalProduct || !currentModalSize) {
      showToast("⚠️ Selecciona un tamaño");
      return;
    }
    addToCart(currentModalProduct.id, currentModalView, currentModalSize);
    closeModal();
    openCart();
  });

  document.getElementById("modalOverlay").addEventListener("click", function (e) {
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

    document.getElementById("packModalTitle").textContent = promo.name;
    document.getElementById("packModalDesc").textContent = promo.desc;

    const groupOptions = document.getElementById("packGroupOptions");
    const productGrid = document.getElementById("packProductGrid");
    const counterEl = document.getElementById("packCounter");
    const confirmBtn = document.getElementById("packConfirmBtn");
    const qtyGrid = document.getElementById("packQtyGrid");
    const qtyTitle = qtyGrid.previousElementSibling;

    if (currentPackIsGroup) {
      // Limpiar residuos
      currentPackPromo.size = undefined;
      currentPackPromo.price = undefined;

      groupOptions.style.display = "block";
      productGrid.style.display = "none";
      counterEl.style.display = "none";
      confirmBtn.style.display = "none";

      // Ocultar cantidad (viene fija en la promo)
      qtyGrid.style.display = "none";
      if (qtyTitle) qtyTitle.style.display = "none";

      renderPackSizeOptions();
    } else {
      groupOptions.style.display = "none";
      productGrid.style.display = "grid";
      counterEl.style.display = "block";
      confirmBtn.style.display = "flex";
      renderPackGrid();
      updatePackCounter();
    }

    document.getElementById("packModalOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePackModal() {
    document.getElementById("packModalOverlay").classList.remove("active");
    document.body.style.overflow = "";
    currentPackPromo = null;
    currentPackIsGroup = false;
    currentPackGroupSize = null;
    currentPackGroupQty = null;
    selectedPackProducts = [];
    document.getElementById("packGroupOptions").style.display = "none";
  }

  function getEligibleProducts(promo) {
    let eligible = products.filter((p) => !p.tester);
    if (promo.allowedCategories) {
      eligible = eligible.filter((p) => promo.allowedCategories.includes(p.category));
    }
    if (promo.allowedGenders) {
      eligible = eligible.filter((p) => promo.allowedGenders.includes(p.gender));
    }
    return eligible.filter((p) => p.cardImage && p.cardImage.trim() !== "");
  }

  function renderPackGrid() {
    const promo = currentPackPromo;
    if (!promo) return;

    const eligible = getEligibleProducts(promo);
    const grid = document.getElementById("packProductGrid");

    if (eligible.length === 0) {
      grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);">No hay perfumes disponibles para esta promoción.</p>';
      return;
    }

    grid.innerHTML = eligible
      .slice(0, 30)
      .map((prod) => {
        const isSelected = selectedPackProducts.includes(prod.id);
        return `
        <div class="pack-product-item ${isSelected ? "selected" : ""}" data-product-id="${prod.id}" onclick="togglePackProduct(${prod.id})">
          <img src="${prod.cardImage}" alt="${prod.name}" loading="lazy"
               onerror="this.src='img/perfumes/placeholder.webp';this.onerror=null;" />
          <span class="pack-product-name">${prod.name}</span>
          <span class="pack-product-brand">${prod.brand}</span>
        </div>`;
      })
      .join("");
  }

  window.togglePackProduct = function (productId) {
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
  };

  function updatePackCounter() {
    const promo = currentPackPromo;
    const counter = document.getElementById("packCounter");
    if (promo) {
      const qty = promo.quantity;
      counter.textContent = `Seleccionados: ${selectedPackProducts.length} de ${qty}`;
    }
  }

  function renderPackSizeOptions() {
    if (!currentPackIsGroup || !currentPackPromo) return;
    const sizes = currentPackPromo.options.map((opt) => opt.size);
    const container = document.getElementById("packSizeGrid");
    container.innerHTML = sizes
      .map(
        (size) =>
          `<button class="size-option${size === currentPackGroupSize ? " selected" : ""}" data-size="${size}">${size}</button>`,
      )
      .join("");

    // Siempre ocultamos cantidad (ya está definida en la promo)
    const qtyGrid = document.getElementById("packQtyGrid");
    const qtyTitle = qtyGrid.previousElementSibling;
    qtyGrid.innerHTML = "";
    qtyGrid.style.display = "none";
    if (qtyTitle) qtyTitle.style.display = "none";

    document.getElementById("packGroupPrice").textContent = "";
  }

  function selectPackSize(size) {
    currentPackGroupSize = size;
    currentPackGroupQty = currentPackPromo.quantity;
    packGroupPrice = 0;

    document.querySelectorAll("#packSizeGrid .size-option").forEach((btn) => {
      btn.classList.toggle("selected", btn.dataset.size === size);
    });

    const qtyGrid = document.getElementById("packQtyGrid");
    const qtyTitle = qtyGrid.previousElementSibling;
    qtyGrid.innerHTML = "";
    qtyGrid.style.display = "none";
    if (qtyTitle) qtyTitle.style.display = "none";

    const option = currentPackPromo.options.find((o) => o.size === size);
    if (option) {
      packGroupPrice = option.price;
      document.getElementById("packGroupPrice").textContent =
        `Precio: ${formatPrice(packGroupPrice)}`;
    } else {
      document.getElementById("packGroupPrice").textContent = "";
    }
  }

  // Listener para los botones de tamaño
  document.getElementById("packSizeGrid").addEventListener("click", function (e) {
    const btn = e.target.closest(".size-option");
    if (!btn) return;
    selectPackSize(btn.dataset.size);
  });

  // Botón "Seleccionar Perfumes" dentro del grupo
  document.getElementById("packGroupContinue").addEventListener("click", function () {
    if (!currentPackGroupSize) {
      showToast("⚠️ Selecciona un tamaño primero");
      return;
    }
    document.getElementById("packGroupOptions").style.display = "none";
    document.getElementById("packProductGrid").style.display = "grid";
    document.getElementById("packCounter").style.display = "block";
    document.getElementById("packConfirmBtn").style.display = "flex";

    // Asignamos los valores escogidos
    currentPackPromo.size = currentPackGroupSize;
    currentPackPromo.price = packGroupPrice;
    selectedPackProducts = [];
    renderPackGrid();
    updatePackCounter();
  });

  window.confirmPack = function () {
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

    cart.push(packItem);
    saveCart();
    updateCartUI();

    const mensaje = promo.gift
      ? `🎁 ¡Pack añadido! (incluye ${packItem.gift.name} de regalo)`
      : "✅ ¡Pack añadido al carrito!";

    showToast(mensaje);
    pulseCartCount();
    closePackModal();
    openCart();
  };

  document.getElementById("packModalOverlay").addEventListener("click", function (e) {
    if (e.target === this) closePackModal();
  });

  /* ══════════════════════════════════════════════════════════════
     NAVIGATION
  ══════════════════════════════════════════════════════════════ */
  function navigateTo(page) {
    currentPage = page;

    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
    const target = document.getElementById("page-" + page);
    if (target) target.classList.add("active");

    document.querySelectorAll(".nav a").forEach((a) => a.classList.remove("active"));
    const navLink = document.querySelector(`.nav a[data-page="${page}"]`);
    if (navLink) navLink.classList.add("active");

    if (page === "catalogo") renderCatalog();
    if (page === "promos") renderPromos();
    if (page === "checkout") renderCheckoutPage();
    if (page === "home") renderFeatured();

    document.getElementById("nav").classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.navigateTo = navigateTo;

  /* ══════════════════════════════════════════════════════════════
     RENDER — PRODUCT CARD
  ══════════════════════════════════════════════════════════════ */
  function createProductCard(product) {
    const decantSizes = Object.keys(product.decantSizes);
    const minPrice = decantSizes.length > 0 ? Math.min(...Object.values(product.decantSizes)) : null;

    const badgeHTML = product.badge
      ? `<span class="product-badge ${product.badge}">${product.badgeText}</span>`
      : "";
    const priceText = minPrice ? `Desde ${formatPrice(minPrice)}` : "Consultar";
    const catLabel =
      product.category === "nicho" ? "Nicho" : product.category === "arabe" ? "Árabe" : "Diseñador";

    return `
      <div class="product-card reveal-item" data-product-id="${product.id}">
        <div class="img-wrapper">
          ${badgeHTML}
          <img src="${product.cardImage}" alt="${product.name}" onerror="this.style.display='none';" />
        </div>
        <div class="product-info">
          <div class="product-category">${catLabel} · ${product.gender}</div>
          <div class="product-name">${product.name}</div>
          <div class="product-brand">${product.brand}</div>
          <div class="product-price">${priceText}</div>
          <button class="btn-add" data-add-id="${product.id}">Ver y Comprar</button>
        </div>
      </div>`;
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER — FEATURED
  ══════════════════════════════════════════════════════════════ */
  function renderFeatured() {
    document.getElementById("featuredGrid").innerHTML = products
      .filter((p) => p.featured)
      .map(createProductCard)
      .join("");
    observeRevealElements();
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER — CATALOG
  ══════════════════════════════════════════════════════════════ */
  function renderCatalog() {
    const grid = document.getElementById("catalogGrid");
    let filtered = products;

    if (activeFilters.category === "tester") {
      filtered = filtered.filter((p) => p.tester === true);
    } else {
      filtered = filtered.filter((p) => !p.tester);
      if (activeFilters.category !== "all") {
        filtered = filtered.filter((p) => p.category === activeFilters.category);
      }
    }

    if (activeFilters.gender !== "all") {
      filtered = filtered.filter((p) => p.gender === activeFilters.gender);
    }

    if (currentSearchTerm) {
      const term = currentSearchTerm;
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term) ||
          p.notes.toLowerCase().includes(term),
      );
    }

    grid.innerHTML = filtered.length
      ? filtered.map(createProductCard).join("")
      : `<p style="text-align:center;color:var(--text-muted);grid-column:1/-1;padding:2rem;">No se encontraron perfumes.</p>`;

    observeRevealElements();
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER — PROMOS
  ══════════════════════════════════════════════════════════════ */
  function renderPromos() {
    const grid = document.getElementById("promoGrid");
    let filtered = promos;

    if (activePromoFilter !== "all") {
      filtered = filtered.filter((p) => p.category === activePromoFilter);
    }
    if (activePromoFilter === "arabe" && activePromoGender !== "all") {
      filtered = filtered.filter((p) => {
        if (!p.allowedGenders) return true;
        return p.allowedGenders.includes(activePromoGender);
      });
    }

    if (filtered.length === 0) {
      grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:2rem;">No hay promociones en esta categoría.</p>';
      return;
    }

    grid.innerHTML = filtered
      .map((promo) => {
        let priceHtml = "";
        let imageUrl = promo.image || "";

        if (promo.type === "group" && promo.options && promo.options.length) {
          const allPrices = promo.options.map(opt => opt.price);
          const minPrice = Math.min(...allPrices);
          const maxPrice = Math.max(...allPrices);
          priceHtml = minPrice === maxPrice ? formatPrice(minPrice) : `Desde ${formatPrice(minPrice)}`;
        } else if (promo.price) {
          priceHtml = formatPrice(promo.price);
        } else {
          priceHtml = "Consultar";
        }

        const infoLine = promo.type === "group"
          ? `📦 ${promo.quantity} perfume(s) · Elige tamaño`
          : `📦 ${promo.quantity} perfume(s) · ${promo.size}`;

        return `
      <div class="promo-card reveal-item">
        ${promo.badge ? `<div class="promo-badge">${promo.badge}</div>` : ""}
        ${imageUrl ? `<img src="${imageUrl}" alt="${promo.name}" class="promo-img" loading="lazy" onerror="this.style.display='none'" />` : `<div class="promo-icon">${getCategoryIcon(promo.category)}</div>`}
        <h3>${promo.name}</h3>
        <p class="promo-desc">${promo.desc}</p>
        <p style="font-size:.78rem;color:var(--text-muted);margin-bottom:.3rem;">${infoLine}</p>
        <div class="promo-price">${priceHtml}</div>
        <button class="btn-add" data-promo-id="${promo.id}">Seleccionar Perfumes</button>
      </div>`;
      })
      .join("");

    observeRevealElements();
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER — CHECKOUT
  ══════════════════════════════════════════════════════════════ */
  function renderCheckoutPage() {
    const emptyMsg = document.getElementById("checkout-empty-cart");
    const formWrapper = document.getElementById("checkout-form-wrapper");
    const summaryItems = document.getElementById("checkoutSummaryItems");
    const totalEl = document.getElementById("checkoutTotal");

    if (cart.length === 0) {
      if (emptyMsg) emptyMsg.style.display = "block";
      if (formWrapper) formWrapper.style.display = "none";
      return;
    }

    if (emptyMsg) emptyMsg.style.display = "none";
    if (formWrapper) formWrapper.style.display = "block";

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
                  `<img src="${p.image}" alt="${p.name}"
                  style="width:32px;height:32px;border-radius:6px;object-fit:cover;margin-right:4px;"
                  onerror="this.src='img/perfumes/placeholder.webp'" />`,
              )
              .join("");
            infoHtml = `
            <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;">
              <div style="display:flex;">${miniImgs}</div>
              <div>
                <div style="font-weight:600;font-size:.85rem;">${item.name}</div>
                <div style="font-size:.75rem;color:var(--text-secondary);">${item.includedProducts.length} × ${item.size}</div>
              </div>
            </div>`;
          } else if (hasGift) {
            infoHtml = `
            <div style="display:flex;align-items:center;gap:.5rem;">
              <div style="position:relative;">
                <img src="${item.image}" style="width:32px;height:32px;border-radius:6px;object-fit:cover;" />
                <img src="${item.gift.image}" alt="${item.gift.name}"
                     style="position:absolute;bottom:-4px;right:-4px;width:20px;height:20px;border-radius:50%;border:2px solid white;object-fit:cover;" />
              </div>
              <div>
                <div style="font-weight:600;font-size:.85rem;">${item.name}</div>
                <div style="font-size:.75rem;color:var(--text-secondary);">${item.size} (incluye ${item.gift.name})</div>
              </div>
            </div>`;
          } else {
            const typeLabel = item.type === "full" ? "Frasco" : "Decant";
            infoHtml = `
            <div style="display:flex;align-items:center;gap:.5rem;">
              <img src="${item.image}" style="width:32px;height:32px;border-radius:6px;object-fit:cover;" />
              <div>
                <div style="font-weight:600;font-size:.85rem;">${item.name}</div>
                <div style="font-size:.75rem;color:var(--text-secondary);">${typeLabel} ${item.size} × ${item.qty}</div>
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

    if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
  }

  /* ══════════════════════════════════════════════════════════════
     FILTERS — CATALOG
  ══════════════════════════════════════════════════════════════ */
  function updateCatalogFilterButtons() {
    document.querySelectorAll("#filtersCategory .filter-btn").forEach((btn) => {
      btn.classList.toggle("active", activeFilters.category === btn.dataset.filter);
    });
    document.querySelectorAll("#filtersGender .filter-btn").forEach((btn) => {
      btn.classList.toggle("active", activeFilters.gender === btn.dataset.filter);
    });
  }

  document.getElementById("filtersCategory").addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const val = btn.dataset.filter;
    activeFilters.category = activeFilters.category === val ? "all" : val;
    updateCatalogFilterButtons();
    renderCatalog();
  });

  document.getElementById("filtersGender").addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const val = btn.dataset.filter;
    activeFilters.gender = activeFilters.gender === val ? "all" : val;
    updateCatalogFilterButtons();
    renderCatalog();
  });

  /* ══════════════════════════════════════════════════════════════
     FILTERS — PROMOS
  ══════════════════════════════════════════════════════════════ */
  function updatePromoFilterButtons() {
    document.querySelectorAll("#promoFilters .filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.promoFilter === activePromoFilter);
    });

    const genderGroup = document.getElementById("promoGenderGroup");
    const genderSep = document.getElementById("promoGenderSep");

    if (activePromoFilter === "arabe") {
      genderGroup.style.display = "flex";
      if (genderSep) genderSep.style.display = "block";
    } else {
      genderGroup.style.display = "none";
      if (genderSep) genderSep.style.display = "none";
      activePromoGender = "all";
    }

    document.querySelectorAll("#promoGenderFilters .filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.promoGender === activePromoGender);
    });
  }

  document.getElementById("promoFilters").addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activePromoFilter = btn.dataset.promoFilter;
    activePromoGender = "all";
    updatePromoFilterButtons();
    renderPromos();
  });

  document.getElementById("promoGenderFilters").addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activePromoGender = btn.dataset.promoGender;
    updatePromoFilterButtons();
    renderPromos();
  });

  /* ══════════════════════════════════════════════════════════════
     SEARCH
  ══════════════════════════════════════════════════════════════ */
  function handleSearchInput() {
    const input = document.getElementById("searchInput");
    const term = input.value.trim().toLowerCase();
    currentSearchTerm = term;
    const suggestionsContainer = document.getElementById("searchSuggestions");

    if (term.length === 0) {
      suggestionsContainer.style.display = "none";
      renderCatalog();
      return;
    }

    const filtered = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term) ||
          p.notes.toLowerCase().includes(term),
      )
      .slice(0, 8);

    if (filtered.length === 0) {
      suggestionsContainer.innerHTML = '<div class="search-no-results">No se encontraron perfumes.</div>';
    } else {
      suggestionsContainer.innerHTML = filtered
        .map(
          (p) => `
        <div class="search-suggestion-item"
             onclick="openModal(${p.id}); document.getElementById('searchSuggestions').style.display='none';">
          <img src="${p.cardImage}" alt="${p.name}" onerror="this.style.display='none'" />
          <span class="sug-name">${p.name}</span>
          <span class="sug-brand">${p.brand}</span>
        </div>`,
        )
        .join("");
    }

    suggestionsContainer.style.display = "block";
    renderCatalog();
  }
  window.handleSearchInput = handleSearchInput;

  document.addEventListener("click", function (e) {
    const suggestions = document.getElementById("searchSuggestions");
    const input = document.getElementById("searchInput");
    if (!input || !suggestions) return;
    if (!input.contains(e.target) && !suggestions.contains(e.target)) {
      suggestions.style.display = "none";
    }
  });

  /* ══════════════════════════════════════════════════════════════
     GLOBAL CLICK DELEGATION
  ══════════════════════════════════════════════════════════════ */
  document.addEventListener("click", function (e) {
    const card = e.target.closest(".product-card");
    if (card && !e.target.closest("button")) {
      const id = parseInt(card.dataset.productId);
      if (id) openModal(id);
      return;
    }

    const addBtn = e.target.closest(".btn-add[data-add-id]");
    if (addBtn) {
      e.stopPropagation();
      const id = parseInt(addBtn.dataset.addId);
      if (id) openModal(id);
      return;
    }

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
    const nombre = document.getElementById("chNombre").value.trim();
    const apellido = document.getElementById("chApellido").value.trim();
    const telefono = document.getElementById("chTelefono").value.trim();
    const direccion = document.getElementById("chDireccion").value.trim();
    const distrito = document.getElementById("chDistrito").value.trim();
    const referencia = document.getElementById("chReferencia").value.trim();
    const dni = document.getElementById("chDNI").value.trim();

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

    window.open(`https://wa.me/51903283353?text=${encodeURIComponent(mensaje)}`, "_blank");
    showToast("📲 Redirigiendo a WhatsApp...");
  };

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
  }

  /* ══════════════════════════════════════════════════════════════
     GLOBAL EXPOSE
  ══════════════════════════════════════════════════════════════ */
  window.closeCart = closeCart;
  window.closeModal = closeModal;
  window.closePackModal = closePackModal;
  window.goToCheckout = goToCheckout;
  window.openModal = openModal;

  /* ══════════════════════════════════════════════════════════════
     EVENT LISTENERS — UI
  ══════════════════════════════════════════════════════════════ */
  document.getElementById("btnCart").addEventListener("click", openCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);
  document.querySelector(".cart-close").addEventListener("click", closeCart);

  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("open");
  });

  window.addEventListener("scroll", () => {
    document.getElementById("header").classList.toggle("scrolled", window.scrollY > 50);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCart();
      closePackModal();
    }
  });

  /* ══════════════════════════════════════════════════════════════
     INIT
  ══════════════════════════════════════════════════════════════ */
  function init() {
    renderFeatured();
    renderCatalog();
    renderPromos();
    updateCartUI();
    updateCatalogFilterButtons();
    updatePromoFilterButtons();
    navigateTo("home");
    setTimeout(() => observeRevealElements(), 100);
  }

  init();
})();