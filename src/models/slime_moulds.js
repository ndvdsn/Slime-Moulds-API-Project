const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const SlimeMoulds = function () {
  this.slimeMoulds = [];
  this.ups = [];
};

SlimeMoulds.prototype.getData = function () {
  const url = `https://www.reddit.com/r/Slimemolds.json`;
  const request = new Request(url);
  request.get().then(data => {
    this.slimeMoulds = data;
    PubSub.publish('SlimeMoulds:myxomycetes-data-loaded', this.slimeMoulds);
    // console.log(this.slimeMoulds)
  });
}

// SlimeMoulds.prototype.publishUps = function (data) {
//   this.mouldsData = data;
//   this.ups = this.mouldsUpsList();
//   PubSub.publish('Moulds:popularity-list', this.ups);
// }


module.exports = SlimeMoulds;
