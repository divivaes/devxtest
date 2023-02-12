# Simple WebSocket API

A simple WebSocket API implementation to track users progress.

# Table Creation In DB

1. Create a new DB in MySQL
2. Copy and paste content of file (`./config/schema.sql`) in the MySQL Editor 

# Get Started

1. `$ git clone https://github.com/divivaes/devxtest`
2. `$ npm install`
3. `cp .env.example .env` and populate environment file with your config data
4. Launch Enviornment:
    * `$ npm start or npm run dev`
5. WS link:
    * open `http://localhost:2000`



# WebSocket API using Postman WebSocket Request

1. Click `New` button in Postman and select `WebSocket Request` and choose `Socket.IO` in dropdown menu on top URL bar
2. Type `http://localhost:2000` and click `Connect`
     * You shall see the message `User entered to code editor => ...` in the console of your node app
3. Event `saveProgress` is to save initial user solution in DB
     * You shall see success message in console of your node app
4. Event `updateProgress` is to update given user solution in DB
     * You shall see success message in console of your node app

Example object for saving the progress (body as JSON object)

```
{
    "username":"test",
    "solution":"print(hello world)"
}
```

Example object for updating the progress (body as JSON object)

```
{
   "id": 1 (e.g., any id of existing record)
   "solution": "print(hello world2)",
   "attempts": 2 (e.g., auto increment attempts of given user)
}

```
      




