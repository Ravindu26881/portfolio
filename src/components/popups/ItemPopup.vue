<template>
  <div v-if="isOpen" class="popup-overlay item-popup" >
    <div class="popup-content">
      <div class="popup-body">
      <button class="close-btn" @click="closePopup">✖</button>
      <h2>{{ item.text }}</h2>
      <div class="item-description" >{{item.description}}</div>
      <div class="item-popup__wrapper">
        <div>
          <img class="item-popup__preview-image" :src="item.img">
          <div>User Ratings</div><star-ratings :rating="item.rating"></star-ratings>
          <div>{{item.rating}}</div>
        </div>
        <div class="item-popup__details-wrapper">

          <div class="color-container">
            Available Colors
          </div>
          <div class="color-bubbles">
            <div
                v-for="(color, index) in item.colors"
                :key="index"
                class="color-circle"
                :style="{ backgroundColor: color.toLowerCase() }"
            ></div>
          </div>
          <div class="item-price">
            <div>Price</div>
            <div class="item-price__price">{{item.price}}</div>
          </div>

        </div>
        <div v-if="!isInCart" class="item-add-to-cart" @click="selectOptions">
          <div>Add to cart</div>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.48776 6.42735C1.90111 5.98005 2.49035 5.73368 3.14677 5.73368H19.0163L19.176 4.5993C19.3481 3.37727 20.2463 2.41998 21.2208 2.41998H22.3868C22.7476 2.41998 23.04 2.69697 23.04 3.03873C23.04 3.3805 22.7476 3.65748 22.3868 3.65748H21.2208C21.0112 3.65748 20.5674 4.07723 20.471 4.76285L18.6012 18.047C18.5189 18.6325 18.2013 19.1807 17.707 19.5906C17.3404 19.8947 16.9072 20.0969 16.4533 20.1815C16.6382 20.5036 16.7434 20.8726 16.7434 21.2643C16.7434 22.5192 15.6656 23.54 14.341 23.54C13.0164 23.54 11.9387 22.5192 11.9387 21.2643C11.9387 20.8905 12.0349 20.5377 12.2044 20.2263H8.78157C8.95099 20.5377 9.04727 20.8905 9.04727 21.2643C9.04727 22.5192 7.9695 23.54 6.64492 23.54C5.32033 23.54 4.24257 22.5192 4.24257 21.2643C4.24257 20.8905 4.33884 20.5377 4.50827 20.2263H2.79687C2.43625 20.2263 2.14368 19.9491 2.14368 19.6075C2.14368 19.2658 2.43625 18.9888 2.79687 18.9888H15.9735C16.6117 18.9888 17.222 18.4825 17.3064 17.8832L17.443 16.9124H12.3592C12.359 16.9124 12.3588 16.9126 12.3586 16.9126C12.3585 16.9126 12.3583 16.9124 12.358 16.9124H8.16155C8.16138 16.9124 8.16121 16.9126 8.16087 16.9126C8.1607 16.9126 8.1607 16.9124 8.16053 16.9124H4.54603C3.92243 16.9124 3.30684 16.6867 2.81252 16.2769C2.3182 15.867 2.00062 15.3187 1.91829 14.7331L0.981369 8.07671C0.894617 7.46038 1.07442 6.87466 1.48776 6.42735ZM13.2451 21.2643C13.2451 21.8368 13.7366 22.3025 14.341 22.3025C14.9452 22.3025 15.437 21.8368 15.437 21.2643C15.437 20.692 14.9452 20.2263 14.341 20.2263C13.7366 20.2263 13.2451 20.692 13.2451 21.2643ZM5.54895 21.2643C5.54895 21.8368 6.04055 22.3025 6.64492 22.3025C7.24929 22.3025 7.74089 21.8368 7.74089 21.2643C7.74089 20.692 7.24929 20.2263 6.64492 20.2263C6.04055 20.2263 5.54895 20.692 5.54895 21.2643ZM2.47078 7.24252C2.30902 7.41751 2.23995 7.65551 2.27636 7.913L2.66912 10.7043H7.11355L6.85091 6.97118H3.14677C2.87239 6.97118 2.63238 7.06753 2.47078 7.24252ZM11.747 15.6749L12.0098 11.9418H8.50992L8.77273 15.6749H11.747ZM12.0969 10.7043L12.3595 6.97118H8.16019L8.42283 10.7043H12.0969ZM13.6688 6.97118L13.4061 10.7043H18.3168L18.8423 6.97118H13.6688ZM18.1426 11.9418H13.319L13.0562 15.6749H17.6172L18.1426 11.9418ZM4.54603 15.6749H7.46345L7.20064 11.9418H2.84331L3.21311 14.5696C3.29748 15.1688 3.90798 15.6749 4.54603 15.6749Z" fill="white"/>
          </svg>
        </div>

        <div v-if="isInCart" class="item-remove-from-cart" @click="removeFromCart">
          <div>Remove from cart</div>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.48776 6.42735C1.90111 5.98005 2.49035 5.73368 3.14677 5.73368H19.0163L19.176 4.5993C19.3481 3.37727 20.2463 2.41998 21.2208 2.41998H22.3868C22.7476 2.41998 23.04 2.69697 23.04 3.03873C23.04 3.3805 22.7476 3.65748 22.3868 3.65748H21.2208C21.0112 3.65748 20.5674 4.07723 20.471 4.76285L18.6012 18.047C18.5189 18.6325 18.2013 19.1807 17.707 19.5906C17.3404 19.8947 16.9072 20.0969 16.4533 20.1815C16.6382 20.5036 16.7434 20.8726 16.7434 21.2643C16.7434 22.5192 15.6656 23.54 14.341 23.54C13.0164 23.54 11.9387 22.5192 11.9387 21.2643C11.9387 20.8905 12.0349 20.5377 12.2044 20.2263H8.78157C8.95099 20.5377 9.04727 20.8905 9.04727 21.2643C9.04727 22.5192 7.9695 23.54 6.64492 23.54C5.32033 23.54 4.24257 22.5192 4.24257 21.2643C4.24257 20.8905 4.33884 20.5377 4.50827 20.2263H2.79687C2.43625 20.2263 2.14368 19.9491 2.14368 19.6075C2.14368 19.2658 2.43625 18.9888 2.79687 18.9888H15.9735C16.6117 18.9888 17.222 18.4825 17.3064 17.8832L17.443 16.9124H12.3592C12.359 16.9124 12.3588 16.9126 12.3586 16.9126C12.3585 16.9126 12.3583 16.9124 12.358 16.9124H8.16155C8.16138 16.9124 8.16121 16.9126 8.16087 16.9126C8.1607 16.9126 8.1607 16.9124 8.16053 16.9124H4.54603C3.92243 16.9124 3.30684 16.6867 2.81252 16.2769C2.3182 15.867 2.00062 15.3187 1.91829 14.7331L0.981369 8.07671C0.894617 7.46038 1.07442 6.87466 1.48776 6.42735ZM13.2451 21.2643C13.2451 21.8368 13.7366 22.3025 14.341 22.3025C14.9452 22.3025 15.437 21.8368 15.437 21.2643C15.437 20.692 14.9452 20.2263 14.341 20.2263C13.7366 20.2263 13.2451 20.692 13.2451 21.2643ZM5.54895 21.2643C5.54895 21.8368 6.04055 22.3025 6.64492 22.3025C7.24929 22.3025 7.74089 21.8368 7.74089 21.2643C7.74089 20.692 7.24929 20.2263 6.64492 20.2263C6.04055 20.2263 5.54895 20.692 5.54895 21.2643ZM2.47078 7.24252C2.30902 7.41751 2.23995 7.65551 2.27636 7.913L2.66912 10.7043H7.11355L6.85091 6.97118H3.14677C2.87239 6.97118 2.63238 7.06753 2.47078 7.24252ZM11.747 15.6749L12.0098 11.9418H8.50992L8.77273 15.6749H11.747ZM12.0969 10.7043L12.3595 6.97118H8.16019L8.42283 10.7043H12.0969ZM13.6688 6.97118L13.4061 10.7043H18.3168L18.8423 6.97118H13.6688ZM18.1426 11.9418H13.319L13.0562 15.6749H17.6172L18.1426 11.9418ZM4.54603 15.6749H7.46345L7.20064 11.9418H2.84331L3.21311 14.5696C3.29748 15.1688 3.90798 15.6749 4.54603 15.6749Z" fill="white"/>
          </svg>
        </div>

        <div class="item-buy">Buy Now</div>
      </div>
