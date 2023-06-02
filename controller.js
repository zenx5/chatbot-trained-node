import { queryCompletion } from "./service"

export const query = async (req, res) => {
    const { text, context } = req.body
    const { code, data } = await queryCompletion(text, context)
    res.status(code).send(data)
}