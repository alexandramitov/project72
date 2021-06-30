import * as React from 'react';
import { Stylesheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import keyAvoidingView from 'reactToastAndroid-native';


export default class App extends React.Component{
    

    render(){

        const showToast= ()=>{
            ToastAndroid.show('Story has been submitted!', ToastAndroid.SHORT)
        }
        
        return(
            <keyAvoidingView style= {{alignItems: 'center', marginTop: 20}}>

            <View>
                <Header
                backgroundColor={"pink"}
                centerComponent={{
                    text: "Story Hub",
                    style: {color: "pink", fontSize: 20},
                }}
                />

               <TextInput
                   style={styles.titleBox}
                   onChangeText={text => {
                       this.setState({ text: text })
                   }}
                   value={this.state.text}
                   />

               <TextInput
                   style={styles.authorBox}
                   onChangeText={text => {
                    this.setState({ text: text })
                   }}
                   value={this.state.text}
                   />

               <TextInput placeholder="Write your story" 
               onChangeText= {(text)=>{ 
                   this.setState({ storyText: text }) }}
                    placeholderTextColor='black' 
                    value={this.state.storyText} 
                    style={styles.storyText} 
                    multiline={true}/>

               
               
            </View>
            </keyAvoidingView>
        
        )
    }
}






const TabNavigator = createBottomTabNavigator({
    Write: {screen: WriteStoryScreen},
    Read: {ReadStoryScreen}
},
{
defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if(routeName === "Write"){
            return(
                <Image
                source={require("./images/write.png")}
                style={{width:40, height:40}}
                />
            )
        }
        else if(routeName === Read){
            return(
                <Image
                source={require("./images/read.png")}
                style={{width:40, height:40}}
                />
            )
        }
    }
})

}
);

const createAppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
    titleBox: {
      marginTop: 40,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    authorBox: {
      marginTop: 60,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    storyBox: {
      marginTop: 80,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    submitButton: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      marginTop: 90,
    },
})
