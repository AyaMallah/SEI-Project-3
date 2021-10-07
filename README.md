# SEI Project 3: Tails & Whiskers

##  SEI Project 3: Tails & Whiskers

## Overview
For my third project at the General Assembly bootcamp, I built a Full-Stack MERN App using an Express API to serve data from a Mongo database, and React to display the client side. As a group, we built a cat and dog e-commerce website inspired by the Butternut Box site. Customers are able to browse the products and would need to be authenticated in order to purchase anything.

<div align="center">
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643158/Screenshot_2021-09-30_at_16.38.15_tyymaz.png" width="750px" height="500px"/>
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643182/Screenshot_2021-09-30_at_16.39.09_jsmsiy.png" width="750px" height="500px"/>
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643217/Screenshot_2021-09-30_at_16.39.39_ec5yya.png" width="750px" height="500px"/>
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643216/Screenshot_2021-09-30_at_16.40.43_olx76a.png" width="750px" height="500px"/>
 </div>

## Brief
* **Build a full-stack application** by making your own backend and your own frontend.
* **Use an Express API** to serve your data from a Mongo database.
* **Consume your API with a separate frontend** built with React.
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models.
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut.
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers.
* **Be deployed online** so it’s publicly accessible.

## Deployment
<a href="https://tails-n-whiskers.herokuapp.com/">Tails & Whiskers</a>
 
## Timeframe
1 week

## Technologies
**Planning:**
* Figma
* Trello
* Miro

**Frontend:**
* React.js
* JavaScript
* SASS
* CSS
* HTML
* Bootstrap
* Axios

**Backend:**
* Node.js
* MongoDB
* Mongoose
* Express
* React Router DOM
* JSONWebToken
* Insomnia
* Git (branching) & GitHub

## Installation
* Clone repo or download zip.
* In Terminal run to connect the `databasemongod —dbpath ~/data/db`.
* Install dependencies in the root of the project `yarn`.
* Still in root, seed database with `yarn seed`.
* Split Terminal window and move into client folder with `cd client`.
* Install all frontend dependencies by running `yarn`.
* In the ROOT start the server with `yarn serve`.
* In the CLIENT start the frontend with `yarn start`.
*  Head to localhost:4000 to view the site.
* To test authenticated user you may register with a test user or use aaim@email.com and password pass.

## Plan
We started by brainstorming ideas for an app that would be built using express, node and React. We each put our ideas forward and agreed on creating an e-commerce app. I suggested doing Cat & Dog products in memory of my cat that passed away that week. We all voted and came to an agreement of what we wanted. We used the Trello Board to plan and keep on track of our work daily and help daily stand ups.
We used Miro to plan our user journey with a flowchart and structured our various models for our back-end. Using Figma we sketched the wireframe of our project and tried out some colour pallets.

<div align="center">
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643508/Screenshot_2021-09-29_at_17.38.56_akaf8l.png" width="700px" />
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643437/Screenshot_2021-09-29_at_17.37.07_gfxqzw.png" width="700px"/>
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643431/Screenshot_2021-09-29_at_17.36.31_xavssb.png" width="700px" />
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643511/Screenshot_2021-09-29_at_17.39.20_tvj2gu.png" width="700px" />
 </div>

## Approach

Back-end:
We started the project by building the backend all together before we split up and moved to the front-end. We worked together by taking turns to code the models, controllers and routes. We were also trouble-shooting on the way, which made things easier. This was beneficial to us all as it allowed us to gain a solid understanding of the backend.

Front-End:
After completing the back-end, we started on the front-end by creating our React app, and connected our back-end to it with the command ****npx create_react_app client —template cra-template-ga-ldn-projects****.  We decided to split up and work on different features, the features I worked on are as follows:
* Navbar/Footer

<div>
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643824/Screenshot_2021-09-30_at_16.47.23_u7qizu.png" width="450px"/>
</div>

* Homepage
* About Page
* Overview Page
* Cat Products Page

<div>
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643819/Screenshot_2021-09-30_at_16.46.50_xbwwfg.png" width="550px"/>
</div>

* Basket modal

<div>
 <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1633643830/Screenshot_2021-09-30_at_16.51.21_matc9e.png" width="550px"/>
</div>


## Wins 
* Working as a team had a lot of wins such as pair/group-coding was very beneficial as we learnt a lot from each other. 
* Organisation was key, we had daily stand ups allowing us to discuss what features we would be focusing on during the day and catch up on anything we needed. 
* Exceptional planning, we planned everything for the project really well, this helped us a lot for when we actually started the coding ensuring we had less problems.
* Creating the basket was a struggle in the beginning but we were happy with the final result and glad that we all tackled the hardest feature together.

## Challenges
* This was my first time working as a group of 4 on one single code base. We had to learn how to use Git when we began working on our own individual branches for the front-end. This was difficult in the beginning as we were worried we would lose or overwrite code. To prevent this we would meet up and take turns to push our changes and pull our most up to date code. 
* The shopping basket logic took us some time to figure out, but we were all there to support each other and try out different ways in order to get it working. It is yet to be fully functioning, but we are happy with our final result.

## Bugs
* You are able to check out the basket even if you have no payment details.

## Future Improvements
* Adding the comment/review section underneath each product.
* Add a map feature: Something that was on our original plan, we wanted users to be able to see store locations.
