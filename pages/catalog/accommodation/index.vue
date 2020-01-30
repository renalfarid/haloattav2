<template>
  <div>
    <div class="content-head content-head--accommodation">
      <div
        class="content-head--cover"
        v-lazy:background-image="require('~/static/akomodasi/cover/lc1.png')"
      >
        <div class="content-head--body">
          <div class="gradient-top"></div>
          <a-row :gutter="90" class="w-100 m-auto" type="flex" justify="space-around" align="middle">
            <a-col :xs="24" :sm="24" :md="12" :lg="10">
              <h2 class="title fs-40">Ragam Pilihan LA Akomodasi</h2>
              <p class="cr-white fs-16 fw-400">
                Atta Akomodasi memberikan beragam pengalaman menginap dalam perjalanan ibadah dan wisata halal dengan 
                cara yang sangat praktis.
              </p>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="14">
              <a-card :bordered="false" class="b-shadow b-radius b-opacity">
                <search-accommodation />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-about--accommodation pt-40 pb-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Tentang LA Akomodasi</a-divider>
        <a-row :gutter="24" type="flex" justify="space-between" align="middle">
          <a-col :span="12">
            <p class="fs-16 cr-black">
              Mempermudah semua orang menjelajahi wisata  halal dunia
              Teknologi yang  memberikan  pengalaman  yang  sangat  berkesan  dan beragam tempat  menginap  yang  luar  biasa.
            </p>  
            <p class="fs-16 cr-black">
              Membantu  jamaah  mendapatkan akomodasi diseluruh dunia dan jalan untuk mengembangkan bisnis  anda.
            </p>
          </a-col>
          <a-col :span="12">
            <img
              class="mx-width d-block m-auto"
              style="maxHeight: 320px"
              v-lazy="'/akomodasi/illustration/li1.png'"
            />
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="content-slide--accommodation pb-40 pt-40">
      <div class="container">
        <div class="container-slick">
          <a-divider orientation="left" class="ant-divider-title-left">Tips memilih LA Akomodasi</a-divider>
          <slick class="slider-nav" ref="slick" :options="slickContent">
            <a-card :bordered="false">
              <a-row :gutter="24" type="flex" justify="space-between" align="middle">
                <a-col :span="12">
                  <img
                    class="mx-width d-block m-auto"
                    style="maxHeight: 320px"
                    v-lazy="'/akomodasi/illustration/li2.png'"
                  />
                </a-col>
                <a-col :span="12">
                  <div class="fs-22 fw-500 cr-black">Pastikan Jarak Hotel Anda Dekat</div>
                  <div class="fs-16 fw-400 cr-black">
                    Jarak hotel yang dekat dengan Madjidil Haram di kota Mekkah dan Mesjid Nabawi di kota Medinah akan memberikan kenyamanan untuk anda dalam menjalankan ibadah.
                  </div>
                </a-col>
              </a-row>
            </a-card>
          </slick>
          <div class="action-slick text-right mb-8 mr-16">
            <a-button
              class="btn-left cr-primary b-shadow b-solid"
              size="large"
              @click="prev"
              shape="circle"
              icon="left"
            />
            <a-button
              class="btn-right cr-primary b-shadow b-solid"
              size="large"
              @click="next"
              shape="circle"
              icon="right"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="content-cover--accommodation">
      <div
        class="content-cover--images"
        v-lazy:background-image="require('~/static/akomodasi/cover/lc2.png')"
      ></div>
    </div>

    <div class="content-partner--accommodation pb-40 pt-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Partner LA Akomodasi</a-divider>
        <a-row>
          <a-col :span="16">
            <p class="fs-16 cr-black">
              Kami menjalin kerjasama dengan berbagai penyedia layanan akomodasi yang terpercaya dan resmi di berbagai destinasi wisata anda.
            </p>
          </a-col>
        </a-row>

        <div>
          <a-row :gutter="16">
            <a-col :span="4" v-for="(item, index) in partner" :key="index" class="mb-24">
              <img class="brand-logo max-width" v-lazy="item.logo" />
            </a-col>
          </a-row>
        </div>
        
      </div>
    </div>

    <div class="content-recommended--accommodation pt-40 pb-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Rekomendasi untuk kamu</a-divider>
        <Recommended />
      </div>
    </div>
  </div>
</template>
<script>
import searchAccommodation from "~/components/contents/lib/search/accommodation.vue";
import Recommended from "~/components/contents/catalog/accommodation/umrah/recommended.vue";
export default {
  name: "accommodation",
  head() {
    return {
      title: "Pesan LA Akomodasi - Best Travel Agen | Haloatta"
    };
  },
  data() {
    return {
      partner: [
        {
          id: 1,
          logo: "/akomodasi/logo/ll1.svg"
        },
        {
          id: 2,
          logo: "/akomodasi/logo/ll2.svg"
        },
        {
          id: 3,
          logo: "/akomodasi/logo/ll3.svg"
        },
        {
          id: 4,
          logo: "/akomodasi/logo/ll4.svg"
        },
        {
          id: 5,
          logo: "/akomodasi/logo/ll5.svg"
        },
        {
          id: 6,
          logo: "/akomodasi/logo/ll6.svg"
        }
      ],
      slickContent: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true
      }
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  },
  components: {
    searchAccommodation,
    Recommended
  }
};
</script>