<div :class="optionsSelectClasses">
  <button class="close-btn" @click="showOptionsSelect = false">✖</button>
  <div class="options-select__option">
    <div>
      Select the color you want
    </div>
    <div class="options-select__color-bubbles">
      <div
          v-for="(color, index) in item.colors"
          :key="index"
          class="options-select__color-circle"
          :class="{ 'color-circle__selected': selectedColor === color }"
          @click="selectedColor = color"
          :style="{ backgroundColor: color.toLowerCase() }"
      ></div>
    </div>
  </div>
  <div class="options-select__option">
    <div>
      Select your size
    </div>
    <div class="options-select__sizes">
      <div  v-for="(size, index) in item.sizes"
            @click="selectedSize = size"
            :key="index">
      <div :class="{ 'size__selected': selectedSize === size }" class="options-select__size-wrapper"> {{size}}</div>
      </div>
    </div>
  </div>
  <div class="options-select__option">
    <div>
      How many you want
    </div>
    <div class="quantity-selector">
      <svg class="quantity-selector__icon" @click="decreaseQuantity" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0999 17.5H23.8999M17.5 33.5C26.3366 33.5 33.5 26.3366 33.5 17.5C33.5 8.66344 26.3366 1.5 17.5 1.5C8.66344 1.5 1.5 8.66344 1.5 17.5C1.5 26.3366 8.66344 33.5 17.5 33.5Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input class="quantity-selector__input" v-model="quantity"/>
      <svg class="quantity-selector__icon" @click="increaseQuantity" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_34752_50362)">
          <path d="M16.5 0.5C7.65687 0.5 0.5 7.65606 0.5 16.5C0.5 25.3431 7.65606 32.5 16.5 32.5C25.3431 32.5 32.5 25.3439 32.5 16.5C32.5 7.65687 25.3439 0.5 16.5 0.5ZM16.5 30.3667C8.85394 30.3667 2.63331 24.1461 2.63331 16.5C2.63331 8.85388 8.85394 2.63331 16.5 2.63331C24.1461 2.63331 30.3667 8.85394 30.3667 16.5C30.3667 24.1461 24.1461 30.3667 16.5 30.3667Z" fill="black"/>
          <path d="M23.7092 15.4334H17.5668V9.29106C17.5668 8.70199 17.0892 8.22437 16.5001 8.22437C15.911 8.22437 15.4334 8.70193 15.4334 9.29106V15.4334H9.29106C8.70199 15.4334 8.22437 15.911 8.22437 16.5001C8.22437 17.0892 8.70193 17.5668 9.29106 17.5668H15.4334V23.7092C15.4334 24.2982 15.911 24.7759 16.5001 24.7759C17.0892 24.7759 17.5668 24.2983 17.5668 23.7092V17.5668H23.7092C24.2982 17.5668 24.7759 17.0892 24.7759 16.5001C24.7759 15.911 24.2982 15.4334 23.7092 15.4334Z" fill="black"/>
        </g>
        <defs>
          <clipPath id="clip0_34752_50362">
            <rect width="32" height="32" fill="white" transform="translate(0.5 0.5)"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
  <div  class="options-select__add" @click="addToCart">
    <div>Add to cart</div>
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.48776 6.42735C1.90111 5.98005 2.49035 5.73368 3.14677 5.73368H19.0163L19.176 4.5993C19.3481 3.37727 20.2463 2.41998 21.2208 2.41998H22.3868C22.7476 2.41998 23.04 2.69697 23.04 3.03873C23.04 3.3805 22.7476 3.65748 22.3868 3.65748H21.2208C21.0112 3.65748 20.5674 4.07723 20.471 4.76285L18.6012 18.047C18.5189 18.6325 18.2013 19.1807 17.707 19.5906C17.3404 19.8947 16.9072 20.0969 16.4533 20.1815C16.6382 20.5036 16.7434 20.8726 16.7434 21.2643C16.7434 22.5192 15.6656 23.54 14.341 23.54C13.0164 23.54 11.9387 22.5192 11.9387 21.2643C11.9387 20.8905 12.0349 20.5377 12.2044 20.2263H8.78157C8.95099 20.5377 9.04727 20.8905 9.04727 21.2643C9.04727 22.5192 7.9695 23.54 6.64492 23.54C5.32033 23.54 4.24257 22.5192 4.24257 21.2643C4.24257 20.8905 4.33884 20.5377 4.50827 20.2263H2.79687C2.43625 20.2263 2.14368 19.9491 2.14368 19.6075C2.14368 19.2658 2.43625 18.9888 2.79687 18.9888H15.9735C16.6117 18.9888 17.222 18.4825 17.3064 17.8832L17.443 16.9124H12.3592C12.359 16.9124 12.3588 16.9126 12.3586 16.9126C12.3585 16.9126 12.3583 16.9124 12.358 16.9124H8.16155C8.16138 16.9124 8.16121 16.9126 8.16087 16.9126C8.1607 16.9126 8.1607 16.9124 8.16053 16.9124H4.54603C3.92243 16.9124 3.30684 16.6867 2.81252 16.2769C2.3182 15.867 2.00062 15.3187 1.91829 14.7331L0.981369 8.07671C0.894617 7.46038 1.07442 6.87466 1.48776 6.42735ZM13.2451 21.2643C13.2451 21.8368 13.7366 22.3025 14.341 22.3025C14.9452 22.3025 15.437 21.8368 15.437 21.2643C15.437 20.692 14.9452 20.2263 14.341 20.2263C13.7366 20.2263 13.2451 20.692 13.2451 21.2643ZM5.54895 21.2643C5.54895 21.8368 6.04055 22.3025 6.64492 22.3025C7.24929 22.3025 7.74089 21.8368 7.74089 21.2643C7.74089 20.692 7.24929 20.2263 6.64492 20.2263C6.04055 20.2263 5.54895 20.692 5.54895 21.2643ZM2.47078 7.24252C2.30902 7.41751 2.23995 7.65551 2.27636 7.913L2.66912 10.7043H7.11355L6.85091 6.97118H3.14677C2.87239 6.97118 2.63238 7.06753 2.47078 7.24252ZM11.747 15.6749L12.0098 11.9418H8.50992L8.77273 15.6749H11.747ZM12.0969 10.7043L12.3595 6.97118H8.16019L8.42283 10.7043H12.0969ZM13.6688 6.97118L13.4061 10.7043H18.3168L18.8423 6.97118H13.6688ZM18.1426 11.9418H13.319L13.0562 15.6749H17.6172L18.1426 11.9418ZM4.54603 15.6749H7.46345L7.20064 11.9418H2.84331L3.21311 14.5696C3.29748 15.1688 3.90798 15.6749 4.54603 15.6749Z" fill="white"/>
    </svg>
  </div>
