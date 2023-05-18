<script>
export default {
  methods: {
    handleSubmit() {
      // Perform form submission logic here
      // ...
      
      // Show success alert
      alert('Feedback successfully submitted');
      
      // Clear the form
      this.$refs.myForm.reset();
    }
  },
  mounted() {
    const navigationLinks = document.querySelectorAll('.label');
    navigationLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
};
</script>




<template>
  <div>
    <div class="mt-5 mb-5 flex justify-center bg-slate-800 text-center rounded-md shadow-md ml-10 mr-10">
      <a href="#home" class="label text-slate-50 text-lg m-5">Home</a>
      <a href="#about-us" class="label text-slate-50 text-lg m-5">About Us</a>
      <a href="#contact-us" class="label text-slate-50 text-lg m-5">Contact Us</a>
    </div>
    <rs-card>
      <h4 id="home" class="w-1/2 text-5xl text-left text-slate-50 mb-5 mt-10 italic ml-5 pt-5">Home</h4>
      <a href="/bloganda/blogs">
        <div class="flex justify-center items-center w-full py-2">
          <img src="../../assets/img/header.png" alt="header" class="w-3/4 h-3/4 rounded-md border-double">
        </div>
      </a>
      
      <h4 id="about-us" class="w-1/2 text-5xl text-left text-slate-50 mb-5 mt-20 italic ml-5 pt-5">About Us</h4>
      <h5 class="w-1/2 text-md text-left mx-auto mt-10 font-semibold">
        Welcome to BlogAnda, the user-centric blogging platform where your voice matters! Our mission is to empower individuals and communities to express themselves freely and connect with like-minded individuals. With our intuitive interface and customizable templates, you can easily create compelling content that reflects your unique style. Join our vibrant community, engage in meaningful discussions, and discover new perspectives from diverse voices. Unleash your creativity, build connections, and make an impact with your words. Your voice matters, and BlogAnda is here to help you make it heard.
      </h5>
      
      <h4 id="contact-us" class="w-1/2 text-5xl text-left text-slate-50 mb-5 mt-20 italic ml-5 pt-5">Contact Us</h4>
      <div>
        <rs-card class="p-5 m-5">
          <form ref="myForm">
            <FormKit type="text" label="Name" class="3/4" />
            <FormKit type="text" label="Email" />
            <FormKit type="text" label="Phone Number" />
            <FormKit type="textarea" label="Inquiry" rows="10" />

            <rs-button @click="handleSubmit">Submit</rs-button>
          </form>
                
        </rs-card>
      </div>
      
      <div class="bg-stone-800 mt-10 mb-20 py-2 w-full">
        <div class="flex flex-row justify-around m-10">
          <div class="text-white font-normal flex flex-col">
            <h6 class="font-medium text-lg">Whatsapp us at</h6>
            <h6 class="font-normal mt-2 text-lg">
              <Icon name="ic:baseline-whatsapp"></Icon> 011909889
            </h6>
          </div>
          <div class="text-white font-normal flex flex-col">
            <h6 class="font-medium text-lg">Call us at</h6>
            <h6 class="font-normal mt-2 text-lg">
              <Icon name="material-symbols:call-sharp"></Icon> 011909889
            </h6>
          </div>
          <div class="text-white font-normal flex flex-col">
            <h6 class="font-medium text-lg">Write us an email at</h6>
            <h6 class="font-normal mt-2 text-lg">
              <Icon name="material-symbols:mail-outline"></Icon> support@bloganda.com
            </h6>
          </div>
        </div>
      </div>
    </rs-card>
  </div>
</template>


