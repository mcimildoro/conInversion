import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    }
];


type NavbarIconName = "HomeIcon" | "UserRound" | "BookText" | "CodeSquare" | "Speech";
export const itemsNavbar: { id: number; title: string; icon: NavbarIconName; link: string }[] = [
  {
      id: 1,
      title: "Home",
      icon: "HomeIcon",
      link: "/",
  },
  {
      id: 2,
      title: "User",
      icon: "UserRound",
      link: "/about-me",
  },
  {
      id: 3,
      title: "Book",
      icon: "BookText",
      link: "/services",
  },
  {
      id: 4,
      title: "Target",
      icon: "CodeSquare",
      link: "/about-me",
  },
  {
      id: 5,
      title: "Home",
      icon: "Speech",
      link: "/about-me",
  },
];


export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "TechSolutions",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "PixelCrafters",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "CodeForge Solutions",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Prácticas Grado",
        subtitle: "WebWizards Inc.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 22,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 15,
        text: "Retorno Promedio Anual (%)",
        lineRight: false,
        lineRightMobile: false,
    },
];

type IconName = "Crop" | "Pencil" | "Computer" | "Book" | "Rocket" | "Speech";
export const serviceData: { icon: IconName; title: string; description: string }[] = [
  {
      icon: "Crop",
      title: "Branding",
      description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
      icon: "Pencil",
      title: "Diseño web",
      description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
      icon: "Computer",
      title: "Desarrollo web",
      description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
      icon: "Book",
      title: "Copywriting",
      description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
      icon: "Rocket",
      title: "SEO",
      description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas",
  },
];



