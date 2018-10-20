const SlimeMoulds = require('./models/slime_moulds.js');
const SlimyListView = require('./views/slimy_list_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const mouldsListContainer = document.querySelector('#moulds');
  const slimyListView = new SlimyListView(mouldsListContainer);
  slimyListView.bindEvents();

  const slimeMoulds = new SlimeMoulds;
  slimeMoulds.getData();

})
