import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Text as SvgText, G } from "react-native-svg";

const CircularCategories = () => {
    const center = 200; // Center of the SVG canvas
    const layerRadii = [65, 120, 185]; // Inner, middle, and outer radii
  
    // Category data for all three layers
    const INNER_CATEGORIES = Array.from({ length: 6 }, (_, index) => ({
        id: index + 1,
        title: ["Happy", "Sad", "Angry", "Fearful", "Surprised", "Disgusted"][index],
        color: `hsl(${(index * 60) % 360}, 70%, 75%)`, // Generate colors dynamically
      }));
  
    const MIDDLE_CATEGORIES = Array.from({ length: 12 }, (_, index) => ({
      id: index + 7,
      title: `Emotion ${index + 1}`,
      color: `hsl(${(index * 30) % 360}, 70%, 75%)`,
    }));
  
    const OUTER_CATEGORIES = Array.from({ length: 34 }, (_, index) => ({
      id: index + 19,
      title: `Category ${index + 1}`,
      color: `hsl(${(index * 20) % 360}, 70%, 80%)`,
    }));
  
    const createDonutSlicePath = (innerR, outerR, startAngle, endAngle) => {
      const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
  
      // Outer arc
      const outerStartX = center + outerR * Math.cos(startAngle);
      const outerStartY = center + outerR * Math.sin(startAngle);
  
      const outerEndX = center + outerR * Math.cos(endAngle);
      const outerEndY = center + outerR * Math.sin(endAngle);
  
      // Inner arc (reverse direction)
      const innerStartX = center + innerR * Math.cos(endAngle);
      const innerStartY = center + innerR * Math.sin(endAngle);
  
      const innerEndX = center + innerR * Math.cos(startAngle);
      const innerEndY = center + innerR * Math.sin(startAngle);
  
      return `M ${outerStartX},${outerStartY}
              A ${outerR},${outerR} 0 ${largeArcFlag},1 ${outerEndX},${outerEndY}
              L ${innerStartX},${innerStartY}
              A ${innerR},${innerR} 0 ${largeArcFlag},0 ${innerEndX},${innerEndY}
              Z`;
    };
  
    const renderLayer = (categories, innerR, outerR, cumulativeAngle, fontSize, fixedSectors) => {
        const sectorCount = fixedSectors || categories.length; // Total number of slices
      
        return categories.map((category) => {
          const sliceAngle = (2 * Math.PI) / sectorCount; // Angle of each slice
          const startAngle = cumulativeAngle.current; // Starting angle
          const endAngle = cumulativeAngle.current + sliceAngle; // Ending angle
          cumulativeAngle.current += sliceAngle; // Increment cumulative angle
      
          const path = createDonutSlicePath(innerR, outerR, startAngle, endAngle);
      
          // Calculate the midpoint angle of the slice
          let midpointAngle = (startAngle + endAngle) / 2;
      
          // Normalize the midpoint angle to [0, 2π]
          midpointAngle = midpointAngle % (2 * Math.PI);
          if (midpointAngle < 0) {
            midpointAngle += 2 * Math.PI;
          }
      
          // Calculate label position
          const labelRadius = (innerR + outerR) / 2; // Position at the middle of the slice
          const labelX = center + labelRadius * Math.cos(midpointAngle);
          const labelY = center + labelRadius * Math.sin(midpointAngle);
      
          // Determine if the label is on the left or right side
          const isLeftSide = midpointAngle > Math.PI / 2 && midpointAngle < (3 * Math.PI) / 2;
          // Calculate rotation angle for the text
          let rotationAngle = (midpointAngle * 180) / Math.PI; // Convert radians to degrees
          
      
          // Adjust rotation for labels on the left side
          if (isLeftSide) {
            rotationAngle -= 180; // Flip the text for readability
          }
      
          return (
            <G
              key={category.id}
              onPress={() => alert(`You clicked ${category.title}`)}
            >
              {/* Render Pie Slice */}
              <Path d={path} fill={category.color} />
      
              {/* Render Label with Adjusted Rotation */}
              <SvgText
                x={labelX}
                y={labelY}
                fontSize={fontSize}
                fill="black"
                textAnchor="middle"
                transform={`rotate(${rotationAngle}, ${labelX}, ${labelY})`} // Rotate text around its position
              >
                {category.title}
              </SvgText>
            </G>
          );
        });
      };
      
    // Angle trackers for each layer
    const innerCumulativeAngle = React.useRef(0);
    const middleCumulativeAngle = React.useRef(0);
    const outerCumulativeAngle = React.useRef(0);
  
    return (
      <View style={styles.container}>
        <Svg height={500} width={500}>
          {/* Inner Layer */}
          {renderLayer(
            INNER_CATEGORIES,
            0,
            layerRadii[0],
            innerCumulativeAngle,
            9
          )}
  
          {/* Middle Layer with 12 sectors */}
          {renderLayer(
            MIDDLE_CATEGORIES,
            layerRadii[0],
            layerRadii[1],
            middleCumulativeAngle,
            9,
            12
          )}
  
          {/* Outer Layer with 18 sectors */}
          {renderLayer(
            OUTER_CATEGORIES,
            layerRadii[1],
            layerRadii[2],
            outerCumulativeAngle,
            8,
            34
          )}
        </Svg>
      </View>
    );
  };
  
  export default CircularCategories;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 100, // Adjust as needed to shift the circle
    },
  });
  
