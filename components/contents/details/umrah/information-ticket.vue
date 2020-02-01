<template>
  <div v-if="data != null">
    <a-card class="b-shadow b-solid mb-16">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="ant-package--images w-100" style="z-index: inherit">
            <a-row :gutter="10">
              <a-col :span="8" v-for="n in 3" :key="n">
                <div class="ant-package--images-small">
                  <expandable-image :src="data.gambar_maskapai" />
                </div>
              </a-col>
              <!-- <a-col :span="8">
                <div class="ant-package--images-small">
                  <expandable-image src="/maskapai/garuda/t7.jpg" />
                </div>
              </a-col>
              <a-col :span="8">
                <div class="ant-package--images-small">
                  <expandable-image src="/maskapai/garuda/t8.jpg" />
                </div>
              </a-col>-->
            </a-row>
          </div>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <div class="d-flex align-items-center w-100">
            <a-avatar size="large" class="mr-8" :src="data.logo_maskapai" />
            <div class="fs-16 fw-500 cr-black">{{data.nama_maskapai}}</div>

            <div class="fs-16 fw-500 cr-black ml-auto">{{data.kode_maskapai}}</div>
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
                  <div class="fs-15 fw-500 cr-black">Direct/Penerbangan Langsung</div>
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
                        <span>{{moment(data.tanggal_kepulangan, "YYYY-MM-DD").format('LL')}}</span>
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
    <a-card class="b-shadow bordered-left b-solid ant-list-item--package-information mb-16">
      <div class="fs-16 fw-500 cr-black">Fasilitas Termasuk (api blm ada)</div>
      <div class="fs-15 fw-400 cr-gray mb-24">Informasi fasilitas penerbangan anda</div>
      <a-row :gutter="8">
        <a-col :span="6">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Bagasi 25 Kg</div>
            </div>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Makan & Coffe Break</div>
            </div>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Entertaiment</div>
            </div>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Akses Disabilitas</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["data"],
  created() {
    this.getdetail();
  },
  methods: {
    moment,
    async getdetail() {
      // console.log(this.$store.state.umroh);
    }
  },
  mounted: function() {
    // console.log("The props are also available in JS:", this.$store.state.umroh);
  }
};
</script>
