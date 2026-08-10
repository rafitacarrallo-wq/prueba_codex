// Datos orientativos de mercado 2025. Valores medios por barrio.
export const BARRIOS_MADRID = [
  {
    nombre: 'Salamanca',
    distrito: 'Salamanca',
    precioM2Venta: 7800,
    precioM2Alquiler: 22.5,
    metro: 'Serrano (L4) / Núñez de Balboa (L5, L9)',
    perfilInquilino: 'Ejecutivos, expats de alto poder adquisitivo, familias acomodadas',
    fama: 'Es el barrio más exclusivo de Madrid, sinónimo de lujo, comercio de firma y edificios señoriales muy cuidados. La seguridad es excelente y el ambiente tranquilo y elegante, aunque poco animado de noche fuera de la zona de Goya.',
    demandaAlquiler: 8,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Chamberí',
    distrito: 'Chamberí',
    precioM2Venta: 6700,
    precioM2Alquiler: 21,
    metro: 'Bilbao (L1, L4) / Iglesia (L1)',
    perfilInquilino: 'Jóvenes profesionales, parejas sin hijos, familias consolidadas',
    fama: 'Barrio burgués y muy demandado, con calles amplias, mercados gastronómicos y una vida de barrio auténtica. Combina seguridad alta con buena oferta de restauración, lo que lo convierte en uno de los sitios más equilibrados de la ciudad.',
    demandaAlquiler: 9,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Argüelles',
    distrito: 'Moncloa-Aravaca',
    precioM2Venta: 6100,
    precioM2Alquiler: 20,
    metro: 'Argüelles (L3, L4, L6)',
    perfilInquilino: 'Estudiantes universitarios, jóvenes profesionales, compartir piso',
    fama: 'Zona muy céntrica y bien comunicada junto a la Ciudad Universitaria y el Parque del Oeste. Ambiente joven y comercial, seguro, con mucha rotación de inquilinos por el peso del alumnado.',
    demandaAlquiler: 9,
    tendencia: 'Estable'
  },
  {
    nombre: 'Chamartín',
    distrito: 'Chamartín',
    precioM2Venta: 6300,
    precioM2Alquiler: 19,
    metro: 'Chamartín (L1, L10) / Colombia (L8, L9)',
    perfilInquilino: 'Familias, directivos, personal de oficinas del norte financiero',
    fama: 'Barrio residencial de clase media-alta pegado al eje empresarial del paseo de la Castellana. Muy tranquilo y seguro, con buenos colegios y servicios, pero con poca vida nocturna.',
    demandaAlquiler: 8,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Retiro',
    distrito: 'Retiro',
    precioM2Venta: 6400,
    precioM2Alquiler: 20,
    metro: 'Retiro (L2) / Ibiza (L9)',
    perfilInquilino: 'Familias, profesionales senior, expats con hijos',
    fama: 'Vivir junto al parque del Retiro es uno de los mayores reclamos de Madrid y eso sostiene los precios. Es una zona segura, verde y muy familiar, con comercio de proximidad y ambiente pausado.',
    demandaAlquiler: 8,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Malasaña',
    distrito: 'Centro',
    precioM2Venta: 6200,
    precioM2Alquiler: 23,
    metro: 'Tribunal (L1, L10) / Noviciado (L2)',
    perfilInquilino: 'Jóvenes profesionales, creativos, expats, alquiler de corta estancia',
    fama: 'Epicentro alternativo y creativo de la ciudad, lleno de bares, tiendas independientes y vida nocturna intensa. Muy demandado por jóvenes, aunque el ruido y el bullicio de fin de semana echan atrás a las familias.',
    demandaAlquiler: 10,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Chueca',
    distrito: 'Centro',
    precioM2Venta: 6800,
    precioM2Alquiler: 23.5,
    metro: 'Chueca (L5) / Gran Vía (L1, L5)',
    perfilInquilino: 'Jóvenes profesionales, expats, parejas sin hijos',
    fama: 'Barrio abierto, cosmopolita y referente LGTBI, con una oferta de ocio y restauración de primer nivel. Está muy bien reformado y es seguro, aunque muy ruidoso y con fuerte presión del alquiler turístico.',
    demandaAlquiler: 9,
    tendencia: 'Al alza'
  },
  {
    nombre: 'La Latina',
    distrito: 'Centro',
    precioM2Venta: 5900,
    precioM2Alquiler: 22,
    metro: 'La Latina (L5) / Tirso de Molina (L1)',
    perfilInquilino: 'Jóvenes profesionales, expats, parejas',
    fama: 'El Madrid castizo por excelencia, con la Cava Baja, el Rastro y un ambiente de tapeo constante. Zona segura y muy viva, con edificios antiguos que a menudo carecen de ascensor.',
    demandaAlquiler: 9,
    tendencia: 'Estable'
  },
  {
    nombre: 'Lavapiés',
    distrito: 'Centro',
    precioM2Venta: 4900,
    precioM2Alquiler: 21,
    metro: 'Lavapiés (L3) / Embajadores (L3, L5)',
    perfilInquilino: 'Estudiantes, jóvenes, población multicultural, compartir piso',
    fama: 'El barrio más multicultural de Madrid, con una escena cultural potentísima y precios todavía por debajo del resto del centro. La percepción de seguridad es algo más baja que en barrios vecinos y el parque de viviendas está muy envejecido.',
    demandaAlquiler: 9,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Arganzuela',
    distrito: 'Arganzuela',
    precioM2Venta: 5100,
    precioM2Alquiler: 18,
    metro: 'Legazpi (L3, L6) / Delicias (L3)',
    perfilInquilino: 'Jóvenes profesionales, parejas, familias jóvenes',
    fama: 'Barrio en plena transformación gracias a Madrid Río y a la obra nueva junto al Manzanares. Es tranquilo, seguro y bien comunicado, y se ha convertido en la alternativa lógica para quien no puede pagar el centro.',
    demandaAlquiler: 8,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Tetuán',
    distrito: 'Tetuán',
    precioM2Venta: 4600,
    precioM2Alquiler: 17.5,
    metro: 'Tetuán (L1) / Estrecho (L1)',
    perfilInquilino: 'Jóvenes profesionales, familias trabajadoras, compartir piso',
    fama: 'Barrio popular y muy denso que vive un proceso de renovación por su cercanía a la Castellana y a Cuatro Torres. Conviven calles muy cuidadas con otras degradadas, y la seguridad varía bastante según la zona.',
    demandaAlquiler: 8,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Cuatro Caminos',
    distrito: 'Tetuán',
    precioM2Venta: 4900,
    precioM2Alquiler: 18,
    metro: 'Cuatro Caminos (L1, L2, L6)',
    perfilInquilino: 'Jóvenes profesionales, estudiantes, parejas',
    fama: 'Nudo de transporte inmejorable que lo conecta con toda la ciudad en pocos minutos. Es un barrio de clase media, comercial y animado durante el día, con una percepción de seguridad buena.',
    demandaAlquiler: 8,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Carabanchel',
    distrito: 'Carabanchel',
    precioM2Venta: 2900,
    precioM2Alquiler: 14,
    metro: 'Oporto (L5, L6) / Carabanchel (L5)',
    perfilInquilino: 'Familias trabajadoras, jóvenes expulsados del centro, artistas',
    fama: 'Uno de los barrios de moda por su escena artística y por ofrecer los precios más bajos con metro directo al centro. Sigue arrastrando fama de barrio obrero y su seguridad es desigual, mejor en Opañel y Vista Alegre que en las zonas del sur.',
    demandaAlquiler: 8,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Usera',
    distrito: 'Usera',
    precioM2Venta: 2700,
    precioM2Alquiler: 13.5,
    metro: 'Usera (L6) / Plaza Elíptica (L6, L11)',
    perfilInquilino: 'Familias trabajadoras, comunidad china, inquilinos de renta baja',
    fama: 'Conocido como el Chinatown madrileño, con una oferta gastronómica asiática única en España y precios muy contenidos. Es un barrio humilde con reputación de conflictivo en algunas calles, aunque la demanda de alquiler es constante.',
    demandaAlquiler: 7,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Vallecas',
    distrito: 'Puente de Vallecas',
    precioM2Venta: 2600,
    precioM2Alquiler: 13,
    metro: 'Portazgo (L1) / Nueva Numancia (L1)',
    perfilInquilino: 'Familias trabajadoras, inquilinos de renta baja, jóvenes',
    fama: 'Barrio obrero con una identidad y un orgullo de barrio muy fuertes, además de los precios más baratos de la ciudad. Arrastra mala fama por la marginalidad de algunos puntos, aunque la mayor parte del barrio es tranquila y muy vivida.',
    demandaAlquiler: 7,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Ciudad Lineal',
    distrito: 'Ciudad Lineal',
    precioM2Venta: 3600,
    precioM2Alquiler: 15,
    metro: 'Pueblo Nuevo (L5, L7) / Ciudad Lineal (L5)',
    perfilInquilino: 'Familias, parejas jóvenes, profesionales de renta media',
    fama: 'Distrito muy amplio y residencial, con buenos servicios y bloques de los años sesenta a precios razonables. Es tranquilo y seguro en general, aunque poco atractivo desde el punto de vista turístico o de ocio.',
    demandaAlquiler: 7,
    tendencia: 'Estable'
  },
  {
    nombre: 'Moratalaz',
    distrito: 'Moratalaz',
    precioM2Venta: 3100,
    precioM2Alquiler: 14,
    metro: 'Artilleros (L9) / Pavones (L9)',
    perfilInquilino: 'Familias, jubilados, inquilinos de larga duración',
    fama: 'Barrio residencial planificado, con mucha zona verde entre bloques y una vida de barrio muy familiar. Es de los sitios más tranquilos y seguros de Madrid, pero está algo apartado y peor comunicado que otros distritos.',
    demandaAlquiler: 6,
    tendencia: 'Estable'
  },
  {
    nombre: 'Aluche',
    distrito: 'Latina',
    precioM2Venta: 2950,
    precioM2Alquiler: 14,
    metro: 'Aluche (L5) / Empalme (L5)',
    perfilInquilino: 'Familias trabajadoras, estudiantes, inquilinos de renta media-baja',
    fama: 'Barrio popular y bien comunicado por metro y Cercanías, con comercio local muy activo. Los precios son bajos y la demanda de alquiler estable, aunque el parque de vivienda necesita reformas en muchos casos.',
    demandaAlquiler: 7,
    tendencia: 'Estable'
  },
  {
    nombre: 'Hortaleza',
    distrito: 'Hortaleza',
    precioM2Venta: 4200,
    precioM2Alquiler: 16,
    metro: 'Mar de Cristal (L4, L8) / Hortaleza (L4)',
    perfilInquilino: 'Familias, profesionales del norte de Madrid, personal de oficinas',
    fama: 'Distrito residencial cómodo, con mucha vivienda moderna, zonas verdes y buena conexión con el aeropuerto y el norte empresarial. Es seguro y familiar, con un ambiente tranquilo alejado del bullicio del centro.',
    demandaAlquiler: 7,
    tendencia: 'Al alza'
  },
  {
    nombre: 'Las Tablas',
    distrito: 'Fuencarral-El Pardo',
    precioM2Venta: 4700,
    precioM2Alquiler: 17,
    metro: 'Las Tablas (L10) / Ronda de la Comunicación (L10)',
    perfilInquilino: 'Parejas jóvenes con hijos, empleados de sedes corporativas',
    fama: 'Barrio nuevo levantado en los años dos mil junto a las sedes de grandes empresas, con edificios modernos, garaje y piscina. Es limpio, seguro y muy familiar, aunque tiene poco carácter y depende del coche para casi todo lo que no sea la oficina.',
    demandaAlquiler: 8,
    tendencia: 'Estable'
  }
]
