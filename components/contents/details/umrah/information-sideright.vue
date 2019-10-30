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

    <a-card class="ant-card--package-information">
      <div class="p-16">
        <div class="fs-15 fw-500 cr-black f-default">Informasi Pesanan</div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="ant-package--info fs-14 fw-400 cr-black">Berangkat</div>
          <div
            class="ant-package--info fs-14 fw-500 cr-black ml-auto"
          >{{moment(tgl_berangkat, "YYYY-MM-DD").format('LL')}}</div>
        </div>
        <div class="d-flex align-items-center">
          <div class="ant-package--info fs-14 fw-400 cr-black">Program Hari</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">{{program_hari}} Hari</div>
        </div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-15 fw-500 cr-black">Jumlah Jamaah</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="jamaah"
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
        <div class="ant-package--title fs-15 fw-500 cr-black mb-8">Pengaturan Room</div>
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-15 fw-500 cr-black">Quad Room</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray">{{harga_quad | currency}} /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="quad"
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
            <div class="ant-package--title fs-15 fw-500 cr-black">Triple Room</div>
            <div
              class="ant-package--subtitle fs-13 fw-400 cr-gray f-default"
            >{{harga_triple | currency}} /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="triple"
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
            <div class="ant-package--title fs-15 fw-500 cr-black">Double Room</div>
            <div
              class="ant-package--subtitle fs-13 fw-400 cr-gray f-default"
            >{{harga_double | currency}} /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="double"
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
          <div class="fs-14 fw-400 cr-black f-default w-35">Quad (4)</div>
          <span class="cr-gray mr-8">x</span>
          <div class="fs-14 fw-400 cr-black f-default text-right w-65">{{harga_quad | currency}}</div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Triple (3)</div>
          <span class="cr-gray mr-8">x</span>
          <div class="fs-14 fw-400 cr-black f-default text-right w-65">{{harga_triple | currency}}</div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Double (2)</div>
          <span class="cr-gray mr-8">x</span>
          <div class="fs-14 fw-400 cr-black f-default text-right w-65">{{harga_double | currency}}</div>
        </div>

        <a-divider :style="{margin: '8px 0'}" />

        <div class="d-flex align-items-center mb-24">
          <div class="fs-15 fw-500 cr-black f-default w-35">Total</div>
          <div class="fs-15 fw-500 cr-black f-default text-right w-65">{{total | currency}}</div>
        </div>

        <div :style="{margin: '16px 0'}">
          <a-button
            v-if="$store.state.auth"
            block
            size="large"
            class="b-shadow b-radius ant-btn--action fs-15 fw-500"
            @click="nextOrderReview"
          >Pesan Sekarang</a-button>
          <a-button
            v-else
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="toLogin"
          >Login</a-button>
        </div>
        <div
          class="ant-package--subtitle fs-13 fw-400 cr-gray f-default pb-8"
        >Dapatkan point langsung ketika anda menyelesaikan aktivitas</div>
      </div>
    </a-card>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      wishlist: false,
      jamaah: 1,
      program_hari: 1,
      quad: 1,
      harga_quad: 0,
      harga_triple: 0,
      harga_double: 0,
      total: 0,
      tgl_berangkat: 0,
      triple: 0,
      double: 0
    };
  },
  created() {
    this.getdetail();
  },
  mounted: function() {
    this.getdetail();
    // console.log("Information Page:", this.$store.state.umroh);
  },
  methods: {
    moment,
    async getdetail() {
      // console.log(this.$store.state.umroh);
      this.harga_quad = this.$store.state.umroh.umroh.harga.quad;
      this.harga_triple = this.$store.state.umroh.umroh.harga.triple;
      this.harga_double = this.$store.state.umroh.umroh.harga.double;
      this.tgl_berangkat = this.$store.state.umroh.umroh.umroh.tgl_berangkat;
      this.program_hari = this.$store.state.umroh.umroh.umroh.program_hari;
    },
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    },
    nextOrderReview() {
      let params = this.$route.query;
      this.$router.push({
        path: "/catalog/umrah/order-review",
        query: {
          type: "UMROH",
          kode: params.kode_produk,
          quad: this.quad,
          triple: this.triple,
          double: this.double,
          pax: this.jamaah
        }
      });
    },
    toLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
