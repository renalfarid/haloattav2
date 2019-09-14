<template>
  <div class="ant-affix--card">
    <a-card class="ant-card--package-information mb-16">
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="fs-15 fw-500 cr-black f-default">Informasi Penting</div>
          <a href class="fs-14 cr-primary ml-auto">Details</a>
        </div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="d-flex align-items-start mb-8">
          <a-avatar
            style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
            class="mr-8"
            size="small"
            icon="check"
          />
          <div>
            <div class="fs-14 fw-400 cr-black">No reschedule</div>
          </div>
        </div>

        <div class="d-flex align-items-start mb-8">
          <a-avatar
            style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
            class="mr-8"
            size="small"
            icon="check"
          />
          <div>
            <div class="fs-14 fw-400 cr-black">Pembatalan tanpa pinalty 45 hari</div>
          </div>
        </div>

        <div class="d-flex align-items-start">
          <a-avatar
            style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
            class="mr-8"
            size="small"
            icon="check"
          />
          <div>
            <div class="fs-14 fw-400 cr-black">Pelunasan 30 hari sebelum keberangkatan</div>
          </div>
        </div>
      </div>
    </a-card>

    <div data-v-sticky-inner class="sticky-position">
      <a-card class="ant-card--package-information">
        <div class="p-16">
          <div class="d-flex align-items-center mb-8">
            <div class="ant-package--info fs-14 fw-400 cr-black">Berangkat</div>
            <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">10 September 2019</div>
          </div>
          <div class="d-flex align-items-center">
            <div class="ant-package--info fs-14 fw-400 cr-black">Program Hari</div>
            <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">9 Hari</div>
          </div>
        </div>

        <a-divider :style="{margin: '0'}" />

        <div class="p-16">
          <div class="fs-15 fw-500 cr-black mb-8">Jumlah Penumpang</div>
          <div class="d-flex align-items-center">
            <div>
              <div class="ant-package--title fs-15 fw-500 cr-black">Dewasa</div>
              <div class="ant-package--subtitle fs-13 fw-400 cr-gray">(Umur 12 thn atau lebih)</div>
            </div>
            <div class="ml-auto">
              <number-input
                v-model="dewasa"
                :min="0"
                :inputtable="false"
                size="small"
                inline
                center
                controls
              />
            </div>
          </div>
          <a-divider :style="{margin: '14px 0'}" />
          <div class="d-flex align-items-center">
            <div>
              <div class="ant-package--title fs-15 fw-500 cr-black">Anak</div>
              <div
                class="ant-package--subtitle fs-13 fw-400 cr-gray f-default"
              >(Umur 2 sampai 12 thn)</div>
            </div>
            <div class="ml-auto">
              <number-input
                v-model="anak"
                :min="0"
                :inputtable="false"
                size="small"
                inline
                center
                controls
              />
            </div>
          </div>
          <a-divider :style="{margin: '14px 0'}" />
          <div class="d-flex align-items-center">
            <div>
              <div class="ant-package--title fs-15 fw-500 cr-black">Bayi</div>
              <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">(Umur dibawah 2 thn)</div>
            </div>
            <div class="ml-auto">
              <number-input
                v-model="bayi"
                :min="0"
                :inputtable="false"
                size="small"
                inline
                center
                controls
              />
            </div>
          </div>
        </div>

        <a-divider :style="{margin: '0'}" />

        <div class="p-16">
          <div class="d-flex align-items-center mb-8">
            <div class="fs-14 fw-400 cr-black f-default w-35">Dewasa (2)</div>
            <span class="cr-gray mr-8">x</span>
            <div class="fs-14 fw-400 cr-black f-default text-right w-65">Rp 12.500.000</div>
          </div>
          <div class="d-flex align-items-center mb-8">
            <div class="fs-14 fw-400 cr-black f-default w-35">Anak (2)</div>
            <span class="cr-gray mr-8">x</span>
            <div class="fs-14 fw-400 cr-black f-default text-right w-65">Rp 11.000.000</div>
          </div>
          <div class="d-flex align-items-center mb-8">
            <div class="fs-14 fw-400 cr-black f-default w-35">Bayi (1)</div>
            <span class="cr-gray mr-8">x</span>
            <div class="fs-14 fw-400 cr-black f-default text-right w-65">Rp 6.500.000</div>
          </div>

          <a-divider :style="{margin: '8px 0'}" />

          <div class="d-flex align-items-center mb-24">
            <div class="fs-15 fw-500 cr-black f-default w-35">Total</div>
            <div class="fs-15 fw-500 cr-black f-default text-right w-65">Rp 56.000.000</div>
          </div>

          <div :style="{margin: '16px 0'}">
            <a-button
              block
              size="large"
              class="ant-btn--action b-shadow b-radius fs-15 fw-500"
              @click="nextOrderReview"
            >Pesan</a-button>
          </div>
          <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default pb-8">
            Dapatkan point langsung ketika
            anda menyelesaikan aktivitas
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dewasa: 2,
      anak: 2,
      bayi: 1,
      item: []
    };
  },
  created: function() {
    this.getdata();
  },
  methods: {
    async getdata() {
      axios
        .post("https://api.haloatta.com/api/tiket/detail", {
          kode_produk: "TKT239610856"
        })
        .then(response => {
          this.item = response.data.data;
          this.loading = false;
        });
    },
    nextOrderReview() {
      this.$router.push({ path: "/catalog/ticket-group/order-review" });
    }
  }
};
</script>