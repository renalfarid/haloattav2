<template>
  <LayoutHome />
</template>

<script>
import LayoutHome from "@/components/App/Home/Layout";
export default {
  name: "home-pages",

  components: {
    LayoutHome
  },

  head() {
    return {
      title: "Haloatta - Booking Paket Umrah, Tiket, LA dan Visa"
    };
  }
};
</script>
