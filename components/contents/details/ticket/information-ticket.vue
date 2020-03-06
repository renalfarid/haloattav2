<template>
  <section>
    <a-card class="b-shadow b-solid bordered-left mb-16 mt-32" id="informasi">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="w-100">
            <a-row :gutter="16" type="flex" justify="start">
              <a-col :span="16">
                <div class="fs-28 fw-600 f-default cr-black">{{data.nama || "Nama Belum Ada"}}</div>
              </a-col>
              <a-col :span="8">
                <div class="d-flex align-end align-items-center text-right">
                  <div>
                    <a @click="toggleWishlist" class="fs-22 cr-gray mb-0">
                      <a-icon v-if="wishlist == false" type="heart" />
                      <a-icon
                        v-else-if="wishlist == true"
                        type="heart"
                        theme="twoTone"
                        twoToneColor="#eb2f96"
                      />
                    </a>
                  </div>
                  <a-avatar
                    size="large"
                    :style="{ marginRight: '0', backgroundImage: 'url(https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png)' }"
                    class="brand-vendor ml-16"
                  />
                </div>
              </a-col>
            </a-row>
          </div>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <div class="d-flex align-items-center w-100">
            <a-avatar size="small" class="mr-8" :src="data.logo_maskapai" />
            <div class="fs-15 fw-500 cr-black">{{data.nama_maskapai}}</div>

            <div class="fs-15 fw-500 cr-black ml-auto">{{data.kode_maskapai}}</div>
          </div>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <a-row :gutter="8" class="w-100">
            <a-col :span="8">
              <div class="d-flex align-items-start">
                <a-avatar
                  style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                  class="mr-8"
                  size="small"
                  icon="check"
                />
                <div>
                  <div class="fs-15 fw-400 cr-gray f-default">Kelas Kabin</div>
                  <div class="fs-15 fw-500 cr-black text-capitalize">{{data.class_flight}}</div>
                </div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="d-flex align-items-start">
                <a-avatar
                  style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                  class="mr-8"
                  size="small"
                  icon="check"
                />
                <div>
                  <div class="fs-15 fw-400 cr-gray f-default">Tipe Penerbangan</div>
                  <div class="fs-15 fw-500 cr-black">Pulang Pergi</div>
                </div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="d-flex align-items-start">
                <a-avatar
                  style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                  class="mr-8"
                  size="small"
                  icon="check"
                />
                <div>
                  <div class="fs-15 fw-400 cr-gray f-default">Penerbangan</div>
                  <div class="fs-15 fw-500 cr-black">{{data.jenis_flight}}</div>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <div class="d-flex align-items-start w-100">
            <div>
              <a-avatar size="small" shape="square" src="/icons/package/airplane.png" />
            </div>
            <div class="w-100">
              <div class="fs-16 fw-500 cr-black mb-16">Jadwal Keberangkatan dan Kepulangan</div>
              <a-row :gutter="16">
                <a-col :span="12">
                  <div class="fs-14 fw-500 cr-black mb-16">Keberangkatan</div>
                  <a-timeline>
                    <a-timeline-item color="green">
                      <div class="fs-12 fw-400 cr-gray text-uppercase">Take Off</div>
                      <div class="fs-14 fw-500 cr-black text-uppercase">
                        <span>{{data.bandara_asal}} ({{data.kode_bandara_asal}})</span>
                      </div>
                      <div class="fs-15 fw-500 cr-black">{{data.jam_keberangkatan}}</div>
                      <div class="fs-15 fw-400 cr-gray">
                        <span>{{moment(data.tanggal_keberangkatan, "YYYY-MM-DD").format('LL')}}</span>
                      </div>
                    </a-timeline-item>
                    <a-timeline-item color="red">
                      <a-icon slot="dot" type="clock-circle-o" style="font-size: 14px;" />
                      <div class="fs-14 fw-400 cr-black">
                        <span class="mr-8">Nonstop</span>
                        <span class="fw-500">{{data.durasi_keberangkatan}}</span>
                      </div>
                    </a-timeline-item>
                    <a-timeline-item>
                      <div class="fs-12 fw-400 cr-gray text-uppercase">Landing</div>
                      <div class="fs-14 fw-500 cr-black text-uppercase">
                        <span>{{data.bandara_tujuan}} ({{data.kode_bandara_tujuan}})</span>
                      </div>
                      <div class="fs-15 fw-500 cr-black">{{data.tiba_keberangkatan}}</div>
                      <div class="fs-15 fw-400 cr-gray">
                        <span>{{moment(data.tanggal_keberangkatan, "YYYY-MM-DD").format('LL')}}</span>
                      </div>
                    </a-timeline-item>
                  </a-timeline>
                </a-col>

                <a-col :span="12">
                  <div class="fs-14 fw-500 cr-black mb-16">Kepulangan</div>
                  <a-timeline>
                    <a-timeline-item color="green">
                      <div class="fs-12 fw-400 cr-gray text-uppercase">Take Off</div>
                      <div class="fs-14 fw-500 cr-black text-uppercase">
                        <span>{{data.bandara_tujuan}} ({{data.kode_bandara_tujuan}})</span>
                      </div>
                      <div class="fs-15 fw-500 cr-black">{{data.jam_kepulangan}}</div>
                      <div class="fs-15 fw-400 cr-gray">
                        <span>{{moment(data.tanggal_kepulangan, "YYYY-MM-DD").format('LL')}}</span>
                      </div>
                    </a-timeline-item>
                    <a-timeline-item color="red">
                      <a-icon slot="dot" type="clock-circle-o" style="font-size: 14px;" />
                      <div class="fs-14 fw-400 cr-black">
                        <span class="mr-8">Nonstop</span>
                        <span class="fw-500">{{data.durasi_kepulangan}}</span>
                      </div>
                    </a-timeline-item>
                    <a-timeline-item>
                      <div class="fs-12 fw-400 cr-gray text-uppercase">Landing</div>
                      <div class="fs-14 fw-500 cr-black text-uppercase">
                        <span>{{data.bandara_asal}} ({{data.kode_bandara_asal}})</span>
                      </div>
                      <div class="fs-15 fw-500 cr-black">{{data.tiba_kepulangan}}</div>
                      <div class="fs-15 fw-400 cr-gray">
                        <span>{{moment(data.tanggal_keberangkatan, "YYYY-MM-DD").format('LL')}}</span>
                      </div>
                    </a-timeline-item>
                  </a-timeline>
                </a-col>
              </a-row>
            </div>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <!-- Fasilitas -->
    <a-card
      class="b-shadow bordered-left b-solid ant-list-item--package-information mb-16"
      id="fasilitas"
    >
      <div class="fs-16 fw-500 cr-black">Fasilitas Termasuk</div>
      <div class="fs-15 fw-400 cr-gray mb-24">Informasi fasilitas penerbangan anda</div>
      <a-row :gutter="8">
        <a-col :span="6" v-for="(getFasilitas,i) in fasilitas" :key="i">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">{{getFasilitas}}</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-card>

    <!-- Comments -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="ulasan">
      <comments-ticket :review="review" />
    </a-card>

    <!-- Vendor -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="vendor">
      <vendor-ticket :vendor="vendor" />
    </a-card>

    <!-- Policy -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="policy">
      <policy />
    </a-card>

    <!-- Faq -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="faq">
      <faq />
    </a-card>
  </section>
</template>
<script>
import commentsTicket from "~/components/contents/details/ticket/comments.vue";
import vendorTicket from "~/components/contents/details/ticket/vendor.vue";
import policy from "~/components/contents/details/ticket/policy.vue";
import faq from "~/components/contents/details/ticket/faq.vue";
import moment from "moment";
import axios from "axios";
export default {
  props: ["data", "vendor", "review", "fasilitas"],
  data() {
    return {
      wishlist: false,
      loading: true,
      item: []
    };
  },
  methods: {
    moment,
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    }
  },
  components: {
    commentsTicket,
    vendorTicket,
    policy,
    faq
  }
};
</script>
