// Фикс паддинга скролла страниц, которые умещаются на экране
if ($(document).height() <= $(window).height()) {
  $(document.body).css('padding-right', '17px');
}

// Отображение списка апартаментов
let apartmentsArenda = $('#apartments-list-arenda');
let apartmentsData = apartmentsList.map(elem => elem.address);

$.each(apartmentsList, function( index, apartments ) {
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
      <p class="apartments-list-item-price">от <span class="apartments-list-item-price-sum">30.000</span> &#8381;/мес</p>
    </div>
    </li>
    ` 
  ).appendTo(apartmentsArenda);
});

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

if (window.location.pathname == '/detail.html') {
  let currentId = Number(localStorage.getItem('currentApartments'));
  let currentApartments = apartmentsList.find(apartments => apartments.id === currentId)
  console.log(currentApartments);
  $('.detail-booking-title').text('Апартаменты на ' + currentApartments.address)
  $('.detail-booking-city').text(currentApartments.city)
}