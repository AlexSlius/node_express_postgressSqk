const { admins } = require('../db/models')
const hasPass = require('../helpers/hasPassword')
const { jstSing } = require('../helpers/jwt')

const getMain = (req, res) => {
    admins.findOne(
        {
            where: { id: 2 },
            include: [
                {
                    association: 'roles'
                }
            ]
        }
    ).then(data => {
        res
            .status(200)
            .json({
                data: data,
                error: true
            })

        // hasPass.hasCompare('admin', data.password).then((status) => {
        //     console.log('status: ', status);
        //     if (!!status)
        //         res
        //             .status(200)
        //             .json({
        //                 token: jstSing({ id: data.id, email: data.email })
        //             })

        //     if (!status)
        //         res
        //             .status(200)
        //             .json({
        //                 message: 'Invalid password',
        //                 error: true
        //             })
        // })
    });
}

const getTest = (req, res) => {
    res
        .status(200)
        .json("test")
}


module.exports = {
    getMain,
    getTest
}