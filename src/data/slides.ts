export interface SlideMetadata {
  id: number;
  act: number;
  actName: string;
  actColor: string;
}

export const ACT_COLORS: Record<number, string> = {
  0: '#FFFFFF',
  1: '#D9534F',
  2: '#5CB85C',
  3: '#5BAFD9',
  4: '#F0A030',
  5: '#9B59B6',
  6: '#F0C040',
  7: '#D9534F',
  8: '#8B7355',
  9: '#7B68EE',
};

export const ACT_NAMES: Record<number, string> = {
  0: 'INTRO',
  1: 'HONEST TRUTH',
  2: 'IDEATE',
  3: 'BUILD SMART',
  4: 'DESIGN',
  5: 'AI · AUTOMATE',
  6: 'LAUNCH',
  7: 'SECURITY',
  8: 'LEGAL',
  9: 'APPENDIX',
};

// Map each slide number to its act
const SLIDE_ACT_MAP: Record<number, number> = {
  1:0, 2:0,
  3:1, 4:1, 5:1,
  6:2, 7:2, 8:2, 9:2, 10:2, 11:2,
  12:3, 13:3, 14:3, 15:3, 16:3, 17:3, 18:3, 19:3, 20:3,
  21:4, 22:4, 23:4, 24:4, 25:4,
  26:5, 27:5, 28:5, 29:5, 30:5, 31:5,
  32:6, 33:6, 34:6, 35:6,
  36:7, 37:7, 38:7, 39:7,
  40:8, 41:8,
  42:0, 43:0,
  44:9, 45:9, 46:9, 47:9, 48:9,
};

export const TOTAL_SLIDES = 48;

export function getSlideMetadata(id: number): SlideMetadata {
  const act = SLIDE_ACT_MAP[id] ?? 0;
  return {
    id,
    act,
    actName: ACT_NAMES[act],
    actColor: ACT_COLORS[act],
  };
}
