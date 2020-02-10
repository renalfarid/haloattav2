<template>
  <div class="content-components-umrah">
    <div class="container">
      <div class="header-title">
        <a-divider orientation="left" class="ant-divider-title-left"
          >Pilihan Ibadah Umroh</a-divider
        >
      </div>

      <a-row :gutter="16">
        <a-col :xs="24" :sm="12" :md="8" :lg="8" class="mb-16">
          <nuxt-link to="/catalog/umrah">
            <a-card class="card-product--components">
              <div
                class="ant-card-cover-images"
                v-lazy:background-image="
                  require('~/static/components/umrah.png')
                "
              ></div>
              <div class="ant-card-cover--overlay">
                <div class="m-auto">
                  <h3 class="fs-24 fw-600 mb-0">Paket Umroh</h3>
                  <p class="fs-16 fw-400 mb-0">
                    <span>{{ this.paketumrah }}</span> Paket
                  </p>
                </div>
              </div>
            </a-card>
          </nuxt-link>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="8" class="mb-16">
          <nuxt-link to="/catalog/ticket-group">
            <a-card class="card-product--components">
              <div
                class="ant-card-cover-images"
                v-lazy:background-image="
                  require('~/static/components/ticket.png')
                "
              ></div>
              <div class="ant-card-cover--overlay">
                <div class="m-auto">
                  <h3 class="fs-24 fw-600 mb-0">Tiket Group</h3>
                  <p class="fs-16 fw-400 mb-0">
                    <span>{{ this.tiketgroup }}</span> Paket
                  </p>
                </div>
              </div>
            </a-card>
          </nuxt-link>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="8" class="mb-16">
          <nuxt-link to="/catalog/accommodation">
            <a-card class="card-product--components">
              <div
                class="ant-card-cover-images"
                v-lazy:background-image="
                  require('~/static/components/accommodation.png')
                "
              ></div>
              <div class="ant-card-cover--overlay">
                <div class="m-auto">
                  <h3 class="fs-24 fw-600 mb-0">LA Akomodasi</h3>
                  <p class="fs-16 fw-400 mb-0">
                    <span>{{ this.laakomodasi }}</span> Paket
                  </p>
                </div>
              </div>
            </a-card>
          </nuxt-link>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="8" class="mb-16">
          <nuxt-link to="/catalog/visa">
            <a-card class="card-product--components">
              <div
                class="ant-card-cover-images"
                v-lazy:background-image="
                  require('~/static/components/visa.png')
                "
              ></div>
              <div class="ant-card-cover--overlay">
                <div class="m-auto">
                  <h3 class="fs-24 fw-600 mb-0">Visa Perjalanan</h3>
                  <p class="fs-16 fw-400 mb-0">
                    <span>{{ this.visa }}</span> Paket
                  </p>
                </div>
              </div>
            </a-card>
          </nuxt-link>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="8" class="mb-16">
          <nuxt-link to="/catalog/insurance">
            <a-card class="card-product--components">
              <div
                class="ant-card-cover-images"
                v-lazy:background-image="
                  require('~/static/components/insurance.png')
                "
              ></div>
              <div class="ant-card-cover--overlay">
                <div class="m-auto">
                  <h3 class="fs-24 fw-600 mb-0">Asuransi Perjalanan</h3>
                  <p class="fs-16 fw-400 mb-0">
                    <span>{{ this.asuransi }}</span> Paket
                  </p>
                </div>
              </div>
            </a-card>
          </nuxt-link>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="8" class="mb-16">
          <nuxt-link to="/catalog/handling">
            <a-card class="card-product--components">
              <div
                class="ant-card-cover-images"
                v-lazy:background-image="
                  require('~/static/components/handling.png')
                "
              ></div>
              <div class="ant-card-cover--overlay">
                <div class="m-auto">
                  <h3 class="fs-24 fw-600 mb-0">Handling Domestik</h3>
                  <p class="fs-16 fw-400 mb-0">
                    <span>{{ this.handling }}</span> Paket
                  </p>
                </div>
              </div>
            </a-card>
          </nuxt-link>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="8" class="mb-16">
          <nuxt-link to="/catalog/manasik">
            <a-card class="card-product--components">
              <div
                class="ant-card-cover-images"
                v-lazy:background-image="
                  require('~/static/components/manasik.png')
                "
              ></div>
              <div class="ant-card-cover--overlay">
                <div class="m-auto">
                  <h3 class="fs-24 fw-600 mb-0">Ruang Manasik</h3>
                  <p class="fs-16 fw-400 mb-0">
                    <span>{{ this.ruangmanasik }}</span> Paket
                  </p>
                </div>
              </div>
            </a-card>
          </nuxt-link>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="8" class="mb-16">
          <nuxt-link to="/catalog/equipment">
            <a-card class="card-product--components">
              <div
                class="ant-card-cover-images"
                v-lazy:background-image="
                  require('~/static/components/equipment.png')
                "
              ></div>
              <div class="ant-card-cover--overlay">
                <div class="m-auto">
                  <h3 class="fs-24 fw-600 mb-0">Perlengkapan Umroh</h3>
                  <p class="fs-16 fw-400 mb-0">
                    <span>{{ this.perlengkapan }}</span> Paket
                  </p>
                </div>
              </div>
            </a-card>
          </nuxt-link>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="8" class="mb-16">
          <nuxt-link to="/catalog/tourleader">
            <a-card class="card-product--components">
              <div
                class="ant-card-cover-images"
                v-lazy:background-image="
                  require('~/static/components/tourleader.png')
                "
              ></div>
              <div class="ant-card-cover--overlay">
                <div class="m-auto">
                  <h3 class="fs-24 fw-600 mb-0">Tour Leader</h3>
                  <p class="fs-16 fw-400 mb-0">
                    <span>{{ this.tourleader }}</span> Paket
                  </p>
                </div>
              </div>
            </a-card>
          </nuxt-link>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      paketumrah: 0,
      tiketgroup: 0,
      laakomodasi: 0,
      visa: 0,
      asuransi: 0,
      perlengkapan: 0,
      handling: 0,
      ruangmanasik: 0,
      tourleader: 0
    };
  },

  mounted() {
    this.countPaket();
  },

  methods: {
    countPaket() {
      axios
        .get(process.env.baseUrl + "total-produk")
        .then(response => {
          this.paketumrah = response.data.data.umrah;
          this.tiketgroup = response.data.data.tiket;
          this.laakomodasi = response.data.data.la;
          this.visa = response.data.data.visa;
          this.perlengkapan = response.data.data.perlengkapan;
          this.ruangmanasik = response.data.data.manasik;
          this.asuransi = response.data.data.asuransi;
          this.tourleader = response.data.data.tour_leader;
          this.handling = response.data.data.handling;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
