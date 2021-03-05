import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import axios from 'axios'
import { ListItem } from "react-native-elements"
function GetFollowings({ route, navigation }) {
  
  const { loginUser } = route.params;
  let url = loginUser.following_url.replace("{/other_user}", "");

  const [data, setData] = React.useState([]);


  const axiosApiCall = async => {
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
      });
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
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.login.toString()}
      />
    </SafeAreaView>

  );
}
export default GetFollowings;

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


