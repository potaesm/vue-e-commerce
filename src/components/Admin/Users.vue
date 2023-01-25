<template>
  <div class="center">
    <div>
      <h5 class="btn-danger">Users</h5>

      <ul v-for="data in UsersList" :key="data.id" class="list-group m">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <img class="userimg" alt="" :src="data.imgSrc" />
          <span v-if="!data.isAdmin" class="badge badge-primary badge-pill">User</span>
          <span v-if="data.isAdmin" class="badge badge-warning badge-pill">Admin</span>
          {{ data.name }}
          <div class="form-group">
            <select v-model="data.isAdmin" v-on:change="ChangeUserRole(data.id, data.isAdmin)" class="form-control" id="exampleFormControlSelect1">
              <option :value="false" class="btn btn-primary">User</option>
              <option :value="true" class="btn btn-warning">Admin</option>
            </select>
          </div>
        </li>
      </ul>

      <PageNationStore ComponentName="UsersComponent" v-on:new-UserData="NewUserData" />
    </div>
  </div>
</template>

<script>
import PageNationStore from './PageNationStore';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'UsersComponent',
  data() {
    return {
      UsersList: [],
      PageNumber: null
    };
  },
  components: {
    PageNationStore
  },
  computed: {
    ...mapGetters(['AllUsers'])
  },
  created() {
    this.GetUserList();
    this.GetUsersListFromStore();
  },
  methods: {
    ...mapActions(['GetUserList', 'EditOneUser']),

    GetUsersListFromStore: function () {
      this.UsersList = this.AllUsers;
    },

    ChangeUserRole: function (id, role) {
      let data = { ID: id, isAdmin: role };
      this.EditOneUser(data);
    },

    NewUserData(data, page) {
      this.PageNumber = page;
      this.UsersList = data;
    }
  }
};
</script>

<style scoped>
.userimg {
  max-width: 10%;
  border-radius: 50%;
}
.m {
  margin: 10px auto;
}

.wid {
  margin-left: auto;
  margin-right: auto;
  width: 10em;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
