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

export const menuData: MenuCategory[] = [
  {
    category: "Jack's Meat Combos",
    items: [
      { name: '2 Meat Combo', price: 19.99, description: '' },
      { name: 'Hungry Man 2 Meat Combo', price: 22.99, description: '' },
      { name: 'Hungry Man 3 Meat Combo', price: 26.99, description: '' }
    ],
    comment: 'Excludes Salmon and Crab Legs. Add $4.99 for Gator, Oyster, or Scallops.'
  },
  {
    category: "Jack's Quail Plates",
    items: [
      { name: 'Small Plate', price: 13.99, description: '' },
      { name: 'Regular Plate', price: 14.99, description: '' },
      { name: 'Large Plate', price: 17.99, description: '' },
      { name: 'Hungry Man Plate', price: 22.99, description: '' }
    ],
    comment: null
  },
  {
    category: 'Chicken Strip Plates',
    items: [
      { name: 'Small Plate', price: 9.99, description: '' },
      { name: 'Regular Plate', price: 10.99, description: '' },
      { name: 'Large Plate', price: 11.99, description: '' },
      { name: 'Hungry Man Plate', price: 12.99, description: '' }
    ],
    comment: null
  },
  {
    category: "Jack's Child Plates",
    items: [
      { name: "Child's Chicken", price: 8.99, description: '' },
      { name: "Child's Shrimp", price: 8.99, description: '' },
      { name: "Child's Fish of Choice", price: 8.99, description: '' },
      { name: "Child's 2 Meat Combo", price: 13.99, description: '' }
    ],
    comment: "Child's Combo Add $4.99 for Gator, Oyster, or Scallops."
  },
  {
    category: "Jack's Grilled Salmon and Shrimp Plates",
    items: [
      { name: 'Grilled Salmon (8oz)', price: 20.99, description: '' },
      { name: 'Grilled Shrimp', price: 16.99, description: '' },
      { name: 'Grilled Regular Fillet', price: 15.99, description: '' },
      { name: 'Grilled Large Fillet', price: 17.99, description: '' }
    ],
    comment: null
  },
  {
    category: 'Catfish Plates',
    items: [
      { name: 'Small Plate (2)', price: 13.99, description: '' },
      { name: 'Regular Plate (3)', price: 15.99, description: '' },
      { name: 'Large Plate (4)', price: 18.99, description: '' },
      { name: 'Hungry Man Plate (6)', price: 24.99, description: '' }
    ],
    comment: 'Please specify whole or fillet.'
  },
  {
    category: 'Tilapia',
    items: [
      { name: 'Small Plate', price: 13.99, description: '' },
      { name: 'Regular Plate', price: 14.99, description: '' },
      { name: 'Large Plate', price: 15.99, description: '' },
      { name: 'Hungry Man Plate', price: 16.99, description: '' }
    ],
    comment: 'Please specify fried or grilled and with or without cajun seasoning'
  },
  {
    category: 'Mullet',
    items: [
      { name: 'Small Plate', price: 13.99, description: '' },
      { name: 'Regular Plate', price: 14.99, description: '' },
      { name: 'Large Plate', price: 15.99, description: '' },
      { name: 'Hungry Man Plate', price: 16.99, description: '' }
    ],
    comment: 'When in season or when possible.'
  },
  {
    category: "Jack's Shrimp, Seafood, and more!",
    items: [
      { name: 'Crab Legs', price: 'Market Price', description: '' },
      { name: 'Fried or Grilled Pork Chops (2)', price: 13.99, description: '' },
      { name: 'Fried or Grilled Pork Chops (3)', price: 16.99, description: '' },
      { name: 'Shrimp Plate', price: 16.99, description: '' },
      { name: 'Hungry Man Shrimp Plate', price: 22.99, description: '' },
      { name: 'Seafood Platter', price: 26.99, description: 'Shrimp, Catfish, Oyster, Scallops, Crab' },
      { name: 'Hungry Man Seafood Platter', price: 32.99, description: 'Shrimp, Catfish (2), Oyster, Scallops, Crab (2)' },
      { name: 'Oyster Plate', price: 20.99, description: '' },
      { name: 'Hungry Man Oyster Plate', price: 26.99, description: '' },
      { name: 'Scallop Plate', price: 20.99, description: '' },
      { name: 'Hungry Man Scallop Plate', price: 26.99, description: '' },
      { name: 'Regular Frog Legs Plate', price: 16.99, description: '' },
      { name: 'Hungry Man Frog Legs Plate', price: 19.99, description: '' },
      { name: 'Gator Tail Plate', price: 20.99, description: '' },
      { name: 'Hungry Man Gator Tail Plate', price: 26.99, description: '' },
      { name: "Swamp Man's Platter", price: 29.99, description: 'Gator, Frog Legs, Catfish, Shrimp' },
      { name: "Hungry Man Swamp Man's Platter", price: 36.99, description: '' }
    ],
    comment: null
  },
  {
    category: "Jack's Ribeye Steaks",
    items: [
      { name: '8 oz. Ribeye', price: 22.99, description: '' },
      { name: '8 oz. Surf-N-Turf', price: 29.99, description: '' },
      { name: '12 oz. Ribeye', price: 26.99, description: '' },
      { name: '12 oz. Surf-N-Turf', price: 33.99, description: '' },
      { name: '16 oz. Ribeye', price: 33.99, description: '' },
      { name: '16 oz. Surf-N-Turf', price: 39.99, description: '' },
      { name: '16 oz. Bone-In', price: 34.99, description: '' },
      { name: '16 oz. Bone-In Surf-N-Turf', price: 40.99, description: '' }
    ],
    comment: null
  },
  {
    category: 'Starters and Sides',
    items: [
      { name: '8oz Bowl Sweet or Dill Pickles', price: 0.75, description: '' },
      { name: 'Baked Potato', price: 3.29, description: '' },
      { name: 'Baked Sweet Potato', price: 3.29, description: '' },
      { name: 'Blooming Onion', price: 10.99, description: '' },
      { name: 'Calamari', price: 7.99, description: '' },
      { name: 'Cheese Sticks (6)', price: 7.99, description: '' },
      { name: 'Chicken Strips (2)', price: 7.99, description: '' },
      { name: 'Deviled Crab (2)', price: 7.99, description: '' },
      { name: 'Dinner Rolls (2)', price: 3.29, description: '' },
      { name: 'Fried Catfish Fillet or Whole (2)', price: 8.99, description: '' },
      { name: 'Fried Dill or Sweet Pickles', price: 7.99, description: '' },
      { name: 'Fried Green Tomatoes (6)', price: 7.99, description: '' },
      { name: 'Fried Mullet (2)', price: 7.99, description: '' },
      { name: 'Fried Mushrooms (12)', price: 7.99, description: '' },
      { name: 'Fried Okra', price: 3.29, description: '' },
      { name: 'Fries', price: 3.29, description: '' },
      { name: 'Frog Legs (4)', price: 7.99, description: '' },
      { name: 'Gator Bites', price: 14.99, description: '' },
      { name: 'Grilled or Fried Porkchops', price: 7.99, description: '' },
      { name: 'Grits', price: 3.29, description: '' },
      { name: 'Green Beans', price: 3.29, description: '' },
      { name: 'Hushpuppies (4)', price: 3.29, description: '' },
      { name: 'Loaded Baked Potato', price: 3.99, description: '' },
      { name: 'Mozzarella Sticks (6)', price: 7.99, description: '' },
      { name: 'Mullet Eggs or Roe', price: 7.99, description: '' },
      { name: 'Oysters', price: 12.99, description: '' },
      { name: 'Perch (2)', price: 7.99, description: '' },
      { name: 'Potato Thins', price: 3.29, description: '' },
      { name: 'Scallops', price: 12.99, description: '' },
      { name: 'Shrimp', price: 8.99, description: '' },
      { name: 'Side House Salad', price: 4.99, description: '' },
      { name: 'Slaw', price: 3.29, description: '' },
      { name: 'Sweet Onions Slices', price: 0.75, description: '' },
      { name: 'Sweet Potato Fries', price: 3.29, description: '' },
      { name: 'Tilapia', price: 7.99, description: '' },
      { name: 'Quail (2)', price: 7.99, description: '' }
    ],
    comment: 'Try these delicious side items for an appetizer or just add a little something extra with your meal.'
  }
]
