import { LandingPageTranslate } from '../../models/public/landing.translate.model';

const LANDING: LandingPageTranslate = {
  HERO: {
    NAME: 'Inicio',
    GREETING: 'Hola, Soy',
    SOFTWARE: 'Ingeniero de',
    ENGINEER: 'Software',
    DESCRIPTION:
      'Ingeniero hábil e ingenioso capacitado para cualquier desafío de desarrollo web que tengas.',
    BTN_HIRE_ME: 'CONTRÁTAME',
    SOME_TOOL: 'Algunas de las herramientas que más uso',
  },
  SKILLS: {
    NAME: 'Habilidades',
    TITLE: '¿Por qué <span class="highlighted">contratarme</span>?',
    DESCRIPTION:
      'Deberías <span class="highlighted">Contratarme</span> como ingeniero de software porque tengo un amplio conocimiento sobre las etapas del desarrollo web como...',
    FRONT: 'Angular/React',
    BACK: 'C# /.Net Core / .Net Framework',
    APIS: 'Servicios Web (Apis)',
    GIT: 'TFS/Git',
  },
  SERVICES: {
    NAME: 'Servicios',
    TITLE: 'Los servicios que <span class="highlighted">proporciono</span>',
    FRONT: {
      TITLE: 'Desarrollador Front-End',
      DESCRIPTION:
        'Como desarrollador front-end tengo experiencia en la creación de interfaces de usuario atractivas y funcionales usando Angular y React, lista para llevar la excelencia en diseño web a proyectos desafiantes.',
    },
    BACK: {
      TITLE: 'Desarrollador Back-End ',
      DESCRIPTION:
        'Desarrollador backend con sólida experiencia en .NET, especializado en la construcción de sistemas robustos y escalables, con enfoque en la optimización del rendimiento y la seguridad.',
    },
    APPS: {
      TITLE: 'Desarrollador de  aplicaciones',
      DESCRIPTION:
        'Soy un desarrollador de aplicaciones IONIC con una trayectoria comprobada en la creación de aplicaciones móviles multiplataforma visualmente atractivas y de alto rendimiento, aprovechando al máximo la versatilidad de Ionic para ofrecer soluciones de calidad excepcional.',
    },
    BPM: {
      TITLE: 'Gestión de Procesos de Negocio',
      DESCRIPTION:
        'Desarrollador con experiencia en BPM (Business Process Management), destacado por la capacidad de automatizar y optimizar los flujos de trabajo empresariales, mejorando la eficiencia operativa y la toma de decisiones informadas.',
    },
  },
  LETS_WORK_TOGETHER: {
    NAME: 'Trabajemos juntos',
    TITLE: '¿Listo para elevar tu marca digital?',
    DESCRIPTION: 'Colaboremos y creemos algo extraordinario juntos.',
    CONTACT: {
      TAB: 'Contáctame',
      NAME: 'Nombre',
      NAME_PLACEHOLDER: 'Escribe su nombre',
      EMAIL: 'Correo electrónico',
      EMAIL_PLACEHOLDER: 'Escribe tu correo electrónico',
      MESSAGE: 'Mensaje',
      MESSAGE_PLACEHOLDER: 'Cuéntame algo sobre lo que tienes en mente',
      BTN_SEND: 'Enviar',
    },
    CONSOLE: {
      TABS: {
        TYPESCRIPT: 'contactame.ts',
        HTML: 'contactame.html',
        SCSS: 'contactame.scss',
      },
      CODE: {
        TYPESCRIPT: `export class AndresOrozco {
  public obtenerInformacionDeContacto(): InformacionDeContacto {
    const infoContacto = {
      correo: "andresorozco2532@gmail.com",
      telefono: "+57 320 201 2700"
    };
    return infoContacto;
  }
}

interface InformacionDeContacto {
  correo: string;
  telefono: string;
}
        `,
        HTML: `<div clase="contacto">
  <h1 class="titulo">Contáctame 😎😉</h1>
  <p clase="descripcion">
    Impulsemos juntos tu marca digital 🤩
  </p>
</div>
`,
        SCSS: `.contacto {
  display: flex;
  justify-content: center;
  align-items: center;
}

.titulo {
  font-family: Poppins-Bold, sans-serif;
  font-size: 30px;
}

.descripcion {
  font-family: Poppins-Regular, sans-serif;
  font-size: 12px;
}
`,
      },
    },
  },
  FOOTER: {
    NOTE: '© {{year}} <span class="highlighted">AndresOrozco.dev</span> Todos los derechos reservados.',
  },
};

export default LANDING;
