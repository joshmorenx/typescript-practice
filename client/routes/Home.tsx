import React from 'react'
import {useEffect} from 'react'
import useGreeting from '../hooks/useGreeting';

const Home:React.FC = () => {
    const {message, sendRequest} = useGreeting();

    function showGreeting():void{
        sendRequest();
    }

    useEffect(()=>{
        showGreeting();
    },[])

    return(
        <>  
            <input type="text" />
            <button>Show greeting</button>
            <h1>{message}!</h1>
        </>
    )
}

export default Home