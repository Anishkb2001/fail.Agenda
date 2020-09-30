import React, { Component } from "react";
import {
    View,
    
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,

} from "react-native";
import { Image } from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


class Explore extends Component {

    componentWillMount() {
        this.startHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 90 + StatusBar.currentHeight
        }
    }
  


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 0, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: '#dc143c', marginHorizontal: 0,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0,
                            elevation: 1,
                            alignItems: "center",
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-book-outline" size={35} style={{ marginRight: 10,paddingLeft:100,color:'white'}} />
                            <Text style={{fontSize: 25, paddingLeft:2.5, color:'white'}}>Moments</Text>
                        </View>
                    </View>
                
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, marginTop:-25,alignItems:'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: '400', paddingHorizontal:20 }}>
                              Welcome back
                            </Text>
                </View>
                </View>
                <Container marginTop={-250} alignItems={'center'}>
        
        <Content>
          <Card style={{flex: 0, width:220, height:200, alignItems:'center', borderRadius:30}}>
            <CardItem>
              <Left>
                
                <Body>
                
                  <Text>Hello there,</Text>
                  <Text style={{alignContent:'center', fontSize:20}}>10/24/2018</Text>
                  <View>
                  <Button title="Add a task" onPress={()=>{}} ></Button>
                  </View>
                  <View>
                  <Button title="Add an event"></Button>
                  </View>
                  <Button title="Add a journal"></Button>
                  

                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                
                <Text>
                 Hello
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: 'red'}}>

                  <Text></Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0, width:220, height:200, alignItems:'center', borderRadius:30}}>
            <CardItem>
              <Left>
                
                <Body>
                
                  <Text>Hello</Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                
                <Text>
                 Hello
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: 'red'}}>

                  <Text></Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
              
        
            </SafeAreaView>
        );
    }
}
export default Explore;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});