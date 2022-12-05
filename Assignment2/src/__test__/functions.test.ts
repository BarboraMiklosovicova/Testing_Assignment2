import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import { mockData } from "../ts/services/__mocks__/movieservice"; 

test ("should sort the array from descending a-z", () => {
    //ARRANGE
    let movies: IMovie[] = mockData;

    //ACT
    movieSort(movies);

    //ASSERT
    expect(movies[0].Title).toBe("Harry Potter 1");
});


test ("should sort the array from ascending z-a", () => {
    //ARRANGE
    let movies: IMovie[] = mockData;
    
    //ACT
    movieSort(movies, false); 
    
    //ASSERT
    expect(movies[3 & 4].Title).toBe("Harry Potter 3");
});