import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from '../store'
import AppNavigation from '../navigation'

const store = createStore()

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        )
    }
}