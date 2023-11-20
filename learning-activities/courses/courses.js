const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
  ],
  enrollmentUpdate(sectionNum, add = true) {
    const index = this.sections.findIndex(section => section['sectionNum'] === sectionNum)
    if (index >= 0) add ? this.sections[index].enrolled++ : this.sections[index].enrolled--
    renderSections(this)
  }
}

const input = document.querySelector("#sectionNumber")

function setCourseInfo({ name, code }) {
  const courseName = document.querySelector("#courseName")
  const coursecode = document.querySelector("#courseCode")
  courseName.textContent = name
  coursecode.textContent = code
}

function renderSections({ sections }) {
  document.querySelector("#sections").innerHTML = sections.map(
    ({ sectionNum, roomNum, enrolled, days, instructor }) => (
      `<tr>
        <td>${sectionNum}</td>
        <td>${roomNum}</td>
        <td>${enrolled}</td>
        <td>${days}</td>
        <td>${instructor}</td>
      </tr>`
    )
  ).join('')
}

document.querySelector("#enrollStudent").addEventListener("click", () => aCourse.enrollmentUpdate(Number(input.value)))

document.querySelector("#dropStudent").addEventListener("click", () => aCourse.enrollmentUpdate(Number(input.value), false))

setCourseInfo(aCourse)
renderSections(aCourse)
