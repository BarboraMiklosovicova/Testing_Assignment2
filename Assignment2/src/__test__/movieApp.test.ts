/**
 * @jest-environment jsdom
 */

import { displayNoResult } from "../ts/movieApp";
import * as fnMovieApp from "../ts/movieApp";
import * as movieServiceFunctions from "../ts/services/movieservice";
import { IMovie } from "../ts/models/Movie";
import {expect, jest, test} from '@jest/globals';

jest.mock("./../ts/services/movieservice.ts");

describe ("init-function", () => {
  test("should run handlesubmit function when button clicked.", () => {
    // ARRANGE
    expect.assertions(1);
    let one = jest.spyOn(fnMovieApp, "handleSubmit").mockImplementation(() =>
    new Promise((resolve) => {
      resolve();
    })
    );
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form>`;
    fnMovieApp.init();
    
    //ACT
    document.getElementById("search")?.click();
    
    //ASSERT
    expect(one).toHaveBeenCalled();
    document.body.innerHTML = "";
  });
});

describe ("handleSubmit - if/else", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should run the createhtml-function", async () => {
    //ARRANGE
    expect.assertions(1);
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" value="Harry" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>`;
    let one = jest.spyOn(fnMovieApp, "createHtml").mockReturnValue();
    
    //ACT
    await fnMovieApp.handleSubmit();
    
    //ASSERT
    expect(one).toHaveBeenCalled();
    document.body.innerHTML = "";
  });


  test("Should display a message", () => {
    //ARRANGE
    let container: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    
    //ACT
    fnMovieApp.displayNoResult(container);
    
    //ASSERT
    expect(container.innerHTML).toBe(`<p>Inga sökresultat att visa</p>`);
  });

});

test("should createhtml", async () => {
  //ARRANGE
  document.body.innerHTML = `<div id="movie-container"></div>`; 
  let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;
  let searchText: string = "Harry";
  let movies = await movieServiceFunctions.getData(searchText);
  
  //ACT
  await fnMovieApp.createHtml(movies, container);
  
  // ASSERT
  expect(document.querySelectorAll("div.movie").length).toBe(4);
});

