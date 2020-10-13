document.querySelector("select[name='select-option']").addEventListener("change", () => {
  alert(event.target.value)
})