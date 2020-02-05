<template>
  <a-card class="b-radius b-solid mt-16">
    <a-list itemLayout="horizontal" class="ant-list--package-information">
      <a-list-item class="ant-list-item--package-information">
        <h2 class="ant-package--information-title fs-20 cr-black fw-500">
          Ulasan Pesanan
        </h2>
      </a-list-item>

      <a-list-item class="ant-list-item--package-information">
        <a-row type="flex" justify="space-between" align="middle" class="w-100">
          <a-col :span="12">
            <div class="d-flex align-items-center w-100">
              <div>
                <a-avatar class="mr-16" :src="tiket.logo_maskapai" />
              </div>
              <div>
                <div class="fs-14 fw-400 cr-gray f-default">
                  Informasi Maskapai
                </div>
                <div class="fs-16 fw-500 cr-black">
                  {{ tiket.nama_maskapai }} - {{ tiket.kode_maskapai }}
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="fs-15 fw-500 cr-black text-right">
              {{ tiket.class_flight }}
            </div>
          </a-col>
        </a-row>
      </a-list-item>

      <a-list-item class="ant-list-item--package-information">
        <div class="d-flex align-items-start w-100">
          <div>
            <a-avatar
              class="mr-16"
              shape="square"
              src="/icons/package/direction.png"
            />
          </div>
          <div>
            <div class="fs-14 fw-400 cr-gray">Direct Flight</div>
            <div class="fs-15 fw-400 cr-black">{{ tiket.jenis_flight }}</div>
          </div>
        </div>
      </a-list-item>

      <a-list-item class="ant-list-item--package-information">
        <div class="d-flex align-items-start w-100">
          <div>
            <a-avatar
              class="mr-16"
              shape="square"
              src="/icons/package/round_trip.png"
            />
          </div>
          <div>
            <div class="fs-14 fw-400 cr-gray">Round Trip</div>
            <div class="fs-15 fw-400 cr-black">
              Tiket termasuk penerbangan keberangkatan dan kepulangan
            </div>
          </div>
        </div>
      </a-list-item>

      <a-list-item class="ant-list-item--package-information">
        <div class="d-flex align-items-start w-100">
          <div>
            <a-avatar shape="square" src="/icons/package/airplane.png" />
          </div>
          <div class="w-100">
            <div class="fs-15 fw-400 cr-black">
              Info Keberangkatan dan Kepulangan
            </div>
            <a-timeline :style="{ marginTop: '16px' }">
              <a-timeline-item>
                <a-row
                  :gutter="16"
                  type="flex"
                  justify="space-between"
                  align="bottom"
                >
                  <a-col :span="14">
                    <div class="fs-15 fw-400 cr-black">
                      Keberangkatan : {{ tiket.bandara_asal }} ({{
                        tiket.kode_bandara_asal
                      }}) ke {{ tiket.bandara_tujuan }} ({{
                        tiket.kode_bandara_tujuan
                      }})
                    </div>
                    <div class="fs-15 fw-500 cr-black">
                      {{ tiket.jam_keberangkatan }}
                    </div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{
                        moment(
                          tiket.tanggal_keberangkatan,
                          "YYYY-MM-DD"
                        ).format("LL")
                      }}
                    </div>
                  </a-col>
                  <a-col :span="4" class="text-center">
                    <div class="fs-15 fw-400 cr-gray">Nonstop</div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{ tiket.durasi_keberangkatan }}
                    </div>
                  </a-col>
                  <a-col :span="6" class="text-right">
                    <div class="fs-15 fw-500 cr-black">
                      {{ tiket.tiba_keberangkatan }}
                    </div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{
                        moment(
                          tiket.tanggal_keberangkatan,
                          "YYYY-MM-DD"
                        ).format("LL")
                      }}
                    </div>
                  </a-col>
                </a-row>
              </a-timeline-item>
              <a-timeline-item>
                <a-row
                  :gutter="16"
                  type="flex"
                  justify="space-between"
                  align="bottom"
                >
                  <a-col :span="14">
                    <div class="fs-15 fw-400 cr-black">
                      Kepulangan : {{ tiket.bandara_tujuan }} ({{
                        tiket.kode_bandara_tujuan
                      }}) ke {{ tiket.bandara_asal }} ({{
                        tiket.kode_bandara_asal
                      }})
                    </div>
                    <div class="fs-15 fw-500 cr-black">
                      {{ tiket.jam_kepulangan }}
                    </div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{
                        moment(tiket.tanggal_kepulangan, "YYYY-MM-DD").format(
                          "LL"
                        )
                      }}
                    </div>
                  </a-col>
                  <a-col :span="4" class="text-center">
                    <div class="fs-15 fw-400 cr-gray">Nonstop</div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{ tiket.durasi_kepulangan }}
                    </div>
                  </a-col>
                  <a-col :span="6" class="text-right">
                    <div class="fs-15 fw-500 cr-black">
                      {{ tiket.tiba_kepulangan }}
                    </div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{
                        moment(tiket.tanggal_kepulangan, "YYYY-MM-DD").format(
                          "LL"
                        )
                      }}
                    </div>
                  </a-col>
                </a-row>
              </a-timeline-item>
            </a-timeline>
          </div>
        </div>
      </a-list-item>

      <a-list-item class="ant-list-item--package-information">
        <a-row type="flex" justify="space-between" align="middle" class="w-100">
          <a-col :span="12">
            <div class="d-flex align-items-center w-100">
              <div>
                <a-avatar
                  class="mr-16"
                  src="https://communicateonline.me/lvt/wp-content/uploads/2016/10/Logo-Mo%CC%88venpick.png"
                />
              </div>
              <div>
                <div class="fs-14 fw-400 cr-gray f-default">
                  Informasi Hotel
                </div>
                <div class="fs-16 fw-500 cr-black">{{ la.nama }}</div>
              </div>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="text-right">
              <div class="fs-14 fw-400 cr-gray">Jarah Hotel</div>
              <div class="fs-15 fw-500 cr-black">
                {{ la.jarak_hotel || "-" }}
              </div>
            </div>
          </a-col>
        </a-row>
      </a-list-item>

      <a-list-item class="ant-list-item--package-information">
        <div class="d-flex align-items-start w-100">
          <div>
            <a-avatar
              class="mr-16"
              shape="square"
              src="/icons/package/bedtime.png"
            />
          </div>
          <div class="w-100">
            <div class="fs-15 fw-400 cr-black">Durasi Inap</div>
            <a-timeline :style="{ marginTop: '16px' }">
              <a-timeline-item>
                <a-row
                  :gutter="16"
                  type="flex"
                  justify="space-between"
                  align="bottom"
                >
                  <a-col :span="8">
                    <div class="fs-15 fw-400 cr-black">
                      Mekkah : {{ umroh.hotel_mekah }}
                    </div>
                    <div class="fs-15 fw-500 cr-black">Menginap</div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{ la.durasi_inap_mekkah }} Hari
                    </div>
                  </a-col>
                  <a-col :span="8" class="text-right">
                    <div class="fs-15 fw-500 cr-black">Check In</div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{ la.checkin_mekah || "-" }}
                    </div>
                  </a-col>
                  <a-col :span="8" class="text-right">
                    <div class="fs-15 fw-500 cr-black">Check Out</div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{ la.checkout_mekah || "-" }}
                    </div>
                  </a-col>
                </a-row>
              </a-timeline-item>
              <a-timeline-item>
                <a-row
                  :gutter="16"
                  type="flex"
                  justify="space-between"
                  align="bottom"
                >
                  <a-col :span="8">
                    <div class="fs-15 fw-400 cr-black">
                      Madinah : {{ umroh.hotel_madinah }}
                    </div>
                    <div class="fs-15 fw-500 cr-black">Menginap</div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{ la.durasi_inap_madinah }} Hari
                    </div>
                  </a-col>
                  <a-col :span="8" class="text-right">
                    <div class="fs-15 fw-500 cr-black">Check In</div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{ la.checkin_madinah || "-" }}
                    </div>
                  </a-col>
                  <a-col :span="8" class="text-right">
                    <div class="fs-15 fw-500 cr-black">Check Out</div>
                    <div class="fs-15 fw-400 cr-gray">
                      {{ la.checkout_madinah || "-" }}
                    </div>
                  </a-col>
                </a-row>
              </a-timeline-item>
            </a-timeline>
          </div>
        </div>
      </a-list-item>

      <a-list-item class="ant-list-item--package-information">
        <a-row type="flex" justify="space-between" align="middle" class="w-100">
          <a-col
            :span="8"
            v-for="perlengkapan in kelengkapan"
            :key="perlengkapan"
          >
            <div class="d-flex align-items-center w-100 mb-8 mt-8">
              <div>
                <a-avatar
                  size="small"
                  shape="square"
                  class="mr-16"
                  src="/icons/package/visa.png"
                />
              </div>
              <div>
                <div class="fs-14 fw-500 cr-black">{{ perlengkapan }}</div>
              </div>
            </div>
          </a-col>
          <!-- <a-col :span="8">
          <div class="d-flex align-items-center w-100 mb-8 mt-8">
            <div>
              <a-avatar
                size="small"
                shape="square"
                class="mr-16"
                src="/icons/package/insurance.png"
              />
            </div>
            <div>
              <div class="fs-14 fw-500 cr-black">Asuransi Perjalanan</div>
            </div>
          </div>
        </a-col>
        <a-col :span="8">
          <div class="d-flex align-items-center w-100 mb-8 mt-8">
            <div>
              <a-avatar size="small" shape="square" class="mr-16" src="/icons/package/trolley.png" />
            </div>
            <div>
              <div class="fs-14 fw-500 cr-black">Handling Domestik</div>
            </div>
          </div>
        </a-col>

        <a-col :span="8">
          <div class="d-flex align-items-center w-100 mb-8 mt-8">
            <div>
              <a-avatar size="small" shape="square" class="mr-16" src="/icons/package/manasik.png" />
            </div>
            <div>
              <div class="fs-14 fw-500 cr-black">Manasik Pemantapan</div>
            </div>
          </div>
        </a-col>

        <a-col :span="8">
          <div class="d-flex align-items-center w-100 mb-8 mt-8">
            <div>
              <a-avatar
                size="small"
                shape="square"
                class="mr-16"
                src="/icons/package/suitcase.png"
              />
            </div>
            <div>
              <div class="fs-14 fw-500 cr-black">Perlengkapan Exclusif</div>
            </div>
          </div>
        </a-col>

        <a-col :span="8">
          <div class="d-flex align-items-center w-100 mb-8 mt-8">
            <div>
              <a-avatar
                size="small"
                shape="square"
                class="mr-16"
                src="/icons/package/tour_guide.png"
              />
            </div>
            <div>
              <div class="fs-14 fw-500 cr-black">Tour Leader</div>
            </div>
          </div>
        </a-col>-->
        </a-row>
      </a-list-item>
    </a-list>
  </a-card>
</template>
<script>
import moment from "moment";
export default {
  props: ["la", "tiket", "umroh", "kelengkapan"],
  data() {
    return {};
  },
  created() {
    this.splitFasilitas();
  },
  methods: {
    splitFasilitas() {
      // this.fasilitas_termasuk = this.data.fasilitas_termasuk.split("<br>");
    },
    moment
  }
};
</script>
