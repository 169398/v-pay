export interface Arc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

export interface GlobeConfig {
  width?: number;
  height?: number;
  scale?: number;
  maxWidth?: number;
  darkMode?: boolean;
  markers?: Array<{ location: [number, number]; size: number }>;
  arcs?: Arc[];
}
