const btn = document.querySelector('button')


btn.addEventListener('click', () => {
  const event = new CustomEvent('showModal', {
    bubbles: true,
    cancelable: true
  })
  btn.dispatchEvent(event)
})

btn.addEventListener('showModal', (e) => {
  console.log('成!!!');
})