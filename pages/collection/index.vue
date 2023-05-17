<script setup>
  definePageMeta({
    title: "Collection",
  });

  const data = [
    {
      id: 1,
      name: "Shirt 1",
      image: "img",
      type: "Shirt",
      size: "M",
      quantity: 25,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Shirt 2",
      image: "img",
      type: "Shirt",
      size: "M",
      quantity: 25,
      status: "In Stock",
    },
    {
      id: 3,
      name: "Shirt 3",
      image: "img",
      type: "Pants",
      size: "M",
      quantity: 25,
      status: "Ordered",
    },
    {
      id: 4,
      name: "Shirt 4",
      image: "img",
      type: "Jacket",
      size: "M",
      quantity: 25,
      status: "Out of Stock",
    },
    {
      id: 5,
      name: "Shirt 5",
      image: "img",
      type: "Hood",
      size: "M",
      quantity: 25,
      status: "New Arrival",
    },
  ];

</script>
<template>
  <div>
    <LayoutsBreadcrumb />

    <!-- Button Add New Collection/Stock -->
    <nuxt-link :to="'/collection/add' ">
      <rs-button class="float-right">
        <Icon name="mdi:plus"></Icon>
        Add
      </rs-button>
    </nuxt-link>
    <br><br><br>

    <Icon name="ph:t-shirt-duotone">Shirt</Icon>
    <Icon name="icon-park-outline:clothes-pants"></Icon>
    <Icon name="ph:dress-duotone"></Icon>
    <Icon name="icon-park-outline:clothes-sweater"></Icon>
    <Icon name="icon-park-twotone:clothes-hoodie"></Icon>

    <!-- Tab Collection by Type Stock -->
    <rs-tab variant="primary" type="card" justify="left">
    <rs-tab-item title="All">  
      <h4> All</h4>
      <br>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
        <rs-card class="p-5 relative" v-for="(val, index) in data">
          <rs-badge class="float-right" variant="success" v-if="val.status == 'In Stock'">In Stock</rs-badge>
          <rs-badge class="float-right" variant="danger" v-else-if="val.status == 'Out of Stock'">Out of Stock</rs-badge>
          <rs-badge class="float-right"  variant="warning" v-else-if="val.status == 'Ordered'">Ordered</rs-badge>
          <rs-badge class="float-right" variant="info" v-else="val.status == 'New Arrival'">New Arrival</rs-badge> 
          <br><br>
          <h6>{{ val.name }}</h6><br><br>

          <p>{{ val.image }}</p>
          <p>{{ val.type }}</p>
          <p>{{val.size}}</p>
          <p>{{val.quantity}}</p>
          <br><br>
          <nuxt-link :to="'/collection/edit/:[id]' ">
            <rs-button size="sm" class="mt-2">
              Edit
            </rs-button>
          </nuxt-link>
        </rs-card>
      </div>
    </rs-tab-item>
    <rs-tab-item title="Shirt"> 
      <h4> Shirt</h4>
      <br>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
        <div  v-for="(val, index) in data">
          <rs-card class="p-5 relative" v-if="val.type == 'Shirt'">
            <rs-badge class="float-right" variant="success" v-if="val.status == 'In Stock'">In Stock</rs-badge>
            <rs-badge class="float-right" variant="danger" v-else-if="val.status == 'Out of Stock'">Out of Stock</rs-badge>
            <rs-badge class="float-right"  variant="warning" v-else-if="val.status == 'Ordered'">Ordered</rs-badge>
            <rs-badge class="float-right" variant="info" v-else="val.status == 'New Arrival'">New Arrival</rs-badge> 
            <br><br>
            <h6>{{ val.name }}</h6><br><br>

            <p>{{ val.image }}</p>
            <p>{{ val.type }}</p>
            <p>{{val.size}}</p>
            <p>{{val.quantity}}</p>
            <br><br>
            <nuxt-link :to="'/collection/edit' ">
              <rs-button size="sm" class="mt-2">
                Edit
              </rs-button>
            </nuxt-link>
          </rs-card>
        </div>
      </div>
    </rs-tab-item>
    <rs-tab-item title="Pants"> 
      <h4> Pants</h4>
      <br>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
        <div  v-for="(val, index) in data">
          <rs-card class="p-5 relative" v-if="val.type == 'Pants'">
            <rs-badge class="float-right" variant="success" v-if="val.status == 'In Stock'">In Stock</rs-badge>
            <rs-badge class="float-right" variant="danger" v-else-if="val.status == 'Out of Stock'">Out of Stock</rs-badge>
            <rs-badge class="float-right"  variant="warning" v-else-if="val.status == 'Ordered'">Ordered</rs-badge>
            <rs-badge class="float-right" variant="info" v-else="val.status == 'New Arrival'">New Arrival</rs-badge> 
            <br><br>
            <h6>{{ val.name }}</h6><br><br>

            <p>{{ val.image }}</p>
            <p>{{ val.type }}</p>
            <p>{{val.size}}</p>
            <p>{{val.quantity}}</p>
            <br><br>
            <nuxt-link :to="'/collection/edit' ">
              <rs-button size="sm" class="mt-2">
                Edit
              </rs-button>
            </nuxt-link>
          </rs-card>
        </div>
      </div>
    </rs-tab-item>
    <rs-tab-item title="Jacket">  
      <h4> Jacket</h4>
      <br>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
        <div  v-for="(val, index) in data">
          <rs-card class="p-5 relative" v-if="val.type == 'Jacket'">
            <rs-badge class="float-right" variant="success" v-if="val.status == 'In Stock'">In Stock</rs-badge>
            <rs-badge class="float-right" variant="danger" v-else-if="val.status == 'Out of Stock'">Out of Stock</rs-badge>
            <rs-badge class="float-right"  variant="warning" v-else-if="val.status == 'Ordered'">Ordered</rs-badge>
            <rs-badge class="float-right" variant="info" v-else="val.status == 'New Arrival'">New Arrival</rs-badge> 
            <br><br>
            <h6>{{ val.name }}</h6><br><br>

            <p>{{ val.image }}</p>
            <p>{{ val.type }}</p>
            <p>{{val.size}}</p>
            <p>{{val.quantity}}</p>
            <br><br>
            <nuxt-link :to="'/collection/edit' ">
              <rs-button size="sm" class="mt-2">
                Edit
              </rs-button>
            </nuxt-link>
          </rs-card>
        </div>
      </div>
    </rs-tab-item>
    <rs-tab-item title="Hood">  
      <h4> Hood</h4>
      <br>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
        <div  v-for="(val, index) in data">
          <rs-card class="p-5 relative" v-if="val.type == 'Hood'">
            <rs-badge class="float-right" variant="success" v-if="val.status == 'In Stock'">In Stock</rs-badge>
            <rs-badge class="float-right" variant="danger" v-else-if="val.status == 'Out of Stock'">Out of Stock</rs-badge>
            <rs-badge class="float-right"  variant="warning" v-else-if="val.status == 'Ordered'">Ordered</rs-badge>
            <rs-badge class="float-right" variant="info" v-else="val.status == 'New Arrival'">New Arrival</rs-badge> 
            <br><br>
            <h6>{{ val.name }}</h6><br><br>

            <p>{{ val.image }}</p>
            <p>{{ val.type }}</p>
            <p>{{val.size}}</p>
            <p>{{val.quantity}}</p>
            <br><br>
            <nuxt-link :to="'/collection/edit' ">
              <rs-button size="sm" class="mt-2">
                Edit
              </rs-button>
            </nuxt-link>
          </rs-card>
        </div>
      </div>
    </rs-tab-item>
  </rs-tab>
  </div>
</template>
      