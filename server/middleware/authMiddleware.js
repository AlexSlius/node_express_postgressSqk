const jwt = require('jsonwebtoken');

const { admins, adminToken } = require('../db/models');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS')
        next()

    try {
        let token = req.headers.authorization

        if (!token) {
            return res.status(403).json({
                error: true,
                message: 'The user is not authorized'
            })
        }

        let tokenItSelf = token.split(' ')[1];
        let userDataFromToken = jwt.verify(tokenItSelf, process.env.JWT_SECRET_OR_KEY);

        if (userDataFromToken?.email) {
            admins.findOne(
                {
                    where: { email: userDataFromToken.email },
                    include: [
                        { association: 'roles' },
                        {
                            association: 'tokenAdmins',
                        }
                    ]
                }
            ).then(data => {
                const { tokenAdmins, roles } = data.toJSON()
                const tokenAdminToken = tokenAdmins.find(el => el.token === tokenItSelf);

                if (!!tokenAdminToken) {
                    let tokenLive = new Date(tokenAdminToken.timeOfLife).getTime() > new Date().getTime();

                    if (!!tokenLive) {
                        next();
                    }

                    if (!tokenLive) {
                        adminToken.destroy({
                            where: {
                                id: tokenAdminToken.id
                            }
                        })

                        return res.status(403).json({
                            error: true,
                            message: 'The user is not authorized'
                        })
                    }
                }

                if (!tokenAdminToken) {
                    return res.status(403).json({
                        error: true,
                        message: 'The user is not authorized'
                    })
                }
            })
        }

    } catch (error) {
        return res.status(403).json({
            error: true,
            message: 'The user is not authorized'
        })
    }
}