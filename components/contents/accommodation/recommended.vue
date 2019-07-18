<template>
  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }" :dataSource="lisData">
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-skeleton :loading="loading" active>
        <nuxt-link to class="d-block">
          <a-card class="ant-card-package-small">
            <div slot="cover">
              <div
                class="ant-card-cover--images"
                :style="{ backgroundImage: `url(${item.images_package})` }"
              >
                <div class="ant-card-cover--overlay">
                  <div class="ant-card-cover--overlay-box-radius"></div>
                  <div class="ant-card-cover--overlay-text">
                    <div class="ant-card-cover--overlay-text-title fs-20 fw-500">75</div>
                    <div class="ant-card-cover--overlay-text-subtitle text-uppercase">
                      <span>ROOM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex align-items-center">
              <div class="mr-8">
                <a-avatar :src="item.logo_vendor" size="small" />
              </div>
              <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">
                {{item.vendor}}
              </div>
              <div class="ml-auto"><a-rate class="fs-12 f-default" :defaultValue="4" disabled /></div>
            </div>

            <a-row :gutter="8" type="flex" justify="space-between" align="middle" class="mt-8 mb-8">
              <a-col :span="12" class="text-left">
                <div class="fs-15 fw-500 cr-black text-capitalize text-ellipsis f-default">
                  Rayyana
                  Ajyad
                </div>
                <div class="fs-13 fw-400 cr-black text-capitalize f-default">3 Hari Mekkah</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-15 fw-500 cr-black text-capitalize text-ellipsis f-default">
                  Pinewood
                  Hotel
                </div>
                <div class="fs-13 fw-400 cr-black text-capitalize f-default">4 Hari Madinah</div>
              </a-col>
            </a-row>

            <div class="d-flex align-items-center">
              <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">Program 9 Hari</div>
              <div class="ml-auto fs-16 fw-500 cr-primary f-default text-ellipsis">Rp{{item.price}}</div>
            </div>

            <div class="package-description--more p-16">
              <div class="d-flex align-items-center mb-8">
                <div class="fs-15 fw-400 cr-black f-default text-ellipsis">High Session</div>
                <div class="fs-15 fw-400 cr-black f-default text-ellipsis ml-auto">{{item.class_room}}</div>
              </div>

              <div class="d-flex align-items-center mb-16">
                <div class="fs-13 fw-400 text-ellipsis">
                  <div class="cr-gray">Check In</div>
                  <div class="cr-black">10 September 2019</div>
                </div>
                <div class="fs-13 fw-400 text-ellipsis text-right ml-auto">
                  <div class="cr-gray">Check Out</div>
                  <div class="cr-black">19 September 2019</div>
                </div>
              </div>

              <a-button block>
                <nuxt-link to="/payment/order-data">Pesan</nuxt-link>
              </a-button>
            </div>
          </a-card>
        </nuxt-link>
      </a-skeleton>
    </a-list-item>
  </a-list>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      lisData: [
        {
          id: 1,
          images_package: "/akomodasi/hotel/l1.jpg",
          logo_vendor: "/akomodasi/logo/ll1.svg",
          vendor: "Al Jumrah",
          price: "6.200.000",
          class_room: "Quad Room"
        },
        {
          id: 2,
          images_package: "/akomodasi/hotel/l2.jpg",
          logo_vendor: "/akomodasi/logo/ll2.svg",
          vendor: "Al Jumrah",
          price: "6.700.000",
          class_room: "Quad Room"
        },
        {
          id: 3,
          images_package: "/akomodasi/hotel/l3.jpg",
          logo_vendor: "/akomodasi/logo/ll3.svg",
          vendor: "Al Jumrah",
          price: "6.300.000",
          class_room: "Quad Room"
        },
        {
          id: 4,
          images_package: "/akomodasi/hotel/l4.jpg",
          logo_vendor: "/akomodasi/logo/ll4.svg",
          vendor: "Al Jumrah",
          price: "6.900.000",
          class_room: "Quad Room"
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
};
</script>