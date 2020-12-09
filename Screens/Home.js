import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import styled from 'styled-components';

const Home = ({ navigation }) => {
    return (
        <MainContainer>
          

            <Header>
                <HeaderTitle>
                    Shihab Me
        </HeaderTitle>
            </Header>

            <Container>

                <Button
                    title="Go to About Screen"
                    onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
                />

            </Container>
        </MainContainer>
    );
};


// Component Style
const MainContainer = styled.View`
	flex: 1;
	background-color: white; 
`;

const Container = styled.View`
	flex: 1;
	background-color: white;
	${'' /* justify-content: center; */}
	align-items: center;  
  margin-top:10px;
`;
const Header = styled.View`
${'' /* width:100px; */}
background-color:#82E0AA;
	height:50px;
	justify-content: center;
`;
const HeaderTitle = styled.Text`
	font-size: 24px;
	font-weight: 500;
  text-align: center;
  padding: 5px;
`;

export default Home;