<template>
  <section class="pt-16 pb-16">
    <a-row :gutter="24">
      <a-col :span="16">
        <div class="ant-card-detail">
          <div
            class="ant-card-detail-images"
            :style="{ backgroundImage: 'url(/umrah/cover/cu4.jpg)' }"
          ></div>

          <div class="ant-card-detail-body b-shadow">
            <a-row :gutter="8" type="flex" justify="space-around" align="middle" class="mb-16">
              <a-col :span="20">
                <div class="fs-24 fw-500 cr-black f-default">
                  Inilah Hukumnya Haji Berkali Kali
                  Menurut Hadits dan Para Ulama
                </div>
              </a-col>
              <a-col :span="4" class="text-right">
                <a-tooltip title="Like">
                  <a-avatar class="mr-8" style="backgroundColor: rgba(244, 54, 98, .1)">
                    <a-icon
                      class="cr-red"
                      type="heart"
                      :theme="action === 'liked' ? 'filled' : 'outlined'"
                      @click="like"
                    />
                  </a-avatar>
                </a-tooltip>
                <a-tooltip title="Share">
                  <a-avatar style="backgroundColor: rgba(255, 124, 0, .1)" @click="share">
                    <a-icon class="cr-orange" type="link" />
                  </a-avatar>
                </a-tooltip>
              </a-col>
            </a-row>

            <div class="fs-14 fw-400" style="color: #999">
              10 dilihat
              <a-divider type="vertical" />
              {{likes}} Suka
            </div>

            <a-divider></a-divider>

            <div class="d-flex align-items-center mb-16">
              <div class="mr-16">
                <a-avatar
                  style="backgroundColor: rgba(15, 172, 243, .1);color: #0FACF3"
                  icon="coffee"
                />
              </div>
              <div>
                <div class="fs-15 fw-500 text-uppercase cr-black f-default">Haloatta</div>
                <div class="fs-13" style="color: #999">
                  Diunggah
                  <span>5 Agustus 2019</span>
                </div>
              </div>
              <div class="ml-auto">
                <a-tag class="ragam">
                  <nuxt-link to="#">Ragam</nuxt-link>
                </a-tag>
              </div>
            </div>

            <a-divider></a-divider>

            <div class="ant-card-detail-body-text fs-15 cr-black mb-16">
              <p>
                Ibadah haji yang wajib dilakukan oleh seorang Muslim mukallaf adalah satu kali.
                Sementara, ibadah haji yang kedua dan seterusnya sudah terhitung sebagai ibadah
                sunah atau nafilah. Memang benar ibadah haji nafilah atau ibadah nafilah apapun
                termasuk amal yang disukai oleh Allah dan bisa mendekatkan diri kepada-Nya.
                Hanya saja dalam mengerjakan ibadah nafilah, terutama haji yang kedua dan seterusnya,
                ada beberapa rambu yang perlu diperhatikan:
              </p>
              <ol>
                <li>
                  Ibadah nafilah hanya diterima sesudah yang wajib diterima.
                  Karena itu, ibadah haji tathawwu atau nafilah ini baru diterima jika kewajiban lainnya terpenuhi.
                  Misalnya membayar zakat, hutang, dsb.
                </li>
                <li>
                  Allah tidak menerima sebuah amal sunnah jika mengakibatkan perbuatan terlarang.
                  Misalnya jika jumlah orang yang melakukan ibadah haji sunnah demikian banyak
                  sehingga membuat berdesakan, serta mengganggu atau mencelakakan orang yang
                  melakukan ibadah haji wajib. Hal ini tentu saja tidak dapat dibenarkan.
                </li>
                <li>
                  Pintu untuk melakukan amal shaleh bagi setiap Muslim masih banyak.
                  Orang beriman yang berpandangan tajam dan berpikiran jernih bisa memilih mana amal
                  yang lebih cocok, lebih tepat, dan lebih bermanfaat bagi dirinya dan masyarakat.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="ant-card-detail-side">
          <div class="fs-16 fw-500 fc-black mb-8">Berita Terkait</div>
          <a-list itemLayout="horizontal" :dataSource="data">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-skeleton :loading="loading" active avatar>
                <nuxt-link to="/blog/detail" :style="{ width: '100%' }">
                  <a-row :gutter="16">
                    <a-col :span="8">
                      <div
                        class="ant-list-item-images"
                        :style="{ backgroundImage: `url(${item.images})` }"
                      ></div>
                    </a-col>
                    <a-col :span="16">
                      <div class="ant-list-title mb-4">{{item.title}}</div>
                      <div class="ant-list-author mb-4">{{item.author}}</div>
                      <div class="ant-list-see">{{item.see}} dilihat</div>
                    </a-col>
                  </a-row>
                </nuxt-link>
              </a-skeleton>
            </a-list-item>
          </a-list>
          <a-divider></a-divider>
          <div class="fs-16 fw-500 fc-black mb-8">Berita Lainnya</div>
          <a-list itemLayout="horizontal" :dataSource="data">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-skeleton :loading="loading" active avatar>
                <nuxt-link to="/blog/detail" :style="{ width: '100%' }">
                  <a-row :gutter="16">
                    <a-col :span="8">
                      <div
                        class="ant-list-item-images"
                        :style="{ backgroundImage: `url(${item.images})` }"
                      ></div>
                    </a-col>
                    <a-col :span="16">
                      <div class="ant-list-title mb-4">{{item.title}}</div>
                      <div class="ant-list-author mb-4">{{item.author}}</div>
                      <div class="ant-list-see">{{item.see}} dilihat</div>
                    </a-col>
                  </a-row>
                </nuxt-link>
              </a-skeleton>
            </a-list-item>
          </a-list>
        </div>
      </a-col>
    </a-row>
    <!-- show modal share -->
    <a-modal
      title="Bagikan ke Teman Kamu"
      centered
      :width="420"
      :visible="visible"
      @cancel="handleCancel"
      :footer="false"
    >
      <a-row :gutter="8" class="mb-16">
        <a-col :span="12">
          <vue-goodshare-facebook
            style="width: 100%;display: block;text-align: center"
            class="b-shadow"
            page_url="https://beta.haloatta.com/blog/detail"
            title_social="Facebook"
            has_icon
          ></vue-goodshare-facebook>
        </a-col>
        <a-col :span="12">
          <vue-goodshare-twitter
            style="width: 100%;display: block;text-align: center"
            class="b-shadow"
            page_url="https://beta.haloatta.com/"
            title_social="Twitter"
            has_icon
          ></vue-goodshare-twitter>
        </a-col>
      </a-row>

      <div class="fs-14 fw-500 cr-black mb-8">Salin tautan artikel</div>
      <a-input-search v-model="url" disabled>
        <a-button
          slot="enterButton"
          v-clipboard:copy="url"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >Salin</a-button>
      </a-input-search>
    </a-modal>
  </section>
