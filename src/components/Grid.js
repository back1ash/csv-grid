export default class Grid {
  constructor(container, rows, columns, options) {
    this.container = container;
    this.rows = rows;
    this.columns = columns;
    this.options = options;
  }

  render() {
    const slickgrid = new Slick.Grid(
      this.container,
      this.rows,
      this.columns,
      this.options
    );
    slickgrid.render();
  }
}
