<template>
  <div>
    <!-- Start of the navBar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" class="navbar-brand">The App</a>

      <button v-on:click="isActive = !isActive" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div v-bind:class="[isActive ? 'collapse navbar-collapse show' : 'collapse navbar-collapse']">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0">
          <!-- search start -->
          <Search />
          <!-- search end -->

          <router-link to="/LoginRegister" class="btn btn-outline-primary my-2 my-sm-2 m-2">
            <button>Login | regeste</button>
          </router-link>

          <button class="btn btn-outline-danger my-2 my-sm-2 m-2">Logout</button>

          <!-- <button  class='btn btn-outline-warning my-2 my-sm-2 m-2'
      >Cart</button> -->
          <router-link to="/Cart" class="btn btn-outline-warning my-2 my-sm-2 m-2">
            <button>Cart</button>
          </router-link>

          <router-link class="btn btn-outline-danger my-2 my-sm-2 m-2" to="/Admin">
            <button>Admin</button>
          </router-link>

          <router-link to="/UserProfile" class="btn btn-outline-dark my-2 my-sm-2 m-2">
            <button>Profile</button>
          </router-link>
        </form>
      </div>
    </nav>
    <!-- end off the navbar  -->
  </div>
</template>

<script>
import Search from './Search';
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isActive: false,
      auth: { isUserLogedIN: false, IsUserAdmin: false }
    };
  },
  components: {
    Search
  }
};
</script>

<style scoped>
.userWords {
  width: 80%;
  background-color: #f8f9fa !important;
  margin: 5px auto;
  font-style: italic;
  color: #007bff;
  padding: 10px;
}
</style>
