export default class Grid {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    const slickgrid = new Slick.Grid();
    //   this.container,
    //   this.rows,
    //   this.columns,
    //   this.options
    slickgrid.render();
  }
}
