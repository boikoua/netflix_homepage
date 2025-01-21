export interface IMovie {
  title: string;
  genres: string[];
  year: number;
  director: string;
  description: string;
  rating: number;
  seasons?: number;
  episodes?: number;
}
