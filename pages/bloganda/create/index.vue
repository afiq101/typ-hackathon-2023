<script setup>
definePageMeta({
  title: "Create Blog",
});

const tagOptions = ["Project", "Idea", "Off Topic",];

const form = ref({
  blogName: "",
  blogContent: "",
  blogAuthor: "",
  blogTag: "",
});

const submit = async () => {
  if (form.value.blogName == "" || form.value.blogContent == "") {
    return;
  }
  try {
    const { data } = await useFetch("/api/bloganda/create", {
      method: "POST",
      body: {
        blogName: form.value.blogName,
        blogContent: form.value.blogContent,
        blogAuthor: form.value.blogAuthor,
        blogTag: form.value.blogTag,
      },
    });

    if (data.value.statusCode == 200) {
      alert("Success");
      window.location.href = `/bloganda`;
    } else {
      alert("Failed");
    }
  } catch (error) {
    return;
  }
};

// function submit() {
//   console.log(form.value);
// }
</script>
<template>
  <div>
    <rs-card>
      <template #header> New Blog </template>
      <template #body>
        <FormKit type="form" :actions="false" @submit="submit" :incomplete-message="false">
          <FormKit v-model="form.blogName" type="text" label="Title Blog" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Blog title cannot be empty.',
            }">
            <template #label>Blog Name</template>
          </FormKit>
          <FormKit v-model="form.blogContent" type="textarea" label="Blog Content" rows="10" />
          <FormKit v-model="form.blogAuthor" type="text" label="Blog Author" validation="required"
            validation-visibility="dirty" :validation-messages="{
              required: 'Input your name',
            }" />
          <FormKit v-model="form.blogTag" type="radio" label="Tags" validation="required" help="Select only one"
            :options="tagOptions" validation-visibility="dirty" />
          <rs-button> Submit </rs-button>
        </FormKit>
      </template>
    </rs-card>
  </div>
</template>
