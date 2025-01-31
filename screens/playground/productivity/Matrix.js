import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Svg, { Line, Polygon } from "react-native-svg";
import CartesianCoordinates from "../../../components/letgo/CartesianCoord";

const Matrix = () => {
  return (
    <View style={styles.container}>
      {/* Grid Sections */}
      <View style={styles.matrixContainer}>


      </View>
      <View style={styles.grid}>
        {/* Top Left - Do It Now */}
        <View style={[styles.quadrant, styles.purple]}>
          <Image
            source={require("../../../assets/image/productivity/matrixicon1.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Do it now</Text>
        </View>

        {/* Top Right - Schedule a Time */}
        <View style={[styles.quadrant, styles.blue]}>
          <Image
            source={require("../../../assets/image/productivity/matrixicon2.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Schedule a time to do it</Text>
        </View>

        {/* Bottom Left - Delegate It */}
        <View style={[styles.quadrant, styles.red]}>
          <Image
            source={require("../../../assets/image/productivity/matrixicon3.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Delegate it</Text>
          <Text style={styles.subtitle}>Who can do it for you?</Text>
        </View>

        {/* Bottom Right - Eliminate It */}
        <View style={[styles.quadrant, styles.orange]}>
          <Image
            source={require("../../../assets/image/productivity/matrixicon4.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Eliminate it</Text>
        </View>
      </View>
      <View style={{ position: "absolute", top: -50, left: -10 }}>
        <CartesianCoordinates
          translateX={17}
          translateY={-123}
          scale={1.5}
          xStart={2}
          xEnd={300}
          yStart={430}
          yEnd={150}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#b6eb7a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: 250,
    width: 250,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    aspectRatio: 1,
  },
  quadrant: {
    width: "45%",
    height: "45%",
    margin: "1%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  purple: { backgroundColor: "#b288eb" },
  blue: { backgroundColor: "#74e0e6" },
  red: { backgroundColor: "#e86c5e" },
  orange: { backgroundColor: "#f7b733" },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginTop: 5,
  },
  matrixContainer: {
    flex: 1,
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignSelf: "flex-start", // Moves the container to the left
    marginTop: -20, // Moves it up by 20 pixels
  }
});

export default Matrix;
