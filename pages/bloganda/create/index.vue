<script setup>
definePageMeta({
  title: "Create Blog",
});

const form = ref({
  blogName: "",
  blogContent: "",
  blogAuthor: "",
  blogTag: "",
});

const submit = async () => {
  if (form.value.blogName == "" || form.value.blogAuthor == "" || form.value.blogContent == "" || form.value.blogTag == "") {
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
      window.location.href = `/bloganda`; //ada github cop
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
        <FormKit
          type="form"
          :actions="false"
          @submit="submit"
          :incomplete-message="false"
        >
          <FormKit
            v-model="form.blogName"
            type="text"
            label="Title Blog"
            validation="required"
            validation-visibility="dirty"
            :validation-messages="{
              required: 'Blog title cannot be empty.',
            }"
          >
            <template #label
              >Blog Name<span class="text-red-500">*</span>
            </template>
          </FormKit>
          <FormKit
            v-model="form.blogContent"
            type="textarea"
            label="Blog Content"
            rows="10"
          />
          <FormKit
            v-model="form.blogAuthor"
            type="text"
            label="Blog Author"
            validation="required"
            validation-visibility="dirty"
            :validation-messages="{
              required: 'Input your name',
            }"
          />
          <FormKit
            v-model="form.blogTag"
            type="checkbox"
            label="Tags"
            validation="required|max:1"
            help="Select only one"
            decorator-icon="ic:baseline-check"
            :options="[
              { label: 'Project', value: 1 },
              { label: 'Idea', value: 2 },
              { label: 'Off Topic', value: 3 },
            ]"
          />
          <rs-button> Submit </rs-button>
        </FormKit>
      </template>
    </rs-card>
  </div>
</template>
