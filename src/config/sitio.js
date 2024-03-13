export const NavItems = [
  {
    label: 'Inicio',
    href: '/',
    mobileOnly: true,
  },
  {
    label: 'Nosotros',
    href: '/about',
    mobileOnly: true,
  },
  {
    label: 'Servicios',
    href: '/services',
    mobileOnly: true,
  },
  {
    label: 'Productos',
    href: '/products',
    mobileOnly: true,
  },
  {
    label: 'Contacto',
    href: '/contact',
    mobileOnly: true,
  },
  


];

export const InfoSite = [{
 
    path: '/aceros-pereira-logo-rectan.webp', // Ruta o URL de tu logo
    path_alternative:'/aceros-pereira-logo-oval.webp',
    nombreLogo: 'Aceros Pereira',
}];

export const Products = [
  {
    _id: 1,
    name: "Planchas de Acero",
    description: "Planchas de Acero laminadas en frío, caliente y acero galvanizado",
    img: "/images/products/planchas-acero-aceros-pereira.webp",
    herf:"/",
    items: [
      {
        _id:1,
        label: 'Plancha de acero laminada en frío',
        href: '/',
        imagen: '',
      },
      {
        _id:2,
        label: 'Plancha de acero laminado en caliente',
        href: '/',
        imagen: '',
      },
      {
        _id:3,
        label: 'Planchas de acero galvanizado',
        href: '/',
        imagen: '',
      },
      
    ]
  },
  {
    _id: 2,
    name: 'Perfiles de acero',
    description: "Perfiles de acero cuadrado, rectangular y abiertos.",
    img: "/images/products/tubos_apilados_aceros_pereira.webp",
    herf:"/",
    items:[
      {
        _id:1,
        label: 'Perfiles Cuadrados',
        href: '/',
        imagen: '',
      },
      {
        _id:2,
        label: 'Perfiles Rectangulares',
        href: '/',
        imagen: '',
      },
      {
        _id:3,
        label: 'Perfiles Abiertos',
        href: '/',
        imagen: '',
      },
    ]
  },
  {
    _id:3,
    name: 'Servicios',
    description: "Servicios de Corte de acero y plegado de laminas",
    img: "/images/products/plegadora-2-aceros-pereira.webp",
    herf:"/",
    items:[
      {
        _id:1,
        label: 'Plegado',
        href: '/',
        imagen: '',

      },
      {
        _id:2,
        label: 'Corte',
        href: '/',
        imagen: '',

      },
      
    ]
  },
  {
    _id:4,
    name: 'Material de segunda',
    description: "Materiales de segunda, perfiles, planchas, flejes",
    img: "/images/products/segunda-aceros-pereira.webp",
    herf:"/",
    items:[
      {
        _id: 1,
        label: 'Angulos laminados',
        href: '/',
        imagen: '',
      },
      {
        _id: 2,
        label: 'Barras planas',
        href: '/',
        imagen: '',
      },
      {
        _id: 3,
        label: 'Planchas antiabrasivas',
        href: '/',
        imagen: '',
      },
      {
        _id: 4,
        label: 'Flejes de acero',
        href: '/',
        imagen: '',
      },
      
    ]
  },
  

];



export const services=[
{
  _id:'1',
  label:'Flejado',
  description:'Nuestro servicio de alisado de bobinas de acero al carbono garantiza la máxima planitud y calidad del material. Alisamos sus bobinas para que no solo cumplan con los estándares técnicos más exigentes, sino también para optimizar su rendimiento en aplicaciones críticas. Mejore la eficiencia en su proceso de fabricación y eleve la calidad de sus productos finales, desde estructuras robustas hasta componentes de maquinaria que requieren precisión y resistencia.',
  dimensiones: {
      ancho: '1500 mm',
      largo: '',
      espesor: '4 mm',
      peso: '',
      },
  href:'/',
  imagen: '/images/transportador.jpeg',
},
{
  _id:'2',
  label:'Corte de planchas de acero',
  description:'Nuestra especialidad radica en el corte preciso de planchas de acero, abarcando una amplia gama de materiales, desde acero inoxidable hasta cobre y aluminio. Utilizamos tecnología de guillotina de vanguardia para ofrecer cortes impecables. Con nuestro servicio de corte, le proporcionamos la versatilidad necesaria para la fabricación de productos diversos, desde componentes industriales hasta detalles arquitectónicos, asegurando la precisión en cada pieza.',
  dimensiones: {
    ancho: '1500 mm',
    largo: '3 mts',
    espesor: '10 mm',
    peso: '',
    },
  href:'/',
  imagen: '',
},

{
  _id:'3',
  label:'Plegado de planchas de acero',
  description:'Ofrecemos servicios de plegado de planchas de acero, desde acero al carbono hasta materiales más especializados como cobre y aluminio. Nuestra maquinaria de última generación garantiza resultados precisos y flexibilidad en el diseño. Con el plegado, no solo formamos sus productos según sus especificaciones, sino que también le ofrecemos la posibilidad de crear soluciones a medida. Desde componentes industriales hasta detalles arquitectónicos, nuestro servicio se adapta a sus necesidades de diseño, aportando versatilidad a su línea de productos.',
  dimensiones: {
    ancho: '',
    largo: '5 mts',
    espesor: '10 mm',
    peso: ''
    },
  href:'/',
  imagen: '/images/dobladora-chapa.jpeg',
},


]

export const Contact =[
  {
    
      address:'Miguel León Prado 854',
      comune:'San Miguel',
      city:'Santiago',
      country:'Chile',
      icon:'',
      email:'ventas@acerospereira.cl',
      phone1:'+56 9 3427 4898',
    
    
  },
  
  
]