
let movieState = []

const joinMovie = event => {
    event.preventDefault()
    const movieName = document.querySelector('#movieName').value
    const movieYear = document.querySelector('#movieYear').value

    movieState.push({ movie: movieName, year: movieYear })

    console.log(movieState)
}