import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpComingScreens from '../UpComingScreens';
import OngoingScreen from '../OngoingScreen';
import RecentScreen from '../RecentScreen';

const Tab = createMaterialTopTabNavigator();

const MyTripNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'rgba(0, 0, 0, 1)',
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 1)',
        labelStyle: {fontSize: 14, fontWeight: 'bold'},
        tabBarContentContainerStyle: {height: 65},
        tabBarStyle: {
          marginTop: 50,
          paddingTop: 10,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: 'rgba(246, 246, 246, 1)',
          elevation: 0,
        },
        tabBarItemStyle: {
          marginHorizontal: 16,
          justifyContent: 'flex-end',
        },
        tabBarIndicatorStyle: {
          width: '25%',
          backgroundColor: 'rgba(102, 39, 110, 1)',
        },
        tabBarIndicatorContainerStyle: {
          marginLeft: 16,
        },
      }}>
      <Tab.Screen
        options={{tabBarLabel: 'Ongoing'}}
        name="OnGoing"
        component={OngoingScreen}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Upcoming'}}
        name="UpComing"
        component={UpComingScreens}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Recent',}}
        name="Recent"
        component={RecentScreen}
      />
    </Tab.Navigator>
  );
};

export default MyTripNavigator;

// import React from 'react';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
// import OngoingScreen from '../OngoingScreen';
// import UpComingScreens from '../UpComingScreens';
// import RecentScreen from '../RecentScreen';

// const Tab = createMaterialTopTabNavigator();

// const CustomTabBar = ({state, descriptors, navigation, position}) => {
//   return (
//     <View style={{flexDirection: 'row'}}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name, route.params);
//           }
//         };

//         const inputRange = state.routes.map((_, i) => i);
//         // const opacity = position.interpolate({
//         //   inputRange,
//         //   outputRange: inputRange.map(i => (i === index ? 1 : 0.6)),
//         // });

//         return (
//           <TouchableOpacity
//             key={index}
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             style={[styles.tabItem, isFocused && styles.activeTabItem]}>
//             <Animated.Text
//               style={[styles.tabText, isFocused && styles.activeTabText]}>
//               {label}
//             </Animated.Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// const MyTripNavigator = () => {
//   return (
//     <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
//       <Tab.Screen
//         name="Ongoing"
//         component={OngoingScreen}
//         options={{tabBarLabel: 'Ongoing'}}
//       />
//       <Tab.Screen
//         name="UpComing"
//         component={UpComingScreens}
//         options={{tabBarLabel: 'Upcoming'}}
//       />
//       <Tab.Screen
//         name="Recent"
//         component={RecentScreen}
//         options={{tabBarLabel: 'Recent'}}
//       />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   tabContainer: {
//     // flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: 'rgba(246, 246, 246, 1)',
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     marginTop: 50,
//     paddingTop: 10,
//     // height: 65,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(246, 246, 246, 1)',
//     height: 65,

//   },
//   //   activeTabItem: {
//   //     backgroundColor: 'rgba(102, 39, 110, 1)',
//   //   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: 'rgba(0, 0, 0, 1)',
//   },
//   activeTabText: {
//     color: 'black',
//   },
// });

// export default MyTripNavigator;
