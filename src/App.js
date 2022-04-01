export default class App {
  constructor($target) {
    this.$target = $target;
    this.state = {};

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <input type="file" class="form-control" id="formFile" />
    <div class="grid-container"></div>
    `;
  }
  mounted() {}
}
