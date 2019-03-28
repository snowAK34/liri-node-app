require("dotenv").config();
const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
const fs = require("fs");
const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

let command = process.argv[2];
let searchStr = process.argv.slice(3).join(" ");

function concerts(artist) {
    console.log("in search function: ", searchStr);
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
        for (let i = 0; i < response.data.length; i++) {
            let place = response.data[i].venue;
            let time = moment(response.data[i].datetime).format("MM/DD/YYYY");

            console.log(place.name, ", ", place.city, ", ", time);
        }
    }).catch(function(err) {
        console.log(err);
    });
}

function searchSpotify(song) {
    spotify
        .search({ type: 'track', query: song})
        .then(function(response) {
            for (let i = 0; i < response.tracks.items.length; i++) {
        console.log(response.tracks.items[i].album.artists[0].name, ", ", response.tracks.items[i].name, ", ", response.tracks.items[i].href, ", ", response.tracks.items[i].album.name);
            }
    }).catch(function(err) {
        console.log(err);
    });
}

function movie(title) {
    axios.get("https://www.omdbapi.com/?apikey=28906591&t=" + title).then(function(response) {
        console.log("Movie Title: ", response.data.Title, "\nReleased: ", response.data.Year, "\nIMDB Rating: ", response.data.Ratings[0].Value, "\nRotten Tomatoes Rating: ", response.data.Ratings[1].Value, "\nCountry: ", response.data.Country, "\nLanguage: ", response.data.Language, "\nPlot: ", response.data.Plot, "\nActors: ", response.data.Actors);
    }).catch(function(err) {
        console.log(err);
    });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
        }
        let txtArr = data.split(",");
        command = txtArr[0];
        let noQuotes = txtArr[1].split('"').join('');
        searchStr= noQuotes;
        console.log("SEARCH STRING: ", searchStr);
        runSearch(searchStr);
    })
}

function runSearch(searchStr) {
    logCommand();
    if (command === "concert-this") {
        concerts(searchStr);
    }
    else if (command === "spotify-this-song") {
        if (!searchStr) {
            searchStr = "The Sign";
        }
        searchSpotify(searchStr);
    }
    else if (command === "movie-this") {
        if (!searchStr) {
            searchStr = "Mr. Nobody";
        }
        movie(searchStr);
    }
    else if (command === "do-what-it-says") {
        doWhatItSays();
    }
    else {
        console.log("Please enter a valid command.");
    }
}

runSearch(searchStr);

function logCommand() {
    fs.appendFile("log.txt", "\n" + command + ", " + searchStr, function(error) {
        if (error) {
          console.log(error);
        }
        console.log("Action logged.");
    });
}
