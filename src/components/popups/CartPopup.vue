<template>
  <div v-if="isOpen" class="popup-overlay cart-popup" @click.self="closePopup">
    <div class="popup-content">
      <div class="popup-body">
      <button class="close-btn" @click="closePopup">✖</button>
      <div class="cart-header">Cart</div>
      <div v-if="items.length < 1" class="cart-empty-text">You have 0 items in your cart.</div>
      <div class="cart-item" v-for="item in items" :key="item.text" >
        <div>
          <div class="item-wrapper">
            <img :src="item.img" alt="item" class="card-img-top item__img"/>
            <div class="card-body">
              <h5 class="card-title">{{ item.text }}</h5>

              <div class="card-text text-muted item-price">Price : {{ item.price }}</div>
              <div class="card-text text-muted item-price" v-if="item.selectedColor">Selected Color : {{ item.selectedColor }}</div>
              <div class="card-text text-muted item-price" v-if="item.selectedSize">Selected Size : {{ item.selectedSize }}</div>
              <div class="card-text text-muted item-price" >Selected Quantity : {{ item.quantity }}</div>
            </div>
            <div>
              <div class="item-remove-from-cart" @click="removeFromCart(item.id)">
                <div>Remove</div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.48776 6.42735C1.90111 5.98005 2.49035 5.73368 3.14677 5.73368H19.0163L19.176 4.5993C19.3481 3.37727 20.2463 2.41998 21.2208 2.41998H22.3868C22.7476 2.41998 23.04 2.69697 23.04 3.03873C23.04 3.3805 22.7476 3.65748 22.3868 3.65748H21.2208C21.0112 3.65748 20.5674 4.07723 20.471 4.76285L18.6012 18.047C18.5189 18.6325 18.2013 19.1807 17.707 19.5906C17.3404 19.8947 16.9072 20.0969 16.4533 20.1815C16.6382 20.5036 16.7434 20.8726 16.7434 21.2643C16.7434 22.5192 15.6656 23.54 14.341 23.54C13.0164 23.54 11.9387 22.5192 11.9387 21.2643C11.9387 20.8905 12.0349 20.5377 12.2044 20.2263H8.78157C8.95099 20.5377 9.04727 20.8905 9.04727 21.2643C9.04727 22.5192 7.9695 23.54 6.64492 23.54C5.32033 23.54 4.24257 22.5192 4.24257 21.2643C4.24257 20.8905 4.33884 20.5377 4.50827 20.2263H2.79687C2.43625 20.2263 2.14368 19.9491 2.14368 19.6075C2.14368 19.2658 2.43625 18.9888 2.79687 18.9888H15.9735C16.6117 18.9888 17.222 18.4825 17.3064 17.8832L17.443 16.9124H12.3592C12.359 16.9124 12.3588 16.9126 12.3586 16.9126C12.3585 16.9126 12.3583 16.9124 12.358 16.9124H8.16155C8.16138 16.9124 8.16121 16.9126 8.16087 16.9126C8.1607 16.9126 8.1607 16.9124 8.16053 16.9124H4.54603C3.92243 16.9124 3.30684 16.6867 2.81252 16.2769C2.3182 15.867 2.00062 15.3187 1.91829 14.7331L0.981369 8.07671C0.894617 7.46038 1.07442 6.87466 1.48776 6.42735ZM13.2451 21.2643C13.2451 21.8368 13.7366 22.3025 14.341 22.3025C14.9452 22.3025 15.437 21.8368 15.437 21.2643C15.437 20.692 14.9452 20.2263 14.341 20.2263C13.7366 20.2263 13.2451 20.692 13.2451 21.2643ZM5.54895 21.2643C5.54895 21.8368 6.04055 22.3025 6.64492 22.3025C7.24929 22.3025 7.74089 21.8368 7.74089 21.2643C7.74089 20.692 7.24929 20.2263 6.64492 20.2263C6.04055 20.2263 5.54895 20.692 5.54895 21.2643ZM2.47078 7.24252C2.30902 7.41751 2.23995 7.65551 2.27636 7.913L2.66912 10.7043H7.11355L6.85091 6.97118H3.14677C2.87239 6.97118 2.63238 7.06753 2.47078 7.24252ZM11.747 15.6749L12.0098 11.9418H8.50992L8.77273 15.6749H11.747ZM12.0969 10.7043L12.3595 6.97118H8.16019L8.42283 10.7043H12.0969ZM13.6688 6.97118L13.4061 10.7043H18.3168L18.8423 6.97118H13.6688ZM18.1426 11.9418H13.319L13.0562 15.6749H17.6172L18.1426 11.9418ZM4.54603 15.6749H7.46345L7.20064 11.9418H2.84331L3.21311 14.5696C3.29748 15.1688 3.90798 15.6749 4.54603 15.6749Z" fill="white"/>
                </svg>
              </div>
              <div class="item-buy-now" >
                <div>Buy Now</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.40105 11.8394C6.17735 11.6157 6.17735 11.254 6.40105 11.0303L11.5956 5.83574C11.8193 5.61205 12.181 5.61205 12.4047 5.83574L17.5992 11.0303C17.8229 11.254 17.8229 11.6157 17.5992 11.8394C17.3755 12.0631 17.0138 12.0631 16.7901 11.8394L12.0001 7.04947L7.2102 11.8394C6.98651 12.0631 6.62474 12.0631 6.40105 11.8394ZM17.5992 16.2248C17.8229 16.4485 17.8229 16.8102 17.5992 17.0339C17.3755 17.2576 17.0138 17.2576 16.7901 17.0339L12.0001 12.244L7.2102 17.0339C6.98651 17.2576 6.62474 17.2576 6.40105 17.0339C6.17735 16.8102 6.17735 16.4485 6.40105 16.2248L11.5956 11.0303C11.8193 10.8066 12.181 10.8066 12.4047 11.0303L17.5992 16.2248Z" fill="#AFAFAF"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.913433 7.40754C2.77092 2.92293 7.14725 -0.000839279 12.0012 3.48433e-05C15.1854 -0.00765746 18.2404 1.2586 20.4857 3.51664C25.1714 8.20265 25.1714 15.7998 20.4857 20.4855C15.7999 25.1715 8.20283 25.1715 3.51689 20.4855C0.0835507 17.0542 -0.943706 11.8923 0.913433 7.40754ZM1.11675 12.0011C1.11675 18.0016 6.00077 22.8858 12.0012 22.8858C18.0016 22.8858 22.8858 18.0016 22.8858 12.0011C22.8858 6.00055 18.0016 1.11647 12.0012 1.11647C6.00077 1.11647 1.11675 6.00055 1.11675 12.0011Z" fill="#AFAFAF"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>


