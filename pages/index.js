import Head from 'next/head';
import Chatbox from '../components/Chatbox';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Chatbox />
      <Head>
        <title>Next Chat App</title>
      </Head>
      <div className="w-4/5 mx-auto min-h-1/2 box-shadow-lg rounded-xl p-10 bg-white bg-opacity-20  text-white">
        <VideoPlayer />
      </div>
    </div>
  )
}
