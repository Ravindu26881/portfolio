<template>
  <div class="star-rating">
    <span
        v-for="star in 5"
        :key="star"
        class="star"
        :class="{ filled: star <= Math.round(rating) }"
    >★</span>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.star-rating {
  color: #ddd;
  font-size: 20px;
}
.star {
  color: #ddd; /* Default empty star color */
}
.filled {
  color: gold; /* Filled star color */
}
</style>
