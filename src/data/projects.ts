import { assetPath } from '../lib/assets';

export interface Project {
  number: string;
  name: string;
  category: 'Client' | 'Personal';
  images: readonly [string, string, string];
  liveUrl?: string;
}

export const projects: readonly Project[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    images: [
      assetPath('assets/images/projects/nextlevel-studio-01.webp'),
      assetPath('assets/images/projects/nextlevel-studio-02.webp'),
      assetPath('assets/images/projects/nextlevel-studio-03.webp'),
    ],
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    images: [
      assetPath('assets/images/projects/aura-brand-identity-01.webp'),
      assetPath('assets/images/projects/aura-brand-identity-02.png'),
      assetPath('assets/images/projects/aura-brand-identity-03.png'),
    ],
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    images: [
      assetPath('assets/images/projects/solaris-digital-01.png'),
      assetPath('assets/images/projects/solaris-digital-02.webp'),
      assetPath('assets/images/projects/solaris-digital-03.png'),
    ],
  },
] as const;
