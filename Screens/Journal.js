import React from 'react';
import {Stylesheet, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Blogs from '../Blogs/Blogs'
import NewBlog from '../Blogs/NewBlog'

export default StackNavigator({
  Blogs:{
    screen:Blogs,
    navigationOptions:({navigation})=>{
      return{
      title: 'Blogs',
      headerRight:(<Button title={'New'} onPress={()=>navigation.navigate('NewBlog')} />)
    
    };

  },
},
  NewBlog:{
    screen:NewBlog,
    navigationOptions:{
      title:'NewBlog'
    }
  }
});
