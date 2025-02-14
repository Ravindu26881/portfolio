<template>
  <!--  <div class="home">-->
  <!--    <Dashboard />-->
  <!--  </div>-->

  <div :style="{ color: textColor }">
    <img ref="image" src="../assets/img/shoe1.png" @load="updateTextColor" alt="Sample Image" />
    <p>This text color changes based on the dominant color of the image.</p>
  </div>
</template>

<script>
import ColorThief from 'colorthief';

export default {
  name: 'DynamicTextColor',
  data() {
    return {
      textColor: 'black', // Default text color
    };
  },
  methods: {
    // Function to get the dominant color from the image
    getDominantColor(image) {
      const colorThief = new ColorThief();
      return colorThief.getColor(image);
    },
    // Function to calculate contrast color (light or dark)
    getContrastColor(rgb) {
      const [r, g, b] = rgb;

      return 'rgb('+r+', '+g+', '+b+')';
    },
    // Function to update the text color based on the dominant color
    updateTextColor() {
      console.log('Image loaded, updating text color...');
      const image = this.$refs.image;
      if (image.complete) {
        const dominantColor = this.getDominantColor(image);
        this.textColor = this.getContrastColor(dominantColor);
        console.log('Dominant color:', dominantColor, 'Text color:', this.textColor);
      }
    },
  },
  mounted() {
    // Ensure the image is loaded before extracting the color
    const image = this.$refs.image;
    if (image.complete) {
      this.updateTextColor();
    } else {
      image.addEventListener('load', this.updateTextColor);
    }
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
}
</style>
