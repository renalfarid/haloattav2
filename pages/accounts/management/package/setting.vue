<template>
  <div class="ant-layout--accounts-management">
    <div class="fs-18 fw-500 cr-black">Pengaturan Produk</div>
    <div class="fs-16 fw-400 cr-gray">
      Atur penjualan produk dan
      mulai kembangkan bisnis umrah anda
    </div>

    <a-steps :current="current" class="mt-24 mb-24">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>

    <a-form :form="form">
      <div v-if="current == 0">
        <p class="fs-14 f-default">Atur Margin Paket Umrah Anda</p>
        <a-row :gutter="16">
          <a-col :span="14">
            <a-card class="b-shadow b-radius b-solid">
              <a-form-item>
                <div class="fs-15 fw-500 cr-black f-default mb-8">Harga Dasar (Rp)</div>
                <a-input-number
                  :defaultValue="20000000"
                  :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                  :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                  @change="onChange"
                  style="width: 100%"
                  size="large"
                  disabled
                />
              </a-form-item>
            </a-card>

            <a-divider>
              <a-button type="primary" shape="circle" class="b-shadow b-solid">
                <a-icon type="plus" />
              </a-button>
            </a-divider>

            <a-card class="b-shadow b-radius b-solid">
              <a-form-item>
                <div class="fs-15 fw-500 cr-black f-default mb-8">Jumlah Margin Dalam (%)</div>
                <a-input-number
                  :defaultValue="10"
                  :min="5"
                  :max="40"
                  :formatter="value => `${value}%`"
                  :parser="value => value.replace('%', '')"
                  @change="onChange"
                  style="width: 100%"
                  size="large"
                />
              </a-form-item>

              <a-form-item>
                <div class="fs-15 fw-500 cr-black f-default mb-8">Jumlah Margin Dalam (Rp)</div>
                <a-input-number
                  :defaultValue="2000000"
                  :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                  :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                  @change="onChange"
                  style="width: 100%"
                  size="large"
                  disabled
                />
              </a-form-item>

              <a-button
                class="b-shadow b-radius b-solid d-none"
                type="primary"
                block
                size="large"
              >Terapkan</a-button>
            </a-card>

            <a-divider>
              <a-button type="primary" shape="circle" class="b-shadow b-solid">
                <a-icon
                  style="transform: rotate(-90deg);marginRight: -2px;marginTop: -2px;"
                  type="pause"
                />
              </a-button>
            </a-divider>

            <a-card class="b-shadow b-radius b-solid">
              <div class="fs-16 fw-500 cr-gray mb-16">Harga Jual Paket Umrah Anda</div>
              <a-form-item help="Harga jual Quad Room per Pax">
                <div class="fs-15 fw-500 cr-black f-default mb-8">Quad Room</div>
                <a-input-number
                  :defaultValue="22000000"
                  :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                  :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                  @change="onChange"
                  style="width: 100%"
                  size="large"
                  disabled
                />
              </a-form-item>

              <a-form-item help="Harga jual Triple Room per Pax">
                <div class="fs-15 fw-500 cr-black f-default mb-8">Triple Room</div>
                <a-input-number
                  :defaultValue="22800000"
                  :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                  :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                  @change="onChange"
                  style="width: 100%"
                  size="large"
                  disabled
                />
              </a-form-item>

              <a-form-item help="Harga jual Double Room per Pax">
                <div class="fs-15 fw-500 cr-black f-default mb-8">Double Room</div>
                <a-input-number
                  :defaultValue="24000000"
                  :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                  :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                  @change="onChange"
                  style="width: 100%"
                  size="large"
                  disabled
                />
              </a-form-item>
            </a-card>
          </a-col>

          <a-col :span="10">
            <div class="fs-15 fw-500 cr-gray mt-8 mb-24">Keterangan :</div>
            <div class="d-flex align-items-start mb-24 mt-8">
              <div class="mr-8">
                <a-avatar style="backgroundColor: #05CBB0" icon="snippets" />
              </div>
              <div>
                <div class="fs-15 fw-500 cr-black">Harga Dasar</div>
                <div class="fs-14 fw-400 cr-gray">
                  Harga dasar merupakan harga satuan
                  dari paket umrah yang anda buat
                </div>
              </div>
            </div>

            <div class="d-flex align-items-start mb-24 mt-8">
              <div class="mr-8">
                <a-avatar style="backgroundColor: #05CBB0" icon="snippets" />
              </div>
              <div>
                <div class="fs-15 fw-500 cr-black">Pengaturan Margin</div>
                <div class="fs-14 fw-400 cr-gray">
                  Besaranan margin yang anda masukkan adalah
                  jumlah keuntungan (fee) yang anda peroleh!
                </div>
              </div>
            </div>

            <div class="d-flex align-items-start mb-24 mt-8">
              <div class="mr-8">
                <a-avatar style="backgroundColor: #05CBB0" icon="snippets" />
              </div>
              <div>
                <div class="fs-15 fw-500 cr-black">Harga Jual Paket Umrah</div>
                <div class="fs-14 fw-400 cr-gray">
                  Pengaturan harga quad room, triple room dan double room sesuai dengan margin yang anda tetapkan,
                  Penentuan besaran harga margin untuk quad room secara otomatis akan membentuk harga triple dan
                  double room yang dikalkulasi otomatis oleh system.
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>

      <div v-if="current == 1">
        <p class="fs-14 f-default">Atur Tampilan Paket, Tanggal Publish serta Tanggal Closing</p>
        <a-row :gutter="16">
          <a-col :span="16">
            <a-card class="b-shadow b-radius b-solid mb-16">
              <a-form-item>
                <div class="fs-15 fw-500 cr-black f-default mb-8">Pilih Nama Paket Umrah Anda</div>
                <a-select
                  v-model="name_package"
                  size="large"
                  placeholder="Pilih Nama Paket"
                  style="width: 100%"
                >
                  <a-select-option v-for="names in namesData" :key="names">{{names}}</a-select-option>
                </a-select>
              </a-form-item>

              <a-form-item>
                <div class="fs-15 fw-500 cr-black f-default mb-8">Pilih Gambar Paket Umrah Anda</div>
                <a-radio-group v-model="cover_package" size="large" class="w-100">
                  <a-list :grid="{ gutter: 8, column: 2 }" :dataSource="dataCover">
                    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
                      <a-radio-button class="ant-radio-button-images mb-8" :value="item.cover">
                        <a-card :bordered="false" hoverable>
                          <div slot="cover">
                            <div class="ant-card-cover-item">
                              <div
                                class="ant-card-cover-images"
                                :style="{ backgroundImage: `url(${item.cover})` }"
                              ></div>
                            </div>
                            <div class="hover-checked">
                              <a-icon type="check-circle" theme="filled" />
                            </div>
                          </div>
                        </a-card>
                      </a-radio-button>
                    </a-list-item>
                  </a-list>
                </a-radio-group>
              </a-form-item>

              <a-form-item>
                <div
                  class="fs-15 fw-500 cr-black f-default mb-8"
                >Tentukan Tanggal Publish dan Closing</div>
                <a-row :gutter="8">
                  <a-col :span="12">
                    <a-date-picker
                      :disabledDate="disabledStartDate"
                      :format="dateFormat"
                      v-model="startValue"
                      placeholder="Pilih tanggal publish"
                      @openChange="handleStartOpenChange"
                      size="large"
                      style="width: 100%"
                    />
                  </a-col>

                  <a-col :span="12">
                    <a-date-picker
                      :disabledDate="disabledEndDate"
                      :format="dateFormat"
                      placeholder="Pilih tangal closing"
                      v-model="endValue"
                      :open="endOpen"
                      @openChange="handleEndOpenChange"
                      size="large"
                      style="width: 100%"
                    />
                  </a-col>
                </a-row>
              </a-form-item>

              <div class="m-0">
                <a-alert
                  message="Informasi"
                  description="Untuk tanggal closing kami menyarankan 45 hari kerja sebelum tanggal keberangkatan!"
                  type="warning"
                  showIcon
                />
              </div>
            </a-card>

            <a-card class="b-shadow b-radius b-solid">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  Lihat itinerary atau jadwal perjalanan anda,
                  Seperti tujuan yang akan dikunjungi selama program umrah.
                </div>
                <div class="ml-auto">
                  <a-button
                    class="b-shadow b-radius b-solid cr-primary fw-500 fs-14"
                    size="large"
                    @click="showItinerary"
                  >Lihat Itinerary/Jadwal Perjalanan</a-button>
                </div>
              </div>
            </a-card>
            <!-- show itinerary -->
            <a-drawer
              title="Itinerary/Jadwal Perjalanan Umrah"
              width="520"
              placement="right"
              :closable="false"
              @close="onClose"
              :visible="visibleItinerary"
            >
              <a-timeline :style="{marginTop: '16px'}">
                <a-timeline-item>
                  <div class="fs-15 fw-500 cr-black">Hari ke 1</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>Jakarta</span> -
                    <span>Jeddah</span>
                  </div>
                  <div
                    class="fs-15 fw-400 cr-gray"
                  >Jamaah berkumpul empat (4) jam sebelum berangkat, di terminal Internasional Bandara Soekarno Hatta, proses check in tiket dan bagasi oleh team handling, pembagian buku panduan, id’ card, paspor dan boarding pass, proses Imigrasi, masuk Pesawat, take off menuju Jeddah, tiba di Bandara King Abdul Aziz Jeddah proses Imigrasi dan bagasi, dilanjutkan menuju Madinah.</div>
                </a-timeline-item>

                <a-timeline-item>
                  <div class="fs-15 fw-500 cr-black">Hari ke 2</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>Madinah</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Tiba di Madinah, check in hotel dan beristirahat. Sholat Subuh berjamaah di Masjid Nabawi, Ba’da sholat subuh ziarah ke Makam Rasulullah SAW serta kedua sahabatnya, Abu Bakar Siddiq dan Umar Bin Khattab, di akhiri ziarah Makam Baqi dan Memperbanyak Ibadah di masjid Nabawi.
                  </div>
                </a-timeline-item>

                <a-timeline-item>
                  <div class="fs-15 fw-500 cr-black">Hari ke 3</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>Madinah</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Sholat Subuh berjamaah di Masjid Nabawi, Ba’da sholat subuh Ziarah kota Madinah mengunjungi: Masjid Quba, Jabal Uhud, Masjid Qiblatain, Masjid Khandaq di akhiri Pasar Kurma, Memperbanyak Ibadah di masjid Nabawi. Malam hari Jamaah siap berkemas untuk melanjutkan program menuju Makkah.
                  </div>
                </a-timeline-item>

                <a-timeline-item>
                  <div class="fs-15 fw-500 cr-black">Hari ke 4</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>Madinah</span> -
                    <span>Makkah</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Sholat Subuh berjamaah di Masjid Nabawi, Ba’da sholat subuh Ziarah kota Madinah mengunjungi: Masjid Quba, Jabal Uhud, Masjid Qiblatain, Masjid Khandaq di akhiri Pasar Kurma, Memperbanyak Ibadah di masjid Nabawi. Malam hari Jamaah siap berkemas untuk melanjutkan program menuju Makkah.
                  </div>
                </a-timeline-item>

                <a-timeline-item>
                  <div class="fs-15 fw-500 cr-black">Hari ke 5</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>Makkah</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Sholat Subuh berjamaah di Masjidil Haram, Memperbanyak Ibadah di Masjidil Haram, (acara bebas).
                  </div>
                </a-timeline-item>

                <a-timeline-item>
                  <div class="fs-15 fw-500 cr-black">Hari ke 6</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>Makkah</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Sholat Subuh berjamaah di Masjidil Haram, Ba'da Sholat Subuh, Para jamaah berkumpul di lobby hotel untuk mengikuti Ziarah Kota Makkah: Mengunjungi Jabal Tsur, Padang Arafah (Jabal Rahmah) Muzdalifah, Mina, (Jumroh) Jabal Nur dan berakhir di Ja’ronah untuk mengambil Miqot Umroh dilanjutkan Thawaf Sai Umroh (Selesai Umroh II) dan Memperbanyak Ibadah di Masjidil Haram
                  </div>
                </a-timeline-item>

                <a-timeline-item>
                  <div class="fs-15 fw-500 cr-black">Hari ke 7</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>Makkah</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Sholat Subuh berjamaah di Masjidil Haram, Memperbanyak Ibadah di Masjidil Haram dan (acara bebas), Malam hari Jamaah siap berkemas untuk melanjutkan program menuju Jeddah.
                  </div>
                </a-timeline-item>

                <a-timeline-item>
                  <div class="fs-15 fw-500 cr-black">Hari ke 8</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>Makkah</span> -
                    <span>Jeddah</span>
                  </div>
                  <div class="fs-15 fw-400 cr-gray">
                    Sarapan Pagi, Makan Siang
                    <br />Sholat Subuh berjamaah di Masjidil Haram, Ba’da sholat subuh, Thawaf Wada’ (Perpisahan) check out hotel, dilanjutkan menuju Jeddah, tiba di Jeddah, city tour kota Jeddah ke Balad / Chorniche, Toko ali murah, Masjid Qisas, Makam Siti Hawa dan Laut Merah, selesai city tour Jeddah, melanjutkan perjalanan ke Bandara King Abdul Aziz Jeddah, tiba di Bandara, proses check in tiket dan bagasi oleh team handling, pembagian paspor dan boarding pass, proses Imigrasi, masuk Pesawat melanjutkan perjalanan menuju Jakarta, take off menuju Jakarta.
                  </div>
                </a-timeline-item>

                <a-timeline-item>
                  <div class="fs-15 fw-500 cr-black">Hari ke 9</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>Jakarta</span>
                  </div>
                  <div
                    class="fs-15 fw-400 cr-gray"
                  >Tiba di Jakarta terminal Internasional Bandara Soekarno Hatta keluar Pesawat, proses Imigrasi dan bagasi oleh team handling, pembagian Air zam - zam. Selesai sudah perjalanan Umroh bersama kami Semoga menjadi Umroh yang mabrur.</div>
                </a-timeline-item>
              </a-timeline>
            </a-drawer>
          </a-col>

          <a-col :span="8">
            <a-card class="ant-card-package">
              <div slot="cover">
                <div
                  class="ant-card-cover--images"
                  :style="{ backgroundImage: `url(${cover_package})` }"
                >
                  <div class="ant-card-cover--overlay">
                    <div class="ant-card-cover--overlay-box-radius"></div>
                    <div class="ant-card-cover--overlay-text">
                      <div class="ant-card-cover--overlay-text-title">sisa</div>
                      <div class="ant-card-cover--overlay-text-subtitle">
                        <span>40</span> pax
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a-card-meta>
                <div slot="title">
                  <div class="ant-card-meta-title--top d-flex align-items-center">
                    <div class="ant-card-meta-title--top-left f-default d-flex align-items-center">
                      <a-popover trigger="hover">
                        <template slot="content">
                          <div class="fs-15 fw-500 cr-black">Awaluddin Muhammad Arifatullah</div>
                          <div class="fs-14 fw-400 cr-gray f-default">
                            <a-icon type="safety-certificate" theme="filled" class="cr-green mr-4" />Terverifikasi
                          </div>
                        </template>
                        <a-avatar
                          class="zIndex mr-8"
                          src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png"
                        />
                      </a-popover>

                      <a-popover trigger="hover">
                        <template slot="content">
                          <div class="fs-13 fw-400 cr-black f-default">Maskapai Garuda Indonesia</div>
                        </template>
                        <a-avatar class="zIndex mr-8" src="/maskapai/logo/garuda.svg" />
                      </a-popover>

                      <a-popover trigger="hover">
                        <template slot="content">
                          <a-rate class="fs-14 mb-4" :defaultValue="3" disabled />
                          <div
                            class="fs-13 fw-400 cr-black f-default mb-4"
                          >Mekkah : Hotel Daruttauhid International Mekkah</div>
                          <div
                            class="fs-13 fw-400 cr-black f-default"
                          >Madinah : Hotel Dar Al Eiman International Madinah</div>
                        </template>
                        <a-avatar
                          class="zIndex mr-8"
                          size="small"
                          style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px"
                          src="/icons/search/tabs/color/accommodation.svg"
                        />
                      </a-popover>
                    </div>
                    <div
                      class="ant-card-meta-title--top-right ml-auto fs-14 fw-400 cr-gray"
                    >Program 9 Hari</div>
                  </div>
                  <div class="ant-card-meta-title--package fw-500">{{name_package}}</div>
                </div>

                <div slot="description">
                  <div class="ant-card-meta-description--bottom d-flex align-items-center">
                    <div class="ant-card-meta-description--bottom-left cr-primary ml-auto">
                      <span>Rp22.000.000</span>
                    </div>
                  </div>
                </div>
              </a-card-meta>
              <div class="package-description--more p-24">
                <div class="d-flex align-items-center mb-8">
                  <div class="fs-15 fw-400 cr-black f-default text-ellipsis">Keberangkatan Makassar</div>
                  <div class="text-ellipsis ml-auto">
                    <a-tag>
                      Terbooking
                      <strong>0</strong> seat
                    </a-tag>
                  </div>
                </div>

                <div class="d-flex align-items-center mb-16">
                  <div class="fs-13 fw-400 text-ellipsis">
                    <div class="cr-gray">Keberangkatan</div>
                    <div class="cr-black">10 September 2019</div>
                  </div>
                  <div class="fs-13 fw-400 text-ellipsis text-right ml-auto">
                    <div class="cr-gray">Kedatangan</div>
                    <div class="cr-black">19 September 2019</div>
                  </div>
                </div>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>

      <div v-if="current == 2">
        <p class="fs-14 f-default">Atur Promo atau Diskon Paket Umrah Anda</p>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-card class="b-shadow b-radius b-solid mb-16">
              <a-form-item class="mt-16">
                <div
                  class="fs-15 fw-500 cr-black f-default mb-8"
                >Berapa Jumlah Promo atau Diskon yang Anda mau Terapkan?</div>
                <a-input-number
                  :defaultValue="0"
                  :min="0"
                  :max="50"
                  :formatter="value => `${value}%`"
                  :parser="value => value.replace('%', '')"
                  @change="onChange"
                  style="width: 100%"
                  size="large"
                />
              </a-form-item>

              <a-form-item>
                <div
                  class="fs-15 fw-500 cr-black f-default mb-8"
                >Tentukan Tanggal Aktif dan Berakhir Promo atau Diskon Anda</div>
                <a-row :gutter="8">
                  <a-col :span="12">
                    <a-date-picker
                      :disabledDate="disabledStartDate"
                      :format="dateFormat"
                      v-model="startValue"
                      placeholder="Pilih tanggal aktif promo"
                      @openChange="handleStartOpenChange"
                      size="large"
                      style="width: 100%"
                    />
                  </a-col>

                  <a-col :span="12">
                    <a-date-picker
                      :disabledDate="disabledEndDate"
                      :format="dateFormat"
                      placeholder="Pilih tangal berakhir promo"
                      v-model="endValue"
                      :open="endOpen"
                      @openChange="handleEndOpenChange"
                      size="large"
                      style="width: 100%"
                    />
                  </a-col>
                </a-row>
              </a-form-item>
            </a-card>
          </a-col>
        </a-row>
      </div>

      <a-card class="b-shadow b-radius b-solid mt-16">
        <a-button
          v-if="current < steps.length - 1"
          type="primary"
          size="large"
          @click="next"
        >Simpan & Lanjutkan</a-button>
        <a-button
          v-if="current == steps.length - 1"
          @click="publish"
          class="ant-btn--action b-shadow b-radius b-solid"
          size="large"
        >Simpan & Publish</a-button>
        <span v-if="current>0">
          <a-divider type="vertical" />
          <a-button size="large" @click="prev">Kembali</a-button>
        </span>
      </a-card>
    </a-form>
  </div>
