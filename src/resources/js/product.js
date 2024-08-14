"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint no-undef: 'off' */
// Select location
new Choices('.js-location-choices', {
  allowHTML: false,
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: ''
}); // Select category

new Choices('.js-categories-choices', {
  allowHTML: false,
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  placeholder: true,
  placeholderValue: 'Категория'
}); // Burger menu open/close

var burgerMenuOpenButton = document.querySelector('.js-burger-menu-open');
var burgerMenuCloseButton = document.querySelector('.js-burger-menu-close');
var burgerMenuContent = document.querySelector('.burger__content');
burgerMenuOpenButton.addEventListener('click', function () {
  return burgerMenuContent.classList.add('burger__content--opened');
});
burgerMenuCloseButton.addEventListener('click', function () {
  return burgerMenuContent.classList.remove('burger__content--opened');
}); // Product thumbnails slider

var thumbsSlider = new Swiper('.swiper.js-product-thumbs-swiper', {
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  freeMode: true,
  watchSlidesProgress: true,
  a11y: {
    slideLabelMessage: 'Миниатюра фото товара {{index}} из {{slidesLength}}',
    prevSlideMessage: 'Предыдущие миниатюры',
    nextSlideMessage: 'Следующие миниатюры'
  },
  breakpoints: {
    320: {
      spaceBetween: 38,
      direction: 'horizontal'
    },
    768: {
      spaceBetween: 18,
      direction: 'vertical'
    },
    1024: {
      spaceBetween: 38,
      direction: 'horizontal'
    }
  }
}); // Product photos slider

new Swiper('.swiper.js-product-photos-swiper', {
  spaceBetween: 16,
  thumbs: {
    swiper: thumbsSlider
  },
  a11y: {
    slideLabelMessage: 'Фото товара {{index}} из {{slidesLength}}',
    prevSlideMessage: 'Предыдущее фото',
    nextSlideMessage: 'Следующее фото'
  }
}); // Create close button with svg icon

function createCloseButton() {
  var button = document.createElement('button');
  button.classList.add('btn', 'modal__close');
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '12');
  svg.setAttribute('height', '12');
  svg.setAttribute('viewBox', '0 0 12 12');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  var path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute('d', 'M1.42872 0.238643L6.75487 5.42386C7.08171 5.74206 7.08171 6.25794 6.75487 6.57614L1.42872 11.7614C1.10188 12.0795 0.571969 12.0795 0.245129 11.7614C-0.0817098 11.4432 -0.0817098 10.9273 0.24513 10.6091L4.97949 6L0.24513 1.39091C-0.0817089 1.07272 -0.0817089 0.556834 0.24513 0.238643C0.57197 -0.0795478 1.10188 -0.0795477 1.42872 0.238643Z');
  path1.setAttribute('fill-rule', 'evenodd');
  path1.setAttribute('clip-rule', 'evenodd');
  path1.setAttribute('fill', '#999999');
  var path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute('d', 'M10.5713 0.238643L5.24513 5.42386C4.91829 5.74206 4.91829 6.25794 5.24513 6.57614L10.5713 11.7614C10.8981 12.0795 11.428 12.0795 11.7549 11.7614C12.0817 11.4432 12.0817 10.9273 11.7549 10.6091L7.02051 6L11.7549 1.39091C12.0817 1.07272 12.0817 0.556834 11.7549 0.238643C11.428 -0.0795478 10.8981 -0.0795477 10.5713 0.238643Z');
  path2.setAttribute('fill-rule', 'evenodd');
  path2.setAttribute('clip-rule', 'evenodd');
  path2.setAttribute('fill', '#999999');
  svg.append(path1, path2);
  button.append(svg);
  return button;
} // Product photos modal


function createPhotosModal(slidesAmount) {
  var modal = document.createElement('div');
  modal.classList.add('modal', 'container');
  var modalGallery = document.createElement('div');
  modalGallery.classList.add('gallery', 'modal__gallery');
  var photosModalSlider = document.createElement('div');
  photosModalSlider.classList.add('swiper', 'gallery__photos', 'js-modal-photos-swiper');
  var photosModalSwiperWrapper = document.createElement('ul');
  photosModalSwiperWrapper.classList.add('lst', 'swiper-wrapper');
  var thumbsModalSlider = document.createElement('div');
  thumbsModalSlider.classList.add('swiper', 'gallery__thumbs', 'js-modal-thumbs-swiper');
  var thumbsModalSwiperWrapper = document.createElement('ul');
  thumbsModalSwiperWrapper.classList.add('lst', 'swiper-wrapper');

  function createSlides(className, amount) {
    var slides = [];

    for (var number = 1; number <= amount; number++) {
      var slide = document.createElement('li');
      slide.classList.add('slide', "".concat(className, "-slide"), 'swiper-slide');
      var picture = document.createElement('picture');
      picture.classList.add('slide__img');
      var source1 = document.createElement('source');
      source1.srcset = "img/product-photo-".concat(number, ".webp, img/product-photo-").concat(number, "@2x.webp 2x");
      source1.type = 'image/webp';
      var source2 = document.createElement('source');
      source2.srcset = "img/product-photo-".concat(number, ".png, img/product-photo-").concat(number, "@2x.png 2x");
      var img = document.createElement('img');
      img.src = "img/product-photo-".concat(number, ".png");
      img.alt = "\u0424\u043E\u0442\u043E ".concat(number);
      picture.append(source1, source2, img);
      slide.append(picture);
      slides.push(slide);
    }

    return slides;
  }

  photosModalSwiperWrapper.append.apply(photosModalSwiperWrapper, _toConsumableArray(createSlides('gallery__photos', slidesAmount)));
  photosModalSlider.append(photosModalSwiperWrapper);
  var thumbsModalSwiperPaginationPrev = document.createElement('div');
  thumbsModalSwiperPaginationPrev.classList.add('swiper-button-prev');
  var thumbsModalSwiperPaginationNext = document.createElement('div');
  thumbsModalSwiperPaginationNext.classList.add('swiper-button-next');

  function createSvgArrow() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '32');
    svg.setAttribute('height', '32');
    svg.setAttribute('viewBox', '0 0 32 32');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '16');
    circle.setAttribute('cy', '16');
    circle.setAttribute('r', '15');
    circle.setAttribute('stroke', '#A65CF0');
    circle.setAttribute('stroke-width', '2');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M14 11L19 16L14 21');
    path.setAttribute('stroke', '#A65CF0');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.append(circle, path);
    return svg;
  }

  thumbsModalSwiperPaginationPrev.append(createSvgArrow());
  thumbsModalSwiperPaginationNext.append(createSvgArrow());
  thumbsModalSwiperWrapper.append.apply(thumbsModalSwiperWrapper, _toConsumableArray(createSlides('gallery__thumbs', slidesAmount)));
  thumbsModalSlider.append(thumbsModalSwiperWrapper, thumbsModalSwiperPaginationPrev, thumbsModalSwiperPaginationNext);
  var modalCloseButton = createCloseButton();
  modalCloseButton.classList.add('gallery__close');
  modalCloseButton.addEventListener('click', function () {
    modal.remove();
    document.body.style.removeProperty('overflow');
  });
  modalGallery.append(photosModalSlider, thumbsModalSlider, modalCloseButton);
  modal.append(modalGallery);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.remove();
      document.body.style.removeProperty('overflow');
    }
  });
  return modal;
}

