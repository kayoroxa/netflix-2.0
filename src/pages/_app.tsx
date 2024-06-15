import type { AppProps } from 'next/app'
// import '../styles/debug.css'
import '../styles/global.css'

// import { StoreProvider, createStore } from 'easy-peasy'
// import model from '../../store/models'

// const store = createStore(model)

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const contextProps = {}

  return <Component {...pageProps} {...contextProps} />
}
