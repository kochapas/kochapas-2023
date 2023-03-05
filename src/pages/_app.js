import { Navbar } from '@/components'
import '@/styles/globals.css'

const MyProviders = ({ children }) => {
  return (
    <>
      <Navbar>
        {children}
      </Navbar>
    </>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyProviders>
        <Component {...pageProps} />
      </MyProviders>
    </>
  );
}
