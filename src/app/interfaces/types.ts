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