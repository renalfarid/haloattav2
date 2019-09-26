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
                <div class="voucher-brand"><div class="fs-14 text-uppercase p-relative zIndex">Haloatta</div></div>
                <div class="mt-8 mb-8 item-middle d-flex align-items-center">
                  <img class="m-auto" src="/icons/search/tabs/black/umrah.svg" />
                </div>
                <div class="fs-12 fw-500 text-uppercase">voucher umrah</div>
              </div>
            </div>

            <div class="card-voucher--item card-voucher--item-color" style="width: 60%">
              <div class="voucher-code">
                <div class="fs-14 text-uppercase p-relative zIndex">
                  <span class="fs-12 mr-4">kode voucher</span> 345 221 447
                </div>
              </div>

              <div class="mb-8 mt-8 item-middle d-flex align-items-center">
                <div>
                  <div class="fs-14 cr-black f-default">
                    <span>Potongan Harga</span>
                  </div>
                  <div class="fs-20 cr-black fw-500 f-default">
                    <span>Rp 3.000.000</span>
                  </div>
                </div>
              </div>

              <div class="fs-12 fw-400 cr-gray">
                Berlaku sampai
                <span class="fw-500 cr-black ml-4">30 Desember 2020</span>
              </div>
            </div>
          </div>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card :bordered="false" class="mb-16">
          <div class="card-voucher">
            <div
              class="card-voucher--item card-voucher--item-number d-flex align-items-center"
              style="width:40%"
            >
              <div class="m-auto text-center">
                <div class="voucher-brand"><div class="fs-14 text-uppercase p-relative zIndex">Haloatta</div></div>
                <div class="mt-8 mb-8 item-middle d-flex align-items-center">
                  <img class="m-auto" src="/icons/search/tabs/black/umrah.svg" />
                </div>
                <div class="fs-12 fw-500 text-uppercase">voucher umrah</div>
              </div>
            </div>

            <div class="card-voucher--item card-voucher--item-color" style="width: 60%">
              <div class="voucher-code">
                <div class="fs-14 text-uppercase p-relative zIndex">
                  <span class="fs-12 mr-4">kode voucher</span> 345 221 447
                </div>
              </div>

              <div class="mb-8 mt-8 item-middle d-flex align-items-center">
                <div>
                  <div class="fs-14 cr-black f-default">
                    <span>Potongan Harga</span>
                  </div>
                  <div class="fs-20 cr-black fw-500 f-default">
                    <span>Rp 3.000.000</span>
                  </div>
                </div>
              </div>

              <div class="fs-12 fw-400 cr-gray">
                Berlaku sampai
                <span class="fw-500 cr-black ml-4">30 Desember 2020</span>
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