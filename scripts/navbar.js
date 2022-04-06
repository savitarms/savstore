function menu()  {
    $('.navigation').toggleClass('mobile')
}

$(function() {
    $(window).resize(function() {
      if ($(this).width() > 806) {
        $('.navigation').removeClass('mobile')
      }
    })
})


function category()  {
  if ($(this).width() < 806) {
    $('.dropdown').toggleClass('category-view')
  }
}

$(function() {
  $(window).resize(function() {
    if ($(this).width() > 806) {
      $('.dropdown').removeClass('category-view')
    }
  })
})