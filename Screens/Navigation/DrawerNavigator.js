import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            {/* <Drawer.Screen name="Home" component={TabNavigator} /> */}
            {/* <Drawer.Screen name="Contact" component={ContactStackNavigator} /> */}
            <Drawer.Screen name="Contact" component={Contact} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
            
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;