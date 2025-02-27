<template>
  <div class="gc-dashboard__wrapper">
      <nav-bar :isMobile="isMobile"/>
    <div class="gc-dashboard__elements">
      <div class="company-logo" v-if="!isMobile">
        <div>Foot</div><div style="color: #53220080;">wear</div>
      </div>
      <div class="company-logo" v-if="isMobile">
        <div>F</div><div style="color: #53220080;">W</div>
      </div>
      <div class="hottest-item">
        <div class="hottest-item__background-text">
        <div class="welcome_header welcome_header-1" :class="isViewMoreHovered ? 'welcome_header__hide' : ''">hottest This month</div>
        <div class="welcome_header welcome_header-2" :class="isViewMoreHovered ? 'welcome_header__hide' : ''">hottest This month</div>
        <div class="welcome_header welcome_header-3" :class="isViewMoreHovered ? 'welcome_header__hide' : ''">hottest This month</div>
        </div>
        <img src="../assets/img/shoe2.png"  class="image-item__large" :class="isViewMoreHovered ? 'image-item__large__view-more' : ''"/>
        <img src="../assets/img/shoe1.png" class="view-more__second-item" :class="isViewMoreHovered ? 'view-more__second-item__visible' : ''"/>
      </div>
      <div style="    min-height: 100px;">
        <div class="view-more__link"  @mouseover="handleViewMoreMouseEnter"
             @mouseleave="handleViewMoreMouseLeave" @click="navigateToStore">
          View More
        </div>
        <div class="view-more_background-text-2" :class="isViewMoreHovered ? 'view-more_background-text-2__visible' : ''">View More</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navigators/NavBar.vue'
export default {
  name: 'DashBoard',
  components: {
    NavBar
  },
  data() {
    return {
      isViewMoreHovered: false,
      isMobile: false
    }
  },
  mounted() {
    this.setIsMobile()
    this.$store.commit('hideFloatingCart');
  },
  created() {
    window.addEventListener("resize", this.setIsMobile);
  },
  unmounted() {
    window.removeEventListener("resize", this.setIsMobile);
  },
  methods : {
    setIsMobile () {
      if (window.innerWidth < 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    handleViewMoreMouseEnter() {
      if (!this.isMobile) {
        this.isViewMoreHovered = true;
      }
    },
    handleViewMoreMouseLeave() {
      if (!this.isMobile) {
        this.isViewMoreHovered = false;
      }
    },
    navigateToStore() {
        this.$router.push('/store');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.gc-dashboard__wrapper {
  position: relative;
}
.gc-dashboard__elements {
  padding: 20px;
}

.company-logo {
  color: #5b5b5b;
  justify-content: flex-start;
  line-height: 1;
  font-size: 45px;
  display: flex;
}

.welcome_header {
  position: absolute;
  top: 22vw;
  z-index: -1;
  font-size: 8vw;
  right: 0;
  left: 0;
  transition: 0.3s;
}

.welcome_header-2 {
  top: 28vw;
}

.welcome_header-3 {
  top: 16vw;
}

.welcome_header__hide {
  top: -100vh;
  transition: 0.3s;
}

.hottest-item__background-text {
  color: #53220080;
}

.image-item__large {
  width: 60vw;
  max-width: 690px;
  transition: 0.2s;
}


.image-item__large__view-more {
  transition: 0.2s;
  margin-left: 206px;
}

.welcome_header:hover {
  filter: invert(1);
  transition: 0.2s;
}

.hottest-item {
  min-height: 80vh;
}

.view-more__link {
  position: absolute;
  right: 10%;
  color: #000000;
  transition: 0.2s;
  font-size: 32px;
}

.view-more__link:hover {
  color: #5b5b5b;
  cursor: pointer;
  transition: 0.2s;
}

.view-more_background-text-1 {
  position: absolute;
  font-size: 8vw;
  top: 70vh;
  left: -100vw;
  transition: 0.3s;
}

.view-more_background-text-1__visible {
  left: 58px;
  transition: 0.3s;
  top: 70vh;
  z-index: -1;
}

.view-more_background-text-2 {
  position: absolute;
  right: 145px;
  transition: 0.3s;
  top: 74vh;
  z-index: -1;
  font-size: 9vw;
  color: #53220080;
  opacity: 0;
}

.view-more_background-text-2__visible {
  right: 145px;
  opacity: 1;
  transition: 0.3s;
}

.view-more__second-item {
  position: absolute;
  left: -100vw;
  z-index: -1;
  width: 36vw;
  transition: 0.3s;
}

.view-more__second-item__visible {
  left: 16vw;
  transition: 0.3s;
}


@media screen and (max-width: 768px) {
  .welcome_header {
    top: 99vw;
  }
  .welcome_header-2 {
    top: 105vw;
  }
  .welcome_header-3 {
    top: 111vw;
  }
  .image-item__large {
    width: 87vw;
    position: relative;
    top: 48px;
  }
}




@keyframes slideInOut {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.shakeAnimation {
  animation: slideInOut 2s ease-in-out infinite;
}
</style>
