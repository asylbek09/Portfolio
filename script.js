document.querySelector("#btnMov").addEventListener("click", findMovies);

document.querySelector("#tbnGif").addEventListener("click", findGiphy);

let input = document.getElementById("inputText").value;

function findMovies() {
    let url = new URL("http://www.omdbapi.com/?apikey=5ecf8ce8");
    url.searchParams.append("s", input)

    fetch(url)
        .then(function (promise) {
            return promise.json();
        })
        .then(function (data) {
            console.log(data);
            displayData(data.Search);
    });
}

function findGiphy() {
   
}

function displayData(data) {

    const resultsDiv = document.querySelector("#results");

    for (let i = 0; i < data.length; i++) {
        const movieName = document.createElement("p");
        movieName.innerHTML = `Title: ${data[i].Title}`;
        resultsDiv.append(movieName);

        const movieYear = document.createElement("p");
        movieYear.innerHTML = `Year: ${data[i].Year}`;
        resultsDiv.append(movieYear);

        const moviePoster = document.createElement("img");
        moviePoster.src = data[i].Poster;
        resultsDiv.appendChild(moviePoster);
    };
}
