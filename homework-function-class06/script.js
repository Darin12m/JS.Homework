// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2

fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)

    .then(function (response) {
        let data = response.json();

        return data;
    })
    .then(function (data) {
        let studentsWithGradeAbove3 = data.filter(student => student.averageGrade > 3);
        console.log(studentsWithGradeAbove3);

        let femaleWithAvarage5 = data.filter(student => student.gender === `Female` && student.averageGrade === 5);
        console.log(femaleWithAvarage5);

        let maleFromSkopjeOver18 = data.filter(student => student.firstName + ` ` + student.lastName && student.gender === `Male` && student.city === `Skopje` && student.age > 18);
        console.log(maleFromSkopjeOver18);

        let femaleOver24 = data.filter(student => student.gender === `Female` && student.age > 24 && student.averageGrade);
        console.log(femaleOver24);

        let maleNameStartingWithB = data.filter(student => student.gender === `Male` && student.firstName.startsWith(`B`) && student.averageGrade > 2);
        console.log(maleNameStartingWithB);
    })
    .catch(function (error) {
        console.log(error);
    })

