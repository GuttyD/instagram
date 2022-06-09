import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Search from './screens/Search';
import Shop from './screens/Shop';
import Profile from './screens/Profile';
import Reels from './screens/Reels';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Shop" component={Shop} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Reels" component={Reels} />
            </Tab.Navigator>
    )
}