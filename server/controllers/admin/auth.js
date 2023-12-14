const { admins, adminToken } = require('../../db/models')
const hasPass = require('../../helpers/hasPassword')
const { jstSing } = require('../../helpers/jwt')

const login = (req, res) => {
    const { email, password: passwordAdmin } = req.body;

    if (!email) {
        return res.status(200).json({
            error: true,
            message: 'the email field is empty',
        })
    }

    if (!passwordAdmin) {
        return res.status(200).json({
            error: true,
            message: 'the password field is empty',
        })
    }

    admins.findOne({
        where: {
            email
        },
        include: [
            {
                association: 'roles',
            },
        ]
    }).then((data) => {
        const { password, ...objData } = data.toJSON()

        hasPass.hasCompare(passwordAdmin, password).then(async (status) => {
            if (!!status) {
                try {
                    let { dataNow, token } = jstSing({ id: objData.id, email: objData.email })

                    let specimen = await adminToken.create({
                        adminId: objData.id,
                        token,
                        timeOfLife: dataNow
                    })

                    await specimen.save().then(() => {
                        res
                            .status(200)
                            .json({
                                admins: objData,
                                token
                            })
                    })
                } catch (error) {
                    res
                        .status(403)
                        .json({
                            message: 'Authorization error',
                            error: true
                        })
                }
            }

            if (!status)
                res
                    .status(200)
                    .json({
                        message: 'Invalid password',
                        error: true
                    })
        })
    })
}

const session = (req, res) => {
    res.status(200).json({ isAuth: true })
}

const logout = (req, res) => {
    try {
        adminToken.destroy({
            where: {
                token: req.token
            }
        }).then(() => {
            res
                .status(200)
                .json({
                    status: true,
                    message: 'Logout'
                })
        })
    } catch (error) {
        res
            .status(500)
            .json({
                error: true,
                message: 'Server error'
            })
    }
}

module.exports = {
    login,
    session,
    logout
}