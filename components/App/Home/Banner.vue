<template>
  <div class="content-banner-full">
    <a-card class="cover-banner">
      <div slot="cover">
        <div
          class="cover-images"
          v-lazy:background-image="require('~/static/umrah/cover/cu28.png')"
        >
          <div class="container">
            <a-row
              :gutter="16"
              type="flex"
              justify="start"
              align="middle"
              class="h-100"
            >
              <a-col :xs="24" :sm="24" :md="12">
                <a-card-meta>
                  <template slot="title">
                    <span class="fs-40 f-default cr-white"
                      >Mau ibadah sekaligus jadi pengusaha ?</span
                    >
                  </template>
                  <template slot="description">
                    <p class="mb-24 fs-24 f-default cr-white">
                      Pelajari berapa yang bisa Anda hasilkan dengan menjual
                      komponen dan paket umrah Anda
                    </p>
                    <a-button size="large" class="b-shadow b-radius">
                      <a href="https://betavendor.haloatta.com" target="_blank"
                        >Lihat Selengkapnya</a
                      >
                    </a-button>
                  </template>
                </a-card-meta>
              </a-col>
            </a-row>
          </div>
          <div class="gradient-bottom"></div>
        </div>
      </div>
    </a-card>
  </div>
</template>
