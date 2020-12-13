export const DEFAULT_COLOR = 'indigo-600';
export const GRASS_GREEN = 'green-600';
export const RED_DANGER = 'red-500';

export const ALL_COLORS = Object.freeze([
  DEFAULT_COLOR,
  GRASS_GREEN,
  RED_DANGER,
]);

export function getBackgroundColor(color) {
  return `bg-${color}`;
}

export function getTextColor(color) {
  return `text-${color}`;
}
