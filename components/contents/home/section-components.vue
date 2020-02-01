<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left"
        >Haloatta Pilihan Tepat Ibadah Umroh Tanpa Repot</a-divider
      >
    </div>

    <a-row :gutter="16">
      <a-col :span="8" class="mb-16">
        <nuxt-link to="/catalog/umrah">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="require('~/static/components/umrah.png')"></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3 class="fs-24 fw-600 mb-0">Paket Umroh</h3>
                <p class="fs-16 fw-400 mb-0"><span>1100</span> Paket</p>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8" class="mb-16">
        <nuxt-link to="/catalog/ticket-group">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="require('~/static/components/ticket.png')"
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3 class="fs-24 fw-600 mb-0">Tiket Group</h3>
                <p class="fs-16 fw-400 mb-0"><span>980</span> Paket</p>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8" class="mb-16">
        <nuxt-link to="/catalog/accommodation">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="require('~/static/components/accommodation.png')"
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3 class="fs-24 fw-600 mb-0">LA Akomodasi</h3>
                <p class="fs-16 fw-400 mb-0"><span>2100</span> Paket</p>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8" class="mb-16">
        <nuxt-link to="/catalog/visa">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="require('~/static/components/visa.png')"
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3 class="fs-24 fw-600 mb-0">Visa Perjalanan</h3>
                <p class="fs-16 fw-400 mb-0"><span>431</span> Paket</p>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8" class="mb-16">
        <nuxt-link to="/catalog/insurance">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="require('~/static/components/insurance.png')"
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3 class="fs-24 fw-600 mb-0">Asuransi Perjalanan</h3>
                <p class="fs-16 fw-400 mb-0"><span>131</span> Paket</p>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8" class="mb-16">
        <nuxt-link to="/catalog/handling">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="require('~/static/components/handling.png')"
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3 class="fs-24 fw-600 mb-0">Handling Domestik</h3>
                <p class="fs-16 fw-400 mb-0"><span>531</span> Paket</p>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8" class="mb-16">
        <nuxt-link to="/catalog/manasik">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="require('~/static/components/manasik.png')"
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3 class="fs-24 fw-600 mb-0">Ruang Manasik</h3>
                <p class="fs-16 fw-400 mb-0"><span>131</span> Paket</p>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8" class="mb-16">
        <nuxt-link to="/catalog/equipment">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="require('~/static/components/equipment.png')"
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3 class="fs-24 fw-600 mb-0">Perlengkapan Umroh</h3>
                <p class="fs-16 fw-400 mb-0"><span>41</span> Paket</p>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8" class="mb-16">
        <nuxt-link to="/catalog/tourleader">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="require('~/static/components/tourleader.png')"
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3 class="fs-24 fw-600 mb-0">Tour Leader</h3>
                <p class="fs-16 fw-400 mb-0"><span>11</span> Paket</p>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
    </a-row>
  </div>
</template>
