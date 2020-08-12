const ModalPlugin = {
  install(Vue, options) {
    Vue.prototype.$modal = {
      show(name) {
        const modal = document.getElementById(name);
        modal.classList.add("show");
      },
      hide(name) {
        const modal = document.getElementById(name);
        modal.classList.remove(name);
      }
    };
  }
};

export default ModalPlugin;
