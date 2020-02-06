<template>
  <div class="ant-layout--package-details" :style="{'background-color':'#f7f7f7'}">
    <div class="ant-layout--results-space-small"></div>
    <div class="info-affix">
      <a-affix :offsetTop="0">
        <div class="container">
          <a-row :gutter="32">
            <a-col :span="17">
              <a-anchor class="offsetTop-item">
                <a-anchor-link href="#hotelmakkah" title="Hotel Makkah" />
                <a-anchor-link href="#hotelmadinah" title="Hotel Madinah" />
                <a-anchor-link href="#fasilitas" title="Fasilitas" />
                <a-anchor-link href="#ulasan" title="Ulasan" />
                <a-anchor-link href="#vendor" title="Vendor" />
                <!-- <a-anchor-link href="#policy" title="Kebijakan" /> -->
                <!-- <a-anchor-link href="#faq" title="FAQ" /> -->
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
            <expandable-image :src="dataLA.informasi.images_hotel" />
          </div>
        </a-col>
        <a-col :span="6">
          <a-row>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <expandable-image :src="dataLA.informasi.images_hotel" />
              </div>
            </a-col>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <expandable-image :src="dataLA.informasi.images_hotel" />
              </div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="8">
          <div class="ant-package--images-large">
            <expandable-image :src="dataLA.informasi.images_hotel" />
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="container">
      <a-row :gutter="24">
        <a-col :xs="24" :sm="24" :md="8" :lg="8" :style="{'float':'right'}">
          <div class="ant-layout--right" :style="{ margin: '32px 0'}">
            <div class="ant-affix--container">
              <information-sideright :data="sidebar" />
            </div>
          </div>
        </a-col>

        <a-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="ant-layout--package-details-body">
            <information-accommodation :data="dataLA" />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import informationAccommodation from "~/components/contents/details/accommodation/information-accommodation.vue";
import informationSideright from "~/components/contents/details/accommodation/information-sideright.vue";
import axios from "axios";
export default {
  name: "detailAccommodation",
  head() {
    return {
      title:
        "LA Akomodasi untuk 3 Hari Mekkah dan 4 Hari Madinah - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {
      wishlist: false,
      dataLA: {},
      sidebar: {}
    };
  },
  async asyncData({ query, store }) {
    let data = [];

    const myRespone = await axios.post(process.env.baseUrl + "la/detail", {
      kode_produk: query.kode_produk
    });

    return {
      dataLA: {
        informasi: myRespone.data.data,
        hotel_mekkah: myRespone.data.data2.hotel_mekkah,
        hotel_madinah: myRespone.data.data2.hotel_madinah,
        ulasan: myRespone.data.data2.ulasan,
        vendor: myRespone.data.data2.vendor
      },

      sidebar: {
        program_hari: myRespone.data.data.program_hari,
        harga_quad: myRespone.data.data.harga_quad,
        harga_triple: myRespone.data.data.harga_triple,
        harga_double: myRespone.data.data.harga_double
      }
    };
  },
  methods: {
    change(affixed) {
      // console.log(affixed);
    },
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    }
  },
  components: {
    informationAccommodation,
    informationSideright
  }
};
</script>
