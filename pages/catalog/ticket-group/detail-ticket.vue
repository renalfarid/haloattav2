<template>
  <div class="ant-layout--package-details">
    <div class="ant-layout--results-space-small"></div>
    <div class="info-affix">
      <a-affix :offsetTop="0">
        <div class="container">
          <a-row :gutter="32">
            <a-col :span="17">
              <a-anchor>
                <a-anchor-link href="#informasi" title="Informasi" />
                <a-anchor-link href="#fasilitas" title="Fasilitas" />
                <a-anchor-link href="#ulasan" title="Ulasan" />
                <a-anchor-link href="#vendor" title="Vendor" />
                <a-anchor-link href="#policy" title="Kebijakan" />
                <a-anchor-link href="#faq" title="FAQ" />
              </a-anchor>
            </a-col>
          </a-row>
        </div>
      </a-affix>
    </div>

    <div class="ant-package--images w-100">
      <a-row>
        <a-col :span="10">
          <div class="ant-package--images-large">
            <expandable-image
              :src="gambar_maskapai[0].gambar != '' ? gambar_maskapai[0].gambar : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'"
            />
          </div>
        </a-col>
        <a-col :span="6">
          <a-row>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <expandable-image
                  :src="gambar_maskapai[1].gambar != '' ? gambar_maskapai[1].gambar : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'"
                />
              </div>
            </a-col>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <expandable-image
                  :src="gambar_maskapai[2].gambar != '' ? gambar_maskapai[2].gambar : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'"
                />
              </div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="8">
          <div class="ant-package--images-large">
            <expandable-image
              :src="gambar_maskapai[3].gambar != '' ? gambar_maskapai[3].gambar : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'"
            />
          </div>
        </a-col>
      </a-row>
    </div>

    <div data-v-sticky-container>
      <div class="container">
        <a-row :gutter="32" v-sticky="stickyOptions">
          <a-col :span="17">
            <div class="ant-layout--package-details-body">
              <information-ticket :data="item" :vendor="vendor" :review="review" />
            </div>
          </a-col>

          <a-col :span="7">
            <div class="ant-layout--right" :style="{ margin: '32px 0'}">
              <div class="ant-affix--container">
                <information-sideright :data="sidebar" />
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
import informationTicket from "~/components/contents/details/ticket/information-ticket.vue";
import informationSideright from "~/components/contents/details/ticket/information-sideright.vue";
import moment from "moment";
import axios from "axios";
export default {
  name: "detailTicket",
  head() {
    return {
      title:
        "Tiket Makassar ke Jeddah - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {
      item: "",
      stickyOptions: {
        topSpacing: 140,
        bottomSpacing: 0
      },
      sidebar: {},
      gambar_maskapai: [],
      vendor: "",
      review: ""
    };
  },
  async asyncData({ query, store }) {
    let data = [];

    const myRespone = await axios.post(process.env.baseUrl + "tiket/detail", {
      kode_produk: query.kode_produk
    });

    return {
      item: myRespone.data.data,
      loading: false,
      gambar_maskapai: myRespone.data.data2.foto_maskapai,
      vendor: myRespone.data.data2.vendor,
      review: myRespone.data.data2.ulasan,

      sidebar: {
        berangkat: myRespone.data.data.tanggal_keberangkatan,
        harga: myRespone.data.data.harga_jual,
        program_hari: myRespone.data.data.program_hari
      }
    };
  },

  methods: {
    moment
  },
  components: {
    informationTicket,
    informationSideright
  }
};
</script>
