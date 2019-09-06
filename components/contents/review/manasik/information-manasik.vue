<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information">
    <a-list-item class="ant-list-item--package-information">
      <div>
        <h2 class="ant-package--information-title fs-20 cr-black fw-500">Ulasan Pesanan Manasik Pemantapan</h2>
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
                  :style="{ backgroundImage: 'url(/manasik/package/m1.jpg)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/manasik/package/m2.jpg)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/manasik/package/m3.jpg)' }"
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
          <a-avatar class="max-width p-4" shape="square" src="/icons/package/manasik.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Manasik Pemantapan Umrah</div>
          <div class="fs-14 fw-400 cr-black">Standar Layanan</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar shape="square" src="/icons/package/charity.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Manasik Termasuk</div>
          <div class="fs-14 fw-400 cr-gray">Tempat pelaksanaan Manasik</div>
          <div class="fs-14 fw-400 cr-gray">Makanan dan Snack</div>
          <div class="fs-14 fw-400 cr-gray">Ustad pembimbing Manasik</div>
          <div class="fs-14 fw-400 cr-gray">Team manasik</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-center w-100">
        <div>
          <div class="fs-16 fw-500 cr-black">Syarat dan Ketentuan Manasik Pemantapan</div>
          <div class="fs-15 fw-400 cr-gray">Berikut Syarat dan Ketentuan Manasik Pemantapan</div>
        </div>
        <div class="ml-auto">
          <a-button class="b-shadow b-radius b-solid cr-primary" size="large">Baca Aturan</a-button>
        </div>
      </div>
    </a-list-item>
  </a-list>
</template>
