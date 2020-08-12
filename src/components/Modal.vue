<template>
  <div class="modal" :id="name">
    <div class="modal__content" :style="{width: getWidth, height: getHeight }">
      <div class="modal__header">
        <h1 class="modal__title">{{title}}</h1>
        <span class="modal__close" @click="hide()" title="Close">&times;</span>
      </div>
      <div class="modal__body">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    name: { type: String, required: true },
    title: { type: String, default: "Modal title" },
    width: { type: [String, Number], default: 600 },
    height: { type: [String, Number], default: "auto" }
  },
  computed: {
    getWidth() {
      if (typeof this.width === "number") {
        return `${this.width}px`;
      }
      return this.width;
    },
    getHeight() {
      if (typeof this.height === "number") {
        return `${this.height}px`;
      }
      return this.height;
    }
  },
  methods: {
    hide() {
      this.$modal.hide(this.name);
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.modal {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
}
.modal.show {
  visibility: visible;
  opacity: 1;
}
.modal.show .modal__content {
  visibility: visible;
  opacity: 1;
  transform: translateY(0) scale(1);
}
.modal__content {
  min-width: 350px;
  background-color: #fff;
  margin: auto;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transform: scale(0.5);

  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out,
    transform 0.4s ease-in-out;
}
.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid #eee;
}
.modal__title {
  font-weight: normal;
  font-size: 16px;
}
.modal__close {
  font-size: 25px;
  padding: 5px;
  cursor: pointer;
}
.modal__body {
  padding: 10px;
  text-align: justify;
}
</style>

