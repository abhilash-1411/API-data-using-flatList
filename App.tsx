import React, { useEffect,useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
const App=()=> {
  const [data,setData]=useState([])
  const getAPIData= async() => {
    const url='https://jsonplaceholder.typicode.com/posts';
    let result=await fetch(url);
    result= await result.json()
    setData(result)

  }
  useEffect(() => {
    getAPIData();
  },[]);

  return (
    
<View>
  <ScrollView>
  <Text style={{fontSize:30}}>FlatList with API call</Text>
  {data.length?
  <FlatList
  data={data}
  renderItem={({item})=><View style={{padding:10,borderBottomWidth:2,borderBottomColor:'red'}}>
      <Text style={{fontSize:30}}>ID:{item.id}</Text>
      <Text style={{fontSize:30}}>Title:{item.title}</Text>
      <Text style={{fontSize:30}}>Body:{item.body}</Text>
  </View>}
    />:null
 }
  </ScrollView>
  </View>

  );
}



export default App;


