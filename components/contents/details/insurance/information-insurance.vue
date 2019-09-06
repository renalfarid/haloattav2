<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information">
    <a-list-item class="ant-list-item--package-information">
      <div>
        <h2 class="ant-package--information-title fs-20 cr-black fw-500">Informasi Asuransi</h2>
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
                  :style="{ backgroundImage: 'url(/asuransi/package/a1.png)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/asuransi/package/a2.png)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/asuransi/package/a3.png)' }"
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
          <a-avatar class="max-width p-4" shape="square" src="/icons/package/insurance.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Asuransi Perjalanan Umrah September 2020</div>
          <div class="fs-14 fw-400 cr-black">Program 9 Hari</div>
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
          <div class="fs-15 fw-400 cr-gray">Layanan asuransi termasuk perjalanan pulang pergi</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar shape="square" src="/icons/package/charity.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Manfaat Asuransi Termasuk</div>
          <div class="fs-14 fw-400 cr-gray">Santunan Kematian akibat kecelakaan</div>
          <div class="fs-14 fw-400 cr-gray">Manfaat Biaya Medis</div>
          <div class="fs-14 fw-400 cr-gray">Kehilangan atau Kerusakan Bagasi</div>
          <div class="fs-14 fw-400 cr-gray">Manfaat Pembatalan Perjalanan</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-center w-100">
        <div>
          <div class="fs-16 fw-500 cr-black">Syarat dan Ketentuan Asuransi</div>
          <div class="fs-15 fw-400 cr-gray">Berikut syarat dan Ketentuan Asuransi</div>
        </div>
        <div class="ml-auto">
          <a-button class="b-shadow b-radius b-solid cr-primary" size="large">Baca Aturan</a-button>
        </div>
      </div>
    </a-list-item>
  </a-list>
</template>
