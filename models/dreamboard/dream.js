class Dream {
  constructor(
    id, // string
    categoryId, // string
    title, // string
    description, // string
    image, // require(...) or string (local or remote URL)
    steps, // array of strings
    priority, // string
    isAchieved // boolean
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.description = description;
    this.image = image;
    this.steps = steps;
    this.priority = priority;
    this.isAchieved = isAchieved;
  }
}

  
  export default Dream;
  