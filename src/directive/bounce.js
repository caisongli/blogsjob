export const debounce = {
  inserted (el, binding) {
    console.log(el);
    console.log(binding);
    let delay = binding.arg
    let timer
    el.addEventListener('click', function (e) {
      el.classList.add('is-disabled')
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        el.classList.toggle('is-disabled')
        console.log(e.target);
        console.log(1111);
      }, +delay)
    })

  }
}