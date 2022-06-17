<template lang="">

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="">
  Launch
</button>

<!-- Modal -->
<div class="modal fade" id="blog-detail" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <!--  -->
      <!--  -->

      <!-- <template #blogDetail> No Post Yet</template> -->
      <slot name="blogDetail">
        <!--  -->
        <!--  -->
      </slot>

    </div>
  </div>
</div>



</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  
</style>