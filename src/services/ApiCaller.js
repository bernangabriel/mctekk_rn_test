import axios from 'axios'
import { SIGNIN_METHOD, SIGNUP_METHOD, FETCH_USERS, BASE_API_URL } from '../constants/commonKeys'
import SessionManager from '../utils/SessionManager'

//create client instance 
const client = axios.create({
    baseURL: BASE_API_URL
})

//define request interceptor for passing token
client.interceptors.request.use(async (config) => {
    return config
})

class ApiCaller {
    constructor() {
        axios.defaults.baseURL = BASE_API_URL;
        axios.interceptors.request.use(
            async (req) => {
                if (req.url.indexOf('users') > -1 && req.method.toLowerCase() === 'get') {
                    const tokenValue = await SessionManager.getSessionToken();
                    if (tokenValue) {
                        req.headers.Authorization = tokenValue;
                    } else {
                        alert('Token not present...');
                    }
                }
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
            const response = await client
                .post(SIGNUP_METHOD, {
                    firstname: firstName, lastname: lastName,
                    email: email, password: password,
                    verify_password: verifyPassword,
                    default_company: defaultCompany
                })
                .catch(ex => {
                    reject(`ERROR... ${ex}`)
                })
            if (response) {
                resolve(response.data)
            }
        })
    }

    signInAsync(email, password) {
        return new Promise(async (resolve, reject) => {
            const response = await client.post(SIGNIN_METHOD, { email, password })
                .catch((ex, a) => {
                    reject('Something went wrong, review your credentials')
                })
            if (response) {
                resolve(response.data.token)
            }
        })
    }

    async fetchUsersAsync() {
        return new Promise(async (resolve, reject) => {
            const response = await client.get(FETCH_USERS)
                .catch(ex => {
                    console.log('FETCH ERROR', ex)
                    reject('something went wrong...' + ex)
                })
            resolve(response)
        })
    }

}

export default new ApiCaller()