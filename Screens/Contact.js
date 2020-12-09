import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Accordion, Block, NavBar, Text, Input, Card, Icon } from 'galio-framework';
import { Notification, SearchIcon } from './theme/SvgIcon'
import theme from './theme'
import COLORS from "./theme/colors";



const Contact = ({ navigation }) => {
    return (

        <View style={styles.center}>
            <NavBar
                style={{ backgroundColor: theme.COLORS.HEADER }}
                title=""
                leftIconSize={theme.SIZES.ICON_MEDIUM}
                leftIconName="navicon"
                leftIconColor={theme.COLORS.BRIGHT_DANGER}
                onLeftPress={() => navigation.openDrawer()}
                right={(
                    <Notification />
                )}
            />


            <Block style={styles.MainBlock}>

                <View style={{ margin: 15 }}>
                    <Text h4 style={{ color: COLORS.DARK_BLACK }}>Hi, Olivia</Text>
                    <Text h3>Welcome Back</Text>
                </View>

                <View>

                    <Input
                        style={styles.searchBar}
                        borderless
                        placeholder="Search..."
                        placeholderTextColor={theme.COLORS.SEARCH_FONT}
                        family="antdesign"
                    />

                    <SearchIcon style={{top:10}}/>
                </View>


            </Block>

        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: theme.COLORS.HEADER,
    },
    MainBlock: {
        backgroundColor: theme.COLORS.WHITE_DARK,
        // height: '90%',
        flex: 1,
        // justifyContent: 'flex-end',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    searchBar: {
        height: 50,
        width: '90%',
        alignSelf: 'center'
    }
});

export default Contact;