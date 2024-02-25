const { app } = require("./app")
const { connectDb } = require("./config/db")

app.listen(3000, () => {
    connectDb()
        .then(() => {
            console.log("Server is running on port 3000")
        })
        .catch(() => {
            process.exit(1)
        })
})
