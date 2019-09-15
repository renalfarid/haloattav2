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
          <div class="box-content" v-lazy:background-image="imgCover">
            <div class="box-content--overlay text-center">
              <div class="txt-title fs-40 fw-500 f-default mb-8">Bisa Share Profit Loh!</div>
              <div class="txt fs-16 fw-400 f-default">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam amet pariatur asperiores necessitatibus error architecto et</span>
              </div>
              <a-button size="large">
                <nuxt-link to="/catalog/umrah/all">Explore Paket</nuxt-link>
              </a-button>
            </div>
            <div class="gradient-bottom"></div>
          </div>
        </a-card>
      </a-col>

      <a-col :span="8" v-for="(item, index) in lisData" :key="index">
        <a-card class="ant-card-package">
          <nuxt-link to="/catalog/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
          <div slot="cover">
            <div class="ant-card-cover--images" v-lazy:background-image="item.images_product">
              <div class="ant-card-cover--overlay">
                <div class="ant-card-cover--overlay-box-radius"></div>
                <div class="ant-card-cover--overlay-text">
                  <div class="ant-card-cover--overlay-text-title fs-15">{{item.pax_available}}</div>
                  <div class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase">pax</div>
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
                      <div class="fs-15 fw-500 cr-black">Awaluddin Muhammad Arifatullah</div>
                      <div class="fs-14 fw-400 cr-gray f-default">
                        <a-icon type="safety-certificate" theme="filled" class="cr-green mr-4" />Terverifikasi
                      </div>
                    </template>
                    <a-avatar
                      class="zIndex mr-8"
                      src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png"
                    />
                  </a-popover>

                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-13 fw-400 cr-black f-default">Maskapai Garuda Indonesia</div>
                    </template>
                    <a-avatar class="zIndex mr-8" src="/maskapai/logo/garuda.svg" />
                  </a-popover>
                </div>
                <div class="ant-card-meta-title--top-right ml-auto">
                  <a-rate class="fs-14 mb-4" :defaultValue="3" disabled />
                </div>
              </div>
              <div class="ant-card-meta-title--package fw-500">{{item.name_product}}</div>
            </div>

            <div slot="description">
              <div class="ant-card-meta-description--bottom d-flex align-items-center">
                <div class="ant-card-meta-description--bottom-right">
                  <div class="fs-14 fw-400 cr-black">Program 9 Hari</div>
                </div>
                <div class="ant-card-meta-description--bottom-left cr-primary ml-auto">
                  <span>Rp{{item.price_product}}</span>
                </div>
              </div>
            </div>
          </a-card-meta>
          <div class="package-description--more p-24">
            <div class="mb-8">
              <div>
                <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
                  <span>Informasi Hotel</span>
                </div>
                <div class="fs-14 fw-400 cr-gray f-default text-capitalize text-ellipsis">
                  <span>Makkah : Rayyana Ajyad</span>
                </div>
                <div class="fs-14 fw-400 cr-gray f-default text-capitalize text-ellipsis">
                  <span>Madinah : Mirage Al Salam</span>
                </div>
              </div>
            </div>

            <div class="mb-8">
              <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
                <span>Kota Keberangkatan</span>
              </div>
              <div class="fs-15 fw-400 cr-gray f-default text-ellipsis">
                <span>Makassar</span>
              </div>
            </div>

            <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
              <span>Tanggal Keberangkatan</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="fs-14 fw-400 text-ellipsis">
                <div class="cr-gray">Keberangkatan</div>
                <div class="cr-gray">{{moment("2019-09-10", "YYYY-MM-DD").format('LL')}}</div>
              </div>
              <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                <div class="cr-gray">Kedatangan</div>
                <div class="cr-gray">{{moment("2019-09-17", "YYYY-MM-DD").format('LL')}}</div>
              </div>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      imgCover: '/umrah/cover/cu40.jpg',
      lisData: [
        {
          id: 1,
          name_product: "Umrah Hemat November 2019 Keberangkatan Jakarta",
          images_product: "/umrah/package/u1.png",
          price_product: "19.400.000",
          pax_available: 38,
          pax_booked: 7
        },
        {
          id: 2,
          name_product: "Umrah Hemat Desember 2019 Keberangkatan Makassar",
          images_product: "/umrah/package/u2.png",
          price_product: "17.900.000",
          pax_available: 41,
          pax_booked: 13
        },
        {
          id: 3,
          name_product: "Umrah Hemat Januari 2020 Keberangkatan Makassar",
          images_product: "/umrah/package/u3.png",
          price_product: "17.300.000",
          pax_available: 41,
          pax_booked: 20
        },
        {
          id: 4,
          name_product: "Umrah Hemat Februari 2020 Keberangkatan Makassar",
          images_product: "/umrah/package/u4.png",
          price_product: "16.900.000",
          pax_available: 40,
          pax_booked: 3
        }
      ]
    };
  },
  methods: {
    moment
  }
};
</script>