<script>

import {mapGetters} from "vuex";

export default {
  props: {
    isOpen: Boolean,
    itemId: Number
  },
  emits: ['close'],
  computed: {
    ...mapGetters(['getCartItems']),
    items() {
      return this.getCartItems;
    }
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
    removeFromCart (id) {
      this.$store.commit('removeFromCart', id);
    },
    showItemDetails (item) {
      this.$store.commit('showItemPopup', item.id);
    }
  }
};
</script>

<style scoped>
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
.cart-empty-text {
  font-family: system-ui;
  padding: 100px;
}
.cart-header {
  font-size: 30px;
  line-height: 1;
  margin-bottom: 50px;
}

.cart-item {
  font-family: system-ui;
}

.cart-item:not(:last-child){
  border-bottom: 1px solid #00000029;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.item__img {
  width: 100px;
}
.item-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 44px;
}

.item-remove-from-cart {
  background: #973d3dc2;
  padding: 10px 25px;
  border-radius: 21px;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  gap: 9px;
  color: white;
  svg {
    path {
      fill: white;
    }
  }
}

.item-remove-from-cart:hover {
  transition: 0.3s;
  box-shadow: 0px 0px 20px 0px rgb(219 0 0 / 49%);
}

.item-buy-now {
  background: #69973d;
  padding: 10px 25px;
  border-radius: 21px;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  gap: 9px;
  color: white;
  justify-content: center;
  margin-top: 10px;
  svg {
    transform:  rotate(90deg);;
    path {
      fill: white;
    }
  }
}

.item-buy-now:hover {
  transition: 0.3s;
  box-shadow: 0px 0px 20px 0px rgb(105 151 61);
}

@media screen and (max-width: 768px) {
  .item-wrapper {
    flex-direction: column;
    gap: 16px;
  }
  .popup-content {
    padding: 54px 20px 20px 20px;
  }
  .popup-body {
    overflow: scroll;
    max-height: 60vh;
    padding-bottom: 34px;
  }
  .cart-empty-text {
    padding: 25px;
  }
}

</style>
