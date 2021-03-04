import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, TouchableOpacity, Button, Image, SafeAreaView, FlatList } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
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

function DetailsScreen({ route, navigation }) {
  const { loginUser } = route.params;

  const [data, setData] = React.useState([]);
  let url = loginUser.repos_url;

  const axiosApiCall = (navigate) => {
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

  const Item = ({ item }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>{item.description}</Text>
      </View>
  );
  
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.containerImage}>
        <Image
          style={styles.circle}
          source={{
            uri: loginUser.avatar_url,
          }}
        />
        <Text style={styles.logo}>{loginUser.name}</Text>
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>

  );
}
export default DetailsScreen

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

