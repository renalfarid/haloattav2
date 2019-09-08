<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information mt-8">
    <a-list-item class="ant-list-item--package-information">
      <div class="w-100">
        <h2 class="ant-package--information-title fs-20 cr-black fw-500">Review Pesanan Anda</h2>
        <div class="ant-package--images w-100 mb-24">
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

        <a-row :gutter="16" type="flex" justify="start">
          <a-col :span="16">
            <div
              class="fs-28 fw-600 f-default cr-black"
            >LA Akomodasi Umrah September Madinah Atta Tours</div>
          </a-col>
          <a-col :span="8" class="text-right">
            <a-avatar
              :size="64"
              :style="{ marginRight: '0', backgroundImage: 'url(https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png)' }"
              class="brand-vendor ml-auto"
            />
          </a-col>
        </a-row>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar size="small" shape="square" src="/icons/package/bedtime.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-500 cr-black mb-16">Durasi Inap Madinah dan Makkah</div>

          <a-row :gutter="16">
            <a-col :span="12">
              <div class="fs-14 fw-500 cr-black mb-16">Madinah</div>
              <a-timeline>
                <a-timeline-item color="green">
                  <div class="fs-12 fw-400 cr-gray text-uppercase">Check In</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Pinewood Hotel</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    <span>{{moment("2019-11-20", "YYYY-MM-DD").format('LL')}}</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item color="red">
                  <a-icon slot="dot" type="clock-circle-o" style="font-size: 14px;" />
                  <div class="fs-14 fw-400 cr-black">
                    <span class="mr-8">Durasi</span>
                    <span class="fw-500">3 Hari</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <div class="fs-12 fw-400 cr-gray text-uppercase">Check Out</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Pinewood Hotel</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    <span>{{moment("2019-11-23", "YYYY-MM-DD").format('LL')}}</span>
                  </div>
                </a-timeline-item>
              </a-timeline>
            </a-col>

            <a-col :span="12">
              <div class="fs-14 fw-500 cr-black mb-16">Makkah</div>
              <a-timeline>
                <a-timeline-item color="green">
                  <div class="fs-12 fw-400 cr-gray text-uppercase">Check In</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Rayyana Ajyad</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    <span>{{moment("2019-11-24", "YYYY-MM-DD").format('LL')}}</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item color="red">
                  <a-icon slot="dot" type="clock-circle-o" style="font-size: 14px;" />
                  <div class="fs-14 fw-400 cr-black">
                    <span class="mr-8">Durasi</span>
                    <span class="fw-500">6 Hari</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <div class="fs-12 fw-400 cr-gray text-uppercase">Check Out</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Rayyana Ajyad</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    <span>{{moment("2019-11-30", "YYYY-MM-DD").format('LL')}}</span>
                  </div>
                </a-timeline-item>
              </a-timeline>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar size="small" shape="square" src="/icons/package/binoculars.png" />
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
          <a-avatar size="small" shape="square" src="/icons/package/charity.png" />
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
          <a-button class="b-shadow b-radius b-solid cr-primary" size="large">Baca Aturan</a-button>
        </div>
      </div>
    </a-list-item>
  </a-list>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return { };
  },
  methods: {
    moment
  }
};
</script>
