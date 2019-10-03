<template>
  <div>
    <div class="content-head content-head--handling">
      <div class="content-head--cover" :style="{ backgroundImage: 'url(/handling/cover/ch1.png)' }">
        <div class="content-head--body">
          <div class="gradient-top"></div>
          <a-row :gutter="90" class="w-100" type="flex" justify="space-around" align="middle">
            <a-col :span="10">
              <h2 class="title fs-40">Ragam Pilihan Handling Domestik</h2>
              <p class="cr-white fs-16 fw-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
            </a-col>
            <a-col :span="14">
              <a-card :bordered="false" class="b-shadow b-radius b-opacity">
                <search-handling />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-about--handling pt-40 pb-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Tentang Handling</a-divider>
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
              src="/handling/ilustrasi/hi1.png"
            />
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="content-slide--handling pb-40 pt-40">
      <div class="container">
        <div class="container-slick">
          <a-divider orientation="left" class="ant-divider-title-left">Tips memilih Handling</a-divider>
          <slick class="slider-nav" ref="slick" :options="slickContent">
            <a-card :bordered="false">
              <a-row :gutter="24" type="flex" justify="space-between" align="middle">
                <a-col :span="12">
                  <img
                    class="mx-width d-block m-auto"
                    style="maxHeight: 320px"
                    src="/handling/ilustrasi/hi2.png"
                  />
                </a-col>
                <a-col :span="12">
                  <div class="fs-22 fw-500 cr-black">Pastikan Vendor Berpengalaman</div>
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

    <div class="content-cover--handling">
      <div
        class="content-cover--images"
        :style="{ backgroundImage: 'url(/handling/cover/ch2.png)'}"
      ></div>
    </div>

    <div class="content-partner--handling pb-40 pt-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Partner Handling</a-divider>
        <a-row>
          <a-col :span="16">
            <p class="fs-16 cr-black">
              It’s an audacious, incredibly rewarding mission that our
              increasingly diverse team is dedicated to achieving.
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

    <div class="content-recommended--insurance pt-40 pb-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Rekomendasi untuk kamu</a-divider>
        <Recommended />
      </div>
    </div>
  </div>
</template>
<script>
import searchHandling from "~/components/contents/lib/search/handling.vue";
import Recommended from "~/components/contents/catalog/handling/recommended.vue";
export default {
  name: "handling",
  head() {
    return {
      title: "Pesan Handling Domestik - Best Travel Agen | Haloatta"
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
    searchHandling,
    Recommended
  }
};
</script>
