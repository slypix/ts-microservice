# Timestamp Microservice
The timestamp microservice takes a GET request with a natural language date or unix timestamp, and returns a JSON object containing both the unix timestamp and natural language equivalent. **try it here:** [https://slpx-timestamp.herokuapp.com/](https://slpx-timestamp.herokuapp.com/)

### API
* **Endpoint:** `https://slpx-timestamp.heroku.com/:time`
* **Method:** `GET`
* **Params:** either a natural language date, or a unix timestamp  

### Usage
**GET request:** `https://slpx-timestamp.heroku.com/{natural-language-date || unix-timestamp}`

### Examples
simply add a date or unix timestamp to the URL

```bash
# Note: '%20' is the equivalent of a space, you can use spaces with API
# the browser will automatically convert those spaces to '%20'    
  https://slpx-timestamp.heroku.com/july%201%202016
  https://slpx-timestamp.heroku.com/1467331200

# the above will return
  {"unix":1467331200,"natural":"July 1, 2016"}
```
  
