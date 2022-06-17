<template>
  <div class=" flex-grow-1 container-fluid  ">
    <div class="row">
      <Blog v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import Pop from "../utils/Pop"; 
import { logger } from "../utils/Logger";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import {blogsService} from "../services/BlogsService"

export default {
    name: "Home",
    // components: { Blog, Modal }, Bad Man Modal
    setup(){
      onMounted( async () => {
       try {
         await blogsService.getAll()
       } catch (error) {
       Pop.toast(error, 'error')
       logger.error(error);
       }
      });

      return {
        blogs: computed(()=> AppState.blogs)
      }
    },
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