var photosSlides = document.querySelectorAll('.product__photos-slide');
photosSlides.forEach(function (slide, number) {
  return slide.addEventListener('click', function () {
    var photosModal = createPhotosModal(photosSlides.length);
    document.body.append(photosModal);
    document.body.style.overflow = 'hidden';
    var modalThumbsSlider = new Swiper(photosModal.querySelector('.js-modal-thumbs-swiper'), {
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      a11y: {
        slideLabelMessage: 'Миниатюра фото товара {{index}} из {{slidesLength}}',
        prevSlideMessage: 'Предыдущие миниатюры',
        nextSlideMessage: 'Следующие миниатюры'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 62
        },
        768: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 79
        },
        1024: {
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 66
        },
        1400: {
          slidesPerGroup: 4,
          slidesPerView: 4,
          spaceBetween: 51
        }
      }
    });
    new Swiper(photosModal.querySelector('.js-modal-photos-swiper'), {
      initialSlide: number,
      thumbs: {
        swiper: modalThumbsSlider
      },
      a11y: {
        slideLabelMessage: 'Фото товара {{index}} из {{slidesLength}}',
        prevSlideMessage: 'Предыдущее фото',
        nextSlideMessage: 'Следующее фото'
      },
      breakpoints: {
        320: {
          spaceBetween: 16
        },
        768: {
          spaceBetween: 20
        },
        1024: {
          spaceBetween: 66
        },
        1400: {
          spaceBetween: 108
        }
      }
    });
  });
}); // Alike products slider

new Swiper('.swiper.js-alike-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  a11y: {
    slideLabelMessage: 'Похожий товар {{index}} из {{slidesLength}}',
    prevSlideMessage: 'Предыдущие товары',
    nextSlideMessage: 'Следующие товары'
  },
  breakpoints: {
    320: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 16
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32
    },
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 32
    },
    1400: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 32
    }
  }
}); // Create icon for thanks modal

function createSvgElephant() {
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '73');
  svg.setAttribute('height', '50');
  svg.setAttribute('viewBox', '0 0 73 50');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M11.5981 44.8056C20.7832 44.8056 22.514 36.7296 22.514 30.2636C23.6049 30.2636 32.2264 30.2636 36.1589 30.2636C57.5492 30.2636 57.5547 0 36.8411 0C31.2072 0 27.5783 3.41551 26.6068 4.60532C15.0496 4.60532 13.6449 10.644 13.6449 22.3694C13.6449 24.6314 13.6449 31.9846 13.6449 33.1173C13.6449 35.8742 12.5369 37.6629 9.55072 37.6629C7.00117 37.6629 5.79361 35.4053 4.77502 32.2373C4.24423 32.5224 0.517138 34.5383 -2.23517e-06 34.8689C1.12775 38.0337 2.33531 44.8056 11.5981 44.8056ZM24.5839 17.7634C28.0832 17.7634 28.3806 23.0266 24.3363 23.0266C20.9271 23.0266 21.0158 17.7634 24.5839 17.7634ZM36.8418 33.5355C33.8843 33.5355 25.243 32.8952 25.243 32.8952V49.1213L33.4299 49.2382L35.4766 37.5005L61.4019 37.0134L62.0848 49.8824L71.6362 50C71.6362 50 73 24.7938 73 19.7371C73 10.3576 68.8035 5.0489 59.3551 4.60532C56.9878 4.49426 53.8904 4.05263 51.8505 3.94742C60.7421 14.7668 53.6673 33.5355 36.8418 33.5355ZM53.2156 40.1146L53.8972 49.6486L59.3551 49.7662L58.6729 40.1146H53.2156ZM36.1589 49.3564L41.6168 49.4733L42.9806 40.1146H38.2049L36.1589 49.3564Z');
  path.setAttribute('fill-rule', 'evenodd');
  path.setAttribute('clip-rule', 'evenodd');
  path.setAttribute('fill', '#FF862F');
  svg.append(path);
  return svg;
} // Thanks for the order modal


function createThanksModal() {
  var modal = document.createElement('div');
  modal.classList.add('modal', 'container');
  var thanksContainer = document.createElement('div');
  thanksContainer.classList.add('thanks', 'modal__thanks');
  var thanksIcon = createSvgElephant();
  thanksIcon.classList.add('thanks__icon');
  var thanksTitle = document.createElement('h5');
  thanksTitle.classList.add('thanks__title');
  thanksTitle.textContent = 'Спасибо, мы вам перезвоним!';
  var thanksCloseButton = createCloseButton();
  thanksCloseButton.classList.add('form__close');
  thanksCloseButton.addEventListener('click', function () {
    modal.remove();
    document.body.style.removeProperty('overflow');
  });
  thanksContainer.append(thanksIcon, thanksTitle, thanksCloseButton);
  modal.append(thanksContainer);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.remove();
      document.body.style.removeProperty('overflow');
    }
  });
  return modal;
} // Buy per 1 click modal


