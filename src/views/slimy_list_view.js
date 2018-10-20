const PubSub = require('../helpers/pub_sub.js');
const SlimyCloseUpView = require('./slimy_close_up_view.js');

const SlimyListView = function (container) {
  this.container = container;
}

SlimyListView.prototype.bindEvents = function () {
  PubSub.subscribe('SlimeMoulds:myxomycetes-data-loaded', (event) => {
    this.slimeMoulds = event.detail.data.children;
    this.render();
    // console.log(this.slimeMoulds)

  });
};

SlimyListView.prototype.render = function () {
  this.slimeMoulds.forEach((mould) => {
    const slimyCloseUpView = new SlimyCloseUpView(this.container, mould);
    slimyCloseUpView.render();
  });
};

module.exports = SlimyListView;
