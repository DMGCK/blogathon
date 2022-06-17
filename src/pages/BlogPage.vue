<template>

  .<div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>{{activeBlog.title}}</h1>
        <img class="img-fluid elevation-3 my-2 rounded" :src="activeBlog.imgUrl" alt="">
        <h6 v-if="activeBlog.tags[0]" class="fst-italic">{{activeBlog.tags}}</h6>
        <p class="my-3">{{activeBlog.body}}</p>
      </div>
      <div class="col-12">

        <Comment v-for="c in comments" :key="c.id" :comment="c" />
      </div>
    </div>
  </div>
</template>
<script>
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
import { logger } from "../utils/Logger"
import { onMounted, computed } from "vue"
import { blogsService } from "../services/BlogsService"
import Pop from "../utils/Pop"

export default {
  setup() {
    const route = useRoute()


    onMounted(async () => {
      logger.log(AppState.activeBlog, route.params.id)

      try {
        await blogsService.getBlog(route.params.id)
      } catch (error) {
        Pop.toast(error, 'error')
        console.error(error);
      }

    });

    return {
      activeBlog: computed(() => AppState.activeBlog),
      comments: computed(()=> AppState.comments)
    }
  }
}
</script>
<style lang="">
  
</style>