</div>
</div>
    </div>
  </div>
</template>

<script>
import StarRatings from "@/components/sub-components/StarRatings.vue";

export default {
  components: {StarRatings},
  props: {
    isOpen: Boolean,
    itemId: Number
  },
  data() {
    return {
      showOptionsSelect: false,
      quantity: 1,
      selectedColor: '',
      selectedSize: '',
    };
  },
  emits: ['close'],
  computed: {
    item() {
      return this.$store.getters.getItemById(this.itemId);
    },
    isInCart() {
      return this.$store.getters.getIsItemAlreadyInCart(this.itemId);
    },
    availableColors() {
      return this.item.color.join(', ');
    },
    optionsSelectClasses () {
      return {
        "options-select": true,
        "options-select__visible": this.showOptionsSelect
      };
    }
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
    selectOptions () {
      this.showOptionsSelect = !this.showOptionsSelect;
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart () {
      const updatedItem = {
        ...this.item,
        quantity: this.quantity,
        selectedColor: this.selectedColor,
        selectedSize: this.selectedSize
      };
      this.$store.commit('addToCart', updatedItem);
      this.showOptionsSelect = false
      this.quantity = 1;
      this.selectedColor = '';
      this.selectedSize = '';
    },
    removeFromCart () {
      this.$store.commit('removeFromCart', this.item.id);
    }
  }
};
</script>

<style scoped>

.options-select__add {
  font-weight: 600;
  font-family: system-ui;
  cursor: pointer;
  transition: 0.3s;
  color: white;
  position: absolute;
  bottom: 50px;
  right: 57px;
  display: flex;
  align-items: center;
  gap: 9px;
  background: #2c3e50;
  padding: 10px 20px;
  border-radius: 22px;
  svg {
      path {
        fill: white;
      }
  }
}

.options-select__add:hover{
  background: green;
}

.quantity-selector {
  font-family: system-ui;
  display: flex;
  align-items: center;
  gap: 13px;
}

.quantity-selector__input {
  border: navajowhite;
  width: 55px;
  height: 33px;
  line-height: 1;
  border-radius: 5px;
  background: #f9f9f9;
  text-align: center;
}

.quantity-selector__icon {
  cursor: pointer;
  width: 24px;
}

.color-container {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  margin-top: 68px;
  margin-bottom: 10px;
  justify-content: center;
}
.color-circle {
  width: 40px;
  height: 40px;
  border-radius: 53%;
  border: 3px solid #00000030;
  opacity: 0.6;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background: white;
  padding: 54px;
  border-radius: 21px;
  border-bottom-right-radius: 26px;
  min-width: 300px;
  margin: 100px;
  position: relative;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 49%);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 22px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.options-select__option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #dddddd;
  padding: 27px;
  border-radius: 21px;
  margin-top: 20px;
}

