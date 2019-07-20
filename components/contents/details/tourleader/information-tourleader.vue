<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information">
    <a-list-item class="ant-list-item--package-information">
      <div>
        <h2 class="ant-package--information-title fs-20 cr-black fw-500">Informasi Tour Leader</h2>
        <div class="ant-package--information-text fs-15 cr-black fw-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Odio iste quibusdam consectetur amet consequatur numquam natus a repellendus! Quasi,
          dolores corporis doloribus velit voluptas quae neque unde aperiam sapiente commodi?
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="w-100">
        <div class="d-flex align-items-center w-100">
          <div>
            <a-avatar src="/akomodasi/logo/ll3.svg" />
          </div>
          <div>
            <div class="fs-14 fw-400 cr-gray f-default">Penyedia Tour Leader</div>
            <div class="fs-16 fw-500 cr-black">Ustd. Dedi Abdullah</div>
          </div>
        </div>

        <div class="ant-package--images mt-16">
          <a-row :gutter="10">
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/tourleader/package/tl1.png)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/tourleader/package/tl2.png)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/tourleader/package/tl3.png)' }"
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
          <a-avatar class="max-width p-4" shape="square" src="/icons/package/tourleader.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Tour Leader</div>
          <div class="fs-14 fw-400 cr-black">
            Pendamping selama anda melaksanan ibadah umrah.
            Mulai dari Keberangkatan hingga kepulangan kembali ke tanah air yang termasuk didalamnya
          </div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar shape="square" src="/icons/package/charity.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Manfaat Tour Leader</div>
          <div class="fs-14 fw-400 cr-gray">Pembimbing selama perjalanan</div>
          <div class="fs-14 fw-400 cr-gray">Tempat bertanya seputar ibadah umrah yang anda laksanakan</div>
          <div class="fs-14 fw-400 cr-gray">Bantuan selama perjalanan ibadah umrah</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-center w-100">
        <div>
          <div class="fs-16 fw-500 cr-black">Syarat dan Ketentuan Tour Leader</div>
          <div class="fs-15 fw-400 cr-gray">Berikut Syarat dan Ketentuan Tour Leader</div>
        </div>
        <div class="ml-auto">
          <a-button class="b-shadow b-radius b-solid cr-primary" size="large">Baca Aturan</a-button>
        </div>
      </div>
    </a-list-item>
  </a-list>
</template>
