import { IMovie } from "../../models/Movie";

let mockData: IMovie[] = [
  {Title:"Harry Potter 1", imdbID:"1091", Type:"Movie",Poster:"url1", Year:"2001"},
  {Title:"Harry Potter 2", imdbID:"1092", Type:"Movie",Poster:"url2", Year:"2002"},
  {Title:"Harry Potter 3", imdbID:"1093", Type:"Movie",Poster:"url3", Year:"2003"},

];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(mockData);
  });
};