function createBuyPerClickModal() {
  var modal = document.createElement('div');
  modal.classList.add('modal', 'container');
  var modalForm = document.createElement('form');
  modalForm.classList.add('form', 'modal__form');
  var formTitle = document.createElement('h4');
  formTitle.classList.add('form__title');
  formTitle.textContent = 'Купить в один клик';
  var formText = document.createElement('p');
  formText.classList.add('form__text');
  formText.textContent = 'Чтобы оформить заказ — заполните формы ниже и наш менеджер свяжется с вами в течении часа.';
  var formNameLabel = document.createElement('label');
  formNameLabel.classList.add('form__label');
  var formNameInput = document.createElement('input');
  formNameInput.id = 'form-name';
  formNameInput.classList.add('form__input');
  formNameInput.type = 'text';
  formNameInput.placeholder = 'Как вас зовут?';
  formNameInput.ariaLabel = 'Введите ваше имя';
  formNameLabel.append(formNameInput);
  var formTelLabel = document.createElement('label');
  formTelLabel.classList.add('form__label');
  var formTelInput = document.createElement('input');
  formTelInput.id = 'form-tel';
  formTelInput.classList.add('form__input');
  formTelInput.type = 'tel';
  formTelInput.placeholder = 'Ваш телефон';
  formTelInput.ariaLabel = 'Введите ваш телефон';
  formTelLabel.append(formTelInput);
  var formSubmitButton = document.createElement('button');
  formSubmitButton.classList.add('btn', 'form__btn');
  formSubmitButton.type = 'submit';
  formSubmitButton.textContent = 'Отправить';

  function createSvgCheckbox() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '14');
    svg.setAttribute('height', '14');
    svg.setAttribute('viewBox', '0 0 14 14');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    var rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect1.setAttribute('width', '14');
    rect1.setAttribute('height', '14');
    rect1.setAttribute('fill', 'white');
    var rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect2.setAttribute('width', '14');
    rect2.setAttribute('height', '14');
    rect2.setAttribute('rx', '2');
    rect2.setAttribute('fill', '#A65CF0');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M2.80005 7L5.96943 10.1694L11.6532 3.78564');
    path.setAttribute('stroke', 'white');
    path.setAttribute('stroke-width', '2');
    svg.append(rect1, rect2, path);
    return svg;
  }

  var formCheckboxLabel = document.createElement('label');
  formCheckboxLabel.classList.add('checkbox', 'form__checkbox');
  var formCheckboxInput = document.createElement('input');
  formCheckboxInput.id = 'form-checkbox';
  formCheckboxInput.classList.add('checkbox__input');
  formCheckboxInput.type = 'checkbox';
  var formCheckboxIcon = createSvgCheckbox();
  formCheckboxIcon.classList.add('checkbox__icon');
  var formCheckboxText = document.createElement('span');
  formCheckboxText.classList.add('checkbox__text');
  formCheckboxText.textContent = 'Принимаю ';
  var formCheckboxLink = document.createElement('a');
  formCheckboxLink.classList.add('lnk', 'checkbox__link');
  formCheckboxLink.href = '#';
  formCheckboxLink.textContent = 'пользовательское соглашение';
  formCheckboxText.append(formCheckboxLink);
  formCheckboxLabel.append(formCheckboxInput, formCheckboxIcon, formCheckboxText);
  var formCloseButton = createCloseButton();
  formCloseButton.classList.add('form__close');
  formCloseButton.addEventListener('click', function () {
    modal.remove();
    document.body.style.removeProperty('overflow');
  });
  modalForm.append(formTitle, formText, formNameLabel, formTelLabel, formSubmitButton, formCheckboxLabel, formCloseButton); // Form validation

  var validation = new JustValidate(modalForm, {
    errorLabelCssClass: 'form__label--error',
    errorFieldCssClass: 'form__input--invalid',
    successFieldCssClass: 'form__input--valid',
    errorLabelStyle: {}
  });
  validation.addField('#form-name', [{
    rule: 'required',
    errorMessage: 'Введите ваше имя'
  }, {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Имя должно содержать по крайней мере 3 символа'
  }]).addField('#form-tel', [{
    rule: 'required',
    errorMessage: 'Введите ваш телефон'
  }]).addField('#form-checkbox', [{
    rule: 'required',
    errorMessage: 'Примите пользовательское соглашение'
  }]).onSuccess(function () {
    document.body.append(createThanksModal());
    modal.remove();
  });
  modalForm.addEventListener('submit', function (e) {
    e.preventDefault();
  });
  modal.append(modalForm);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.remove();
      document.body.style.removeProperty('overflow');
    }
  });
  return modal;
}

var buyPerClickButton = document.querySelector('.js-buy-1-click-modal-open');
buyPerClickButton.addEventListener('click', function () {
  document.body.append(createBuyPerClickModal());
  document.body.style.overflow = 'hidden';
}); // aria-hidden for all inline svg images

