import { assetPath } from '../lib/assets';

export interface Project {
  number: string;
  name: string;
  category: string;
  images: readonly [string, string, string];
  liveUrl?: string;
}

export const projects: readonly Project[] = [
  {
    number: '01',
    name: 'Соотечественники РФ',
    category: 'Клиентский проект',
    images: [
      assetPath('assets/images/projects/sootechestvenniki-rf-01.png'),
      assetPath('assets/images/projects/sootechestvenniki-rf-02.png'),
      assetPath('assets/images/projects/sootechestvenniki-rf-03.png'),
    ],
    liveUrl: 'https://sootechestvenniki-rf.ru',
  },
  {
    number: '02',
    name: 'ЦНИИ КМ «Прометей»',
    category: 'Клиентский проект',
    images: [
      assetPath('assets/images/projects/crism-prometey-01.png'),
      assetPath('assets/images/projects/crism-prometey-02.png'),
      assetPath('assets/images/projects/crism-prometey-03.png'),
    ],
    liveUrl: 'https://crism-prometey.ru',
  },
  {
    number: '03',
    name: 'Командор Авто',
    category: 'Клиентский проект',
    images: [
      assetPath('assets/images/projects/komandor-auto-01.png'),
      assetPath('assets/images/projects/komandor-auto-02.png'),
      assetPath('assets/images/projects/komandor-auto-03.png'),
    ],
    liveUrl: 'https://командор-авто.рф',
  },
  {
    number: '04',
    name: 'Марки СНГ',
    category: 'Клиентский проект',
    images: [
      assetPath('assets/images/projects/marki-sng-01.png'),
      assetPath('assets/images/projects/marki-sng-02.png'),
      assetPath('assets/images/projects/marki-sng-03.png'),
    ],
    liveUrl: 'https://marki-sng.ru',
  },
] as const;
