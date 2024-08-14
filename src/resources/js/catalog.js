"use strict";

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
}); // Show/hide filter params

var filterCategoryButton = document.querySelector('.js-filter-category-button');
var filterPriceButton = document.querySelector('.js-filter-price-button');
var filterDiscountButton = document.querySelector('.js-filter-discount-button');
var filterColorButton = document.querySelector('.js-filter-color-button');
var filterCategoryOptions = document.querySelector('.js-filter-category-options');
var filterPriceOptions = document.querySelector('.js-filter-price-options');
var filterDiscountOptions = document.querySelector('.js-filter-discount-options');
var filterColorOptions = document.querySelector('.js-filter-color-options');

function toggleFilterOption(button, option) {
  var activeButton = document.querySelector('.param__btn--active');
  var activeOption = document.querySelector('.param__options--active');
  if (activeButton && activeButton !== button) activeButton.classList.remove('param__btn--active');
  if (activeOption && activeOption !== option) activeOption.classList.remove('param__options--active');
  button.classList.toggle('param__btn--active');
  option.classList.toggle('param__options--active');
}

filterCategoryButton.addEventListener('click', function () {
  return toggleFilterOption(filterCategoryButton, filterCategoryOptions);
});
filterPriceButton.addEventListener('click', function () {
  return toggleFilterOption(filterPriceButton, filterPriceOptions);
});
filterDiscountButton.addEventListener('click', function () {
  return toggleFilterOption(filterDiscountButton, filterDiscountOptions);
});
filterColorButton.addEventListener('click', function () {
  return toggleFilterOption(filterColorButton, filterColorOptions);
}); // Filter price slider

var filterPriceFromInput = document.querySelector('.js-filter-price-from');
var filterPriceToInput = document.querySelector('.js-filter-price-to');
var filterPriceSlider = document.querySelector('.js-filter-price-nouislider');
noUiSlider.create(filterPriceSlider, {
  start: [10000, 100000],
  connect: true,
  range: {
    min: 0,
    max: 150000
  },
  step: 1,
  format: wNumb({
    decimals: 0,
    thousand: ' '
  })
});
filterPriceSlider.noUiSlider.on('update', function (values, handle) {
  var value = values[handle];

  if (handle) {
    filterPriceToInput.value = value;
  } else {
    filterPriceFromInput.value = value;
  }
});
filterPriceFromInput.addEventListener('change', function () {
  return filterPriceSlider.noUiSlider.set([filterPriceFromInput.value, null]);
});
filterPriceToInput.addEventListener('change', function () {
  return filterPriceSlider.noUiSlider.set([null, filterPriceToInput.value]);
}); // Remove filter parameter buttons from tabindex

function setParamButtonsAriaHidden() {
  var paramButtons = document.querySelectorAll('.param__btn');

  if (window.innerWidth >= 1400) {
    paramButtons.forEach(function (button) {
      button.ariaDisabled = true;
      button.setAttribute('tabindex', '-1');
    });
  } else {
    paramButtons.forEach(function (button) {
      button.ariaDisabled = false;
      button.removeAttribute('tabindex');
    });
  }
} // Products pagination


var catalogSection = document.querySelector('.catalog');
var productsList = document.querySelector('.catalog__list');
var products = document.querySelectorAll('.catalog__product');
var productsPerPage = window.innerWidth >= 1024 ? 9 : 6;
var currentPage = 1;
var lastPage = Math.floor(products.length / productsPerPage);

function showProducts() {
  products.forEach(function (product, number) {
    product.remove();

    if (number >= productsPerPage * (currentPage - 1) && number < productsPerPage * currentPage) {
      productsList.append(product);
    }
  });
}

function createPagination(count) {
  var list = document.createElement('ul');
  list.classList.add('lst', 'pagination', 'catalog__pagination');

  var _loop = function _loop(i) {
    var item = document.createElement('li');
    item.classList.add('pagination__item');
    var button = document.createElement('button');
    button.classList.add('btn', 'pagination__btn');
    button.ariaLabel = "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ".concat(i + 1);
    if (i === 0) button.classList.add('pagination__btn--active');
    button.textContent = i + 1;
    button.addEventListener('click', function () {
      currentPage = Number(button.textContent);
      showProducts();
      var activeButton = document.querySelector('.pagination__btn--active');
      activeButton.classList.remove('pagination__btn--active');
      button.classList.add('pagination__btn--active');
      catalogSection.scrollIntoView(true);
    });
    item.append(button);
    list.append(item);
  };

  for (var i = 0; i < count; i++) {
    _loop(i);
  }

  return list;
}

