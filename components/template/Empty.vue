<template>
  <div class="md-empty">
    <img v-if="voucher" :src="require('~/static/illu/illu_voucher_gift.svg')" />
    <img v-if="transaction" :src="require('~/static/illu/illu_empty.svg')" />
    <p class="md-empty--text">{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: {
    voucher: Boolean,
    transaction: Boolean,
    label: String
  }
}
</script>

<style lang="scss">
.md-empty {
  text-align: center;
  display: block;
  padding: 64px 16px;
  & img {
    max-width: 100%;
    max-height: 240px;
    display: inline-block;
    opacity: .75;
  }

  & .md-empty--text {
    font-size: 16px;
    margin: 24px 0;
    color: rgba($color: #000000, $alpha: .6);
  }  
}
</style>