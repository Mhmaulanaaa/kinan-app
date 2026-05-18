import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/splash/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import BottomTabs from "../navigation/BottomTabs";

import AboutScreen from "../screens/profile/AboutScreen";
import HelpScreen from "../screens/profile/HelpScreen";
import AccountSettingsScreen from "../screens/profile/AccountSettingsScreen";
import ChangeStatusScreen from "../screens/profile/ChangeStatusScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />

      {/* Profile Screen */}
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
      <Stack.Screen name="ChangeStatus" component={ChangeStatusScreen} />
      {/* End Profile Screen */}
    </Stack.Navigator>
  );
}
