<template>
  <section>
    <div class="fs-16 fw-500 cr-black mb-16 mt-24">Tips & Trik</div>
    <a-list class="ant-list-blog" :grid="{ gutter: 16, column: 4 }" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        <a-skeleton :loading="loading" active>
          <nuxt-link to="/blog/detail">
            <a-card :bordered="false" class="b-shadow b-solid" hoverable>
              <div slot="cover">
                <div
                  class="ant-card-cover-images"
                  :style="{ backgroundImage: `url(${item.images})` }"
                >
                  <div class="haloummi">
                    <img src="/haloummi.png" />
                  </div>
                  <a-tag :class="item.categories">
                    <nuxt-link to="#">{{item.categories}}</nuxt-link>
                  </a-tag>
                </div>
              </div>
              <a-card-meta :title="item.title">
                <template slot="description">
                  <a-icon type="clock-circle" class="mr-4" />
                  {{item.datetime.fromNow()}}
                </template>
              </a-card-meta>
            </a-card>
          </nuxt-link>
        </a-skeleton>
      </a-list-item>
    </a-list>
  </section>
</template>
<script>
import moment from "moment";
const data = [
  {
    id: 1,
    images: "/umrah/cover/cu5.jpg",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "ragam",
    datetime: moment().subtract(1, "days")
  },
  {
    id: 2,
    images: "/umrah/cover/cu6.jpg",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "tips & trik",
    datetime: moment().subtract(1, "days")
  },
  {
    id: 3,
    images: "/umrah/cover/cu7.jpg",
    title: "Hukum Haji Berkali Kali",
    categories: "kajian",
    datetime: moment().subtract(2, "days")
  },
  {
    id: 3,
    images: "/umrah/cover/cu8.png",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "informasi",
    datetime: moment().subtract(2, "days")
  },
  {
    id: 4,
    images: "/umrah/cover/cu9.png",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "tips & trik",
    datetime: moment().subtract(3, "days")
  },
  {
    id: 5,
    images: "/umrah/cover/cu10.png",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "tips & trik",
    datetime: moment().subtract(4, "days")
  },
  {
    id: 6,
    images: "/umrah/cover/cu11.png",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "tips & trik",
    datetime: moment().subtract(5, "days")
  },
  {
    id: 7,
    images: "/umrah/cover/cu12.png",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "tips & trik",
    datetime: moment().subtract(6, "days")
  }
];
export default {
  layout: "blog",
  name: "blogHaloatta",
  head() {
    return {
      title: "Tips & Trik - Haloummi"
    };
  },
  data() {
    return {
      loading: true,
      moment,
      data
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
};
</script>
