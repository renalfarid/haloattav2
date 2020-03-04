<template>
  <a-comment v-if="$store.state.auth" class="ant-comment--accounts">
    <template slot="actions">
      <a-tag>
        <div class="d-flex align-items-center">
          <a-icon type="gold" />
          <span class="mr-4">{{ this.$store.state.auth.poin }}</span>
          POIN
        </div>
      </a-tag>
      <a-tag>
        <div class="d-flex align-items-center">
          <a-icon type="wallet" />
          <span class="text-uppercase mr-4">{{
            this.$store.state.auth.saldo | currency
          }}</span>
        </div>
      </a-tag>
    </template>

    <a slot="author" :style="{ 'text-transform': 'capitalize' }">{{
      $store.state.auth.nama
    }}</a>

    <a-avatar
      v-if="$store.state.auth && $store.state.auth.foto"
      :src="$store.state.auth.foto"
      alt="haloatta"
      slot="avatar"
    />

    <a-avatar v-else src="/brand.png" alt="haloatta" slot="avatar" />

    <p
      slot="content"
      :style="{
        'text-align': 'left',
        'white-space': 'normal',
        'margin-top': '8px'
      }"
    >
      {{ $store.state.auth.alamat }}
    </p>
  </a-comment>
</template>
