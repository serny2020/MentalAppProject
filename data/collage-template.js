const templates = [
    [
      { x: 0, y: 0, width: 50, height: 100, image: null }, // Split vertically
      { x: 50, y: 0, width: 50, height: 100, image: null },
    ],
    [
      { x: 0, y: 0, width: 100, height: 50, image: null }, // Top half
      { x: 0, y: 50, width: 50, height: 50, image: null }, // Bottom left
      { x: 50, y: 50, width: 50, height: 50, image: null }, // Bottom right
    ],
    [
      { x: 0, y: 0, width: 50, height: 50, image: null }, // Grid
      { x: 50, y: 0, width: 50, height: 50, image: null },
      { x: 0, y: 50, width: 50, height: 50, image: null },
      { x: 50, y: 50, width: 50, height: 50, image: null },
    ],
    [
      { x: 0, y: 0, width: 100, height: 33.33, image: null }, // Three horizontal rows
      { x: 0, y: 33.33, width: 100, height: 33.33, image: null },
      { x: 0, y: 66.66, width: 100, height: 33.33, image: null },
    ],
    [
      { x: 0, y: 0, width: 33.33, height: 100, image: null }, // Three vertical columns
      { x: 33.33, y: 0, width: 33.33, height: 100, image: null },
      { x: 66.66, y: 0, width: 33.33, height: 100, image: null },
    ],
    [
      { x: 0, y: 0, width: 66.66, height: 50, image: null }, // L-shaped layout
      { x: 66.66, y: 0, width: 33.33, height: 50, image: null },
      { x: 0, y: 50, width: 100, height: 50, image: null },
    ],
    [
      { x: 0, y: 0, width: 50, height: 50, image: null }, // Large block + small blocks
      { x: 50, y: 0, width: 50, height: 50, image: null },
      { x: 0, y: 50, width: 50, height: 50, image: null },
      { x: 50, y: 50, width: 25, height: 50, image: null },
      { x: 75, y: 50, width: 25, height: 50, image: null },
    ],
    [
      { x: 0, y: 0, width: 100, height: 33.33, image: null }, // Two large blocks with one below
      { x: 0, y: 33.33, width: 50, height: 66.66, image: null },
      { x: 50, y: 33.33, width: 50, height: 66.66, image: null },
    ],
    [
      { x: 0, y: 0, width: 66.66, height: 100, image: null }, // Diagonal split
      { x: 66.66, y: 0, width: 33.33, height: 33.33, image: null },
      { x: 66.66, y: 33.33, width: 33.33, height: 33.33, image: null },
      { x: 66.66, y: 66.66, width: 33.33, height: 33.33, image: null },
    ],
    [
      { x: 0, y: 0, width: 100, height: 25, image: null }, // 4 horizontal rows with equal height
      { x: 0, y: 25, width: 100, height: 25, image: null },
      { x: 0, y: 50, width: 100, height: 25, image: null },
      { x: 0, y: 75, width: 100, height: 25, image: null },
    ],
  ];
  
  export default templates;
  