var svgs = document.querySelectorAll('svg');
svgs.forEach(function (svg) {
  return svg.ariaHidden = true;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsIm5hbWVzIjpbIkNob2ljZXMiLCJhbGxvd0hUTUwiLCJzZWFyY2hFbmFibGVkIiwic2hvdWxkU29ydCIsIml0ZW1TZWxlY3RUZXh0IiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclZhbHVlIiwiYnVyZ2VyTWVudU9wZW5CdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJNZW51Q2xvc2VCdXR0b24iLCJidXJnZXJNZW51Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0aHVtYnNTbGlkZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic2xpZGVUb0NsaWNrZWRTbGlkZSIsImZyZWVNb2RlIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsImExMXkiLCJzbGlkZUxhYmVsTWVzc2FnZSIsInByZXZTbGlkZU1lc3NhZ2UiLCJuZXh0U2xpZGVNZXNzYWdlIiwiYnJlYWtwb2ludHMiLCJzcGFjZUJldHdlZW4iLCJkaXJlY3Rpb24iLCJ0aHVtYnMiLCJzd2lwZXIiLCJjcmVhdGVDbG9zZUJ1dHRvbiIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGUiLCJwYXRoMSIsInBhdGgyIiwiYXBwZW5kIiwiY3JlYXRlUGhvdG9zTW9kYWwiLCJzbGlkZXNBbW91bnQiLCJtb2RhbCIsIm1vZGFsR2FsbGVyeSIsInBob3Rvc01vZGFsU2xpZGVyIiwicGhvdG9zTW9kYWxTd2lwZXJXcmFwcGVyIiwidGh1bWJzTW9kYWxTbGlkZXIiLCJ0aHVtYnNNb2RhbFN3aXBlcldyYXBwZXIiLCJjcmVhdGVTbGlkZXMiLCJjbGFzc05hbWUiLCJhbW91bnQiLCJzbGlkZXMiLCJudW1iZXIiLCJzbGlkZSIsInBpY3R1cmUiLCJzb3VyY2UxIiwic3Jjc2V0IiwidHlwZSIsInNvdXJjZTIiLCJpbWciLCJzcmMiLCJhbHQiLCJwdXNoIiwidGh1bWJzTW9kYWxTd2lwZXJQYWdpbmF0aW9uUHJldiIsInRodW1ic01vZGFsU3dpcGVyUGFnaW5hdGlvbk5leHQiLCJjcmVhdGVTdmdBcnJvdyIsImNpcmNsZSIsInBhdGgiLCJtb2RhbENsb3NlQnV0dG9uIiwiYm9keSIsInN0eWxlIiwicmVtb3ZlUHJvcGVydHkiLCJlIiwidGFyZ2V0IiwicGhvdG9zU2xpZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJwaG90b3NNb2RhbCIsImxlbmd0aCIsIm92ZXJmbG93IiwibW9kYWxUaHVtYnNTbGlkZXIiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic2xpZGVzUGVyR3JvdXAiLCJpbml0aWFsU2xpZGUiLCJjcmVhdGVTdmdFbGVwaGFudCIsImNyZWF0ZVRoYW5rc01vZGFsIiwidGhhbmtzQ29udGFpbmVyIiwidGhhbmtzSWNvbiIsInRoYW5rc1RpdGxlIiwidGV4dENvbnRlbnQiLCJ0aGFua3NDbG9zZUJ1dHRvbiIsImNyZWF0ZUJ1eVBlckNsaWNrTW9kYWwiLCJtb2RhbEZvcm0iLCJmb3JtVGl0bGUiLCJmb3JtVGV4dCIsImZvcm1OYW1lTGFiZWwiLCJmb3JtTmFtZUlucHV0IiwiaWQiLCJhcmlhTGFiZWwiLCJmb3JtVGVsTGFiZWwiLCJmb3JtVGVsSW5wdXQiLCJmb3JtU3VibWl0QnV0dG9uIiwiY3JlYXRlU3ZnQ2hlY2tib3giLCJyZWN0MSIsInJlY3QyIiwiZm9ybUNoZWNrYm94TGFiZWwiLCJmb3JtQ2hlY2tib3hJbnB1dCIsImZvcm1DaGVja2JveEljb24iLCJmb3JtQ2hlY2tib3hUZXh0IiwiZm9ybUNoZWNrYm94TGluayIsImhyZWYiLCJmb3JtQ2xvc2VCdXR0b24iLCJ2YWxpZGF0aW9uIiwiSnVzdFZhbGlkYXRlIiwiZXJyb3JMYWJlbENzc0NsYXNzIiwiZXJyb3JGaWVsZENzc0NsYXNzIiwic3VjY2Vzc0ZpZWxkQ3NzQ2xhc3MiLCJlcnJvckxhYmVsU3R5bGUiLCJhZGRGaWVsZCIsInJ1bGUiLCJlcnJvck1lc3NhZ2UiLCJ2YWx1ZSIsIm9uU3VjY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYnV5UGVyQ2xpY2tCdXR0b24iLCJzdmdzIiwiYXJpYUhpZGRlbiJdLCJzb3VyY2VzIjpbInByb2R1Y3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLXVuZGVmOiAnb2ZmJyAqL1xuXG4vLyBTZWxlY3QgbG9jYXRpb25cbm5ldyBDaG9pY2VzKCcuanMtbG9jYXRpb24tY2hvaWNlcycsIHtcbiAgYWxsb3dIVE1MOiBmYWxzZSxcbiAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gIHNob3VsZFNvcnQ6IGZhbHNlLFxuICBpdGVtU2VsZWN0VGV4dDogJycsXG59KVxuXG4vLyBTZWxlY3QgY2F0ZWdvcnlcbm5ldyBDaG9pY2VzKCcuanMtY2F0ZWdvcmllcy1jaG9pY2VzJywge1xuICBhbGxvd0hUTUw6IGZhbHNlLFxuICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcbiAgc2hvdWxkU29ydDogZmFsc2UsXG4gIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgcGxhY2Vob2xkZXI6IHRydWUsXG4gIHBsYWNlaG9sZGVyVmFsdWU6ICfQmtCw0YLQtdCz0L7RgNC40Y8nLFxufSlcblxuLy8gQnVyZ2VyIG1lbnUgb3Blbi9jbG9zZVxuY29uc3QgYnVyZ2VyTWVudU9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnVyZ2VyLW1lbnUtb3BlbicpXG5jb25zdCBidXJnZXJNZW51Q2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnVyZ2VyLW1lbnUtY2xvc2UnKVxuY29uc3QgYnVyZ2VyTWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyX19jb250ZW50JylcblxuYnVyZ2VyTWVudU9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICBidXJnZXJNZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdidXJnZXJfX2NvbnRlbnQtLW9wZW5lZCcpXG4pXG5idXJnZXJNZW51Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICBidXJnZXJNZW51Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXJfX2NvbnRlbnQtLW9wZW5lZCcpXG4pXG5cbi8vIFByb2R1Y3QgdGh1bWJuYWlscyBzbGlkZXJcbmNvbnN0IHRodW1ic1NsaWRlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXIuanMtcHJvZHVjdC10aHVtYnMtc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXG4gIGZyZWVNb2RlOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBhMTF5OiB7XG4gICAgc2xpZGVMYWJlbE1lc3NhZ2U6ICfQnNC40L3QuNCw0YLRjtGA0LAg0YTQvtGC0L4g0YLQvtCy0LDRgNCwIHt7aW5kZXh9fSDQuNC3IHt7c2xpZGVzTGVuZ3RofX0nLFxuICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQtSDQvNC40L3QuNCw0YLRjtGA0YsnLFxuICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQodC70LXQtNGD0Y7RidC40LUg0LzQuNC90LjQsNGC0Y7RgNGLJyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAzMjA6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMzgsXG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICB9LFxuICAgIDc2ODoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiAxOCxcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMzgsXG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICB9LFxuICB9LFxufSlcblxuLy8gUHJvZHVjdCBwaG90b3Mgc2xpZGVyXG5uZXcgU3dpcGVyKCcuc3dpcGVyLmpzLXByb2R1Y3QtcGhvdG9zLXN3aXBlcicsIHtcbiAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgdGh1bWJzOiB7XG4gICAgc3dpcGVyOiB0aHVtYnNTbGlkZXIsXG4gIH0sXG4gIGExMXk6IHtcbiAgICBzbGlkZUxhYmVsTWVzc2FnZTogJ9Ck0L7RgtC+INGC0L7QstCw0YDQsCB7e2luZGV4fX0g0LjQtyB7e3NsaWRlc0xlbmd0aH19JyxcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J/RgNC10LTRi9C00YPRidC10LUg0YTQvtGC0L4nLFxuICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQodC70LXQtNGD0Y7RidC10LUg0YTQvtGC0L4nLFxuICB9LFxufSlcblxuLy8gQ3JlYXRlIGNsb3NlIGJ1dHRvbiB3aXRoIHN2ZyBpY29uXG5mdW5jdGlvbiBjcmVhdGVDbG9zZUJ1dHRvbigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdtb2RhbF9fY2xvc2UnKVxuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJylcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTInKVxuICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTInKVxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAxMiAxMicpXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJylcblxuICBjb25zdCBwYXRoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpXG4gIHBhdGgxLnNldEF0dHJpYnV0ZShcbiAgICAnZCcsXG4gICAgJ00xLjQyODcyIDAuMjM4NjQzTDYuNzU0ODcgNS40MjM4NkM3LjA4MTcxIDUuNzQyMDYgNy4wODE3MSA2LjI1Nzk0IDYuNzU0ODcgNi41NzYxNEwxLjQyODcyIDExLjc2MTRDMS4xMDE4OCAxMi4wNzk1IDAuNTcxOTY5IDEyLjA3OTUgMC4yNDUxMjkgMTEuNzYxNEMtMC4wODE3MDk4IDExLjQ0MzIgLTAuMDgxNzA5OCAxMC45MjczIDAuMjQ1MTMgMTAuNjA5MUw0Ljk3OTQ5IDZMMC4yNDUxMyAxLjM5MDkxQy0wLjA4MTcwODkgMS4wNzI3MiAtMC4wODE3MDg5IDAuNTU2ODM0IDAuMjQ1MTMgMC4yMzg2NDNDMC41NzE5NyAtMC4wNzk1NDc4IDEuMTAxODggLTAuMDc5NTQ3NyAxLjQyODcyIDAuMjM4NjQzWidcbiAgKVxuICBwYXRoMS5zZXRBdHRyaWJ1dGUoJ2ZpbGwtcnVsZScsICdldmVub2RkJylcbiAgcGF0aDEuc2V0QXR0cmlidXRlKCdjbGlwLXJ1bGUnLCAnZXZlbm9kZCcpXG4gIHBhdGgxLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjOTk5OTk5JylcblxuICBjb25zdCBwYXRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpXG4gIHBhdGgyLnNldEF0dHJpYnV0ZShcbiAgICAnZCcsXG4gICAgJ00xMC41NzEzIDAuMjM4NjQzTDUuMjQ1MTMgNS40MjM4NkM0LjkxODI5IDUuNzQyMDYgNC45MTgyOSA2LjI1Nzk0IDUuMjQ1MTMgNi41NzYxNEwxMC41NzEzIDExLjc2MTRDMTAuODk4MSAxMi4wNzk1IDExLjQyOCAxMi4wNzk1IDExLjc1NDkgMTEuNzYxNEMxMi4wODE3IDExLjQ0MzIgMTIuMDgxNyAxMC45MjczIDExLjc1NDkgMTAuNjA5MUw3LjAyMDUxIDZMMTEuNzU0OSAxLjM5MDkxQzEyLjA4MTcgMS4wNzI3MiAxMi4wODE3IDAuNTU2ODM0IDExLjc1NDkgMC4yMzg2NDNDMTEuNDI4IC0wLjA3OTU0NzggMTAuODk4MSAtMC4wNzk1NDc3IDEwLjU3MTMgMC4yMzg2NDNaJ1xuICApXG4gIHBhdGgyLnNldEF0dHJpYnV0ZSgnZmlsbC1ydWxlJywgJ2V2ZW5vZGQnKVxuICBwYXRoMi5zZXRBdHRyaWJ1dGUoJ2NsaXAtcnVsZScsICdldmVub2RkJylcbiAgcGF0aDIuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM5OTk5OTknKVxuXG4gIHN2Zy5hcHBlbmQocGF0aDEsIHBhdGgyKVxuICBidXR0b24uYXBwZW5kKHN2ZylcblxuICByZXR1cm4gYnV0dG9uXG59XG5cbi8vIFByb2R1Y3QgcGhvdG9zIG1vZGFsXG5mdW5jdGlvbiBjcmVhdGVQaG90b3NNb2RhbChzbGlkZXNBbW91bnQpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdjb250YWluZXInKVxuXG4gIGNvbnN0IG1vZGFsR2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1vZGFsR2FsbGVyeS5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5JywgJ21vZGFsX19nYWxsZXJ5JylcblxuICBjb25zdCBwaG90b3NNb2RhbFNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHBob3Rvc01vZGFsU2xpZGVyLmNsYXNzTGlzdC5hZGQoXG4gICAgJ3N3aXBlcicsXG4gICAgJ2dhbGxlcnlfX3Bob3RvcycsXG4gICAgJ2pzLW1vZGFsLXBob3Rvcy1zd2lwZXInXG4gIClcblxuICBjb25zdCBwaG90b3NNb2RhbFN3aXBlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gIHBob3Rvc01vZGFsU3dpcGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdsc3QnLCAnc3dpcGVyLXdyYXBwZXInKVxuXG4gIGNvbnN0IHRodW1ic01vZGFsU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGh1bWJzTW9kYWxTbGlkZXIuY2xhc3NMaXN0LmFkZChcbiAgICAnc3dpcGVyJyxcbiAgICAnZ2FsbGVyeV9fdGh1bWJzJyxcbiAgICAnanMtbW9kYWwtdGh1bWJzLXN3aXBlcidcbiAgKVxuXG4gIGNvbnN0IHRodW1ic01vZGFsU3dpcGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgdGh1bWJzTW9kYWxTd2lwZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2xzdCcsICdzd2lwZXItd3JhcHBlcicpXG5cbiAgZnVuY3Rpb24gY3JlYXRlU2xpZGVzKGNsYXNzTmFtZSwgYW1vdW50KSB7XG4gICAgY29uc3Qgc2xpZGVzID0gW11cblxuICAgIGZvciAobGV0IG51bWJlciA9IDE7IG51bWJlciA8PSBhbW91bnQ7IG51bWJlcisrKSB7XG4gICAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlJywgYCR7Y2xhc3NOYW1lfS1zbGlkZWAsICdzd2lwZXItc2xpZGUnKVxuXG4gICAgICBjb25zdCBwaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpXG4gICAgICBwaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlX19pbWcnKVxuXG4gICAgICBjb25zdCBzb3VyY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJylcbiAgICAgIHNvdXJjZTEuc3Jjc2V0ID0gYGltZy9wcm9kdWN0LXBob3RvLSR7bnVtYmVyfS53ZWJwLCBpbWcvcHJvZHVjdC1waG90by0ke251bWJlcn1AMngud2VicCAyeGBcbiAgICAgIHNvdXJjZTEudHlwZSA9ICdpbWFnZS93ZWJwJ1xuXG4gICAgICBjb25zdCBzb3VyY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJylcbiAgICAgIHNvdXJjZTIuc3Jjc2V0ID0gYGltZy9wcm9kdWN0LXBob3RvLSR7bnVtYmVyfS5wbmcsIGltZy9wcm9kdWN0LXBob3RvLSR7bnVtYmVyfUAyeC5wbmcgMnhgXG5cbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICBpbWcuc3JjID0gYGltZy9wcm9kdWN0LXBob3RvLSR7bnVtYmVyfS5wbmdgXG4gICAgICBpbWcuYWx0ID0gYNCk0L7RgtC+ICR7bnVtYmVyfWBcblxuICAgICAgcGljdHVyZS5hcHBlbmQoc291cmNlMSwgc291cmNlMiwgaW1nKVxuICAgICAgc2xpZGUuYXBwZW5kKHBpY3R1cmUpXG4gICAgICBzbGlkZXMucHVzaChzbGlkZSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2xpZGVzXG4gIH1cblxuICBwaG90b3NNb2RhbFN3aXBlcldyYXBwZXIuYXBwZW5kKFxuICAgIC4uLmNyZWF0ZVNsaWRlcygnZ2FsbGVyeV9fcGhvdG9zJywgc2xpZGVzQW1vdW50KVxuICApXG4gIHBob3Rvc01vZGFsU2xpZGVyLmFwcGVuZChwaG90b3NNb2RhbFN3aXBlcldyYXBwZXIpXG5cbiAgY29uc3QgdGh1bWJzTW9kYWxTd2lwZXJQYWdpbmF0aW9uUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRodW1ic01vZGFsU3dpcGVyUGFnaW5hdGlvblByZXYuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWJ1dHRvbi1wcmV2JylcblxuICBjb25zdCB0aHVtYnNNb2RhbFN3aXBlclBhZ2luYXRpb25OZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGh1bWJzTW9kYWxTd2lwZXJQYWdpbmF0aW9uTmV4dC5jbGFzc0xpc3QuYWRkKCdzd2lwZXItYnV0dG9uLW5leHQnKVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN2Z0Fycm93KCkge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJylcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICczMicpXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzMyJylcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAzMiAzMicpXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJylcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpXG5cbiAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgICAgJ2NpcmNsZSdcbiAgICApXG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnY3gnLCAnMTYnKVxuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2N5JywgJzE2JylcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdyJywgJzE1JylcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnI0E2NUNGMCcpXG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzInKVxuXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpXG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTE0IDExTDE5IDE2TDE0IDIxJylcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJyNBNjVDRjAnKVxuICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMicpXG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJylcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcblxuICAgIHN2Zy5hcHBlbmQoY2lyY2xlLCBwYXRoKVxuICAgIHJldHVybiBzdmdcbiAgfVxuXG4gIHRodW1ic01vZGFsU3dpcGVyUGFnaW5hdGlvblByZXYuYXBwZW5kKGNyZWF0ZVN2Z0Fycm93KCkpXG4gIHRodW1ic01vZGFsU3dpcGVyUGFnaW5hdGlvbk5leHQuYXBwZW5kKGNyZWF0ZVN2Z0Fycm93KCkpXG5cbiAgdGh1bWJzTW9kYWxTd2lwZXJXcmFwcGVyLmFwcGVuZChcbiAgICAuLi5jcmVhdGVTbGlkZXMoJ2dhbGxlcnlfX3RodW1icycsIHNsaWRlc0Ftb3VudClcbiAgKVxuICB0aHVtYnNNb2RhbFNsaWRlci5hcHBlbmQoXG4gICAgdGh1bWJzTW9kYWxTd2lwZXJXcmFwcGVyLFxuICAgIHRodW1ic01vZGFsU3dpcGVyUGFnaW5hdGlvblByZXYsXG4gICAgdGh1bWJzTW9kYWxTd2lwZXJQYWdpbmF0aW9uTmV4dFxuICApXG5cbiAgY29uc3QgbW9kYWxDbG9zZUJ1dHRvbiA9IGNyZWF0ZUNsb3NlQnV0dG9uKClcbiAgbW9kYWxDbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19jbG9zZScpXG4gIG1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWwucmVtb3ZlKClcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpXG4gIH0pXG5cbiAgbW9kYWxHYWxsZXJ5LmFwcGVuZChwaG90b3NNb2RhbFNsaWRlciwgdGh1bWJzTW9kYWxTbGlkZXIsIG1vZGFsQ2xvc2VCdXR0b24pXG4gIG1vZGFsLmFwcGVuZChtb2RhbEdhbGxlcnkpXG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnJlbW92ZSgpXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBtb2RhbFxufVxuXG5jb25zdCBwaG90b3NTbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9fcGhvdG9zLXNsaWRlJylcbnBob3Rvc1NsaWRlcy5mb3JFYWNoKChzbGlkZSwgbnVtYmVyKSA9PlxuICBzbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwaG90b3NNb2RhbCA9IGNyZWF0ZVBob3Rvc01vZGFsKHBob3Rvc1NsaWRlcy5sZW5ndGgpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocGhvdG9zTW9kYWwpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG5cbiAgICBjb25zdCBtb2RhbFRodW1ic1NsaWRlciA9IG5ldyBTd2lwZXIoXG4gICAgICBwaG90b3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuanMtbW9kYWwtdGh1bWJzLXN3aXBlcicpLFxuICAgICAge1xuICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBhMTF5OiB7XG4gICAgICAgICAgc2xpZGVMYWJlbE1lc3NhZ2U6XG4gICAgICAgICAgICAn0JzQuNC90LjQsNGC0Y7RgNCwINGE0L7RgtC+INGC0L7QstCw0YDQsCB7e2luZGV4fX0g0LjQtyB7e3NsaWRlc0xlbmd0aH19JyxcbiAgICAgICAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J/RgNC10LTRi9C00YPRidC40LUg0LzQuNC90LjQsNGC0Y7RgNGLJyxcbiAgICAgICAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0KHQu9C10LTRg9GO0YnQuNC1INC80LjQvdC40LDRgtGO0YDRiycsXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNjIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNzksXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDY2LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTQwMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDQsXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA1MSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIClcblxuICAgIG5ldyBTd2lwZXIocGhvdG9zTW9kYWwucXVlcnlTZWxlY3RvcignLmpzLW1vZGFsLXBob3Rvcy1zd2lwZXInKSwge1xuICAgICAgaW5pdGlhbFNsaWRlOiBudW1iZXIsXG4gICAgICB0aHVtYnM6IHtcbiAgICAgICAgc3dpcGVyOiBtb2RhbFRodW1ic1NsaWRlcixcbiAgICAgIH0sXG4gICAgICBhMTF5OiB7XG4gICAgICAgIHNsaWRlTGFiZWxNZXNzYWdlOiAn0KTQvtGC0L4g0YLQvtCy0LDRgNCwIHt7aW5kZXh9fSDQuNC3IHt7c2xpZGVzTGVuZ3RofX0nLFxuICAgICAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J/RgNC10LTRi9C00YPRidC10LUg0YTQvtGC0L4nLFxuICAgICAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0KHQu9C10LTRg9GO0YnQtdC1INGE0L7RgtC+JyxcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAzMjA6IHtcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgICAgICB9LFxuICAgICAgICA3Njg6IHtcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICB9LFxuICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiA2NixcbiAgICAgICAgfSxcbiAgICAgICAgMTQwMDoge1xuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTA4LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuICB9KVxuKVxuXG4vLyBBbGlrZSBwcm9kdWN0cyBzbGlkZXJcbm5ldyBTd2lwZXIoJy5zd2lwZXIuanMtYWxpa2Utc3dpcGVyJywge1xuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIGExMXk6IHtcbiAgICBzbGlkZUxhYmVsTWVzc2FnZTogJ9Cf0L7RhdC+0LbQuNC5INGC0L7QstCw0YAge3tpbmRleH19INC40Lcge3tzbGlkZXNMZW5ndGh9fScsXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cf0YDQtdC00YvQtNGD0YnQuNC1INGC0L7QstCw0YDRiycsXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9Ch0LvQtdC00YPRjtGJ0LjQtSDRgtC+0LLQsNGA0YsnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICB9LFxuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgfSxcbiAgICAxNDAwOiB7XG4gICAgICBzbGlkZXNQZXJHcm91cDogNCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDMyLFxuICAgIH0sXG4gIH0sXG59KVxuXG4vLyBDcmVhdGUgaWNvbiBmb3IgdGhhbmtzIG1vZGFsXG5mdW5jdGlvbiBjcmVhdGVTdmdFbGVwaGFudCgpIHtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKVxuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICc3MycpXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc1MCcpXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDczIDUwJylcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJylcbiAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKVxuXG4gIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKVxuICBwYXRoLnNldEF0dHJpYnV0ZShcbiAgICAnZCcsXG4gICAgJ00xMS41OTgxIDQ0LjgwNTZDMjAuNzgzMiA0NC44MDU2IDIyLjUxNCAzNi43Mjk2IDIyLjUxNCAzMC4yNjM2QzIzLjYwNDkgMzAuMjYzNiAzMi4yMjY0IDMwLjI2MzYgMzYuMTU4OSAzMC4yNjM2QzU3LjU0OTIgMzAuMjYzNiA1Ny41NTQ3IDAgMzYuODQxMSAwQzMxLjIwNzIgMCAyNy41NzgzIDMuNDE1NTEgMjYuNjA2OCA0LjYwNTMyQzE1LjA0OTYgNC42MDUzMiAxMy42NDQ5IDEwLjY0NCAxMy42NDQ5IDIyLjM2OTRDMTMuNjQ0OSAyNC42MzE0IDEzLjY0NDkgMzEuOTg0NiAxMy42NDQ5IDMzLjExNzNDMTMuNjQ0OSAzNS44NzQyIDEyLjUzNjkgMzcuNjYyOSA5LjU1MDcyIDM3LjY2MjlDNy4wMDExNyAzNy42NjI5IDUuNzkzNjEgMzUuNDA1MyA0Ljc3NTAyIDMyLjIzNzNDNC4yNDQyMyAzMi41MjI0IDAuNTE3MTM4IDM0LjUzODMgLTIuMjM1MTdlLTA2IDM0Ljg2ODlDMS4xMjc3NSAzOC4wMzM3IDIuMzM1MzEgNDQuODA1NiAxMS41OTgxIDQ0LjgwNTZaTTI0LjU4MzkgMTcuNzYzNEMyOC4wODMyIDE3Ljc2MzQgMjguMzgwNiAyMy4wMjY2IDI0LjMzNjMgMjMuMDI2NkMyMC45MjcxIDIzLjAyNjYgMjEuMDE1OCAxNy43NjM0IDI0LjU4MzkgMTcuNzYzNFpNMzYuODQxOCAzMy41MzU1QzMzLjg4NDMgMzMuNTM1NSAyNS4yNDMgMzIuODk1MiAyNS4yNDMgMzIuODk1MlY0OS4xMjEzTDMzLjQyOTkgNDkuMjM4MkwzNS40NzY2IDM3LjUwMDVMNjEuNDAxOSAzNy4wMTM0TDYyLjA4NDggNDkuODgyNEw3MS42MzYyIDUwQzcxLjYzNjIgNTAgNzMgMjQuNzkzOCA3MyAxOS43MzcxQzczIDEwLjM1NzYgNjguODAzNSA1LjA0ODkgNTkuMzU1MSA0LjYwNTMyQzU2Ljk4NzggNC40OTQyNiA1My44OTA0IDQuMDUyNjMgNTEuODUwNSAzLjk0NzQyQzYwLjc0MjEgMTQuNzY2OCA1My42NjczIDMzLjUzNTUgMzYuODQxOCAzMy41MzU1Wk01My4yMTU2IDQwLjExNDZMNTMuODk3MiA0OS42NDg2TDU5LjM1NTEgNDkuNzY2Mkw1OC42NzI5IDQwLjExNDZINTMuMjE1NlpNMzYuMTU4OSA0OS4zNTY0TDQxLjYxNjggNDkuNDczM0w0Mi45ODA2IDQwLjExNDZIMzguMjA0OUwzNi4xNTg5IDQ5LjM1NjRaJ1xuICApXG4gIHBhdGguc2V0QXR0cmlidXRlKCdmaWxsLXJ1bGUnLCAnZXZlbm9kZCcpXG4gIHBhdGguc2V0QXR0cmlidXRlKCdjbGlwLXJ1bGUnLCAnZXZlbm9kZCcpXG4gIHBhdGguc2V0QXR0cmlidXRlKCdmaWxsJywgJyNGRjg2MkYnKVxuXG4gIHN2Zy5hcHBlbmQocGF0aClcbiAgcmV0dXJuIHN2Z1xufVxuXG4vLyBUaGFua3MgZm9yIHRoZSBvcmRlciBtb2RhbFxuZnVuY3Rpb24gY3JlYXRlVGhhbmtzTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnY29udGFpbmVyJylcblxuICBjb25zdCB0aGFua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0aGFua3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGhhbmtzJywgJ21vZGFsX190aGFua3MnKVxuXG4gIGNvbnN0IHRoYW5rc0ljb24gPSBjcmVhdGVTdmdFbGVwaGFudCgpXG4gIHRoYW5rc0ljb24uY2xhc3NMaXN0LmFkZCgndGhhbmtzX19pY29uJylcblxuICBjb25zdCB0aGFua3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JylcbiAgdGhhbmtzVGl0bGUuY2xhc3NMaXN0LmFkZCgndGhhbmtzX190aXRsZScpXG4gIHRoYW5rc1RpdGxlLnRleHRDb250ZW50ID0gJ9Ch0L/QsNGB0LjQsdC+LCDQvNGLINCy0LDQvCDQv9C10YDQtdC30LLQvtC90LjQvCEnXG5cbiAgY29uc3QgdGhhbmtzQ2xvc2VCdXR0b24gPSBjcmVhdGVDbG9zZUJ1dHRvbigpXG4gIHRoYW5rc0Nsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2Nsb3NlJylcblxuICB0aGFua3NDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbC5yZW1vdmUoKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JylcbiAgfSlcblxuICB0aGFua3NDb250YWluZXIuYXBwZW5kKHRoYW5rc0ljb24sIHRoYW5rc1RpdGxlLCB0aGFua3NDbG9zZUJ1dHRvbilcbiAgbW9kYWwuYXBwZW5kKHRoYW5rc0NvbnRhaW5lcilcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgbW9kYWwucmVtb3ZlKClcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG1vZGFsXG59XG5cbi8vIEJ1eSBwZXIgMSBjbGljayBtb2RhbFxuZnVuY3Rpb24gY3JlYXRlQnV5UGVyQ2xpY2tNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdjb250YWluZXInKVxuXG4gIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBtb2RhbEZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScsICdtb2RhbF9fZm9ybScpXG5cbiAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybV9fdGl0bGUnKVxuICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSAn0JrRg9C/0LjRgtGMINCyINC+0LTQuNC9INC60LvQuNC6J1xuXG4gIGNvbnN0IGZvcm1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGZvcm1UZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX3RleHQnKVxuICBmb3JtVGV4dC50ZXh0Q29udGVudCA9XG4gICAgJ9Cn0YLQvtCx0Ysg0L7RhNC+0YDQvNC40YLRjCDQt9Cw0LrQsNC3IOKAlCDQt9Cw0L/QvtC70L3QuNGC0LUg0YTQvtGA0LzRiyDQvdC40LbQtSDQuMKg0L3QsNGIINC80LXQvdC10LTQttC10YAg0YHQstGP0LbQtdGC0YHRjyDRgSDQstCw0LzQuCDQsiDRgtC10YfQtdC90LjQuCDRh9Cw0YHQsC4nXG5cbiAgY29uc3QgZm9ybU5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgZm9ybU5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtX19sYWJlbCcpXG5cbiAgY29uc3QgZm9ybU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgZm9ybU5hbWVJbnB1dC5pZCA9ICdmb3JtLW5hbWUnXG4gIGZvcm1OYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQnKVxuICBmb3JtTmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgZm9ybU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICfQmtCw0Log0LLQsNGBINC30L7QstGD0YI/J1xuICBmb3JtTmFtZUlucHV0LmFyaWFMYWJlbCA9ICfQktCy0LXQtNC40YLQtSDQstCw0YjQtSDQuNC80Y8nXG5cbiAgZm9ybU5hbWVMYWJlbC5hcHBlbmQoZm9ybU5hbWVJbnB1dClcblxuICBjb25zdCBmb3JtVGVsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIGZvcm1UZWxMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtX19sYWJlbCcpXG5cbiAgY29uc3QgZm9ybVRlbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBmb3JtVGVsSW5wdXQuaWQgPSAnZm9ybS10ZWwnXG4gIGZvcm1UZWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpXG4gIGZvcm1UZWxJbnB1dC50eXBlID0gJ3RlbCdcbiAgZm9ybVRlbElucHV0LnBsYWNlaG9sZGVyID0gJ9CS0LDRiCDRgtC10LvQtdGE0L7QvSdcbiAgZm9ybVRlbElucHV0LmFyaWFMYWJlbCA9ICfQktCy0LXQtNC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L0nXG5cbiAgZm9ybVRlbExhYmVsLmFwcGVuZChmb3JtVGVsSW5wdXQpXG5cbiAgY29uc3QgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGZvcm1TdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2Zvcm1fX2J0bicpXG4gIGZvcm1TdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnXG4gIGZvcm1TdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAn0J7RgtC/0YDQsNCy0LjRgtGMJ1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN2Z0NoZWNrYm94KCkge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJylcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxNCcpXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzE0JylcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAxNCAxNCcpXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJylcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpXG5cbiAgICBjb25zdCByZWN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncmVjdCcpXG4gICAgcmVjdDEuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxNCcpXG4gICAgcmVjdDEuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTQnKVxuICAgIHJlY3QxLnNldEF0dHJpYnV0ZSgnZmlsbCcsICd3aGl0ZScpXG5cbiAgICBjb25zdCByZWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncmVjdCcpXG4gICAgcmVjdDIuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxNCcpXG4gICAgcmVjdDIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTQnKVxuICAgIHJlY3QyLnNldEF0dHJpYnV0ZSgncngnLCAnMicpXG4gICAgcmVjdDIuc2V0QXR0cmlidXRlKCdmaWxsJywgJyNBNjVDRjAnKVxuXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpXG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTIuODAwMDUgN0w1Ljk2OTQzIDEwLjE2OTRMMTEuNjUzMiAzLjc4NTY0JylcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3doaXRlJylcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzInKVxuXG4gICAgc3ZnLmFwcGVuZChyZWN0MSwgcmVjdDIsIHBhdGgpXG4gICAgcmV0dXJuIHN2Z1xuICB9XG5cbiAgY29uc3QgZm9ybUNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIGZvcm1DaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JywgJ2Zvcm1fX2NoZWNrYm94JylcblxuICBjb25zdCBmb3JtQ2hlY2tib3hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgZm9ybUNoZWNrYm94SW5wdXQuaWQgPSAnZm9ybS1jaGVja2JveCdcbiAgZm9ybUNoZWNrYm94SW5wdXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hfX2lucHV0JylcbiAgZm9ybUNoZWNrYm94SW5wdXQudHlwZSA9ICdjaGVja2JveCdcblxuICBjb25zdCBmb3JtQ2hlY2tib3hJY29uID0gY3JlYXRlU3ZnQ2hlY2tib3goKVxuICBmb3JtQ2hlY2tib3hJY29uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94X19pY29uJylcblxuICBjb25zdCBmb3JtQ2hlY2tib3hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIGZvcm1DaGVja2JveFRleHQuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hfX3RleHQnKVxuICBmb3JtQ2hlY2tib3hUZXh0LnRleHRDb250ZW50ID0gJ9Cf0YDQuNC90LjQvNCw0Y4gJ1xuXG4gIGNvbnN0IGZvcm1DaGVja2JveExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgZm9ybUNoZWNrYm94TGluay5jbGFzc0xpc3QuYWRkKCdsbmsnLCAnY2hlY2tib3hfX2xpbmsnKVxuICBmb3JtQ2hlY2tib3hMaW5rLmhyZWYgPSAnIydcbiAgZm9ybUNoZWNrYm94TGluay50ZXh0Q29udGVudCA9ICfQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtSdcblxuICBmb3JtQ2hlY2tib3hUZXh0LmFwcGVuZChmb3JtQ2hlY2tib3hMaW5rKVxuICBmb3JtQ2hlY2tib3hMYWJlbC5hcHBlbmQoXG4gICAgZm9ybUNoZWNrYm94SW5wdXQsXG4gICAgZm9ybUNoZWNrYm94SWNvbixcbiAgICBmb3JtQ2hlY2tib3hUZXh0XG4gIClcblxuICBjb25zdCBmb3JtQ2xvc2VCdXR0b24gPSBjcmVhdGVDbG9zZUJ1dHRvbigpXG4gIGZvcm1DbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtX19jbG9zZScpXG5cbiAgZm9ybUNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsLnJlbW92ZSgpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKVxuICB9KVxuXG4gIG1vZGFsRm9ybS5hcHBlbmQoXG4gICAgZm9ybVRpdGxlLFxuICAgIGZvcm1UZXh0LFxuICAgIGZvcm1OYW1lTGFiZWwsXG4gICAgZm9ybVRlbExhYmVsLFxuICAgIGZvcm1TdWJtaXRCdXR0b24sXG4gICAgZm9ybUNoZWNrYm94TGFiZWwsXG4gICAgZm9ybUNsb3NlQnV0dG9uXG4gIClcblxuICAvLyBGb3JtIHZhbGlkYXRpb25cbiAgY29uc3QgdmFsaWRhdGlvbiA9IG5ldyBKdXN0VmFsaWRhdGUobW9kYWxGb3JtLCB7XG4gICAgZXJyb3JMYWJlbENzc0NsYXNzOiAnZm9ybV9fbGFiZWwtLWVycm9yJyxcbiAgICBlcnJvckZpZWxkQ3NzQ2xhc3M6ICdmb3JtX19pbnB1dC0taW52YWxpZCcsXG4gICAgc3VjY2Vzc0ZpZWxkQ3NzQ2xhc3M6ICdmb3JtX19pbnB1dC0tdmFsaWQnLFxuICAgIGVycm9yTGFiZWxTdHlsZToge30sXG4gIH0pXG5cbiAgdmFsaWRhdGlvblxuICAgIC5hZGRGaWVsZCgnI2Zvcm0tbmFtZScsIFtcbiAgICAgIHtcbiAgICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAn0JLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxuICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAn0JjQvNGPINC00L7Qu9C20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0L/QviDQutGA0LDQudC90LXQuSDQvNC10YDQtSAzINGB0LjQvNCy0L7Qu9CwJyxcbiAgICAgIH0sXG4gICAgXSlcbiAgICAuYWRkRmllbGQoJyNmb3JtLXRlbCcsIFtcbiAgICAgIHtcbiAgICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAn0JLQstC10LTQuNGC0LUg0LLQsNGIINGC0LXQu9C10YTQvtC9JyxcbiAgICAgIH0sXG4gICAgXSlcbiAgICAuYWRkRmllbGQoJyNmb3JtLWNoZWNrYm94JywgW1xuICAgICAge1xuICAgICAgICBydWxlOiAncmVxdWlyZWQnLFxuICAgICAgICBlcnJvck1lc3NhZ2U6ICfQn9GA0LjQvNC40YLQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtScsXG4gICAgICB9LFxuICAgIF0pXG4gICAgLm9uU3VjY2VzcygoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjcmVhdGVUaGFua3NNb2RhbCgpKVxuICAgICAgbW9kYWwucmVtb3ZlKClcbiAgICB9KVxuXG4gIG1vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9KVxuXG4gIG1vZGFsLmFwcGVuZChtb2RhbEZvcm0pXG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnJlbW92ZSgpXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBtb2RhbFxufVxuXG5jb25zdCBidXlQZXJDbGlja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idXktMS1jbGljay1tb2RhbC1vcGVuJylcbmJ1eVBlckNsaWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChjcmVhdGVCdXlQZXJDbGlja01vZGFsKCkpXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xufSlcblxuLy8gYXJpYS1oaWRkZW4gZm9yIGFsbCBpbmxpbmUgc3ZnIGltYWdlc1xuY29uc3Qgc3ZncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2ZycpXG5zdmdzLmZvckVhY2goKHN2ZykgPT4gKHN2Zy5hcmlhSGlkZGVuID0gdHJ1ZSkpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBLElBQUlBLE9BQUosQ0FBWSxzQkFBWixFQUFvQztFQUNsQ0MsU0FBUyxFQUFFLEtBRHVCO0VBRWxDQyxhQUFhLEVBQUUsS0FGbUI7RUFH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
