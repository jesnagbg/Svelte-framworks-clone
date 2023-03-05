declare interface Framework {
  name: string;
  color: string;
  surveys: Survey[];
}

declare interface Survey {
  year: number;
  retention: number;
  interest: number;
  usage: number;
  awareness: number;
}

export declare const frameworks: Framework[];
