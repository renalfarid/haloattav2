<template>
  <div class="ant-layout--package-details" :style="{'background-color':'#f7f7f7'}">
    <div class="ant-layout--results-space-small"></div>
    <a-affix :offsetTop="0" @change="change">
      <div class="ant-layout--package-tabs">
        <div class="container">
          <div class="ant-tabs--item">
            <a
              class="ant-tabs--item-link"
              v-on:click="activetab = 1"
              v-bind:class="[activetab === 1 ? 'active' : '']"
              >Tiket</a
            >
            <a
              class="ant-tabs--item-link"
              v-on:click="activetab = 2"
              v-bind:class="[activetab === 2 ? 'active' : '']"
              >LA Akomodasi</a
            >
            <a
              class="ant-tabs--item-link"
              v-on:click="activetab = 3"
              v-bind:class="[activetab === 3 ? 'active' : '']"
              >Kelengkapan</a
            >
            <a
              class="ant-tabs--item-link"
              v-on:click="activetab = 4"
              v-bind:class="[activetab === 4 ? 'active' : '']"
              >Itinerary</a
            >
          </div>
        </div>
      </div>
    </a-affix>

    <div class="container">
      <a-row :gutter="24">
        <a-col :xs="24" :sm="24" :md="16" :lg="16">
          <a-card class="b-solid bordered-left mt-16">
            <a-list
              itemLayout="horizontal"
              class="ant-list--package-information"
            >
              <a-list-item class="ant-list-item--package-information pt-0 pb-0">
                <div class="w-100">
                  <a-row :gutter="16" type="flex" justify="start">
                    <a-col :span="16">
                      <div class="fs-28 fw-600 f-default cr-black">
                        {{ nama }}
                      </div>
                    </a-col>
                    <a-col :span="8">
                      <div
                        class="d-flex align-end align-items-center text-right"
                      >
                        <div>
                          <a @click="toggleWishlist" class="fs-24 cr-gray mb-0">
                            <a-icon v-if="wishlist == false" type="heart" />
                            <a-icon
                              v-else-if="wishlist == true"
                              type="heart"
                              theme="filled"
                              style="color:#eb2f96"
                            />
                          </a>
                        </div>
                        <a-avatar
                          size="large"
                          :style="{
                            marginRight: '0',
                            backgroundImage: `url(${foto_vendor})`
                          }"
                          class="brand-vendor ml-16"
                        />
                      </div>
                    </a-col>
                  </a-row>
                  <div class="ant-package--rate mt-8 mb-0">
                    <a-rate
                      class="fs-18 mb-0"
                      :defaultValue="bintang"
                      disabled
                    />
                  </div>
                </div>
              </a-list-item>
            </a-list>
          </a-card>

          <div class="ant-tabs--content">
            <div v-if="activetab === 1" class="ant-tabs--content-body">
              <informationTicket :data="datatiket" :foto="foto_maskapai" />
            </div>
            <div v-if="activetab === 2" class="ant-tabs--content-body">
              <informationAccommodation :data="dataLA" />
            </div>
            <div v-if="activetab === 3" class="ant-tabs--content-body">
              <informationEquipment :data="kelengkapan" />
            </div>
            <div v-if="activetab === 4" class="ant-tabs--content-body">
              <informationItinerary :data="itinerary" />
            </div>
          </div>
        </a-col>

        <a-col :xs="24" :sm="24" :md="8" :lg="8" :style="{ margin: '16px 0' }">
          <div class="ant-layout--right">
            <div class="ant-affix--container">
              <informationSideRight :harga="harga" :umroh="umroh" />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import informationTicket from '~/components/contents/details/umrah/information-ticket.vue';
import informationAccommodation from '~/components/contents/details/umrah/information-accommodation.vue';
import informationEquipment from '~/components/contents/details/umrah/information-equipment.vue';
import informationItinerary from '~/components/contents/details/umrah/information-itinerary.vue';
import informationSideRight from '~/components/contents/details/umrah/information-sideright.vue';
import axios from 'axios';
const Cookie = process.client ? require('js-cookie') : undefined;
export default {
  name: 'detailPackage',
  head() {
    return {
      title:
        'Umrah Exclusive 2019 - Booking Paket Umrah & Komponen Umrah Lainnya'
    };
  },
  data() {
    return {
      activetab: 1,
      wishlist: false,
      nama: '',
      bintang: 1,
      foto_vendor: '',
      datatiket: 'default',
      dataLA: 'default',
      harga: '',
      umroh: {},
      kelengkapan: [],
      itinerary: [],
      foto_maskapai: ''
    };
  },
  async asyncData({ query, store }) {
    const myRespone = await axios.post(
      process.env.baseUrl + 'paket/umroh/detail',
      {
        kode_produk: query.kode_produk
      }
    );

    let data = await myRespone.data.data;

    return {
      loading: false,
      busy: false,
      datatiket: data.tiket ? data.tiket : null,
      foto_maskapai: data.foto_maskapai,
      dataLA: {
        fasilitas: data.la ? data.la.fasilitas_termasuk : null,
        hotel_mekkah: data.hotel_mekkah,
        hotel_madinah: data.hotel_madinah
      },
      nama: data.umroh.nama,
      bintang: data.umroh.kelas_bintang,
      foto_vendor: data.umroh.foto,

      //props right side
      harga: data.harga,
      umroh: {
        berangkat: data.umroh.tgl_berangkat,
        program_hari: data.umroh.jumlah_hari
      },
      kelengkapan: data.kelengkapan,
      itinerary: data.itenary
    };
  },

  methods: {
    change(affixed) {
      // console.log(affixed);
    },
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    },
    async getdetail() {
      let params = this.$route.query;

      axios
        .post(process.env.baseUrl + 'paket/umroh/detail', {
          kode_produk: params.kode_produk
        })
        .then(response => {
          // console.log(response);
          this.datatiket = response.data.data.tiket;
          this.dataLA = response.data.data.la;
          this.nama = response.data.data.umroh.nama;
          this.bintang = response.data.data.umroh.kelas_bintang;
          this.foto_vendor = response.data.data.umroh.foto_vendor;

          //props right side
          this.harga = response.data.data.harga;
          this.umroh = {
            berangkat: response.data.data.umroh.tgl_berangkat,
            program_hari: response.data.data.umroh.jumlah_hari
          };

          this.$store.commit('umroh/setUmroh', response.data.data); // mutating to store for client rendering
          Cookie.set('umroh', response.data.data); // saving token in cookie for server rendering
        })
        .catch(err => {
          console.log('error', err);
        });
    }
  },

  components: {
    informationTicket,
    informationAccommodation,
    informationEquipment,
    informationItinerary,
    informationSideRight
  }
};
</script>
