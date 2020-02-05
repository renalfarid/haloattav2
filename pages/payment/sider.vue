<template>
  <a-card class="b-solid b-radius ant-card--payment-sider">
    <div :style="{padding:'16px 24px'}">
      <h3 class="fw-600 cr-black m-0">Detail Pesanan</h3>
    </div>

    <a-divider :style="{ margin: '0' }" />

    <div class="p-24">
      <h2 class="fw-500 cr-black mb-8">Umrah Maret Alilah</h2>
      <div class="fs-14 fw-400 cr-black">Program 9 Hari</div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-black">Jumlah</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          1 Pax
        </div>
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-black">Subtotal</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          {{ total | currency }}
        </div>
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-black">Diskon</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          - {{ 0 | currency }}
        </div>
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-16 fw-500 cr-black">Total Bayar</div>
        <div class="fs-16 fw-500 cr-black ml-auto">
          {{ total | currency }}
        </div>
      </div>
    </div>

    <div class="p-24" :style="{'background-color':'#000'}">
      <div class="fs-14 fw-400 text-uppercase cr-white mb-8">Bayar Bertahap</div>
      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-white">Uang Muka (30%)</div>
        <div class="fs-14 fw-400 cr-white ml-auto">
          {{ total * 30 / 100 | currency }}
        </div>
      </div>
      <a-divider :style="{ margin: '12px 0','opacity':'.2' }" />
      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-white">Pelunasan</div>
        <div class="fs-14 fw-400 cr-white ml-auto">
          {{ total * 30 / 100 - total | currency }}
        </div>
      </div>
    </div>

    <div class="p-24">
      <span>Jatuh tempo pelunasan 30 hari sebelum tanggal keberangkatan.</span>
    </div>
    <!-- ----------------------------------- -->
    <!-- <a-divider :style="{margin: '0'}" />
    <div class="p-16">
      <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">Informasi Paket</div>
      <div class="ant-package--subtitle fs-15 fw-500 f-default cr-black mb-8">
        <span>Umrah Exclusive Rombongan September 2020</span>
      </div>
      <div class="ant-package--rate">
        <a-rate class="fs-14 m-0 f-default" :defaultValue="3" disabled />
        <span class="ant-rate-text fs-12">(Hotel setaraf bintang 3)</span>
      </div>
      <a-divider :style="{margin: '10px 0'}" />
      <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">
        <span>Program & Jumlah Pax</span>
      </div>
      <div class="ant-package--subtitle fs-15 fw-500 cr-black">
        Program 9 Hari
        <a-divider type="vertical" />40 pax
      </div>
    </div>-->
    <!-- ----------------------------------- -->
    <!-- <a-divider :style="{margin: '0'}" />
    <div class="p-16">
      <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray mb-8">
        <span>Informasi Tiket</span>
      </div>
      <div class="d-flex align-items-center">
        <div class="mr-8">
          <a-avatar src="https://www.goto-hotel.com/wp-content/uploads/lion-parcel-logo.png" />
        </div>
        <div>
          <div class="ant-package--subtitle fs-15 fw-500 cr-black f-default">Lion Air</div>
          <div class="ant-package--subtitle fs-14 fw-400 cr-black f-default">Economy Class</div>
        </div>
        <div class="ml-auto">
          <div class="ant-package--subtitle fs-14 fw-500 cr-black f-default">JT-778</div>
        </div>
      </div>
      <a-timeline :style="{margin: '24px 0 0 0'}">
        <a-timeline-item>
          <div class="ant-package--subtitle fs-14 fw-400 f-default cr-black">Berangkat</div>
          <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
            <span>Rabu, 10 September 2019</span>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="undo" style="fontSize: '15px'" />
          <div class="d-flex align-items-center">
            <div>
              <div class="ant-package--subtitle fs-14 fw-400 cr-black f-default">
                <span>Round Trip</span>
              </div>
              <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">
                <span>Pulang Pergi</span>
              </div>
            </div>
            <div class="ml-auto text-right">
              <div class="ant-package--subtitle fs-14 fw-400 cr-black f-default">
                <span>Direct Flight</span>
              </div>
              <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">
                <span>Langsung</span>
              </div>
            </div>
          </div>
        </a-timeline-item>
        <a-timeline-item :style="{paddingBottom: '0'}">
          <div class="ant-package--subtitle fs-14 fw-400 f-default cr-black">Pulang</div>
          <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
            <span>Kamis, 19 September 2019</span>
          </div>
        </a-timeline-item>
      </a-timeline>
      <a-divider :style="{margin: '10px 0'}" />
      <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">
        <span>Informasi Tiket Pax</span>
      </div>
      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-15 fw-400 cr-black">Dewasa</div>
        <div class="ant-package--subtitle fs-15 fw-400 cr-black ml-auto">30 pax</div>
      </div>
      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-15 fw-400 cr-black">Anak</div>
        <div class="ant-package--subtitle fs-15 fw-400 cr-black ml-auto">10 pax</div>
      </div>
    </div>-->
    <!-- ----------------------------------- -->
    <!-- <a-divider :style="{margin: '0'}" />
    <div class="p-16">
      <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray mb-8">
        <span>Informasi LA Akomodasi</span>
      </div>
      <div class="d-flex align-items-center">
        <div class="mr-8">
          <a-avatar
            src="https://communicateonline.me/lvt/wp-content/uploads/2016/10/Logo-Mo%CC%88venpick.png"
          />
        </div>
        <div>
          <div class="ant-package--subtitle fs-15 fw-500 cr-black f-default">
            <span>Movenpick Hotels & Resorts</span>
          </div>
        </div>
      </div>
      <a-timeline :style="{margin: '24px 0 0 0'}">
        <a-timeline-item>
          <div class="ant-package--subtitle fs-14 fw-400 f-default cr-black">Check In</div>
          <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
            <span>Rabu, 10 September 2019</span>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="schedule" style="fontSize: '15px'" />
          <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
            <span>3 Hari Mekkah Rayyana Ajyad</span>
          </div>
          <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
            <span>4 Hari Madinah Pinewood Hotel</span>
          </div>
        </a-timeline-item>
        <a-timeline-item :style="{paddingBottom: '0'}">
          <div class="ant-package--subtitle fs-14 fw-400 f-default cr-black">Check Out</div>
          <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
            <span>Kamis, 19 September 2019</span>
          </div>
        </a-timeline-item>
      </a-timeline>
      <a-divider :style="{margin: '10px 0'}" />
      <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">
        <span>Informasi Room Pax</span>
      </div>
      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-15 fw-400 cr-black">Quad</div>
        <div class="ant-package--subtitle fs-15 fw-400 cr-black ml-auto">30 pax</div>
      </div>
      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-15 fw-400 cr-black">Triple</div>
        <div class="ant-package--subtitle fs-15 fw-400 cr-black ml-auto">10 pax</div>
      </div>
    </div>-->
    <!-- ----------------------------------- -->
    <!-- <div class="p-16">
      <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">
        <span>Informasi Kelengkapan</span>
      </div>
      <div class="ant-package--subtitle fs-14 fw-400 cr-black">
        <span>Termasuk Visa, Asuransi, Handling Domestik, Manasik Pemantapan, Perlengkapan Umrah, Tour Leader</span>
      </div>
    </div>-->
  </a-card>
</template>

<script>
export default {
  props: ["total"]
};
</script>
