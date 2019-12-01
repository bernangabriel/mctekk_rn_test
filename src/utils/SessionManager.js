import AsyncStorage from '@react-native-community/async-storage'
import { TOKEN_KEY } from '../constants/commonKeys'

class SessionManager {

    async getSessionToken() {
        return await AsyncStorage.getItem(TOKEN_KEY)
    }

    async setSessionToken(token) {
        return await AsyncStorage.setItem(TOKEN_KEY, token)
    }
}

export default new SessionManager()