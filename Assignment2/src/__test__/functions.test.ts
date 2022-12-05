import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import { mockData } from "../ts/services/__mocks__/movieservice"; // import the mockdata to enable sorting based on array-objects

test ("should sort the array from descending a-z", () => {
    //arrange

    let movies: IMovie[] = mockData;

    //act
    movieSort(movies);

    //assert
    expect(movies[0].Title).toBe("Harry Potter 1");
});

/*test("should sort the array that contains 2 objects with equal keyvalue-pair for title", () => {

    //arrange
    let movies:IMovie[] = mockData;
    //act
    movieSort(movies,false);
    //assert
    expect(movies[3].Title).toEqual(movies[4].Title);

});*/

test ("should sort the array from ascending z-a", () => {
    //arrange
    let movies: IMovie[] = mockData;
    //act
    movieSort(movies, false); // false since ascending
    //assert
    expect(movies[3 & 4].Title).toBe("Harry Potter 3");
});