<template>
  <a-row type="flex" justify="center">
    <a-col :span="22">
      <a-row
        :gutter="32"
        type="flex"
        justify="space-around"
        align="middle"
        :style="{minHeight: '70vh'}"
      >
        <a-col :span="12">
          <a-card :bordered="false">
            <div>
              <div class="fs-30 fw-500 f-default cr-red mb-8">Astagafirullah!</div>
              <div class="fs-15 fw-400 f-default cr-black">
                <span>Pembayaran menggunakan saldo Halo Pay Gagal</span>
              </div>
            </div>
            <div class="mt-24 mb-24">
              <div class="fs-14 fw-400 cr-gray text-uppercase">Nomor Pesanan</div>
              <div class="fs-18 fw-500 cr-black">HT1234567890</div>
            </div>
            <div class="mt-24 mb-24">
              <div class="fs-16 fw-500 cr-red">Menunggu Pembayaran</div>
              <div class="fs-18 fw-500 cr-black">Rp. 930.000.731</div>
            </div>
            <div class="mb-16">
              <a-button class="ant-btn--action mb-16">
                <a-icon type="wallet" />Top Up Saldo
              </a-button>
              <div class="fs-14 fw-400 f-default cr-gray">
                <span>Lakukan topup saldo jika saldo anda tidak mencukupi untuk melakukan transaksi pesanan anda.</span>
              </div>
            </div>
            <div>
              <div class="fs-14 fw-400 f-default cr-gray">
                Kami akan memasukkan pesanan anda di daftar pesanan,
                klik
                <nuxt-link to class="cr-primary">daftar pesanan</nuxt-link>untuk melanjutkan transaksi pesanan anda
                setelah melakukan top up saldo
              </div>
            </div>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card :bordered="false">
            <img slot="cover" src="/icons/canceled.png" />
          </a-card>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>
