<template>
  <div class="ant-affix--card">
    <a-card class="b-radius b-shadow b-solid ant-card--package-information mb-16">
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="fs-16 fw-500 cr-black">Informasi Penting</div>
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

    <a-card class="b-radius b-shadow b-solid ant-card--package-information">
      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="ant-package--info fs-14 fw-400 cr-black">Rencana Manasik</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">-</div>
        </div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-14 fw-500 cr-black">Jumlah Pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="qty"
              :min="1"
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
          <div class="fs-14 fw-400 cr-black">Subtotal</div>
          <div class="fs-14 fw-400 cr-black ml-auto"><span class="cr-gray mr-8">{{qty}}x</span> {{data.harga | currency}}</div>
        </div>

        <a-divider :style="{margin: '12px 0'}" />

        <div class="d-flex align-items-center mb-24">
          <div class="fs-14 fw-500 cr-black">Total Bayar</div>
          <div
            class="fs-14 fw-500 cr-black ml-auto"
          >{{data.harga * qty | currency}}</div>
        </div>

        <div :style="{margin: '16px 0'}">
          <a-button
            v-if="$store.state.auth"
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-14 fw-500"
            @click="nextOrderReview"
          >Pesan</a-button>
          <a-button
            v-else
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-14 fw-500"
            @click="toLogin"
          >Login</a-button>
        </div>
        <div class="ant-package--subtitle fs-13 fw-400 cr-gray pb-8">
          Dapatkan point langsung ketika
          anda menyelesaikan aktivitas
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      qty: 0
    };
  },
  methods: {
    nextOrderReview() {
      let params = this.$route.query;
      this.$router.push({
        path: "/catalog/manasik/order-review",
        query: {
          type: "MANASIK",
          kode: params.kode_produk,
          qty: this.qty
        }
      });
    },
    toLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>