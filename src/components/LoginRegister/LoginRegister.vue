<template>
  <div>
    <section class="contact-from pt-4">
      <div class="container">
        <div class="row mt-12">
          <!-- Register  -->
          <div class="col-md-6 mx-auto register">
            <div class="form-wrapper">
              <div class="row">
                <div class="col-md-12">
                  <h4>Registr</h4>
                </div>
              </div>
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" v-model="RegisterData.FName" class="form-control" placeholder="First name" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" v-model="RegisterData.LName" class="form-control" placeholder="Last name" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="email" v-model="RegisterData.Email" class="form-control" placeholder="Email" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true" v-model="RegisterData.GenderMale" />
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="true" v-model="RegisterData.GenderFemale" />
                        <label class="form-check-label" for="inlineRadio1">Female</label>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="password" v-model="RegisterData.Pass" class="form-control" placeholder="Password" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="password" v-model="RegisterData.confirmPass" class="form-control" placeholder="Confirm Password" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="date" class="form-control" v-model="RegisterData.UserDate" />
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <button v-on:click="Register($event)" class="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>

          <!-- Login -->
          <div class="col-md-6 mx-auto login">
            <div class="form-wrapper">
              <div class="row">
                <div class="col-md-12">
                  <h4>Login</h4>
                </div>
              </div>
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="email" class="form-control" placeholder="Email" v-model="LoginData.Email" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Password" v-model="LoginData.Password" />
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <button v-on:click="Login($event)" class="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'LoginRegister',
  data() {
    return {
      RegisterData: {
        FName: '',
        LName: '',
        Email: '',
        GenderMale: false,
        GenderFemale: false,
        Pass: '',
        confirmPass: '',
        UserDate: []
      },
      LoginData: {
        Email: '',
        Password: ''
      }
    };
  },
  methods: {
    ...mapActions(['SetUserAuth']),
    Register: function (e) {
      e.preventDefault();
      console.log('reg', this.RegisterData);
      let data = { isLogedIN: true, isAdmin: true };
      this.SetUserAuth(data);
      this.$router.push({ path: '/UserProfile' });
    },
    Login: function (e) {
      e.preventDefault();
      console.log('Log', this.LoginData);
      let data = { isLogedIN: true, isAdmin: true };
      this.SetUserAuth(data);
      this.$router.push({ path: '/UserProfile' });
    }
  }
};
</script>

<style scoped>
.register {
  background: #9e9e9e26;
  padding: 15px;
}

.login {
  background: #007bff0a;
  padding: 15px;
}
</style>
