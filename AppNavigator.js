import {createAppContainer} from 'react-navigation';
import Home from './Navigation/Home';
import Profile from './Navigation/Profile';
import User from './Navigation/User';
import Login from './components/Login';
import {createStackNavigator} from 'react-navigation-stack';
const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Profile: {screen: Profile},
    User: {screen: User},
    Login: {screen: Login},
  },
  {
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
