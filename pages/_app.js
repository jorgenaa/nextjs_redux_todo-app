import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from '../redux/store/store'

export default function MyApp({ Component, pageProps }) {
  const persistor = persistStore(store);
  return(  
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}


