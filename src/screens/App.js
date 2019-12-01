import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import createStore from '../store'
import AppNavigation from '../navigation'

const store = createStore()

export default class extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        )
    }
}