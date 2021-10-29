import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useMirage } from '../mirage'

function MyApp({ Component, pageProps }: AppProps) {
  useMirage()
  return <Component {...pageProps} />
}
export default MyApp
