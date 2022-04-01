const MAXSIZE = 10 * 1024 * 1024;
import { $ } from '../utils/selector.js';
import { parse } from 'papaparse';

export default class FileLoad {
  constructor({ $target, fileLoad }) {
    this.$target = $target;
    this.fileLoad = fileLoad;
    this.setEvent();
  }

  extensionCheck($target) {
    const filename = $target.value;
    const dotIdx = filename.lastIndexOf('.');
    const fileExtension = filename.slice(dotIdx + 1);
    if (fileExtension != 'csv') {
      alert('CSV 파일만 업로드 가능합니다.');
      $target.value = '';
    } else {
      this.checkSize($target);
    }
  }

  checkSize($target) {
    const filesize = $target.files[0].size;
    if (filesize >= MAXSIZE) {
      alert('10MB 이상의 사이즈를 가진 파일은 업로드 불가합니다.');
      $target.value = '';
    } else {
      this.parsing($target.files[0]);
    }
  }

  parsing(file) {
    let data = [];
    let field = [];
    parse(file, {
      complete: function (csvdata) {
        field.push(csvdata.data.splice(0, 1));
        data.push(csvdata.data);
      },
    });
    this.fileLoad(field, data);
  }

  setEvent() {
    $('[name=csvfile]').addEventListener('change', (e) => {
      this.extensionCheck(e.target);
    });
  }
}
