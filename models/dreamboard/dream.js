class Dream {
    constructor(
      id,
      categories,
      title,
      description,
      imageUrl,
      steps,
      priority,
      isAchieved
    ) {
      this.id = id; // Unique identifier for the dream
      this.categories = categories; // Categories this dream belongs to (e.g., "Travel", "Career")
      this.title = title; // Title of the dream
      this.description = description; // Detailed description of the dream
      this.imageUrl = imageUrl; // URL to an image representing the dream
      this.steps = steps; // List of actionable steps to achieve the dream
      this.priority = priority; // Priority level (e.g., "High", "Medium", "Low")
      this.isAchieved = isAchieved; // Boolean flag to indicate if the dream has been achieved
    }
  }
  
  export default Dream;
  