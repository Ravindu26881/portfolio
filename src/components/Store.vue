<template>
  <div class="store__wrapper">
    <div class="company-logo" v-if="!isMobile">
      <div>Foot</div><div style="color: #53220080;">wear</div><div>Store</div>
    </div>
    <div class="company-logo" v-if="isMobile">
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

      <div class="container">
        <div class="row">
          <div v-for="item in filteredItems" :key="item.text" class="col-md-4 col-6 mb-4">
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
  display: flex;
  font-size: 52px;
  margin-bottom: 18px;
}
.item__img {
  width: 140px;
}
.item-price {
  font-family: fantasy;
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
  max-width: 300px;
  border-radius: 21px;
  margin-bottom: 15px;
  font-family: fantasy;
  padding: 22px;
  margin-left: 15px;
  margin-top: 15px;
  margin-right: 15px;
}

.filter-search-input:focus {
  border-color: rgb(83 34 0 / 11%);
  webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px  rgb(83 34 0 / 11%);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px  rgb(83 34 0 / 11%);
}

@media screen and (max-width: 768px) {
  .item-wrapper {
    padding: 0;
  }
  .row {
    display: flex ;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .col-md-4 {
    width: 47%;
  }
}


</style>
