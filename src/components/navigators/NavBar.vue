<template>
  <div class="gc-navbar__wrapper" :class="menuClasses">
    <img v-if="!isMobile" @click="toggleMenu" src="https://img.icons8.com/?size=256&id=m1HKje56PCAW&format=png" style="    height: 36px; filter: invert(1)"/>
    <div class="gc-navbar__link" @click="showCartPopup">Shopping Cart</div>
    <div class="gc-navbar__link" @click="showCartPopup"><svg  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.48776 6.42735C1.90111 5.98005 2.49035 5.73368 3.14677 5.73368H19.0163L19.176 4.5993C19.3481 3.37727 20.2463 2.41998 21.2208 2.41998H22.3868C22.7476 2.41998 23.04 2.69697 23.04 3.03873C23.04 3.3805 22.7476 3.65748 22.3868 3.65748H21.2208C21.0112 3.65748 20.5674 4.07723 20.471 4.76285L18.6012 18.047C18.5189 18.6325 18.2013 19.1807 17.707 19.5906C17.3404 19.8947 16.9072 20.0969 16.4533 20.1815C16.6382 20.5036 16.7434 20.8726 16.7434 21.2643C16.7434 22.5192 15.6656 23.54 14.341 23.54C13.0164 23.54 11.9387 22.5192 11.9387 21.2643C11.9387 20.8905 12.0349 20.5377 12.2044 20.2263H8.78157C8.95099 20.5377 9.04727 20.8905 9.04727 21.2643C9.04727 22.5192 7.9695 23.54 6.64492 23.54C5.32033 23.54 4.24257 22.5192 4.24257 21.2643C4.24257 20.8905 4.33884 20.5377 4.50827 20.2263H2.79687C2.43625 20.2263 2.14368 19.9491 2.14368 19.6075C2.14368 19.2658 2.43625 18.9888 2.79687 18.9888H15.9735C16.6117 18.9888 17.222 18.4825 17.3064 17.8832L17.443 16.9124H12.3592C12.359 16.9124 12.3588 16.9126 12.3586 16.9126C12.3585 16.9126 12.3583 16.9124 12.358 16.9124H8.16155C8.16138 16.9124 8.16121 16.9126 8.16087 16.9126C8.1607 16.9126 8.1607 16.9124 8.16053 16.9124H4.54603C3.92243 16.9124 3.30684 16.6867 2.81252 16.2769C2.3182 15.867 2.00062 15.3187 1.91829 14.7331L0.981369 8.07671C0.894617 7.46038 1.07442 6.87466 1.48776 6.42735ZM13.2451 21.2643C13.2451 21.8368 13.7366 22.3025 14.341 22.3025C14.9452 22.3025 15.437 21.8368 15.437 21.2643C15.437 20.692 14.9452 20.2263 14.341 20.2263C13.7366 20.2263 13.2451 20.692 13.2451 21.2643ZM5.54895 21.2643C5.54895 21.8368 6.04055 22.3025 6.64492 22.3025C7.24929 22.3025 7.74089 21.8368 7.74089 21.2643C7.74089 20.692 7.24929 20.2263 6.64492 20.2263C6.04055 20.2263 5.54895 20.692 5.54895 21.2643ZM2.47078 7.24252C2.30902 7.41751 2.23995 7.65551 2.27636 7.913L2.66912 10.7043H7.11355L6.85091 6.97118H3.14677C2.87239 6.97118 2.63238 7.06753 2.47078 7.24252ZM11.747 15.6749L12.0098 11.9418H8.50992L8.77273 15.6749H11.747ZM12.0969 10.7043L12.3595 6.97118H8.16019L8.42283 10.7043H12.0969ZM13.6688 6.97118L13.4061 10.7043H18.3168L18.8423 6.97118H13.6688ZM18.1426 11.9418H13.319L13.0562 15.6749H17.6172L18.1426 11.9418ZM4.54603 15.6749H7.46345L7.20064 11.9418H2.84331L3.21311 14.5696C3.29748 15.1688 3.90798 15.6749 4.54603 15.6749Z" fill="white"/>
    </svg></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuHidden: false
    }
  },
  computed: {
    menuClasses() {
      return {
        'gc-navbar__wrapper-visible': !this.menuHidden,
        'gc-navbar__wrapper-hidden': this.menuHidden && !this.isMobile,
        'gc-navbar__wrapper-mobile': this.isMobile
      }
    },
  },
  props: {
    isMobile: Boolean
  },
  methods: {
    toggleMenu() {
      this.menuHidden = !this.menuHidden
      setTimeout(() => {
        this.menuHidden = true
      }, 5000)
    },
    showCartPopup() {
      this.$store.commit('showCartPopup');
    }
  },
  mounted() {
    setTimeout(() => {
      this.menuHidden = true
    }, 3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gc-navbar__wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  background: #53220080;
  border-radius: 66px;
  margin: 28px;
  color: #ffffff;
  box-shadow: -1px 0px 20px 0px #0000006e;
  position: absolute;
  right: -202px;
  padding: 14px 20px;
  transition: 0.2s ease-in-out;
}
.gc-navbar__wrapper img {
  -webkit-transform: unset;
  transform: unset;
  transition: 0.6s ;
}

.gc-navbar__wrapper-mobile {
  right: 0;
  background: none;
  box-shadow: none;
  margin: inherit;
  padding: 22px 16px 0 0;
  color: rgba(83, 34, 0, 0.5);
  gap: 6px;
  svg {
    path {
      fill:rgba(83, 34, 0, 0.5);
    }
  }
}

.gc-navbar__wrapper-hidden:hover {
  right: -211px;
  transition: 0.1s ease-in-out;
}


.gc-navbar__wrapper-visible {
  right: 0;
  transition: 0.2s ease-in-out;
}

.gc-navbar__wrapper-visible img {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  transition: 0.6s;
}
.gc-navbar__link {
  cursor: pointer;
  transition: 0.3s;
  font-weight: 100;
}

.gc-navbar__link:hover {
  transition: 0.3s;
  text-shadow: 0 0 10px rgb(0 0 0 / 1%), 0 0 20px rgb(255 255 255 / 84%), 0 0 30px rgb(255 255 255);
}


</style>
