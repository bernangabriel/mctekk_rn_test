import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { GREEN, WHITE } from '../constants/colors'

//screens
import AuthLoadingScreen from '../screens/ConnectedAuthLoadingScreen'
import SignUpScreen from '../screens/ConnectedSignUpScreen'
import SignInScreen from '../screens/ConnectedSignInScreen'
import HomeScreen from '../screens/ConnectedHomeScreen'

const AuthStack = createStackNavigator({
    SignIn: {
        screen: SignInScreen,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            title: 'Sign up',
            headerStyle: {
                backgroundColor: GREEN
            },
            headerTintColor: WHITE
        }
    }
})

const MainStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            headerStyle: {
                backgroundColor: GREEN,
            },
            headerTintColor: WHITE
        }
    }
})

export default createAppContainer(
    createSwitchNavigator({
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        Main: MainStack
    }, {
        initialRouteName: 'AuthLoading'
    })
)