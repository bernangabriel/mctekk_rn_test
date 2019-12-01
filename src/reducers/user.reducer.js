import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE, FETCH_USERS, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, GET_TOKEN, LOGOUT, LOADING } from '../constants/actionTypes'

const initialState = {
    users: [],
    token: null,
    error: null,
    isLoading: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        //SIGN UP
        case SIGN_UP_SUCCESS:
            return { ...state, token: action.token, error: null }
        case SIGN_UP_FAILURE:
            return { ...state, token: null, error: action.error }

        //SIGN IN
        case SIGN_IN_SUCCESS:
            return { ...state, token: action.token, error: '', isLoading: false }
        case SIGN_IN_FAILURE:
            return { ...state, error: action.error, isLoading: false }

        //FETCH USERS
        case FETCH_USERS:
            return { ...state, users: action.users }

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