<template>
  <section class="container-dashboard" style="transition: all .5s cubic-bezier(.55,0,.1,1);">
    <div class="md-dashboard--body">
      <img src="/haloatta.png">
      <h1>Welcome To Dashboard</h1>
    </div>
  </section>
</template>
<script>
export default {
  layout: "accounts",
  name: "mitraAccounts",
  head() {
    return {
      title: this.title
    };
  },

  data() {
    return {
      title: "Kembangkan Bisnis Umrah Anda"
    };
  }
};
</script>
<style lang="scss">
.container-dashboard {
    align-items: center;
    min-height: 90vh;
    display: flex;

  & .md-dashboard--body {
    text-align: center;
    margin: 0 auto;

    & img {
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
      max-height: 125px;
      margin: 0 auto;
      max-width: 100%;
      opacity: .125;
    }

    & h1 {
      color: rgba(0, 0, 0, .1);
      text-transform: uppercase;
      margin-bottom: 0;
      margin-top: 20px;
    }
  }
}
</style>
