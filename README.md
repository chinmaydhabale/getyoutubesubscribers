
# Youtube-Subscribers Backend project

Youtube subscribers backend Api to get the subscribers using specific routes end point made using Node.js , Express.js and Mongoose. By including particular routes end point in the URL, user can access the number of subscribers list, subscribers name or access subscribers by specific IDs


## Libraries used

- Expressjs
- Mongoose
- HTML,CSS,JS for Docs Page


## Run Locally

Clone the project

```bash
  git clone https://github.com/chinmaydhabale/getyoutubesubscribers.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```

## routes

GET /subscribers : Here you get a Response with an array of subscribers(an Object)

GET /subscribers/names : Here you get a Response with an array of subscribers (an Object with only two fields name and subscribedChannel)

GET /subscribers/:id : By giving id you get Response with a subscriber(an object)

## Postman Docs

https://documenter.getpostman.com/view/31265541/2sA2xe6F5X


## Demo

here is deploy website you can try different type routes and get a response

https://getyoutubesubscribers-0i56.onrender.com/

and youtube tutorial

https://www.youtube.com/watch?v=qcr-x762eCw





