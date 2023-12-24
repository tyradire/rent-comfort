// Фикс паддинга скролла страниц, которые умещаются на экране
if ($(document).height() <= $(window).height()) {
  $(document.body).css('padding-right', '17px');
}