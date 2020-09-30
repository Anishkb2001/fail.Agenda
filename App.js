import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import ActionButton from 'react-native-action-button';



import Explore from './Screens/Explore'
import Calendar from './Screens/Calendar'
import Todo from './Screens/Todo'
import Journal from './Screens/Journal'
import Icon from 'react-native-vector-icons/Ionicons'
import Add from './Screens/Add'



export default createBottomTabNavigator({
  Explore:{
screen: Explore,
navigationOptions:{
  tabBarLabel:'Timeline',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-bookmark-outline" color={tintColor} size={28} />
    
  )
}

  },
  Todo: {
screen: Todo,
navigationOptions:{
  tabBarLabel:'To-do',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-checkmark-circle-outline" color={tintColor} size={28} />
  )}
  },

  Add:{
    screen: Add,
    navigationOptions:{
      tabBarLabel:'Add',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-add-circle-outline" color={tintColor} size={36}/>
      )
      }
},
Journal:{
screen: Journal,
navigationOptions:{
  tabBarLabel:'Journal',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-book-outline" color={tintColor} size={28} />
  )}
  },
  
  calendar: {
  screen: Calendar,
  navigationOptions:{
    tabBarLabel:'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-calendar-outline" color={tintColor} size={28} />
    )}
  }},
{
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        elevation: 5
      }
    }
    
  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});