<template>
  <a-card class="b-shadow b-solid mb-16">
    <a-list itemLayout="horizontal" class="ant-list--package-information">
      <a-list-item class="ant-list-item--package-information pb-0">
        <a-row>
          <a-col :span="24" class="mb-24" v-for="itenary in data" :key="itenary.id">
            <div class="d-flex align-items-start">
              <div>
                <a-avatar
                  style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                  class="d-flex align-items-center mr-8"
                  :size="64"
                >
                  <div>
                    <div class="fs-12 fw-400 text-uppercase f-default">hari</div>
                    <div class="fs-16 fw-500 text-uppercase f-default">{{itenary.hari_ke}}</div>
                  </div>
                </a-avatar>
              </div>
              <div>
                <div class="fs-15 fw-400 cr-black">
                  <span>{{itenary.deskripsi}}</span>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-list-item>
    </a-list>
  </a-card>
</template>
<script>
export default {
  props: ["data"]
};
</script>
