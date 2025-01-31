// import React from "react";
// import { View } from "react-native";
// import Svg, { Line, Polygon, Text } from "react-native-svg";

// const CartesianCoordinates = ({ translateX = 0, translateY = 0, scale = 1.5, xStart = 5, xEnd = 325, yStart = 550, yEnd = 20 }) => {
//   const xAxisArrowOffsetX = 15;
//   const xAxisArrowOffsetY = 5;
//   const yAxisArrowOffsetY = -15;
//   const yAxisArrowOffsetX = 5;

//   const xLineOffset = 10;
//   const yLineOffset = -40;

//   // const xStart = 5;
//   // const xEnd = 325;
//   // const yStart = 550;
//   // const yEnd = 20;

//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           transform: [{ translateX: translateX }, { translateY: translateY }],
//         },
//       ]}
//     >
//       <Svg height={550 * scale} width={350 * scale}>
//         {/* X-axis */}
//         <Line
//           x1={xStart}
//           y1={270 + xLineOffset}
//           x2={xEnd}
//           y2={270 + xLineOffset}
//           stroke="black"
//           strokeWidth="3"
//         />
//         <Polygon
//           points={
//          `${xEnd },
//           ${270 + xLineOffset + xAxisArrowOffsetY} 

//           ${xEnd + xAxisArrowOffsetX},
//           ${270 + xLineOffset} 
          
//           ${xEnd},
//           ${270 + xLineOffset - xAxisArrowOffsetY }`}
//           fill="black"
//         />

//         {/* Y-axis */}
//         <Line
//           x1={200 + yLineOffset}
//           y1={yStart}
//           x2={200 + yLineOffset}
//           y2={yEnd}
//           stroke="black"
//           strokeWidth="3"
//         />
//         <Polygon
//           points={
//         `${200 + yLineOffset - yAxisArrowOffsetX},
//          ${yEnd } 

//          ${200 + yLineOffset },
//          ${yEnd + yAxisArrowOffsetY} 

//          ${200 + yLineOffset + yAxisArrowOffsetX},
//          ${yEnd}`}
//           fill="black"
//         />

//         {/* X-axis Labels */}
//         <Text
//           x={xStart}
//           y={270 + xLineOffset - 9}
//           fontSize="16"
//           fill="black"
//           fontWeight="bold"
//         >
//           Not Urgent
//         </Text>

//         <Text 
//            x={xEnd - 20} 
//            y={270 + xLineOffset - 9}
//            fontSize="16" 
//            fill="black" 
//            fontWeight="bold">
//           Urgent
//         </Text>

//         {/* Y-axis Labels */}
//         <Text 
//           x={200 + yLineOffset + 10} 
//           y={yStart} 
//           fontSize="16" 
//           fill="black" 
//           fontWeight="bold">
//           Not Important
//         </Text>
//         <Text 
//           x={200 + yLineOffset + 10 }
//           y={yEnd} 
//           fontSize="16" 
//           fill="black" 
//           fontWeight="bold">
//           Important
//         </Text>
//       </Svg>
//     </View>
//   );
// };


// const styles = {
//   container: {
//     position: "absolute",
//     width: 300, // Updated size
//     height: 300, // Updated size
//     backgroundColor: "#ADD8E6", // Light blue background for debugging
//     top: 100,  // Moves it 100 units from the top of the screen
//     left: 50,  // Moves it 50 units from the left
    
//   },
// };

import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Line, Polygon, Text, G } from "react-native-svg";

const CartesianCoordinates = ({ translateX = 0, translateY = 0, scale = 1.5, xStart = 5, xEnd = 325, yStart = 550, yEnd = 20 }) => {
  const xAxisArrowOffsetX = 15;
  const xAxisArrowOffsetY = 5;
  const yAxisArrowOffsetY = -15;
  const yAxisArrowOffsetX = 5;

  const xLineOffset = 10;
  const yLineOffset = -40;

  return (
    <View style={styles.container}>
      <Svg height={550 * scale} width={350 * scale}>
        {/* Grouping everything in a <G> to apply independent transformations */}
        <G transform={`translate(${translateX}, ${translateY})`}>
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
            points={`${xEnd},${270 + xLineOffset + xAxisArrowOffsetY} 
                     ${xEnd + xAxisArrowOffsetX},${270 + xLineOffset} 
                     ${xEnd},${270 + xLineOffset - xAxisArrowOffsetY}`}
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
            points={`${200 + yLineOffset - yAxisArrowOffsetX},${yEnd} 
                     ${200 + yLineOffset},${yEnd + yAxisArrowOffsetY} 
                     ${200 + yLineOffset + yAxisArrowOffsetX},${yEnd}`}
            fill="black"
          />

          {/* X-axis Labels */}
          <Text x={xStart} y={270 + xLineOffset - 9} fontSize="16" fill="black" fontWeight="bold">
            Not Urgent
          </Text>
          <Text x={xEnd - 20} y={270 + xLineOffset - 9} fontSize="16" fill="black" fontWeight="bold">
            Urgent
          </Text>

          {/* Y-axis Labels */}
          <Text x={200 + yLineOffset + 10} y={yStart} fontSize="16" fill="black" fontWeight="bold">
            Not Important
          </Text>
          <Text x={200 + yLineOffset + 10} y={yEnd} fontSize="16" fill="black" fontWeight="bold">
            Important
          </Text>
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 300,
    height: 300,
    // backgroundColor: "#ADD8E6",
  },
});


export default CartesianCoordinates;
