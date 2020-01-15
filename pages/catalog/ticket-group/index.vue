<template>
  <div>
    <div class="content-head content-head--ticket-group">
      <div class="content-head--cover" :style="{ backgroundImage: 'url(/maskapai/cover/tc1.png)' }">
        <div class="content-head--body">
          <div class="gradient-top"></div>
          <a-row :gutter="90" class="w-100 m-auto" type="flex" justify="space-around" align="middle">
            <a-col :xs="24" :sm="24" :md="12" :lg="10">
              <h2 class="title fs-40">Memudahkan perjalanan anda</h2>
              <p class="cr-white fs-16 fw-400">
                Halo!
                Perjalanan anda semakin mudah bukan..
                Beragam pilihan penerbangan memberikan pengalaman yang bisa anda ciptakan..
                Bersama haloatta..
              </p>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="14">
              <a-card :bordered="false" class="b-shadow b-radius b-opacity">
                <searchTicket />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-about--ticket-group pt-40 pb-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Tentang tiket group</a-divider>
        <a-row :gutter="24" type="flex" justify="space-between" align="middle">
          <a-col :span="12">
            <p class="fs-16 cr-black">
              Halo..
              Atta ticket adalah perusahaan aplikasi online yang menyediakan berbagai macam ticket penerbangan 
              yang dapat disesuaikan dengan kebutuhan perjalanan serta petualangan wisata halal dalam satu platform.
              
              
            </p>
            <p class="fs-16 cr-black">
              Halo…
              Atta memberikan kesempatan anda untuk menciptakan momen momen bersama orang-orang yang anda cintai yang tidak terlupakan.
            </p>
            <p class="fs-16 cr-black mb-0">
              Halo…
              Atta menyajikan kemudahan dalam memilih penerbangan dengan tujuan wisata halal diberbagai belahan 
              dunia. Terkhusus tujuan wisata halal yaitu perjalanan ibadah Umroh dan Haji.
            </p>
          </a-col>
          <a-col :span="12">
            <img
              class="mx-width d-block m-auto"
              style="maxHeight: 320px"
              src="/maskapai/illustrasi/ti3.png"
            />
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="content-slide--ticket-group pb-40 pt-40">
      <div class="container">
        <div class="container-slick">
          <a-divider orientation="left" class="ant-divider-title-left">Tips memilih tiket group</a-divider>
          <slick class="slider-nav" ref="slick" :options="slickContent">
            <a-card :bordered="false">
              <a-row :gutter="24" type="flex" justify="space-between" align="middle">
                <a-col :span="12">
                  <img
                    class="mx-width d-block m-auto"
                    style="maxHeight: 320px"
                    src="/maskapai/illustrasi/ti2.png"
                  />
                </a-col>
                <a-col :span="12">
                  <div class="fs-22 fw-500 cr-black">Fleksibel Waktu dan Tujuan</div>
                  <div class="fs-16 fw-400 cr-black">
                    Dengan memilih berbagai macam pilihan tiket pesawat untuk perjalanan wisata halal anda sesuai kebutuhan anda
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

    <div class="content-cover--ticket-group">
      <div
        class="content-cover--images"
        :style="{ backgroundImage: 'url(/maskapai/cover/tc2.png)'}"
      ></div>
    </div>

    <div class="content-partner--ticket-group pb-40 pt-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Partner maskapai</a-divider>
        <a-row>
          <a-col :span="16">
            <p class="fs-16 cr-black">
              Kami menjalin kerjasama dengan penyedia tiket berbagai macam maskapai untuk destinasi anda.
            </p>
          </a-col>
        </a-row>

        <div>
          <a-row :gutter="16">
            <a-col :span="4" v-for="(item, index) in partner" :key="index" class="mb-24">
              <img class="brand-logo max-width" :src="item.logo" />
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-recommended--ticket-group pt-40 pb-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Rekomendasi untuk kamu</a-divider>
        <Recommended />
      </div>
    </div>
  </div>
</template>
<script>
import searchTicket from "~/components/contents/lib/search/ticket.vue";
import Recommended from "~/components/contents/catalog/ticket/recommended.vue";
export default {
  name: "ticketGroup",
  head() {
    return {
      title: "Pesan Tiket Group - Best Travel Agen | Haloatta"
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
    searchTicket,
    Recommended
  }
};
</script>
