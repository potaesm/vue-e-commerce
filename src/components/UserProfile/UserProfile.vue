<template>
  <div>
    <div class="center">
      <h4 class="s">
        UserProfile
        <button v-if="EditMode" @click="EditData" class="btn btn-danger">Edit</button>
        <button v-if="!EditMode" @click="SaveData" class="btn btn-info">Save</button>
      </h4>
      <!-- show mode -->
      <div v-if="EditMode">
        <img class="iimg col" :src="UserData.imgSrc" alt="" />
        <div class="container">
          <div class="row">
            <div class="col-md-8 d">
              <h3>
                First Name :
                <strong class="s">{{ UserData.firstName }}</strong>
              </h3>
              <h3>
                Last Name :
                <strong class="s">{{ UserData.lastName }}</strong>
              </h3>
              <h3>
                Email :
                <strong class="s">{{ UserData.Email }}</strong>
              </h3>
              <h3>
                Gender :
                <strong class="s">{{ UserData.Gender }}</strong>
              </h3>
              <h3>
                Birth Day :
                <strong class="s">{{ UserData.BDay }}</strong>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <!-- show mode end -->
      <!-- edit mode start -->
      <div v-if="!EditMode">
        <img class="iimg col" alt="" :src="UserData.imgSrc" />
        <div class="fileUpload">
          <input type="file" @change="onFileChange" class="upload" enctype="multipart/form-data" />
          <span>Upload</span>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 d">
              <h3>
                First Name :
                <strong class="s">{{ UserData.firstName }}</strong>
                <input class="form-control" placeholder="first name" type="text" v-model="UserData.firstName" />
              </h3>
              <h3>
                Last Name :
                <strong class="s">{{ UserData.lastName }}</strong>
                <input class="form-control" placeholder="last name" type="text" v-model="UserData.lastName" />
              </h3>
              <h3>
                Email :
                <strong class="s">{{ UserData.Email }}</strong>
                <input class="form-control" placeholder="email" type="email" v-model="UserData.Email" />
              </h3>
              <h3>
                Gender :
                <strong class="s">{{ UserData.Gender }}</strong>
                <select v-model="UserData.Gender" class="form-control">
                  <option>male</option>
                  <option>fmale</option>
                </select>
              </h3>
              <h3>
                Birth Day :
                <strong class="s">{{ UserData.BDay }}</strong>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="date" v-model="UserData.BDay" class="form-control" />
                  </div>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <!-- edit mode end -->
      <button class="btn btn-danger">Delete Account</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      EditMode: true,
      UserData: {
        userID: '3',
        firstName: 'ahmed',
        lastName: 'khalaf',
        Email: 'ahmed@gmail.com',
        Gender: 'male',
        BDay: '15-8-1996',
        imgSrc: 'https://www.seekpng.com/png/full/356-3562377_personal-user.png'
      }
    };
  },
  methods: {
    SaveData: function () {
      this.EditMode = !this.EditMode;
      console.log('Editing User data', this.UserData);
    },
    EditData: function () {
      this.EditMode = !this.EditMode;
    },
    onFileChange(e) {
      this.UserData.imgSrc = URL.createObjectURL(e.target.files[0]);
    }
  }
};
</script>

<style scoped>
.iimg {
  margin-left: auto;
  margin-right: auto;
  width: 10em;
}
.d {
  font-family: cursive;
  border: 1px solid #2f4f4f1f;
  margin: 1% auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.s {
  color: darkslategrey;
  font-family: fantasy;
}

.fileUpload {
  background: #00bcbe;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  margin: 1.25em auto; /*20px/16px 0*/
  overflow: hidden;
  padding: 0.875em; /*14px/16px*/
  position: relative;
  text-align: center;
  width: 120px;
  cursor: pointer;
}
.fileUpload:hover,
.fileUpload:active,
.fileUpload:focus {
  background: #00a2a4;
  cursor: pointer;
}
.fileUpload input.upload {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  width: 148px;
  height: 46px;
  cursor: pointer;
}

input[type='file'] {
  position: fixed;
  right: 100%;
  bottom: 100%;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
