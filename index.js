import Express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import router from './router.js'

dotenv.config()

const app = Express()

app.use(bodyParser.json())
app.use(cors())
app.use('/api',router)

app.listen(5000)