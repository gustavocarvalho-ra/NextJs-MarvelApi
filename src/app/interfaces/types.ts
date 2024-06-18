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
  title: string;
  prices: {
    type: string;
    price: string; 
  }
  textObjects: {
    type: string;
    language: string;
    text: string;
  }
  thumbnail: {
    path: string;
    extension: string;
  };
}