document.addEventListener("DOMContentLoaded", () => {
   $('.reviews-list').slick({
      infinite: true,
      centerMode: true,
      variableWidth: true,
   });

   $('#blog-slider').slick({
      arrows: false,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      slidesToScroll: 3,
   });
   $('#blog-page-slider').slick({
      arrows: false,
      infinite: true,
      centerMode: true,
      variableWidth: true,
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

   // Главный слайдер Блога
   $('.blog-hero-list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
   });

   // Дейтпикер формы поиска на главной
   $( "#main-form-datepicker-in" ).datepicker({
      numberOfMonths: 2
   });
   $( "#main-form-datepicker-out" ).datepicker({
      numberOfMonths: 2
   });
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
});