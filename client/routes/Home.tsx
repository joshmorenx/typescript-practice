import useGreeting from '../hooks/useGreeting';
import useInputGreeting from '../hooks/useInputGreeting';

const Home:React.FC = () => {
    const token:string = 'asdfg';
    const {message, sendRequest} = useGreeting();
    const {handleChange, sendGreetingRequest, msg} = useInputGreeting({ token });
    
    const showGreeting = async () => {
        await sendRequest();
    }
    
    // useEffect(()=>{
    showGreeting();
    // },[])

    return(
        <>  
            <div><input onChange={(event)=>handleChange(event)} type="text" placeholder='type something' name="" id="" /><button onClick={sendGreetingRequest} type="button">Send</button></div>
            <h1>{message}!</h1>
            <h1>{msg && msg}</h1>
        </>
    )
}

export default Home