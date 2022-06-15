import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,Dimensions,Platform,ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import TodoList from './components/TodoList';
const {height,width} = Dimensions.get('window');
//'#4c669f', '#3b5998', '#192f6a'
export default function App() {
  const [TodoItem,setTodoItem]= React.useState('Todo List will show here');
  const [done,setDone] = React.useState(false);
  const toggleItem = ()=>{
    //console.log("O zin dji gnééé");
    setDone(!done);
    //console.log("valeur du setDone",setDone);
  }
  const addTodoItemController = () =>{
    console.log(setTodoItem);
  }
  return (
    <LinearGradient style={styles.container} colors={['#4c669f', '#3b5998', '#192f6a']}>
      <Text style={styles.appTitle}>Minimaliste Todo App</Text>
      <View style={styles.card}>
        <TextInput 
        style={styles.input} 
        placeholder="Add an item here !!!" 
        value={TodoItem}
        onChangeText={(text)=>setTodoItem(text)}
        placeholderTextColor={'red'}
        returnKeyType={'done'}
        />
          <ScrollView>
            <TodoList item = {TodoItem} toggle={toggleItem} ok={done}/>
          </ScrollView>
      </View>
   
      <StatusBar style="auto" barStyle="light-content"/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 30,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  card:{
    backgroundColor:'#fff',
    flex:1,
    width:width-35,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    ...Platform.select({
      android:{
        elevation:5,
      }
    })
  },
  input:{
    padding:20,
    borderBottomColor:'#bbb',
    borderBottomWidth:2,
    fontSize:24,
  }
});
