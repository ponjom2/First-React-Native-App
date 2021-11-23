import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={main.top}>
      {/* Header */}
      <View style={main.header}>
        <Text style={{ fontSize: 36, fontWeight: "bold" }}>Hello World!</Text>
        <Text style={{ fontSize: 24 }}>First React Native App</Text>
        <Text style={{ fontSize: 16, color: "#192a56" }}>
          This is a paragraph explaining what this app is all about. As you can
          see there are already many components including text, images and
          buttons
        </Text>
      </View>

      {/* Body */}
      <View style={main.body}>
        {/* Questions */}
        <Text style={main.questions}>
          What Would you like to get out {"\n"} of this course?
        </Text>
        <TextInput
          placeholder="Initial Text"
          multiline={true}
          style={main.textInput}
        ></TextInput>

        <Text style={main.questions}>
          An emoji describing how you {"\n"} are feeling about the course:
        </Text>
        {/* Image */}
        <Image
          style={{ width: 100, height: 100, marginTop: 40 }}
          source={require("./assets/icon.png")}
        ></Image>

        {/* Button */}
        <Button
          title="Submit"
          onPress={() => console.log("Button was pressed")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const main = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: "#192a56",
    width: "100%",
  },

  header: {
    height: "17%",
    width: "auto",
    marginTop: 60,
    backgroundColor: "lightblue",
  },

  headerFont: {
    fontSize: 34,
    fontWeight: "bold",
  },

  body: {
    height: "100%",
    backgroundColor: "#fff",
  },

  questions: {
    fontSize: 20,
    fontWeight: "bold",
    top: 40,
  },

  textInput: {
    marginTop: 40,
    width: "80%",
    height: "15%",
    backgroundColor: "rgba(169, 169, 169,0.15)",
  },
});
