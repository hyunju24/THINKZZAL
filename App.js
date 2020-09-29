import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HelloComponent extends Component {	// export default: 이름없이 export하기, 파일 당 1번만 가능
	render() {
    	return (	// justifyContent:가로중앙정렬, alignItems:세로중앙정렬
        	<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            	<Text>Hello World</Text>
            </View>
        );
    }
}