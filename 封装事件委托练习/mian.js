const btn = document.querySelector('button')



function on(eventType, element, selector, fn) {
  if (!(element instanceof Element)) {
    el = document.querySelector(element)
    console.log(element);
  }
  el.addEventListener(eventType, (e) => {
    const t = e.target //被点击的
    if (t.matches(selector)) {
      fn(e)
    }
  })
}

on('click', '.parent', 'button', () => {
  console.log('btn被点击');
})

//把绑定在btn上的事件绑定(委托)在.parent上
