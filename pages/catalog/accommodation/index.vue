<template>
  <div>
    <div class="content-head content-head--accommodation">
      <div
        class="content-head--cover"
        :style="{ backgroundImage: 'url(/akomodasi/cover/lc1.png)' }"
      >
        <div class="content-head--body">
          <div class="gradient-top"></div>
          <a-row :gutter="90" class="w-100" type="flex" justify="space-around" align="middle">
            <a-col :span="10">
              <h2 class="title">Ragam Pilihan LA Akomodasi</h2>
              <p class="cr-white fs-16 fw-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
            </a-col>
            <a-col :span="14">
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
              It’s an audacious, incredibly rewarding mission that our
              increasingly diverse team is dedicated to achieving.
            </p>
            <p class="fs-16 cr-black">
              Haloatta is built around the idea that everyone should be able to take the perfect trip,
              including where they stay, what they do, and who they meet.
              To that end, we empower millions of people around the world to use their spaces, passions, and talents to become entrepreneurs.
            </p>
            <p class="fs-16 cr-black mb-0">
              Exciting challenges lie ahead—new regions, technologies, and businesses.
              Guided by our four core values, we’ll meet these challenges creatively
              and with the support of our global community. Join us!
            </p>
          </a-col>
          <a-col :span="12">
            <img
              class="mx-width d-block m-auto"
              style="maxHeight: 320px"
              src="/akomodasi/illustration/li1.png"
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
                    src="/akomodasi/illustration/li2.png"
                  />
                </a-col>
                <a-col :span="12">
                  <div class="fs-22 fw-500 cr-black">Pastikan Jarak Hotel Anda Dekat</div>
                  <div class="fs-16 fw-400 cr-black">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolore facilis ipsum amet consequatur harum facere,
                    quidem necessitatibus quas et impedit consequuntur dicta voluptas,
                    repellendus perferendis, cumque assumenda animi eveniet temporibus.
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
        :style="{ backgroundImage: 'url(/akomodasi/cover/lc2.png)'}"
      ></div>
    </div>

    <div class="content-partner--accommodation pb-40 pt-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Partner LA Akomodasi</a-divider>
        <a-row>
          <a-col :span="16">
            <p class="fs-16 cr-black">
              It’s an audacious, incredibly rewarding mission that our
              increasingly diverse team is dedicated to achieving.
            </p>
          </a-col>
        </a-row>

        <a-list
          :grid="{ gutter: 24, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6 }"
          :dataSource="partner"
        >
          <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
            <img class="max-width" :src="item.logo_partner" />
          </a-list-item>
        </a-list>
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
import Recommended from "~/components/contents/catalog/accommodation/recommended.vue";
const partner = [
  {
    logo_partner: "/akomodasi/logo/ll1.svg"
  },
  {
    logo_partner: "/akomodasi/logo/ll2.svg"
  },
  {
    logo_partner: "/akomodasi/logo/ll3.svg"
  },
  {
    logo_partner: "/akomodasi/logo/ll4.svg"
  },
  {
    logo_partner: "/akomodasi/logo/ll5.svg"
  },
  {
    logo_partner: "/akomodasi/logo/ll6.svg"
  }
];
export default {
  name: "ticketGroup",
  head() {
    return {
      title: "Pesan LA Akomodasi - Best Travel Agen | Haloatta"
    };
  },
  data() {
    return {
      partner,
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
