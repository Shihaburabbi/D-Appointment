import * as React from 'react';
import Svg, { Path, G,Defs,ClipPath } from 'react-native-svg';
import {View} from 'react-native'



export function Notification() {
    return (

            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="26"
                viewBox="0 0 22 26">
                <G>
                    <G>
                        <Path
                            fill="#FFF"
                            d="M21.603 20.584v1.27H0v-1.27l2.542-2.542v-6.989c0-3.94 2.668-7.116 6.353-8.006v-.89c0-1.016.89-1.905 1.906-1.905 1.017 0 1.907.89 1.907 1.906v.89c3.685.889 6.353 4.066 6.353 8.005v6.99zM8.26 23.125h5.083a2.549 2.549 0 0 1-2.542 2.542 2.549 2.549 0 0 1-2.541-2.542z"
                        />
                    </G>
                </G>
            </Svg>
       
    );
}
export function SearchIcon() {
    return (
        <View style={{ position: 'absolute',top:8,alignSelf:'flex-end',right:20}}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
            <Defs>
                <ClipPath clipPathUnits="userSpaceOnUse" id="cp1">
                    <Path d="M-300 -202L75 -202L75 610L-300 610Z" />
                </ClipPath>
            </Defs>
  
            <G id="home – 3" clip-path="url(#cp1)">
                <G id="search">
                    <Path id="search icon bg" fill= '#107163' d="M5 0L45 0C47.76 0 50 2.23 50 5L50 45C50 47.76 47.76 50 45 50L5 50C2.23 50 0 47.76 0 45L0 5C0 2.23 2.23 0 5 0Z" />
                    <G id="search icon">
                        <G id="Search">
                            <Path id="Ellipse_739" fill= 'none' stroke= '#ffffff' stroke-linecap='round' stroke-width='1.5'  d="M24.77 33.76C19.8 33.76 15.78 29.74 15.78 24.77C15.78 19.8 19.8 15.78 24.77 15.78C29.74 15.78 33.76 19.8 33.76 24.77C33.76 29.74 29.74 33.76 24.77 33.76Z" />
                            <Path id="Line_181" fill='none' stroke='#ffffff' stroke-linecap='round' stroke-width='1.5' d="M31.02 31.49L34.54 35" />
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
        </View>
    );
}