export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];


  type SocialIconName = "Youtube" | "Linkedin" | "Twitter";
  export const teamMembers: {
    name: string;
    role: string;
    description: string;
    image: string;
    social: SocialIconName[];
  }[] = [
    {
      name: "Francisco D’alessandro",
      role: "CEO",
      description:
        "Economista con 12 años de experiencia en finanzas y pasión por las matemáticas. Descubrió en la inversión en bolsa la tranquilidad y el camino que buscaba. Hoy, comparte su conocimiento para ayudar a otros a alcanzar sus metas financieras.",
      image: "./assets/fran-image.png", // Reemplázalo con la imagen real
      social: ["Youtube", "Linkedin", "Twitter"],
    },
    {
      name: "Juan Lafont",
      role: "CHAIRMAN",
      description:
        "Experto en inversión y finanzas con más de 20 años de experiencia. Apasionado del value investing, ha fundado e invertido en negocios en finanzas, real estate, energía y tecnología. Actualmente se enfoca en educación financiera y crecimiento personal, ayudando a otros a desarrollar su potencial.",
      image: "./assets/juan-image.png", // Reemplázalo con la imagen real
      social: ["Youtube", "Linkedin", "Twitter"],
    },
  ];


  export const dataSocialNetworks = [
    {
      id: 1,
      name: "Github",
      icon: "github",
      link: "https://github.com/coninversor",
    },
    {
      id: 2,
      name: "Instagram",
      icon: "instagram",
      link: "https://instagram.com/coninversion",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://linkedin.com/rafatarrega",
    },
    {
      id: 4,
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com/@coninversion",
    },
  ];

  export const testimonials = [
    {
      id: 1,
      name: "David Rodil",
      role: "CEO",
      quote:
        "Plena confianza en la información para mi cartera por la transparencia y comunicación. Son conocedores del mercado y de las empresas publicadas a las que se le realiza un análisis exhaustivo",
      image: "/assets/user.png",
    },
    {
      id: 2,
      name: "Luis Rozo",
      role: "Product Designer",
      quote:
        "Excelente apoyo para tomar decisiones de inversión inteligentes y acertadas. El análisis detallado y la transparencia en la comunicación me brindan total seguridad para gestionar mi portafolio.",
      image: "/assets/user.png",
    },
    {
      id: 3,
      name: "Manuel Carvajal",
      role: "Design Lead",
      quote:
        "Confío plenamente en el contenido que ofrecen, ya que los informes están bien fundamentados y su enfoque siempre es claro, preciso, confiable y profesional para tomar mejores decisiones de inversión.",
      image: "/assets/user.png",
    },
  ];
  

  export const tiers = [
    {
      name: 'Mensual',
      id: 'tier-mensual',
      href: '#',
      priceMonthly: '€25',
      description: "Plan mensual con acceso a informes y análisis.",
      features: ['Acceso web y móvil', 'Análisis de inversión en video y escrito', 'Descarga ilimitada de informes', '1 consulta por correo electrónico'],
      featured: false,
    },
    {
      name: 'Anual',
      id: 'tier-anual',
      href: '#',
      priceMonthly: '€200',
      description: 'Plan anual con beneficios adicionales y más consultas.',
      features: [
        'Acceso web y móvil',
        'Acceso a todos los informes de análisis de ventas',
        '10-12 análisis de inversión',
        '20 consultas por correo electrónico',
        'Resumen de cierres trimestrales',
        'Acompañamiento personalizado'
      ],
      featured: true,
    },
  ]
  
  
  export const faqs = [
    {
      "question": "¿Cómo debo estructurar mi cartera de inversión?",
      "answer": "**📌 Resumen: Cómo Estructurar tu Cartera de Inversión**\n\n🟢 **Diversificación:** Mantén entre **8 y 15 acciones** para reducir riesgos.\n\n🏢 **Diversificación por industrias:** Invierte en **diferentes sectores** para mayor estabilidad.\n\n❌ **No pongas todo en una sola acción:** No inviertas más del **10% de tu capital** en una sola inversión.\n\n💰 **Invierte dinero que no necesites a corto plazo:** Evita vender en momentos desfavorables.\n\n📌 **Conclusión:** Una **cartera bien estructurada** minimiza riesgos y aumenta el éxito a largo plazo.\n\n🎯 **¡Diversifica y toma decisiones informadas!**"
    },
    
    {
      "question": "¿Con cuánto dinero debo empezar a invertir?",
      "answer": "📌 **Cantidad recomendada para empezar a invertir**\n\n💰 **Inversión inicial sugerida:**\n- Se recomienda comenzar con **aproximadamente 3.000€**.\n- No es necesario invertir todo de una vez, puedes hacerlo gradualmente en **8 meses o 1 año**.\n\n📉 **Flexibilidad en la inversión:**\n- Si 3.000€ es mucho, puedes empezar con **1.500€** y hacer aportes mensuales.\n- Esta estrategia permite aprovechar el **interés compuesto** y optimizar las ganancias.\n\n✅ **Lo más importante es comenzar con una cantidad que te haga sentir cómodo y puedas mantener a largo plazo. ¡Empieza con lo que puedas y sigue creciendo!**"
    },
    
    {
      "question": "¿Cuándo debo comprar o vender una acción?",
      "answer": "📌 **Pasos para comprar una acción correctamente**\n\n1️⃣ **Accede a tu bróker** e inicia sesión en tu cuenta.\n2️⃣ **Busca la acción** usando el nombre de la empresa o su tique (ej. WS para Worthington Steel).\n3️⃣ **Verifica la compra:** Asegúrate de que la opción de compra esté activada.\n4️⃣ **Usa una orden limitada:** Define un precio específico para evitar fluctuaciones inesperadas.\n5️⃣ **Establece el precio y cantidad:** Indica el número de acciones y el precio límite.\n6️⃣ **Revisa los costos:** Confirma el total de la compra y verifica las comisiones del bróker.\n7️⃣ **Ejecuta la orden:** Haz clic en 'Cursar Orden' y confirma la transacción.\n8️⃣ **Ten en cuenta los horarios:** Las órdenes se ejecutan cuando la bolsa está abierta y el precio alcanza el límite definido.\n\n⚠️ **Consejo:** Cada bróker puede tener pequeñas diferencias en el proceso, pero seguir estos pasos te ayudará a invertir de forma eficiente y controlada. ¡Decide con información y planifica bien tus movimientos!"
    }  ,
    {
      question: "¿Cómo abrir una cuenta en un broker?",
      answer: "To cancel your subscription, log in to your account and navigate to the subscription management page.",
    },
    {
      question: "¿Dónde debo registrar mis ingresos de la bolsa de valores si soy persona natural en España?",
      answer: "We offer a free trial of the platform for a limited time, allowing access to a limited set of features without charges.",
    },
    {
      question: "¿Cuándo es el mejor momento para retirar dinero de un broker de inversión en la bolsa? Estrategias fiscales y de inversión.",
      answer: "Documentation is available on the company\'s website, providing detailed information, code examples, and other resources.",
    },
    {
      question: "¿Por qué deberia contratar este servicio?",
      answer: "You can contact the support team by submitting a support request through the website or emailing support@company.com.",
    }
  ]
  
  
  interface Oportunidades {
    image: string;
    title: string;
    description: string;
    stats?: {
      percentage: string;
      timeframe: string;
    };
    details: string;
  }
  
  export const cards: Oportunidades[] = [
    {
      title: "Redwood Transport",
      description: "Camiones de carga con aumento del 18% en los últimos 3 meses.",
      image: "/assets/truck.jpg",
      details:
        "Redwood Transport ha experimentado un crecimiento del 18% debido al aumento en la demanda de transporte de mercancías. Su expansión en rutas y eficiencia logística la convierten en una opción de inversión atractiva.",
      stats: {
        percentage: "18%",
        timeframe: "3 meses",
      },
    },
    {
      title: "Tegna Inc. (TGNA)",
      description: "Compañía de telecomunicaciones con fuerte crecimiento en el sector.",
      image: "/assets/telecom.jpg",
      details: `
        **🔍 Análisis de Inversión de TEGNA Inc. (TGNA)**
        
        TEGNA Inc. se ha convertido en un referente en la industria de medios y televisión en EE.UU., con 64 estaciones de TV y múltiples canales digitales. Su diversificación de ingresos proviene de suscripciones (52%), publicidad (44%) y anuncios políticos en años electorales.
  
        💰 **Fortalezas:**  
        - Genera **liquidez superior al doble de sus gastos**  
        - **Recompra de acciones** de $715M que impulsa su valoración  
        - No tiene pagos de deuda significativos hasta **2026**  
  
        ⚠️ **Riesgos:**  
        - **Alta deuda** (116% de su patrimonio), aunque ha ido reduciéndose  
        - **Impacto de litigios pasados**, aunque sin consecuencias graves  
  
        📌 **Conclusión:**  
        TEGNA es una opción atractiva de inversión, pero recomendamos **limitar la inversión al 7% del capital** y no comprar acciones por encima de **$36.90**`,
      stats: {
        percentage: "23%",
        timeframe: "2 meses",
      },
    },
    {
      title: "Worthington Steel (WS)",
      description: "Crecimiento sólido en el sector de fabricación de acero.",
      image: "/assets/steel.jpg",
      details:
        "Worthington Steel ha mostrado un aumento del 85% en los últimos 11 meses debido a la fuerte demanda de materiales industriales y su expansión en el mercado.",
      stats: {
        percentage: "85%",
        timeframe: "11 meses",
      },
    },
  ]