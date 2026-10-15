import { describe, expect, it } from 'vitest';
import { assetSources } from './assetSources';
import { marqueeRowOne, marqueeRowTwo } from './marqueeImages';
import { projects } from './projects';
import { reviews } from './reviews';
import { services } from './services';

describe('portfolio content integrity', () => {
  it('keeps the exact required item counts and marquee split', () => {
    expect(services).toHaveLength(5);
    expect(projects).toHaveLength(4);
    expect(projects.flatMap((project) => project.images)).toHaveLength(12);
    expect(reviews).toHaveLength(3);
    expect(marqueeRowOne).toHaveLength(11);
    expect(marqueeRowTwo).toHaveLength(10);
  });

  it('records all original and captured visual sources with unique local files', () => {
    expect(assetSources).toHaveLength(47);
    expect(new Set(assetSources.map((asset) => asset.localPath))).toHaveLength(47);
    expect(assetSources.every((asset) => asset.sourceUrl.startsWith('https://'))).toBe(true);
  });
});
