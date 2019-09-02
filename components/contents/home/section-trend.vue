<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left">
        Sedang Trending
      </a-divider>
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
      <slick ref="slick" :options="slickTrend">
        <a-card class="card-product--trend">
          <div slot="cover" :style="{ backgroundImage: `url(${trend1})` }"></div>
          <a-card-meta>
            <div slot="title">Umrah Bareng Artis</div>
            <div slot="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
          </a-card-meta>
        </a-card>

        <a-card class="card-product--trend">
          <div slot="cover" :style="{ backgroundImage: `url(${trend2})` }"></div>
          <a-card-meta>
            <div slot="title">Liburan Umaroh</div>
            <div slot="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
          </a-card-meta>
        </a-card>

        <a-card class="card-product--trend">
          <div slot="cover" :style="{ backgroundImage: `url(${trend3})` }"></div>
          <a-card-meta>
            <div slot="title">Umrah Plus Hemat</div>
            <div slot="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
          </a-card-meta>
        </a-card>

        <a-card class="card-product--trend">
          <div slot="cover" :style="{ backgroundImage: `url(${trend4})` }"></div>
          <a-card-meta>
            <div slot="title">Outbond Alumni</div>
            <div slot="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
          </a-card-meta>
        </a-card>
      </slick>

      <div class="action-slick">
        <a-button class="btn-left" @click="prev" size="large" shape="circle" icon="left" />
        <a-button class="btn-right" @click="next" size="large" shape="circle" icon="right" />
      </div>
    </div>
  </div>
</template>
<script>
import trend1 from "~/static/trend/T1.png";
import trend2 from "~/static/trend/T2.png";
import trend3 from "~/static/trend/T3.png";
import trend4 from "~/static/trend/T4.png";
export default {
  data() {
    return {
      trend1,
      trend2,
      trend3,
      trend4,
      slickTrend: {
        slidesToShow: 4,
        infinite: true,
        arrows: false,
        draggable: true,
        prevArrow: ".prev",
        nextArrow: ".next"
      }
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
