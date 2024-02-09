// dev settings
let isDev = window.location.hostname == 'localhost';
let isDesktop = window.outerWidth >= 768;
let lastScrollTop = 0;

// Липкий хедер
if (isDesktop) {
  $(window).scroll(function(event){
    let st = $(this).scrollTop();
    if (st < lastScrollTop || lastScrollTop == 0){
      $('.header').css({
        'opacity': '1',
      });
    } else {
      $('.header').css({
        'opacity': '0',
      });
    }
    lastScrollTop = st;
 });
}

// Фикс паддинга скролла страниц, которые умещаются на экране
if ($(document).height() <= $(window).height()) {
  $(document.body).css('padding-right', '17px');
}

let searchFormData = JSON.parse(localStorage.getItem('searchFormData'));

// Отображение списка апартаментов
let apartmentsArenda = $('#apartments-list-arenda');
let apartmentsData = apartmentsList.map(elem => elem.address);
let filtredApartmentsList = apartmentsList.filter(city => city.cityCode ==  searchFormData.city);

let addItemsToList = (selectedCity) => {
  $.each(selectedCity, function( index, apartments ) {
    $(
      `
      <li class="apartments-list-item" id='${apartments.id}'>
      <img src="${apartments.photo}">
      <div class="apartments-list-item-info">
        <a href='./detail.html'>
          <p class="apartments-list-item-title">${apartments.address}</p>
        </a>
        <ul class="apartments-list-item-tags">
          <li class="apartments-list-item-tag">2-комн.</li>
          <li class="apartments-list-item-tag">wi-fi</li>
          <li class="apartments-list-item-tag">лифт</li>
          <li class="apartments-list-item-tag">3-эт</li>
          <li class="apartments-list-item-tag">парковка</li>
        </ul>
        <p class="apartments-list-item-status">Доступно <span class="apartments-list-item-status-date">без ограничений</span></p>
        <p class="apartments-list-item-price">от <span class="apartments-list-item-price-sum">${apartments.price}</span> &#8381;/мес</p>
      </div>
      </li>
      ` 
    ).appendTo(apartmentsArenda);
  });
}

addItemsToList(filtredApartmentsList);

// Псевдомаршрутизация с помощью localstorage
$('.apartments-list-item').each(function(index) {
  let currentId;
  $(this).on(
    'click',
    () => {
      currentId = ($(this).prop('id'))
      localStorage.setItem('currentApartments', currentId)
    }
  )
})

$('#main-form-search-input').on('change', function() {
  $('#apartments-list-arenda').children().remove();
  filtredApartmentsList = apartmentsList.filter(city => city.cityCode ==  $('#main-form-search-input').val());
  addItemsToList(filtredApartmentsList);
})

if (window.location.pathname == '/detail.html' || isDev) {
  let currentId = Number(localStorage.getItem('currentApartments'));
  let currentApartments = apartmentsList.find(apartments => apartments.id === currentId)
  $('.detail-booking-title').text('Апартаменты на ' + currentApartments.address)
  $('.detail-booking-city').text(currentApartments.city)
  $("#detail-booking-price").text(currentApartments.price)
}

if (window.location.pathname == '/arenda.html' || isDev) {
  $('#main-form-search-input').val(searchFormData.city);
  $('#main-form-datepicker-in').val(searchFormData.dateIn);
  $('#main-form-datepicker-out').val(searchFormData.dateOut);
  $('#main-search-form-counter').val(searchFormData.guests);
}