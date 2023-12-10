const getMain = (req, res) => {
    res.send('Hello World!12435')
}

const getTest = (req, res) => {
    res
        .status(200)
        .json(process.env)
}


module.exports = {
    getMain,
    getTest
}