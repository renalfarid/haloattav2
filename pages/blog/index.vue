<template>
  <section>
    <div class="ant-grid">
      <a-row>
        <a-col :span="16">
          <div class="ant-grid-box">
            <div class="ant-grid-large">
              <div class="ant-grid-cover" :style="{ backgroundImage: 'url(/umrah/cover/cu2.jpg)' }">
                <div class="ant-grid-body">
                  <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                  <div class="d-flex align-items-center">
                    <div class="mr-8">
                      <a-tag class="ant-tag-umrah">
                        <nuxt-link to="#">Ragam</nuxt-link>
                      </a-tag>
                    </div>
                    <div class="cr-white">
                      <a-icon type="clock-circle" class="mr-4" />
                      {{moment().fromNow()}}
                    </div>
                  </div>
                </div>
                <div class="gradient" />
              </div>
            </div>
          </div>
        </a-col>
        <a-col :span="8">
          <div class="ant-grid-box">
            <div class="ant-grid-small">
              <div class="ant-grid-cover" :style="{ backgroundImage: 'url(/umrah/cover/cu3.jpg)' }">
                <div class="ant-grid-body">
                  <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                  <div class="d-flex align-items-center">
                    <div class="mr-8">
                      <a-tag class="ant-tag-kajian">
                        <nuxt-link to="#">Kajian</nuxt-link>
                      </a-tag>
                    </div>
                    <div class="cr-white">
                      <a-icon type="clock-circle" class="mr-4" />
                      {{moment().fromNow()}}
                    </div>
                  </div>
                </div>
                <div class="gradient" />
              </div>
            </div>
            <div class="ant-grid-small">
              <div class="ant-grid-cover" :style="{ backgroundImage: 'url(/umrah/cover/cu4.jpg)' }">
                <div class="ant-grid-body">
                  <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                  <div class="d-flex align-items-center">
                    <div class="mr-8">
                      <a-tag class="ant-tag-tips">
                        <nuxt-link to="#">Tips & Trik</nuxt-link>
                      </a-tag>
                    </div>
                    <div class="cr-white">
                      <a-icon type="clock-circle" class="mr-4" />
                      {{moment().fromNow()}}
                    </div>
                  </div>
                </div>
                <div class="gradient" />
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>

    <a-divider orientation="left" class="ant-divider-title-left mb-24">Artikel Terbaru</a-divider>

    <a-list class="ant-list-blog" :grid="{ gutter: 16, column: 4 }" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        <a-card :bordered="false" class="b-shadow b-solid" hoverable>
          <div slot="cover">
            <div class="ant-card-cover-images" :style="{ backgroundImage: `url(${item.images})` }">
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
      </a-list-item>
    </a-list>

     <a-divider orientation="left" class="ant-divider-title-left mb-24">Artikel Lainnya</a-divider>
     <a-list class="ant-list-blog" :grid="{ gutter: 16, column: 4 }" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        <a-card :bordered="false" class="b-shadow b-solid" hoverable>
          <div slot="cover">
            <div class="ant-card-cover-images" :style="{ backgroundImage: `url(${item.images})` }">
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
    datetime: moment().subtract(1, 'days')
  },
  {
    id: 2,
    images: "/umrah/cover/cu6.jpg",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "tips & trik",
    datetime: moment().subtract(1, 'days')
  },
  {
    id: 3,
    images: "/umrah/cover/cu7.jpg",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "kajian",
    datetime: moment().subtract(2, 'days')
  },
  {
    id: 3,
    images: "/umrah/cover/cu8.png",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "informasi",
    datetime: moment().subtract(2, 'days')
  },
  {
    id: 4,
    images: "/umrah/cover/cu9.png",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "tips & trik",
    datetime: moment().subtract(3, 'days')
  },
  {
    id: 5,
    images: "/umrah/cover/cu10.png",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "tips & trik",
    datetime: moment().subtract(4, 'days')
  },
  {
    id: 6,
    images: "/umrah/cover/cu11.png",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "tips & trik",
    datetime: moment().subtract(5, 'days')
  },
  {
    id: 7,
    images: "/umrah/cover/cu12.png",
    title: "Haram Hukumnya Merubah Aturan Yang Sudah Disepakati",
    categories: "tips & trik",
    datetime: moment().subtract(6, 'days')
  }
];
export default {
  layout: "blog",
  name: "blogHaloatta",
  head() {
    return {
      title: "Arah Berita - Haloatta"
    }
  },
  data() {
    return {
      moment,
      data
    };
  }
};
</script>