</template>
<script>
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
const data = [
  {
    title:
      "Tips Umrah Pertama Kali Tips Umrah Pertama Kali Tips Umrah Pertama Kali Tips Umrah Pertama Kali Tips Umrah Pertama Kali",
    images: "/umrah/cover/cu15.png",
    author: "Haloatta",
    see: "8"
  },
  {
    title: "Tempat Mustajab Berdoa di Tanah Suci",
    images: "/umrah/cover/cu16.png",
    author: "Haloatta",
    see: "120"
  },
  {
    title: "Tempat Mustajab Berdoa di Tanah Suci",
    images: "/umrah/cover/cu17.png",
    author: "Haloatta",
    see: "2"
  },
  {
    title: "Tempat Mustajab Berdoa di Tanah Suci",
    images: "/umrah/cover/cu18.png",
    author: "Haloatta",
    see: "0"
  }
];
export default {
  layout: "blog",
  name: "blogDetailHaloatta",
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.meta.description
        },
        { hid: "og:type", property: "og:type", content: this.meta.type },
        { hid: "og:title", property: "og:title", content: this.meta.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.meta.description
        },
        { hid: "og:image", property: "og:image", content: this.meta.image }
      ]
    };
  },
  data() {
    return {
      url: "https://beta.haloatta.com/blog/detail/name_article_here",
      loading: true,
      visible: false,
      likes: 0,
      action: null,
      data,
      meta: {
        title: "Tempat Mustajab Berdoa di Tanah Suci",
        description:
          "Ibadah haji yang wajib dilakukan oleh seorang Muslim mukallaf adalah satu kali. Sementara, ibadah haji yang kedua dan seterusnya sudah terhitung sebagai ibadah sunah atau nafilah.",
        type: "article",
        image: "/umrah/cover/cu18.png"
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  methods: {
    share() {
      this.visible = true;
    },
    handleCancel(e) {
      this.visible = false;
    },
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = "liked";
    },
    onCopy: function(e) {
      this.$message.success("Berhasil menyalin tautan artikel!");
    },
    onError: function(e) {
      this.$message.success("Gagal menyalin tautan artikel!");
    }
  },
  components: {
    VueGoodshareFacebook,
    VueGoodshareTwitter
  }
};
</script>
