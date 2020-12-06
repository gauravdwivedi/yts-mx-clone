import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import configureStore from './store'
import {Provider} from 'react-redux'

const store = configureStore()

console.log('Store state',store.getState())
ReactDom.render(
<Provider store={store}>
    <App/> </Provider>,document.getElementById('root')


)







