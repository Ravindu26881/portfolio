<template>
  <div class="store__wrapper">
    <div class="company-logo" v-if="!isMobile" @click="navigateToDashboard">
      <div>Foot</div><div style="color: #53220080;">wear</div><div>Store</div>
    </div>
    <div class="company-logo company-logo__mobile" v-if="isMobile" @click="navigateToDashboard">
      <div>F</div><div style="color: #53220080;">W</div><div>Store</div>
    </div>

    <div class="item-list__wrapper">
      <div class="filter-wrapper">
        <input
            type="text"
            class="form-control filter-search-input"
            placeholder="Search for items"
            v-model="searchQuery"
            aria-label="Search for items"
            aria-describedby="button-addon2"
        />
      </div>

      <div class="">
        <div class="row-items">
          <div v-for="item in filteredItems" :key="item.text" class="">
            <div @click="showItemDetails(item)" class="card item shadow-sm p-3 text-center">
              <div class="item-wrapper">
                <img :src="item.img" alt="item" class="card-img-top item__img"/>
                <div class="card-body">
                  <h5 class="card-title">{{ item.text }}</h5>

                  <p class="card-text text-muted item-price">{{ item.price }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="filteredItems.length === 0" class="col-12 text-center mt-3">
            <p>No items found.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ItemStore',
  data() {
    return {
      isMobile: false,
      searchQuery: "",
      showItemDetailsPopup: false,
      itemDetailsItem: {}
    };
  },
  created() {
    window.addEventListener("resize", this.setIsMobile);
  },
  unmounted() {
    window.removeEventListener("resize", this.setIsMobile);
  },
  methods: {
    setIsMobile () {
      if (window.innerWidth < 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    showItemDetails (item) {
     this.$store.commit('showItemPopup', item.id);
    },
    navigateToDashboard() {
      this.$router.push('/');
    }
  },
  mounted() {
    this.setIsMobile()
    this.$store.commit('showFloatingCart');
  },
  computed: {
    ...mapGetters(['getItems']),
    filteredItems() {
      if (!this.searchQuery) return this.itemList; // Show all items if search is empty
      const query = this.searchQuery.toLowerCase();
      return this.itemList.filter(item => item.text.toLowerCase().includes(query));
    },
    itemList() {
      return this.getItems;
    }
  }
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
  cursor: pointer;
  display: flex;
  font-size: 52px;
  margin-bottom: 18px;
  transition: 0.3s;
}
.company-logo:hover {
  transition: 0.3s;
  text-shadow: 0 0 10px rgb(0 0 0 / 1%), 0 0 20px white, 0 0 30px rgb(255 255 255);
}
.company-logo__mobile {
  font-size: 27px;
  margin-bottom: 0;
}
.item__img {
  width: 140px;
}
.item-price {
  font-family: system-ui;
  font-weight: 600;
}
.item {
  text-align: center;
  margin-bottom: 12px;
}
.item-list__wrapper {
  padding: 10px 10px 65px 10px;
  background: #ffffffbd;
  border-radius: 21px;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 15%);
  margin-top: 26px;
}
.item-wrapper {
  border-radius: 31px;
  padding: 34px;
  transition: 0.3s;
}
.item-wrapper:hover {
  background: rgb(83 34 0 / 11%);
  transition: 0.3s;
}
.filter-search-input {
  width: -webkit-fill-available;
  max-width: 200px;
  border-radius: 21px;
  margin-bottom: 15px;
  padding: 22px;
  margin-left: 20px;
  margin-top: 15px;
  margin-right: 15px;
  font-family: system-ui;
  font-weight: 600;
}

.filter-search-input:focus {
  border-color: rgb(83 34 0 / 11%);
  webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px  rgb(83 34 0 / 11%);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px  rgb(83 34 0 / 11%);
}

.row-items {
  display: grid;
  width: 80vw;
  grid-template-columns: auto auto auto auto auto auto;
  width: 100%;
}

@media screen and (max-width: 1350px) {
  .row-items {
    grid-template-columns: auto auto auto auto;
  }
}

@media screen and (max-width: 1000px) {
  .row-items {
    grid-template-columns: auto auto auto;
  }
}

@media screen and (max-width: 768px) {
  .item-wrapper {
    padding: 0;
  }
  .item-list__wrapper {
    padding: 0;
    width: 100vw;
  }
}

@media screen and (max-width: 500px) {
  .row-items {
    grid-template-columns: auto auto;
  }
}


</style>
