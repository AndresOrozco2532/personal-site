export interface LandingPageTranslate {
  HERO: HeroTranslate;
  SKILLS: SkillsTranslate;
  SERVICES: ServicesTranslate;
  LETS_WORK_TOGETHER: LetsWorkTogetherTranslate;
  FOOTER: FooterTranslate;
}

export interface HeroTranslate {
  NAME: string;
  GREETING: string;
  SOFTWARE: string;
  ENGINEER: string;
  DESCRIPTION: string;
  BTN_HIRE_ME: string;
  SOME_TOOL: string;
}

export interface SkillsTranslate {
  NAME: string;
  TITLE: string;
  DESCRIPTION: string;
  FRONT: string;
  BACK: string;
  APIS: string;
  GIT: string;
}

export interface ServicesTranslate {
  NAME: string;
  TITLE: string;
  FRONT: ServicesCardTranslate;
  BACK: ServicesCardTranslate;
  APPS: ServicesCardTranslate;
  BPM: ServicesCardTranslate;
}

export interface ServicesCardTranslate {
  TITLE: string;
  DESCRIPTION: string;
}

export interface LetsWorkTogetherTranslate {
  NAME: string;
  TITLE: string;
  DESCRIPTION: string;
  CONTACT: LetsWorkTogetherContactTranslate;
}

export interface LetsWorkTogetherContactTranslate {
  TAB: string;
  NAME: string;
  NAME_PLACEHOLDER: string;
  EMAIL: string;
  EMAIL_PLACEHOLDER: string;
  MESSAGE: string;
  MESSAGE_PLACEHOLDER: string;
  BTN_SEND: string;
}

export interface FooterTranslate {
  NOTE: string;
}
