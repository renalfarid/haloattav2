<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left">Umrah Favorit</a-divider>
      <a-row :gutter="16">
        <a-col :span="16">
          <h6 class="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione
          </h6>
        </a-col>
      </a-row>
    </div>

    <a-row :gutter="16">
      <a-col :span="16">
        <a-card class="card-product-overlay">
          <div class="box-content" :style="{ backgroundImage: `url(${coverFavorit})` }">
            <div class="box-content--overlay text-center">
              <div class="txt-title fs-40 fw-500 f-default mb-8">Bisa Share Profit Loh!</div>
              <div class="txt fs-16 fw-400 f-default">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam amet pariatur asperiores necessitatibus error architecto et</span>
              </div>
              <a-button size="large">Explore Paket</a-button>
            </div>
            <div class="gradient-bottom"></div>
          </div>
        </a-card>
      </a-col>

      <a-col :span="8" v-for="(item, index) in lisData" :key="index">
        <a-card class="ant-card-package">
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
                      <div class="fs-15 fw-500 cr-black">Haloatta</div>
                      <div class="fs-13 fw-400 cr-gray f-default">Umaroh Bisnis</div>
                    </template>
                    <a-avatar class="zIndex mr-8 p-4" src="/favicon.png" />
                  </a-popover>

                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-13 fw-400 cr-gray f-default">Maskapai Garuda Indonesia</div>
                    </template>
                    <a-avatar class="zIndex mr-8 p-4" src="/maskapai/logo/garuda.svg" />
                  </a-popover>
                  
                  <a-rate class="fs-15" :defaultValue="3" disabled />
                </div>
                <div
                  class="ant-card-meta-title--top-right ml-auto fs-14 fw-400 cr-gray"
                >Program 9 Hari</div>
              </div>
              <div class="ant-card-meta-title--package fw-500 mb-16">{{item.name_product}}</div>
            </div>

            <div slot="description">
              <div class="ant-card-meta-description--bottom d-flex align-items-center">
                <div
                  class="ant-card-meta-description--bottom-left fw-500 cr-primary"
                >Rp{{item.price_product}}</div>
                <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                  <div class="icon icon-star fs-13">
                    <a-icon type="star" theme="filled" class="mr-4" />5.8
                  </div>
                  <div class="icon icon-comment fs-13">
                    <a-icon type="message" class="mr-4" />10 Komentar
                  </div>
                </div>
              </div>
            </div>
          </a-card-meta>
          <div class="package-description--more p-24">
            <div class="d-flex align-items-center mb-8">
              <div class="fs-15 fw-400 cr-black f-default text-ellipsis">Keberangkatan Makassar</div>
              <div class="text-ellipsis ml-auto">
                <a-tag>
                  Terbooking
                  <strong>{{item.pax_booked}}</strong> seat
                </a-tag>
              </div>
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
              <nuxt-link to="/catalog/umrah/order-review">Pesan</nuxt-link>
            </a-button>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import coverFavorit from "~/static/products/V5.png";
export default {
  data() {
    return {
      coverFavorit,
      lisData: [
        {
          id: 1,
          name_product: "Umrah Hemat November 2019 Keberangkatan Jakarta",
          images_product: "/products/V2.png",
          price_product: "19.400.000",
          pax_available: 38,
          pax_booked: 7
        },
        {
          id: 2,
          name_product: "Umrah Hemat Desember 2019 Keberangkatan Makassar",
          images_product: "/products/V2.png",
          price_product: "17.900.000",
          pax_available: 41,
          pax_booked: 13
        },
        {
          id: 3,
          name_product: "Umrah Hemat Januari 2020 Keberangkatan Makassar",
          images_product: "/products/V3.png",
          price_product: "17.300.000",
          pax_available: 41,
          pax_booked: 20
        },
        {
          id: 4,
          name_product: "Umrah Hemat Februari 2020 Keberangkatan Makassar",
          images_product: "/products/V4.png",
          price_product: "16.900.000",
          pax_available: 40,
          pax_booked: 3
        }
      ]
    };
  }
};
</script>