import "./chat.css";
import { MdSend } from "react-icons/md";

function message() {

    let messageBox = document.getElementById("op-message") as HTMLTextAreaElement;
    let message = messageBox.value;
    let liveChat = document.getElementById("live-chat");
    if (liveChat) {

        console.log(message);

        /**
         * Do a fetch to send the message to the backend
         * then update the chat box with the new message
         */

        messageBox.value = "";

    };
}


/**
 *
 * fetch data from the chat db and show @component 'messages'
 */

function Chat() {
    return <>
        <div className="chat">
            <div className="grid">
                <h2>OP CHAT</h2>
                <div id="live-chat">

                </div>
                <textarea name="op-message" id="op-message"></textarea>
                <button id="send" onClick={message}>Invia <MdSend /></button>
            </div>

        </div>

    </>
}
export default Chat

/**
 * Chat will contain:
 * @component message: will represent a single message in the chat
 * button: to send the message
 */
