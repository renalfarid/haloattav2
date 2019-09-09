<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information mt-8">
    <a-list-item class="ant-list-item--package-information">
      <div class="w-100">
        <div class="ant-package--images w-100 mb-24">
          <a-row :gutter="10">
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: `url(${item.gambar_maskapai != '' ? item.gambar_maskapai : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'})` }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/maskapai/c2.png)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/maskapai/c3.png)' }"
                ></div>
              </div>
            </a-col>
          </a-row>
        </div>

        <a-row :gutter="16" type="flex" justify="start">
          <a-col :span="16">
            <div
              class="fs-28 fw-600 f-default cr-black"
            >Tiket Group Umrah September Garuda Kanomas Tiket Group Umrah September Garuda Kanomas</div>
          </a-col>
          <a-col :span="8" class="text-right">
            <a-avatar
              :size="64"
              :style="{ marginRight: '0', backgroundImage: 'url(https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png)' }"
              class="brand-vendor ml-auto"
            />
          </a-col>
        </a-row>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-center w-100">
        <a-avatar size="small" class="mr-8" :src="item.logo_maskapai" />
        <div class="fs-15 fw-500 cr-black">{{item.nama_maskapai}}</div>

        <div class="fs-15 fw-500 cr-black ml-auto">{{item.kode_maskapai}}</div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-center w-100">
        <a-avatar size="small" class="mr-8" shape="square" src="/icons/package/seat.png" />
        <div class="fs-15 fw-500 cr-black">Kelas Kabin</div>
        <div class="fs-15 fw-500 cr-black text-capitalize ml-auto">{{item.class_flight}}</div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar size="small" shape="square" src="/icons/package/airplane.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black mb-16">Info Keberangkatan dan Kepulangan</div>
          <a-row :gutter="16">
            <a-col :span="12">
              <div class="fs-14 fw-500 cr-black mb-16">Keberangkatan</div>
              <a-timeline>
                <a-timeline-item color="green">
                  <div class="fs-12 fw-400 cr-gray text-uppercase">Take Off</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>{{item.bandara_asal}} ({{item.kode_bandara_asal}})</span>
                  </div>
                  <div class="fs-15 fw-500 cr-black">{{item.jam_keberangkatan}}</div>
                  <div class="fs-15 fw-400 cr-gray">
                    <span>{{moment(item.tanggal_keberangkatan, "YYYY-MM-DD").format('LL')}}</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item color="red">
                  <a-icon slot="dot" type="clock-circle-o" style="font-size: 14px;" />
                  <div class="fs-14 fw-400 cr-black">
                    <span class="mr-8">Nonstop</span>
                    <span class="fw-500">{{item.durasi_keberangkatan}}</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <div class="fs-12 fw-400 cr-gray text-uppercase">Landing</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>{{item.bandara_tujuan}} ({{item.kode_bandara_tujuan}})</span>
                  </div>
                  <div class="fs-15 fw-500 cr-black">{{item.tiba_keberangkatan}}</div>
                  <div class="fs-15 fw-400 cr-gray">
                    <span>{{moment(item.tanggal_keberangkatan, "YYYY-MM-DD").format('LL')}}</span>
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
                    <span>{{item.bandara_tujuan}} ({{item.kode_bandara_tujuan}})</span>
                  </div>
                  <div class="fs-15 fw-500 cr-black">{{item.jam_kepulangan}}</div>
                  <div class="fs-15 fw-400 cr-gray">
                    <span>{{moment(item.tanggal_kepulangan, "YYYY-MM-DD").format('LL')}}</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item color="red">
                  <a-icon slot="dot" type="clock-circle-o" style="font-size: 14px;" />
                  <div class="fs-14 fw-400 cr-black">
                    <span class="mr-8">Nonstop</span>
                    <span class="fw-500">{{item.durasi_kepulangan}}</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <div class="fs-12 fw-400 cr-gray text-uppercase">Landing</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>{{item.bandara_asal}} ({{item.kode_bandara_asal}})</span>
                  </div>
                  <div class="fs-15 fw-500 cr-black">{{item.tiba_kepulangan}}</div>
                  <div class="fs-15 fw-400 cr-gray">
                    <span>{{moment(item.tanggal_keberangkatan, "YYYY-MM-DD").format('LL')}}</span>
                  </div>
                </a-timeline-item>
              </a-timeline>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar size="small" shape="square" src="/icons/package/direction.png" />
        </div>
        <div>
          <div class="fs-15 fw-500 cr-black">Direct Flight</div>
          <div class="fs-15 fw-400 cr-gray">Penerbangan Langsung Tanpa Transit</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar size="small" shape="square" src="/icons/package/round_trip.png" />
        </div>
        <div>
          <div class="fs-15 fw-500 cr-black">Round Trip</div>
          <div class="fs-15 fw-400 cr-gray">Tiket termasuk penerbangan keberangkatan dan kepulangan</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar size="small" shape="square" src="/icons/package/charity.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Fasilitas</div>
          <div class="fs-15 fw-400 cr-gray">Informasi fasilitas penerbangan anda</div>
          <a-row :gutter="8">
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/maskapai/f1.png" slot="cover" />
                <a-card-meta title="Entertainment" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/maskapai/f2.png" slot="cover" />
                <a-card-meta title="Bagasi" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/maskapai/f3.png" slot="cover" />
                <a-card-meta title="Food & Coffee Break" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/maskapai/f4.png" slot="cover" />
                <a-card-meta title="Akses Disabilitas" />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-center w-100">
        <div>
          <div class="fs-16 fw-500 cr-black">
            Syarat & Ketentuan
            <span>Lion Air</span>
          </div>
          <div class="fs-15 fw-400 cr-gray">Berikut syarat dan Ketentuan maskapai Lion Air</div>
        </div>
        <div class="ml-auto">
          <a-button class="b-shadow b-radius b-solid cr-primary" size="large">Baca Aturan</a-button>
        </div>
      </div>
    </a-list-item>
  </a-list>
</template>
<script>
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      loading: true,
      item: []
    };
  },
  created: function() {
    // get todo items and start listening to events once component is created
    this.getdata();
  },
  methods: {
    moment,
    async getdata() {
      axios
        .post("https://api.haloatta.com/api/tiket/detail", {
          kode_produk: "TKT239610856"
        })
        .then(response => {
          this.item = response.data.data;
          this.loading = false;
        });
    }
  }
};
</script>
