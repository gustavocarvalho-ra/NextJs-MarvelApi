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
  title: string;
  price: number;
  textObjects: {
    text: string;
  }
  thumbnail: {
    path: string;
    extension: string;
  };
}