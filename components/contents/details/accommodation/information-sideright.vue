<template>
  <div class="ant-affix--card">
    <a-card class="ant-card--package-information">
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="fs-15 fw-500 cr-black f-default mb-8">Informasi Penting</div>
          <a href="" class="fs-14 cr-primary ml-auto">Details</a>
        </div>
        <ul class="pl-16 mb-0">
          <li class="fs-14 cr-black">No reschedule</li>
          <li class="fs-14 cr-black">Pembatalan tanpa pinalty 45 hari</li>
          <li class="fs-14 cr-black">Pelunasan H -30 hari</li>
        </ul>
      </div>

      <a-divider :style="{margin: '0'}" />
      
      <div class="p-16">
        <a-rate class="fs-16 mb-8" :defaultValue="3" disabled />

        <div class="ant-package--name fs-18 fw-500 cr-black">Rayyana Ajyad (Mekkah)</div>
        <div class="ant-package--name fs-18 fw-500 cr-black f-default">Pinewood Hotel (Madinah)</div>
      </div>

      <a-divider :style="{margin: '0'}" />

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
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-15 fw-500 cr-black">Jumlah Tamu</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="qty"
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
        <div class="ant-package--title fs-15 fw-500 cr-black mb-16">Pengaturan Room</div>
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-15 fw-500 cr-black">Quad Room</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray">Rp4.000.000 /pax</div>
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
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">Rp5.000.000 /pax</div>
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
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">Rp7.000.000 /pax</div>
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
          <div class="fs-14 fw-400 cr-black f-default w-35">Quad (4) </div>
          <span class="cr-gray mr-8">x</span>
          <div class="fs-14 fw-400 cr-black f-default text-right w-65">Rp 4.000.000</div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Triple (3) </div>
          <span class="cr-gray mr-8">x</span>
          <div class="fs-14 fw-400 cr-black f-default text-right w-65">Rp 5.000.000</div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Double (2) </div>
          <span class="cr-gray mr-8">x</span>
          <div class="fs-14 fw-400 cr-black f-default text-right w-65">Rp 7.000.000</div>
        </div>

        <a-divider :style="{margin: '8px 0'}" />

        <div class="d-flex align-items-center mb-24">
          <div class="fs-15 fw-500 cr-black f-default w-35">Total </div>
          <div class="fs-15 fw-500 cr-black f-default text-right w-65">Rp 156.000.000</div>
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
</template>
<script>
export default {
  data() {
    return {
      qty: 9,
      quad: 4,
      triple: 3,
      double: 2
    };
  },
  methods: {
    nextOrderReview() {
      this.$router.push({ path: "/catalog/accommodation/order-review" });
    }
  }
};
</script>