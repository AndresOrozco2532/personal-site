import { LandingPageTranslate } from '../../models/public/landing.translate.model';

const LANDING: LandingPageTranslate = {
  HERO: {
    NAME: 'Home',
    GREETING: 'Hi I am',
    SOFTWARE: 'Software',
    ENGINEER: 'Engineer',
    DESCRIPTION:
      'Skilled and resourceful engineer trained for any web development challenge you have',
    BTN_HIRE_ME: 'HIRE ME',
    SOME_TOOL: 'Some of the tools I use the most',
  },
  SKILLS: {
    NAME: 'Skills',
    TITLE: 'Why you <span class="highlighted">hire me</span>?',
    DESCRIPTION:
      'You should <span class="highlighted">Hire Me</span> as a Software Engineer because I have extensive knowledge about stages of web development such as...',
    FRONT: 'Angular/React',
    BACK: 'C# /.Net Core / .Net Framework',
    APIS: 'Web Services (Apis)',
    GIT: 'TFS/Git',
  },
  SERVICES: {
    NAME: 'Services',
    TITLE: 'The services <span class="highlighted">I provide</span>',
    FRONT: {
      TITLE: 'Front-End Developer',
      DESCRIPTION:
        'As a front-end developer I have experience creating attractive and functional user interfaces using Angular and React, ready to bring web design excellence to challenging projects.',
    },
    BACK: {
      TITLE: 'Back-End Developer',
      DESCRIPTION:
        'Backend developer with solid .NET experience, specializing in building robust and scalable systems, with a focus on performance and security optimization.',
    },
    APPS: {
      TITLE: 'Apps Developer',
      DESCRIPTION:
        'I’m an IONIC Application Developer with a proven track record of creating high-performance, visually appealing cross-platform mobile applications, taking full advantage of the versatility of Ionic to deliver exceptional quality solutions.',
    },
    BPM: {
      TITLE: 'Business Process Management',
      DESCRIPTION:
        'Developer with experience in BPM (Business Process Management), highlighted by the ability to automate and optimize business workflows, improving operational efficiency and informed decision making.',
    },
  },
  LETS_WORK_TOGETHER: {
    NAME: 'Let’s work together',
    TITLE: 'Ready to elevate your digital brand? ',
    DESCRIPTION:
      'Let’s collaborate and create something extraordinary together.',
    CONTACT: {
      TAB: 'Contact me',
      NAME: 'Name',
      NAME_PLACEHOLDER: 'Type your name',
      EMAIL: 'Email',
      EMAIL_PLACEHOLDER: 'Type your email',
      MESSAGE: 'Message',
      MESSAGE_PLACEHOLDER: 'Tell me something about what’s on your mind',
      BTN_SEND: 'Send',
    },
    CONSOLE: {
      TABS: {
        TYPESCRIPT: 'contact.ts',
        HTML: 'contact.html',
        SCSS: 'contact.scss',
      },
      CODE: {
        TYPESCRIPT: `export class AndresOrozco {
  public getContactData(): ContactInfo {
      const contactInfo = {
        email: "andresorozco.developer@gmail.com",
        phone: "+57 321 956 3996"
      };
      return contactInfo;
    }
  }

  interface ContactInfo {
    email: string;
    phone: string;
  }
  `,
        HTML: `<div class="contact">
  <h1 class="contact__title">Contact me 😎😉</h1>
  <p class="contact__description">
    Let's boost your digital brand together 🤩
  </p>
</div>`,
        SCSS: `.contact {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: Poppins-Bold, sans-serif;
  font-size: 30px;
}

.description {
  font-family: Poppins-Regular, sans-serif;
  font-size: 12px;
}
`,
      },
    },
  },
  FOOTER: {
    NOTE: '© {{year}} <span class="highlighted">AndresOrozco.dev</span> All Rights Reserved.',
  },
};

export default LANDING;
