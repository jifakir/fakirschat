import * as React from 'react';
import { SocketContext } from '../context/SocketContext';


const VideoPlayer = () => {
    const {remote, name, myVideo, userVideo, stream} = React.useContext(SocketContext);
    
    return (
        <div className="w-full flex">
            {
                stream && (
                    <div className="relative w-1/2 shadow-lg rounded-lg bg-gray-200 p-5 md:mr-5 bg-opacity-20 h-72 overflow-hidden">
                        <h1 className="absolute  px-5 py-1 rounded-md bottom-2 left-5 bg-green-300 text-center text-xs font-medium uppercase">{name}</h1>
                        <video playsInline ref={myVideo} autoPlay muted className="bg-gray-900 min-w-full h-full" />
                    </div>
                )
            }

            {
                remote && (
                    <div className="relative w-1/2 shadow-lg rounded-lg bg-gray-200 p-5 md:ml-5 bg-opacity-20 h-72 overflow-hidden">
                        <h1 className="absolute px-5 py-1 rounded-md bottom-2 left-5 bg-green-300 text-center text-xs font-medium uppercase">{name}</h1>
                        <video ref={userVideo} autoPlay className="bg-gray-900 min-w-full h-full"></video>
                    </div>
                )
            }
            
        </div>
    )
}

export default VideoPlayer;