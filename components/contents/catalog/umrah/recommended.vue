<template>
  <a-list :grid="{ gutter: 16, xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 }" :dataSource="lisData">
    <a-list-item
      slot="renderItem"
      slot-scope="item, index"
      :key="index"
    >
      <a-skeleton :loading="loading" active>
        <a-card class="ant-card-package-small">
          <nuxt-link to="/catalog/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
          <div slot="cover">
            <div
              class="ant-card-cover--images"
              :style="{ backgroundImage: `url(${item.images_product})` }"
            >
              <div class="ant-card-cover--overlay">
                <div class="ant-card-cover--overlay-box-radius"></div>
                <div class="ant-card-cover--overlay-text">
                  <div class="ant-card-cover--overlay-text-title">sisa</div>
                  <div class="ant-card-cover--overlay-text-subtitle">
                    <span>{{item.pax_available}}</span> pax
                  </div>
                </div>
              </div>

              <div class="ant-card--overlay-block">
                <div class="d-flex align-items-center h-100">
                  <a-button>
                    <nuxt-link to="/catalog/umrah/detail-package">Lihat detail</nuxt-link>
                  </a-button>
                </div>
              </div>
            </div>
          </div>
          <a-card-meta>
            <div slot="title">
              <div class="ant-card-meta-title--top d-flex align-items-center">
                <div class="ant-card-meta-title--top-left f-default d-flex align-items-center">
                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-15 fw-500 cr-black">{{item.name_umaroh}}</div>
                      <div class="fs-14 fw-400 cr-gray f-default">
                        <a-icon type="safety-certificate" theme="filled" class="cr-green mr-4" />Terverifikasi
                      </div>
                    </template>
                    <a-avatar class="zIndex mr-8" :src="item.avatar_umaroh" />
                  </a-popover>

                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-13 fw-400 cr-black f-default">Maskapai Garuda Indonesia</div>
                    </template>
                    <a-avatar class="zIndex mr-8" src="/maskapai/logo/garuda.svg" />
                  </a-popover>

                  <a-popover trigger="hover">
                    <template slot="content">
                      <a-rate class="fs-14 mb-4" :defaultValue="3" disabled />
                      <div
                        class="fs-13 fw-400 cr-black f-default mb-4"
                      >Mekkah : Hotel Daruttauhid International Mekkah</div>
                      <div
                        class="fs-13 fw-400 cr-black f-default"
                      >Madinah : Hotel Dar Al Eiman International Madinah</div>
                    </template>
                    <a-avatar
                      class="zIndex mr-8"
                      size="small"
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px"
                      src="/icons/search/tabs/color/accommodation.svg"
                    />
                  </a-popover>
                </div>
                <div
                  class="ant-card-meta-title--top-right ml-auto fs-14 fw-400 cr-black"
                >Program 9 Hari</div>
              </div>
              <div class="ant-card-meta-title--package fw-500">{{item.name_product}}</div>
            </div>

            <div slot="description">
              <div class="ant-card-meta-description--bottom d-flex align-items-center">
                <div class="ant-card-meta-description--bottom-right d-flex">
                  <div class="fs-14 fw-400 cr-gray">
                    Terjual
                    <strong>{{item.pax_booked}}</strong> Pax
                  </div>
                </div>
                <div
                  class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                >Rp{{item.price_product}}</div>
              </div>
            </div>
          </a-card-meta>
          <div class="package-description--more p-16">
            <div class="fs-15 fw-400 cr-black f-default text-ellipsis mb-8">
              <span>Keberangkatan Makassar</span>
            </div>

            <div class="d-flex align-items-center mb-16">
              <div class="fs-14 fw-400 text-ellipsis">
                <div class="cr-gray">Keberangkatan</div>
                <div class="cr-black">10 September 2019</div>
              </div>
              <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                <div class="cr-gray">Kedatangan</div>
                <div class="cr-black">19 September 2019</div>
              </div>
            </div>

            <a-button block>
              <nuxt-link to="/catalog/umrah/order-review">Pesan</nuxt-link>
            </a-button>
          </div>
        </a-card>
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
          name_product:
            "Umrah Exclusive November 2019 Keberangkatan Jakarta  Keberangkatan Jakarta  Keberangkatan Jakarta",
          images_product: "/umrah/package/u5.png",
          name_umaroh: "Al Mubalah Travel",
          avatar_umaroh: "/user/av1.svg",
          price_product: "20.400.000",
          pax_available: 21,
          pax_booked: 65
        },
        {
          id: 2,
          name_product: "Umrah Exclusive Desember 2019 Keberangkatan Makassar",
          images_product: "/umrah/package/u6.png",
          name_umaroh: "Nuh Travel",
          avatar_umaroh: "/user/av2.svg",
          price_product: "27.900.000",
          pax_available: 18,
          pax_booked: 75
        },
        {
          id: 3,
          name_product: "Umrah Exclusive Januari 2020 Keberangkatan Makassar",
          images_product: "/umrah/package/u7.png",
          name_umaroh: "AT Travel",
          avatar_umaroh: "/user/av3.svg",
          price_product: "23.300.000",
          pax_available: 32,
          pax_booked: 5
        },
        {
          id: 4,
          name_product: "Umrah Exclusive Februari 2020 Keberangkatan Makassar",
          images_product: "/umrah/package/u8.png",
          name_umaroh: "AL Travel",
          avatar_umaroh: "/user/av4.svg",
          price_product: "26.900.000",
          pax_available: 29,
          pax_booked: 14
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
