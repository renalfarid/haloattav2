<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information">
    <a-list-item class="ant-list-item--package-information">
      <div>
        <h2 class="ant-package--information-title fs-20 cr-black fw-500">Ulasan Pesanan</h2>
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
          <div class="fs-16 fw-500 cr-black">Movenpick Hotels & Resorts</div>
          <div class="ml-auto">
            <a-rate class="fs-16" :defaultValue="3" disabled />
          </div>
        </div>

        <div class="ant-package--images mt-16">
          <a-row :gutter="10">
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/akomodasi/c1.png)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/akomodasi/c2.png)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/akomodasi/c3.png)' }"
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
          <a-avatar shape="square" src="/icons/package/bedtime.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Durasi Inap</div>
          <a-timeline :style="{marginTop: '16px'}">
            <a-timeline-item>
              <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                <a-col :span="8">
                  <div class="fs-15 fw-400 cr-black">Mekkah : Rayyana Ajyad</div>
                  <div class="fs-15 fw-500 cr-black">Menginap</div>
                  <div class="fs-15 fw-400 cr-gray">3 Hari</div>
                </a-col>
                <a-col :span="8" class="text-right">
                  <div class="fs-15 fw-500 cr-black">Check In</div>
                  <div class="fs-15 fw-400 cr-gray">Rabu, 10 September 2019</div>
                </a-col>
                <a-col :span="8" class="text-right">
                  <div class="fs-15 fw-500 cr-black">Check Out</div>
                  <div class="fs-15 fw-400 cr-gray">Kamis, 20 September 2019</div>
                </a-col>
              </a-row>
            </a-timeline-item>
            <a-timeline-item>
              <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                <a-col :span="8">
                  <div class="fs-15 fw-400 cr-black">Madinah : Pinewood Hotel</div>
                  <div class="fs-15 fw-500 cr-black">Menginap</div>
                  <div class="fs-15 fw-400 cr-gray">3 Hari</div>
                </a-col>
                <a-col :span="8" class="text-right">
                  <div class="fs-15 fw-500 cr-black">Check In</div>
                  <div class="fs-15 fw-400 cr-gray">Rabu, 10 September 2019</div>
                </a-col>
                <a-col :span="8" class="text-right">
                  <div class="fs-15 fw-500 cr-black">Check Out</div>
                  <div class="fs-15 fw-400 cr-gray">Kamis, 20 September 2019</div>
                </a-col>
              </a-row>
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar shape="square" src="/icons/package/binoculars.png" />
        </div>
        <div>
          <div class="fs-15 fw-500 cr-black">Jarah Hotel</div>
          <div class="fs-15 fw-400 cr-gray">Jarak kurang dari 500 meter</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar shape="square" src="/icons/package/charity.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Fasilitas</div>
          <div class="fs-15 fw-400 cr-gray">Informasi fasilitas LA akomodasi anda</div>
          <a-row :gutter="8">
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/akomodasi/f1.png" slot="cover" />
                <a-card-meta title="Bus VIP" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/akomodasi/f2.png" slot="cover" />
                <a-card-meta title="City Tour" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/akomodasi/f3.png" slot="cover" />
                <a-card-meta title="Mutawwif" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/akomodasi/f4.png" slot="cover" />
                <a-card-meta title="Akses Wifi" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/akomodasi/f5.png" slot="cover" />
                <a-card-meta title="Elevator" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/akomodasi/f6.png" slot="cover" />
                <a-card-meta title="Restoran" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/akomodasi/f7.png" slot="cover" />
                <a-card-meta title="Menu Indonesia" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false">
                <img alt="fasilitas" src="/akomodasi/f8.png" slot="cover" />
                <a-card-meta title="Resepsionis 1x24 Jam" />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-center w-100">
        <div>
          <div class="fs-16 fw-500 cr-black">Syarat dan Ketentuan LA Akomodasi</div>
          <div class="fs-15 fw-400 cr-gray">Berikut syarat dan Ketentuan LA Akomodasi</div>
        </div>
        <div class="ml-auto">
          <a-button>Baca Aturan</a-button>
        </div>
      </div>
    </a-list-item>
  </a-list>
</template>
