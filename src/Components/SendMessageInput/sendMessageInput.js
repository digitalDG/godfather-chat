import SendIcon from '@mui/icons-material/Send';
import { useRef } from 'react';
import './sendMessageInput.css';

const SendMessageInput = ({ setUserMessage }) => {

    const inputRef = useRef();

    const sendMessage = (message) => {
        setUserMessage(message);
        inputRef.current.value = ""; // clear message input 
    };

    return (
        <div className="sendInputContainer">
            <input type="text" ref={inputRef} style={{flexGrow: 2}}/>

            <SendIcon className="imageContainer" onClick={() => sendMessage(inputRef.current.value)} />
        </div>


    )
}

export default SendMessageInput;