if (lastPage > 1) catalogSection.append(createPagination(lastPage));
showProducts();
setParamButtonsAriaHidden();
var currentWindowWidth = window.innerWidth;

function resizeHandler() {
  if (window.innerWidth !== currentWindowWidth) {
    currentWindowWidth = window.innerWidth;
    productsPerPage = window.innerWidth >= 1024 ? 9 : 6;
    currentPage = 1;
    lastPage = Math.floor(products.length / productsPerPage);
    var pagination = document.querySelector('.catalog__pagination');
    pagination.remove();
    catalogSection.append(createPagination(lastPage));
    showProducts();
    setParamButtonsAriaHidden();
  }
}

var timeoutID;
window.addEventListener('resize', function () {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(resizeHandler, 300);
}); // aria-hidden for all inline svg images

var svgs = document.querySelectorAll('svg');
svgs.forEach(function (svg) {
  return svg.ariaHidden = true;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsIm5hbWVzIjpbIkNob2ljZXMiLCJhbGxvd0hUTUwiLCJzZWFyY2hFbmFibGVkIiwic2hvdWxkU29ydCIsIml0ZW1TZWxlY3RUZXh0IiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclZhbHVlIiwiYnVyZ2VyTWVudU9wZW5CdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJNZW51Q2xvc2VCdXR0b24iLCJidXJnZXJNZW51Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJmaWx0ZXJDYXRlZ29yeUJ1dHRvbiIsImZpbHRlclByaWNlQnV0dG9uIiwiZmlsdGVyRGlzY291bnRCdXR0b24iLCJmaWx0ZXJDb2xvckJ1dHRvbiIsImZpbHRlckNhdGVnb3J5T3B0aW9ucyIsImZpbHRlclByaWNlT3B0aW9ucyIsImZpbHRlckRpc2NvdW50T3B0aW9ucyIsImZpbHRlckNvbG9yT3B0aW9ucyIsInRvZ2dsZUZpbHRlck9wdGlvbiIsImJ1dHRvbiIsIm9wdGlvbiIsImFjdGl2ZUJ1dHRvbiIsImFjdGl2ZU9wdGlvbiIsInRvZ2dsZSIsImZpbHRlclByaWNlRnJvbUlucHV0IiwiZmlsdGVyUHJpY2VUb0lucHV0IiwiZmlsdGVyUHJpY2VTbGlkZXIiLCJub1VpU2xpZGVyIiwiY3JlYXRlIiwic3RhcnQiLCJjb25uZWN0IiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJzdGVwIiwiZm9ybWF0Iiwid051bWIiLCJkZWNpbWFscyIsInRob3VzYW5kIiwib24iLCJ2YWx1ZXMiLCJoYW5kbGUiLCJ2YWx1ZSIsInNldCIsInNldFBhcmFtQnV0dG9uc0FyaWFIaWRkZW4iLCJwYXJhbUJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImZvckVhY2giLCJhcmlhRGlzYWJsZWQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjYXRhbG9nU2VjdGlvbiIsInByb2R1Y3RzTGlzdCIsInByb2R1Y3RzIiwicHJvZHVjdHNQZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJsYXN0UGFnZSIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsInNob3dQcm9kdWN0cyIsInByb2R1Y3QiLCJudW1iZXIiLCJhcHBlbmQiLCJjcmVhdGVQYWdpbmF0aW9uIiwiY291bnQiLCJsaXN0IiwiY3JlYXRlRWxlbWVudCIsImkiLCJpdGVtIiwiYXJpYUxhYmVsIiwidGV4dENvbnRlbnQiLCJOdW1iZXIiLCJzY3JvbGxJbnRvVmlldyIsImN1cnJlbnRXaW5kb3dXaWR0aCIsInJlc2l6ZUhhbmRsZXIiLCJwYWdpbmF0aW9uIiwidGltZW91dElEIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInN2Z3MiLCJzdmciLCJhcmlhSGlkZGVuIl0sInNvdXJjZXMiOlsiY2F0YWxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tdW5kZWY6ICdvZmYnICovXG5cbi8vIFNlbGVjdCBsb2NhdGlvblxubmV3IENob2ljZXMoJy5qcy1sb2NhdGlvbi1jaG9pY2VzJywge1xuICBhbGxvd0hUTUw6IGZhbHNlLFxuICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcbiAgc2hvdWxkU29ydDogZmFsc2UsXG4gIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbn0pXG5cbi8vIFNlbGVjdCBjYXRlZ29yeVxubmV3IENob2ljZXMoJy5qcy1jYXRlZ29yaWVzLWNob2ljZXMnLCB7XG4gIGFsbG93SFRNTDogZmFsc2UsXG4gIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICBzaG91bGRTb3J0OiBmYWxzZSxcbiAgaXRlbVNlbGVjdFRleHQ6ICcnLFxuICBwbGFjZWhvbGRlcjogdHJ1ZSxcbiAgcGxhY2Vob2xkZXJWYWx1ZTogJ9Ca0LDRgtC10LPQvtGA0LjRjycsXG59KVxuXG4vLyBCdXJnZXIgbWVudSBvcGVuL2Nsb3NlXG5jb25zdCBidXJnZXJNZW51T3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idXJnZXItbWVudS1vcGVuJylcbmNvbnN0IGJ1cmdlck1lbnVDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idXJnZXItbWVudS1jbG9zZScpXG5jb25zdCBidXJnZXJNZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXJfX2NvbnRlbnQnKVxuXG5idXJnZXJNZW51T3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gIGJ1cmdlck1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9fY29udGVudC0tb3BlbmVkJylcbilcbmJ1cmdlck1lbnVDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gIGJ1cmdlck1lbnVDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlcl9fY29udGVudC0tb3BlbmVkJylcbilcblxuLy8gU2hvdy9oaWRlIGZpbHRlciBwYXJhbXNcbmNvbnN0IGZpbHRlckNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5qcy1maWx0ZXItY2F0ZWdvcnktYnV0dG9uJ1xuKVxuY29uc3QgZmlsdGVyUHJpY2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmlsdGVyLXByaWNlLWJ1dHRvbicpXG5jb25zdCBmaWx0ZXJEaXNjb3VudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcuanMtZmlsdGVyLWRpc2NvdW50LWJ1dHRvbidcbilcbmNvbnN0IGZpbHRlckNvbG9yQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZpbHRlci1jb2xvci1idXR0b24nKVxuXG5jb25zdCBmaWx0ZXJDYXRlZ29yeU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLmpzLWZpbHRlci1jYXRlZ29yeS1vcHRpb25zJ1xuKVxuY29uc3QgZmlsdGVyUHJpY2VPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZpbHRlci1wcmljZS1vcHRpb25zJylcbmNvbnN0IGZpbHRlckRpc2NvdW50T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcuanMtZmlsdGVyLWRpc2NvdW50LW9wdGlvbnMnXG4pXG5jb25zdCBmaWx0ZXJDb2xvck9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmlsdGVyLWNvbG9yLW9wdGlvbnMnKVxuXG5mdW5jdGlvbiB0b2dnbGVGaWx0ZXJPcHRpb24oYnV0dG9uLCBvcHRpb24pIHtcbiAgY29uc3QgYWN0aXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFtX19idG4tLWFjdGl2ZScpXG4gIGNvbnN0IGFjdGl2ZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbV9fb3B0aW9ucy0tYWN0aXZlJylcblxuICBpZiAoYWN0aXZlQnV0dG9uICYmIGFjdGl2ZUJ1dHRvbiAhPT0gYnV0dG9uKVxuICAgIGFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdwYXJhbV9fYnRuLS1hY3RpdmUnKVxuICBpZiAoYWN0aXZlT3B0aW9uICYmIGFjdGl2ZU9wdGlvbiAhPT0gb3B0aW9uKVxuICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdwYXJhbV9fb3B0aW9ucy0tYWN0aXZlJylcblxuICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgncGFyYW1fX2J0bi0tYWN0aXZlJylcbiAgb3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3BhcmFtX19vcHRpb25zLS1hY3RpdmUnKVxufVxuXG5maWx0ZXJDYXRlZ29yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gIHRvZ2dsZUZpbHRlck9wdGlvbihmaWx0ZXJDYXRlZ29yeUJ1dHRvbiwgZmlsdGVyQ2F0ZWdvcnlPcHRpb25zKVxuKVxuZmlsdGVyUHJpY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICB0b2dnbGVGaWx0ZXJPcHRpb24oZmlsdGVyUHJpY2VCdXR0b24sIGZpbHRlclByaWNlT3B0aW9ucylcbilcbmZpbHRlckRpc2NvdW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgdG9nZ2xlRmlsdGVyT3B0aW9uKGZpbHRlckRpc2NvdW50QnV0dG9uLCBmaWx0ZXJEaXNjb3VudE9wdGlvbnMpXG4pXG5maWx0ZXJDb2xvckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gIHRvZ2dsZUZpbHRlck9wdGlvbihmaWx0ZXJDb2xvckJ1dHRvbiwgZmlsdGVyQ29sb3JPcHRpb25zKVxuKVxuXG4vLyBGaWx0ZXIgcHJpY2Ugc2xpZGVyXG5jb25zdCBmaWx0ZXJQcmljZUZyb21JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1maWx0ZXItcHJpY2UtZnJvbScpXG5jb25zdCBmaWx0ZXJQcmljZVRvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmlsdGVyLXByaWNlLXRvJylcbmNvbnN0IGZpbHRlclByaWNlU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZpbHRlci1wcmljZS1ub3Vpc2xpZGVyJylcblxubm9VaVNsaWRlci5jcmVhdGUoZmlsdGVyUHJpY2VTbGlkZXIsIHtcbiAgc3RhcnQ6IFsxMDAwMCwgMTAwMDAwXSxcbiAgY29ubmVjdDogdHJ1ZSxcbiAgcmFuZ2U6IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxNTAwMDAsXG4gIH0sXG4gIHN0ZXA6IDEsXG5cbiAgZm9ybWF0OiB3TnVtYih7XG4gICAgZGVjaW1hbHM6IDAsXG4gICAgdGhvdXNhbmQ6ICcgJyxcbiAgfSksXG59KVxuXG5maWx0ZXJQcmljZVNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcbiAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaGFuZGxlXVxuXG4gIGlmIChoYW5kbGUpIHtcbiAgICBmaWx0ZXJQcmljZVRvSW5wdXQudmFsdWUgPSB2YWx1ZVxuICB9IGVsc2Uge1xuICAgIGZpbHRlclByaWNlRnJvbUlucHV0LnZhbHVlID0gdmFsdWVcbiAgfVxufSlcblxuZmlsdGVyUHJpY2VGcm9tSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgZmlsdGVyUHJpY2VTbGlkZXIubm9VaVNsaWRlci5zZXQoW2ZpbHRlclByaWNlRnJvbUlucHV0LnZhbHVlLCBudWxsXSlcbilcbmZpbHRlclByaWNlVG9JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PlxuICBmaWx0ZXJQcmljZVNsaWRlci5ub1VpU2xpZGVyLnNldChbbnVsbCwgZmlsdGVyUHJpY2VUb0lucHV0LnZhbHVlXSlcbilcblxuLy8gUmVtb3ZlIGZpbHRlciBwYXJhbWV0ZXIgYnV0dG9ucyBmcm9tIHRhYmluZGV4XG5mdW5jdGlvbiBzZXRQYXJhbUJ1dHRvbnNBcmlhSGlkZGVuKCkge1xuICBjb25zdCBwYXJhbUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFyYW1fX2J0bicpXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxNDAwKSB7XG4gICAgcGFyYW1CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFyaWFEaXNhYmxlZCA9IHRydWVcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJylcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHBhcmFtQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hcmlhRGlzYWJsZWQgPSBmYWxzZVxuICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKVxuICAgIH0pXG4gIH1cbn1cblxuLy8gUHJvZHVjdHMgcGFnaW5hdGlvblxuY29uc3QgY2F0YWxvZ1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZycpXG5jb25zdCBwcm9kdWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fbGlzdCcpXG5jb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19wcm9kdWN0JylcblxubGV0IHByb2R1Y3RzUGVyUGFnZSA9IHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQgPyA5IDogNlxubGV0IGN1cnJlbnRQYWdlID0gMVxubGV0IGxhc3RQYWdlID0gTWF0aC5mbG9vcihwcm9kdWN0cy5sZW5ndGggLyBwcm9kdWN0c1BlclBhZ2UpXG5cbmZ1bmN0aW9uIHNob3dQcm9kdWN0cygpIHtcbiAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCwgbnVtYmVyKSA9PiB7XG4gICAgcHJvZHVjdC5yZW1vdmUoKVxuXG4gICAgaWYgKFxuICAgICAgbnVtYmVyID49IHByb2R1Y3RzUGVyUGFnZSAqIChjdXJyZW50UGFnZSAtIDEpICYmXG4gICAgICBudW1iZXIgPCBwcm9kdWN0c1BlclBhZ2UgKiBjdXJyZW50UGFnZVxuICAgICkge1xuICAgICAgcHJvZHVjdHNMaXN0LmFwcGVuZChwcm9kdWN0KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbihjb3VudCkge1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xzdCcsICdwYWdpbmF0aW9uJywgJ2NhdGFsb2dfX3BhZ2luYXRpb24nKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uX19pdGVtJylcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdwYWdpbmF0aW9uX19idG4nKVxuICAgIGJ1dHRvbi5hcmlhTGFiZWwgPSBg0KHRgtGA0LDQvdC40YbQsCAke2kgKyAxfWBcbiAgICBpZiAoaSA9PT0gMCkgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX2J0bi0tYWN0aXZlJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBpICsgMVxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3VycmVudFBhZ2UgPSBOdW1iZXIoYnV0dG9uLnRleHRDb250ZW50KVxuICAgICAgc2hvd1Byb2R1Y3RzKClcblxuICAgICAgY29uc3QgYWN0aXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25fX2J0bi0tYWN0aXZlJylcbiAgICAgIGFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdwYWdpbmF0aW9uX19idG4tLWFjdGl2ZScpXG5cbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uX19idG4tLWFjdGl2ZScpXG5cbiAgICAgIGNhdGFsb2dTZWN0aW9uLnNjcm9sbEludG9WaWV3KHRydWUpXG4gICAgfSlcblxuICAgIGl0ZW0uYXBwZW5kKGJ1dHRvbilcbiAgICBsaXN0LmFwcGVuZChpdGVtKVxuICB9XG5cbiAgcmV0dXJuIGxpc3Rcbn1cblxuaWYgKGxhc3RQYWdlID4gMSkgY2F0YWxvZ1NlY3Rpb24uYXBwZW5kKGNyZWF0ZVBhZ2luYXRpb24obGFzdFBhZ2UpKVxuXG5zaG93UHJvZHVjdHMoKVxuc2V0UGFyYW1CdXR0b25zQXJpYUhpZGRlbigpXG5cbmxldCBjdXJyZW50V2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXG5mdW5jdGlvbiByZXNpemVIYW5kbGVyKCkge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggIT09IGN1cnJlbnRXaW5kb3dXaWR0aCkge1xuICAgIGN1cnJlbnRXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgcHJvZHVjdHNQZXJQYWdlID0gd2luZG93LmlubmVyV2lkdGggPj0gMTAyNCA/IDkgOiA2XG5cbiAgICBjdXJyZW50UGFnZSA9IDFcbiAgICBsYXN0UGFnZSA9IE1hdGguZmxvb3IocHJvZHVjdHMubGVuZ3RoIC8gcHJvZHVjdHNQZXJQYWdlKVxuXG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19wYWdpbmF0aW9uJylcbiAgICBwYWdpbmF0aW9uLnJlbW92ZSgpXG5cbiAgICBjYXRhbG9nU2VjdGlvbi5hcHBlbmQoY3JlYXRlUGFnaW5hdGlvbihsYXN0UGFnZSkpXG4gICAgc2hvd1Byb2R1Y3RzKClcblxuICAgIHNldFBhcmFtQnV0dG9uc0FyaWFIaWRkZW4oKVxuICB9XG59XG5cbmxldCB0aW1lb3V0SURcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpXG4gIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQocmVzaXplSGFuZGxlciwgMzAwKVxufSlcblxuLy8gYXJpYS1oaWRkZW4gZm9yIGFsbCBpbmxpbmUgc3ZnIGltYWdlc1xuY29uc3Qgc3ZncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2ZycpXG5zdmdzLmZvckVhY2goKHN2ZykgPT4gKHN2Zy5hcmlhSGlkZGVuID0gdHJ1ZSkpXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBLElBQUlBLE9BQUosQ0FBWSxzQkFBWixFQUFvQztFQUNsQ0MsU0FBUyxFQUFFLEtBRHVCO0VBRWxDQyxhQUFhLEVBQUUsS0FGbUI7RUFHbENDLFVBQVUsRUFBRSxLQUhzQjtFQUlsQ0MsY0FBYyxFQUFFO0FBSmtCLENBQXBDLEUsQ0FPQTs7QUFDQSxJQUFJSixPQUFKLENBQVksd0JBQVosRUFBc0M7RUFDcENDLFNBQVMsRUFBRSxLQUR5QjtF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