</template>
<script>
import moment from "moment";
const namesData = [
  "Umrah Hemat September 2019",
  "Umrah Exclusive September 2019",
  "Umrah Bareng Artis September 2019"
];
const dataCover = [
  {
    id: 1,
    cover: "/umrah/package/u1.png"
  },
  {
    id: 2,
    cover: "/umrah/package/u2.png"
  },
  {
    id: 3,
    cover: "/umrah/package/u3.png"
  },
  {
    id: 4,
    cover: "/umrah/package/u4.png"
  }
];
export default {
  layout: "accounts",
  name: "mitraManajemenPaketSetting",
  head() {
    return {
      title: "Manajemen Paket Setting - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      dateFormat: "YYYY/MM/DD",
      visibleItinerary: false,
      namesData,
      dataCover,
      name_package: namesData[1],
      cover_package: [],
      current: 0,
      steps: [
        {
          title: "Pengaturan Margin"
        },
        {
          title: "Pengaturan Tampilan"
        },
        {
          title: "Pembuatan Promo atau Diskon"
        }
      ],
      startValue: null,
      endValue: null,
      endOpen: false,
      form: this.$form.createForm(this)
    };
  },

  watch: {
    startValue(val) {
      console.log("startValue", val);
    },
    endValue(val) {
      console.log("endValue", val);
    }
  },

  methods: {
    moment,
    onChange(value) {
      console.log(value);
    },
    disabledStartDate(startValue) {
      return startValue && startValue < moment().endOf("day");
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open;
    },
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    publish() {
      this.form.validateFields(err => {
        if (!err) {
          return this.$router.push("/accounts/management/package");
        }
      });
    },
    showItinerary() {
      this.visibleItinerary = true;
    },
    onClose() {
      this.visibleItinerary = false;
    }
  }
};
</script>