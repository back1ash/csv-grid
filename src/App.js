import FileLoad from './components/FileLoad.js';
import DataGrid from './components/DataGrid.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.state = {
      filename: '',
      field: [],
      data: [],
    };

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <input type="file" name="csvfile" class="form-control" id="formFile"/>
    <div class="grid-container"></div>
    `;
    this.mounted();
  }
  mounted() {
    new FileLoad({
      target: $('.form-control'),
      fileLoad: this.fileLoad,
    });
    new DataGrid({
      target: $('.grid-container'),
      state: this.state,
    });
  }

  fileLoad = (csvfile, csvfield, csvdata) => {
    this.setState({ filename: csvfile, field: csvfield, data: csvdata });
  };

  setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };
}
