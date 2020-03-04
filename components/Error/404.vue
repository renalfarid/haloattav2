<template>
  <div class="md-layout--error d-flex a-i-center">
    <div class="md-layout--body-error">
      <div class="d-flex a-i-center">
        <div class="md-error--icons">
          <img :src="require('~/static/illu/blank.svg')" alt="Error 404" />
        </div>
        <div class="md-error--text">
          <h2>404</h2>
          <p>
            Maaf, Kami tidak dapat menemukan halaman yang sedang anda cari
          </p>

          <nuxt-link to="/">Kembali ke Beranda</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error-404",
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout--error {
  background-color: #ffffff;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  & .md-layout--body-error {
    margin: 0 auto;
    & .md-error--icons {
      margin-right: 64px;
      & img {
        max-width: 100%;
        max-height: 224px;
      }
    }

    & .md-error--text {
      & h2 {
        color: rgba($color: #000000, $alpha: 1);
        letter-spacing: 1px;
        font-size: 64px;
        font-weight: 700;
        line-height: 64px;
        text-align: left;
      }

      & p {
        color: rgba($color: #000000, $alpha: .5);
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 28px;
        max-width: 369px;
      }

      & a {
        color: rgba($color: #000000, $alpha: .5);
        transition: all .2s ease-in-out;
        display: inline-block;
        letter-spacing: .5px;
        font-size: 14px;
        &:hover,
        &:focus {
          color: rgba($color: #000000, $alpha: 1);
          text-decoration: none;
        }
      }
    }
  }
}
</style>
