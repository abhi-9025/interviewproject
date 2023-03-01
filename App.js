import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View ,Pressable} from "react-native";
import { Card } from "react-native-paper";
import { data } from "./data";

export default function App() {
  return (
    <View style={styles.container}>
      <ListView />
    </View>
  );
}

const CardComponent = (props) => {
  const [isClicked, setIsClicked] = useState(1);
  const handlePress = (id) => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <View style={styles.cardComponent}>
      <Card style={{ elevation: 1}}>
        <Text style={styles.titleComponent}>{props.title}</Text>
       <View style={{padding:10}}>
        {isClicked == 1 ? (
          <Text style={styles.description} numberOfLines={3}>
            {props.desc}
          </Text>
        ) : (
          <Text style={styles.description}>{props.desc}</Text>
        )}
        </View>
        <Pressable style={styles.button} onPress={handlePress}>
      <Text >Show More</Text>
    </Pressable>
      </Card>
    </View>
  );
};

const ListView = () => {
  return (
    <View>
      {data.map((item) => {
        return<View>
        <CardComponent title={item.title} desc={item.desc} id={item.id} /></View>
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
  },
  cardComponent: {
    width: 400,
    marginTop:20,
  },
  description: {
    marginBottom: 20,
  },
  titleComponent: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    alignSelf: "center",
    marginTop:5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    alignSelf:'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    marginBottom:5,
    width:'40%',
    elevation: 3,
    backgroundColor:`#77C3E6`,
  },
});
