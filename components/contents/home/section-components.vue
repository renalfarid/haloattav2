<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left">Halo Choice</a-divider>
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

    <a-row :gutter="16" class="mb-16">
      <a-col :span="8">
        <nuxt-link to="/catalog/ticket-group">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgTicket"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Tiket Group</h3>
              <p class="fs-16 fw-400 mb-0">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/accommodation">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgAccommodation"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">LA Akomodasi</h3>
              <p class="fs-16 fw-400 mb-0">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/visa">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgVisa"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Visa Perjalanan</h3>
              <p class="fs-16 fw-400 mb-0">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
    </a-row>

    <a-row :gutter="16" class="mb-16">
      <a-col :span="8">
        <nuxt-link to="/catalog/insurance">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgInsurance"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Asuransi Perjalanan</h3>
              <p class="fs-16 fw-400 mb-0">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/handling">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgHandling"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Handling Domestik</h3>
              <p class="fs-16 fw-400 mb-0">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/manasik">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgManasik"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Room Manasik</h3>
              <p class="fs-16 fw-400 mb-0">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
    </a-row>

    <a-row :gutter="16" class="mb-16">
      <a-col :span="8">
        <nuxt-link to="/catalog/equipment">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgEquipment"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Perlengkapan</h3>
              <p class="fs-16 fw-400 mb-0">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/tourleader">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgTourleader"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Tour Leader</h3>
              <p class="fs-16 fw-400 mb-0">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8"></a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgTicket: "/components/ticket.png",
      imgAccommodation: "/components/accommodation.png",
      imgVisa: "/components/visa.png",
      imgInsurance: "/components/insurance.png",
      imgHandling: "/components/handling.png",
      imgManasik: "/components/manasik.png",
      imgEquipment: "/components/equipment.png",
      imgTourleader: "/components/tourleader.png"
    };
  }
};
</script>
