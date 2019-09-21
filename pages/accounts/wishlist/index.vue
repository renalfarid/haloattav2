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

    <a-list :grid="{ gutter: 16, column: 3}" :dataSource="lisData">
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        <a-card class="ant-card-package">
          <nuxt-link to="/catalog/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
          <div slot="cover">
            <div class="ant-card-cover--images" v-lazy:background-image="item.images_product">
              <div class="ant-card-cover--overlay">
                <div class="ant-card-cover--overlay-box-radius"></div>
                <div class="ant-card-cover--overlay-text">
                  <div class="ant-card-cover--overlay-text-title fs-15">40</div>
                  <div class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase">pax</div>
                </div>
              </div>

              <div class="ant-card-wishlist">
                <a-icon class="fs-22" type="heart" theme="twoTone" twoToneColor="#eb2f96"/>
              </div>

              <div class="ant-card--overlay-block" v-if="item.status === 'available'">
                <div class="d-flex align-items-center h-100">
                  <a-button>
                    <nuxt-link to="/catalog/umrah/detail-package">Lihat detail</nuxt-link>
                  </a-button>
                </div>
              </div>

              <div class="ant-card--overlay-block" v-if="item.status === 'kedaluwarsa'">
                <div class="d-flex align-items-center h-100">
                  <a-button @click="showDeleteConfirm">Hapus</a-button>
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
                      <div class="fs-15 fw-500 cr-black">ATTA</div>
                      <div class="fs-14 fw-400 cr-gray f-default">
                        <a-icon type="safety-certificate" theme="filled" class="cr-green mr-4"/>Terverifikasi
                      </div>
                    </template>
                    <a-avatar
                      class="vendor-logo zIndex mr-8"
                      v-lazy:background-image="item.avatar_umaroh"
                    />
                  </a-popover>

                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-13 fw-400 cr-black f-default">Maskapai Lion Air</div>
                    </template>
                    <a-avatar
                      class="zIndex mr-8"
                      src="http://indocargotimes.com/uploads/berita/Lion-Air-Group.jpg"
                    />
                  </a-popover>
                </div>
                <div class="ant-card-meta-title--top-right ml-auto">
                  <a-rate class="fs-14 mb-4" :defaultValue="3" disabled/>
                </div>
              </div>
              <div
                class="ant-card-meta-title--package text-capitalize fw-500"
              >Umrah Exclusive November 2019 Keberangkatan Jakarta</div>
            </div>

            <div slot="description">
              <div class="ant-card-meta-description--bottom d-flex align-items-center">
                <div class="ant-card-meta-description--bottom-right d-flex">
                  <div class="fs-14 fw-400 cr-black">Program 9 Hari</div>
                </div>
                <div
                  class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                >{{20000000 | currency}}</div>
              </div>
              <div class="ant-status-wishlist mt-8">
                <span v-if="item.status === 'available'">
                  <a-tag color="green">Available</a-tag>
                </span>
                <span v-if="item.status === 'kedaluwarsa'">
                  <a-tag color="red">Kedaluwarsa</a-tag>
                </span>
              </div>
            </div>
          </a-card-meta>
          <div class="package-description--more p-16">
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
          </div>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
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
      lisData: [
        {
          id: 1,
          name_product: "Umrah Exclusive November 2019 Keberangkatan Jakarta",
          images_product: "/umrah/package/u1.png",
          avatar_umaroh:
            "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png",
          status: "available"
        },
        {
          id: 2,
          name_product: "Umrah Exclusive November 2020 Keberangkatan Jakarta",
          images_product: "/umrah/package/u2.png",
          avatar_umaroh:
            "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png",
          status: "kedaluwarsa"
        }
      ]
    };
  },

  methods: {
    moment,
    showDeleteConfirm() {
      this.$confirm({
        title: "Hapus Item",
        content:
          "Item ini sudah tidak lagi tersedia. Hapus dari Daftar Simpan?",
        okText: "Ya, Hapus",
        okType: "primary",
        cancelText: "Tidak, Simpan Item Ini",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    }
  }
};
</script>