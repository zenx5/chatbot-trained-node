import { Configuration, OpenAIApi } from 'openai'
import { config as envConfig } from 'dotenv'

envConfig()

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi( config )

export const queryCompletion = async (text, context = [] ) => {
    try{
        const { data } = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                ...context,
                { role:'user', content: text }
            ],
            temperature: 0.2,
        })
        return { code:200, data }
    }catch( error ){
        return { code:500, data:error }
    }
}