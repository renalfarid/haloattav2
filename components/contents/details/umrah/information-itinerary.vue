<template>
  <div>
    <div :style="{ position: 'relative' }">
      <a-row :gutter="32">
        <a-col :span="17">
          <a-list itemLayout="horizontal" class="ant-list--package-information">
            <a-list-item class="ant-list-item--package-information">
              <div>
                <h2
                  class="ant-package--information-title fs-20 cr-black fw-500"
                >Informasi Itinerary Program Umrah</h2>
                <div
                  class="ant-package--information-text fs-15 cr-black fw-400"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iste quibusdam consectetur amet consequatur numquam natus a repellendus! Quasi, dolores corporis doloribus velit voluptas quae neque unde aperiam sapiente commodi?</div>
              </div>
            </a-list-item>

            <a-list-item class="ant-list-item--package-information">
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
            </a-list-item>
          </a-list>
        </a-col>

        <a-col :span="7" :style="{margin : '16px 0'}">
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
