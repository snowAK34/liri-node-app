# liri-node-app

## Description

This is a back-end only application that uses node to take arguments from the command line and outputs information based on the command and search given.  Included commands are listed below under usage.

## Setup

This app utilizes the following npm packages:
  * Axios (https://www.npmjs.com/package/axios)
  * Dotenv (https://www.npmjs.com/package/dotenv)
  * Moment (https://www.npmjs.com/package/moment)
  * Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)

Additional APIs are used as well:
  * Bands in Town (https://manager.bandsintown.com/support/bandsintown-api)
  * OMDB (http://www.omdbapi.com/)

Using this app will require installing all npm packages, obtaining keys for the appropriate APIs, and setting up a .env file.

## Usage

The following commands are used to run liri-node-app:
  * concert-this
  * spotify-this-song
  * movie-this
  * do-what-it-says
  
 When running the file at the command line, add the action and a search to retrieve data.  Each action is described below"
 
 ### Concert-this
 
 Output concert tour data based on artist name.  Enter `node liri.js concert-this <artist>`
 Returns venue names, cities, and dates of events.
  
  Example:
  ![image](https://user-images.githubusercontent.com/15148861/55129983-63da8700-50d6-11e9-804f-84014eb0c6b7.png)
  
 ### Spotify-this-song
 
 Outputs song information based on search by song name.  Enter `node liri.js spotify-this-song <song name>`
 For each search item, it will return artist name, song name, spotify link, and album name.
 A search with no song will default to "The Sign".
 
  Example:
  ![image](https://user-images.githubusercontent.com/15148861/55129999-7eacfb80-50d6-11e9-84ad-150fa74af921.png)
  
 ### Movie-this
 
 Outputs movie information based on movie title.  Enter `node liri.js movie-this <movie-title>`
 Returns title, release year, IMDB and Rotten Tomatoes ratings, country, language, plot, and actors.
 A search with no title will default to "Mr. Nobody".
 
  Example:
  ![image](https://user-images.githubusercontent.com/15148861/55130192-2b877880-50d7-11e9-93fd-ace5234831ee.png)
  
 ### Do-what-it-says
 
 This command will take the text in the "random.txt" file and run it through the app search.
 
  Example:
  ![image](https://user-images.githubusercontent.com/15148861/55130318-a94b8400-50d7-11e9-94da-54ab7c8162df.png)
  
  ![image](https://user-images.githubusercontent.com/15148861/55130213-42c66600-50d7-11e9-9711-18ea5f3cec88.png)
  
 **Logging**
 
  Each of these commands are logged into the log.txt file.
  
  ![image](https://user-images.githubusercontent.com/15148861/55130485-44445e00-50d8-11e9-9c84-e566819f1baa.png)
  
