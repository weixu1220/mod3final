# mod3final : Starbucks Clone
https://starbucks-clone-frontend.onrender.com/

This is a project to demonstrate some skills for MERN stack.
1. A functioning full-stack, single-page application for (Express) and a CDN service for (React).
2. Incorporate the technologies of the MERN-stack:
    * MongoDB/Mongoose
    * Express
    * React
    * Node
3. Have a well-styled interactive front-end that communicates with the Express backend via AJAX.
4. Implement token-based authentication - "...a user can sign-up, log in & log out".
5. Implement authorization by restricting functionality to authenticated users.
6. Navigation should respond to the login status of the user.
7. One User data entity minimum, which will be used for Auth; other data entities can be added and related if desired but are not required.
8. Have a comprehensive feature-set.
    1. Full CRUD distributed across all Data Entities

        Or
    2. One of the following features instead:
        * (Easy) - Consume a third-party API and display API data in components.
        * (Moderate) - Include an admin interface w/features.
        * (Hard) - Utilize multi-user, real-time communications (difficult and time consuming)


## Description



## Getting Started

### Dependencies

* express, node, bcrypt, cors, dotenv, jsonwebtoken, mongoose...
* react, react-router-dom,react-google-maps/api, axios, dotenv, react-cool-onclickoutside, use-places-autocomplete...

### Installing

* Download the zip file and extract the folders

### Executing program
* in the starbucks folder
    ```
    cd backend 
    ```

* add a .env file and add your MONGO_URL, PORT1, JWT_SECRET, and SALT_ROUNDS

    ```
    npm i
    node server
    ```
* start add new terminal
    ```
    cd frontend
    ```
* add a .env file and add your VITE_GOOGLE_MAPS_API_KEY, VITE_API for the backend url
    ```
    npm i
    npm run dev
    ```
## Wireframe
Design wise I wanted this clone site to be as close to the starbucks website as I possibly can. Since I have no idea what starbucks admin page would look I followed the same design of the user pages.

### Pages 
![User/admin sign in page](https://github.com/weixu1220/mod3final/blob/main/frontend/src/images/signin.png)

![User/admin register page](https://github.com/weixu1220/mod3final/blob/main/frontend/src/images/create.png)

![home page](https://github.com/weixu1220/mod3final/blob/main/frontend/src/images/home.png)

![map page](https://github.com/weixu1220/mod3final/blob/main/frontend/src/images/map.png)

## ERD


## Author

Vivian Rice


## Resources

Inspiration, code snippets, etc.
* [Starbucks](https://www.starbucks.com/)
* [Use Places Autocomplete](https://www.npmjs.com/package/use-places-autocomplete)
* [Tailwind CSS](https://tailwindcss.com/docs/installation)
* [Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
* [Geocoding API](https://developers.google.com/maps/documentation/geocoding)
* [Getting Lat/Lng](https://developers.google.com/maps/documentation/javascript/examples/event-click-latlng)
* [How to load Maps in React](https://youtu.be/9e-5QHpadi0?si=4s5qDJdzbLhuk4eU)