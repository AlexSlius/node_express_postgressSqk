const uuid = require('uuid')
const path = require('path')

module.exports = ({ picture }) => {
    if (!picture)
        return { fileName: null }

    const filePicture = picture?.name ? picture : picture[0]
    const fileName = `${uuid.v4()}__${filePicture.name}`

    picture.mv(path.resolve(__dirname, '../..', 'public/picture', fileName))

    return { fileName }
}