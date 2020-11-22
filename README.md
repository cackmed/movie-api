<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Release](#release)
* [Useful commands](#useful-commands)
* [Contributing](#contributing)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project
Search Page:
![search-page](/assets/screen-shot1.png) 

Detail Page

![detail-page](/assets/screen-shot2.png) 

Short description of the project: This is a a MongoDB back-end and proxy server built in conjunction with a React front-end web-app. This back-end is built using MongoDB and mongoose, and allows for a user to search through the unofficial imbd movie database to find the more details on their chosen movies and leave a symbol of thier satisfation with the movie by upvoting or downvoting it via the existing endpoints with it. 

Link to front-end repo: https://github.com/cackmed/Movie-Api-webapp

<!-- BUILT WITH -->
### Built With
MongoDB
Mongoose
Express
Node

<!-- GETTING STARTED -->
## Getting Started

Make sure to create a .env file and configure it to the specfications within the existing .env-example file

**When testing changes, be SURE to use mongodb://localhost:27017/NAME_OF_DB as your MongoDB connection string in your environment variables**

An example database string exists in the .env-example


<!-- PREREQUISITES -->
### Prerequisites
Install MongoDB community edition: 

* https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials


Install the following packages 
* npm
```sh
npm install npm@latest -g
```

<!-- INSTALLATION -->
### Installation

1. Clone the repo
```sh
git clone https://github.com/cackmed/movie-api.git
```
2. Install NPM packages
```sh
npm install
```


<!-- RELEASE -->
## Release

Dev Server

* npm run start 


<!-- Useful commands -->
## Useful Commands
To run Jest tests:
 To run the tests only one time: npm run test
 To run the test continuously and watch for changes: npm run test:watch


<!-- CONTRIBUTING -->
## Contributing


1. Clone the Project
2. Create your Feature Branch (`git checkout -b feature/feature-name`)
3. Commit your Changes (`git commit -m 'Commit message describing feature'`)
4. Push to the Branch (`git push origin feature/feature-name`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Caleb Pendergraft <cackmed@gmail.com>
