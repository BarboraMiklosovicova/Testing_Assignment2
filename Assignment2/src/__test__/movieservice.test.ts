import { IMovie } from "../ts/models/Movie"
import { getData } from "../ts/services/movieservice"

//jest.mock("../ts/services/movieservice.ts") 
//Vi vill mocka vår aixos get, se nedan (inte vår mock av getData-funktionen)

jest.mock("axios", () => ({
  get: async () =>{
      return new Promise((resolve) => {
          resolve({   //Vad vi får tillbaka från axios get
              data: { //Vi bygger upp den data som vi får från vår axios get
                  Search: [
                      {Title:"Harry Potter 1", imdbID:"1091", Type:"Movie",Poster:"url1", Year:"2001"},
                      {Title:"Harry Potter 2", imdbID:"1092", Type:"Movie",Poster:"url2", Year:"2002"},
                      {Title:"Harry Potter 3", imdbID:"1093", Type:"Movie",Poster:"url3", Year:"2003"},
                  ]
              }
          })
      })
  }
})); //mock axios

test("Should get mock data", async() => {
  //ARRANGE
  let searchText:string ="hej"
  
  //ACT
  let movies: IMovie[] = await getData(searchText);
  
  //ASSERT
  expect(movies.length).toBe(3);
  expect(movies[0].Year).toBe("2001");
  expect(movies[0].Title).toBe("Harry Potter 1");
});