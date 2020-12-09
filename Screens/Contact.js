import React from "react";
import { View, StyleSheet, Text,  } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Accordion, Block, NavBar, Button, } from 'galio-framework';
import theme from './theme'

const data = [
    {
        title: "First Chapter", content: "Lorem ipsum dolor sit amet",
        icon: {
            name: 'keyboard-arrow-up',
            family: 'material',
            size: 16,
        }
    },
    { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
];

const Contact = (navigation) => {
    return (
        
        <View style={styles.center}>
            <NavBar
                style={styles.navbar}
                // right={this.renderRight()}
                title="ddfds"
                leftIconSize={theme.SIZES.ICON_MEDIUM}
                leftIconName="navicon"
                leftHitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
                leftStyle={{ paddingVertical: -12, flex: 0.3 }}
                leftIconColor={theme.COLORS.BRIGHT_DANGER}
                titleStyle={styles.title}
                //  onLeftPress={this.handleLeftPress}
                // onLeftPress={() => navigation.openDrawerNavigator()}
                // onLeftPress={"DrawerNavigator"}
                // onLeftPress={navigation.navigate("DrawerNavigator")}
/>
            {/* <Button
                onPress={() => navigation.navigate('Home')}
                title="Go to notifications"
            /> */}
            <Block style={{ height: 200 }}>
                <Accordion dataArray={data} />
            </Block>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
       
    },
});

export default Contact;