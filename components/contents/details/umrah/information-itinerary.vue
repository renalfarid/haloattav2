<template>
  <div>
    <div :style="{ position: 'relative' }">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information">
          <a-row :gutter="16" class="w-100">
            <a-col :span="16">
              <div>
                <h2
                  class="ant-package--information-title fs-20 cr-black fw-500"
                >Informasi Itinerary Program Umrah</h2>
                <div
                  class="ant-package--information-text fs-14 cr-black fw-400"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iste quibusdam consectetur amet consequatur numquam natus a repellendus! Quasi, dolores corporis doloribus velit voluptas quae neque unde aperiam sapiente commodi?</div>
              </div>
            </a-col>
          </a-row>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <a-timeline :style="{marginTop: '16px'}">
            <a-timeline-item>
              <a-row :gutter="16">
                <a-col :span="16">
                  <div class="fs-14 fw-500 cr-black">Hari ke 1</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Jakarta</span> -
                    <span>Jeddah</span>
                  </div>
                  <div
                    class="fs-14 fw-400 cr-black"
                  >Jamaah berkumpul empat (4) jam sebelum berangkat, di terminal Internasional Bandara Soekarno Hatta, proses check in tiket dan bagasi oleh team handling, pembagian buku panduan, id’ card, paspor dan boarding pass, proses Imigrasi, masuk Pesawat, take off menuju Jeddah, tiba di Bandara King Abdul Aziz Jeddah proses Imigrasi dan bagasi, dilanjutkan menuju Madinah.</div>
                </a-col>
              </a-row>
            </a-timeline-item>

            <a-timeline-item>
              <a-row :gutter="16">
                <a-col :span="16">
                  <div class="fs-14 fw-500 cr-black">Hari ke 2</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Madinah</span>
                  </div>
                  <div class="fs-14 fw-400 cr-black">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Tiba di Madinah, check in hotel dan beristirahat. Sholat Subuh berjamaah di Masjid Nabawi, Ba’da sholat subuh ziarah ke Makam Rasulullah SAW serta kedua sahabatnya, Abu Bakar Siddiq dan Umar Bin Khattab, di akhiri ziarah Makam Baqi dan Memperbanyak Ibadah di masjid Nabawi.
                  </div>
                </a-col>
              </a-row>
            </a-timeline-item>

            <a-timeline-item>
              <a-row :gutter="16">
                <a-col :span="16">
                  <div class="fs-14 fw-500 cr-black">Hari ke 3</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Madinah</span>
                  </div>
                  <div class="fs-14 fw-400 cr-black">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Sholat Subuh berjamaah di Masjid Nabawi, Ba’da sholat subuh Ziarah kota Madinah mengunjungi: Masjid Quba, Jabal Uhud, Masjid Qiblatain, Masjid Khandaq di akhiri Pasar Kurma, Memperbanyak Ibadah di masjid Nabawi. Malam hari Jamaah siap berkemas untuk melanjutkan program menuju Makkah.
                  </div>
                </a-col>
              </a-row>
            </a-timeline-item>

            <a-timeline-item>
              <a-row :gutter="16">
                <a-col :span="16">
                  <div class="fs-14 fw-500 cr-black">Hari ke 4</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Madinah</span> -
                    <span>Makkah</span>
                  </div>
                  <div class="fs-14 fw-400 cr-black">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Sholat Subuh berjamaah di Masjid Nabawi, Ba’da sholat subuh Ziarah kota Madinah mengunjungi: Masjid Quba, Jabal Uhud, Masjid Qiblatain, Masjid Khandaq di akhiri Pasar Kurma, Memperbanyak Ibadah di masjid Nabawi. Malam hari Jamaah siap berkemas untuk melanjutkan program menuju Makkah.
                  </div>
                </a-col>
              </a-row>
            </a-timeline-item>

            <a-timeline-item>
              <a-row :gutter="16">
                <a-col :span="16">
                  <div class="fs-14 fw-500 cr-black">Hari ke 5</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Makkah</span>
                  </div>
                  <div class="fs-14 fw-400 cr-black">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Sholat Subuh berjamaah di Masjidil Haram, Memperbanyak Ibadah di Masjidil Haram, (acara bebas).
                  </div>
                </a-col>
              </a-row>
            </a-timeline-item>

            <a-timeline-item>
              <a-row :gutter="16">
                <a-col :span="16">
                  <div class="fs-14 fw-500 cr-black">Hari ke 6</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Makkah</span>
                  </div>
                  <div class="fs-14 fw-400 cr-black">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Sholat Subuh berjamaah di Masjidil Haram, Ba'da Sholat Subuh, Para jamaah berkumpul di lobby hotel untuk mengikuti Ziarah Kota Makkah: Mengunjungi Jabal Tsur, Padang Arafah (Jabal Rahmah) Muzdalifah, Mina, (Jumroh) Jabal Nur dan berakhir di Ja’ronah untuk mengambil Miqot Umroh dilanjutkan Thawaf Sai Umroh (Selesai Umroh II) dan Memperbanyak Ibadah di Masjidil Haram
                  </div>
                </a-col>
              </a-row>
            </a-timeline-item>

            <a-timeline-item>
              <a-row :gutter="16">
                <a-col :span="16">
                  <div class="fs-14 fw-500 cr-black">Hari ke 7</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Makkah</span>
                  </div>
                  <div class="fs-14 fw-400 cr-black">
                    Sarapan Pagi, Makan Siang, Makan Malam
                    <br />Sholat Subuh berjamaah di Masjidil Haram, Memperbanyak Ibadah di Masjidil Haram dan (acara bebas), Malam hari Jamaah siap berkemas untuk melanjutkan program menuju Jeddah.
                  </div>
                </a-col>
              </a-row>
            </a-timeline-item>

            <a-timeline-item>
              <a-row :gutter="16">
                <a-col :span="16">
                  <div class="fs-14 fw-500 cr-black">Hari ke 8</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Makkah</span> -
                    <span>Jeddah</span>
                  </div>
                  <div class="fs-14 fw-400 cr-black">
                    Sarapan Pagi, Makan Siang
                    <br />Sholat Subuh berjamaah di Masjidil Haram, Ba’da sholat subuh, Thawaf Wada’ (Perpisahan) check out hotel, dilanjutkan menuju Jeddah, tiba di Jeddah, city tour kota Jeddah ke Balad / Chorniche, Toko ali murah, Masjid Qisas, Makam Siti Hawa dan Laut Merah, selesai city tour Jeddah, melanjutkan perjalanan ke Bandara King Abdul Aziz Jeddah, tiba di Bandara, proses check in tiket dan bagasi oleh team handling, pembagian paspor dan boarding pass, proses Imigrasi, masuk Pesawat melanjutkan perjalanan menuju Jakarta, take off menuju Jakarta.
                  </div>
                </a-col>
              </a-row>
            </a-timeline-item>

            <a-timeline-item>
              <a-row :gutter="16">
                <a-col :span="16">
                  <div class="fs-14 fw-500 cr-black">Hari ke 9</div>
                  <div class="fs-14 fw-500 cr-black text-uppercase">
                    <span>Jakarta</span>
                  </div>
                  <div
                    class="fs-14 fw-400 cr-black"
                  >Tiba di Jakarta terminal Internasional Bandara Soekarno Hatta keluar Pesawat, proses Imigrasi dan bagasi oleh team handling, pembagian Air zam - zam. Selesai sudah perjalanan Umroh bersama kami Semoga menjadi Umroh yang mabrur.</div>
                </a-col>
              </a-row>
            </a-timeline-item>
          </a-timeline>
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
