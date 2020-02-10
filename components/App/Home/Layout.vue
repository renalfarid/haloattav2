<template>
  <div data="data-content">
    <a-row>
      <a-col :span="24">
        <HeroSearch />
      </a-col>

      <a-col :span="24">
        <UmrahRecommended />
      </a-col>

      <a-col :span="24">
        <UmrahLatest />
      </a-col>

      <a-col :span="24">
        <Banner />
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
import UmrahRecommended from "@/components/contents/catalog/umrah/recommended";
import UmrahLatest from "@/components/contents/catalog/umrah/latest";
import Banner from "./Banner";
import Categories from "./Categories";
import Haloummi from "./Haloummi";
export default {
  components: {
    HeroSearch,
    UmrahLatest,
    UmrahRecommended,
    Banner,
    Categories,
    Haloummi
  }
};
</script>
