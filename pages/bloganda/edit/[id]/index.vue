<script setup>
definePageMeta({
  title: "Edit Blog",
});

const paramID = useRoute().params.id;

const form = ref({
  blogTitle: "",
  blogContent: "",
  blogAuthor: "",
  blogTag: "",
});

const { data } = await useFetch("/api/bloganda/edit", {
  method: "GET",
  query: {
    blogID: paramID,
  }
});

if (data.value.statuscode == 200) {
  form.value.blogTitle = data.value.data.blogTitle;
  form.value.blogContent = data.value.data.blogContent;
  form.value.blogAuthor = data.value.data.blogAuthor;
  form.value.blogTag = data.value.data.blogTag;
} else {
  alert("There is no registered ID")
}

const submit = async () => {
  if (form.value.blogTitle == "" || form.value.blogAuthor == "") {
    return;
  } try {
    const { data } = await useFetch("/api/bloganda/edit", {
      method: "POST",
      body: {
        blogID: paramID,
        blogTitle: form.value.blogTitle,
        blogContent: form.value.blogContent,
        blogAuthor: form.value.blogAuthor,
        blogTag: form.value.blogTag,
      }
    });
    if (data.value.statusCode == 200) {
      alert("Success");
    } else {
      alert("Failed");
    }
  } catch (error) {
    return;
  };
};

const showModal = ref(false);

const deleteBlog = async () => {
  if(form.value.blogTitle == "" || form.value.blogAuthor == ""){
    return;
  } try{
    const { data } = await useFetch("/api/bloganda/remove", {
      method: "DELETE"
    });
    if(data.value.statusCode == 200){
      alert("Success");
    } else {
      alert("Failed");
    }
  }catch (error) {
    return;
  }
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
          <FormKit v-model="form.blogTag" type="checkbox" label="Tags" validation="required|max:1" help="Select only one"
            :options="['Project', 'Idea', 'Off']" />
          <rs-button> Submit </rs-button>
        </FormKit>
      </template>
    </rs-card>
  </div>
</template>
      