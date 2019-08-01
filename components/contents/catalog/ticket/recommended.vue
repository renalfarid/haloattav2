<template>
  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }" :dataSource="lisData">
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-skeleton :loading="loading" active>
        <nuxt-link to="/catalog/ticket-group/detail-ticket" class="d-block">
          <a-card class="ant-card--package-ticket">
            <div slot="cover">
              <div
                class="ant-card-cover--images"
                :style="{ backgroundImage: `url(${item.images_package})` }"
              >
                <div class="ant-card-cover--overlay">
                  <div class="ant-card-cover--overlay-box-radius"></div>
                  <div class="ant-card-cover--overlay-text">
                    <div class="ant-card-cover--overlay-text-title">sisa</div>
                    <div class="ant-card-cover--overlay-text-subtitle">
                      <span>40</span> pax
                    </div>
                  </div>
                </div>
                <div class="ant-card--overlay-block">
                  <div class="d-flex align-items-center h-100">
                    <a-button>
                      <nuxt-link to="/catalog/ticket-group/detail-ticket">Lihat detail</nuxt-link>
                    </a-button>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex align-items-center">
              <a-popover trigger="hover">
                <template slot="content">
                  <div class="fs-15 fw-500 cr-black">Nuh Travel</div>
                  <div class="fs-14 fw-400 cr-gray f-default">
                    <a-icon type="safety-certificate" theme="filled" class="cr-green mr-4" />Terverifikasi
                  </div>
                </template>
                <a-avatar class="zIndex mr-8" src="/user/av1.svg" />
              </a-popover>
              <a-popover trigger="hover">
                <template slot="content">
                  <div class="fs-13 fw-400 cr-gray f-default">Maskapai {{item.maskapai}}</div>
                </template>
                <a-avatar class="zIndex mr-8" :src="item.logo_maskapai" />
              </a-popover>
              <div class="ml-auto fs-14 fw-400 cr-gray f-default text-ellipsis">{{item.class_cabin}}</div>
            </div>

            <a-row :gutter="8" type="flex" justify="space-between" align="middle" class="mt-8 mb-8">
              <a-col :span="8" class="text-left">
                <div class="fs-30 fw-500 cr-black text-uppercase f-default">upg</div>
                <div class="fs-14 fw-400 cr-black text-uppercase f-default">09:00 am</div>
              </a-col>
              <a-col :span="8" class="text-center">
                <div class="fs-13 fw-400 cr-gray text-capitalize f-default mb-8">Nonstop</div>
                <div class="fs-13 fw-400 cr-gray text-capitalize f-default">6h45m</div>
              </a-col>
              <a-col :span="8" class="text-right">
                <div class="fs-30 fw-500 cr-black text-uppercase f-default">jed</div>
                <div class="fs-14 fw-400 cr-black text-uppercase f-default">15:00 pm</div>
              </a-col>
            </a-row>

            <div class="d-flex align-items-end align-items-center">
              <div class="fs-14 fw-400 cr-gray f-default text-ellipsis">Program 9 Hari</div>
              <div class="ml-auto fs-16 fw-500 cr-primary f-default text-ellipsis">Rp{{item.price}}</div>
            </div>

            <div class="package-description--more p-16">
              <div class="d-flex align-items-center mb-8">
                <div class="fs-15 fw-400 cr-black f-default text-ellipsis">Makassar</div>
                <div class="fs-15 fw-400 cr-black f-default text-ellipsis ml-auto">Round Trip</div>
              </div>

              <div class="d-flex align-items-center mb-16">
                <div class="fs-13 fw-400 text-ellipsis">
                  <div class="cr-gray">Keberangkatan</div>
                  <div class="cr-black">10 September 2019</div>
                </div>
                <div class="fs-13 fw-400 text-ellipsis text-right ml-auto">
                  <div class="cr-gray">Kedatangan</div>
                  <div class="cr-black">19 September 2019</div>
                </div>
              </div>

              <a-button block>
                <nuxt-link to="/catalog/ticket-group/order-review">Pesan</nuxt-link>
              </a-button>
            </div>
          </a-card>
        </nuxt-link>
      </a-skeleton>
    </a-list-item>
  </a-list>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      lisData: [
        {
          id: 1,
          images_package: "/maskapai/garuda/t6.jpg",
          maskapai: "Garuda Indonesia",
          logo_maskapai: "/maskapai/logo/garuda.svg",
          price: "12.000.000",
          class_cabin: "Economy Class"
        },
        {
          id: 2,
          images_package: "/maskapai/garuda/t7.jpg",
          maskapai: "Garuda Indonesia",
          logo_maskapai: "/maskapai/logo/garuda.svg",
          price: "12.400.000",
          class_cabin: "Economy Class"
        },
        {
          id: 3,
          images_package: "/maskapai/garuda/t8.jpg",
          maskapai: "Garuda Indonesia",
          logo_maskapai: "/maskapai/logo/garuda.svg",
          price: "11.000.000",
          class_cabin: "Economy Class"
        },
        {
          id: 4,
          images_package: "/maskapai/garuda/t9.jpg",
          maskapai: "Garuda Indonesia",
          logo_maskapai: "/maskapai/logo/garuda.svg",
          price: "13.000.000",
          class_cabin: "Economy Class"
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
};
</script>