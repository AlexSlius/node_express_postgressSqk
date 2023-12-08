import { Router } from 'express'

import { getTest, getMain } from '../controllers/test'

const routes = new Router()

routes.get('/', getMain)
routes.get('/test', getTest)

export default routes