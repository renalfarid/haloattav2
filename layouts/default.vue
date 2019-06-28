<template>
  <div>
    <no-ssr>
      <a-layout>
        <a-affix :offsetTop="0" @change="change">
          <Navbar/>
        </a-affix>

        <a-layout-content>
          <nuxt/>
        </a-layout-content>

        <a-layout-footer :style="{ background: '#f5f5f5' }">
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
  },
  methods: {
    change(affixed) {
      console.log(affixed);
    }
  }
};
</script>
