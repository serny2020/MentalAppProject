import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { scaleLinear } from "d3-scale";

// Sample dataset for the heatmap
const sampleData = [
  [1, 3, 2, 4, 5, 2, 4, 5, 2, 2, 6, 8],
  [5, 4, 3, 2, 1, 2, 4, 5, 2, 2, 6, 8],
  [2, 3, 4, 5, 1, 2, 4, 5, 2, 2, 6, 8],
  [1, 1, 2, 3, 4, 2, 4, 5, 2, 2, 6, 8],
  [3, 2, 1, 0, 0, 2, 4, 5, 2, 2, 6, 0],
  [3, 2, 1, 0, 0, 2, 4, 5, 2, 2, 6, 0],
  [3, 2, 1, 0, 0, 2, 4, 5, 2, 2, 6, 0],
];

const HeatMap = ({
  data = sampleData,
  colors = ["#e0f7fa", "#00796b"],
  cellSize = 30,
  gap = 5,
}) => {
  const rows = data.length;
  const cols = data[0].length;

  // Flatten data to get min and max values for scaling
  const flatData = data.flat();
  const colorScale = scaleLinear()
    .domain([Math.min(...flatData), Math.max(...flatData)])
    .range(colors);

  return (
    <View style={styles.container}>
      {/* Top Labels */}
      <View style={styles.topLabels}>
        <View style={styles.topLabelItem}>
          <Text style={styles.labelValue}>5</Text>
          <Text style={styles.labelText}>MEMO</Text>
        </View>
        <View style={styles.topLabelItem}>
          <Text style={styles.labelValue}>3</Text>
          <Text style={styles.labelText}>HAPPINESS JOURNAL</Text>
        </View>
        <View style={styles.topLabelItem}>
          <Text style={styles.labelValue}>2</Text>
          <Text style={styles.labelText}>MOOD JOURNAL</Text>
        </View>
        <View style={styles.topLabelItem}>
          <Text style={styles.labelValue}>4</Text>
          <Text style={styles.labelText}>DAY</Text>
        </View>
      </View>

      {/* HeatMap Grid */}
      <Svg height={(cellSize + gap) * rows} width={(cellSize + gap) * cols}>
        {data.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <Rect
              key={`${rowIndex}-${colIndex}`}
              x={colIndex * (cellSize + gap)}
              y={rowIndex * (cellSize + gap)}
              width={cellSize}
              height={cellSize}
              fill={colorScale(value)}
            />
          ))
        )}
      </Svg>

      {/* Bottom Labels */}
      <View style={styles.bottomLabels}>
        <Text style={styles.bottomLabelText}>DECEMBER</Text>
        <Text style={styles.bottomLabelText}>JANUARY</Text>
        <Text style={styles.bottomLabelText}>FEBRUARY</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
  },
  topLabels: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    width: "100%",
  },
  topLabelItem: {
    alignItems: "center",
  },
  labelValue: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  labelText: {
    fontSize: 9,
    color: "#666",
  },
  bottomLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  bottomLabelText: {
    fontSize: 10,
    color: "#666",
  },
});

export default HeatMap;
