<template>
  <a-skeleton :loading="loading" active>
    <a-card class="ant-card--package-ticket" hoverable>
      <template slot="cover">
        <flickity
          class="md-flickity__images md-flickity__images-large"
          ref="flickityImages"
          :options="ItemSlider"
        >
          <div
            v-for="(foto, index) in images.slice(1, 4)"
            :key="index"
            class="item-images"
            v-lazy:background-image="foto.gambar"
          ></div>
        </flickity>

        <div class="md-tag--round-trip d-flex align-items-center">
          <div class="icons-trip d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              class="icon-round-trip"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path
                  d="M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z"
                  fill="#FFFFFF"
                  transform="translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) "
                />
              </g>
            </svg>
          </div>
          <div class="label-trip cr-black-opacity">Pulang Pergi</div>
        </div>

        <div class="md-pax--ticket">
          <div class="md-pax--number">{{ qty }}</div>
          <div class="md-pax--label">Pax</div>
        </div>
      </template>

      <nuxt-link :to="'/catalog/ticket-group/detail-ticket?kode_produk=' + url" class="d-block">
        <div class="d-flex align-items-center">
          <a-popover trigger="hover">
            <template slot="content">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Penyedia</div>
              <div class="fs-14 fw-500 cr-black text-capitalize">{{ vendor_name }}</div>
            </template>
            <a-avatar
              class="vendor-logo zIndex mr-8"
              v-lazy:background-image="vendor_logo"
              size="small"
            />
          </a-popover>

          <a-popover trigger="hover">
            <template slot="content">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Maskapai</div>
              <div class="fs-14 fw-500 cr-black text-capitalize">{{ maskapai_name }}</div>
            </template>
            <a-avatar class="zIndex mr-8" :src="maskapai_logo" size="small" />
          </a-popover>

          <div class="ml-auto">
            <span class="fs-14 fw-400 cr-black-opacity">Program {{ program }} Hari</span>
          </div>
        </div>

        <div class="d-flex align-items-end align-items-center mb-16 mt-16">
          <div class="text-left w-50">
            <div
              class="fs-30 fw-500 cr-black text-uppercase"
              :style="{ 'line-height': 'normal' }"
            >{{ from_flight }}</div>
            <div
              class="fs-16 fw-400 cr-black-opacity text-uppercase"
              :style="{ 'line-height': 'normal' }"
            >{{ from_flight_time }}</div>
          </div>

          <div class="text-center icons-airplane">
            <img :src="require('~/static/icons/airplane.svg')" />
          </div>

          <div class="text-right w-50">
            <div
              class="fs-30 fw-500 cr-black text-uppercase"
              :style="{ 'line-height': 'normal' }"
            >{{ to_flight }}</div>
            <div
              class="fs-16 fw-400 cr-black-opacity text-uppercase"
              :style="{ 'line-height': 'normal' }"
            >{{ to_flight_time }}</div>
          </div>
        </div>

        <div class="mb-8">
          <span class="cr-black-opacity">Kota {{ city }}</span>
          <span class="dots"></span>
          <span class="cr-black-opacity">{{ departure | formatDate }}</span>
        </div>

        <div class="d-flex align-items-end align-items-center">
          <div class="fs-20 fw-600 cr-black" :style="{ 'line-height': 'normal' }">
            {{ pricing | currency }}
            <span class="fs-14 fw-400 cr-black-opacity">/pax</span>
          </div>

          <div class="ml-auto fs-14 fw-400 cr-black-opacity text-capitalize">{{ maskapai_class }}</div>
        </div>
      </nuxt-link>
    </a-card>
  </a-skeleton>
</template>

<script>
export default {
  props: {
    images: String,
    city: String,
    departure: String,

    vendor_name: String,
    vendor_logo: String,

    maskapai_name: String,
    maskapai_logo: String,
    maskapai_class: String,
    from_flight: String,
    from_flight_time: String,
    to_flight: String,
    to_flight_time: String,

    program: Number,
    pricing: Number,
    qty: Number,

    url: String,

    loading: Boolean
  },

  data() {
    return {
      ItemSlider: {
        prevNextButtons: false,
        pageDots: true
      }
    };
  },

  filters: {
    formatDate: function(value) {
      const date = new Date(value);

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des"
      ];
      const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

      const dayName = days[date.getDay()];
      const dayOfMonth = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${dayName}, ${dayOfMonth} ${month} ${year}`;
    }
  }
};
</script>

<style lang="scss">
.md-tag--round-trip {
  background-color: rgba($color: #fff, $alpha: 0.85);
  height: 28px;
  position: absolute;
  border-radius: 50px;
  width: auto;
  right: 16px;
  top: 16px;
  & .icons-trip {
    background-color: #6c63ff;
    border: 1px solid rgba($color: #fff, $alpha: 0.85);
    border-radius: 50px;
    width: 28px;
    height: 28px;
    & svg {
      margin: 0 auto;
      width: 20px;
      height: 20px;
    }
  }
  & .label-trip {
    padding: 0 14px 0 6px;
  }
}

.md-pax--ticket {
  background-color: #6c63ff;
  position: absolute;
  border-radius: 50px;
  text-align: center;
  line-height: normal;
  padding: 12px 0;
  height: 56px;
  width: 56px;
  left: 16px;
  top: 16px;
  & .md-pax--number {
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
  }

  & .md-pax--label {
    color: rgba($color: #ffffff, $alpha: 0.85);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
  }
}

.icons-airplane {
  & img {
    width: 22px;
    opacity: 0.2;
  }
}
</style>
