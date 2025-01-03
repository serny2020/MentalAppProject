// emotionData.js
// import Emotion from "../models/check-in/emotion";
//   const INNER_CATEGORIES = Array.from({ length: 6 }, (_, index) => ({
//     id: index + 1,
//     label: `inner ${index + 1}`,
//     color: `hsl(${(index * 60) % 360}, 70%, 75%)`, // Generate colors dynamically
//   }));
  
//   const MIDDLE_CATEGORIES = Array.from({ length: 12 }, (_, index) => ({
//     id: index + 7,
//     label: `middle ${index + 1}`,
//     color: `hsl(${(index * 30) % 360}, 70%, 75%)`,
//   }));
  
//   const OUTER_CATEGORIES = Array.from({ length: 36 }, (_, index) => ({
//     id: index + 18,
//     label: `outer ${index + 1}`,
//     color: `hsl(${(index * 20) % 360}, 70%, 80%)`,
//   }));
  
//   // Mapping the new categories to the additionalEmotions structure, starting id from 18
//   const additionalEmotions = [
//     ...INNER_CATEGORIES.map((item, index) => ({
//       id: index + 18, // Start id from 18
//       color: item.color,
//       label: `${index + 18}`, // Reflect new id in the label
//     })),
//     ...MIDDLE_CATEGORIES.map((item, index) => ({
//       id: index + 18 + INNER_CATEGORIES.length, // Offset by INNER_CATEGORIES length
//       color: item.color,
//       label: `${index + 18 + INNER_CATEGORIES.length}`, // Reflect new id in the label
//     })),
//     ...OUTER_CATEGORIES.map((item, index) => ({
//       id: index + 18 + INNER_CATEGORIES.length + MIDDLE_CATEGORIES.length , // Offset by INNER and MIDDLE lengths
//       color: item.color,
//       label: `${index + 18 + INNER_CATEGORIES.length + MIDDLE_CATEGORIES.length + index}`, // Reflect new id in the label
//     })),
//   ];
// export default additionalEmotions;


// Define the 6 distinct colors for the inner layer
// const COLORS = Array.from({ length: 6 }, (_, index) => `hsl(${index * 60}, 70%, 75%)`);

// // Define INNER, MIDDLE, and OUTER categories
// const INNER_CATEGORIES = Array.from({ length: 6 }, (_, index) => ({
//   id: index + 18, // Start IDs from 18
//   label: `inner ${index + 1}`,
//   color: COLORS[index], // Assign one of the 6 distinct colors
// }));

// const MIDDLE_CATEGORIES = Array.from({ length: 12 }, (_, index) => ({
//   id: index + 24, // Continue IDs after INNER_CATEGORIES
//   label: `middle ${index + 1}`,
//   color: COLORS[index % 6], // Cycle through the 6 colors
// }));

// const OUTER_CATEGORIES = Array.from({ length: 36 }, (_, index) => ({
//   id: index + 36, // Continue IDs after MIDDLE_CATEGORIES
//   label: `outer ${index + 1}`,
//   color: COLORS[index % 6], // Cycle through the 6 colors
// }));

// // Combine all categories into a single flat list
// const additionalEmotions = [
//   ...INNER_CATEGORIES,
//   ...MIDDLE_CATEGORIES,
//   ...OUTER_CATEGORIES,
// ];

// export default additionalEmotions;



// import Emotion from "../models/check-in/emotion";

// Step 1: Define the 6 inner layer emotions
// const innerLayer = [
//   new Emotion(18, "Anger", "hsl(0, 70%, 75%)"),
//   new Emotion(19, "Joy", "hsl(60, 70%, 75%)"),
//   new Emotion(20, "Sadness", "hsl(120, 70%, 75%)"),
//   new Emotion(21, "Fear", "hsl(180, 70%, 75%)"),
//   new Emotion(22, "Disgust", "hsl(240, 70%, 75%)"),
//   new Emotion(23, "Surprise", "hsl(300, 70%, 75%)"),
// ];

// // Step 3: Helper to create middle and outer layer emotions
// const createMiddleAndOuterLayers = (innerLayer, totalMiddle, totalOuter) => {
//   const middleLayer = [];
//   const outerLayer = [];
//   let idCounter = 24;

//   // Distribute emotions proportionally
//   const middlePerInner = Math.floor(totalMiddle / innerLayer.length); // 2 per sector
//   const outerPerInner = Math.floor(totalOuter / innerLayer.length); // 6 per sector

//   innerLayer.forEach((sector) => {
//     // Add middle-layer emotions
//     for (let i = 0; i < middlePerInner; i++) {
//       middleLayer.push(
//         new Emotion(idCounter++, `${sector.label} Middle ${i + 1}`, sector.color)
//       );
//     }

//     // Add outer-layer emotions
//     for (let i = 0; i < outerPerInner; i++) {
//       outerLayer.push(
//         new Emotion(idCounter++, `${sector.label} Outer ${i + 1}`, sector.color)
//       );
//     }
//   });

//   return { middleLayer, outerLayer };
// };

// // Step 4: Generate middle and outer layers
// const { middleLayer, outerLayer } = createMiddleAndOuterLayers(innerLayer, 12, 36);

// // Combine all layers into a flat list
// const additionalEmotions = [...innerLayer, ...middleLayer, ...outerLayer];

// export default additionalEmotions;



const COLORS = Array.from({ length: 6 }, (_, index) => `hsl(${(index * 60) % 360}, 70%, 75%)`);

// Define INNER categories
const INNER_CATEGORIES = Array.from({ length: 6 }, (_, index) => ({
  id: index + 18, // IDs 18–23
  label: `${index + 18}`,
  color: COLORS[index], // Assign one of the 6 distinct colors
}));

// Define MIDDLE categories
const MIDDLE_CATEGORIES = INNER_CATEGORIES.flatMap((inner, innerIndex) =>
  Array.from({ length: 2 }, (_, middleIndex) => ({
    id: 24 + innerIndex * 2 + middleIndex, // IDs 24–35
    label: `${24 + innerIndex * 2 + middleIndex}`,
    color: inner.color, // Inherit color from inner layer
  }))
);

// Define OUTER categories
const OUTER_CATEGORIES = INNER_CATEGORIES.flatMap((inner, innerIndex) =>
  Array.from({ length: 6 }, (_, outerIndex) => ({
    id: 36 + innerIndex * 6 + outerIndex, // IDs 36–71
    label: `${36 + innerIndex * 6 + outerIndex}`,
    color: inner.color, // Inherit color from inner layer
  }))
);

// Combine all categories into a single flat list
const additionalEmotions = [
  ...INNER_CATEGORIES,
  ...MIDDLE_CATEGORIES,
  ...OUTER_CATEGORIES,
];

export default additionalEmotions;
