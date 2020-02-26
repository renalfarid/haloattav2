<template>
  <div data="data-content">
    <a-row>
      <a-col :span="24">
        <HeroSearch />
      </a-col>

      <client-only>
        <a-col :span="24">
          <Cities />
        </a-col>

        <a-col :span="24">
          <BannerStar />
        </a-col>

        <a-col :span="24">
          <UmrahCitiesItemTop />
        </a-col>

        <a-col :span="24">
          <UmrahCitiesItemMiddle />
        </a-col>

        <a-col :span="24">
          <UmrahCitiesItemBottom />
        </a-col>

        <a-col :span="24">
          <BannerUmaroh />
        </a-col>

        <a-col :span="24">
          <Categories />
        </a-col>

        <a-col :span="24">
          <Haloummi />
        </a-col>
      </client-only>
    </a-row>
  </div>
</template>

<script>
import HeroSearch from "./HeroSearch";
import Cities from "./Cities";
import BannerStar from "./BannerStar";
import BannerUmaroh from "./BannerUmaroh";
import UmrahCitiesItemTop from "@/components/App/Cities/ItemTop";
import UmrahCitiesItemMiddle from "@/components/App/Cities/ItemMiddle";
import UmrahCitiesItemBottom from "@/components/App/Cities/ItemBottom";
import Categories from "./Categories";
import Haloummi from "./Haloummi";
export default {
  components: {
    HeroSearch,
    Cities,
    BannerStar,
    BannerUmaroh,
    UmrahCitiesItemTop,
    UmrahCitiesItemMiddle,
    UmrahCitiesItemBottom,
    Categories,
    Haloummi
  }
};
</script>
