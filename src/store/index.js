import { createStore } from 'vuex'

export default createStore({
  state: {
    itemList: [
      {
        id: 1,
        img: require('@/assets/img/shoe1.png'),
        text: 'Air Glide',
        colors: ['Red', 'Blue'],
        sizes: ['7', '8', '9', '10', '11'],
        price: '$120',
        description: 'Experience lightweight speed with Air Glide, designed for maximum agility and performance.',
        rating: 4.5
      },
      {
        id: 2,
        img: require('@/assets/img/shoe2.png'),
        text: 'Trail Blazer',
        colors: ['Red', 'Blue'],
        sizes: ['7', '8', '9', '10', '11'],
        price: '$135',
        description: 'Conquer any terrain with Trail Blazer, featuring superior grip and durability.',
        rating: 4.8
      },
      {
        id: 3,
        img: require('@/assets/img/shoe1.png'),
        text: 'Urban Sprint',
        colors: ['Red', 'Black'],
        sizes: ['6', '7', '8', '9', '10'],
        price: '$110',
        description: 'Perfect for city runners, Urban Sprint offers a sleek design and responsive cushioning.',
        rating: 4.3
      },
      {
        id: 4,
        img: require('@/assets/img/shoe2.png'),
        text: 'Hyper Flex',
        colors: ['Red', 'Black', 'Green'],
        sizes: ['7', '8', '9', '10', '11'],
        price: '$140',
        description: 'Enjoy flexibility and comfort with Hyper Flex, engineered for effortless movement.',
        rating: 4.6
      },
      {
        id: 5,
        img: require('@/assets/img/shoe1.png'),
        text: 'Cloud Runner',
        colors: ['Grey', 'Black'],
        sizes: ['6', '7', '8', '9', '10'],
        price: '$125',
        description: 'Run on air with Cloud Runner’s innovative cushioning system for a smooth ride.',
        rating: 4.7
      },
      {
        id: 6,
        img: require('@/assets/img/shoe2.png'),
        text: 'Velocity Pro',
        colors: ['Yellow', 'Black', 'Green'],
        sizes: ['7', '8', '9', '10', '11'],
        price: '$130',
        description: 'Unleash your potential with Velocity Pro, designed for speed and performance.',
        rating: 4.2
      },
      {
        id: 7,
        img: require('@/assets/img/shoe1.png'),
        text: 'Stratus Max',
        colors: ['Yellow'],
        sizes: ['7', '8', '9', '10', '11'],
        price: '$145',
        description: 'Experience maximum comfort and stability with Stratus Max for long-distance runs.',
        rating: 4.9
      },
      {
        id: 8,
        img: require('@/assets/img/shoe2.png'),
        text: 'Aero Swift',
        colors: ['Yellow', 'Orange'],
        sizes: ['7', '8', '9', '10', '11'],
        price: '$115',
        description: 'Aero Swift combines aerodynamic design with lightweight materials for fast-paced runs.',
        rating: 4.4
      },
      {
        id: 9,
        img: require('@/assets/img/shoe1.png'),
        text: 'Zen Walker',
        colors: ['Yellow', 'Orange', 'Brown'],
        sizes: ['6', '7', '8', '9', '10'],
        price: '$105',
        description: 'Enjoy a balanced stride with Zen Walker, crafted for everyday comfort and style.',
        rating: 4.1
      },
      {
        id: 10,
        img: require('@/assets/img/shoe2.png'),
        text: 'Infinity Grip',
        colors: ['Purple', 'Orange', 'Brown'],
        sizes: ['7', '8', '9', '10', '11'],
        price: '$150',
        description: 'Infinity Grip offers unmatched traction and durability on any surface.',
        rating: 4.8
      },
      {
        id: 11,
        img: require('@/assets/img/shoe1.png'),
        text: 'Pulse Stride',
        colors: ['Purple', 'Pink', 'Brown'],
        sizes: ['6', '7', '8', '9', '10'],
        price: '$118',
        description: 'Feel the rhythm of your run with Pulse Stride, engineered for dynamic performance.',
        rating: 4.3
      },
      {
        id: 12,
        img: require('@/assets/img/shoe2.png'),
        text: 'Momentum X',
        colors: ['Beige'],
        sizes: ['7', '8', '9', '10', '11'],
        price: '$138',
        description: 'Momentum X is designed for athletes looking for endurance and maximum comfort.',
        rating: 4.6
      }
    ],
    cartItems: [],
    itemPopupId: 0,
    showItemPopup: false,
    showCartPopup: false,
    showFloatingCart: false
  },
  getters: {
    getItems: state => state.itemList,
    getShowItemPopup: state => state.showItemPopup,
    getShowCartPopup: state => state.showCartPopup,
    getCartItems: state => state.cartItems,
    getCartItemCount: state => state.cartItems.length,
    getShowFloatingCart: state => state.showFloatingCart,
    getItemPopupId: state => state.itemPopupId,
    getItemById: (state) => (id) => {
      return state.itemList.find(item => item.id === id);
    },
    getIsItemAlreadyInCart: (state) => (id) => {
      if (state.cartItems.find(item => item.id === id)) {
        return true;
      } else {
        return false;
      }
    }
  },
  mutations: {
    showItemPopup (state, payload) {
      state.itemPopupId = payload
      state.showItemPopup = true
    },
    hideItemPopup (state) {
      state.showItemPopup = false
    },
    showCartPopup (state) {
      state.showCartPopup = true
    },
    hideCartPopup (state) {
      state.showCartPopup = false
    },
    showFloatingCart (state) {
      state.showFloatingCart = true
    },
    hideFloatingCart (state) {
      state.showFloatingCart = false
    },
    addToCart(state, item) {
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(item);
      }
    },

    removeFromCart(state, itemId) {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId);
    }
  },
  actions: {
  },
  modules: {
  }
})
