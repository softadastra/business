<template>
  <section class="contact">
    <h1>Contact</h1>
    <p>Vous pouvez nous contacter par email : contact@softadastra.com</p>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Votre nom" required />
      <input type="email" v-model="email" placeholder="Votre email" required />
      <textarea
        v-model="message"
        placeholder="Votre message"
        required
      ></textarea>
      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      alert(`Merci ${this.name}, votre message a été envoyé !`);
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.contact input,
.contact textarea {
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.contact button {
  padding: 8px 16px;
  background-color: #07aa7c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
