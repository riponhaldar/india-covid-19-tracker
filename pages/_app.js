import '../styles/globals.css';
// import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <div className='container mx-auto px-4'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
