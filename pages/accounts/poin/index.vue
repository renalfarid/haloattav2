<template>
  <div class="ant-product--promo">
    <Empty
      v-if="!data.length"
      :transaction="true"
      :label="'Tidak ada Promo atau Penawaran'"
    />

    <div v-else>
      <div class="fs-18 fw-500 cr-black">Semua Promo dan Penawaran</div>

      <a-card
        :bordered="false"
        class="ant-card--filter b-solid b-radius b-shadow mt-16"
      >
        <a-row :gutter="16" type="flex" justify="space-around" align="middle">
          <a-col :span="6" class="text-uppercase cr-gray fs-14"
            >Urutkan Berdasarkan</a-col
          >
          <a-col :span="8">
            <a-select showSearch :defaultValue="1" style="width: 100%">
              <a-select-option :value="1">Terendah</a-select-option>
              <a-select-option :value="2">Tertinggi</a-select-option>
            </a-select>
          </a-col>
          <a-col :span="10"></a-col>
        </a-row>
      </a-card>

      <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="data">
        <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
          <a-skeleton :loading="loading" active>
            <a-card class="ant-card-package-small">
              <div slot="cover">
                <div
                  class="ant-card-cover--images"
                  :style="{ backgroundImage: `url(${item.promo_images})` }"
                ></div>
              </div>

              <a-card-meta>
                <div slot="title">
                  <div class="ant-card-meta-title--package fs-15 fw-500">
                    {{ item.promo_name }}
                  </div>
                </div>

                <div slot="description">
                  <div
                    class="fs-24 fw-500 cr-primary text-ellipsis ml-auto mb-16"
                  >
                    {{ item.promo_point }}
                    <span class="fs-14 fw-400">POINT</span>
                  </div>

                  <a-button
                    type="primary"
                    class="b-radius b-shadow"
                    block
                    disabled
                    >Tukar</a-button
                  >
                </div>
              </a-card-meta>
            </a-card>
          </a-skeleton>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>
<script>
import Empty from "@/components/template/Empty";
const data = [];
export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "PromoHaloPoin",
  components: { Empty },
  head() {
    return {
      title: "Semua Semua Promo dan Penawaran - Haloatta"
    };
  },
  data() {
    return {
      loading: true,
      data
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  methods: {}
};
</script>
