const express = require("express")
const request = require("postman-request")
const app = express()
const cors = require("cors")
app.use(cors())
const port = process.env.PORT || 5000
app.get("/", (req, res) => {
  res.send("Server Running")
})

app.get("/activities", async (req, res) => {
  request(
    "http://tfams429.dev.triomics.in/api/activities",
    { json: true },
    (error, response, body) => {
      res.send(body.items)
    }
  )
})
app.get("/events", async (req, res) => {
  request(
    "http://tfams429.dev.triomics.in/api/events",
    { json: true },
    (error, response, body) => {
      res.send(body.items)
    }
  )
})

app.listen(port, () => {
  console.log("Server running on port 5000")
})
