// DOM Ready
$(function() {
  // get all header nodes, that need to be floating headers when respective section is scrolled.
  var headerNodes = $('h1, h2, h3, h4, h5, h6')

  // helper function to create or swap content of floating header
  function manageFloatingHeader(node) {
    var floatingHeader
    // find floating header if exists
    floatingHeader = document.querySelector('header.floating-header')
    // create new instance if none exists already
    if (!floatingHeader) {
      var floatingHeader = document.createElement('header')
      floatingHeader.setAttribute(
        'class',
        'container floating-header'
      )
      document.body.insertBefore(
        floatingHeader,
        document.body.firstChild
      )
    }
    // clear out old content
    floatingHeader.innerHTML = ''
    // append content to floating header if given
    if (node) {
      floatingHeader.appendChild(node)
    }
  }

  // find most recent scrolled out of bounds header
  // and append it to floating container
  function getLastOutofBoundHeader() {
    var floatingHeader = document.querySelector(
      'header.floating-header'
    )
    // calculate offset at which a scrolled header should be replaced as floating header
    var floatingHeaderHeight = floatingHeader
      ? $(floatingHeader).height()
      : 0

    // get all headers that have scrollled out of viewport
    var outOfBoundHeaders = Array.from(headerNodes).filter(function(
      header
    ) {
      return (
        header.getBoundingClientRect().bottom < floatingHeaderHeight
      )
    })

    if (outOfBoundHeaders.length <= 0) {
      manageFloatingHeader() // clear out floating header content
      return
    }

    if (outOfBoundHeaders && outOfBoundHeaders.length) {
      // pluck last header
      var lastHeader = outOfBoundHeaders.reverse()[0]
      // clone header node and create/ update floating header
      manageFloatingHeader(lastHeader.cloneNode(true))
    }
  }

  // listen to scroll event
  $(window)
    .scroll(getLastOutofBoundHeader)
    .trigger('scroll')
})
