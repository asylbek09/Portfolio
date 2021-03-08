document.querySelector("#btnMov").addEventListener("click", findMovies);

document.querySelector("#btnGif").addEventListener("click", findGiphy);

document.querySelector("#btnRmv").addEventListener("click", removeData);

var input = document.getElementById("inputText").value;

function findMovies() {
    let url = new URL("http://www.omdbapi.com/?apikey=5ecf8ce8");
    url.searchParams.append("s", input);

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
    let url = new URL("http://api.giphy.com/v1/gifs/search?api_key=zrSuvQLz2zVVb905eX5X94azH9HKU7dn&limit=20");
    url.searchParams.append("string", input);

    fetch(url)
        .then(function (promise) {
            return promise.json();
        })
        .then((data) => {
            console.log(data);
        })
}


const resultsDiv = document.querySelector("#results");
    
function displayData(data) {
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

function removeData() {
    resultsDiv.innerHTML = "";
}
