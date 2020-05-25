import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Map from './components/Map'
import Login from './components/Login'

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Map
  })
);