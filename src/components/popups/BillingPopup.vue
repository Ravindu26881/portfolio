<template>
  <div v-if="isOpen" class="popup-overlay cart-popup" @click.self="closePopup">
    <div class="popup-content">
      <div class="popup-body">
      <button class="close-btn" @click="closePopup">✖</button>
        <div style="font-family: system-ui;" v-if="state==='checkout'" class="checkout-wrapper">
          <h4 class="text-2xl font-bold mb-4" style="margin-bottom: 22px;">Checkout</h4>
          <div v-for="item in items" :key="item.text">
            <div class="item-wrapper">
              <div>
                <img :src="item.img" alt="item" class="card-img-top item__img"/>
                <h5 class="card-title">{{ item.text }}</h5>
              </div>
              <div class="card-body">
                <div>Details</div>
                <div class="card-text text-muted item-price" v-if="item.selectedColor">Selected Color : {{ item.selectedColor }}</div>
                <div class="card-text text-muted item-price" v-if="item.selectedSize">Selected Size : {{ item.selectedSize }}</div>
                <div class="card-text text-muted item-price" >Selected Quantity : {{ item.quantity }}</div>
              </div>
              <div>
                <div>Price</div>
                <div class="card-text text-muted item-price"> {{ item.price }}</div>
              </div>
            </div>
          </div>
          <div class="button-proceed" @click="changeState('billing')">
            <div>Confirm</div>
          </div>
        </div>
        <div style="font-family: system-ui;" v-if="state==='billing'" class="billing-wrapper">
          <h4 class="text-2xl font-bold mb-4" style="margin-bottom: 22px;">Billing</h4>
          <div class="item-wrapper">
            <div class="billing-delivery-info-wrapper">
              <div class="billing-section-header">Delivery Info</div>
              <div class="billing-input-header">Shipping Address</div>
              <input type="text" class="form-control" placeholder="Enter your shipping address" />
              <div class="billing-input-header">Email</div>
              <input type="email" class="form-control" placeholder="Enter your Email" />
              <div class="billing-input-header">Contact No</div>
              <input type="number" class="form-control" placeholder="Enter your Contact No" />
            </div>
            <div class="billing-payment-info-wrapper">
              <div class="billing-section-header">Payment Details</div>
              <div class="billing-input-header">Card Number</div>
              <input type="number" class="form-control" placeholder="Enter your Card Number" />
              <div class="billing-input-header">Exp Date</div>
              <input type="number" class="form-control" placeholder="Enter your Card Exp Date" />
              <div class="billing-input-header">CVC</div>
              <input type="number" class="form-control" placeholder="Enter your Card CVC" />
            </div>
          </div>
          <div class="button-proceed" @click="changeState('success')">
            <div>Proceed</div>
          </div>
        </div>
        <div v-if="state==='success'" style="font-family: system-ui;" class="billing-wrapper__success">
            <div class="success-header">Order Successfully Placed!</div>
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
      state: 'checkout' // checkout, billing, success
    };
  },
  mounted() {
    this.state = 'checkout';
  },
  computed: {
    items() {
      return this.$store.getters.getBillingItems;
    },
  },
  methods: {
    closePopup() {
      this.state = 'checkout';
      this.$emit('close');
    },
    changeState(state) {
      this.state = state;
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
  padding-bottom: 0;
  border-radius: 21px;
  border-bottom-right-radius: 26px;
  min-width: 355px;
  margin: 100px;
  position: relative;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 49%);
  min-width: 565px;
}

.checkout-wrapper {
  max-height: 60vh;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 74px;
}

.checkout-wrapper::-webkit-scrollbar {
  display: none;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 22px;
}

.button-proceed {
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  right: 0;
  background: #9f7922;
  padding: 18px;
  width: 37%;
  border-top-left-radius: 32px;
  border-bottom-right-radius: 21px;
  transition: 0.3s;
  color: white;

}

.button-proceed:hover {
  transition: 0.3s;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 49%);
}

.billing-section-header {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 18px;
}
.billing-input-header {
  font-weight: 600;
  margin-bottom: 6px;
  text-align: left;
}
input {
  margin-bottom: 10px;
}
.success-header {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 50px;
}

.billing-wrapper {
  .item-wrapper {
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 768px) {
  .popup-content {
    min-width: 365px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .popup-body {
    max-height: 70vh;
    overflow: scroll;
  }
  .billing-wrapper {
    .item-wrapper {
      flex-direction: column;
      padding-bottom: 40px;
    }
    .billing-delivery-info-wrapper {
      margin-bottom: 20px;
    }
    .button-proceed {
      box-shadow: -20px -17px 20px 8px rgb(255 255 255 / 83%);
    }
  }
}

</style>
