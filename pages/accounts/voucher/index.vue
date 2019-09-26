<template>
  <div class="ant-card--voucher">
    <div class="fs-18 fw-500 cr-black mb-24">Voucher Saya</div>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-card :bordered="false" class="mb-16">
          <div class="card-voucher">
            <div
              class="card-voucher--item card-voucher--item-number d-flex align-items-center"
              style="width:40%"
            >
              <div class="m-auto text-center">
                <div class="fs-12 text-uppercase cr-white mb-8">Haloatta</div>
                <div class="fs-40 cr-white">30</div>
                <div class="fs-12 cr-white text-uppercase mt-8">voucher umrah</div>
              </div>
            </div>

            <div class="card-voucher--item card-voucher--item-color" style="width: 60%">
              <div class="uk-background-secondary uk-light uk-padding">
                <div class="voucher-code text-right">
                  <div class="fs-14 text-uppercase cr-gray">777 345 221 447</div>
                </div>

                <div class="fs-20 text-uppercase cr-black mb-8 mt-8 text-right">
                  <span>Rp3.000.000</span>
                </div>

                <div class="fs-12 fw-400 cr-gray text-right">
                  <i>Berlaku sampai 30 Desember 2020</i>
                </div>
              </div>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "voucher",
  head() {
    return {
      title: "Voucher Gift Saya - Haloatta"
    };
  },
  data() {
    return {
      icon: "/brand.png"
    };
  }
};
</script>