<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <sectionSearchUmrah />

          <sectionFilterUmrah />
        </div>

        <div class="ant-layout--results-list">
          <div class="ant-layout--results-list-label">Hasil Pencarian Paket Umrah</div>
          <a-list :grid="{ gutter: 16, column: 3 }" :pagination="pagination" :dataSource="listData">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-card class="ant-card-package">
                <nuxt-link to="/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
                <div slot="cover">
                  <div
                    class="ant-card-cover--images"
                    :style="{ backgroundImage: `url(${vaforite1})` }"
                  >
                    <div class="ant-card-cover--overlay">
                      <div class="ant-card-cover--overlay-box-radius"></div>
                      <div class="ant-card-cover--overlay-text">
                        <div class="ant-card-cover--overlay-text-title">sisa</div>
                        <div class="ant-card-cover--overlay-text-subtitle">
                          <span>{{item.pax}}</span> pax
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a-card-meta>
                  <div slot="title">
                    <div class="ant-card-meta-title--top d-flex align-items-center">
                      <div class="ant-card-meta-title--top-left">
                        <a-icon type="star" theme="filled" />
                        <a-icon type="star" theme="filled" />
                        <a-icon type="star" theme="filled" />
                      </div>
                      <div class="ant-card-meta-title--top-right ml-auto">
                        <a-tag>
                          Terbooking
                          <strong>30</strong> seat
                        </a-tag>
                      </div>
                    </div>
                    <div class="ant-card-meta-title--package">{{item.title}}</div>
                  </div>

                  <div slot="description">
                    <div class="ant-card-meta-description--bottom d-flex align-items-center">
                      <div class="ant-card-meta-description--bottom-left">Rp 20.000.000</div>
                      <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                        <div class="icon icon-star">
                          <a-icon type="star" theme="filled" />5.8
                        </div>
                        <div class="icon icon-comment">
                          <a-icon type="message" />10 Komentar
                        </div>
                      </div>
                    </div>
                  </div>
                </a-card-meta>
              </a-card>
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
import sectionSearchUmrah from "~/components/contents/lib/search/search-umrah.vue";
import sectionFilterUmrah from "~/components/contents/lib/filter/filter-umrah.vue";
import sectionRecomendedSame from "~/components/contents/results/umrah/recomended-same.vue";
import sectionComponentsUmrah from "~/components/contents/home/section-components.vue";
import vaforite1 from "~/static/products/V1.png";
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    title: `Umrah Exclusive 2020 Keberangkatan Jakarta ${i}`,
    pax: `1${i}`
  });
}
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
      vaforite1,
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
  components: {
    sectionSearchUmrah,
    sectionFilterUmrah,
    sectionRecomendedSame,
    sectionComponentsUmrah
  }
};
</script>
