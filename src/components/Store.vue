<template>
<!--  <nav-bar :isMobile="true"/>-->
  <div class="store__wrapper">
    <div class="company-logo" v-if="!isMobile">
      <div>Foot</div><div style="color: #53220080;">wear</div><div>Store</div>
    </div>

    <div class="item-list__wrapper">
          <div v-for="item in itemList" :key="item.text" class="item">
            <img :src="item.img" alt="item" class="item__img"/>
            <div class="item-list__Text">
              <div class="item__text">{{item.text}}</div>
              <div class="item__price">{{item.price}}</div>
            </div>

          </div>
    </div>
  </div>
</template>

<script>

// import NavBar from "@/components/navigators/NavBar.vue";

export default {
  name: 'ItemStore',
  components: {
    // NavBar
  },
  data() {
    return {
      itemList: [
        {
          img: require('@/assets/img/shoe1.png'),
          text: 'Runners',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe2.png'),
          text: 'Walkers',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe1.png'),
          text: 'Joggers',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe2.png'),
          text: 'Sprinters',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe1.png'),
          text: 'Casual',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe2.png'),
          text: 'Sneakers',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe1.png'),
          text: 'Runners',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe2.png'),
          text: 'Walkers',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe1.png'),
          text: 'Joggers',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe2.png'),
          text: 'Sprinters',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe1.png'),
          text: 'Casual',
          price: 'Coming Soon'
        },
        {
          img: require('@/assets/img/shoe2.png'),
          text: 'Sneakers',
          price: 'Coming Soon'
        }
      ]
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style scoped>
.store__wrapper {
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.company-logo {
  display: flex;
}
.gc-navbar__wrapper-mobile {
  padding: 20px 20px 0 0;
  color: black;
}

.item__img {
  width: 140px;
}
.item {
  display: flex;
  align-items: center;
}
.item-list__wrapper {
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  background: white;
  border-radius: 21px;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 15%);
  margin-top: 26px;
  flex-direction: column;
  align-content: flex-start;
}
</style>
