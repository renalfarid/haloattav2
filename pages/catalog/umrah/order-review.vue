<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body" :style="{'background-color':'#f7f7f7'}">
      <div class="container">
        <h2 class="mt-16 mb-24 cr-gray">Review Pesanan</h2>

        <a-row :gutter="24">
          <a-col :xs="24" :sm="24" :md="16">
            <informationOrder :la="la" :kelengkapan="kelengkapan" :umroh="umroh" :tiket="tiket" />
          </a-col>

          <a-col :xs="24" :sm="24" :md="8">
            <informationSideRight :harga="harga" :umroh="umrohsidebar" />
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
import informationOrder from "@/components/contents/review/umrah/information-order.vue";
import informationSideRight from "@/components/contents/review/umrah/information-sideright.vue";
import moment from "moment";
import axios from "axios";
export default {
  middleware: "authenticated",
  name: "order-review-umrah",
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
      harga: "",
      kelengkapan: ""
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
      kelengkapan: getRespone.kelengkapan,

      harga: getRespone.harga,
      umrohsidebar: {
        berangkat: getRespone.umroh.tgl_berangkat,
        program_hari: getRespone.umroh.jumlah_hari,
        kelas_bintang: getRespone.umroh.kelas_bintang,
        nama: getRespone.umroh.nama,
        foto_vendor: getRespone.umroh.foto,
        kelengkapan: getRespone.kelengkapan,
        nama_vendor: getRespone.umroh.nama_vendor
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
