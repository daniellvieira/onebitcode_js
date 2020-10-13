function show() {
  let element = document.getElementById("name")
  console.log(element.value)

  let elements = document.getElementsByName("phone")
  console.log(elements)
  console.log(elements[0].value)
  console.log(elements[1].value)

  let selects = document.querySelectorAll("div#phones input[name='phone']")
  console.log(selects)
  console.log(selects[0].value)
  console.log(selects[1].value)

  let select_by_tag_name = document.getElementsByTagName("input")
  console.log(select_by_tag_name)
}