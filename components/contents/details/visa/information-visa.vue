<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information">
    <a-list-item class="ant-list-item--package-information">
      <div>
        <h2 class="ant-package--information-title fs-20 cr-black fw-500">Informasi Visa</h2>
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
            <div class="fs-14 fw-400 cr-gray f-default">Penyedia Visa</div>
            <div class="fs-16 fw-500 cr-black">Babul Kabah</div>
          </div>
        </div>

        <div class="ant-package--images mt-16">
          <a-row :gutter="10">
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/visa/package/v1.jpg)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/visa/package/v2.jpg)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/visa/package/v3.jpg)' }"
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
          <a-avatar class="max-width p-4" shape="square" src="/icons/package/visa.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Visa Umrah September 2020</div>
          <div class="fs-14 fw-400 cr-black">Program 9 Hari</div>
          <a-timeline :style="{marginTop: '16px'}">
            <a-timeline-item>
              <div class="fs-15 fw-500 cr-black">Check In</div>
              <div class="fs-15 fw-400 cr-gray">Rabu, 10 September 2019</div>
            </a-timeline-item>
            <a-timeline-item>
              <div class="fs-15 fw-500 cr-black">Check Out</div>
              <div class="fs-15 fw-400 cr-gray">Kamis, 20 September 2019</div>
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-center w-100">
        <div>
          <div class="fs-16 fw-500 cr-black">Syarat dan Ketentuan Visa</div>
          <div class="fs-15 fw-400 cr-gray">Berikut syarat dan Ketentuan Visa</div>
        </div>
        <div class="ml-auto">
          <a-button>Baca Aturan</a-button>
        </div>
      </div>
    </a-list-item>
  </a-list>
</template>
