<template>
  <div v-if="isOpen" class="popup-overlay cart-popup" @click.self="closePopup">
    <div class="popup-content">
      <div class="popup-body">
      <button class="close-btn" @click="closePopup">✖</button>
        <h2 class="text-2xl font-bold mb-4">Checkout</h2>
        <div style="font-family: system-ui;" v-if="!orderPlaced" class="billing-wrapper">
          <div v-for="item in items" :key="item.text">
            <div class="item-wrapper">
              
              <img :src="item.img" alt="item" class="card-img-top item__img"/>
              <div class="card-body">
                <h5 class="card-title">{{ item.text }}</h5>

                <div class="card-text text-muted item-price">Price : {{ item.price }}</div>
                <div class="card-text text-muted item-price" v-if="item.selectedColor">Selected Color : {{ item.selectedColor }}</div>
                <div class="card-text text-muted item-price" v-if="item.selectedSize">Selected Size : {{ item.selectedSize }}</div>
                <div class="card-text text-muted item-price" >Selected Quantity : {{ item.quantity }}</div>
              </div>
            </div>
          </div>
        </div>


        <div v-if="orderPlaced" style="font-family: system-ui;" class="billing-wrapper__success">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      orderPlaced: false
    };
  },
  computed: {
    items() {
      return this.$store.getters.getBillingItems;
    },
  },


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
  min-width: 355px;
  margin: 100px;
  position: relative;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 49%);

}

.close-btn {
  padding: 0;
  position: absolute;
  top: 10px;
  right: 22px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.item__img {
  width: 77px;
  height: 77px;
}

.item-wrapper {
  display: flex
}
</style>
