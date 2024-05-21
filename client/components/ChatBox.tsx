import { Box, TextField } from "@mui/material"
import { InputAdornment } from '@mui/material';
import { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';


const ChatBox:React.FC = () => {

    const [msg, setMsg] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(event.target.value);
    }

    return(
        <Box sx={{width:"100%", height:"100%", border:"1px solid black", display: "flex", flexDirection: "column"}}>
            <Box sx={{width:"100%", flexGrow: 1, border:"1px solid black"}}>
                <h1>ChatBox</h1>
                {/* Aquí puedes añadir contenido adicional que necesite ocupar el espacio */}
            </Box>
            <Box sx={{width:"100%", border:"1px solid black"}}>
                <TextField 
                type="text"
                size="small"
                fullWidth
                sx={{height:"100%"}}
                onChange={handleChange}
                placeholder="Type something..."
                InputProps={{
                    endAdornment: (
                        <InputAdornment sx={{ cursor:"pointer" }} onClick={() => console.log(msg)} position="end">
                            <SendIcon />
                        </InputAdornment>
                    ),
                }}                
                />
            </Box>
        </Box>

    )
}

export default ChatBox