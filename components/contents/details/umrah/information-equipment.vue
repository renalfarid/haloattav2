<template>
  <div>
    <a-card class="b-shadow b-solid mb-16">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <!-- if available for data visa -->
        <a-list-item class="ant-list-item--package-information pb-0">
          <div class="w-100">
            <div class="fs-14 fw-400 cr-gray text-uppercase mb-16">Harga Termasuk</div>
            <a-row :gutter="8">
              <a-col :span="8">
                <div class="d-flex align-items-center mb-16">
                  <div>
                    <a-avatar
                      style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;padding: 4px"
                      class="mr-8"
                      src="/icons/search/tabs/color/visa.svg"
                    />
                  </div>
                  <div class="fs-15 fw-400 cr-black f-default">Visa Perjalanan</div>
                </div>
              </a-col>

              <a-col :span="8">
                <div class="d-flex align-items-center mb-16">
                  <div>
                    <a-avatar
                      style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;padding: 4px"
                      class="mr-8"
                      src="/icons/search/tabs/color/insurance.svg"
                    />
                  </div>
                  <div class="fs-15 fw-400 cr-black f-default">Asuransi Perjalanan</div>
                </div>
              </a-col>

              <a-col :span="8">
                <div class="d-flex align-items-center mb-16">
                  <div>
                    <a-avatar
                      style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;padding: 4px"
                      class="mr-8"
                      src="/icons/search/tabs/color/handling.svg"
                    />
                  </div>
                  <div class="fs-15 fw-400 cr-black f-default">Handling Bandara</div>
                </div>
              </a-col>

              <a-col :span="8">
                <div class="d-flex align-items-center mb-16">
                  <div>
                    <a-avatar
                      style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;padding: 4px"
                      class="mr-8"
                      src="/icons/search/tabs/color/manasik.svg"
                    />
                  </div>
                  <div class="fs-15 fw-400 cr-black f-default">Manasik</div>
                </div>
              </a-col>

              <a-col :span="8">
                <div class="d-flex align-items-center mb-16">
                  <div>
                    <a-avatar
                      style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;padding: 4px"
                      class="mr-8"
                      src="/icons/search/tabs/color/equipment.svg"
                    />
                  </div>
                  <div class="fs-15 fw-400 cr-black f-default">Perlengkapan Umrah</div>
                </div>
              </a-col>

              <a-col :span="8">
                <div class="d-flex align-items-center mb-16">
                  <div>
                    <a-avatar
                      style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;padding: 4px"
                      class="mr-8"
                      src="/icons/search/tabs/color/tourleader.svg"
                    />
                  </div>
                  <div class="fs-15 fw-400 cr-black f-default">Tour Leader</div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>
