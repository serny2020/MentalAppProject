import Category from "../models/dreamboard/category";
import Dream from "../models/dreamboard/dream";


export const CATEGORIES = [
    new Category('c1', 'Houses', '#ff5733'), // Orange-red
    new Category('c2', 'Cars', '#33c4ff'),   // Light blue
    new Category('c3', 'Pets', '#ff33a1'),   // Pink
    new Category('c4', 'Sports', '#33ff57'), // Green
    new Category('c5', 'Travels', '#ffa733'), // Amber
    new Category('c6', 'Bucket Lists', '#8a33ff') // Purple
  ];
  
  export const DREAMS = [
    new Dream(
      'd1',
      ['c1'], // Category: Houses
      'Dream Villa',
      'Own a beautiful villa with a garden and pool.',
      '../assets/image/dream/houses/house1.png', // Relative path for house image
      ['Save money', 'Research locations', 'Work with architects', 'Build the villa'],
      'High',
      false
    ),
    new Dream(
      'd2',
      ['c2'], // Category: Cars
      'Own a Sports Car',
      'Drive a high-performance sports car like a Ferrari or Lamborghini.',
      '../assets/image/dream/cars/car1.png', // Relative path for car image
      ['Save money', 'Research car models', 'Purchase the car'],
      'Medium',
      false
    ),
    new Dream(
      'd3',
      ['c3'], // Category: Pets
      'Adopt a Labrador Retriever',
      'Bring home a loving Labrador Retriever and build a bond for life.',
      '../assets/image/dream/pets/pet1.png', // Relative path for pet image
      ['Visit shelters', 'Prepare the home', 'Adopt the dog', 'Train and bond'],
      'Medium',
      false
    ),
    new Dream(
      'd4',
      ['c4'], // Category: Sports
      'Play Tennis at Wimbledon',
      'Participate in a tennis match at the iconic Wimbledon court.',
      '../assets/image/dream/sports/sport1.png', // Relative path for sports image
      ['Train regularly', 'Enter tournaments', 'Qualify for Wimbledon'],
      'High',
      false
    ),
    new Dream(
      'd5',
      ['c5'], // Category: Travel-Bucket-List
      'Visit Santorini, Greece',
      'Explore the stunning views of Santorini and its iconic blue domes.',
      '../assets/image/dream/travel-bucket-list/travel1.png', // Relative path for travel image
      ['Plan a trip', 'Book flights and hotels', 'Enjoy the destination'],
      'High',
      false
    )
  ];
    