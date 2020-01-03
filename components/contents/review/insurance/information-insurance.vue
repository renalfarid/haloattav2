<template>
  <section>
    <a-card class="b-shadow b-solid bordered-left mt-24 mb-16" id="informasi">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="w-100">
            <a-row :gutter="16" type="flex" justify="start">
              <a-col :span="16">
                <div class="fs-28 fw-600 f-default cr-black">
                  <span>{{data.nama}}</span>
                </div>
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
          <div class="w-100">
            <a-row :gutter="16">
              <a-col :span="8" class="mb-16">
                <div class="d-flex align-items-start">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                    class="mr-8"
                    size="small"
                    icon="check"
                  />
                  <div>
                    <div class="fs-15 fw-400 cr-gray f-default">Jenis Asuransi</div>
                    <div class="fs-15 fw-500 cr-black text-capitalize">{{data.jenis_asuransi}}</div>
                  </div>
                </div>
              </a-col>

              <a-col :span="8" class="mb-16">
                <div class="d-flex align-items-start">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                    class="mr-8"
                    size="small"
                    icon="check"
                  />
                  <div>
                    <div class="fs-15 fw-400 cr-gray f-default">Durasi</div>
                    <div
                      class="fs-15 fw-500 cr-black text-capitalize"
                    >{{data.durasi_perlindungan}} Hari</div>
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
                    <div class="fs-15 fw-400 cr-gray f-default">Layanan</div>
                    <div class="fs-15 fw-500 cr-black text-capitalize">Pulang Pergi</div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <!-- Fasilitas -->
    <a-card
      class="b-shadow bordered-left b-solid ant-list-item--package-information mb-16"
      id="manfaat"
    >
      <div class="fs-16 fw-500 cr-black mb-24">Manfaat Asuransi</div>
      <a-row :gutter="8">
        <a-col :span="12" class="mb-16" v-for="kelebihan in manfaat" :key="kelebihan">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">{{kelebihan}}</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-card>
  </section>
</template>
<script>
import moment from "moment";
export default {
  props: ["data"],

  data() {
    return {
      wishlist: false
    };
  },
  created() {
    this.splitManfaat();
  },
  methods: {
    moment,
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    },
    splitManfaat() {
      this.manfaat = this.$props.data.deskripsi.split("\r\n");
    }
  }
};
</script>
