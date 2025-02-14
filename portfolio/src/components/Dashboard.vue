<template>
  <div class="gc-dashboard__wrapper">
      <nav-bar/>
    <div class="gc-dashboard__elements">
      <div class="company-logo">Footwear</div>

      <div class="hottest-item">
        <div class="hottest-item__background-text">
        <div class="welcome_header welcome_header-1" :class="isViewMoreHovered ? 'welcome_header__hide' : ''">hottest This month</div>
        <div class="welcome_header welcome_header-2" :class="isViewMoreHovered ? 'welcome_header__hide' : ''">hottest This month</div>
        <div class="welcome_header welcome_header-3" :class="isViewMoreHovered ? 'welcome_header__hide' : ''">hottest This month</div>
        </div>
        <img src="../assets/img/shoe2.png" class="image-item__large"/>
      </div>
      <div>
        <div class="view-more__link"  @mouseover="handleViewMoreMouseEnter"
             @mouseleave="handleViewMoreMouseLeave">
          View More
        </div>
        <div class="view-more_background-text-1" :class="isViewMoreHovered ? 'view-more_background-text-1__visible' : ''">View More</div>
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
      isViewMoreHovered: false
    }
  },
  methods : {
    handleViewMoreMouseEnter() {
      this.isViewMoreHovered = true;
    },
    handleViewMoreMouseLeave() {
      this.isViewMoreHovered = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gc-dashboard__elements {
  padding: 20px;
}

.company-logo {
  color: #ffffff;
  width: 18vw;
  line-height: 1;
  font-size: 45px;
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
  top: 34vw;
}

.welcome_header__hide {
  top: -100vh;
  transition: 0.3s;
}

.image-item__large {
  width: 60vw;
  max-width: 690px;
  transition: 0.2s;
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
  color: white;
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
  right: -100vw;
  transition: 0.3s;
  top: 74vh;
  z-index: -1;
  font-size: 9vw;
}

.view-more_background-text-2__visible {
  right: 145px;
  transition: 0.3s;
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
