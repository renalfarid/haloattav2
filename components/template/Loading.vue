<template>
  <div class="loading-routes--page" v-if="loading">
    <a-spin tip="Mohon Tunggu Sebentar...">
      <a-icon slot="indicator" type="loading" style="font-size: 40px" spin />
    </a-spin>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style lang="scss">
.loading-routes--page {
  display: flex;
  align-items: center;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.85);
  text-align: center;
  letter-spacing: 0.5px;
  & .ant-spin {
    margin: 0 auto;
    & .ant-spin-text {
      margin-top: 16px;

      color: rgba(0, 0, 0, 0.8);

      font-size: 16px;
    }
  }
}
</style>
