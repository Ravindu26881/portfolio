<template>
  <router-view/>
  <transition  name="fade" appear>
    <item-popup :isOpen="showItemPopup" :itemId="itemId" @close="hideItemPopup"/>
  </transition>
  <transition  name="fade" appear>
    <cart-popup :isOpen="showCartPopup"  @close="hideCartPopup"/>
  </transition>
  <billing-popup :isOpen="showBillingPopup"/>
  <floating-cart v-if="showFloatingCart"/>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "App",
  computed: {
    ...mapGetters(['getShowItemPopup', 'getItemPopupId', 'getShowCartPopup', 'getShowFloatingCart', 'getShowBillingPopup']),
    showItemPopup() {
      return this.getShowItemPopup;
    },
    showCartPopup() {
      return this.getShowCartPopup;
    },
    showFloatingCart() {
      return this.getShowFloatingCart;
    },
    showBillingPopup() {
      return this.getShowBillingPopup;
    },
    itemId() {
      return this.getItemPopupId;
    }
  },
  methods: {
    hideItemPopup() {
      this.$store.commit('hideItemPopup');
    },
    hideCartPopup() {
      this.$store.commit('hideCartPopup');
    }
  }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@font-face {
  font-family: 'MyFont';
  src: url('@/assets/fonts/OvercameDemoRegular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
  background: #cfcfcf;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
}

#app {
  user-select: none;
  cursor: default;
  font-family: 'MyFont', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.3s ease;
}
.fade-enter {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
<script setup>
import ItemPopup from "@/components/popups/ItemPopup.vue";
import FloatingCart from "@/components/sub-components/FloatingCart.vue";
import CartPopup from "@/components/popups/CartPopup.vue";
import BillingPopup from "@/components/popups/BillingPopup.vue";
</script>
