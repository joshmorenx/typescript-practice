import axios from 'axios'
import { useState } from 'react'

interface GreetingProps {
    message: string,
    sendRequest: () => Promise<void>
}

interface GreetingResponse {
    message: string
}

const useGreeting = (): GreetingProps => {
    const [message, setMessage] = useState<string>('')

    const sendRequest = async () => {
        try { 
            const response = await axios.get<GreetingResponse>('http://localhost:8080/')
            setMessage(response.data.message)
        } catch (error) {
            console.error(error)
        }
    }
    return { message, sendRequest }
}

export default useGreeting