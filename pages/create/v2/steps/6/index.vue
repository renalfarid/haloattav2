<template>
  <a-layout class="ant-steps-create-package">
    <a-layout-content class="ant-layout-content--steps" :style="{ padding: '0 24px' }">
      <a-spin :spinning="spinning" tip="Loading...">
        <a-form layout="vertical">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :xs="24" :sm="24" :md="22" :lg="20" :xl="18" :xxl="18">
              <a-row :gutter="24" type="flex" justify="space-between" align="middle" class="vh-100">
                <a-col :span="11" :style="{ overflow: 'auto'}">
                  <a-list>
                    <a-list-item>
                      <div class="w-100">
                        <div class="fs-30 fw-600 f-default cr-black mb-16">
                          Wow! Perkembangan yang
                          baik sebagai umaroh!
                        </div>
                        <div class="fs-16 fw-400 cr-gray">
                          Berikutnya, Pilih komponen yang akan anda masukkan
                          kedalam paket umrah anda. Komponen bersifat optional,
                          bisa anda pilih dan tidak. Komponen optional yang tidak
                          anda pesan tidak terhitung dalam tagihan anda
                        </div>
                      </div>
                    </a-list-item>
                    <a-list-item>
                      <div class="mr-16">
                        <a-avatar style="backgroundColor: #0FACF3" size="small" icon="check" />
                      </div>
                      <div>
                        <div class="fs-16 fw-600 f-default cr-black mb-4">Langkah ke 1</div>
                        <div class="fs-16 fw-400 cr-gray">
                          Program Hari, tanggal keberangkatan
                          serta jumlah pax yang anda rencanakan
                        </div>
                        <!-- <a class="fs-16 cr-primary mt-16">Lihat Komponen Wajib</a> -->
                      </div>
                    </a-list-item>
                    <a-list-item>
                      <div class="mr-16">
                        <a-avatar
                          style="backgroundColor: #f5f5f5;color: #ccc"
                          size="small"
                          icon="check"
                        />
                      </div>
                      <div>
                        <div class="fs-16 fw-600 f-default cr-black mb-4">Langkah ke 2</div>
                        <div class="fs-16 fw-400 cr-gray">
                          Menentukan Komponen optional seperti Handling
                          bandara domestik, Manasik pemantapan, Perlengkapan
                          Umrah, dan Tour Leader
                        </div>
                      </div>
                    </a-list-item>
                    <a-list-item>
                      <div class="mr-16">
                        <a-avatar
                          style="backgroundColor: #f5f5f5;color: #ccc"
                          size="small"
                          icon="check"
                        />
                      </div>
                      <div>
                        <div class="fs-16 fw-600 f-default cr-black mb-4">Langkah ke 3</div>
                        <div
                          class="fs-16 fw-400 cr-gray"
                        >Konfirmasi dan Pembayaran paket umrah yang anda buat</div>
                      </div>
                    </a-list-item>
                  </a-list>

                  <a-button
                    block
                    class="ant-btn--next b-shadow b-radius b-solid fs-15 mt-16 fw-500"
                    size="large"
                    @click="nextOptional"
                  >Lanjutkan</a-button>
                </a-col>

                <a-col :span="11">
                  <img class="max-width d-block ml-auto" src="/steps/finish.svg" />
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  layout: "application",
  name: "finish",
  head() {
    return {
      title: "Ulasan - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      spinning: true
    };
  },
  methods: {
    nextOptional() {
      this.$router.push("/create/v2/steps/7");
    }
  },
  mounted() {
    setTimeout(() => {
      this.spinning = false;
    }, 3600);
  }
};
</script>
