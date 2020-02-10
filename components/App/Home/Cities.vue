<template>
  <div class="md-cities--list">
    <div class="container">
      <h2 class="md-title">Jelajahi Haloatta di Kota Anda</h2>
      <a-row :gutter="24">
        <a-col
          class="mb-24"
          v-for="city in cities"
          :key="city.id"
          :xs="24"
          :sm="12"
          :md="12"
          :lg="6"
        >
          <a-badge dot :style="{'width':'100%'}">
            <a-card :bordered="false">
              <div class="d-flex align-items-center">
                <div
                  class="md-cities--cover"
                  v-lazy:background-image="city.cover"
                ></div>
                <div class="md-cities--name">
                  {{ city.name }}
                </div>
              </div>
            </a-card>
          </a-badge>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        {
          id: 1,
          name: "Makassar",
          cover: require("~/static/cities/makassar.png")
        },
        {
          id: 2,
          name: "Jakarta",
          cover: require("~/static/cities/jakarta.png")
        },
        {
          id: 3,
          name: "Surabaya",
          cover: require("~/static/cities/surabaya.png")
        },
        {
          id: 4,
          name: "Gowa",
          cover: require("~/static/cities/gowa.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.md-cities--list {
  padding: 64px 0 0 0;
  & .ant-card {
    border-radius: 6px !important;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 8px !important;
    & .ant-card-body {
      padding: 0;
      & .md-cities--cover {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 16px;
        height: 96px;
        min-width: 116px;
        width: 116px;
      }

      & .md-cities--name {
        letter-spacing: 0.5px;
        line-height: 26px;
        font-size: 20px;
        font-weight: 500;
        color: #000000;
      }
    }
  }
}
</style>
