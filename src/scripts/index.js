document.addEventListener("DOMContentLoaded", () => {

   //let isDev = window.location.hostname == 'localhost';
   let isDev = false;

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

   let months;
   if ($(window).width() > 767) {
      months = 2
   } else {
      months = 1
   }

   // Дейтпикер формы поиска на главной
   $( "#main-form-datepicker-in" ).datepicker({
      numberOfMonths: months,
      minDate: 0,
      showAnim: "drop",
			onSelect: function (selected) {
			var dt = $(this).datepicker("getDate");
			$("#main-form-datepicker-out").datepicker("option", "minDate", dt);
			$("#main-form-datepicker-out").datepicker("option", "dateFormat", "dd.mm.yy");			
			$("#main-form-datepicker-out").datepicker("setDate", dt);

			//Dateformat
			$("#main-form-datepicker-in").datepicker("option", "dateFormat", "dd.mm.yy");
		}
   });
   $( "#main-form-datepicker-out" ).datepicker({
      numberOfMonths: months,
      minDate: 0,
      showAnim: "drop",
      range: 'period',
   });
   var date = new Date()
   date.setDate(date.getDate() + parseInt($('#main-form-datepicker-in').val(), 10))
   //$('#main-form-datepicker-out').datepicker('option', {minDate: date})
   $(function ($) {
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
      numberOfMonths: months,
      minDate: 0,
      showAnim: "drop",
			onSelect: function (selected) {
			var dt = $(this).datepicker("getDate");
			$("#detail-form-datepicker-out").datepicker("option", "minDate", dt);
			$("#detail-form-datepicker-out").datepicker("option", "dateFormat", "dd.mm.yy");			
			$("#detail-form-datepicker-out").datepicker("setDate", dt);

			//Dateformat
			$("#detail-form-datepicker-in").datepicker("option", "dateFormat", "dd.mm.yy");
		}
   });
   $( "#detail-form-datepicker-out" ).datepicker({
      numberOfMonths: months,
      minDate: 0,
      showAnim: "drop",
      range: 'period',
   });
   date.setDate(date.getDate() + parseInt($('#detail-form-datepicker-in').val(), 10))

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

   // Телефонные инпуты с масками
   if (window.location.pathname == '/order.html' || isDev) {
      const orderPhoneInput = document.querySelector("#order-phone");

      window.intlTelInput(orderPhoneInput, {
         initialCountry: "auto",
         geoIpLookup: callback => {
            fetch("https://ipapi.co/json")
               .then(res => res.json())
               .then(data => callback(data.country_code))
               .catch(() => callback("us"));
         },
         //utilsScript: "/intl-tel-input/js/utils.js?1701962297307" // just for formatting/placeholders etc
      });
      $('#order-phone').mask('(999)-999-99-99');
   }

   if (window.location.pathname == '/kontakti.html' || isDev) {
      const contactsPhoneInput = document.querySelector("#contacts-phone");

      window.intlTelInput(contactsPhoneInput, {
         initialCountry: "auto",
         geoIpLookup: callback => {
            fetch("https://ipapi.co/json")
               .then(res => res.json())
               .then(data => callback(data.country_code))
               .catch(() => callback("us"));
         },
         utilsScript: "/intl-tel-input/js/utils.js?1701962297307" // just for formatting/placeholders etc
      });
      $('#contacts-phone').mask('(999)-999-99-99');
   }
   
   // Форма заказа
   $('#another-person-checkbox').on('change', function() {
      if ($(this).is(':checked')) {
         $('.order-another-person').css('display', 'flex')
      } else $('.order-another-person').css('display', 'none')
   })

   $('.order-radio-buttons input:radio').on('change', function() {
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

   function initDatePickerMarkup(e) {
      $(e)
          .datepicker('widget').find('td').mouseover(function() {
              currentDate = new Date($(this).attr('data-year')+"/"+(parseInt($(this).attr('data-month'))+1)+"/"+$(this).text());
              selectedDate = $(e).datepicker('getDate');
              if (selectedDate === null) {
                  selectedDate = new Date();
              }
              allTds = $(this).parents('table.ui-datepicker-calendar').find('td');
              allTds.removeClass('ui-datepicker-mouseover1')
              found = false;
              if (currentDate < selectedDate) {
                  for (i = 0; i < allTds.length; i++) {
                      if (allTds[i] == this) {
                          found = true;
                      }
                      if ($(allTds[i]).hasClass('ui-datepicker-today') || $(allTds[i]).hasClass('ui-datepicker-current-day')) {
                          break;
                      }
                      if (found) {
                          $(allTds[i]).addClass('ui-datepicker-mouseover1');
                      }
                  }
              } else if (currentDate > selectedDate) {
                  for (i = 0; i < allTds.length; i++) {
                      if (found) {
                          $(allTds[i]).addClass('ui-datepicker-mouseover1');
                      }
                      if ($(allTds[i]).hasClass('ui-datepicker-today') || $(allTds[i]).hasClass('ui-datepicker-current-day')) {
                          found = true;
                      }
                      if (allTds[i] == this) {
                          break;
                      }
                  }
              }
          });
  }
  $(function() {
      $.datepicker._updateDatepicker_original = $.datepicker._updateDatepicker;
      $.datepicker._updateDatepicker = function(inst) {
          $.datepicker._updateDatepicker_original(inst);
          var afterShow = this._get(inst, 'afterShow');
          if (afterShow) {
              afterShow.apply((inst.input ? inst.input[0] : null));  // trigger custom callback
          }
      }
      $( "#datepicker" ).datepicker({
          afterShow: function(e) {
              initDatePickerMarkup(this);
          }
      });
  });

  let citiesListArray = Object.keys(citiesList);
  citiesListArray.forEach((city, index) => {
   $("#main-location-list").append('<li class="location-list-item">' + 
   '<a href="/arenda.html">' +
   `<p class="location-list-item-name">${citiesList[city].name}</p>` +
   `<img class="location-list-item-image" src=${citiesList[city].photoDesktop} loading="lazy">` +
   '</a>' + 
   '</li>');
  })

  $("#location-list-toggle-button").on("click", function() {
   if ($(this).data("hidden")) {
      $(".location-list-item:nth-child(n+11)").css("display", "list-item");
      $(this).text('Скрыть');
      $(this).data("hidden", false);
   } else {
      $(".location-list-item:nth-child(n+11)").css("display", "none");
      $(this).text('Все места');
      $(this).data("hidden", true);
   }
  });

  $("#hero-list-toggle-button").on("click", function() {
   if ($(this).data("hidden")) {
      $(".blog-list:first-of-type .blog-list-item:nth-child(n+7)").css("display", "list-item");
      $(this).text('Скрыть');
      $(this).data("hidden", false);
   } else {
      $(".blog-list:first-of-type .blog-list-item:nth-child(n+7)").css("display", "none");
      $(this).text('Читать ещё');
      $(this).data("hidden", true);
   }
  })
});