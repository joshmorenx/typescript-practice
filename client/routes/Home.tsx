import { useEffect } from 'react';
import useGreeting from '../hooks/useGreeting';

const Home:React.FC = () => {
    const {message, sendRequest} = useGreeting();

    function showGreeting(){
        sendRequest();
    }

    useEffect(()=>{
        showGreeting();
    },[])

    return(
        <>
            <h1>{message}!</h1>
        </>
    )
}

export default Home