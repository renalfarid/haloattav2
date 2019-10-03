<template>
  <div>
    <div class="content-head content-head--umaroh">
      <div class="content-head--cover" v-lazy:background-image="'/umaroh/cover/cu1.png'">
        <div class="content-head--body">
          <div class="gradient-top"></div>
          <a-row :gutter="16" class="w-100">
            <a-col :span="12">
              <h2 class="title fs-40">Kembangkan bisnis anda dengan menjadi umaroh Haloatta</h2>
              <p
                class="cr-white fs-18 fw-400"
              >Sekarang jadi Umaroh, Anda bisa membantu ummat Allah bertamu di Tanah Suci dengan menawarkan komponen produk umrah, yakni mulai dari tiket, visa, land arrangement, asuransi, perelngkapan, handling, tour leader dan manasik</p>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-about--umaroh pt-40 pb-40">
      <div class="container">
        <div class="text-center">
          <div class="divider"></div>
          <div class="fs-24 cr-black fw-500 mb-16">Tentang Umaroh Haloatta</div>
        </div>
        <a-row :gutter="16" type="flex" justify="space-around" align="middle">
          <a-col :span="18">
            <p class="fs-16 cr-black text-center">
              Haloatta is built around the idea that everyone should be able to take the perfect trip,
              including where they stay, what they do, and who they meet.
              To that end, we empower millions of people around the world to use their spaces, passions, and talents to become entrepreneurs.
            </p>

            <img class="max-width" v-lazy="'/umaroh/ilustration/map.png'" />
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="content-umaroh--testimoni pt-40 pb-40">
      <div class="container">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :span="18">
            <a-row :gutter="24" type="flex" justify="space-around" align="middle">
              <a-col :span="14">
                <img class="quote max-width mb-8" v-lazy="'/umaroh/quote.svg'" />
                <p
                  class="fs-26 cr-black"
                >Jaminan Umaroh membantu saya memutuskan untuk bergabung dengan Haloatta karena program ini akan melindungi saya apabila timbul masalah.</p>
                <p class="fs-16 cr-black mb-4">
                  <strong>Ibu Wardhaniah Ilham</strong>, Wiraswasta
                </p>
                <p class="fs-16 cr-primary">Umaroh Personal, Makassar</p>
              </a-col>
              <a-col :span="10">
                <img
                  class="b-radius max-width"
                  v-lazy="'https://www.mckinsey.com/~/media/McKinsey/Our%20People/Elixabete%20Larrea%20Tamayo/Elixabete-Larrea-Tamayo_standard_1536x1152.ashx?mw=400&car=2:2'"
                />
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="content-umaroh--benefit pt-40 pb-40">
      <div class="container">
        <div class="text-center">
          <div class="divider"></div>
          <div class="fs-24 cr-black fw-500 mb-16">Menjadi Umaroh</div>
        </div>
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :span="20">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-card :bordered="false" class="text-center">
                  <img class="max-width" v-lazy="'/umaroh/ilustration/1.png'" />
                  <h6 class="fs-20 cr-black mb-0">Aman dan Mudah</h6>
                  <p
                    class="fs-15 cr-black"
                  >Haloatta is built around the idea that everyone should be able to take the perfect trip.</p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card :bordered="false" class="text-center">
                  <img class="max-width" v-lazy="'/umaroh/ilustration/2.png'" />
                  <h6 class="fs-20 cr-black mb-0">Terjangkau dan Transparan</h6>
                  <p
                    class="fs-15 cr-black"
                  >Haloatta is built around the idea that everyone should be able to take the perfect trip.</p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card :bordered="false" class="text-center">
                  <img class="max-width" v-lazy="'/umaroh/ilustration/3.png'" />
                  <h6 class="fs-20 cr-black mb-0">Akses Dokumen Cepat</h6>
                  <p
                    class="fs-15 cr-black"
                  >Haloatta is built around the idea that everyone should be able to take the perfect trip.</p>
                </a-card>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="content-cover--umaroh pb-40 pt-40">
      <div class="content-cover--images" v-lazy:background-image="'/umaroh/cover/cu2.png'"></div>
    </div>

    <div class="content-umaroh--testimoni pt-40 pb-40">
      <div class="container">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :span="18">
            <a-row :gutter="24" type="flex" justify="space-around" align="middle">
              <a-col :span="10">
                <img
                  class="b-radius max-width"
                  v-lazy="'https://www.mckinsey.com/~/media/McKinsey/Our%20People/Rohit%20Sood/Rohit%20Sood_std_img.ashx?mw=400&car=2:2'"
                />
              </a-col>
              <a-col :span="14">
                <img class="quote max-width mb-8" v-lazy="'/umaroh/quote.svg'" />
                <p
                  class="fs-26 cr-black"
                >Jaminan Umaroh membantu saya memutuskan untuk bergabung dengan Haloatta karena program ini akan melindungi saya apabila timbul masalah.</p>
                <p class="fs-16 cr-black mb-4">
                  <strong>Ibu Wardhaniah Ilham</strong>, Wiraswasta
                </p>
                <p class="fs-16 cr-primary">Umaroh Personal, Makassar</p>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "umaroh",
  head() {
    return {
      title: "Mitra Umaroh Haloatta - Best Travel Agen | Haloatta"
    };
  },
  data() {
    return {
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
  }
};
</script>
