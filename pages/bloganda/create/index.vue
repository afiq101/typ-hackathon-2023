<script setup>
definePageMeta({
  title: "Create Blog",
});

const form = ref({
  blogTitle: "",
  blogContent: "",
  blogAuthor: "",
  blogTags: false,
});

</script>
<template>
  <div>
    <rs-card>
      <template #header> New Blog </template>
      <template #body>
        <FormKit type="form" :actions="false" @submit="submit" :incomplete-message="false">
          <FormKit v-model="form.blogTitle" type="text" label="Title Blog" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Give title to your blog, cannot be empty!',
            }">
            <template #label>Blog Name<span class="text-red-500">*</span>
            </template>
          </FormKit>
          <FormKit v-model="form.blogContent" type="textarea" label="Blog Content" rows="10" />
          <FormKit v-model="form.blogAuthor" type="text" label="Blog Author" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Input your name',
            }" />
          <FormKit v-model="form.blogTags" type="checkbox" label="Tags" validation="required|max:1"
            help="Select only one" decorator-icon="ic:baseline-check"
            :options="[{ label: 'Project', value: 1 }, { label: 'Idea', value: 2 }, { label: 'Off Topic', value: 3 }]" />
          <rs-button> Submit </rs-button>
        </FormKit>
      </template>
    </rs-card>
  </div>
</template>
      