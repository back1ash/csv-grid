import FileLoad from './components/FileLoad.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.state = {};

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <input type="file" name="csvfile" class="form-control" id="formFile" />
    <div class="grid-container"></div>
    `;
    this.mounted();
  }
  mounted() {
    new FileLoad({ target: $('.form-control'), fileUpload: this.fileUpload });
  }

  setState() {}
  fileUpload() {}
}
