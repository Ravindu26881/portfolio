<template>
  <div class="gc-navbar__wrapper" :class="menuClasses">
    <img v-if="!isMobile" @click="toggleMenu" src="https://img.icons8.com/?size=256&id=m1HKje56PCAW&format=png" style="    height: 36px; filter: invert(1)"/>
    <div class="gc-navbar__link">About Us</div>
    <div class="gc-navbar__link">Contact Us</div>
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
  gap: 16px;
  background: #53220080;
  border-radius: 66px;
  margin: 28px;
  color: #ffffff;
  box-shadow: -1px 0px 20px 0px #0000006e;
  position: absolute;
  align-items: flex-start;
  right: -241px;
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
  padding: 38px 20px 0 0;
}

.gc-navbar__wrapper-hidden:hover {
  right: -230px;
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
  font-weight: 100;
}


</style>
