export const debounce = {
  inserted (el, binding) {
    let delay = binding.arg
    let timer
    el.addEventListener('click', function (e) {
      el.classList.add('is-disabled')
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        el.classList.toggle('is-disabled')
        console.log(e.target);
      }, +delay)
    })

  }
}