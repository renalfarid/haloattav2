<template>
  <a-steps direction="vertical" :current="active">
    <a-step title="Jadwal dan Jumlah Pax" description="Langkah ke 1" />
    <a-step title="Tiket Group" description="Langkah ke 2" />
    <a-step title="LA Akomodasi" description="Langkah ke 3" />
    <a-step title="Visa Umrah" description="Langkah ke 4" />
    <a-step title="Asuransi Perjalanan" description="Langkah ke 5" />
    <a-step title="Komponen Pilihan" description="Langkah ke 6" />
    <a-step title="Pengaturan Margin" description="Langkah ke 7" />
    <a-step title="Tampilan Paket Umrah" description="Langkah ke 8" />
    <a-step title="Preview Pesanan" description="Langkah ke 9" />
    <a-step title="Pembayaran" description="Langkah ke 10" />
    <a-step title="Selesai" />
  </a-steps>
</template>
<script>
export default {
  props: ["active"],
  data() {
    return {
      selectedpages: ["setting"]
    };
  }
};
</script>