.options-select {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  background: #ffffff;
  height: 100%;
  border-radius: 21px;
  opacity: 0;
  z-index: -999;
  transition: 0.3s;
}

.options-select__color-bubbles {
  align-items: center;
  display: flex;
  gap: 8px;
}
.options-select__color-circle {
  cursor: pointer;
  background-color: red;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  transition: 0.3s;
  opacity: 0.5;
}

.options-select__color-circle:hover,
.color-circle__selected{
  transition: 0.3s;
  opacity: 1;
  border: 1px solid black;
}

.options-select__visible {
  transition: 0.3s;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  background: #ffffff;
  height: 100%;
  border-radius: 21px;
  opacity: 1;
  z-index: 999;
  padding: 50px;
}

.options-select__sizes {
  font-family: system-ui;
  display: flex;
  gap: 8px;
}

.options-select__size-wrapper {
  cursor: pointer;
  background: white;
  padding: 8px;
  line-height: 1;
  width: 30px;
  height: 30px;
  border-radius: 20px;
}

.options-select__size-wrapper:hover,
.size__selected{
  background: #000000;
  color: white;
  transition: 0.3s;
}

.item-popup__preview-image {
  width: 350px;
}

.item-popup__wrapper {
  display: flex;
  font-family: system-ui;
  font-weight: 600;
  gap: 30px;
}

