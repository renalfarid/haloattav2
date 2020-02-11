<template>
  <a-row :gutter="24" class="r-wrap">
    <a-col
      class="mb-16"
      v-for="item in lisData"
      :key="item.kode_produk"
      :xs="24"
      :sm="12"
      :md="12"
      :lg="8"
    >
      <PackageTicket
        :loading="loading"
        :images="item.foto_maskapai"
        :city="item.nama_kota"
        :departure="item.tanggal_keberangkatan"
        :vendor_name="item.nama_vendor"
        :vendor_logo="item.foto"
        :maskapai_name="item.nama_maskapai"
        :maskapai_logo="item.image"
        :maskapai_class="item.class_flight"
        :from_flight="item.kode_bandara_asal"
        :from_flight_time="item.tiba_keberangkatan"
        :to_flight="item.kode_bandara_tujuan"
        :to_flight_time="item.tiba_kepulangan"
        :program="item.program_hari"
        :pricing="item.harga_jual"
        :qty="item.qty"
        :url="item.kode_produk"
      />
    </a-col>
  </a-row>
</template>
<script>
import PackageTicket from "@/components/Package/Ticket";
import axios from "axios";
export default {
  components: { PackageTicket },

  data() {
    return {
      loading: true,
      lisData: []
    };
  },

  created: function() {
    this.getdata();
  },

  methods: {
    async getdata() {
      axios.get(process.env.baseUrl + "tiket/all").then(response => {
        this.lisData = response.data.data.data.slice(0, 3);
        this.loading = false;
      });
    }
  }
};
</script>
