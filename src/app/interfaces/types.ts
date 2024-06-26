export interface CaractersData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ComicsData {
  id: string;
  series: {
    name: string;
  }
  variantDescription: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface SeriesData {
  id: string;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  endYear: number;
}

export interface EventData {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  start: string;
  end: string;
}