import * as React from 'react';
import Svg, { Path, G,Defs,ClipPath,TSpan,Text } from 'react-native-svg';
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
export function DentalIcon() {
    return (
        <View style={{}}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 28" width="22" height="28">
                <Defs>
                    <ClipPath clipPathUnits="userSpaceOnUse" id="cp1">
                        <Path d="M-59 -341L316 -341L316 471L-59 471Z" />
                    </ClipPath>
                </Defs>
                <G id="home – 3" clip-path="url(#cp1)">
                    <G id="dental">
                        <Path id="dental icon" fill= "#ffffff" d="M11.12 15.06C13.2 15.06 14.17 16.64 14.37 18.88C14.42 19.42 14.37 20.2 14.3 21.11C14.07 24.12 13.8 27.82 15.8 27.82C17.5 27.82 18.37 24.57 18.87 20.86C19.36 17.19 18.84 15.36 19.1 13.73C19.58 10.64 22.27 7.87 21.44 3.93C20.98 1.75 19.78 0.72 18.59 0.29C15.84 -0.71 14.07 1.21 11.12 1.21C8.17 1.21 6.4 -0.71 3.66 0.29C2.46 0.72 1.26 1.75 0.8 3.93C-0.03 7.87 2.66 10.64 3.15 13.73C3.4 15.36 2.89 17.19 3.37 20.86C3.87 24.57 4.74 27.82 6.44 27.82C8.44 27.82 8.18 24.12 7.94 21.11C7.87 20.2 7.82 19.42 7.87 18.88C8.07 16.64 9.05 15.06 11.12 15.06Z" />
                    </G>
                </G>
            </Svg>
        </View>
    );
}
export function HeardIcon() {
    return (
        <View style={{}}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 27" width="29" height="27">
                <Defs>
                    <ClipPath clipPathUnits="userSpaceOnUse" id="cp1">
                        <Path d="M-166 -341L209 -341L209 471L-166 471Z" />
                    </ClipPath>
                </Defs>
                <G id="home – 3" clip-path="url(#cp1)">
                    <G id="heart">
                        <Path id="heart icon" fill= "#ffffff" d="M21.16 1C18.22 1 15.68 3.4 14.51 5.9C13.34 3.4 10.8 1 7.86 1C3.8 1 0.5 4.29 0.5 8.35C0.5 16.61 8.83 18.78 14.51 26.94C19.88 18.83 28.52 16.35 28.52 8.35C28.52 4.29 25.22 1 21.16 1Z" />
                    </G>
                </G>
            </Svg>
        </View>
    );
}
export function BrainIcon() {
    return (
        <View style={{}}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 25" width="28" height="25">
                <Defs>
                    <ClipPath clipPathUnits="userSpaceOnUse" id="cp1">
                        <Path d="M-276 -342L99 -342L99 470L-276 470Z" />
                    </ClipPath>
                </Defs>
                {/* <style>
                    tspan {white - space:pre }
		.shp0 {fill: #ffffff }
	</style> */}
                <G id="home – 3" clip-path="url(#cp1)">
                    <G id="brain">
                        <Path id="brain icon" fill="#ffffff" d="M10.42 0.55C9 0.55 7.82 1.52 7.48 2.84C7.44 2.84 7.41 2.83 7.37 2.83C5.69 2.83 4.32 4.2 4.32 5.88C4.32 6.11 4.35 6.34 4.4 6.55C3.01 7.12 2.04 8.49 2.04 10.08C2.04 10.68 2.19 11.23 2.43 11.74C1.29 12.4 0.51 13.62 0.51 15.03C0.51 16.62 1.48 17.98 2.87 18.55C2.82 18.77 2.8 19 2.8 19.22C2.8 21.12 4.33 22.65 6.23 22.65C6.42 22.65 6.61 22.63 6.8 22.6C7.26 23.96 8.53 24.94 10.04 24.94C11.94 24.94 13.47 23.41 13.47 21.51L13.47 3.6C13.47 1.91 12.1 0.55 10.42 0.55ZM27.96 15.03C27.96 13.62 27.18 12.4 26.03 11.74C26.28 11.23 26.43 10.68 26.43 10.08C26.43 8.49 25.45 7.12 24.06 6.55C24.11 6.34 24.14 6.11 24.14 5.88C24.14 4.2 22.78 2.83 21.09 2.83C21.06 2.83 21.02 2.84 20.99 2.84C20.65 1.52 19.47 0.55 18.04 0.55C16.36 0.55 15 1.91 15 3.6L15 21.51C15 23.41 16.53 24.94 18.43 24.94C19.94 24.94 21.21 23.96 21.67 22.6C21.85 22.63 22.04 22.65 22.24 22.65C24.13 22.65 25.67 21.12 25.67 19.22C25.67 19 25.64 18.77 25.6 18.55C26.98 17.98 27.96 16.62 27.96 15.03Z" />
                    </G>
                </G>
            </Svg>
        </View>
    );
}
export function BoenIcon() {
    return (
        <View style={{}}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="23" height="23">
                <Defs>
                    <ClipPath clipPathUnits="userSpaceOnUse" id="cp1">
                        <Path d="M-277 -109L98 -109L98 703L-277 703Z" />
                    </ClipPath>
                </Defs>
                <G id="home – 3" clip-path="url(#cp1)">
                    <G id="bone">
                        <Path id="bone icon" fill="#ffffff" d="M18.67 3.81C19.06 2.84 18.9 1.81 18.25 1.15L18.07 0.98C17.12 0.03 15.44 0.16 14.33 1.27C13.46 2.14 13.17 3.38 13.6 4.36C13.92 5.1 14.33 5.72 13.61 6.44L6.18 13.86C5.44 14.6 4.74 14.13 4.11 13.85C3.13 13.42 1.88 13.72 1.02 14.58C-0.1 15.7 -0.23 17.37 0.72 18.32L0.9 18.5C1.55 19.15 2.58 19.32 3.56 18.93C3.92 18.78 4.23 19.09 4.09 19.46C3.69 20.43 3.86 21.46 4.51 22.11L4.69 22.29C5.64 23.24 7.31 23.11 8.43 22C9.3 21.13 9.59 19.88 9.16 18.91C8.84 18.16 8.43 17.55 9.15 16.83L16.57 9.4C17.31 8.66 18.02 9.14 18.65 9.42C19.63 9.85 20.87 9.55 21.74 8.68C22.85 7.57 22.99 5.9 22.03 4.94L21.86 4.77C21.2 4.11 20.18 3.95 19.2 4.34C18.84 4.49 18.53 4.17 18.67 3.81Z" />
                    </G>
                </G>
            </Svg>
        </View>
    );
}