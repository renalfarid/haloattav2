<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information">
    <a-list-item class="ant-list-item--package-information">
      <div>
        <h2 class="ant-package--information-title fs-20 cr-black fw-500">Ulasan Pesanan</h2>
        <div
          class="ant-package--information-text fs-15 cr-black fw-400"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iste quibusdam consectetur amet consequatur numquam natus a repellendus! Quasi, dolores corporis doloribus velit voluptas quae neque unde aperiam sapiente commodi</div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <a-row type="flex" justify="space-between" align="middle" class="w-100">
        <a-col :span="12">
          <div class="d-flex align-items-center w-100">
            <div>
              <a-avatar
                class="mr-16"
                src="https://www.goto-hotel.com/wp-content/uploads/lion-parcel-logo.png"
              />
            </div>
            <div>
              <div class="fs-14 fw-400 cr-gray f-default">Informasi Maskapai</div>
              <div class="fs-16 fw-500 cr-black">Lion Air - JT-367</div>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="fs-15 fw-500 cr-black text-right">Economy Class</div>
        </a-col>
      </a-row>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar class="mr-16" shape="square" src="/icons/package/direction.png" />
        </div>
        <div>
          <div class="fs-14 fw-400 cr-gray">Direct Flight</div>
          <div class="fs-15 fw-400 cr-black">Penerbangan Langsung Tanpa Transit</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar class="mr-16" shape="square" src="/icons/package/round_trip.png" />
        </div>
        <div>
          <div class="fs-14 fw-400 cr-gray">Round Trip</div>
          <div class="fs-15 fw-400 cr-black">Tiket termasuk penerbangan keberangkatan dan kepulangan</div>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar shape="square" src="/icons/package/airplane.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-400 cr-black">Info Keberangkatan dan Kepulangan</div>
          <a-timeline :style="{marginTop: '16px'}">
            <a-timeline-item>
              <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                <a-col :span="14">
                  <div class="fs-15 fw-400 cr-black">Keberangkatan : Makassar (UPG) ke Jeddah (JED)</div>
                  <div class="fs-15 fw-500 cr-black">09:45 AM</div>
                  <div class="fs-15 fw-400 cr-gray">Kamis, 10 September 2019</div>
                </a-col>
                <a-col :span="4" class="text-center">
                  <div class="fs-15 fw-400 cr-gray">Nonstop</div>
                  <div class="fs-15 fw-400 cr-gray">10h45m</div>
                </a-col>
                <a-col :span="6" class="text-right">
                  <div class="fs-15 fw-500 cr-black">14:15 AM</div>
                  <div class="fs-15 fw-400 cr-gray">Rabu, 10 September 2019</div>
                </a-col>
              </a-row>
            </a-timeline-item>
            <a-timeline-item>
              <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                <a-col :span="14">
                  <div class="fs-15 fw-400 cr-black">Kepulangan : Jeddah (JED) ke Makassar (UPG)</div>
                  <div class="fs-15 fw-500 cr-black">09:45 AM</div>
                  <div class="fs-15 fw-400 cr-gray">Kamis, 10 September 2019</div>
                </a-col>
                <a-col :span="4" class="text-center">
                  <div class="fs-15 fw-400 cr-gray">Nonstop</div>
                  <div class="fs-15 fw-400 cr-gray">10h45m</div>
                </a-col>
                <a-col :span="6" class="text-right">
                  <div class="fs-15 fw-500 cr-black">14:15 AM</div>
                  <div class="fs-15 fw-400 cr-gray">Rabu, 10 September 2019</div>
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
              <div class="fs-14 fw-400 cr-gray f-default">Informasi Hotel</div>
              <div class="fs-16 fw-500 cr-black">Movenpick Hotels & Resorts</div>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="text-right">
            <div class="fs-14 fw-400 cr-gray">Jarah Hotel</div>
            <div class="fs-15 fw-500 cr-black">Jarak kurang dari 500 meter</div>
          </div>
        </a-col>
      </a-row>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="d-flex align-items-start w-100">
        <div>
          <a-avatar class="mr-16" shape="square" src="/icons/package/bedtime.png" />
        </div>
        <div class="w-100">
          <div class="fs-15 fw-400 cr-black">Durasi Inap</div>
          <a-timeline :style="{marginTop: '16px'}">
            <a-timeline-item>
              <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                <a-col :span="8">
                  <div class="fs-15 fw-400 cr-black">Mekkah : Rayyana Ajyad</div>
                  <div class="fs-15 fw-500 cr-black">Menginap</div>
                  <div class="fs-15 fw-400 cr-gray">3 Hari</div>
                </a-col>
                <a-col :span="8" class="text-right">
                  <div class="fs-15 fw-500 cr-black">Check In</div>
                  <div class="fs-15 fw-400 cr-gray">Rabu, 10 September 2019</div>
                </a-col>
                <a-col :span="8" class="text-right">
                  <div class="fs-15 fw-500 cr-black">Check Out</div>
                  <div class="fs-15 fw-400 cr-gray">Kamis, 20 September 2019</div>
                </a-col>
              </a-row>
            </a-timeline-item>
            <a-timeline-item>
              <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                <a-col :span="8">
                  <div class="fs-15 fw-400 cr-black">Madinah : Pinewood Hotel</div>
                  <div class="fs-15 fw-500 cr-black">Menginap</div>
                  <div class="fs-15 fw-400 cr-gray">3 Hari</div>
                </a-col>
                <a-col :span="8" class="text-right">
                  <div class="fs-15 fw-500 cr-black">Check In</div>
                  <div class="fs-15 fw-400 cr-gray">Rabu, 10 September 2019</div>
                </a-col>
                <a-col :span="8" class="text-right">
                  <div class="fs-15 fw-500 cr-black">Check Out</div>
                  <div class="fs-15 fw-400 cr-gray">Kamis, 20 September 2019</div>
                </a-col>
              </a-row>
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <a-row type="flex" justify="space-between" align="middle" class="w-100">
        <a-col :span="8">
          <div class="d-flex align-items-center w-100 mb-8 mt-8">
            <div>
              <a-avatar size="small" shape="square" class="mr-16" src="/icons/package/visa.png" />
            </div>
            <div>
              <div class="fs-14 fw-500 cr-black">Visa Umrah</div>
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
        </a-col>
      </a-row>
    </a-list-item>
  </a-list>
</template>
