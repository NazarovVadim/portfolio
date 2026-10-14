import { assetPath } from '../lib/assets';

export interface MarqueeImage {
  id: string;
  src: string;
  alt: string;
}

const image = (id: string, filename: string, alt: string): MarqueeImage => ({
  id,
  src: assetPath(`assets/animations/marquee/${filename}`),
  alt,
});

export const marqueeRowOne: readonly MarqueeImage[] = [
  image('space-voyage', 'space-voyage.gif', 'Space Voyage motion design preview'),
  image('codenest', 'codenest.gif', 'Codenest motion design preview'),
  image('vex-ventures', 'vex-ventures.gif', 'Vex Ventures motion design preview'),
  image('stellar-ai-v2', 'stellar-ai-v2.gif', 'Stellar AI motion design preview'),
  image('asme', 'asme.gif', 'Asme motion design preview'),
  image('transform-data', 'transform-data.gif', 'Transform Data motion design preview'),
  image('vitara', 'vitara.gif', 'Vitara motion design preview'),
  image('terra', 'terra.gif', 'Terra motion design preview'),
  image('skyelite', 'skyelite.gif', 'Skyelite motion design preview'),
  image('aethera', 'aethera.gif', 'Aethera motion design preview'),
  image('designpro', 'designpro.gif', 'Designpro motion design preview'),
] as const;

export const marqueeRowTwo: readonly MarqueeImage[] = [
  image('stellar-ai', 'stellar-ai.gif', 'Stellar AI motion design preview'),
  image('xportfolio', 'xportfolio.gif', 'Xportfolio motion design preview'),
  image('orbit-web3', 'orbit-web3.gif', 'Orbit Web3 motion design preview'),
  image('nexora', 'nexora.gif', 'Nexora motion design preview'),
  image('evr-ventures', 'evr-ventures.gif', 'EVR Ventures motion design preview'),
  image('planet-orbit', 'planet-orbit.gif', 'Planet Orbit motion design preview'),
  image('new-era', 'new-era.gif', 'New Era motion design preview'),
  image('wealth', 'wealth.gif', 'Wealth motion design preview'),
  image('luminex', 'luminex.gif', 'Luminex motion design preview'),
  image('celestia', 'celestia.gif', 'Celestia motion design preview'),
] as const;
