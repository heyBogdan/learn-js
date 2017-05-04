'use strict';

class Gallery{
  constructor(options){
    this._el = options.elem;
    this._el.addEventListener('click', this._clickHandler)
  }
  _clickHandler(e){
    e.preventDefault();
    
    if(!e.target.closest('.gallery__item')) return;
    
    document.querySelector('.gallery__main-pic').src = e.target.closest('.gallery__item').href;
  }
}

let imageGallery = new Gallery({
  elem: document.querySelector('.gallery')
})