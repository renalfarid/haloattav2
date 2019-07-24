<template>
  <a-layout class="ant-layout--payment">
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <nuxt-link to="/">
          <img src="/haloatta_white.png" />
        </nuxt-link>
      </div>
      <a-steps :current="0" size="small" :style="{ maxWidth: '400px' }">
        <a-step title="Review Pesanan" />
        <a-step title="Pembayaran" />
      </a-steps>
    </a-layout-header>

    <a-spin :spinning="spinning" tip="Loading...">
      <a-layout-content class="ant-layout-content--payment-order">
        <div class="container">
          <a-form layout="vertical">
            <a-row type="flex" justify="space-around" align="middle">
              <a-col :xs="24" :sm="22" :md="20" :lg="16" :xl="16" :xxl="16">
                <div>
                  <div class="fs-24 fw-600 cr-black mb-16">
                    Berikut Review
                    <br />Harga Pembelian Anda
                  </div>

                  <a-list>
                    <a-list-item>
                      <div class="mr-16">
                        <a-avatar style="backgroundColor: #0FACF3" size="small" icon="check" />
                      </div>
                      <div class="w-100">
                        <a class="fs-16 fw-500 f-default cr-black" @click="showScedule">
                          <div class="d-flex align-items-center mt-2">
                            <div>Informasi Keberangkatan</div>
                            <div class="ml-auto">
                              <a-icon
                                class="fs-13 fw-600 cr-primary ml-4"
                                :type="schedule ? 'up' : 'down'"
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </a-list-item>

                    <div v-show="schedule">
                      <a-list-item>
                        <div class="fs-14 fw-400 cr-black w-100">
                          <a-row :gutter="16" class="mb-4">
                            <a-col :span="14">Kota Keberangkatan</a-col>
                            <a-col :span="10" class="text-right">Makassar</a-col>
                          </a-row>
                          <a-row :gutter="16" class="mb-4">
                            <a-col :span="14">Program Hari</a-col>
                            <a-col :span="10" class="text-right">Program 9 Hari</a-col>
                          </a-row>
                          <a-row :gutter="16" class="mb-4">
                            <a-col :span="14">Tanggal Keberangkatan</a-col>
                            <a-col :span="10" class="text-right">20 November 2019</a-col>
                          </a-row>
                          <a-row :gutter="16" class="mb-4">
                            <a-col :span="14">Tanggal Kedatangan</a-col>
                            <a-col :span="10" class="text-right">29 November 2019</a-col>
                          </a-row>
                          <a-row :gutter="16">
                            <a-col :span="14">Jumlah Pax</a-col>
                            <a-col :span="10" class="text-right">40 Pax</a-col>
                          </a-row>
                        </div>
                      </a-list-item>
                    </div>

                    <a-list-item>
                      <div class="mr-16">
                        <a-avatar style="backgroundColor: #0FACF3" size="small" icon="check" />
                      </div>
                      <div class="w-100">
                        <a class="fs-16 fw-500 f-default cr-black" @click="showMandatory">
                          <div class="d-flex align-items-center mt-2">
                            <div>Komponen Wajib</div>
                            <div class="ml-auto">
                              Rp740.000.000
                              <a-icon
                                class="fs-13 fw-600 cr-primary ml-4"
                                :type="mandatory ? 'up' : 'down'"
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </a-list-item>

                    <div v-show="mandatory">
                      <a-list-item>
                        <div class="mr-16">
                          <a-avatar
                            style="backgroundColor: #f5f5f5;padding: 3px"
                            size="small"
                            src="/icons/search/tabs/color/ticket.svg"
                          />
                        </div>
                        <div class="w-100">
                          <div
                            class="text-uppercase fs-13 fw-500 cr-black mb-16 mt-2"
                          >Detail Tiket Group</div>
                          <div class="d-flex align-items-center mb-16">
                            <div class="mr-16">
                              <a-avatar src="/maskapai/logo/liong.svg" />
                            </div>
                            <div class="fs-14 fw-500 cr-black">Lion Air</div>
                            <div class="fs-14 fw-500 cr-black ml-auto">Economy Class</div>
                          </div>
                          <a-timeline>
                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="top">
                                <a-col :span="24">
                                  <div class="fs-14 fw-400 cr-black mb-4">
                                    <span>Keberangkatan : Makassar (UPG) ke Jeddah (JED)</span>
                                  </div>
                                </a-col>
                                <a-col :span="12">
                                  <div class="fs-14 fw-500 cr-black">09:45 AM</div>
                                  <div
                                    class="fs-14 fw-400 cr-gray f-default"
                                  >Kamis, 10 September 2019</div>
                                </a-col>
                                <a-col :span="12" class="text-right">
                                  <div class="fs-14 fw-500 cr-black">14:15 AM</div>
                                  <div
                                    class="fs-14 fw-400 cr-gray f-default"
                                  >Rabu, 10 September 2019</div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>

                            <a-timeline-item>
                              <a-icon slot="dot" type="schedule" style="font-size: 14px;" />
                              <a-row :gutter="8" type="flex" justify="space-between" align="top">
                                <a-col :span="12">
                                  <div class="fs-14 fw-400">Round Trip (Pulang Pergi)</div>
                                </a-col>
                                <a-col :span="12" class="text-right">
                                  <div class="fs-14 fw-400">Direct (Langsung)</div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>
                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="bottom">
                                <a-col :span="24">
                                  <div class="fs-14 fw-400 cr-black mb-4">
                                    <span>Kepulangan : Jeddah (JED) ke Makassar (UPG)</span>
                                  </div>
                                </a-col>
                                <a-col :span="12">
                                  <div class="fs-14 fw-500 cr-black">09:45 AM</div>
                                  <div
                                    class="fs-14 fw-400 cr-gray f-default"
                                  >Kamis, 10 September 2019</div>
                                </a-col>
                                <a-col :span="12" class="text-right">
                                  <div class="fs-14 fw-500 cr-black">14:15 AM</div>
                                  <div
                                    class="fs-14 fw-400 cr-gray f-default"
                                  >Rabu, 19 September 2019</div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>
                          </a-timeline>
                          <a-divider :style="{ margin: '0 0 16px 0' }" />
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Harga Satuan :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">Rp12.500.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Jumlah Pax :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">40 Pax</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-16"
                          >
                            <a-col
                              :span="18"
                              class="text-right fs-16 fw-500 cr-black"
                            >Total Harga Tiket :</a-col>
                            <a-col
                              :span="6"
                              class="text-right fs-16 fw-500 cr-primary"
                            >Rp500.000.000</a-col>
                          </a-row>
                        </div>
                      </a-list-item>

                      <a-list-item>
                        <div class="mr-16">
                          <a-avatar
                            style="backgroundColor: #f5f5f5;padding: 3px"
                            size="small"
                            src="/icons/search/tabs/color/accommodation.svg"
                          />
                        </div>
                        <div class="w-100">
                          <div
                            class="text-uppercase fs-13 fw-500 cr-black mb-16 mt-2"
                          >Detail LA Akomodasi (Hotel)</div>
                          <div class="d-flex align-items-center mb-16">
                            <div class="mr-16">
                              <a-avatar src="/akomodasi/logo/ll1.svg" />
                            </div>
                            <div class="fs-14 fw-500 cr-black">Al Bait Journey</div>
                            <div class="fs-14 fw-400 cr-black ml-auto">Bintang 3 Setaraf</div>
                          </div>
                          <a-timeline>
                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="top">
                                <a-col :span="16">
                                  <div class="fs-14 fw-400 cr-black mb-4">
                                    <span>Mekkah : Rayyana Ajyad Hotel</span>
                                  </div>
                                </a-col>
                                <a-col :span="8" class="text-right">
                                  <div class="fs-14 fw-400 cr-black mb-4">
                                    <span>3 Hari</span>
                                  </div>
                                </a-col>
                              </a-row>

                              <a-row :gutter="8" type="flex" justify="space-between" align="top">
                                <a-col :span="12">
                                  <div class="fs-14 fw-500 cr-black">Check-in</div>
                                  <div
                                    class="fs-14 fw-400 cr-gray f-default"
                                  >Kamis, 10 September 2019</div>
                                </a-col>
                                <a-col :span="12" class="text-right">
                                  <div class="fs-14 fw-500 cr-black">Check-out</div>
                                  <div
                                    class="fs-14 fw-400 cr-gray f-default"
                                  >Rabu, 10 September 2019</div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>

                            <a-timeline-item>
                              <a-icon slot="dot" type="schedule" style="font-size: 14px;" />
                              <a-row :gutter="8" type="flex" justify="space-between" align="middle">
                                <a-col :span="12">
                                  <div class="fs-14 fw-400 f-default">Quad Room (Sekamar Berempat)</div>
                                </a-col>
                                <a-col :span="12" class="text-right">
                                  <div class="fs-14 fw-400 f-default">7 Hari (Durasi Inap)</div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>
                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="bottom">
                                <a-col :span="16">
                                  <div class="fs-14 fw-400 cr-black mb-4">
                                    <span>Madinah : Pinewood Hotel</span>
                                  </div>
                                </a-col>
                                <a-col :span="8" class="text-right">
                                  <div class="fs-14 fw-400 cr-black mb-4">
                                    <span>4 Hari</span>
                                  </div>
                                </a-col>
                              </a-row>
                              <a-row :gutter="8" type="flex" justify="space-between" align="bottom">
                                <a-col :span="12">
                                  <div class="fs-14 fw-500 cr-black">Check-in</div>
                                  <div
                                    class="fs-14 fw-400 cr-gray f-default"
                                  >Kamis, 10 September 2019</div>
                                </a-col>
                                <a-col :span="12" class="text-right">
                                  <div class="fs-14 fw-500 cr-black">Check-out</div>
                                  <div
                                    class="fs-14 fw-400 cr-gray f-default"
                                  >Rabu, 19 September 2019</div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>
                          </a-timeline>
                          <a-divider :style="{ margin: '0 0 16px 0' }" />
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Harga Satuan :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">Rp12.500.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Jumlah Pax :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">40 Pax</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-16"
                          >
                            <a-col
                              :span="18"
                              class="text-right fs-16 fw-500 cr-black"
                            >Total Harga LA Akomodasi :</a-col>
                            <a-col
                              :span="6"
                              class="text-right fs-16 fw-500 cr-primary"
                            >Rp500.000.000</a-col>
                          </a-row>
                        </div>
                      </a-list-item>

                      <a-list-item>
                        <div class="mr-16">
                          <a-avatar
                            style="backgroundColor: #f5f5f5;padding: 3px"
                            size="small"
                            src="/icons/search/tabs/color/visa.svg"
                          />
                        </div>
                        <div class="w-100">
                          <div class="text-uppercase fs-13 fw-500 cr-black mb-16 mt-2">Detail Visa</div>
                          <div class="d-flex align-items-center mb-16">
                            <div class="mr-16">
                              <a-avatar src="/akomodasi/logo/ll1.svg" />
                            </div>
                            <div class="fs-14 fw-500 cr-black">Patuna Provider</div>
                          </div>
                          <a-timeline>
                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="top">
                                <a-col :span="24">
                                  <div class="fs-14 fw-500 cr-black mb-4">
                                    <span>Check-in</span>
                                  </div>
                                  <div class="fs-14 fw-400 cr-black">
                                    <span>Senin, 10 September 2019</span>
                                  </div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>

                            <a-timeline-item>
                              <a-icon slot="dot" type="schedule" style="font-size: 14px;" />
                              <a-row :gutter="8" type="flex" justify="space-between" align="middle">
                                <a-col :span="24">
                                  <div class="fs-14 fw-400 f-default">Progran 9 Hari</div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>

                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="bottom">
                                <a-col :span="24">
                                  <div class="fs-14 fw-500 cr-black mb-4">
                                    <span>Check-out</span>
                                  </div>
                                  <div class="fs-14 fw-400 cr-black">
                                    <span>Jumat, 19 September 2019</span>
                                  </div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>
                          </a-timeline>
                          <a-divider :style="{ margin: '0 0 16px 0' }" />
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Harga Satuan :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">Rp900.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Jumlah Pax :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">40 Pax</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-16"
                          >
                            <a-col
                              :span="18"
                              class="text-right fs-16 fw-500 cr-black"
                            >Total Harga Visa :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-primary">Rp36.000.000</a-col>
                          </a-row>
                        </div>
                      </a-list-item>

                      <a-list-item>
                        <div class="mr-16">
                          <a-avatar
                            style="backgroundColor: #f5f5f5;padding: 3px"
                            size="small"
                            src="/icons/search/tabs/color/insurance.svg"
                          />
                        </div>
                        <div class="w-100">
                          <div
                            class="text-uppercase fs-13 fw-500 cr-black mb-16 mt-2"
                          >Detail Asuransi</div>
                          <div class="d-flex align-items-center mb-16">
                            <div class="mr-16">
                              <a-avatar src="/akomodasi/logo/ll1.svg" />
                            </div>
                            <div class="fs-14 fw-500 cr-black">Adira Insurance</div>
                          </div>
                          <a-timeline>
                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="top">
                                <a-col :span="24">
                                  <div class="fs-14 fw-500 cr-black mb-4">
                                    <span>Keberangkatan</span>
                                  </div>
                                  <div class="fs-14 fw-400 cr-black">
                                    <span>Senin, 10 September 2019</span>
                                  </div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>

                            <a-timeline-item>
                              <a-icon slot="dot" type="schedule" style="font-size: 14px;" />
                              <a-row :gutter="8" type="flex" justify="space-between" align="middle">
                                <a-col :span="24">
                                  <div
                                    class="fs-14 fw-400 f-default"
                                  >Asuransi Perjalanan Umrah (Pulang Pergi)</div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>

                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="bottom">
                                <a-col :span="24">
                                  <div class="fs-14 fw-500 cr-black mb-4">
                                    <span>Kedatangan</span>
                                  </div>
                                  <div class="fs-14 fw-400 cr-black">
                                    <span>Jumat, 19 September 2019</span>
                                  </div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>
                          </a-timeline>
                          <a-divider :style="{ margin: '0 0 16px 0' }" />
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Harga Satuan :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">Rp200.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Jumlah Pax :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">40 Pax</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-16"
                          >
                            <a-col
                              :span="18"
                              class="text-right fs-16 fw-500 cr-black"
                            >Total Harga Asuransi :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-primary">Rp8.000.000</a-col>
                          </a-row>
                        </div>
                      </a-list-item>
                    </div>

                    <a-list-item>
                      <div class="mr-16">
                        <a-avatar style="backgroundColor: #0FACF3" size="small" icon="check" />
                      </div>
                      <div class="w-100">
                        <a class="fs-16 fw-500 f-default cr-black" @click="showAdditional">
                          <div class="d-flex align-items-center mt-2">
                            <div>Komponen Pendukung</div>
                            <div class="ml-auto">
                              Rp60.000.000
                              <a-icon
                                class="fs-13 cr-primary ml-4"
                                :type="additional ? 'up' : 'down'"
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </a-list-item>

                    <div v-show="additional">
                      <a-list-item>
                        <div class="mr-16">
                          <a-avatar
                            style="backgroundColor: #f5f5f5;padding: 3px"
                            size="small"
                            src="/icons/search/tabs/color/handling.svg"
                          />
                        </div>
                        <div class="w-100">
                          <div
                            class="text-uppercase fs-13 fw-500 cr-black mb-16 mt-2"
                          >Handling Domestik</div>
                          <div class="d-flex align-items-center mb-16">
                            <div class="mr-16">
                              <a-avatar src="/akomodasi/logo/ll1.svg" />
                            </div>
                            <div class="fs-14 fw-500 cr-black">Hasanuddin Handling</div>
                            <div class="fs-14 fw-400 cr-black ml-auto">Standar Services</div>
                          </div>
                          <a-timeline>
                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="top">
                                <a-col :span="24">
                                  <div class="fs-14 fw-500 cr-black mb-4">
                                    <span>Keberangkatan</span>
                                  </div>
                                  <div class="fs-14 fw-400 cr-black">
                                    <span>Senin, 10 September 2019</span>
                                  </div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>

                            <a-timeline-item>
                              <a-icon slot="dot" type="schedule" style="font-size: 14px;" />
                              <a-row :gutter="8" type="flex" justify="space-between" align="middle">
                                <a-col :span="24">
                                  <div
                                    class="fs-14 fw-400 f-default"
                                  >Handling Perjalanan Umrah (Pulang Pergi)</div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>

                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="bottom">
                                <a-col :span="24">
                                  <div class="fs-14 fw-500 cr-black mb-4">
                                    <span>Kedatangan</span>
                                  </div>
                                  <div class="fs-14 fw-400 cr-black">
                                    <span>Jumat, 19 September 2019</span>
                                  </div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>
                          </a-timeline>
                          <a-divider :style="{ margin: '0 0 16px 0' }" />
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Harga Satuan :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">Rp100.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Jumlah Pax :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">40 Pax</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-16"
                          >
                            <a-col
                              :span="18"
                              class="text-right fs-16 fw-500 cr-black"
                            >Total Harga Handling :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-primary">Rp4.000.000</a-col>
                          </a-row>
                        </div>
                      </a-list-item>

                      <a-list-item>
                        <div class="mr-16">
                          <a-avatar
                            style="backgroundColor: #f5f5f5;padding: 3px"
                            size="small"
                            src="/icons/search/tabs/color/manasik.svg"
                          />
                        </div>
                        <div class="w-100">
                          <div
                            class="text-uppercase fs-13 fw-500 cr-black mb-16 mt-2"
                          >Manasik Pemantapan</div>
                          <div class="d-flex align-items-center mb-16">
                            <div class="mr-16">
                              <a-avatar src="/akomodasi/logo/ll1.svg" />
                            </div>
                            <div class="fs-14 fw-500 cr-black">Go Bro Event Organizer</div>
                            <div class="fs-14 fw-400 cr-black ml-auto">Standar Services</div>
                          </div>
                          <a-timeline>
                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="top">
                                <a-col :span="24">
                                  <div class="fs-14 fw-500 cr-black mb-4">
                                    <span>Rencana Manasik</span>
                                  </div>
                                  <div class="fs-14 fw-400 cr-black">
                                    <span>Senin, 04 September 2019</span>
                                  </div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>
                          </a-timeline>
                          <a-divider :style="{ margin: '0 0 16px 0' }" />
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Harga Satuan :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">Rp100.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Jumlah Pax :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">40 Pax</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-16"
                          >
                            <a-col
                              :span="18"
                              class="text-right fs-16 fw-500 cr-black"
                            >Total Harga Manasik :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-primary">Rp4.000.000</a-col>
                          </a-row>
                        </div>
                      </a-list-item>

                      <a-list-item>
                        <div class="mr-16">
                          <a-avatar
                            style="backgroundColor: #f5f5f5;padding: 3px"
                            size="small"
                            src="/icons/search/tabs/color/equipment.svg"
                          />
                        </div>
                        <div class="w-100">
                          <div
                            class="text-uppercase fs-13 fw-500 cr-black mb-16 mt-2"
                          >Perlengkapan Umrah</div>
                          <div class="d-flex align-items-center mb-16">
                            <div class="mr-16">
                              <a-avatar src="/akomodasi/logo/ll1.svg" />
                            </div>
                            <div class="fs-14 fw-500 cr-black">PT. Subur Jaya</div>
                            <div class="fs-14 fw-400 cr-black ml-auto">Standar Perlengkapan</div>
                          </div>
                          <a-divider :style="{ margin: '0 0 16px 0' }" />
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Harga Satuan :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">Rp700.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Jumlah Pax :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">40 Pax</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-16"
                          >
                            <a-col
                              :span="18"
                              class="text-right fs-16 fw-500 cr-black"
                            >Total Harga Perlengkapan :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-primary">Rp28.000.000</a-col>
                          </a-row>
                        </div>
                      </a-list-item>

                      <a-list-item>
                        <div class="mr-16">
                          <a-avatar
                            style="backgroundColor: #f5f5f5;padding: 3px"
                            size="small"
                            src="/icons/search/tabs/color/tourleader.svg"
                          />
                        </div>
                        <div class="w-100">
                          <div class="text-uppercase fs-13 fw-500 cr-black mb-16 mt-2">Tour Leader</div>
                          <div class="d-flex align-items-center mb-16">
                            <div class="mr-16">
                              <a-avatar src="/akomodasi/logo/ll1.svg" />
                            </div>
                            <div class="fs-14 fw-500 cr-black">Ustd. Khamaruddin</div>
                            <div
                              class="fs-14 fw-400 cr-black ml-auto"
                            >Tour Leader Umrah (Berpengalaman)</div>
                          </div>
                          <a-timeline>
                            <a-timeline-item>
                              <a-row :gutter="8" type="flex" justify="space-between" align="top">
                                <a-col :span="24">
                                  <div class="fs-14 fw-500 cr-black mb-4">
                                    <span>Rencana Berangkat</span>
                                  </div>
                                  <div class="fs-14 fw-400 cr-black">
                                    <span>Senin, 10 September 2019</span>
                                  </div>
                                </a-col>
                              </a-row>
                            </a-timeline-item>
                          </a-timeline>
                          <a-divider :style="{ margin: '0 0 16px 0' }" />
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Harga Satuan :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">Rp500.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="text-right fs-14 fw-400 cr-gray">Jumlah Pax :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-black">40 Pax</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-16"
                          >
                            <a-col
                              :span="18"
                              class="text-right fs-16 fw-500 cr-black"
                            >Total Harga Tour Leader :</a-col>
                            <a-col :span="6" class="text-right fs-16 fw-500 cr-primary">Rp20.000.000</a-col>
                          </a-row>
                        </div>
                      </a-list-item>
                    </div>

                    <a-list-item>
                      <div class="mr-16">
                        <a-avatar style="backgroundColor: #0FACF3" size="small" icon="check" />
                      </div>
                      <div class="w-100">
                        <a class="fs-16 fw-500 f-default cr-black" @click="showPriceList">
                          <div class="d-flex align-items-center mt-2">
                            <div>Total Tagihan Pembayaran</div>
                            <div class="ml-auto">
                              Rp808.000.000
                              <a-icon
                                class="fs-13 cr-primary ml-4"
                                :type="pricelist ? 'up' : 'down'"
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </a-list-item>

                    <div v-show="pricelist">
                      <a-list-item>
                        <div class="w-100">
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="fs-14 fw-400 cr-black">Subtotal Komponen Wajib</a-col>
                            <a-col :span="6" class="text-right fs-14 fw-500 cr-black">Rp740.000.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col
                              :span="18"
                              class="fs-14 fw-400 cr-black"
                            >Subtotal Komponen Pendukung</a-col>
                            <a-col :span="6" class="text-right fs-14 fw-500 cr-black">60.000.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-8"
                          >
                            <a-col :span="18" class="fs-14 fw-400 cr-black">PPN (1%)</a-col>
                            <a-col :span="6" class="text-right fs-14 fw-500 cr-black">Rp8.000.000</a-col>
                          </a-row>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-around"
                            align="middle"
                            class="mb-16"
                          >
                            <a-col :span="18" class="fs-16 fw-500 cr-black">Total Pembayaran</a-col>
                            <a-col
                              :span="6"
                              class="text-right fs-16 fw-500 cr-primary"
                            >Rp808.000.000</a-col>
                          </a-row>
                        </div>
                      </a-list-item>
                    </div>
                  </a-list>
                </div>
              </a-col>
            </a-row>
          </a-form>
        </div>
      </a-layout-content>

      <a-affix :offsetBottom="0" @change="change">
        <a-card :bordered="false" class="b-shadow b-solid">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :xs="24" :sm="22" :md="20" :lg="14" :xl="14" :xxl="14">
              <a-row type="flex" justify="space-around" align="middle">
                <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" :xxl="12">
                  <div class="fs-14 fw-400 cr-gray f-default">Total Pembayaran</div>
                  <div class="fs-18 fw-600 cr-black f-default">Rp808.000.000</div>
                </a-col>
                <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" :xxl="12">
                  <a-button
                    class="b-radius b-shadow fw-500 cr-primary"
                    size="large"
                    block
                    @click="nextPurchase"
                  >Bayar Sekarang</a-button>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-card>
      </a-affix>
    </a-spin>
  </a-layout>
</template>
<script>
export default {
  layout: "application",
  name: "reviewPesanan",
  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },
  data() {
    return {
      spinning: true,
      schedule: true,
      mandatory: true,
      additional: true,
      pricelist: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.spinning = false;
    }, 3600);
  },
  methods: {
    showScedule() {
      this.schedule = !this.schedule;
    },
    showMandatory() {
      this.mandatory = !this.mandatory;
    },
    showAdditional() {
      this.additional = !this.additional;
    },
    showPriceList() {
      this.pricelist = !this.pricelist;
    },
    showConfirm() {
      this.$confirm({
        centered: true,
        title: "Pesanan Anda sudah benar?",
        content:
          "Anda tidak akan bisa mengubah detail pesanan setelah melanjutkan ke halaman pembayaran. Tetap lanjutkan?",
        okText: "Ya, Lanjutkan",
        cancelText: "Periksa Kembali",
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 3600);
          }).catch(() => console.log("Oops errors!"));
        },
        onCancel() {}
      });
    },
    nextPurchase() {
      this.$router.push("/create/v2/steps/payment/purchase-saldo");
    },
    change(affixed) {
      console.log(affixed)
    }
  }
};
</script>
