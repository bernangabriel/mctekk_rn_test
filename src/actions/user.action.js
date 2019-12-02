import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    GET_TOKEN,
    LOGOUT,
    SIGN_UP_FAILURE,
    SIGN_UP_SUCCESS,
    LOADING,
    FETCH_USER_FAILURE,
    FETCH_USER_SUCCESS
} from '../constants/actionTypes'
import ApiCaller from '../services/ApiCaller'
import SessionManager from '../utils/SessionManager'

/**
 * Sign In user
 * @param {*} username 
 * @param {*} password 
 * @param {*} navigation 
 */
export const signIn = (username, password, navigation) => async (dispatch) => {
    dispatch(loading())
    const _result = await ApiCaller.signInAsync(username, password)
        .catch(ex => {
            dispatch(signInDeny(ex))
        })

    if (_result) {
        await SessionManager.setSessionToken(_result)
        dispatch(signInSuccess(_result))
        navigation.navigate('Main')
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
export const signUp = (firstName, lastName, email, password, verifyPassword, defaultCompany, navigation) => async (dispatch) => {
    dispatch(loading())
    const _result = await ApiCaller
        .signUpAsync(firstName, lastName, email, password, verifyPassword, defaultCompany)
        .catch(ex => {
            dispatch(signUpDeny(ex))
        })
    if (_result) {
        await SessionManager.setSessionToken(_result)
        dispatch(signUpSuccess(_result))
        navigation.navigate('Main')
    }
}

export const signUpSuccess = (token) => {
    return {
        type: SIGN_UP_SUCCESS,
        token
    }
}

export const signUpDeny = (error) => {
    return {
        type: SIGN_UP_FAILURE,
        error
    }
}

/**
 * Fetch user
 */
export const fetchUser = () => async (dispatch) => {
    dispatch(loading())
    const users = await ApiCaller.fetchUsersAsync()
        .catch(ex => {
            dispatch(fetchUserFailure(ex))
        })
    if (users) {
        dispatch(fetchUserSuccess(users))
    }
}
export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        users
    }
}
export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        error
    }
}


/**
 * Get token
 * @param {*} navigation navigation object to navigate on token result
 */
export const getToken = (navigation) => async (dispatch) => {
    const _token = await SessionManager.getSessionToken()
    if (_token) {
        dispatch({ type: GET_TOKEN, token: _token ? _token : null })
        navigation.navigate('Main')
    } else {
        navigation.navigate('Auth')
    }
}

/**
 * Generic action for call loading indicator
 */
export const loading = () => (dispatch) => {
    dispatch({ type: LOADING, isLoading: true })
}

/**
 * Logout user
 */
export const logout = () => async (dispatch) => {
    await SessionManager.setSessionToken('')
    dispatch({ type: LOGOUT })
}