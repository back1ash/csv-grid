import FileLoad from './components/FileLoad.js';
import Grid from './components/Grid.js';

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
    <div id="myGrid"></div>
    `;
    this.mounted();
  }
  mounted() {
    new FileLoad({
      target: $('.form-control'),
      fileLoad: this.fileLoad,
    });
    new Grid({
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
