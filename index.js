import express  from "express"
const app = express()
const PORT = 3000

/* app.use('/api',) */
app.get('/',(req, res) => {
    res.send("Started Working, Express!")
})

app.listen(PORT,() => {
    console.log(`Server listening at port:${PORT}`);
})