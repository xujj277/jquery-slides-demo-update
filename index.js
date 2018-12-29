
let n
init()

setInterval(() => {
  console.log(n)
  makeLeave(getImage(n))
    .one('transitionend', function (e) {
      makeEnter($(e.currentTarget))
    })
  makeCurrent(getImage(n+1))
  n += 1
}, 3000)


function getImage (i) {
  return $(`.images>img:nth-child(${modifyImagesNumber(i)})`)
}

function init () {
  n = 1
  $(`.images>img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
}

function modifyImagesNumber (n) {
  if (n > 3) {
    n = n % 3
    if (n === 0) {
      n = 3
    }
  }
  return n
}


function makeLeave ($node) {
  return $node.removeClass('current').addClass('leave')
}

function makeEnter ($node) {
  return $node.removeClass('leave').addClass('enter')
}

function makeCurrent ($node) {
  return $node.removeClass('enter').addClass('current')
}
