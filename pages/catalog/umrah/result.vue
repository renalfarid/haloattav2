<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{ marginBottom: '20px' }">
          <search-result-umrah />

          <filter-result-umrah />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">
            Hasil Pencarian Paket Umrah
          </div>
          <div>
            <a-list
              :grid="{ gutter: 16, column: 3 }"
              :dataSource="this.$store.state.catalog.umroh"
              :loading="loading"
            >
              <a-list-item
                slot="renderItem"
                slot-scope="item, index"
                :key="index"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <a-card class="ant-card-package">
                  <nuxt-link
                    :to="
                      '/catalog/umrah/detail-package?kode_produk=' +
                        item.kode_produk
                    "
                    class="ant-list-item--link"
                  ></nuxt-link>
                  <div slot="cover">
                    <div
                      class="ant-card-cover--images"
                      v-lazy:background-image="item.gambar"
                    >
                      <div class="ant-card-cover--overlay">
                        <div class="ant-card-cover--overlay-box-radius"></div>
                        <div class="ant-card-cover--overlay-text">
                          <div
                            class="ant-card-cover--overlay-text-title fs-15 fw-500"
                          >
                            {{ item.sisa_seat }}
                          </div>
                          <div
                            class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase"
                          >
                            pax
                          </div>
                        </div>

                        <div class="ant-card-wishlist">
                          <a @click="toggleWishlist" class="fs-24 cr-gray mb-0">
                            <a-icon
                              v-if="wishlist == false"
                              theme="twoTone"
                              twoToneColor="#eb2f96"
                              type="heart"
                            />
                            <a-icon
                              v-else-if="wishlist == true"
                              type="heart"
                              theme="filled"
                              style="color:#eb2f96"
                            />
                          </a>
                        </div>
                      </div>

                      <div class="ant-card--overlay-block">
                        <div class="ant-card--overlay-block-body">
                          <div
                            class="fs-13 fw-400 cr-black f-default text-capitalize text-ellipsis mb-4"
                          >
                            <i class="icon-accommodation-xs mr-4"></i>
                            <span>Hotel {{ item.hotel_mekkah }} - Makkah</span>
                          </div>
                          <div
                            class="fs-13 fw-400 cr-black f-default text-capitalize text-ellipsis mb-4"
                          >
                            <i class="icon-accommodation-xs mr-4"></i>
                            <span
                              >Hotel {{ item.hotel_madinah }} - Madinah</span
                            >
                          </div>
                          <div
                            class="fs-13 fw-400 cr-black f-default text-capitalize text-ellipsis"
                          >
                            <a-icon type="calendar" class="mr-4" />
                            Berangkat
                            {{
                              moment(item.tgl_berangkat, 'YYYY-MM-DD').format(
                                'll'
                              )
                            }}
                            -
                            {{
                              moment(item.tgl_berangkat, 'YYYY-MM-DD').format(
                                'll'
                              )
                            }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a-card-meta>
                    <div slot="title">
                      <div
                        class="ant-card-meta-title--top d-flex align-items-center"
                      >
                        <div
                          class="ant-card-meta-title--top-left f-default d-flex align-items-center"
                        >
                          <a-popover trigger="hover">
                            <template slot="content">
                              <div class="fs-15 fw-500 cr-black">
                                {{ item.name_umaroh }}
                              </div>
                              <div class="fs-14 fw-400 cr-gray f-default">
                                <a-icon
                                  type="safety-certificate"
                                  theme="filled"
                                  class="cr-green mr-4"
                                />Terverifikasi
                              </div>
                            </template>
                            <a-avatar
                              class="vendor-logo zIndex mr-8"
                              v-lazy:background-image="item.avatar_umaroh"
                            />
                          </a-popover>

                          <a-popover trigger="hover">
                            <template slot="content">
                              <div class="fs-13 fw-400 cr-black f-default">
                                {{ item.nama_maskapai }}
                              </div>
                            </template>
                            <a-avatar class="zIndex mr-8" :src="item.image" />
                          </a-popover>
                        </div>
                        <div class="ant-card-meta-title--top-right ml-auto">
                          <a-rate
                            class="fs-14 mb-4"
                            :defaultValue="item.kelas_bintang"
                            disabled
                          />
                        </div>
                      </div>
                      <div class="ant-card-meta-title--package fw-500">
                        {{ item.nama }}
                      </div>
                    </div>

                    <div slot="description">
                      <div
                        class="fs-14 fw-400 cr-gray f-default text-ellipsis mt-8"
                      >
                        <a-icon type="environment" class="mr-4" />
                        <span>Kota {{ item.nama_kota }}</span>
                      </div>

                      <div
                        class="ant-card-meta-description--bottom d-flex align-items-center"
                      >
                        <div
                          class="ant-card-meta-description--bottom-right d-flex"
                        >
                          <div class="fs-14 fw-400 cr-black">
                            Program {{ item.jumlah_hari }} Hari
                          </div>
                        </div>
                        <div
                          class="ant-card-meta-description--bottom-left cr-primary ml-auto"
                        >
                          {{ item.harga_jual | currency }}
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
    </div>
  </div>
</template>
<script>
import searchResultUmrah from '~/components/contents/lib/search/result/umrah.vue';
import filterResultUmrah from '~/components/contents/lib/filter/result/umrah.vue';
import moment from 'moment';
import axios from 'axios';
export default {
  name: 'umrahResults',
  head() {
    return {
      title:
        'Hasil Pencarian Paket Umrah - Booking Paket Umrah & Komponen Umrah Lainnya'
    };
  },
  data() {
    return {
      wishlist: false,
      loading: true,
      busy: false,
      limit: 6,
      data: []
    };
  },
  async asyncData({ query, store }) {
    let data = [];
    data['kota_asal'] = query.kota_asal == 'all' ? '' : query.kota_asal;
    data['bulan_keberangkatan'] =
      query.bulan_keberangkatan == 'all' ? '' : query.bulan_keberangkatan;
    data['program'] = query.program == 'all' ? '' : query.program;
    data['hotel_bintang'] =
      query.hotel_bintang == 'all' ? '' : query.hotel_bintang;

    const myRespone = await axios.get(process.env.baseUrl + 'paket/umroh/all', {
      params: {
        kota_asal: data['kota_asal'],
        bulan_keberangkatan: data['bulan_keberangkatan'],
        program_hari: data['program'],
        hotel_bintang: data['hotel_bintang']
      }
    });

    store.commit('catalog/setUmroh', myRespone.data.data.data);
    // console.log(myRespone.data.data.data, 'test anu');

    return {
      loading: false,
      busy: false
    };
  },

  methods: {
    moment,
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    }
  },
  components: {
    searchResultUmrah,
    filterResultUmrah
  }
};
</script>
