<template v-if="blog.published"  lang="">
  <div @click="openDetails" class=" col-md-6 ">
    <div class="m-1 rounded bg-light border border-secondary elevation-1 p-2">
      <h1 class="p-1 m-0 display-4">{{blog.title}}</h1>
      <h3  class="text-secondary fst-italic">{{blog.creator.name}}</h3>
      <img class="img-fluid reasonable-size" :src="blog.imgUrl">
        <p class="mt-3">{{blog.body}}</p>
        <h6 v-if="blog.tags[0]" class="fst-italic text-muted ">{{blog.tags}}</h6>
    </div>

    
  </div>
  <!-- title, body, imgurl, tags, published hasdefault, creatorid -->
</template>


<script>
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { blogsService } from "../services/BlogsService"
import {useRouter} from 'vue-router'

export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();
    return{
      openDetails() { 
        logger.log('calling opendetails')
        // blogsService.setActiveBlog(props.blog)

        router.push({
          name: 'Blog',
          params: {
            id: props.blog.id
          }
        })
        // Modal.getOrCreateInstance(document.getElementById('blog-detail')).show()
        
        
        //set to active
        //open modal
      }

    }
  }
}
</script>


<style  lang="scss">
  

.reasonable-size {
 max-height: 25vh;
}
</style>