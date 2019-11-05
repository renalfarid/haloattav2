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
  created: function() {
    this.getdata();
  },
  methods: {
    moment,
    async getdata() {
      let params = this.$route.query;
      axios
        .post(process.env.baseUrl + "paket/umroh/detail", {
          kode_produk: params.kode
        })
        .then(response => {
          this.item = response.data.data;
          this.la = this.item.la;
          this.tiket = this.item.tiket;
          this.umroh = this.item.umroh;

          //props right side
          this.harga = response.data.data.harga;
          this.umrohsidebar = {
            berangkat: response.data.data.umroh.tgl_berangkat,
            program_hari: response.data.data.umroh.jumlah_hari,
            kelas_bintang: response.data.data.umroh.kelas_bintang,
            nama: response.data.data.umroh.nama,
            foto_vendor: response.data.data.umroh.foto
          };

          this.loading = false;
        });
    }
  },
  components: {
    informationOrder,
    informationSideRight
  }
};
</script>
