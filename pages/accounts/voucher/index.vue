<template>
  <div class="ant-card--voucher">
    <div class="fs-18 fw-500 cr-black mb-24">Voucher Saya</div>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-card :bordered="false" class="b-shadow b-radius mb-16">
          <div class="card-voucher">
            <div class="card-voucher--item card-voucher--item-color" style="width: 45%">
              <div class="d-flex align-items-center h-100">
                <div class="pr-16">
                  <div class="fs-26 fw-500 cr-white">RP 3.000.000</div>
                  <div class="fs-14 fw-400 cr-white">Voucher Paket Umrah</div>
                </div>
              </div>
            </div>

            <div class="card-voucher--item card-voucher--item-brand" style="width: 55%">
              <div class="uk-background-secondary uk-light uk-padding">
                <div class="voucher-code mb-16 text-right">
                  <div class="fs-14 text-uppercase cr-gray">Voucher Code</div>
                  <div class="fs-20 fw-500 cr-black">777 345 221 447</div>
                </div>
                
                <div class="fs-13 fw-400 cr-gray text-right">
                  <i>Berlaku sampai 30 Desember 2020</i>
                </div>
              </div>
            </div>
          </div>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card :bordered="false" class="b-shadow b-radius mb-16">
          <div class="card-voucher">
            <div class="card-voucher--item card-voucher--item-color" style="width: 45%">
              <div class="d-flex align-items-center h-100">
                <div class="pr-16">
                  <div class="fs-26 fw-500 cr-white">RP 1.000.000</div>
                  <div class="fs-14 fw-400 cr-white">Voucher Paket Umrah</div>
                </div>
              </div>
            </div>

            <div class="card-voucher--item card-voucher--item-brand" style="width: 55%">
              <div class="uk-background-secondary uk-light uk-padding">
                <div class="voucher-code mb-16 text-right">
                  <div class="fs-14 text-uppercase cr-gray">Voucher Code</div>
                  <div class="fs-20 fw-500 cr-black">123 556 777 890</div>
                </div>
                
                <div class="fs-13 fw-400 cr-gray text-right">
                  <i>Berlaku sampai 12 April 2020</i>
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
    return {};
  }
};
</script>