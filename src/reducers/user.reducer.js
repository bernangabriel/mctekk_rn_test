import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    GET_TOKEN,
    LOGOUT,
    LOADING,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from '../constants/actionTypes'

const initialState = {
    users: [],
    token: '',
    error: '',
    isLoading: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        //SIGN UP
        case SIGN_UP_SUCCESS:
            return { ...state, token: action.token, error: '', isLoading: false }
        case SIGN_UP_FAILURE:
            return { ...state, token: '', error: action.error, isLoading: false }

        //SIGN IN
        case SIGN_IN_SUCCESS:
            return { ...state, token: action.token, error: '', isLoading: false }
        case SIGN_IN_FAILURE:
            return { ...state, error: action.error, isLoading: false }

        //FETCH USER
        case FETCH_USER_SUCCESS:
            return { ...state, users: action.users, isLoading: false }
        case FETCH_USER_FAILURE:
            return { ...state, error: action.error, isLoading: false }

        //OTHERS
        case GET_TOKEN:
            return { ...state, token: action.token }
        case LOGOUT:
            return { ...state, token: '', users: [] }
        case LOADING:
            return { ...state, isLoading: action.isLoading }

        default:
            return state
    }
}

export default userReducer