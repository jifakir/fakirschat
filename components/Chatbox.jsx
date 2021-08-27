import * as React from 'react';
import { SocketContext } from '../context/SocketContext';


const Chatbox = () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [senderName, setSenderName] = React.useState('');

    const [msg, setMsg] = React.useState('');
    const {sendMessage, message} = React.useContext(SocketContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(senderName && msg) {
        sendMessage({name: senderName, msg: msg});
        setMsg('');
        return;
        }
        setSenderName(name);
    };
    const handleChatBox = () => {
        setOpen(!open);
    };
    console.log(message);
    return (
        <div className={`fixed transition duration-500 ease-in-out z-50 top-0 right-0 bg-white bg-opacity-50 w-72 transform ${open ? 'translate-x-0' : 'translate-x-72'}`}>
            <div onClick={handleChatBox} className="absolute py-2 text-3xl top-0 right-full cursor-pointer">
                {
                    !open ?
                    (
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm7.194 2.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 01-.612.01.405.405 0 01-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 01-.613.01.405.405 0 01-.011-.59c.42-.416.672-.831.81-1.22z" clip-rule="evenodd"></path></svg>
                    ):
                    (
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V7h16 l0.001,12H4z"></path><path d="M15.707 10.707L14.293 9.293 12 11.586 9.707 9.293 8.293 10.707 10.586 13 8.293 15.293 9.707 16.707 12 14.414 14.293 16.707 15.707 15.293 13.414 13z"></path></svg>  
                    )
                }
            </div>
            <div className="relative w-full min-h-screen p-2">
                <div className="w-full h-11/12">
                    <h1 className="text-md font-semibold bg-white rounded py-2 bg-opacity-50 text-center uppercase"> Chat Box</h1>
                    <ul className="w-full text-xs font-medium">
                        {
                            message && message.map((m, idx) => <li key={idx} className="bg-white px-2 rounded bg-opacity-25 my-2 py-1"><span className="pr-2">{m.name}:</span>{m.msg}</li>)
                        }
                    </ul>
                </div>
                <form onSubmit={onSubmitHandler} className="absolute bottom-5 w-full h-1/12">
                    {!senderName ? 
                    (
                    <div className="w-full flex rounded overflow-hidden">
                        <input value={name} placeholder="Type your name?" onChange={(e) => setName(e.target.value)} type="text" name="" id="" className="w-full text-md text-gray-900 font-medium focus:outline-none px-2 bg-white bg-opacity-50" />
                        <input type="submit"  value="Set" className="w-24 bottom-0 h-8 px-5 focus:outline-none text-gray-900 bg-white bg-opacity-25 uppercase font-medium" />
                    </div>
                    ):
                    (<div className="w-full flex rounded overflow-hidden">
                        <input value={msg} placeholder="Write something...." onChange={(e) => setMsg(e.target.value)} type="text" name="" id="" className="w-full text-md text-gray-900 font-medium focus:outline-none px-2 bg-white bg-opacity-50" />
                        <input type="submit" value="Send" className="w-24 bottom-0 h-8 px-5 focus:outline-none text-gray-900 bg-white bg-opacity-25 uppercase font-medium" />
                    </div>)}
                </form>
            </div>
        </div>
    )
}

export default Chatbox;