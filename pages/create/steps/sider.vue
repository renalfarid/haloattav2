<template>
  <a-steps direction="vertical" :current="active">
    <a-step title="Jadwal dan Jumlah Pax" description="Pembuatan tanggal keberangkatan dan jumlah pax" />
    <a-step title="Tiket Group" description="Pilihan tiket group sesuai jadwal dan jumlah pax" />
    <a-step title="LA Akomodasi" description="Pilihan LA Akomodasi (Hotel) sesuai jadwal dan jumlah pax" />
    <a-step title="Visa Umrah" description="Pilihan Visa Umrah sesuai jadwal dan jumlah pax" />
    <a-step title="Asuransi Perjalanan" description="Pilihan Asuransi Perjalanan Anda sesuai jadwal dan jumlah pax" />
    <a-step title="Komponen Pilihan" description="Komponen Pilihan untuk memudahkan Perjalanan anda" />
    <a-step title="Pengaturan Margin" description="Tentukan Margin atau Keuntungan Anda" />
    <a-step title="Tampilan Paket Umrah" description="Atur tampilan dan tanggal publish paket umrah anda" />
    <a-step title="Preview Pesanan" description="Review pesanan anda terlebih dahulu" />
    <a-step title="Pembayaran" description="Pilih opsi pembayaran anda" />
    <a-step title="Selesai" />
  </a-steps>
</template>
<script>
export default {
  props: ["active"]
};
</script>
