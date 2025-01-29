import React from "react";
import { View } from "react-native";
import Svg, { Line, Polygon, Text } from "react-native-svg";

const CartesianCoordinates = ({ translateX = 0, translateY = 0 }) => {
  const scaleFactor = 1.5;
  const xAxisArrowOffsetX = 15;
  const xAxisArrowOffsetY = 5;
  const yAxisArrowOffsetY = -15;
  const yAxisArrowOffsetX = 5;

  const xLineOffset = 10;
  const yLineOffset = -40;

  const xStart = 5;
  const xEnd = 325;
  const yStart = 550;
  const yEnd = 20;

  return (
    <View
      style={[
        styles.container,
        {
          transform: [{ translateX: translateX }, { translateY: translateY }],
        },
      ]}
    >
      <Svg height={550 * scaleFactor} width={350 * scaleFactor}>
        {/* X-axis */}
        <Line
          x1={xStart}
          y1={270 + xLineOffset}
          x2={xEnd}
          y2={270 + xLineOffset}
          stroke="black"
          strokeWidth="3"
        />
        <Polygon
          points={
         `${xEnd },
          ${270 + xLineOffset + xAxisArrowOffsetY} 

          ${xEnd + xAxisArrowOffsetX},
          ${270 + xLineOffset} 
          
          ${xEnd},
          ${270 + xLineOffset - xAxisArrowOffsetY }`}
          fill="black"
        />

        {/* Y-axis */}
        <Line
          x1={200 + yLineOffset}
          y1={yStart}
          x2={200 + yLineOffset}
          y2={yEnd}
          stroke="black"
          strokeWidth="3"
        />
        <Polygon
          points={
        `${200 + yLineOffset - yAxisArrowOffsetX},
         ${yEnd } 

         ${200 + yLineOffset },
         ${yEnd + yAxisArrowOffsetY} 

         ${200 + yLineOffset + yAxisArrowOffsetX},
         ${yEnd}`}
          fill="black"
        />

        {/* X-axis Labels */}
        <Text
          x={xStart}
          y={270 + xLineOffset - 9}
          fontSize="16"
          fill="black"
          fontWeight="bold"
        >
          Not Urgent
        </Text>

        <Text 
           x={xEnd - 20} 
           y={270 + xLineOffset - 9}
           fontSize="16" 
           fill="black" 
           fontWeight="bold">
          Urgent
        </Text>

        {/* Y-axis Labels */}
        <Text 
          x={200 + yLineOffset + 10} 
          y={yStart} 
          fontSize="16" 
          fill="black" 
          fontWeight="bold">
          Not Important
        </Text>
        <Text 
          x={200 + yLineOffset + 10 }
          y={yEnd} 
          fontSize="16" 
          fill="black" 
          fontWeight="bold">
          Important
        </Text>
      </Svg>
    </View>
  );
};

const styles = {
  container: {
    position: "absolute",
    width: 350, // Updated size
    height: 550, // Updated size
    // backgroundColor: "#ADD8E6", // Light blue background
  },
};

export default CartesianCoordinates;
