<template>
<div class="container">
  <form method="post" action="/admin/register">
  <div class="form-group">
  <input type="text" id="username" name="username" placeholder="Provide your username">
  </div>
  <div class="form-group">
  <input type="password" id="password" name="password" placeholder="Provide a password for your account">
  </div>
  <button type="submit">Sign up</button>
  </form>
</div>
</template>

<script>

export default {
  name: 'RegisterAdmin',
  
  methods: {
   
  },
  mounted() {
    
  },
}
</script>