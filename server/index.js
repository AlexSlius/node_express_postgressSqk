import app from './app.js'

const port = process.env.APP_PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})