.item-description {
  font-family: system-ui;
  font-size: 15px;
  font-weight: 300;
  border-top: 1px solid;
  padding-top: 6px;
  margin-top: 15px;
}

.color-bubbles {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.item-price {
  margin-bottom: 10px;
  margin-top: 40px;
}

.item-price__price {
  font-size: 28px;
  color: #000000;
  line-height: 1;
}

.item-buy {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  background: green;
  padding: 18px;
  width: 37%;
  border-top-left-radius: 32px;
  border-bottom-right-radius: 21px;
  transition: 0.3s;
  color: white;
}

.item-buy:hover {
  transition: 0.3s;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 49%);
}

.item-add-to-cart {
  cursor: pointer;
  transition: 0.3s;
  color: black;
  position: absolute;
  bottom: 86px;
  right: 20px;
  display: flex;
  align-items: flex-end;
  gap: 9px;
  svg {
    path {
      fill: black;
    }
  }
}

.item-add-to-cart:hover {
  transition: 0.3s;
  text-shadow: 0 0 10px rgb(0 0 0 / 1%), 0 0 20px rgb(0 0 0 / 84%), 0 0 30px rgb(255 255 255);
}

.item-remove-from-cart {
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  bottom: 86px;
  right: 20px;
  display: flex;
  align-items: flex-end;
  gap: 9px;
  color: #902e2e;
  svg {
    path {
      fill: #902e2e;
    }
  }
}

.item-remove-from-cart:hover {
  transition: 0.3s;
  text-shadow: 0 0 10px rgb(144 46 46 / 8%), 0 0 20px rgb(144 46 46 / 60%), 0 0 30px rgb(255 255 255);
}

@media screen and (max-width: 768px) {
  .item-popup__preview-image {
    width: 211px;
  }
  .item-popup__wrapper {
    display: block;
  }
  .color-container {
    margin-top: 22px;
  }
  .color-circle {
    width: 25px;
    height: 25px;
  }
  .item-price {
    margin-top: 22px;
  }
  .item-buy {
    position: unset;
    border-radius: 21px;
    width: 100%;
  }
  .item-remove-from-cart,
  .item-add-to-cart {
    position: unset;
    width: 100%;
    justify-content: center;
    border-radius: 21px;
    padding: 11px;
    margin-bottom: 13px;
    margin-top: 39px;
  }

  .popup-content {
    padding: 54px 20px 20px 20px;
  }
  .popup-body {
    overflow: scroll;
    max-height: 60vh;
  }
  .options-select__option {
    flex-direction: column;
    gap: 14px;
    margin-top: 0;
    margin-bottom: 12px;
  }

  .options-select__add {
    position: unset;
    margin-top: 10px;
    justify-content: center;
  }

  .options-select__visible {
    padding: 50px 20px;
    overflow: scroll;
    padding-bottom: 10px;
  }
}
</style>
