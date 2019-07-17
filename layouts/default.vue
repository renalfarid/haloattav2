<template>
  <div>
    <no-ssr>
      <a-layout>
        <navbar />

        <a-layout-content>
          <nuxt/>
        </a-layout-content>

        <a-layout-footer :style="{ background: '#fff', padding: '24px 0' }">
          <Footer/>
        </a-layout-footer>
        <a-back-top />
      </a-layout>
    </no-ssr>
  </div>
</template>
<script>
import Navbar from "~/components/header/navbar.vue";
import Footer from "~/components/footer/footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
