<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information">
    <a-list-item class="ant-list-item--package-information">
      <div>
        <h2 class="ant-package--information-title fs-20 cr-black fw-500">Ulasan Pesanan Handling Domestik</h2>
        <div class="ant-package--information-text fs-15 cr-black fw-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Odio iste quibusdam consectetur amet consequatur numquam natus a repellendus! Quasi,
          dolores corporis doloribus velit voluptas quae neque unde aperiam sapiente commodi?
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="w-100">
        <div class="ant-package--images">
          <a-row :gutter="10">
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/handling/package/h1.jpg)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/handling/package/h2.jpg)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/handling/package/h3.jpg)' }"
                ></div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar class="max-width p-4" shape="square" src="/icons/package/trolley.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Handling Domestik Umrah</div>
          <div class="fs-14 fw-400 cr-black">Standar Layanan</div>
          <a-timeline :style="{marginTop: '16px'}">
            <a-timeline-item>
              <div class="fs-15 fw-500 cr-black">Keberangkatan</div>
              <div class="fs-15 fw-400 cr-gray">Rabu, 10 September 2019</div>
            </a-timeline-item>
            <a-timeline-item>
              <div class="fs-15 fw-500 cr-black">Kedatangan</div>
              <div class="fs-15 fw-400 cr-gray">Kamis, 20 September 2019</div>
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar shape="square" src="/icons/package/round_trip.png" />
        </div>
        <div>
          <div class="fs-15 fw-500 cr-black">Pulang Pergi</div>
          <div class="fs-15 fw-400 cr-gray">Layanan handling domestik termasuk kedatangan dan keberangkatan</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar shape="square" src="/icons/package/charity.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Manfaat Handling Termasuk</div>
          <div class="fs-14 fw-400 cr-gray">Bantuan check in boarding pass bandara domestik</div>
          <div class="fs-14 fw-400 cr-gray">Pengurusan bagasi jamaah rombongan</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-center w-100">
        <div>
          <div class="fs-16 fw-500 cr-black">Syarat dan Ketentuan Handling Domestik</div>
          <div class="fs-15 fw-400 cr-gray">Berikut Syarat dan Ketentuan Handling Domestik</div>
        </div>
        <div class="ml-auto">
          <a-button class="b-shadow b-radius b-solid cr-primary" size="large">Baca Aturan</a-button>
        </div>
      </div>
    </a-list-item>
  </a-list>
</template>
