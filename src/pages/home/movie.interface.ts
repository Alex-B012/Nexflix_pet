export enum GENRES {
  FANTASY = "fantasy",
  ADVENTURE = "adventure",
  ACTION = "action",
  DOCUMENTARY = "documentary",
  DRAMA = "drama",
  ROMANCE = "romance",
  COMEDY = "comedy",
  THRILLER = "thriller",
  CRIME = "crime",
  HORROR = "horror",
  MYSTERY = "mystery",
  SCI_FI = "sci-fi",
  SUPERHERO = "superhero",
  MUSICAL = "musical",
  COMING_OF_AGE = "coming-of-age",
  MELODRAMA = "melodrama",
  ROAD_MOVIE = "road-movie",
}

export interface MovieComment {
  id: number;
  name: string;
  stars: number;
  text: string;
}

export interface IMovie {
  id: number;
  title: string;
  description: string;
  rating: number;
  image: string;
  image_pos: number;
  title_stroke_color?: string;
  genres: GENRES[];
  trailerYT_id?: string;
  comments: MovieComment[];
}
