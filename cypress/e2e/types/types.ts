export type Parts = "OpeningGreeting" | null;

export interface Results {
  audioId: string;
  foundParts: Parts[];
}
