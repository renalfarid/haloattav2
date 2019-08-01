<template>
  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }" :dataSource="lisData">
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-skeleton :loading="loading" active>
        <nuxt-link to="/catalog/visa/detail" class="d-block">
          <a-card class="ant-card-package-small">
            <div slot="cover">
              <div
                class="ant-card-cover--images"
                :style="{ backgroundImage: `url(${item.images_package})` }"
              >
                <div class="ant-card-cover--overlay">
                  <div class="ant-card-cover--overlay-box-radius ant-pax--visa"></div>
                  <div class="ant-card-cover--overlay-text">
                    <div class="ant-card-cover--overlay-text-title fs-18 fw-500">75</div>
                    <div class="ant-card-cover--overlay-text-subtitle text-uppercase">
                      <span>pax</span>
                    </div>
                  </div>
                </div>

                <div class="ant-card--overlay-block">
                  <div class="d-flex align-items-center h-100">
                    <a-button>
                      <nuxt-link to="/catalog/visa/detail">Lihat detail</nuxt-link>
                    </a-button>
                  </div>
                </div>
              </div>
            </div>

            <a-card-meta>
              <div slot="title">
                <div class="ant-card-meta-title--top d-flex align-items-center mb-8">
                  <div class="ant-card-meta-title--top-left d-flex align-items-center">
                    <div class="mr-8"><a-avatar :src="item.logo_provider" size="small" /></div>
                    <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">{{item.provider}}</div>
                  </div>
                </div>
                <div class="ant-card-meta-title--package fw-500 fs-15">{{item.name_visa}}</div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div class="ant-card-meta-description--bottom-right d-flex">
                    <div class="fs-14 fw-400 cr-black f-default text-ellipsis">Program 9 Hari</div>
                  </div>
                  <div class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto">Rp{{item.price}}</div>
                </div>
              </div>
            </a-card-meta>

            <div class="package-description--more p-16">
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
                <nuxt-link to="/catalog/visa/order-review">Pesan</nuxt-link>
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
          name_visa: "Visa Umrah Babul Kabah Agustus 2019",
          images_package: "/visa/package/v1.jpg",
          provider: "Babul Kabah",
          logo_provider: "/akomodasi/logo/ll1.svg",
          price: "890.000"
        },
        {
          name_visa: "Visa Umrah September 2019",
          images_package: "/visa/package/v2.jpg",
          provider: "Babul Kabah",
          logo_provider: "/akomodasi/logo/ll2.svg",
          price: "790.000"
        },
        {
          name_visa: "Visa Umrah Januari 2020",
          images_package: "/visa/package/v3.jpg",
          provider: "Babul Kabah",
          logo_provider: "/akomodasi/logo/ll3.svg",
          price: "900.000"
        },
        {
          name_visa: "Visa Umrah Februari 2020",
          images_package: "/visa/package/v4.jpg",
          provider: "Babul Kabah",
          logo_provider: "/akomodasi/logo/ll3.svg",
          price: "910.000"
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