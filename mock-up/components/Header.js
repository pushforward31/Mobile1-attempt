import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
        
    },
    image: {
        width: 75,
        height: 75
    }
})

class Header extends Component {
    render() {
        return (
           <View style = {styles.header}>
            <Image source = {{uri:"https://storybird.s3.amazonaws.com/artwork/zeromojo/square/turnip.jpeg"}} style = {styles.image}/>
            </View>
        );
    }
}

export default Header;