$('.popover-dismiss').popover({
    trigger: 'focus'
  })

  function scrolll() {
    var left = document.querySelector(".scroll-img")
    left.scrollBy(100, 0)
  }
  function scrollr() {
    var right = document.querySelector(".scroll-img")
    right.scrollBy(-100, 0)
  }