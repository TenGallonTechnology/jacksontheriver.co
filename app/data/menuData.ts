export interface MenuItem {
  name: string
  price: number | string
  description: string
}

export interface MenuCategory {
  category: string
  items: MenuItem[]
  comment: string | null
}

export const menuNotes: string[] = [
  'All plates are served with hushpuppies and 2 sides of your choice.',
  'When ordering from our grilled menu, there may be a significant wait time for these freshly cooked to order items.',
  'Add $4.99 to any meal consisting of Gator, Scallop, or Oyster.',
  '20% gratuity is added to tickets for parties of 8 or more. Anything above 20% is greatly appreciated.',
  '$2.50 charge for (adult) plate sharing.',
  '$0.75 charge for each take-out order (per plate).'
]

export const menuData: MenuCategory[] = [
  {
    category: 'Beverages',
    items: [
      { name: 'Sweet Tea', price: 2.99, description: '' },
      { name: 'Unsweet Tea', price: 2.99, description: '' },
      { name: 'Lemonade', price: 2.99, description: '' },
      { name: 'Coffee', price: 2.99, description: '' },
      { name: 'Coke', price: 2.99, description: '' },
      { name: 'Diet Coke', price: 2.99, description: '' },
      { name: 'Coke Zero', price: 2.99, description: '' },
      { name: 'Sprite', price: 2.99, description: '' },
      { name: 'Dr. Pepper', price: 2.99, description: '' },
      { name: 'Water', price: 'No Charge', description: '' }
    ],
    comment: null
  },
  {
    category: 'Appetizers',
    items: [
      { name: 'Blooming Onion', price: 11.99, description: '' },
      { name: 'Gator Bites', price: 14.99, description: '' },
      { name: 'Mozzarella Sticks (6)', price: 8.99, description: '' },
      { name: 'Calamari', price: 8.99, description: '' },
      { name: 'Dinner Rolls (2)', price: 3.49, description: '' },
      { name: '8oz Bowl Sweet or Dill Pickles', price: 0.85, description: '' },
      { name: 'Sweet Onion Slices', price: 0.85, description: '' },
      { name: 'Fried Dill or Sweet Pickles', price: 8.99, description: '' },
      { name: 'Fried Banana Peppers', price: 8.99, description: '' },
      { name: 'Fried Mushrooms (12)', price: 8.99, description: '' },
      { name: 'Fried Green Tomatoes (6)', price: 8.99, description: '' }
    ],
    comment: null
  },
  {
    category: 'Sides',
    items: [
      { name: 'Side House Salad', price: 4.99, description: '' },
      { name: "Jack's Homemade Slaw", price: 3.49, description: '' },
      { name: 'Plain or Cheese Grits', price: 3.49, description: '' },
      { name: 'Potato Thins', price: 3.49, description: '' },
      { name: 'French Fries', price: 3.49, description: '' },
      { name: 'Sweet Potato Fries', price: 3.49, description: '' },
      { name: 'Baked Potato', price: 3.49, description: '' },
      { name: 'Loaded Baked Potato', price: 3.99, description: '' },
      { name: 'Baked Sweet Potato', price: 3.49, description: '' },
      { name: 'Green Beans', price: 3.49, description: '' },
      { name: 'Fried Okra', price: 3.49, description: '' },
      { name: 'Hushpuppies (4)', price: 3.49, description: '' }
    ],
    comment: 'Try these delicious side items for an appetizer or just add a little something extra with your meal.'
  },
  {
    category: 'Fried Catfish',
    items: [
      { name: 'Small Plate (2)', price: 14.99, description: '' },
      { name: 'Regular Plate (3)', price: 16.99, description: '' },
      { name: 'Large Plate (4)', price: 18.99, description: '' },
      { name: 'Hungry Man Plate (6)', price: 24.99, description: '' }
    ],
    comment: 'Please specify whole fish or fillet.'
  },
  {
    category: 'Fried Mullet',
    items: [
      { name: 'Small Plate (2)', price: 13.99, description: '' },
      { name: 'Regular Plate (3)', price: 14.99, description: '' },
      { name: 'Large Plate (4)', price: 15.99, description: '' },
      { name: 'Hungry Man Plate (6)', price: 16.99, description: '' }
    ],
    comment: 'When available.'
  },
  {
    category: 'Fried Tilapia',
    items: [
      { name: 'Small Plate (2)', price: 13.99, description: '' },
      { name: 'Regular Plate (3)', price: 14.99, description: '' },
      { name: 'Large Plate (4)', price: 15.99, description: '' },
      { name: 'Hungry Man Plate (6)', price: 16.99, description: '' }
    ],
    comment: 'With or without seasoning.'
  },
  {
    category: 'Grilled Tilapia',
    items: [
      { name: 'Regular Plate (3)', price: 13.99, description: '' },
      { name: 'Large Plate (4)', price: 15.99, description: '' }
    ],
    comment: 'With or without seasoning.'
  },
  {
    category: 'Fried Quail',
    items: [
      { name: 'Small Plate (2)', price: 14.99, description: '' },
      { name: 'Regular Plate (3)', price: 16.99, description: '' },
      { name: 'Large Plate (4)', price: 18.99, description: '' },
      { name: 'Hungry Man Plate (6)', price: 24.99, description: '' }
    ],
    comment: null
  },
  {
    category: 'Fried Chicken Strips',
    items: [
      { name: 'Small Plate (3)', price: 10.99, description: '' },
      { name: 'Regular Plate (4)', price: 11.99, description: '' },
      { name: 'Large Plate (5)', price: 12.99, description: '' },
      { name: 'Hungry Man Plate (6)', price: 13.99, description: '' }
    ],
    comment: null
  },
  {
    category: 'Seafood & Combination Platters',
    items: [
      { name: "Jack's 2 Meat Combo", price: 22.99, description: 'Must be 2 different meats.' },
      { name: "Jack's Hungry Man 2 Meat Combo", price: 25.99, description: 'Must be 2 different meats.' },
      { name: "Jack's 3 Meat Combo", price: 28.99, description: 'Must be 3 different meats.' },
      { name: 'Seafood Platter', price: 27.99, description: 'Shrimp-8, Oysters-4, Scallops-4, Devil Crab-1, Fish of Choice-1 (excludes Salmon)' },
      { name: 'Hungry Man Seafood Platter', price: 33.99, description: 'Shrimp-13, Oysters-6, Scallops-6, Devil Crab-2, Fish of Choice-2 (excludes Salmon)' },
      { name: 'Shrimp (5 oz)', price: 17.99, description: '' },
      { name: 'Hungry Man Shrimp (10 oz)', price: 22.99, description: '' },
      { name: 'Oysters (5 oz)', price: 20.99, description: '' },
      { name: 'Hungry Man Oysters (10 oz)', price: 26.99, description: '' },
      { name: 'Scallops (5 oz)', price: 20.99, description: '' },
      { name: 'Hungry Man Scallops (10 oz)', price: 26.99, description: '' },
      { name: 'Devil Crab Plate (4)', price: 17.99, description: '' },
      { name: 'Frog Leg Plate (6)', price: 17.99, description: '' },
      { name: 'Hungry Man Frog Leg (9)', price: 20.99, description: '' },
      { name: 'Gator Tail (8 oz)', price: 21.99, description: '' },
      { name: 'Hungry Man Gator Tail (12 oz)', price: 26.99, description: '' },
      { name: "Swamp Man's Platter", price: 30.99, description: 'Gator-8oz, Frog Legs-3, Shrimp-8, Fish of Choice-1 (excludes Salmon)' },
      { name: "Hungry Man Swamp Man's Platter", price: 36.99, description: 'Gator-8oz, Frog Legs-6, Shrimp-13, Fish of Choice-2 (excludes Salmon)' }
    ],
    comment: 'Please specify grilled or fried on combo platters.'
  },
  {
    category: "Jack's Ribeye Steaks",
    items: [
      { name: '8 oz. Ribeye', price: 23.99, description: '' },
      { name: '8 oz. Surf-N-Turf', price: 30.99, description: '' },
      { name: '12 oz. Ribeye', price: 27.99, description: '' },
      { name: '12 oz. Surf-N-Turf', price: 34.99, description: '' },
      { name: '16 oz. Ribeye', price: 34.99, description: '' },
      { name: '16 oz. Surf-N-Turf', price: 40.99, description: '' },
      { name: '16 oz. Bone-In', price: 35.99, description: '' },
      { name: '16 oz. Bone-In Surf-N-Turf', price: 41.99, description: '' }
    ],
    comment: 'Served with a warm dinner roll and 2 sides of your choice. Surf-N-Turf prices exclude Salmon & Crab Legs.'
  },
  {
    category: 'Crab Legs',
    items: [
      { name: 'Crab Legs', price: 'Market Price', description: '' }
    ],
    comment: null
  },
  {
    category: 'Grilled Salmon',
    items: [
      { name: 'Grilled Salmon (8 oz)', price: 21.99, description: '' }
    ],
    comment: null
  },
  {
    category: 'Porkchops',
    items: [
      { name: '2 Pork Chops (6 oz) (Fried or Grilled)', price: 14.99, description: '' },
      { name: '3 Pork Chops (6 oz) (Fried or Grilled)', price: 17.99, description: '' }
    ],
    comment: null
  },
  {
    category: "Jack's Child's Menu",
    items: [
      { name: "Child's Chicken (2)", price: 8.99, description: '' },
      { name: "Child's Shrimp (6)", price: 8.99, description: '' },
      { name: "Child's Fish of Choice (1)", price: 8.99, description: '' },
      { name: "Child's 2 Meat Combo", price: 13.99, description: '' }
    ],
    comment: '12 & under or 65 & older only. Excludes Salmon, Crab Legs, and Steak.'
  },
  {
    category: 'More Delicious Items',
    items: [
      { name: 'Grilled, Boiled or Fried Shrimp', price: 9.99, description: '' },
      { name: 'Grilled or Fried Scallops', price: 14.99, description: '' },
      { name: 'Fried Oysters', price: 14.99, description: '' },
      { name: 'Fried Whole Catfish or Fillet (2)', price: 9.99, description: '' },
      { name: 'Grilled or Fried Tilapia (3)', price: 9.99, description: '' },
      { name: 'Frog Legs (4)', price: 9.99, description: '' },
      { name: 'Deviled Crab (2)', price: 9.99, description: '' },
      { name: 'Quail (2)', price: 9.99, description: '' },
      { name: 'Fried Mullet (2)', price: 9.99, description: '' },
      { name: 'Grilled or Fried Porkchops (2)', price: 9.99, description: '' }
    ],
    comment: 'To sample or add to your main dish.'
  }
]
