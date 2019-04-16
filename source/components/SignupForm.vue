<template>
  <form>
    <b-field horizontal label="Name" xgrouped>
       <b-field>
        <b-input type="text" placeholder="John" expanded required></b-input>
      </b-field>
      <b-field>
        <b-input type="text" placeholder="Doe" expanded required></b-input>
      </b-field>
    </b-field>

    <b-field horizontal label="Email">
      <b-input type="email" icon="email" placeholder="john_doe@example.com" expanded required></b-input>
    </b-field>

    <b-field horizontal label="Phone">
        <b-input type="text" icon="cellphone" placeholder="+44 070 8077 6212" expanded required></b-input>
    </b-field>

    <b-field horizontal label="Password">
        <b-field grouped group-multiline>
          <b-input type="password" :password-reveal="Boolean(0)" placeholder="******" expanded required></b-input>
          <b-input type="password" :password-reveal="Boolean(0)" placeholder="******" expanded required></b-input>
        </b-field>
    </b-field>

    <b-field horizontal label="">
      <b-checkbox required>I read and accept Terms and Conditions</b-checkbox>
    </b-field>
    <b-field horizontal label="">
        <button class="button is-primary">Sing up</button>
    </b-field>
  </form>
</template>

<style type="text/css">
  /* Password inpıt fixes */
  .field.is-grouped.is-grouped-multiline > .control.is-expanded {
    margin-right: 0;
    width: 100%;
  }
</style>

<script>
  export default {
    name: "signupForm",
    components: {
    }
  }
</script>
