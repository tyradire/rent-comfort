document.addEventListener("DOMContentLoaded", () => {
 
  // dev settings
  let isDev = window.location.hostname == 'localhost';
  let isDesktop = window.outerWidth >= 768;
  let lastScrollTop = 0;

  // Функция добавления города в локал сторедж после нажатия на линк
  $(".useful-list .useful-list-item a").on("click", function() {
    localStorage.removeItem('searchFormData');
    if ($(this).data().city) {
      localStorage.setItem('currentCity', $(this).data().city)
    } else if ($(this).data().tags) {
      localStorage.setItem('currentTags', $(this).data().tags)
    }
  })

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
  let currentCityData = localStorage.getItem('currentCity');

  // Настройки для детальной страницы
  if (window.location.pathname == '/detail.html') {
    let currentId = Number(localStorage.getItem('currentApartments'));
    let currentApartments = apartmentsList.find(apartments => apartments.id === currentId)
    $('.detail-booking-title').text('Апартаменты на ' + currentApartments.address)
    $('.detail-booking-city').text(currentApartments.city)
    $("#detail-booking-price").text(currentApartments.price)
    for (var i = 0; i < currentApartments.rules.length; i++) {
      $("#detail-booking-rules").append('<li class="detail-booking-list-point">' + currentApartments.rules[i] + '</li>');
    }
    for (var i = 1; i <= currentApartments.amenities.length; i++) {
      $("#detail-booking-amenities").append(
        '<li class="detail-booking-list-point">' + 
        amenitiesList[i].point +
        `<img src="${amenitiesList[i].icon}">`)
        '</li>';
    }
  }
  
  // Отображение списка апартаментов
  let apartmentsArenda = $('#apartments-list-arenda');
  let apartmentsData = apartmentsList.map(elem => elem.address);

  // Настройки для страницы аренды
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

  if (((window.location.pathname == '/arenda.html') || (isDev)) && !!searchFormData) {
    let filtredApartmentsList = apartmentsList.filter(city => city.cityCode ==  searchFormData.city);
    $('#main-form-search-input').val(searchFormData.city);
    $('#main-form-datepicker-in').val(searchFormData.dateIn);
    $('#main-form-datepicker-out').val(searchFormData.dateOut);
    $('#main-search-form-counter').val(searchFormData.guests);
    addItemsToList(filtredApartmentsList);
  } else if (((window.location.pathname == '/arenda.html') || (isDev)) && !!currentCityData) {
    let filtredApartmentsList = apartmentsList.filter(city => city.cityCode ==  currentCityData);
    addItemsToList(filtredApartmentsList);
  }

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
  })
});