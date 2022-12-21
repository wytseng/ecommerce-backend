# E-commerce Back End

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description 

This application provides a framework for the ability to access database information using sequelize. In this application, you may freely add to, update, create, or remove from database tables. 

## Table of Contents 

* [Installation](#installation) 

* [Usage](#Usage) 

* [License](#license) 

* [Contribution](#contribution) 

* [Questions](#questions) 

## Installation 

First clone the code from github repository to your local machine. Then run ```npm i``` to install all the packages needed to run the application.

Next, you will have to connect to your database, create the tables and seed your db. 
1. To create the db tables, log in to mysql through mysql shell and run ```source db/schema``` to create the tables.
2. Connect to database through sequelize. You can do so by simply creating a '.env' file with key-value pairs containing your mysql information like below. 
    ```
    JAWSDB_URL = 'mysql:<user>:<password>@127.0.0.1/ecommerce_db'
    DB_NAME = 'ecommerce_db'
    DB_USER = <user>
    DB_PASSWORD = <password>
    ```
3. Seed your databse by running ```npm run seed```

Then you should end up with a seeded database that is ready for connection.

## Usage 

Though this application is not yet ready for public usage, you can test out its functionaility through Insomna. 

Here is a video demonstration of the webpage functionalities: https://drive.google.com/file/d/18eadnG65JeIRnUzXRkQ9-YamO1U_k6AC/view?usp=sharing.

As you can see from the demonstration video, you can use get, put, post, and delete methods on each of the db tables, and changes should be reflected when you return to the '/' route for each api route. 

Note that once a category is deleted, all products under that category will be removed as well. 

## License 

GNU General Public License v3.0

## Contribution

If you would like to contribute to this application, please reach out to the owner via email first. You can find the owner's email listed under the 'Questions' section below.  

## Questions 
If you have any questions about the repo, open an issue or contact me directly at stephanietseng113@gmail.com. 
You can find more of my work at [wytseng](https://github.com/wytseng).