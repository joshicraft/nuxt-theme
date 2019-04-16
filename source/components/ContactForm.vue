<template>
  <section>
    <b-field horizontal label="Subject">
      <b-input name="subject" placeholder="Subject" expanded></b-input>
    </b-field>
    <b-field horizontal label="From">
      <b-input name="name" placeholder="Name" expanded></b-input>
      <b-input name="email" type="email" placeholder="nobody@nowhere.com" expanded></b-input>
    </b-field>
    <b-field horizontal label="Topic">
      <b-select placeholder="Select a topic">
        <option value="1">Web Design</option>
        <option value="2">Front-end</option>
        <option value="3">Back-end</option>
        <option value="4">Hiring</option>
      </b-select>
    </b-field>
    <b-field horizontal label="Message">
      <b-input type="textarea" placeholder="Your message..."  ></b-input>
    </b-field>
    <b-field horizontal>
      <!-- Label left empty for spacing -->
      <p class="control">
        <button class="button is-primary">
          Send message
        </button>
      </p>
    </b-field>
  </section>
</template>
