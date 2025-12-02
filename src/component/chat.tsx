import "./chat.css";
import { MdSend } from "react-icons/md";
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
                <button id="send">Invia <MdSend /></button>
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
