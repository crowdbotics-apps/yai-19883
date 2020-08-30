import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps95614Navigator from '../features/Maps95614/navigator';
import Settings95592Navigator from '../features/Settings95592/navigator';
import Settings95577Navigator from '../features/Settings95577/navigator';
import NotificationList95576Navigator from '../features/NotificationList95576/navigator';
import Maps95575Navigator from '../features/Maps95575/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps95614: { screen: Maps95614Navigator },
Settings95592: { screen: Settings95592Navigator },
Settings95577: { screen: Settings95577Navigator },
NotificationList95576: { screen: NotificationList95576Navigator },
Maps95575: { screen: Maps95575Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
