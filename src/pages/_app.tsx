import { AppProps } from 'next/app';

import { Providers } from '../components/Providers';
import '../styles/main.css';
import '../styles/app.css';

const Applications = ({ Component, pageProps }: AppProps) => {
  // @ts-ignore
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
};

export default Applications;
