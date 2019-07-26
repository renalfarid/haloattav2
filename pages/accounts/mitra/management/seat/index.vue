<template>
  <div class="ant-layout--accounts-management">
    <div class="fs-18 fw-500 cr-black">Manajemen Seat</div>
    <div class="fs-14 fw-400 cr-gray">Lengkapi berkas formulir jemaah anda</div>
    <a-row :gutter="24" class="mt-16">
      <a-col :span="6"></a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  layout: "accounts",
  name: "mitraManajemenSeat",
  head() {
    return {
      title: "Manajemen Seat - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
        
    };
  }
};
</script>