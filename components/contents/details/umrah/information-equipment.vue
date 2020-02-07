<template>
  <div>
    <a-card class="b-shadow b-solid mb-16">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <!-- if available for data visa -->
        <a-list-item class="ant-list-item--package-information pb-0">
          <div class="w-100">
            <div class="fs-14 fw-400 cr-gray text-uppercase mb-16">Harga Termasuk</div>
            <a-row :gutter="16">
              <a-col :xs="24" :sm="12" :md="12" :lg="8" class="mb-16" v-for="fasilitas in data" :key="fasilitas">
                <div class="d-flex align-items-center">
                  <div>
                    <a-avatar
                      style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;padding: 4px"
                      class="mr-8"
                      src="/icons/search/tabs/color/visa.svg"
                    />
                  </div>
                  <div class="fs-15 fw-400 cr-black f-default">{{fasilitas}}</div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>
<script>
export default {
  props: ["data"]
};
</script>
