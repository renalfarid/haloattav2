<template>
  <div>
    <div class="ant-package--images">
      <a-row :gutter="16">
        <a-col :span="8">
          <div class="ant-package--images-large">
            <div
              class="ant-package--images-cover"
              :style="{ backgroundImage: 'url(/perlengkapan/c1.png)' }"
            ></div>
          </div>
        </a-col>
        <a-col :span="8">
          <div class="ant-package--images-large">
            <div
              class="ant-package--images-cover"
              :style="{ backgroundImage: 'url(/perlengkapan/c2.png)' }"
            ></div>
          </div>
        </a-col>
        <a-col :span="8">
          <a-row>
            <a-col :span="24">
              <div class="ant-package--images-small right-top">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/perlengkapan/c3.png)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="24">
              <div class="ant-package--images-small right-bottom">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/perlengkapan/c4.png)' }"
                ></div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>

    <div :style="{ position: 'relative' }">
      <a-row :gutter="16">
        <a-col :span="16">
          <a-list itemLayout="horizontal" class="ant-list--package-information">
            <a-list-item class="ant-list-item--package-information">
              <div>
                <h2
                  class="ant-package--information-title fs-20 cr-black fw-500"
                >Informasi Kelengkapan</h2>
                <div
                  class="ant-package--information-text fs-15 cr-black fw-400"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iste quibusdam consectetur amet consequatur numquam natus a repellendus! Quasi, dolores corporis doloribus velit voluptas quae neque unde aperiam sapiente commodi?</div>
              </div>
            </a-list-item>

            <a-list-item class="ant-list-item--package-information">
              <div class="d-flex align-items-start w-100">
                <div>
                  <a-avatar shape="square" src="/icons/package/trolley.png" />
                </div>
                <div>
                  <div class="fs-15 fw-500 cr-black">Handling Domestik</div>
                  <div
                    class="fs-15 fw-400 cr-gray"
                  >Bantuan pada saat Keberangkatan dan kepulangan rombongan jamaah. Handling termasuk :</div>
                  <div class="fs-15 fw-400 cr-gray">Bantuan check in boarding pass bandara domestik</div>
                  <div class="fs-15 fw-400 cr-gray">Pengurusan bagasi jamaah rombongan</div>
                </div>
              </div>
            </a-list-item>

            <a-list-item class="ant-list-item--package-information">
              <div class="d-flex align-items-start w-100">
                <div>
                  <a-avatar shape="square" src="/icons/package/manasik.png" />
                </div>
                <div>
                  <div class="fs-15 fw-500 cr-black">Manasik Pemantapan</div>
                  <div
                    class="fs-15 fw-400 cr-gray"
                  >Manasik pemantapan sebelum Keberangkatan umrah. Manasik termasuk :</div>
                  <div class="fs-15 fw-400 cr-gray">Tempat pelaksanaan Manasik</div>
                  <div class="fs-15 fw-400 cr-gray">Makanan dan Snack</div>
                  <div class="fs-15 fw-400 cr-gray">Ustad pembimbing Manasik</div>
                  <div class="fs-15 fw-400 cr-gray">Team manasik</div>
                </div>
              </div>
            </a-list-item>

            <a-list-item class="ant-list-item--package-information">
              <div class="d-flex align-items-start w-100">
                <div>
                  <a-avatar shape="square" src="/icons/package/suitcase.png" />
                </div>
                <div class="w-100">
                  <div class="fs-15 fw-500 cr-black">Perlengkapan Exclusif</div>
                  <div class="fs-15 fw-400 cr-gray">Perlengkapan exclusive termasuk</div>
                  <a-row :gutter="8">
                    <a-col :span="8">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/perlengkapan/f1.png" slot="cover" />
                        <a-card-meta title="Koper 27" />
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/perlengkapan/f2.png" slot="cover" />
                        <a-card-meta title="Tas Slempang untuk Pria" />
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/perlengkapan/f3.png" slot="cover" />
                        <a-card-meta title="Tas Slempang untuk wanita" />
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/perlengkapan/f4.png" slot="cover" />
                        <a-card-meta title="Tas Sendal" />
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/perlengkapan/f5.png" slot="cover" />
                        <a-card-meta title="Tas Serut" />
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/perlengkapan/f6.png" slot="cover" />
                        <a-card-meta title="Syal" />
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/perlengkapan/f7.png" slot="cover" />
                        <a-card-meta title="Buku doa" />
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/perlengkapan/f8.png" slot="cover" />
                        <a-card-meta title="Bantal Travel" />
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/perlengkapan/f9.png" slot="cover" />
                        <a-card-meta title="Mukenah" />
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/perlengkapan/f10.png" slot="cover" />
                        <a-card-meta title="Kain Ihram" />
                      </a-card>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </a-list-item>

            <a-list-item class="ant-list-item--package-information">
              <div class="d-flex align-items-start w-100">
                <div>
                  <a-avatar shape="square" src="/icons/package/tour_guide.png" />
                </div>
                <div>
                  <div class="fs-15 fw-500 cr-black">Tour Leader</div>
                  <div
                    class="fs-15 fw-400 cr-gray"
                  >Pendamping selama anda melaksanan ibadah umrah. Mulai dari Keberangkatan hingga kepulangan kembali ke tanah air yang termasuk didalamnya :</div>
                  <div class="fs-15 fw-400 cr-gray">Pembimbing selama perjalanan</div>
                  <div
                    class="fs-15 fw-400 cr-gray"
                  >Tempat bertanya seputar ibadah umrah yang anda laksanakan</div>
                  <div class="fs-15 fw-400 cr-gray">Bantuan selama perjalanan ibadah umrah</div>
                </div>
              </div>
            </a-list-item>
          </a-list>
        </a-col>

        <a-col :span="8" :style="{margin : '16px 0'}">
          <div class="ant-layout--right">
            <div class="ant-affix--container">
              <informationSideRight />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import informationSideRight from "~/components/contents/details/umrah/information-sideright.vue";
export default {
  components: {
    informationSideRight
  }
};
</script>
