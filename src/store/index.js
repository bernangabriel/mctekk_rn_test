import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from '../reducers'

const configureStore = () => {
    return createStore(reducers, applyMiddleware(thunk, logger))
}

export default configureStore