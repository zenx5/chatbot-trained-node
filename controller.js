import { Configuration, OpenAIApi } from 'openai'
import { config as envConfig } from 'dotenv'

envConfig()

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi( config )

export const query = async (req, res) => {
    const { text, context } = req.body
    try{
        const { data } = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                ...context,
                { role:'user', content: text }
            ],
            temperature: 0.2,
        })
        res.status(200).send(data)
    }catch( error ){
        res.status(500).send(error)
    }
}