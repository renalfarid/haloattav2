<template>
  <div class="container">
    <div class="header-title">
      <a-row :gutter="16">
        <a-col :span="16">
          <h2 class="title">Komponen Umrah</h2>
          <h6
            class="subtitle"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione</h6>
        </a-col>
      </a-row>
    </div>

    <div class="container-slick">
      <slick ref="slick" :options="slickRecomended">
        <div>
          <a-card class="card-product--components">
            <img alt="haloatta" src="~/static/components/C1.png" slot="cover">
            <a-card-meta title="Tiket Group">
              <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
            </a-card-meta>
            <div class="gradient-bottom"></div>
          </a-card>
        </div>

        <div>
          <a-card class="card-product--components">
            <img alt="haloatta" src="~/static/components/C2.png" slot="cover">
            <a-card-meta title="LA Akomodasi">
              <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
            </a-card-meta>
            <div class="gradient-bottom"></div>
          </a-card>
        </div>

        <div>
          <a-card class="card-product--components">
            <img alt="haloatta" src="~/static/components/C3.png" slot="cover">
            <a-card-meta title="Visa Umrah">
              <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
            </a-card-meta>
            <div class="gradient-bottom"></div>
          </a-card>
        </div>

        <div>
          <a-card class="card-product--components">
            <img alt="haloatta" src="~/static/components/C4.png" slot="cover">
            <a-card-meta title="Asuransi">
              <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
            </a-card-meta>
            <div class="gradient-bottom"></div>
          </a-card>
        </div>

        <div>
          <a-card class="card-product--components">
            <img alt="haloatta" src="~/static/components/C2.png" slot="cover">
            <a-card-meta title="Handling">
              <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
            </a-card-meta>
            <div class="gradient-bottom"></div>
          </a-card>
        </div>
      </slick>

      <div class="action-slick">
        <a-button class="btn-left" size="large" @click="prev" shape="circle" icon="left"/>
        <a-button class="btn-right" size="large" @click="next" shape="circle" icon="right"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slickRecomended: {
        slidesToShow: 4,
        infinite: false,
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
