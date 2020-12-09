import React, { useState } from "react";
import { View, StyleSheet, Button, ScrollView, FlatList, Image } from "react-native";
import { Accordion, Block, NavBar, Text, Input, Card, Icon } from 'galio-framework';
import { Notification, SearchIcon, DentalIcon, HeardIcon, BrainIcon, BoenIcon } from './theme/SvgIcon'
import theme from './theme'
import COLORS from "./theme/colors";


const dummyArray = [
    {
        id: '1', value: 'Dr. Fred Mask', image:'https://reactnative.dev/img/tiny_logo.png' },
    { id: '2', value: 'Dr. Stella Kane ' },
    { id: '3', value: 'Dr. Zac Wolff' },
    // { id: '4', value: 'Dr. Zac Wolff' },
];


const Contact = ({ navigation }) => {
    const [listItems, setListItems] = useState(dummyArray);

    const ItemView = ({ item }) => {
        return (
            // FlatList Item
            <View>
                <Text
                    style={styles.item}
                    onPress={() => getItem(item)}>
                    {item.value}
                </Text>
            </View>
        );
    };


    const getItem = (item) => {
        //Function for click on an item
        alert('Id: ' + item.id + ' Value: ' + item.value);
    };
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

                    <SearchIcon style={{ top: 10 }} />
                </View>

                <ScrollView>

                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 5,
                        marginLeft: 17,
                        marginRight: 17
                    }}>
                        <Text style={{ color: theme.COLORS.MAIN_FONT, fontSize: 18, fontWeight: '700' }}>Category</Text>
                        <Text style={{ color: theme.COLORS.SEE_ALL_FONT, fontSize: 14, fontWeight: '400' }}>See all</Text>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.categoryView}>
                                <DentalIcon />
                                <Text style={styles.categoryTitleText}>Dental</Text>
                                <Text style={styles.categoryDoctorText}>26 Doctors</Text>
                            </View>

                            <View style={styles.categoryView}>
                                <HeardIcon />
                                <Text style={styles.categoryTitleText}>Heard</Text>
                                <Text style={styles.categoryDoctorText}>18 Doctors</Text>
                            </View>

                            <View style={styles.categoryView}>
                                <BrainIcon />
                                <Text style={styles.categoryTitleText}>Brain</Text>
                                <Text style={styles.categoryDoctorText}>20 Doctors</Text>
                            </View>

                            <View style={styles.categoryView}>
                                <BoenIcon />
                                <Text style={styles.categoryTitleText}>Boen</Text>
                                <Text style={styles.categoryDoctorText}>36 Doctors</Text>
                            </View>
                        </View>
                    </ScrollView>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 5,
                        marginLeft: 17,
                        marginRight: 17
                    }}>
                        <Text style={{ color: theme.COLORS.MAIN_FONT, fontSize: 18, fontWeight: '700' }}>Top rate</Text>
                        <Text style={{ color: theme.COLORS.SEE_ALL_FONT, fontSize: 14, fontWeight: '400' }}>See all</Text>
                    </View>

                    <View style={{ margin: 15, }}>
                        <FlatList
                            data={listItems}
                            
                            //data defined in constructor
                            // ItemSeparatorComponent={ItemSeparatorView}
                            //Item Separator View
                           
                                renderItem={({item}) => (
                                <Block style={{ backgroundColor: '#FFF', margin: 5, height: 84,  flexDirection:'row'}}>
                                        <Image source={{ uri: 'https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-1421526857248uragw.png' }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                                    <Text style={{textAlign:'center',}}>{item.value}</Text>
                                </Block>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />

                    </View>
                    

                </View>
</ScrollView>
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
        alignSelf: 'center',
    },
    categoryView: {
        width: 90,
        height: 110,
        backgroundColor: '#107163',
        borderRadius: 5,
        marginLeft: 17,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    categoryTitleText: {
        color: theme.COLORS.WHITE,
        fontSize: 14,
        fontWeight: '700'
    },
    categoryDoctorText: {
        color: theme.COLORS.WHITE,
        fontSize: 8,
        fontWeight: '400'
    }
});

export default Contact;