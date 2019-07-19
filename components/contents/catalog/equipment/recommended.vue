<template>
  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }" :dataSource="lisData">
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-skeleton :loading="loading" active>
        <nuxt-link to="/catalog/equipment/detail" class="d-block">
          <a-card class="ant-card-package-small">
            <div slot="cover">
              <div
                class="ant-card-cover--images"
                :style="{ backgroundImage: `url(${item.images_package})` }"
              >
                <div class="ant-card-cover--overlay">
                  <div class="ant-card-cover--overlay-box-radius ant-pax--insurance"></div>
                  <div class="ant-card-cover--overlay-text">
                    <div class="ant-card-cover--overlay-text-title fs-18 fw-500">{{item.pax}}</div>
                    <div class="ant-card-cover--overlay-text-subtitle fs-10 text-uppercase">
                      <span>pax</span>
                    </div>
                  </div>
                </div>

                <div class="ant-card--overlay-block">
                  <div class="d-flex align-items-center h-100">
                    <a-button>
                      <nuxt-link to="/catalog/equipment/detail">Lihat detail</nuxt-link>
                    </a-button>
                  </div>
                </div>
              </div>
            </div>

            <a-card-meta>
              <div slot="title">
                <div class="ant-card-meta-title--top d-flex align-items-center">
                  <div class="ant-card-meta-title--top-left d-flex align-items-center">
                    <div class="mr-8">
                      <a-avatar :src="item.logo_provider" size="small" />
                    </div>
                    <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">{{item.provider}}</div>
                  </div>
                  <div class="fs-13 fw-400 cr-gray f-default text-ellipsis ml-auto">Perlengkapan Standar</div>
                </div>
                <div class="ant-card-meta-title--package fs-15 f-default fw-500 mb-8">{{item.name_equipment}}</div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div
                    class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis"
                  >Rp{{item.price}}</div>
                  <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                    <div class="icon icon-star text-ellipsis">
                      <a-icon type="star" theme="filled" class="mr-4" />5.8
                    </div>
                    <div class="icon icon-comment text-ellipsis">
                      <a-icon type="message" class="mr-4" />10 Komentar
                    </div>
                  </div>
                </div>
              </div>
            </a-card-meta>

            <div class="package-description--more p-16">
              <div class="mb-16">
                <div class="fs-13 fw-400 text-ellipsis">
                  <div class="cr-gray">Tersedia</div>
                  <div class="cr-black">Perlengkapan umrah pria dan wanita</div>
                </div>
              </div>

              <a-button block>
                <nuxt-link to="/catalog/equipment/order-review">Pesan</nuxt-link>
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
          name_equipment: "Perlengkapan Umrah Makassar",
          images_package: "/perlengkapan/package/p1.jpg",
          provider: "Subur Jaya",
          logo_provider: "/akomodasi/logo/ll1.svg",
          pax: "9",
          price: "190.000"
        },
        {
          name_equipment: "Perlengkapan Umrah Jakarta",
          images_package: "/perlengkapan/package/p2.jpg",
          provider: "Subur Jaya",
          logo_provider: "/akomodasi/logo/ll2.svg",
          pax: "13",
          price: "110.000"
        },
        {
          name_equipment: "Perlengkapan Umrah Batulicin",
          images_package: "/perlengkapan/package/p3.jpeg",
          provider: "Subur Jaya",
          logo_provider: "/akomodasi/logo/ll3.svg",
          pax: "16",
          price: "200.000"
        },
        {
          name_equipment: "Perlengkapan Umrah Banjarmasin",
          images_package: "/perlengkapan/package/p4.jpg",
          provider: "Subur Jaya",
          logo_provider: "/akomodasi/logo/ll3.svg",
          pax: "20",
          price: "210.000"
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