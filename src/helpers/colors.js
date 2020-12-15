export const DEFAULT_COLOR = 'indigo-600';
export const GRASS_GREEN = 'green-600';
export const RED_DANGER = 'red-500';
export const BRIGHT_PINK = 'pink-600';
export const SWEET_PURPLE = 'purple-500';
export const BRIGHT_YELLOW = 'yellow-400';
export const SKY_BLUE = 'blue-500';

export const ALL_COLORS = Object.freeze([
  DEFAULT_COLOR,
  GRASS_GREEN,
  RED_DANGER,
  BRIGHT_PINK,
  SWEET_PURPLE,
  BRIGHT_YELLOW,
  SKY_BLUE,
]);

export function getBackgroundColor(color) {
  return `bg-${color}`;
}

export function getTextColor(color) {
  return `text-${color}`;
}
