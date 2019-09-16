<template>
  <div>
    <no-ssr>
      <nuxt />
      <div slot="placeholder" class="ant-spin-placeholder">
        <a-spin tip="Mohon Tunggu Sebentar..." />
      </div>
    </no-ssr>
  </div>
</template>
