fetch('https://ghibliapi.herokuapp.com/films')
.then(response => {
    return response.json()
})
.then(movies=> {
    const moviesDiv = document.getElementById('movies')

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')
        movieDiv.innerHTML = '<div class="title">' + movie.title + '</div><div class="description">' + movie.description + '</div>'
        moviesDiv.append(movieDiv)
    });
})