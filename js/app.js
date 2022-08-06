if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  }
}

// Скрытие Sidebar
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.sidebar')

sidebarToggleBtn.addEventListener('click', function () {
  menuIcon.classList.toggle('menu-icon-active')
  sidebar.classList.toggle('sidebar--mobile-active')
})

// Показать ещё 3 карточки
const btnShowMore = document.querySelector('.btn-more')
const cardsLinkHidden = document.querySelectorAll('.card-link--hidden')

btnShowMore.addEventListener('click', function () {
  cardsLinkHidden.forEach(function (card) {
    card.classList.remove('card-link--hidden')
  })
})

// Скрытие виджета
const widgets = document.querySelectorAll('.widget')

widgets.forEach(function (widget) {
  widget.addEventListener('click', function (event) {
    if (event.target.classList.contains('widget__title')) {
      event.target.classList.toggle('widget__title--active')
      event.target.nextElementSibling.classList.toggle('none')
    }
  })
})

// Близость к метро
const checkBoxAny = document.querySelector('#location-05')
const topLocationCheckBoxes = document.querySelectorAll('[data-location-param]')

checkBoxAny.addEventListener('change', function (event) {
  if (checkBoxAny.checked) {
    topLocationCheckBoxes.forEach(function (item) {
      item.checked = false
    })
  }
})

topLocationCheckBoxes.forEach(function (item) {
  item.addEventListener('change', function () {
    checkBoxAny.checked = false
  })
})

const showMoreOptions = document.querySelector('.widget__show-hidden')
const hiddenOptions = document.querySelectorAll('.checkbox--hidden')

showMoreOptions.addEventListener('click', function (event) {
  event.preventDefault()
  if (showMoreOptions.dataset.options == 'hidden') {
    hiddenOptions.forEach(function (item) {
      item.style.display = 'flex'
    })
    showMoreOptions.innerText = 'Скрыть дополнительные элементы'
    showMoreOptions.dataset.options = 'visible'
  } else {
    hiddenOptions.forEach(function (item) {
      item.style.display = 'none'
    })
    showMoreOptions.innerText = 'Показать ещё'
    showMoreOptions.dataset.options = 'hidden'
  }
})
