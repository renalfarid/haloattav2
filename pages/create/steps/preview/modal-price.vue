<template>
  <a-layout :style="{ maxWidth: '1200px', margin: '0 auto' }">
    <a-layout-content class="ant-layout-content--steps-review" :style="{ padding: '24px' }">
      <a-card :bordered="false" class="b-shadow b-radius mb-24">
        <a-row :gutter="32" type="flex" justify="space-between" align="middle">
          <a-col :span="4">
            <img class="max-width m-auto d-block" src="/icons/review.png" />
          </a-col>
          <a-col :span="20">
            <div class="fs-24 fw-500 cr-black">Harga Dasar Paket Umrah</div>
            <div class="fs-16 fw-400 cr-gray">
              <span>Berikut informasi pesanan dan rincian harga dasar paket umrah anda</span>
            </div>
          </a-col>
        </a-row>
      </a-card>
      <!-- <a-divider /> -->
      <a-card :bordered="false" class="b-shadow b-radius mb-24">
        <a-row :gutter="32" type="flex" justify="end">
          <a-col :span="20">
            <div class="fs-18 fw-500 cr-black">Komponen Wajib Paket Umrah</div>
          </a-col>
        </a-row>
        <a-list>
          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32">
                <a-col :span="4" class="fs-15 fw-400 cr-black text-right pt-24">Informasi Dasar</a-col>
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16">
                      <a-col :span="9">
                        <div>
                          <span class="fs-14 fw-400 cr-black">Kota Asal Berangkat</span>
                          <a-divider type="vertical" />
                          <span class="fs-14 fw-500 cr-black">Makassar</span>
                        </div>
                        <div>
                          <span class="fs-14 fw-400 cr-black">Program</span>
                          <a-divider type="vertical" />
                          <span class="fs-14 fw-500 cr-black">9 Hari</span>
                        </div>
                      </a-col>
                      <a-col :span="9">
                        <div>
                          <span class="fs-14 fw-400 cr-black">Berangkat</span>
                          <a-divider type="vertical" />
                          <span class="fs-14 fw-500 cr-black">10 September 2019</span>
                        </div>
                        <div>
                          <span class="fs-14 fw-400 cr-black">Pulang</span>
                          <a-divider type="vertical" />
                          <span class="fs-14 fw-500 cr-black">19 September 2019</span>
                        </div>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box text-center">
                          <div class="fs-14 fw-400 f-default">Jumlah Pax</div>
                          <div class="fs-18 fw-500 f-default">40 Pax</div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>

          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32">
                <a-col :span="4" class="fs-15 fw-400 cr-black text-right pt-24">Maskapai</a-col>
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16" class="mb-24">
                      <a-col :span="18">
                        <div class="d-flex align-items-center w-100">
                          <div class="mr-16">
                            <a-avatar
                              src="https://www.goto-hotel.com/wp-content/uploads/lion-parcel-logo.png"
                            />
                          </div>
                          <div class="fs-16 fw-500 cr-black">Lion Air</div>
                          <div class="fs-16 fw-500 cr-black ml-auto">JT-367</div>
                        </div>

                        <a-row class="mt-16">
                          <a-col :span="8">
                            <div class="d-flex align-items-center w-100">
                              <div class="mr-16">
                                <a-avatar class="p-4" shape="square" src="/icons/package/seat.png" />
                              </div>
                              <div>
                                <div class="fs-13 fw-400 cr-gray f-default">Kelas Kabin</div>
                                <div class="fs-14 fw-500 cr-black f-default">Economy Class</div>
                              </div>
                            </div>
                          </a-col>
                          <a-col :span="8">
                            <div class="d-flex align-items-start w-100">
                              <div class="mr-16">
                                <a-avatar
                                  class="p-4"
                                  shape="square"
                                  src="/icons/package/direction.png"
                                />
                              </div>
                              <div>
                                <div class="fs-13 fw-400 cr-gray f-default">Direct Flight</div>
                                <div class="fs-14 fw-500 cr-black f-default">Langsung</div>
                              </div>
                            </div>
                          </a-col>
                          <a-col :span="8">
                            <div class="d-flex align-items-start w-100">
                              <div class="mr-16">
                                <a-avatar
                                  class="p-4"
                                  shape="square"
                                  src="/icons/package/round_trip.png"
                                />
                              </div>
                              <div>
                                <div class="fs-13 fw-400 cr-gray f-default">Round Trip</div>
                                <div class="fs-14 fw-500 cr-black f-default">Pulang - Pergi</div>
                              </div>
                            </div>
                          </a-col>
                        </a-row>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box text-center">
                          <div class="fs-14 fw-400 f-default">Harga Satuan</div>
                          <div class="fs-18 fw-500 f-default">Rp 12.500.000</div>
                        </div>
                      </a-col>
                    </a-row>

                    <div class="d-flex align-items-start w-100">
                      <div class="mr-16">
                        <a-avatar class="p-4" shape="square" src="/icons/package/airplane.png" />
                      </div>
                      <div class="w-100">
                        <div class="fs-14 fw-500 cr-black mb-8">Info Keberangkatan dan Kepulangan</div>
                        <a-timeline>
                          <a-timeline-item>
                            <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                              <a-col :span="14">
                                <div class="fs-14 fw-400 cr-black">
                                  <span>Keberangkatan : Makassar (UPG) ke Jeddah (JED)</span>
                                </div>
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
                                <div class="fs-14 fw-400 cr-black">
                                  <span>Kepulangan : Jeddah (JED) ke Makassar (UPG)</span>
                                </div>
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
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>

          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32">
                <a-col :span="4" class="fs-15 fw-400 cr-black text-right pt-24">LA Akomodasi</a-col>
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16" class="mb-24">
                      <a-col :span="18">
                        <div class="d-flex align-items-center w-100 mb-16">
                          <div class="mr-16">
                            <a-avatar
                              src="https://communicateonline.me/lvt/wp-content/uploads/2016/10/Logo-Mo%CC%88venpick.png"
                            />
                          </div>
                          <div class="fs-16 fw-500 cr-black">Movenpick Hotels & Resorts</div>
                        </div>

                        <div class="d-flex align-items-center w-100">
                          <div class="mr-16">
                            <a-avatar
                              class="p-4"
                              shape="square"
                              src="/icons/package/binoculars.png"
                            />
                          </div>
                          <div>
                            <div class="fs-13 fw-400 cr-gray f-default">Jarah Hotel</div>
                            <div class="fs-14 fw-500 cr-black f-default">Jarak kurang dari 500 meter</div>
                          </div>
                        </div>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box text-center">
                          <div class="fs-14 fw-400 f-default">Harga Satuan</div>
                          <div class="fs-18 fw-500 f-default">Rp 5.000.000</div>
                        </div>
                      </a-col>
                    </a-row>

                    <div class="d-flex align-items-start w-100">
                      <div class="mr-16">
                        <a-avatar class="p-4" shape="square" src="/icons/package/bedtime.png" />
                      </div>
                      <div class="w-100">
                        <div class="fs-14 fw-500 cr-black mb-8">Durasi Inap</div>
                        <a-timeline>
                          <a-timeline-item>
                            <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                              <a-col :span="8">
                                <div class="fs-14 fw-400 cr-black">Mekkah : Rayyana Ajyad</div>
                                <div class="fs-14 fw-500 cr-black">Menginap</div>
                                <div class="fs-14 fw-400 cr-gray">3 Hari</div>
                              </a-col>
                              <a-col :span="8" class="text-right">
                                <div class="fs-14 fw-500 cr-black">Check In</div>
                                <div class="fs-14 fw-400 cr-gray">Rabu, 10 September 2019</div>
                              </a-col>
                              <a-col :span="8" class="text-right">
                                <div class="fs-14 fw-500 cr-black">Check Out</div>
                                <div class="fs-14 fw-400 cr-gray">Kamis, 20 September 2019</div>
                              </a-col>
                            </a-row>
                          </a-timeline-item>
                          <a-timeline-item>
                            <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                              <a-col :span="8">
                                <div class="fs-14 fw-400 cr-black">Madinah : Pinewood Hotel</div>
                                <div class="fs-14 fw-500 cr-black">Menginap</div>
                                <div class="fs-14 fw-400 cr-gray">3 Hari</div>
                              </a-col>
                              <a-col :span="8" class="text-right">
                                <div class="fs-14 fw-500 cr-black">Check In</div>
                                <div class="fs-14 fw-400 cr-gray">Rabu, 10 September 2019</div>
                              </a-col>
                              <a-col :span="8" class="text-right">
                                <div class="fs-14 fw-500 cr-black">Check Out</div>
                                <div class="fs-14 fw-400 cr-gray">Kamis, 20 September 2019</div>
                              </a-col>
                            </a-row>
                          </a-timeline-item>
                        </a-timeline>
                      </div>
                    </div>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>

          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32">
                <a-col :span="4" class="fs-15 fw-400 cr-black text-right pt-24">Visa Umrah</a-col>
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16">
                      <a-col :span="18">
                        <div class="d-flex align-items-start w-100 mb-16">
                          <div class="mr-16">
                            <a-avatar class="p-4" shape="square" src="/icons/package/visa.png" />
                          </div>
                          <div class="w-100">
                            <div class="fs-13 fw-400 cr-gray f-default">Visa Umrah</div>
                            <div class="fs-14 fw-500 cr-black f-default">Patuna Provider</div>

                            <div class="d-flex align-items-center w-100 mt-16">
                              <div :style="{ width: '300px'}">
                                <div class="fs-14 fw-500 cr-black f-default">Check In</div>
                                <div class="fs-13 fw-400 cr-gray f-default">Patuna Provider</div>
                              </div>
                              <div>
                                <div class="fs-14 fw-500 cr-black f-default">Check Out</div>
                                <div class="fs-13 fw-400 cr-gray f-default">Patuna Provider</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box text-center">
                          <div class="fs-14 fw-400 f-default">Harga Satuan</div>
                          <div class="fs-18 fw-500 f-default">Rp 900.000</div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>

          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32">
                <a-col :span="4" class="fs-15 fw-400 cr-black text-right pt-24">Asuransi Perjalanan</a-col>
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16">
                      <a-col :span="18">
                        <div class="d-flex align-items-start w-100">
                          <div class="mr-16">
                            <a-avatar
                              class="p-4"
                              shape="square"
                              src="/icons/package/insurance.png"
                            />
                          </div>
                          <div class="w-100">
                            <div class="fs-13 fw-400 cr-gray">Asuransi Perjalanan Umrah 9 Hari</div>
                            <div class="fs-14 fw-500 cr-black f-default">Adira Insurance</div>
                          </div>
                        </div>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box text-center">
                          <div class="fs-14 fw-400 f-default">Harga Satuan</div>
                          <div class="fs-18 fw-500 f-default">Rp 100.000</div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>

          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32" type="flex" justify="end">
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16">
                      <a-col :span="18">
                        <div class="d-flex align-items-start w-100">
                          <div class="mr-16">
                            <a-avatar class="p-4" shape="square" src="/icons/package/invoice.png" />
                          </div>
                          <div class="w-100">
                            <div class="fs-14 fw-500 cr-black">Total Harga</div>
                            <div class="fs-13 fw-400 cr-gray f-default">Komponen Wajib</div>
                          </div>
                        </div>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box ant-price--box-invoice text-center">
                          <div class="fs-14 fw-400 f-default">Total Harga</div>
                          <div class="fs-18 fw-500 f-default">Rp 18.500.000</div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>
        </a-list>
      </a-card>

      <a-card :bordered="false" class="b-shadow b-radius mb-24">
        <a-row :gutter="32" type="flex" justify="end">
          <a-col :span="20">
            <div class="fs-18 fw-500 cr-black">Komponen Pilihan Paket Umrah</div>
          </a-col>
        </a-row>

        <a-list>
          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32">
                <a-col :span="4" class="fs-15 fw-400 cr-black text-right pt-24">Handling Domestik</a-col>
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16">
                      <a-col :span="18">
                        <div class="d-flex align-items-start w-100">
                          <div class="mr-16">
                            <a-avatar class="p-4" shape="square" src="/icons/package/trolley.png" />
                          </div>
                          <div class="w-100">
                            <div class="fs-13 fw-400 cr-gray">Handling Domestik Umrah</div>
                            <div class="fs-14 fw-500 cr-black f-default">Hasanuddin Handling</div>
                          </div>
                        </div>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box text-center">
                          <div class="fs-14 fw-400 f-default">Harga Satuan</div>
                          <div class="fs-18 fw-500 f-default">Rp 100.000</div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>

          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32">
                <a-col :span="4" class="fs-15 fw-400 cr-black text-right pt-24">Manasik</a-col>
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16">
                      <a-col :span="18">
                        <div class="d-flex align-items-start w-100">
                          <div class="mr-16">
                            <a-avatar class="p-4" shape="square" src="/icons/package/trolley.png" />
                          </div>
                          <div class="w-100">
                            <a-row type="flex" justify="space-between" align="bottom">
                              <a-col :span="12">
                                <div class="fs-13 fw-400 cr-gray">Manasik Pemantapan</div>
                                <div class="fs-14 fw-500 cr-black f-default">Dunkirk Event Organizer</div>
                              </a-col>
                              <a-col :span="12">
                                <div class="fs-14 fw-500 cr-black f-default mt-16">Paket Standar</div>
                              </a-col>
                            </a-row>
                          </div>
                        </div>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box text-center">
                          <div class="fs-14 fw-400 f-default">Harga Satuan</div>
                          <div class="fs-18 fw-500 f-default">Rp 200.000</div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>

          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32">
                <a-col :span="4" class="fs-15 fw-400 cr-black text-right pt-24">Perlengkapan Umrah</a-col>
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16">
                      <a-col :span="18">
                        <div class="d-flex align-items-start w-100">
                          <div class="mr-16">
                            <a-avatar class="p-4" shape="square" src="/icons/package/suitcase.png" />
                          </div>
                          <div class="w-100">
                            <div class="fs-13 fw-400 cr-gray">Perlengkapan Umrah (1 set)</div>
                            <div class="fs-14 fw-500 cr-black f-default">Subur Jaya</div>
                          </div>
                        </div>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box text-center">
                          <div class="fs-14 fw-400 f-default">Harga Satuan</div>
                          <div class="fs-18 fw-500 f-default">Rp 700.000</div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>

          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32">
                <a-col :span="4" class="fs-15 fw-400 cr-black text-right pt-24">Tour Leader</a-col>
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16">
                      <a-col :span="18">
                        <div class="d-flex align-items-start w-100">
                          <div class="mr-16">
                            <a-avatar
                              class="p-4"
                              shape="square"
                              src="/icons/package/tourleader.png"
                            />
                          </div>
                          <div class="w-100">
                            <a-row type="flex" justify="space-between" align="bottom">
                              <a-col :span="12">
                                <div class="fs-13 fw-400 cr-gray">Tour Leader Umrah</div>
                                <div class="fs-14 fw-500 cr-black f-default">Bpk. Syamsul Alam</div>
                              </a-col>
                              <a-col :span="12">
                                <div class="fs-14 fw-500 cr-black f-default mt-16">Minimal 40 pax</div>
                              </a-col>
                            </a-row>
                          </div>
                        </div>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box text-center">
                          <div class="fs-14 fw-400 f-default">Harga Satuan</div>
                          <div class="fs-18 fw-500 f-default">Rp 500.000</div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>

          <a-list-item>
            <div class="w-100">
              <a-row :gutter="32" type="flex" justify="end">
                <a-col :span="20">
                  <a-card :bordered="false" class="b-shadow b-radius w-100">
                    <a-row :gutter="16">
                      <a-col :span="18">
                        <div class="d-flex align-items-start w-100">
                          <div class="mr-16">
                            <a-avatar class="p-4" shape="square" src="/icons/package/invoice.png" />
                          </div>
                          <div class="w-100">
                            <div class="fs-14 fw-500 cr-black f-default">Total Harga</div>
                            <div class="fs-13 fw-400 cr-gray f-default">Komponen Pilihan</div>
                          </div>
                        </div>
                      </a-col>
                      <a-col :span="6">
                        <div class="ant-price--box ant-price--box-invoice text-center">
                          <div class="fs-14 fw-400 f-default">Total Harga</div>
                          <div class="fs-18 fw-500 f-default">Rp 1.500.000</div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-list-item>
        </a-list>
      </a-card>

      <a-card :bordered="false" class="text-right mb-24" :style="{ padding: '0 40px' }">
        <div class="fs-15 fw-400 cr-gray text-uppercase mb-8">Total Harga Paket Umrah Per Pax</div>
        <div class="fs-30 fw-500 cr-black f-default">Rp 20.000.000</div>
      </a-card>
    </a-layout-content>
  </a-layout>
</template>