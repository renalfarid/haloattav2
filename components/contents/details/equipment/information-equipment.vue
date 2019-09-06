<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information">
    <a-list-item class="ant-list-item--package-information">
      <div>
        <h2 class="ant-package--information-title fs-20 cr-black fw-500">Informasi Perlengkapan</h2>
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
                  :style="{ backgroundImage: 'url(/perlengkapan/package/p1.jpg)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/perlengkapan/package/p2.jpg)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="ant-package--images-large">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/perlengkapan/package/p3.jpeg)' }"
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
          <a-avatar class="max-width p-4" shape="square" src="/icons/package/suitcase.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black">Perlengkapan Exclusive</div>
          <div class="fs-14 fw-400 cr-black">Perlengkapan exclusive termasuk</div>
          <div>
            <a-row :gutter="8">
              <a-col :span="8">
                <a-card class="b-shadow b-radius b-solid">
                  <img alt="haloatta" src="/perlengkapan/isi/ip1.png" slot="cover" />
                  <div class="fs-14 cr-gray f-default pl-16 pr-16 text-ellipsis">Koper 27 cm</div>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card class="b-shadow b-radius b-solid">
                  <img alt="haloatta" src="/perlengkapan/isi/ip2.png" slot="cover" />
                  <div class="fs-14 cr-gray f-default pl-16 pr-16 text-ellipsis">Tas Slempang untuk Pria</div>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card class="b-shadow b-radius b-solid">
                  <img alt="haloatta" src="/perlengkapan/isi/ip3.png" slot="cover" />
                  <div class="fs-14 cr-gray f-default pl-16 pr-16 text-ellipsis">Tas Slempang untuk Wanita</div>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card class="b-shadow b-radius b-solid">
                  <img alt="haloatta" src="/perlengkapan/isi/ip4.png" slot="cover" />
                  <div class="fs-14 cr-gray f-default pl-16 pr-16 text-ellipsis">Tas Serut</div>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card class="b-shadow b-radius b-solid">
                  <img alt="haloatta" src="/perlengkapan/isi/ip5.png" slot="cover" />
                  <div class="fs-14 cr-gray f-default pl-16 pr-16 text-ellipsis">Syal</div>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card class="b-shadow b-radius b-solid">
                  <img alt="haloatta" src="/perlengkapan/isi/ip6.png" slot="cover" />
                  <div class="fs-14 cr-gray f-default pl-16 pr-16 text-ellipsis">Tas Sendal</div>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card class="b-shadow b-radius b-solid">
                  <img alt="haloatta" src="/perlengkapan/isi/ip7.png" slot="cover" />
                  <div class="fs-14 cr-gray f-default pl-16 pr-16 text-ellipsis">Bantal Travel</div>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card class="b-shadow b-radius b-solid">
                  <img alt="haloatta" src="/perlengkapan/isi/ip8.png" slot="cover" />
                  <div class="fs-14 cr-gray f-default pl-16 pr-16 text-ellipsis">Kain Ihram</div>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card class="b-shadow b-radius b-solid">
                  <img alt="haloatta" src="/perlengkapan/isi/ip9.png" slot="cover" />
                  <div class="fs-14 cr-gray f-default pl-16 pr-16 text-ellipsis">Mukenah</div>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card class="b-shadow b-radius b-solid">
                  <img alt="haloatta" src="/perlengkapan/isi/ip10.png" slot="cover" />
                  <div class="fs-14 cr-gray f-default pl-16 pr-16 text-ellipsis">Buku Dzikir & Doa</div>
                </a-card>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-center w-100">
        <div>
          <div class="fs-16 fw-500 cr-black">Syarat dan Ketentuan Perlengkapan Umrah</div>
          <div class="fs-15 fw-400 cr-gray">Berikut Syarat dan Ketentuan Perlengkapan Umrah</div>
        </div>
        <div class="ml-auto">
          <a-button class="b-shadow b-radius b-solid cr-primary" size="large">Baca Aturan</a-button>
        </div>
      </div>
    </a-list-item>
  </a-list>
</template>
