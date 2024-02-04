document.addEventListener("DOMContentLoaded", () => {
   $('.reviews-list').slick({
      infinite: true,
      centerMode: true,
      variableWidth: true,
      responsive: [
         {
             breakpoint: 500,
             settings: "unslick"
         }
     ]
   });

   $('#blog-slider').slick({
      arrows: false,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 500,
        settings: "unslick"
      }]
   });
   $('#blog-page-slider').slick({
      arrows: false,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      responsive: [{
        breakpoint: 500,
        settings: "unslick"
      }]
   });
   // Главный слайдер Блога
   $('.blog-hero-list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
   });

   // Инициализация формы выбора города
   $("#select-city-main").selectmenu();

   // Инициализация полей формы домовладельца
   $("#select-form-city").selectmenu();
   $("#select-form-area").selectmenu();
   $("#select-form-rooms").selectmenu();

   // Блок FAQ
   $(".hidden-list-item-question").on('click', function() {
      $(this).toggleClass("opened");
      $(this).next().slideToggle("fast");
   })

   // Дейтпикер формы поиска на главной
   $( "#main-form-datepicker-in" ).datepicker({
      numberOfMonths: 2
   });
   $( "#main-form-datepicker-out" ).datepicker({
      numberOfMonths: 2,

   });
   var date = new Date()
   date.setDate(date.getDate() + parseInt($('#main-form-datepicker-in').val(), 10))
   $('#main-form-datepicker-out').datepicker('option', {minDate: date})
   jQuery(function ($) {
      $.datepicker.regional['ru'] = {
          closeText: 'Закрыть',
          prevText: 'Пред',
          nextText: 'След',
          currentText: 'Сегодня',
          monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
          dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
          dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
          weekHeader: 'Нед',
          dateFormat: 'dd.mm.yy',
          firstDay: 1,
          isRTL: false,
          showMonthAfterYear: false,
          yearSuffix: ''
      };
      $.datepicker.setDefaults($.datepicker.regional['ru']);
   });

   // Дейтпикер формы детальной страницы
   $( "#detail-form-datepicker-in" ).datepicker({
      numberOfMonths: 2
   });
   $( "#detail-form-datepicker-out" ).datepicker({
      numberOfMonths: 2
   });
   $( "#order-form-datepicker-in" ).datepicker({
      numberOfMonths: 2
   });
   $( "#order-form-datepicker-out" ).datepicker({
      numberOfMonths: 2
   });

   // Селект с поиском у формы поиска на главной
   $("#main-form-search-input").select2({
      placeholder: "Выберите город",
      allowClear: true,
      dropdownPosition: 'below',
      "language": {
         "noResults": function(){
             return "Не найдено...";
         }
      }
   });
   $(".js-example-placeholder-single").select2({
      placeholder: "Выберите город",
      allowClear: true
  });

   // Счётчик гостей формы поиска на главной
   let searchFormCounter = $("#main-search-form-counter").val();
   $("#search-form-counter-plus").on("click", function(e) {
      e.preventDefault();
      $("#search-form-counter-plus").prop("disabled", false);
      $("#search-form-counter-minus").prop("disabled", false);
      if (searchFormCounter > 8) {
         $("#search-form-counter-plus").prop("disabled", true);
         return;
      }
      $("#main-search-form-counter").val(parseInt($("#main-search-form-counter").val())+1);
      searchFormCounter = $("#main-search-form-counter").val();
   });
   $("#search-form-counter-minus").on("click", function(e) {
      e.preventDefault();
      $("#search-form-counter-plus").prop("disabled", false);
      $("#search-form-counter-minus").prop("disabled", false);
      if (searchFormCounter < 2) {
         $("#search-form-counter-minus").prop("disabled", true);
         return;
      }
      $("#main-search-form-counter").val(parseInt($("#main-search-form-counter").val())-1);
      searchFormCounter = $("#main-search-form-counter").val();
   });

   // Поиск с главной
   $('#main-search-form').on('submit', function(event) {
      event.preventDefault();
      window.location.pathname = '/arenda.html';
      let formData = {
         city: $('#main-form-search-input').val(),
         dateIn: $('#main-form-datepicker-in').val(),
         dateOut: $('#main-form-datepicker-out').val(),
         guests: $('#main-search-form-counter').val()
      };
      localStorage.setItem('searchFormData', JSON.stringify(formData));
   })

   // Телефонный инпут страницы заказа
   let orderPhoneInput = document.querySelector("#order-phone");
   window.intlTelInput(orderPhoneInput, {
      initialCountry: "auto",
      geoIpLookup: callback => {
         fetch("https://ipapi.co/json")
            .then(res => res.json())
            .then(data => callback(data.country_code))
            .catch(() => callback("us"));
      },
      utilsScript: "/intl-tel-input/js/utils.js?1701962297307" // just for formatting/placeholders etc
   });
   $('#order-phone').mask('(999)-999-99-99');

   // Форма заказа
   $('#another-person-checkbox').on('change', function() {
      if ($(this).is(':checked')) {
         $('.order-another-person').css('display', 'flex')
      } else $('.order-another-person').css('display', 'none')
   })

   $('.order-radio-buttons div input').on('change', function() {
      let purpose = $(this).val();
      switch(purpose) {
         case 'business':
            $('.order-input-additional').css("display", "block")
            $('.input-textarea').css("display", "none")
            break;
         case 'moving':
            $('.order-input-additional').css("display", "none")
            $('.input-textarea').css("display", "none")
            break;
         case 'holiday':
            $('.order-input-additional').css("display", "none")
            $('.input-textarea').css("display", "none")
            break;
         case 'other':
            $('.order-input-additional').css("display", "none")
            $('.input-textarea').css("display", "block")
            break;
      }
   })
});