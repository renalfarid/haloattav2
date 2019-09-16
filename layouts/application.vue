<template>
  <div>
    <client-only>
      <nuxt />
      <div slot="placeholder" class="ant-spin-placeholder">
        <a-spin tip="Mohon Tunggu Sebentar..." />
      </div>
    </client-only>
  </div>
</template>
