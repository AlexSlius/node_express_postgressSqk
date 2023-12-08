export const getMain = (req, res) => {
    res.send('Hello World!12435')
}

export const getTest = (req, res) => {
    res
        .status(200)
        .json(process.env)
}