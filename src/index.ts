import express from "express"

const port = 3000
const app = express()

app.get("/", (req, res) => {
	res.send("hello backend!")
})

app.listen(port, () => {
	console.log("server listening port 3000")
})
