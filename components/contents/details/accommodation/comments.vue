<template>
  <a-list class="comment-list" itemLayout="horizontal" :dataSource="data">
    <div slot="header">
      <div class="d-flex align-items-center">
        <div class="fs-16 fw-500 cr-black mr-16">{{data.length}} Ulasan</div>
        <a-rate class="fs-16" :defaultValue="2" disabled />
      </div>

      <a-divider></a-divider>

      <a-row :gutter="24" class="mb-16 w-100">
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="fs-14 fw-500 cr-black mr-16">Komunikasi</div>
            <a-rate class="ml-auto fs-14" :defaultValue="3" disabled />
          </div>
        </a-col>
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="fs-14 fw-500 cr-black mr-16">Kedisiplinan</div>
            <a-rate class="ml-auto fs-14" :defaultValue="4" disabled />
          </div>
        </a-col>
      </a-row>

      <a-row :gutter="24" class="mb-16 w-100">
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="fs-14 fw-500 cr-black mr-16">Pelayanan</div>
            <a-rate class="ml-auto fs-14" :defaultValue="5" disabled />
          </div>
        </a-col>
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="fs-14 fw-500 cr-black mr-16">Nilai</div>
            <a-rate class="ml-auto fs-14" :defaultValue="5" disabled />
          </div>
        </a-col>
      </a-row>
    </div>

    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-comment :avatar="item.avatar">
        <p slot="author" class="fs-14 cr-black">{{item.author}}</p>
        <p slot="content" class="fs-14 cr-gray">{{item.content}}</p>
        <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
          <span class="fs-12 text-right">{{item.datetime.fromNow()}}</span>
        </a-tooltip>
      </a-comment>
    </a-list-item>
  </a-list>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      data: [
        {
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: moment().subtract(1, "days")
        },
        {
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: moment().subtract(2, "days")
        }
      ],
      moment
    };
  }
};
</script>
