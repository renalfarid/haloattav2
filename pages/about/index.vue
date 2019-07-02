<template>
  <div class="ant-layout--about">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--about-body">
      <div class="ant-layout--about-head">
        <div class="container">
          <a-row :gutter="16">
            <a-col :span="12">
              <h2 class="ant-layout--about-head-title fs-40 fw-500 cr-black">
                Tentang Halo Atta
                <br />Serasa Travel Sendiri
              </h2>
            </a-col>
          </a-row>
        </div>
      </div>

      <div class="ant-layout--about-description">
        <div class="container">
          <a-row :gutter="16">
            <a-col :span="12">
              <div class="ant-layout--about-description-title fs-30 fw-500 cr-black">
                Umrah Digital Mudah
                <br />Terpercaya
              </div>
              <div class="ant-layout--about-description-text">
                <p
                  class="fs-15 fw-400 cr-black"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque blanditiis, sapiente nesciunt possimus, sed quibusdam eum sit minima voluptate nobis iure in assumenda aliquid! Nisi veniam delectus illum officia!</p>
                <p
                  class="fs-15 fw-400 cr-black"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque blanditiis, sapiente nesciunt possimus, sed quibusdam eum sit minima voluptate nobis iure in assumenda aliquid! Nisi veniam delectus illum officia!</p>
                <p
                  class="fs-15 fw-400 cr-black"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque blanditiis, sapiente nesciunt possimus, sed quibusdam eum sit minima voluptate nobis iure in assumenda aliquid! Nisi veniam delectus illum officia!</p>
                <p
                  class="fs-15 fw-400 cr-black"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque blanditiis, sapiente nesciunt possimus</p>
              </div>
            </a-col>
            <a-col :span="12">
              <div class="ant-layout--about-description-images">
                <a-row :gutter="16" :style="{ marginBottom: '16px' }">
                  <a-col :span="12">
                    <div class="ant-layout--about-description-images-cover">
                      <div
                        class="ant-cover--item"
                        :style="{ backgroundImage: 'url(/about/c1.png)'}"
                      ></div>
                    </div>
                  </a-col>
                  <a-col :span="12">
                    <div class="ant-layout--about-description-images-cover">
                      <div
                        class="ant-cover--item"
                        :style="{ backgroundImage: 'url(/about/c2.png)'}"
                      ></div>
                    </div>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="24">
                    <div class="ant-layout--about-description-images-cover">
                      <div
                        class="ant-cover--item"
                        :style="{ backgroundImage: 'url(/about/c3.png)'}"
                      ></div>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>

      <div class="ant-layout--about-featured">
        <div class="container">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card :bordered="false" class="text-center">
                <div slot="cover">
                  <img src="/icons/about/transaction.png" />
                </div>
                <div class="fs-16 fw-500 cr-black text-uppercase">Transaksi Aman & Mudah</div>
                <div
                  class="fs-15 fw-400 f-default cr-gray"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false" class="text-center">
                <div slot="cover">
                  <img src="/icons/about/services.png" />
                </div>
                <div class="fs-16 fw-500 cr-black text-uppercase">Layanan Cepat & Terpercaya</div>
                <div
                  class="fs-15 fw-400 f-default cr-gray"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false" class="text-center">
                <div slot="cover">
                  <img src="/icons/about/network.png" />
                </div>
                <div class="fs-16 fw-500 cr-black text-uppercase">Jaringan Kemitraan Luas</div>
                <div
                  class="fs-15 fw-400 f-default cr-gray"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>

      <div class="ant-layout--about-services">
        <div class="container">
          <div :style="{ marginBottom: '30px' }">
            <a-row type="flex" justify="space-around" align="middle">
              <a-col :span="11">
                <div
                  class="ant-layout--about-services-head-title fs-30 fw-500 f-default cr-black"
                >Layanan Halo Atta</div>
              </a-col>
              <a-col :span="13">
                <div
                  class="ant-layout--about-services-head-text fs-15 fw-400 f-default cr-gray"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ipsum explicabo nulla, optio doloribus distinctio deserunt delectus voluptatem laborum similique minima</div>
              </a-col>
            </a-row>
          </div>

          <div>
            <div class="p-relative d-flex w-100" :style="{ marginBottom: '100px' }">
              <div class="ant-layout--about-services-images-left">
                <div
                  class="ant-layout--about-services-images-cover-left"
                  :style="{ backgroundImage: 'url(/about/s1.png)' }"
                ></div>
              </div>
              <div class="ant-layout--about-services-images-overlay-right">
                <a-card :bordered="false" class="ant-layout--about-services-images-overlay-card">
                  <div>
                    <div
                      class="ant-layout--about-services-images-overlay-title fs-40 fw-500 f-default cr-black"
                    >Paket Umrah</div>
                    <div
                      class="ant-layout--about-services-images-overlay-text fs-15 fw-400 f-default cr-gray"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat mollitia doloremque reprehenderit veniam in dicta rem officia qui delectus, at labore placeat facilis distinctio molestias. Exercitationem perspiciatis quos repudiandae doloremque.</div>
                    <div class="ant-layout--about-services-images-overlay-action">
                      <a-button>Selengkapnya</a-button>
                    </div>
                  </div>
                </a-card>
              </div>
            </div>
          </div>

          <div>
            <div class="p-relative d-flex w-100" :style="{ marginTop: '100px' }">
              <div class="ant-layout--about-services-images-overlay-left">
                <a-card :bordered="false" class="ant-layout--about-services-images-overlay-card">
                  <div>
                    <div
                      class="ant-layout--about-services-images-overlay-title fs-40 fw-500 f-default cr-black"
                    >Komponen Umrah</div>
                    <div
                      class="ant-layout--about-services-images-overlay-text fs-15 fw-400 f-default cr-gray"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat mollitia doloremque reprehenderit veniam in dicta rem officia qui delectus, at labore placeat facilis distinctio molestias. Exercitationem perspiciatis quos repudiandae doloremque.</div>
                    <div class="ant-layout--about-services-images-overlay-action">
                      <a-button>Selengkapnya</a-button>
                    </div>
                  </div>
                </a-card>
              </div>

              <div class="ant-layout--about-services-images-right">
                <div
                  class="ant-layout--about-services-images-cover-right"
                  :style="{ backgroundImage: 'url(/about/s2.png)' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ant-layout--about-partner">
        <div class="container">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col
              :span="8"
              class="ant-layout--about-partner-title text-center fs-30 fw-500 f-default cr-black"
            >
              Halo Atta sebagai Partner
              Umaroh dan Vendor
            </a-col>
          </a-row>

          <a-row :gutter="16">
            <a-col :span="8">
              <a-card :bordered="false" class="text-center">
                <div class="fs-40 fw-500 f-default cr-black text-uppercase">100</div>
                <div class="fs-16 fw-500 f-default cr-gray text-uppercase">Vendor Komponen Umrah</div>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false" class="text-center">
                <div class="fs-40 fw-500 f-default cr-black text-uppercase">250</div>
                <div class="fs-16 fw-500 f-default cr-gray text-uppercase">Mitra Umaroh</div>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="false" class="text-center">
                <div class="fs-40 fw-500 f-default cr-black text-uppercase">15</div>
                <div class="fs-16 fw-500 f-default cr-gray text-uppercase">BRAND ACHIEVMENT</div>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>

      <div class="ant-layout--about--bottom" :style="{ backgroundImage: 'url(/about/c4.png)' }">
        <div class="container">
          <a-row>
            <a-col :span="8">
              <a-card :bordered="false">
                <div class="fs-24 fw-500 f-default cr-black">Hubungi Kami</div>
                <div class="fs-15 fw-400 f-default cr-black" :style="{marginTop: '8px'}">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div class="d-flex align-items-center fs-15 fw-400 f-default" :style="{marginTop: '16px'}">
                  <div :style="{marginRight: '6px'}" class="cr-gray"><a-icon type="mail" /></div>
                  <div class="cr-black">customerservice@haloatta.com</div>
                </div>
                <div class="d-flex align-items-center fs-15 fw-400 f-default" :style="{marginTop: '16px'}">
                  <div :style="{marginRight: '6px'}" class="cr-gray"><a-icon type="phone" /></div>
                  <div class="cr-black">+ (62) 411 355355</div>
                </div>
                <div class="d-flex align-items-center fs-15 fw-400 f-default" :style="{marginTop: '16px'}">
                  <div :style="{marginRight: '6px'}" class="cr-gray"><a-icon type="mobile" /></div>
                  <div class="cr-black">+ (62) 81 288 266 244</div>
                </div>
                <div class="d-flex align-items-center fs-15 fw-400 f-default" :style="{marginTop: '16px'}">
                  <div :style="{marginRight: '6px'}" class="cr-gray"><a-icon type="environment" /></div>
                  <div class="cr-black">Jl. Duren Tiga Selatan No.40 Jakarta Selatan</div>
                </div>
                <div class="d-flex align-items-center fs-15 fw-400 f-default" :style="{marginTop: '16px'}">
                  <div :style="{marginRight: '6px'}" class="cr-gray"><a-icon type="clock-circle" /></div>
                  <div class="cr-black">Senin - Sabtu 08.00 - 17.00</div>
                </div>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>
