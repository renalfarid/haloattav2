<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left">Komponen Umrah</a-divider>
      <a-row :gutter="16">
        <a-col :span="16">
          <h6 class="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio hic in sint reiciendis libero necessitatibus
            quos cumque ipsum ratione
          </h6>
        </a-col>
      </a-row>
    </div>

    <div class="container-slick">
      <slick ref="slick" :options="slickComponentsUmrah">
        <a-card class="card-product--components">
          <div slot="cover">
            <img v-lazy="imgTicket" />
            <div class="ant-card-cover--overlay">
              <a-card-meta title="Tiket Group">
                <template slot="description">
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit
                </template>
              </a-card-meta>
            </div>
            <div class="gradient-bottom"></div>
            <nuxt-link to="/catalog/ticket-group"></nuxt-link>
          </div>
        </a-card>

        <a-card class="card-product--components">
          <div slot="cover">
            <img v-lazy="imgAccommodation" />
            <div class="ant-card-cover--overlay">
              <a-card-meta title="LA Akomodasi">
                <template slot="description">
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit
                </template>
              </a-card-meta>
            </div>
            <div class="gradient-bottom"></div>
            <nuxt-link to="/catalog/accommodation"></nuxt-link>
          </div>
        </a-card>

        <a-card class="card-product--components">
          <div slot="cover">
            <img v-lazy="imgVisa" />
            <div class="ant-card-cover--overlay">
              <a-card-meta title="Visa Umrah">
                <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
              </a-card-meta>
            </div>
            <div class="gradient-bottom"></div>
            <nuxt-link to="/catalog/visa"></nuxt-link>
          </div>
        </a-card>

        <a-card class="card-product--components">
          <div slot="cover">
            <img v-lazy="imgInsurance" />
            <div class="ant-card-cover--overlay">
              <a-card-meta title="Asuransi">
                <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
              </a-card-meta>
            </div>
            <div class="gradient-bottom"></div>
            <nuxt-link to="/catalog/insurance"></nuxt-link>
          </div>
        </a-card>

        <a-card class="card-product--components">
          <div slot="cover">
            <img v-lazy="imgHandling" />
            <div class="ant-card-cover--overlay">
              <a-card-meta title="Handling">
                <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
              </a-card-meta>
            </div>
            <div class="gradient-bottom"></div>
            <nuxt-link to="/catalog/handling"></nuxt-link>
          </div>
        </a-card>

        <a-card class="card-product--components">
          <div slot="cover">
            <img v-lazy="imgManasik" />
            <div class="ant-card-cover--overlay">
              <a-card-meta title="Manasik">
                <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
              </a-card-meta>
            </div>
            <div class="gradient-bottom"></div>
            <nuxt-link to="/catalog/manasik"></nuxt-link>
          </div>
        </a-card>

        <a-card class="card-product--components">
          <div slot="cover">
            <img v-lazy="imgEquipment" />
            <div class="ant-card-cover--overlay">
              <a-card-meta title="Perlengkapan">
                <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
              </a-card-meta>
            </div>
            <div class="gradient-bottom"></div>
            <nuxt-link to="/catalog/equipment"></nuxt-link>
          </div>
        </a-card>

        <a-card class="card-product--components">
          <div slot="cover">
            <img v-lazy="imgTourleader" />
            <div class="ant-card-cover--overlay">
              <a-card-meta title="Tour Leader">
                <template slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</template>
              </a-card-meta>
            </div>
            <div class="gradient-bottom"></div>
            <nuxt-link to="/catalog/tourleader"></nuxt-link>
          </div>
        </a-card>
      </slick>

      <div class="action-slick">
        <a-button class="btn-left" size="large" @click="prev" shape="circle" icon="left" />
        <a-button class="btn-right" size="large" @click="next" shape="circle" icon="right" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgTicket: '/components/ticket.png',
      imgAccommodation: '/components/accommodation.png',
      imgVisa: '/components/visa.png',
      imgInsurance: '/components/insurance.png',
      imgHandling: '/components/handling.png',
      imgManasik: '/components/manasik.png',
      imgEquipment: '/components/equipment.png',
      imgTourleader: '/components/tourleader.png',
      slickComponentsUmrah: {
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
