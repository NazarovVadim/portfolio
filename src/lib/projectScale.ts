export const PROJECT_SCALE_STEP = 0.03;

export function getProjectTargetScale(index: number, totalCards: number): number {
  return 1 - (totalCards - 1 - index) * PROJECT_SCALE_STEP;
}
