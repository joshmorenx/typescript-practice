import axios from 'axios'
import { useState } from 'react'

interface GreetingParams {
    token: string
}

interface GreetingProps {
    token: string
    msg: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    sendGreetingRequest: () => void
}

interface GreetingResponse {
    returningMsg: string
}

const useInputGreeting = ({ token }: GreetingParams): GreetingProps => {
    const [msg, setMsg] = useState<string>('')
    const [messageInp, setMessageInp] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageInp(event.target.value)
    }

    const sendGreetingRequest = async () => {
        try {
            const response = await axios.post<GreetingResponse>('http://localhost:8080/',{
                message:messageInp
            })
            if(response){
                setMsg(response.data.returningMsg)
            }
        } catch (error) {
            // log
        }
    }
    return { msg, handleChange, sendGreetingRequest, token }
}

export default useInputGreeting;

