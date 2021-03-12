import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, TouchableOpacity, Button, Image, SafeAreaView, FlatList,ActivityIndicator } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
// function GoToButton({ screenName, buttonText }) {
//   const navigation = useNavigation();

//   return (
//     <Button
//       title={`${buttonText}`}
//       onPress={() => navigation.navigate(screenName)}
//     />
//   );
// }

function MyReposScreen({ route, navigation }) {
  const [isLoading, setLoading] = React.useState(true);
  const { loginUser } = route.params;

  const [data, setData] = React.useState([]);
  let url = loginUser.repos_url;
  
  const axiosApiCall = async  => {
    axios({
      "method": "GET",
      "url": url
    })
      .then((response) => {
        //alert(response.data.name);
          //setData(response.data);
          setData(response.data);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  React.useEffect(() => {
     axiosApiCall();
  }, [loginUser.repos_url]);

  const onPressItem = (item) => {
    //alert(item.url);
    navigation.push('Github Profile',{
      html_url: item.html_url
    });
  }
  const Item = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
    <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text}>{item.description}</Text>
    </TouchableOpacity>
  );
  
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container} >
       {/* <View style={styles.containerImage}> 
         <Image
          style={styles.circle}
          source={{
            uri: loginUser.avatar_url,
          }}
        />
        <Text style={styles.logo}>{loginUser.name}</Text> 
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
       </View>  */}
       {/* <View style={styles.containerList}>  */}
       {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} /> */}
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      )}
        
     {/* </View>  */}
    </SafeAreaView>

  );
}
export default MyReposScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
  },
  containerImage: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    //justifyContent: 'center'
    paddingTop: 10
  },
  containerList: {
    flex: 1,
    //paddingTop: 10,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fb5b5a",
    marginBottom: 20
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  item: {
    backgroundColor: '#fff',
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 32,
  },
  text: {
    fontSize: 15,
  },
});

