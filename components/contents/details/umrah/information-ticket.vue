<template>
  <div>
    <div class="ant-package--images">
      <a-row :gutter="16">
        <a-col :span="16">
          <div class="ant-package--images-large">
            <div
              class="ant-package--images-cover"
              :style="{ backgroundImage: 'url(/maskapai/c1.png)' }"
            ></div>
          </div>
        </a-col>
        <a-col :span="8">
          <a-row>
            <a-col :span="24">
              <div class="ant-package--images-small right-top">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/maskapai/c2.png)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="24">
              <div class="ant-package--images-small right-bottom">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/maskapai/c3.png)' }"
                ></div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>

    <div :style="{ position: 'relative' }">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information">
          <a-row :gutter="16" class="w-100">
            <a-col :span="16">
              <div>
                <h2 class="ant-package--information-title fs-20 cr-black fw-500">Informasi Tiket</h2>
                <div
                  class="ant-package--information-text fs-14 cr-black fw-400"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iste quibusdam consectetur amet consequatur numquam natus a repellendus! Quasi, dolores corporis doloribus velit voluptas quae neque unde aperiam sapiente commodi?</div>
              </div>
            </a-col>
          </a-row>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <a-row :gutter="16" class="w-100">
            <a-col :span="16">
              <div class="d-flex align-items-center w-100">
                <div>
                  <a-avatar
                    src="https://www.goto-hotel.com/wp-content/uploads/lion-parcel-logo.png"
                  />
                </div>
                <div class="fs-16 fw-500 cr-black">Lion Air</div>
                <div class="fs-16 fw-500 cr-black ml-auto">JT-367</div>
              </div>
            </a-col>
          </a-row>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <a-row :gutter="16" class="w-100">
            <a-col :span="16">
              <div class="d-flex align-items-center w-100">
                <div>
                  <a-avatar shape="square" src="/icons/package/seat.png" />
                </div>
                <div class="fs-14 fw-500 cr-black">Kelas Kabin</div>
                <div class="fs-14 fw-500 cr-black ml-auto">Economy Class</div>
              </div>
            </a-col>
          </a-row>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <a-row :gutter="16" class="w-100">
            <a-col :span="16">
              <div class="d-flex align-items-start w-100">
                <div>
                  <a-avatar shape="square" src="/icons/package/airplane.png" />
                </div>
                <div class="w-100">
                  <div class="fs-14 fw-500 cr-black">Info Keberangkatan dan Kepulangan</div>
                  <a-timeline :style="{marginTop: '16px'}">
                    <a-timeline-item>
                      <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                        <a-col :span="14">
                          <div
                            class="fs-14 fw-400 cr-black"
                          >Keberangkatan : Makassar (UPG) ke Jeddah (JED)</div>
                          <div class="fs-14 fw-500 cr-black">09:45 AM</div>
                          <div class="fs-14 fw-400 cr-gray">Kamis, 10 September 2019</div>
                        </a-col>
                        <a-col :span="4" class="text-center">
                          <div class="fs-14 fw-400 cr-gray">Nonstop</div>
                          <div class="fs-14 fw-400 cr-gray">10h45m</div>
                        </a-col>
                        <a-col :span="6" class="text-right">
                          <div class="fs-14 fw-500 cr-black">14:15 AM</div>
                          <div class="fs-14 fw-400 cr-gray">Rabu, 10 September 2019</div>
                        </a-col>
                      </a-row>
                    </a-timeline-item>
                    <a-timeline-item>
                      <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                        <a-col :span="14">
                          <div
                            class="fs-14 fw-400 cr-black"
                          >Kepulangan : Jeddah (JED) ke Makassar (UPG)</div>
                          <div class="fs-14 fw-500 cr-black">09:45 AM</div>
                          <div class="fs-14 fw-400 cr-gray">Kamis, 10 September 2019</div>
                        </a-col>
                        <a-col :span="4" class="text-center">
                          <div class="fs-14 fw-400 cr-gray">Nonstop</div>
                          <div class="fs-14 fw-400 cr-gray">10h45m</div>
                        </a-col>
                        <a-col :span="6" class="text-right">
                          <div class="fs-14 fw-500 cr-black">14:15 AM</div>
                          <div class="fs-14 fw-400 cr-gray">Rabu, 10 September 2019</div>
                        </a-col>
                      </a-row>
                    </a-timeline-item>
                  </a-timeline>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <a-row :gutter="16" class="w-100">
            <a-col :span="16">
              <div class="d-flex align-items-start w-100">
                <div>
                  <a-avatar shape="square" src="/icons/package/direction.png" />
                </div>
                <div>
                  <div class="fs-14 fw-500 cr-black">Direct Flight</div>
                  <div class="fs-14 fw-400 cr-gray">Penerbangan Langsung Tanpa Transit</div>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <a-row :gutter="16" class="w-100">
            <a-col :span="16">
              <div class="d-flex align-items-start w-100">
                <div>
                  <a-avatar shape="square" src="/icons/package/round_trip.png" />
                </div>
                <div>
                  <div class="fs-14 fw-500 cr-black">Round Trip</div>
                  <div
                    class="fs-14 fw-400 cr-gray"
                  >Tiket termasuk penerbangan keberangkatan dan kepulangan</div>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <a-row :gutter="16" class="w-100">
            <a-col :span="16">
              <div class="d-flex align-items-start w-100">
                <div>
                  <a-avatar shape="square" src="/icons/package/charity.png" />
                </div>
                <div class="w-100">
                  <div class="fs-14 fw-500 cr-black">Fasilitas</div>
                  <div class="fs-14 fw-400 cr-gray">Informasi fasilitas penerbangan anda</div>
                  <a-row :gutter="16">
                    <a-col :span="6">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/maskapai/f1.png" slot="cover" />
                        <a-card-meta title="Entertainment" />
                      </a-card>
                    </a-col>
                    <a-col :span="6">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/maskapai/f2.png" slot="cover" />
                        <a-card-meta title="Bagasi" />
                      </a-card>
                    </a-col>
                    <a-col :span="6">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/maskapai/f3.png" slot="cover" />
                        <a-card-meta title="Food & Coffee Break" />
                      </a-card>
                    </a-col>
                    <a-col :span="6">
                      <a-card :bordered="false">
                        <img alt="fasilitas" src="/maskapai/f4.png" slot="cover" />
                        <a-card-meta title="Akses Disabilitas" />
                      </a-card>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <a-row :gutter="16" class="w-100">
            <a-col :span="16">
              <div class="d-flex align-items-center w-100">
                <div>
                  <div class="fs-16 fw-500 cr-black">
                    Syarat & Ketentuan
                    <span>Lion Air</span>
                  </div>
                  <div class="fs-14 fw-400 cr-gray">Berikut syarat dan Ketentuan maskapai Lion Air</div>
                </div>
                <div class="ml-auto">
                  <a-button>Baca Aturan</a-button>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-list-item>
      </a-list>

      <div class="ant-layout--right">
        <a-affix class="ant-affix--fixed-right" :offsetTop="136">
          <div class="ant-affix--container" :style="{ paddingLeft: '8px' }">
            <div class="ant-affix--card">
              <a-card
                class="ant-card--package-information"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsa quae sit velit animi aut esse, exercitationem, voluptatibus ea ipsum minus et adipisci nesciunt expedita! Iste quibusdam aliquam voluptate blanditiis?</a-card>
            </div>
          </div>
        </a-affix>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
