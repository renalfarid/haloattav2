<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top mb-24">
          <search-result-ticket />

          <filter-result-ticket />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">
            Hasil Pencarian Tiket Group
          </div>
          <div
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-row :gutter="24" class="r-wrap">
              <a-col
                class="mb-16"
                v-for="item in data"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchResultTicket from "@/components/contents/lib/search/result/ticket.vue";
import filterResultTicket from "@/components/contents/lib/filter/result/ticket.vue";
import PackageTicket from "@/components/Package/Ticket";
import Meta from "@/assets/mixins/meta";
import axios from "axios";

export default {
  mixins: [Meta],

  components: {
    searchResultTicket,
    filterResultTicket,
    PackageTicket
  },

  data() {
    return {
      loading: true,
      busy: false,
      limit: 8,
      data: [],
      meta: {
        title: "Hasil Pencarian Tiket Group - Haloatta",
        url: "https://www.haloatta.com/catalog/ticket-group/result"
      }
    };
  },

  created() {
    this.loadMore();
  },

  methods: {
    loadMore() {
      this.busy = true;
      axios
        .get(process.env.baseUrl + "tiket/all", {
          params: {
            page: "1"
          }
        })
        .then(response => {
          const append = response.data.data.data.slice(
            this.data.length,
            this.data.length + this.limit
          );

          this.data = this.data.concat(append);
          this.loading = false;
          this.busy = false;
        });
    }
  }
};
</script>
