<template>
  <div class="ant-product--wishlist">
    <div class="fs-18 fw-500 cr-black">Daftar Simpan</div>
    <div
      class="fs-16 fw-400 cr-gray"
    >Setiap ide layak disimpan! Kami bisa membantu Anda mengingat item yang Anda suka.</div>

    <a-card :bordered="false" class="ant-card--filter b-solid b-radius b-shadow mt-16 mb-24">
      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
        <a-col :span="4" class="text-uppercase cr-gray fs-14">Filter Produk</a-col>
        <a-col :span="7">
          <a-select showSearch defaultValue="Semua Produk" size="large" style="width: 100%">
            <a-select-option value="Semua Produk">Semua Produk</a-select-option>
            <a-select-option value="Umrah">Umrah</a-select-option>
            <a-select-option value="Tiket Group">Tiket Group</a-select-option>
            <a-select-option value="LA Akomodasi">LA Akomodasi</a-select-option>
            <a-select-option value="Visa">Visa</a-select-option>
            <a-select-option value="Asuransi">Asuransi</a-select-option>
            <a-select-option value="Handling">Handling</a-select-option>
            <a-select-option value="Manasik">Manasik</a-select-option>
            <a-select-option value="Perlengkapan">Perlengkapan</a-select-option>
            <a-select-option value="Tour Leader">Tour Leader</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="13"></a-col>
      </a-row>
    </a-card>

    <a-list :grid="{ gutter: 16, column: 3}" :dataSource="lisData" :loading="loading">
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        <a-card class="ant-card-package">
          <nuxt-link
            :to="'/catalog/umrah/detail-package?kode_produk='+item.kode_produk"
            class="ant-list-item--link"
            v-if="item.kategori == 'UMRAH REGULER'"
          ></nuxt-link>

          <nuxt-link
            :to="'/catalog/ticket-group/detail-ticket?kode_produk='+item.kode_produk"
            class="ant-list-item--link"
            v-if="item.kategori == 'Tiket Pesawat'"
          ></nuxt-link>

          <nuxt-link
            :to="'/catalog/visa/detail?kode_produk='+item.kode_produk"
            class="ant-list-item--link"
            v-if="item.kategori == 'Visa'"
          ></nuxt-link>

          <nuxt-link
            :to="'/catalog/accommodation/detail?kode_produk='+item.kode_produk"
            class="ant-list-item--link"
            v-if="item.kategori == 'Land Arrangement'"
          ></nuxt-link>

          <nuxt-link
            :to="'/catalog/handling/detail?kode_produk='+item.kode_produk"
            class="ant-list-item--link"
            v-if="item.kategori == 'Handling Domestik'"
          ></nuxt-link>

          <nuxt-link
            :to="'/catalog/insurance/detail?kode_produk='+item.kode_produk"
            class="ant-list-item--link"
            v-if="item.kategori == 'Asuransi'"
          ></nuxt-link>

          <nuxt-link
            :to="'/catalog/manasik/detail?kode_produk='+item.kode_produk"
            class="ant-list-item--link"
            v-if="item.kategori == 'Manasik'"
          ></nuxt-link>

          <nuxt-link
            :to="'/catalog/equipment/detail?kode_produk='+item.kode_produk"
            class="ant-list-item--link"
            v-if="item.kategori == 'Perlengkapan'"
          ></nuxt-link>

          <div slot="cover">
            <div class="ant-card-cover--images" v-lazy:background-image="item.gambar">
              <div class="ant-card-cover--overlay">
                <div class="ant-card-cover--overlay-box-radius"></div>
                <div class="ant-card-cover--overlay-text">
                  <div class="ant-card-cover--overlay-text-title fs-15">No Api</div>
                  <div class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase">pax -</div>
                </div>
              </div>

              <div class="ant-card-wishlist">
                <a-icon class="fs-22" type="heart" theme="twoTone" twoToneColor="#eb2f96" />
              </div>

              <div class="ant-card--overlay-block" v-if="item.status === 'available'">
                <div class="d-flex align-items-center h-100">
                  <a-button>
                    <nuxt-link to="/catalog/umrah/detail-package">Lihat detail</nuxt-link>
                  </a-button>
                </div>
              </div>

              <div class="ant-card--overlay-block" v-if="item.status === 'Y'">
                <div class="d-flex align-items-center h-100">
                  <a-button @click="showDeleteConfirm(item.kode_produk)">Hapus</a-button>
                </div>
              </div>
            </div>
          </div>
          <a-card-meta>
            <div slot="title">
              <div class="ant-card-meta-title--top d-flex align-items-center">
                <div class="ant-card-meta-title--top-left f-default d-flex align-items-center">
                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-15 fw-500 cr-black">{{item.nama_vendor}}</div>
                      <div class="fs-14 fw-400 cr-gray f-default">
                        <a-icon type="safety-certificate" theme="filled" class="cr-green mr-4" />Terverifikasi
                      </div>
                    </template>
                    <a-avatar
                      class="vendor-logo zIndex mr-8"
                      v-lazy:background-image="item.foto_vendor"
                    />
                  </a-popover>

                  <!-- <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-13 fw-400 cr-black f-default">Maskapai Lion Air</div>
                    </template>
                    <a-avatar
                      class="zIndex mr-8"
                      src="http://indocargotimes.com/uploads/berita/Lion-Air-Group.jpg"
                    />
                  </a-popover>-->
                </div>
                <div class="ant-card-meta-title--top-right ml-auto">
                  <!-- <a-rate class="fs-14 mb-4" :defaultValue="3" disabled /> -->
                </div>
              </div>
              <div class="ant-card-meta-title--package text-capitalize fw-500">{{item.nama}}</div>
            </div>

            <div slot="description">
              <div class="ant-card-meta-description--bottom d-flex align-items-center">
                <div class="ant-card-meta-description--bottom-right d-flex">
                  <!-- <div class="fs-14 fw-400 cr-black">Program 9 Hari</div> -->
                </div>
                <div
                  class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                >{{item.harga | currency}}</div>
              </div>
              <div class="ant-status-wishlist mt-8">
                <span v-if="item.is_expired === 'N'">
                  <a-tag color="green">Available</a-tag>
                </span>
                <span v-if="item.is_expired === 'Y'">
                  <a-tag color="red">Kedaluwarsa</a-tag>
                </span>
              </div>
            </div>
          </a-card-meta>
          <!-- <div class="package-description--more p-16">
            <div class="mb-8">
              <div>
                <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
                  <span>Informasi Hotel</span>
                </div>
                <div class="fs-14 fw-400 cr-gray f-default text-capitalize text-ellipsis">
                  <span>Makkah : Rayyana Ajyad</span>
                </div>
                <div class="fs-14 fw-400 cr-gray f-default text-capitalize text-ellipsis">
                  <span>Madinah : Pinwood Hotel</span>
                </div>
              </div>
            </div>

            <div class="mb-8">
              <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
                <span>Kota Keberangkatan</span>
              </div>
              <div class="fs-15 fw-400 cr-gray f-default text-ellipsis">
                <span>Makassar</span>
              </div>
            </div>

            <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
              <span>Tanggal Keberangkatan</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="fs-14 fw-400 text-ellipsis">
                <div class="cr-gray">Keberangkatan</div>
                <div class="cr-gray">{{moment("2019-12-10", "YYYY-MM-DD").format('ll')}}</div>
              </div>
              <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                <div class="cr-gray">Kedatangan</div>
                <div class="cr-gray">{{moment("2019-12-20", "YYYY-MM-DD").format('ll')}}</div>
              </div>
            </div>
          </div>-->
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
const cookieparser = require("cookieparser");
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "wishlist",
  head() {
    return {
      title: "Daftar Simpan - Haloatta"
    };
  },

  data() {
    return {
      loading: true,
      lisData: [],
      category: ""
    };
  },
  // async asyncData({ req }) {
  //   const parsed = await cookieparser.parse(req.headers.cookie);
  //   await console.log("coba");
  //   // const token = Cookie.get("auth");
  //   const myRespone = await axios.get(process.env.baseUrl + "produk/favorite", {
  //     params: {
  //       per_page: "8"
  //     },
  //     headers: {
  //       Authorization: "Bearer " + parsed.auth
  //     }
  //   });

  //   return {
  //     lisData: myRespone.data.data.data,
  //     loading: false
  //   };
  // },
  mounted() {
    this.getData();
  },

  methods: {
    moment,
    getData() {
      // const parsed = cookieparser.parse(req.headers.cookie);
      const token = Cookie.get("auth");
      axios
        .get(process.env.baseUrl + "produk/favorite", {
          params: {
            per_page: "8"
          },
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          (this.lisData = response.data.data.data), (this.loading = false);
        })
        .catch(() => {
          this.$message.error("Salah");
        });
    },

    showDeleteConfirm(id) {
      this.$confirm({
        title: "Hapus Item",
        content: "Hapus dari Daftar Simpan?",
        okText: "Ya, Hapus",
        okType: "primary",
        cancelText: "Tidak, Simpan Item Ini",
        onOk: () => {
          // this.loading = true;
          this.submitDeleteItem(id);
        },
        onCancel() {
          console.log("Cancel" + id);
        }
      });
    },

    submitDeleteItem(id) {
      const token = Cookie.get("auth");
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };

      let data = {
        kode_produk: id
      };

      axios
        .post(process.env.baseUrl + "produk/remove-favorite", data, config)
        .then(response => {
          if (response.data.status == 200) {
            // this.loading = false;
            setTimeout(function() {
              location.reload(true);
            }, 1500);
            this.$message.success(response.data.msg);
          } else {
            this.$message.error(response.data.msg);
          }
        })
        .catch(() => {
          this.$message.error("Salah");
        });
    }
  }
};
</script>