import { FETCH_USERS, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, GET_TOKEN, LOGOUT, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, LOADING } from '../constants/actionTypes'
import ApiCaller from '../services/ApiCaller'
import SessionManager from '../utils/SessionManager'

//do signin
export const signIn = (username, password) => async (dispatch) => {
    dispatch(loading())
    const _result = await ApiCaller.signInAsync(username, password)
        .catch(ex => {
            dispatch(signInDeny(ex))
        })

    if (_result) {
        await SessionManager.setSessionToken(_result)
        dispatch(signInSuccess(_result))
    }
}

export const signInSuccess = (token) => {
    return {
        type: SIGN_IN_SUCCESS,
        token
    }
}

export const signInDeny = (error) => {
    return {
        type: SIGN_IN_FAILURE,
        error
    }
}

//Signup
export const signUp = (firstName, lastName, email, password, verifyPassword, defaultCompany) => async (dispatch) => {
    const _response = await ApiCaller
        .signUpAsync(firstName, lastName, email, password, verifyPassword, defaultCompany)
        .catch(ex => {
            dispatch({ type: SIGN_UP_FAILURE, error: ex })
        })
    if (_response) {
        dispatch({ type: SIGN_UP_SUCCESS, token: _response.token })
    }
}

export const fetchUsers = () => async (dispatch) => {
    const users = await ApiCaller.fetchUsersAsync()
    dispatch({ type: FETCH_USERS, users })
}

export const getToken = () => async (dispatch) => {
    const _token = await SessionManager.getSessionToken()
    dispatch({ type: GET_TOKEN, token: _token ? _token : null })
}

export const loading = () => (dispatch) => {
    dispatch({ type: LOADING, isLoading: true })
}

export const logout = () => async (dispatch) => {
    await SessionManager.setSessionToken('')
    dispatch({ type: LOGOUT })
}