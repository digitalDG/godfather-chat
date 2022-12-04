import SendIcon from '@mui/icons-material/Send';
import { useRef } from 'react';
import './sendMessageInput.css';
import { useAppContext } from '../../Contexts/appContext';

const SendMessageInput = () => {

    const { currentUserData, setCurrentUserData } = useAppContext();
    const inputRef = useRef();

    const sendMessage = (message) => {

        currentUserData.messages.push(message);

        setCurrentUserData({ ...currentUserData });

        inputRef.current.value = ""; // clear message input 
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage(inputRef.current.value);
        }
    };

    return (
        <div className="sendInputContainer">
            <input type="text" ref={inputRef} style={{ flexGrow: 2 }} onKeyPress={handleKeyPress} />

            <SendIcon className="imageContainer" onClick={() => sendMessage(inputRef.current.value)} />
        </div>


    )
}

export default SendMessageInput;