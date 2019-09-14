<template>
  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }" :dataSource="lisData">
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-skeleton :loading="loading" active>
        <nuxt-link to="/catalog/tourleader/detail" class="d-block">
          <a-card class="ant-card-package-small">
            <div slot="cover">
              <div class="ant-card-cover--images" v-lazy:background-image="item.images_package">
                <div class="ant-card--overlay-block">
                  <div class="d-flex align-items-center h-100">
                    <a-button>
                      <nuxt-link to="/catalog/tourleader/detail">Lihat detail</nuxt-link>
                    </a-button>
                  </div>
                </div>
              </div>
            </div>

            <a-card-meta>
              <div slot="title">
                <div class="ant-card-meta-title--top d-flex align-items-center mb-16">
                  <div class="ant-card-meta-title--top-left d-flex align-items-center">
                    <div class="mr-8">
                      <a-popover trigger="hover">
                        <template slot="content">
                          <div class="fs-13 fw-400 cr-gray f-default">Berpengalaman</div>
                        </template>
                        <a-avatar
                          style="backgroundColor: #FF7C0A"
                          class="zIndex"
                          icon="safety"
                          size="small"
                        />
                      </a-popover>
                    </div>
                    <div class="mr-8">
                      <a-avatar :src="item.logo_provider" size="small" />
                    </div>
                    <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">{{item.provider}}</div>
                  </div>
                </div>
                <div class="ant-card-meta-title--package fs-15 fw-500">{{item.name_tourleader}}</div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div class="ant-card-meta-description--bottom-right d-flex">
                    <div class="fs-14 fw-400 cr-black f-default text-ellipsis">Program 9 Hari</div>
                  </div>
                  <div
                    class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                  >Rp{{item.price}}</div>
                </div>
              </div>
            </a-card-meta>

            <div class="package-description--more p-16">
              <div class="d-flex align-items-center mb-16">
                <div class="fs-14 fw-400 cr-black text-ellipsis">Asal Makassar</div>
                <div class="fs-14 fw-400 cr-black text-ellipsis text-right ml-auto">Laki-Laki</div>
              </div>

              <div>
                <div class="fs-14 fw-400 cr-gray text-ellipsis">Keterangan</div>
                <div class="fs-14 fw-400 cr-black">Mampu berbahasa arab dan indonesia</div>
              </div>
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
          name_tourleader: "Ustd. Gustang Arifatullah",
          images_package: "/tourleader/package/tl1.png",
          provider: "Personal",
          logo_provider: "/akomodasi/logo/ll1.svg",
          pax: "15",
          price: "400.000"
        },
        {
          name_tourleader: "Ustd. Dedi Abdullah",
          images_package: "/tourleader/package/tl2.png",
          provider: "Subur Jaya",
          logo_provider: "/akomodasi/logo/ll2.svg",
          pax: "20",
          price: "500.000"
        },
        {
          name_tourleader: "Ustd. Enal Fadillah",
          images_package: "/tourleader/package/tl3.png",
          provider: "Personal",
          logo_provider: "/akomodasi/logo/ll3.svg",
          pax: "25",
          price: "600.000"
        },
        {
          name_tourleader: "Ustd. Ilham Sabarullah",
          images_package: "/tourleader/package/tl4.png",
          provider: "Subur Jaya",
          logo_provider: "/akomodasi/logo/ll3.svg",
          pax: "20",
          price: "500.000"
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