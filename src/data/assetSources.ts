export interface AssetSource {
  usage: string;
  sourceUrl: string;
  localPath: string;
}

export const assetSources: readonly AssetSource[] = [
  {
    usage: 'Hero portrait',
    sourceUrl:
      'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png',
    localPath: 'assets/images/hero/hero-portrait.png',
  },
  ...(
    [
      [
        'Space Voyage marquee',
        'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
        'space-voyage.gif',
      ],
      [
        'Codenest marquee',
        'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
        'codenest.gif',
      ],
      [
        'Vex Ventures marquee',
        'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
        'vex-ventures.gif',
      ],
      [
        'Stellar AI v2 marquee',
        'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
        'stellar-ai-v2.gif',
      ],
      ['Asme marquee', 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif', 'asme.gif'],
      [
        'Transform Data marquee',
        'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
        'transform-data.gif',
      ],
      [
        'Vitara marquee',
        'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
        'vitara.gif',
      ],
      [
        'Terra marquee',
        'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
        'terra.gif',
      ],
      [
        'Skyelite marquee',
        'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
        'skyelite.gif',
      ],
      [
        'Aethera marquee',
        'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
        'aethera.gif',
      ],
      [
        'Designpro marquee',
        'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
        'designpro.gif',
      ],
      [
        'Stellar AI marquee',
        'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
        'stellar-ai.gif',
      ],
      [
        'Xportfolio marquee',
        'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
        'xportfolio.gif',
      ],
      [
        'Orbit Web3 marquee',
        'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
        'orbit-web3.gif',
      ],
      [
        'Nexora marquee',
        'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
        'nexora.gif',
      ],
      [
        'EVR Ventures marquee',
        'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
        'evr-ventures.gif',
      ],
      [
        'Planet Orbit marquee',
        'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
        'planet-orbit.gif',
      ],
      [
        'New Era marquee',
        'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
        'new-era.gif',
      ],
      [
        'Wealth marquee',
        'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
        'wealth.gif',
      ],
      [
        'Luminex marquee',
        'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
        'luminex.gif',
      ],
      [
        'Celestia marquee',
        'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
        'celestia.gif',
      ],
    ] as const
  ).map(([usage, sourceUrl, filename]) => ({
    usage,
    sourceUrl,
    localPath: `assets/animations/marquee/${filename}`,
  })),
  {
    usage: 'About moon decoration',
    sourceUrl:
      'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    localPath: 'assets/images/about/moon.png',
  },
  {
    usage: 'About lower-left decoration',
    sourceUrl:
      'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    localPath: 'assets/images/about/object-left.png',
  },
  {
    usage: 'About Lego decoration',
    sourceUrl:
      'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    localPath: 'assets/images/about/lego.png',
  },
  {
    usage: 'About lower-right decoration',
    sourceUrl:
      'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    localPath: 'assets/images/about/object-right.png',
  },
  ...(
    [
      [
        'Nextlevel Studio image 1',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
        'nextlevel-studio-01.webp',
      ],
      [
        'Nextlevel Studio image 2',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
        'nextlevel-studio-02.webp',
      ],
      [
        'Nextlevel Studio image 3',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
        'nextlevel-studio-03.webp',
      ],
      [
        'Aura Brand Identity image 1',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
        'aura-brand-identity-01.webp',
      ],
      [
        'Aura Brand Identity image 2',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
        'aura-brand-identity-02.png',
      ],
      [
        'Aura Brand Identity image 3',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
        'aura-brand-identity-03.png',
      ],
      [
        'Solaris Digital image 1',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
        'solaris-digital-01.png',
      ],
      [
        'Solaris Digital image 2',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
        'solaris-digital-02.webp',
      ],
      [
        'Solaris Digital image 3',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
        'solaris-digital-03.png',
      ],
    ] as const
  ).map(([usage, sourceUrl, filename]) => ({
    usage,
    sourceUrl,
    localPath: `assets/images/projects/${filename}`,
  })),
] as const;
