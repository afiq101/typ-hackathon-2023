<script setup>
definePageMeta({
  title: "Edit Blog",
});

const form = ref({
  blogTitle: "",
  blogContent: "",
  blogAuthor: "Haikal",
  blogTags: false,
});

const submit = () => {
  if (form.value.bookName == "" || form.value.bookAuthor == "") {
    return;
  }
  console.log(form.value);
};

const showModal = ref(false);

const deleteBlog = () => {

};
</script>
<template>
  <div>
    <rs-card>
      <template #header> New Blog </template>
      <template #body>
      <rs-button class="float right" @click="showModal = true">Delete Blog</rs-button>
      <rs-modal title="Delete Blog" :ok-callback="deleteBlog" v-model="showModal" ok-title="Proceed">
        Are you sure to delete the blog?
      </rs-modal>
        <FormKit type="form" :actions="false" @submit="submit" :incomplete-message="false">
          <FormKit v-model="form.blogTitle" type="text" label="Title Blog" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Title cannot be empty!',
            }">
            <template #label>Blog Name<span class="text-red-500">*</span>
            </template>
          </FormKit>
          <FormKit v-model="form.blogContent" type="textarea" label="Blog Content" rows="10" />
          <FormKit disabled v-model="form.blogAuthor" type="text" label="Blog Author" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Input your name',
            }" />
          <FormKit v-model="form.blogTags" type="checkbox" label="Tags" validation="required|max:1" help="Select only one"
            :options="['Project', 'Idea', 'Off']" />
          <rs-button> Submit </rs-button>
        </FormKit>
      </template>
    </rs-card>
  </div>
</template>
      