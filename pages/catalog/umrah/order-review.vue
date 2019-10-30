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
            <informationSideRight :data="sideright" />
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
      sideright: {}
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

          this.sideright = {
            nama: this.item.umroh.nama,
            jumlah_hari: this.item.umroh.jumlah_hari,
            harga_jual: this.item.umroh.harga_jual,
            kelas_bintang: this.item.umroh.kelas_bintang
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
