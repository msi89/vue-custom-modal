<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <button @click="$modal.show('modal')">Open modal</button>
    <Modal name="modal">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta rerum odio sint temporibus, nulla doloremque inventore enim voluptas pariatur. Minima molestias quibusdam nobis esse quisquam sequi excepturi illo rerum!</p>
      <button @click="$modal.hide('modal')">Close modal</button>
      <button @click="$modal.show('modal2')">Sub modal</button>
    </Modal>
    <Modal name="modal2">
      <h3>Javascript most popular framework</h3>
      <ul>
        <li>Vue</li>
        <li>React</li>
        <li>Svelte</li>
        <li>Angular</li>
      </ul>
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    Modal
  },
  methods: {
    showModal() {
      this.$modal.show("modal");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
