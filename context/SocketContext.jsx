import * as React from 'react';
import {io} from 'socket.io-client';

// const Peer = dynamic(() => import('peerjs'), {
//     ssr: false
//   });

export const SocketContext = React.createContext();

    const socket = io('https://fakirs-chat.herokuapp.com');
export const SocketProvider = ({children}) => {
    const [mypeer, setMypeer] = React.useState(null);
    const [stream, setStream] = React.useState(null);
    const [name, setName] = React.useState('');
    const [remote, setRemote] = React.useState(null);
    const [message, setMessage] = React.useState([]);

    const myVideo = React.useRef();
    const userVideo = React.useRef();


    React.useEffect( async () => {

       try{
           const currentStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
            setStream(currentStream);
            myVideo.current.srcObject = currentStream;
        }catch(err){
           console.log(err);
        }

    },[]);
    

    
    // *** Importing Peerjs on client side 
    React.useEffect(() => {
    import('peerjs').then(({ default: Peer }) => {
        const peer = new Peer();
        setMypeer(peer);
    });
    
    }, [])

    React.useEffect(() => {
        socket.on('chat message', ({name, msg}) => {
            setMessage([...message, {name, msg}]);   
        });
    }, [message]);

    const sendMessage = (val) => {
        socket.emit('chat message', val);
    };
   

    // Setting up peerjs actions


    React.useEffect(() => {
        if(mypeer && stream){
            mypeer.on('open', (id) => {
                socket.emit('new-user', id);
            });
            mypeer.on('call', (call) => {
                call.answer(stream);
                setRemote(true);
                call.on('stream', (userStream) => {
                    userVideo.current.srcObject = userStream;
                });
                call.on('close', () => {
                    userVideo.current.remove();
                    setRemote(false);
                });
            })
            socket.on('new-user-connected', (id) => {
                let call = mypeer.call(id, stream);
                call.on('stream', (userStream) => {
                    userVideo.current.srcObject = userStream;
                });
                call.on('close', () => {
                    userVideo.current.remove();
                })
            });
        }
    },[mypeer, stream]);

    return (
        <SocketContext.Provider value={{remote, message, sendMessage, myVideo, userVideo, stream, name, setName}}>
            {children}
        </SocketContext.Provider>
    )
};