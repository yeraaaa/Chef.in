import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

export const runtime = 'edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config);

export async function POST(request: Request){
    const{ messages } = await request.json()

    console.log(messages);

    const response = await openai.createChatCompletion({

        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
        {role:"system", content: 'You are a cooking chef, you are advising users in cooking recipes website called Chef.in'},
            ...messages
        ],
        max_tokens: 500,
    })
    const stream = await OpenAIStream(response);

    return new StreamingTextResponse(stream);
}