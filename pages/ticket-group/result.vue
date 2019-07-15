<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <search-ticket-result />

          <filter-ticket-result />
        </div>

        <div class="ant-layout--results-list">
          <div class="ant-layout--results-list-label">Hasil Pencarian Tiket Group</div>
          <a-list :grid="{ gutter: 16, column: 3 }" :pagination="pagination" :dataSource="listData">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-skeleton :loading="loading" active>
                <nuxt-link to="/ticket-group/detail-ticket" class="d-block">
                  <a-card class="ant-card--package-ticket">
                    <div slot="cover">
                      <div
                        class="ant-card-cover--images"
                        :style="{ backgroundImage: `url(${item.images_package})` }"
                      >
                        <div class="ant-card-cover--overlay">
                          <div class="ant-card-cover--overlay-box-radius"></div>
                          <div class="ant-card-cover--overlay-text">
                            <div class="ant-card-cover--overlay-text-title">sisa</div>
                            <div class="ant-card-cover--overlay-text-subtitle">
                              <span>40</span> pax
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex align-items-center">
                      <div class="mr-8">
                        <a-avatar
                          :src="item.logo_maskapai"
                          :value="item.logo_maskapai"
                          size="small"
                        />
                      </div>
                      <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">{{item.maskapai}}</div>
                      <div
                        class="ml-auto fs-13 fw-400 cr-gray f-default text-ellipsis"
                      >{{item.class_cabin}}</div>
                    </div>

                    <a-row
                      :gutter="8"
                      type="flex"
                      justify="space-between"
                      align="middle"
                      class="mt-8 mb-8"
                    >
                      <a-col :span="8" class="text-left">
                        <div class="fs-30 fw-500 cr-black text-uppercase f-default">upg</div>
                        <div class="fs-14 fw-400 cr-black text-uppercase f-default">09:00 am</div>
                      </a-col>
                      <a-col :span="8" class="text-center">
                        <div class="fs-13 fw-400 cr-gray text-capitalize f-default mb-8">Nonstop</div>
                        <div class="fs-13 fw-400 cr-gray text-capitalize f-default">6h45m</div>
                      </a-col>
                      <a-col :span="8" class="text-right">
                        <div class="fs-30 fw-500 cr-black text-uppercase f-default">jed</div>
                        <div class="fs-14 fw-400 cr-black text-uppercase f-default">15:00 pm</div>
                      </a-col>
                    </a-row>

                    <div class="d-flex align-items-center">
                      <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">Round Trip</div>
                      <div class="ml-auto fs-16 fw-500 cr-primary f-default text-ellipsis">
                        RP {{item.price}}
                        <span class="fs-13 fw-400 cr-gray">/pax</span>
                      </div>
                    </div>
                  </a-card>
                </nuxt-link>
              </a-skeleton>
            </a-list-item>
          </a-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchTicketResult from "~/components/contents/lib/search/ticket-result.vue";
import filterTicketResult from "~/components/contents/lib/filter/ticket.vue";
const listData = [
  {
    key: 1,
    images_package:
      "https://reliji.com/wp-content/uploads/2018/06/banner-fleet-4-new.jpg",
    maskapai: "Garuda Indonesia",
    logo_maskapai:
      "https://3.bp.blogspot.com/-ORvEVdtnqsc/WebEppFoJlI/AAAAAAAAELQ/OzXH9meIbXIOSlJCtdYNhb2SDUhYEd8AgCLcBGAs/s400/garuda%2Bindonesia%2Bpng.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 2,
    images_package:
      "http://www.damniloveindonesia.com/image/catalog/explore_indonesia/Artikel/News_Event/maskapai_murah/cnn_travel.jpg",
    maskapai: "Lion Air",
    logo_maskapai:
      "https://www.goto-hotel.com/wp-content/uploads/lion-parcel-logo.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 3,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 4,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 5,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 6,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 7,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 8,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  }
];
export default {
  name: "ticketResult",
  head() {
    return {
      title:
        "Hasil Pencarian Tiket Group - Pesan Paket Umrah & Komponen Umrah Lainnya"
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
        showTotal: total => `Total ${total} Tiket Group`,
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
    searchTicketResult,
    filterTicketResult
  }
};
</script>
