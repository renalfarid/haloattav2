<template>
  <a-card class="b-solid b-radius ant-card--payment-sider">
    <div class="p-24">
      <div class="fs-12 fw-400 text-uppercase cr-gray mb-8">
        <span>Informasi Pesanan</span>
      </div>
      <div class="d-flex align-items-center">
        <div class="mr-8">
          <a-avatar
            src="https://communicateonline.me/lvt/wp-content/uploads/2016/10/Logo-Mo%CC%88venpick.png"
          />
        </div>
        <div>
          <div class="fs-14 fw-500 cr-black">
            <span>Movenpick Hotels & Resorts</span>
          </div>
        </div>
      </div>
      <a-timeline :style="{ margin: '24px 0 0 0' }">
        <a-timeline-item>
          <div class="fs-14 fw-400 cr-black">
            Check In
          </div>
          <div class="fs-14 fw-400 cr-gray">
            <span>Rabu, 10 September 2019</span>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="schedule" style="fontSize: '14px'" />
          <div class="fs-14 fw-400 cr-gray">
            <span>3 Hari Mekkah Rayyana Ajyad</span>
          </div>
          <div class="fs-14 fw-400 cr-gray">
            <span>4 Hari Madinah Pinewood Hotel</span>
          </div>
        </a-timeline-item>
        <a-timeline-item :style="{ paddingBottom: '0' }">
          <div class="fs-14 fw-400 cr-black">
            Check Out
          </div>
          <div class="fs-14 fw-400 cr-gray">
            <span>Kamis, 19 September 2019</span>
          </div>
        </a-timeline-item>
      </a-timeline>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="fs-12 fw-400 text-uppercase cr-gray mb-8">
        <span>Informasi Room</span>
      </div>
      <div class="d-flex align-items-center mb-8">
        <div class="fs-14 fw-400 cr-black">Quad Room</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          30 pax
        </div>
      </div>

      <div class="d-flex align-items-center mb-8">
        <div class="fs-14 fw-400 cr-black">Triple Room</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          10 pax
        </div>
      </div>
    </div>
  </a-card>
</template>
