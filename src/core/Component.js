class Component {
  $target;
  $state;
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.mounted();
  }
  mounted() {}
}
