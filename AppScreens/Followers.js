import React, {Component} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity,Button,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import { ListItem } from "react-native-elements"

function GetFollowers({ route, navigation }) {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const { loginUser } = route.params;
  let url = loginUser.followers_url;
  const nn = useNavigation();
  const axiosApiCall = async (navigate) => {
    axios({
      "method": "GET",
      "url": url
    })
      .then((response) => {
        //alert(response.data.name);
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
  }, []);

  const onPressItem = (item) => {
    alert(item.url);
  }
  const Item = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
      <Image
        style={styles.circle}
        source={{
          uri: item.avatar_url,
        }}
      />
      <Text style={styles.title}>{item.login}</Text>
      <Text style={styles.text}>{item.url}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.login.toString()}
      />
      )}
    </SafeAreaView>
  );
}
export default GetFollowers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 25,
  },
  text: {
    fontSize: 15,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 50
  }
});





// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
// import axios from 'axios'
// import { ListItem } from "react-native-elements"
// function GetFollowers({ route, navigation }) {
//   const [data, setData] = React.useState([]);
//   const { loginUser } = route.params;
//   let url = loginUser.followers_url;

//   axios({
//     "method": "GET",
//     "url": url
//   })
//     .then((response) => {
//       //alert(response.data.name);
//       setData(response.data);
//     })
//     .catch((error) => {
//       alert(error);
//       console.log(error);
//     });
//   const onPressItem = (item) => {
//     alert(item.url);
//   }
//   const renderNativeItem = (item) => {
//     return <ListItem 
//       roundAvatar
//       title={item.login}
//       subtitle={item.url}
//       leftAvatar={{ uri: item.avatar_url }}
//       onPress={() => onPressItem(item)}
//       key ={item.login}
//     />;
//   }
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => renderNativeItem(item)}
//         keyExtractor={item => item.login}
//       />
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   text: {
//     fontSize: 16,
//   }
// });
// export default GetFollowers;

