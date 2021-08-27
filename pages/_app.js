import '.././css/global.css';
import Layout from '../components/Layout';
import {SocketProvider} from '../context/SocketContext';

function MyApp({ Component, pageProps }) {
  return (
    <SocketProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SocketProvider>
  )
}

export default MyApp;
