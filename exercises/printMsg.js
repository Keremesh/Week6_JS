const cohort = {
  name: 'May2022',
  id: 1132,
  students: ['Aa', 'Bb', 'Cc'],
  printMessage: () => {
    console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort}`)
  }
}


// const printMessage = (cohort) => {
//     console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort}`)
// }

// const printMessage = `${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort}`

cohort.printMessage()
