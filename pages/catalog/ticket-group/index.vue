<template>
  <div>
    <div class="content-head content-head--ticket-group">
      <div class="content-head--cover" v-lazy:background-image="require('~/static/maskapai/cover/tc1.png')">
        <div class="content-head--body container">
          <div class="gradient-top"></div>
          <a-row :gutter="24" type="flex" justify="space-between" align="middle" class="h-100">
            <a-col :xs="24" :sm="24" :md="24" :lg="24">
              <h1 class="fs-40 cr-white" :style="{ 'line-height': 'normal' }">
                Beragam pilihan <br />
                Tiket group untuk anda
              </h1>
              <a-card :bordered="false" class="b-shadow b-radius b-opacity">
                <searchTicket />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-about--ticket-group" :style="{padding: '124px 0'}">
      <div class="container">
        <a-row :gutter="24" type="flex" justify="space-between" align="middle">
          <a-col :xs="24" :sm="24" :md="12" class="mb-24">
            <h2 class="text-uppercase cr-black">Tiket Group Haloatta</h2>
            <p class="fs-16 cr-black-opacity">
              Halo..
              Atta ticket adalah perusahaan aplikasi online yang menyediakan berbagai macam ticket penerbangan 
              yang dapat disesuaikan dengan kebutuhan perjalanan serta petualangan wisata halal dalam satu platform.
              
              
            </p>
            <p class="fs-16 cr-black-opacity">
              Halo…
              Atta memberikan kesempatan anda untuk menciptakan momen momen bersama orang-orang yang anda cintai yang tidak terlupakan.
            </p>
            <p class="fs-16 cr-black-opacity">
              Halo…
              Atta menyajikan kemudahan dalam memilih penerbangan dengan tujuan wisata halal diberbagai belahan 
              dunia. Terkhusus tujuan wisata halal yaitu perjalanan ibadah Umroh dan Haji.
            </p>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" class="mb-24">
            <img
              class="mx-width d-block m-auto"
              style="maxHeight: 320px"
              v-lazy="require('~/static/illu/connected_world.svg')"
            />
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="content-recommended--ticket-group pb-40">
      <div class="container">
        <h2 class="md-title">Rekomendasi Haloatta</h2>
        <Recommended />
      </div>
    </div>
  </div>
</template>
<script>
import searchTicket from "@/components/contents/lib/search/ticket.vue";
import Recommended from "@/components/contents/catalog/ticket/recommended.vue";
export default {
  name: "ticketGroup",
  
  components: {
    searchTicket,
    Recommended
  },

  head() {
    return {
      title: "Pesan Tiket Group - Best Travel Agen | Haloatta"
    };
  }
};
</script>
