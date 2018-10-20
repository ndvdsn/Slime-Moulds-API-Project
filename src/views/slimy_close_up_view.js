const SlimyCloseUpView = function (container, mould) {
  this.mouldsContainer = container;
  this.slimeMould = mould;
};

SlimyCloseUpView.prototype.render = function () {
  console.log(this.slimeMould);

  const slimeContainer = document.createElement('div');
  slimeContainer.classList.add('moulds');

  const title = this.createSlimeHeading();
  this.mouldsContainer.appendChild(title);

  const img = this.createImg();
  this.mouldsContainer.appendChild(img);


  this.mouldsContainer.appendChild(slimeContainer);

}

SlimyCloseUpView.prototype.createSlimeHeading = function () {
  const title = document.createElement('h3');
  title.textContent = this.slimeMould.data.title
  title.classList.add('mould-title');
  return title;
  console.log(this.slimeMould)
}

SlimyCloseUpView.prototype.createImg = function (mould){
  const img = document.createElement('img')
  img.src = this.slimeMould.data.url
  img.alt = this.slimeMould.data.thumbnail
  img.classList.add('mould-image')
  return img;
  // this.element.appendChild(img)
};




module.exports = SlimyCloseUpView;
