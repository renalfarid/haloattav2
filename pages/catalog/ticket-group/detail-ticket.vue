<template>
  <div class="ant-layout--package-details">
    <div class="ant-layout--results-space-small"></div>
    <div class="info-affix">
      <a-affix :offsetTop="64">
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
            <expandable-image :src="item.gambar_maskapai != '' ? item.gambar_maskapai : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'" />
          </div>
        </a-col>
        <a-col :span="6">
          <a-row>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <expandable-image src="/maskapai/garuda/t6.jpg" />
              </div>
            </a-col>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <expandable-image src="/maskapai/garuda/t7.jpg" />
              </div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="8">
          <div class="ant-package--images-large">
            <expandable-image src="/maskapai/garuda/t8.jpg" />
          </div>
        </a-col>
      </a-row>
    </div>

    <div data-v-sticky-container>
      <div class="container">
        <a-row :gutter="32" v-sticky="stickyOptions">
          <a-col :span="17">
            <div class="ant-layout--package-details-body">
              <information-ticket />
            </div>
          </a-col>

          <a-col :span="7">
            <div class="ant-layout--right" :style="{ margin: '32px 0'}">
              <div class="ant-affix--container">
                <information-sideright />
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
      item: [],
      stickyOptions: {
        topSpacing: 140,
        bottomSpacing: 0
      }
    };
  },
  created: function() {
    this.getdata();
  },
  methods: {
    moment,
    async getdata() {
      axios
        .post("https://api.haloatta.com/api/tiket/detail", {
          kode_produk: "TKT239610856"
        })
        .then(response => {
          this.item = response.data.data;
          this.loading = false;
        });
    }
  },
  components: {
    informationTicket,
    informationSideright
  }
};
</script>
