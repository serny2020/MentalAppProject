import React, {useState}from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Svg, Path, G, Text as SvgText } from "react-native-svg";
import CategoryGridTile from "../../components/dreamboard/CategoryGridTile";

const CATEGORIES = [
  { id: "c1", title: "自我梦想", color: "#f8b3c1" },
  { id: "c2", title: "学习/职业发展", color: "#b3e2f8" },
  { id: "c3", title: "财务状况", color: "#fce9a5" },
  { id: "c4", title: "身体健康", color: "#ffdab9" },
  { id: "c5", title: "休闲计划", color: "#ffeeba" },
  { id: "c6", title: "家人关系", color: "#c9b3f8" },
  { id: "c7", title: "人际关系", color: "#d1b3f8" },
  { id: "c8", title: "个人成长", color: "#f7c6d6" },
];

const CircularCategories = ({ navigation }) => {
  const radius = 150; // Radius of the pie chart
  const center = 150; // Center point of the pie chart

  const createPieSlicePath = (startAngle, endAngle) => {
    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

    const startX = center + radius * Math.cos(startAngle);
    const startY = center + radius * Math.sin(startAngle);

    const endX = center + radius * Math.cos(endAngle);
    const endY = center + radius * Math.sin(endAngle);

    return `M ${center},${center} L ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;
  };

  let cumulativeAngle = 0;

  const handleSlicePress = (category) => {
    navigation.navigate("DreamOverview", {
      categoryId: category.id,
      categoryTitle: category.title,
    });
  };

  return (
    <View style={styles.container}>
      <Svg height={300} width={300}>
        {CATEGORIES.map((category) => {
          const sliceAngle = (2 * Math.PI) / CATEGORIES.length; // Equal slice for each category
          const startAngle = cumulativeAngle;
          const endAngle = cumulativeAngle + sliceAngle;
          cumulativeAngle += sliceAngle;

          // Create the path for each pie slice
          const path = createPieSlicePath(startAngle, endAngle);

          // Calculate label position
          const labelX =
            center + (radius / 1.5) * Math.cos((startAngle + endAngle) / 2);
          const labelY =
            center + (radius / 1.5) * Math.sin((startAngle + endAngle) / 2);

          return (
            <G
              key={category.id}
              onPress={() => handleSlicePress(category)} // Add onPress handler
            >
              {/* Render Pie Slice */}
              <Path d={path} fill={category.color} />

              {/* Render Label */}
              <SvgText
                x={labelX}
                y={labelY}
                fontSize={10}
                fill="black"
                textAnchor="middle"
              >
                {category.title}
              </SvgText>
            </G>
          );
        })}
      </Svg>
    </View>
  );
};

export default CircularCategories;


// const CircularCategories = ({ navigation }) => {
//     const [selectedCategory, setSelectedCategory] = useState(null);
  
//     const radius = 150; // Radius of the pie chart
//     const center = 150; // Center point of the pie chart
  
//     const createPieSlicePath = (startAngle, endAngle) => {
//       const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
  
//       const startX = center + radius * Math.cos(startAngle);
//       const startY = center + radius * Math.sin(startAngle);
  
//       const endX = center + radius * Math.cos(endAngle);
//       const endY = center + radius * Math.sin(endAngle);
  
//       return `M ${center},${center} L ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;
//     };
  
//     const handleSlicePress = (category) => {
//       setSelectedCategory(category); // Update state with the selected category
//     };
  
//     let cumulativeAngle = 0;
  
//     return (
//       <View style={styles.container}>
//         <Svg height={300} width={300}>
//           {CATEGORIES.map((category) => {
//             const sliceAngle = (2 * Math.PI) / CATEGORIES.length; // Equal slice for each category
//             const startAngle = cumulativeAngle;
//             const endAngle = cumulativeAngle + sliceAngle;
//             cumulativeAngle += sliceAngle;
  
//             // Create the path for each pie slice
//             const path = createPieSlicePath(startAngle, endAngle);
  
//             return (
//               <G
//                 key={category.id}
//                 onPress={() => handleSlicePress(category)} // Add onPress handler
//               >
//                 {/* Render Pie Slice */}
//                 <Path d={path} fill={category.color} />
//               </G>
//             );
//           })}
//         </Svg>
  
//         {/* Conditionally Render CategoryGridTile */}
//         {selectedCategory && (
//           <View style={styles.gridTileContainer}>
//             <CategoryGridTile
//               title={selectedCategory.title}
//               color={selectedCategory.color}
//               onPress={() => {
//                 navigation.navigate("DreamOverview", {
//                   categoryId: selectedCategory.id,
//                   categoryTitle: selectedCategory.title,
//                 });
//               }}
//             />
//           </View>
//         )}
//       </View>
//     );
//   };
  
//   export default CircularCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  gridTileContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
