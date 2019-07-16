<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <search-umrah-result />

          <filter-umrah />
        </div>

        <div class="ant-layout--results-list">
          <div class="ant-layout--results-list-label">Hasil Pencarian Paket Umrah</div>
          <a-list :grid="{ gutter: 16, column: 3 }" :pagination="pagination" :dataSource="listData">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-skeleton :loading="loading" active>
                <a-card class="ant-card-package">
                  <nuxt-link to="/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
                  <div slot="cover">
                    <div
                      class="ant-card-cover--images"
                      :style="{ backgroundImage: `url(${item.images_product})` }"
                    >
                      <div class="ant-card-cover--overlay">
                        <div class="ant-card-cover--overlay-box-radius"></div>
                        <div class="ant-card-cover--overlay-text">
                          <div class="ant-card-cover--overlay-text-title">sisa</div>
                          <div class="ant-card-cover--overlay-text-subtitle">
                            <span>{{item.pax_available}}</span> pax
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a-card-meta>
                    <div slot="title">
                      <div class="ant-card-meta-title--top d-flex align-items-center">
                        <div class="ant-card-meta-title--top-left">
                          <a-rate class="fs-14" :defaultValue="3" disabled />
                        </div>
                        <div class="ant-card-meta-title--top-right ml-auto">
                          <a-tag>
                            Terbooking
                            <strong>{{item.pax_booked}}</strong> seat
                          </a-tag>
                        </div>
                      </div>
                      <div class="ant-card-meta-title--package">{{item.name_product}}</div>
                    </div>

                    <div slot="description">
                      <div class="ant-card-meta-description--bottom d-flex align-items-center">
                        <div class="ant-card-meta-description--bottom-left">Rp{{item.price_product}}</div>
                        <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                          <div class="icon icon-star">
                            <a-icon type="star" theme="filled" class="mr-4" />5.8
                          </div>
                          <div class="icon icon-comment">
                            <a-icon type="message" class="mr-4" />10 Komentar
                          </div>
                        </div>
                      </div>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-skeleton>
            </a-list-item>
          </a-list>
        </div>
      </div>
    </div>

    <!-- recomended umrah -->
    <div class="ant-layout--recomendation-same">
      <sectionRecomendedSame />
    </div>

    <!-- components umrah -->
    <div class="content-components-umrah">
      <sectionComponentsUmrah />
    </div>
  </div>
</template>
<script>
import searchUmrahResult from "~/components/contents/lib/search/umrah-result.vue";
import filterUmrah from "~/components/contents/lib/filter/umrah.vue";
import sectionRecomendedSame from "~/components/contents/results/umrah/recomended-same.vue";
import sectionComponentsUmrah from "~/components/contents/home/section-components.vue";
const listData = [
  {
    id: 1,
    name_product: "Umrah Exclusive November 2019 Keberangkatan Jakarta",
    images_product: "/products/V2.png",
    price_product: "20.400.000",
    pax_available: 21,
    pax_booked: 65
  },
  {
    id: 2,
    name_product: "Umrah Exclusive Desember 2019 Keberangkatan Makassar",
    images_product: "/products/V2.png",
    price_product: "27.900.000",
    pax_available: 18,
    pax_booked: 75
  },
  {
    id: 3,
    name_product: "Umrah Exclusive Januari 2020 Keberangkatan Makassar",
    images_product: "/products/V3.png",
    price_product: "23.300.000",
    pax_available: 32,
    pax_booked: 5
  },
  {
    id: 4,
    name_product: "Umrah Exclusive Februari 2020 Keberangkatan Makassar",
    images_product: "/products/V4.png",
    price_product: "26.900.000",
    pax_available: 29,
    pax_booked: 14
  },
  {
    id: 5,
    name_product: "Umrah Exclusive Maret 2020 Keberangkatan Jakarta",
    images_product: "/products/V5.png",
    price_product: "27.000.000",
    pax_available: 47,
    pax_booked: 14
  }
];
export default {
  name: "umrahResults",
  head() {
    return {
      title:
        "Hasil Pencarian Paket Umrah - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {
      loading: true,
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        showTotal: total => `Total ${total} Paket Umrah`,
        pageSize: 9
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  components: {
    searchUmrahResult,
    filterUmrah,
    sectionRecomendedSame,
    sectionComponentsUmrah
  }
};
</script>
