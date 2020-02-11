<template>
  <div data="data-content">
    <a-row>
      <a-col :span="24">
        <HeroSearch />
      </a-col>

      <a-col :span="24">
        <Cities />
      </a-col>

      <a-col :span="24">
        <BannerStar />
      </a-col>

      <a-col :span="24">
        <UmrahRecommended />
      </a-col>

      <a-col :span="24">
        <UmrahLatest />
      </a-col>

      <a-col :span="24">
        <Categories />
      </a-col>

      <a-col :span="24">
        <Haloummi />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HeroSearch from "./HeroSearch";
import Cities from "./Cities";
import UmrahRecommended from "@/components/contents/catalog/umrah/recommended";
import UmrahLatest from "@/components/contents/catalog/umrah/latest";
import BannerStar from "./BannerStar";
import Categories from "./Categories";
import Haloummi from "./Haloummi";
export default {
  components: {
    HeroSearch,
    Cities,
    UmrahLatest,
    UmrahRecommended,
    BannerStar,
    Categories,
    Haloummi
  }
};
</script>
