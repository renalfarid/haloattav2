<template>
  <a-card class="b-solid b-radius ant-card--payment-sider">
    <div class="p-24">
      <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray mb-8">
        <span>Informasi Tiket</span>
      </div>

      <div class="d-flex align-items-center">
        <div class="mr-8">
          <a-avatar
            src="https://www.goto-hotel.com/wp-content/uploads/lion-parcel-logo.png"
          />
        </div>
        <div>
          <div class="fs-15 fw-500 cr-black f-default">
            Lion Air
          </div>
          <div class="fs-14 fw-400 cr-black f-default">
            Economy Class
          </div>
        </div>
        <div class="ml-auto">
          <div class="fs-14 fw-500 cr-black f-default">
            JT-778
          </div>
        </div>
      </div>

      <a-timeline :style="{ margin: '24px 0 0 0' }">
        <a-timeline-item>
          <div class="fs-14 fw-400 f-default cr-black">
            Berangkat
          </div>
          <div class="fs-14 fw-400 f-default cr-gray">
            <span>Rabu, 10 September 2019</span>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="undo" style="fontSize: '15px'" />
          <div class="d-flex align-items-center">
            <div>
              <div
                class="fs-14 fw-400 cr-black f-default"
              >
                <span>Round Trip</span>
              </div>
              <div class="fs-14 fw-400 cr-gray f-default">
                <span>Pulang Pergi</span>
              </div>
            </div>
            <div class="ml-auto text-right">
              <div
                class="fs-14 fw-400 cr-black f-default"
              >
                <span>Direct Flight</span>
              </div>
              <div class="fs-14 fw-400 cr-gray f-default">
                <span>Langsung</span>
              </div>
            </div>
          </div>
        </a-timeline-item>
        <a-timeline-item :style="{ paddingBottom: '0' }">
          <div class="fs-14 fw-400 f-default cr-black">
            Pulang
          </div>
          <div class="fs-14 fw-400 f-default cr-gray">
            <span>Kamis, 19 September 2019</span>
          </div>
        </a-timeline-item>
      </a-timeline>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="fs-12 fw-400 text-uppercase cr-gray mb-8">
        <span>Jumlah Penumpang</span>
      </div>

      <div class="d-flex align-items-center mb-8">
        <div class="fs-14 fw-400 cr-black">Dewasa</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          30 pax
        </div>
      </div>

      <div class="d-flex align-items-center mb-8">
        <div class="fs-14 fw-400 cr-black">Anak</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          10 pax
        </div>
      </div>
    </div>
  </a-card>
</template>
