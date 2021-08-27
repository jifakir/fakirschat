import * as React from 'react';


const Layout = ({children}) => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-green-500 to-green-300">
            <div className="w-full h-20 text-gray-700 py-5 bg-gray-200 bg-opacity-30 box-shadow-lg">
                <h1 className="text-lg md:text-3xl text-center font-bold">WebSocket and WebRTC App</h1>
            </div>
            <div className="w-full max-height flex justify-center items-center">
                {children}
            </div>
            <style jsx>{`
            .max-height {
                height: calc(100vh - 80px);
            }
            `}</style>
        </div>
    )
}

export default Layout;