import axios from 'axios'
import {
    SIGNIN_METHOD,
    SIGNUP_METHOD,
    FETCH_USERS,
    BASE_API_URL
} from '../constants/commonKeys'
import SessionManager from '../utils/SessionManager'

class ApiCaller {
    constructor() {
        axios.defaults.baseURL = BASE_API_URL;
        axios.interceptors.request.use(
            async (req) => {

                //condition for the single api method that need pass a token value
                if (req.url.includes('users') && req.method.toLowerCase() === 'get') {
                    const tokenValue = await SessionManager.getSessionToken();
                    if (tokenValue) {
                        req.headers.Authorization = tokenValue;
                    } else {
                        alert('Token not present...');
                    }
                }

                //set validate status to true to avoid any status code
                req.validateStatus = (status) => true

                return req;
            },
            (error) => {
                if (error.response.status === "UNAUTHORIZED") {
                    alert(`unauthorized: ${error}`);
                }
            }
        );
    }

    signUpAsync(firstName, lastName, email, password, verifyPassword, defaultCompany) {
        return new Promise(async (resolve, reject) => {
            const { data: { errors, session } } = await axios
                .post(SIGNUP_METHOD, {
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    password: password,
                    verify_password: verifyPassword,
                    default_company: defaultCompany
                })
                .catch(ex => {
                    reject('Something went wrong')
                })
            if (errors) {
                reject(errors.message)
            } else {
                resolve(session.token)
            }
        })
    }

    signInAsync(email, password) {
        return new Promise(async (resolve, reject) => {
            const { data: { errors, token } } = await axios.post(SIGNIN_METHOD, { email, password })
                .catch((ex) => {
                    reject('Something went wrong')
                })
            if (errors) {
                reject(errors.message)
            } else {
                resolve(token)
            }
        })
    }

    async fetchUsersAsync() {
        return new Promise(async (resolve, reject) => {
            const { data } = await axios.get(FETCH_USERS)
                .catch(ex => {
                    reject('something went wrong' + ex)
                })
            resolve(data)
        })
    }
}

export default new ApiCaller()