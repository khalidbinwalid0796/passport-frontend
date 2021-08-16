<template>
  <div class="container">
   <form @submit.prevent="login">
    <div class="mb-3">
      <label class="form-label">Email address</label>
      <input type="email" class="form-control" v-model="list.email">
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" v-model="list.password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
</template>

<script>
  import Axios from 'axios'
	export default {
  name: 'Login',
    data(){
    return{
      list:{
        email:'',
        password:''
      },
      errors:{}
    }
  },

  methods:{
    login(){
      Axios.post('http://127.0.0.1:8000/api/login',this.$data.list)
      .then((response) => {
        this.$router.push({ name: 'Home' })
        console.log(response)
        //console.log(response.data.data)
          //localStorage.setItem('accessToken', response.data.access_token)
      })
    .catch((error) => this.errors = error.response.data.errors)

    }
  }

}
</script>

<style>
	
</style>