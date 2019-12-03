<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="32">
          <a-col :span="17">
            <informationOrder :la="la" :umroh="umroh" :tiket="tiket" />
          </a-col>
          <a-col :span="7">
            <informationSideRight :harga="harga" :umroh="umrohsidebar" />
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
import informationOrder from "~/components/contents/review/umrah/information-order.vue";
import informationSideRight from "~/components/contents/review/umrah/information-sideright.vue";
import moment from "moment";
import axios from "axios";
export default {
  middleware: "authenticated",
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Paket Umrah Lebih Mudah"
    };
  },
  data() {
    return {
      la: "",
      tiket: "",
      umroh: "",
      umrohsidebar: {},
      harga: ""
    };
  },
  async asyncData({ query }) {
    const myRespone = await axios.post(
      process.env.baseUrl + "paket/umroh/detail",
      { kode_produk: query.kode }
    );

    let getRespone = myRespone.data.data;

    return {
      la: getRespone.la,
      tiket: getRespone.tiket,
      umroh: getRespone.umroh,

      harga: getRespone.harga,
      umrohsidebar: {
        berangkat: getRespone.umroh.tgl_berangkat,
        program_hari: getRespone.umroh.jumlah_hari,
        kelas_bintang: getRespone.umroh.kelas_bintang,
        nama: getRespone.umroh.nama,
        foto_vendor: getRespone.umroh.foto
      }
    };
  },
  methods: {
    moment
  },
  components: {
    informationOrder,
    informationSideRight
  }
};
</script>
