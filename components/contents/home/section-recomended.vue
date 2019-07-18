<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left">Rekomendasi Untuk Kamu</a-divider>
      <a-row :gutter="16">
        <a-col :span="16">
          <h6 class="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione
          </h6>
        </a-col>
      </a-row>
    </div>

    <div class="container-slick">
      <slick ref="slick" :options="slickRecomended">
        <div v-for="(item, index) in lisData" :key="index">
          <a-card class="ant-card-package-small">
            <nuxt-link to="/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
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
              </div>
            </div>
            <a-card-meta>
              <div slot="title">
                <div class="ant-card-meta-title--top d-flex align-items-center">
                  <div class="ant-card-meta-title--top-left">
                    <a-rate class="fs-14" :defaultValue="3" disabled />
                  </div>
                  <div class="ant-card-meta-title--top-right ml-auto">
                    <a-tag>
                      Terbooking
                      <strong>{{item.pax_booked}}</strong> seat
                    </a-tag>
                  </div>
                </div>
                <div class="ant-card-meta-title--package fw-500">{{item.name_product}}</div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div class="ant-card-meta-description--bottom-left fw-500 cr-primary">Rp{{item.price_product}}</div>
                  <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                    <div class="icon icon-star">
                      <a-icon type="star" theme="filled" class="mr-4" />5.8
                    </div>
                    <div class="icon icon-comment">
                      <a-icon type="message" class="mr-4" />10 Komentar
                    </div>
                  </div>
                </div>
              </div>
            </a-card-meta>
          </a-card>
        </div>
      </slick>

      <div class="action-slick">
        <a-button class="btn-left" @click="prev" size="large" shape="circle" icon="left" />
        <a-button class="btn-right" @click="next" size="large" shape="circle" icon="right" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slickRecomended: {
        slidesToShow: 4,
        infinite: false,
        arrows: false,
        draggable: true,
        prevArrow: ".prev",
        nextArrow: ".next"
      },
      lisData: [
        {
          id: 1,
          name_product: "Umrah Exclusive November 2019 Keberangkatan Jakarta",
          images_product: "/products/V2.png",
          price_product: "20.400.000",
          pax_available: 21,
          pax_booked: 65
        },
        {
          id: 2,
          name_product: "Umrah Exclusive Desember 2019 Keberangkatan Makassar",
          images_product: "/products/V2.png",
          price_product: "27.900.000",
          pax_available: 18,
          pax_booked: 75
        },
        {
          id: 3,
          name_product: "Umrah Exclusive Januari 2020 Keberangkatan Makassar",
          images_product: "/products/V3.png",
          price_product: "23.300.000",
          pax_available: 32,
          pax_booked: 5
        },
        {
          id: 4,
          name_product: "Umrah Exclusive Februari 2020 Keberangkatan Makassar",
          images_product: "/products/V4.png",
          price_product: "26.900.000",
          pax_available: 29,
          pax_booked: 14
        },
        {
          id: 5,
          name_product: "Umrah Exclusive Maret 2020 Keberangkatan Jakarta",
          images_product: "/products/V5.png",
          price_product: "27.000.000",
          pax_available: 47,
          pax_booked: 14
        }
      ]
    };
  },

  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    }
  }
};
</script>
