import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
const {height,width} = Dimensions.get('window');

const TodoList = ({item,toggle,ok})=>{
    return(
      <View style={styles.container}>
            <TouchableOpacity onPress={toggle}>
                <View style={[styles.circle, ok ? styles.completeCircle : styles.incompletCircle]}/>
            </TouchableOpacity>
            <Text style={[styles.text, ok ? styles.strikeText : styles.unstrikeText]}>{item}</Text>
      </View>
    );
  }
const styles = StyleSheet.create({
    container:{
        width:width-50,
        borderBottomColor:'#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
    },
    text: {
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20
    },
    circle:{
        width:30,
        height:30,
        borderRadius:50,
        borderWidth:3,
        borderColor:'red',
    },
    completeCircle: {
        borderColor: '#bbb'
      },
      incompleteCircle: {
        borderColor: '#DA4453'
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through'
    },
    unstrikeText: {
        color: "#29323c"
    }

});
export default TodoList;