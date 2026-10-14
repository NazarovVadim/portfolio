import { describe, expect, it } from 'vitest';
import { getProjectTargetScale } from './projectScale';

describe('getProjectTargetScale', () => {
  it('scales earlier cards by three percent per card above them', () => {
    expect(getProjectTargetScale(0, 3)).toBe(0.94);
    expect(getProjectTargetScale(1, 3)).toBe(0.97);
    expect(getProjectTargetScale(2, 3)).toBe(1);
  });
});
