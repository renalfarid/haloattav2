<template>
  <LayoutHome />
</template>

<script>
import LayoutHome from "@/components/App/Home/Layout";
import Meta from "@/assets/mixins/meta";

export default {
  mixins: [Meta],

  components: {
    LayoutHome
  },

  data() {
    return {
      meta: {
        title: "Pesan Paket Umrah dan Komponen Umrah Lainnya - Haloatta",
        url: "https://www.haloatta.com/"
      }
    }
  }
};
</script>
