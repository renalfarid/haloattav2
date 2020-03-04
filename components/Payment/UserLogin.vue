<template>
  <a-card class="b-solid b-radius mb-16">
    <div class="d-flex align-items-center w-100">
      <div>
        <a-avatar
          class="mr-16"
          size="large"
          :style="{
            'background-color': '#87d068',
            'min-width': '40px'
          }"
          icon="user"
        />
      </div>
      <div>
        <div class="fs-14 fw-400 cr-gray text-capitalize">
          Anda Login sebagai
        </div>
        <div class="fs-16 fw-500 cr-black text-capitalize">
          {{ $store.state.auth.nama }}
        </div>
      </div>
    </div>
  </a-card>
</template>
