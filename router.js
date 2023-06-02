import Express from "express";
import { query } from './controller.js'

const router = Express.Router()

router.get('/', (req, res) => {
    res.status(200).send('Running...')
})

router.post('/query', query)

export default router