const Film = require('../models/film.js');

const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmsTitles = function(filmArray) {
  
  const result = filmArray.map((film) => {
    return film.title    
    
    })
    return result
    
}

Cinema.prototype.filmByTitle = function(filmTitle) {
  const result = this.films.find((film) => {
  return film.title === filmTitle
  })
  return result
}

Cinema.prototype.filmByGenre = function(filmGenre) {
  const result = this.films.filter((film) => {
  return film.genre === filmGenre
  })
  return result
}

Cinema.prototype.filmInYear = function(filmYear) {
  const result = this.films.some((film) => {
  return film.year === filmYear
  })
  return result
}

// Cinema.prototype.filmInYear = function(filmYear) {
//   const result = this.films.some((film) => {
//   return film.year === filmYear
//   })
//   return result
// }


module.exports = Cinema;




