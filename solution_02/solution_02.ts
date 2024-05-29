/*

Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
Challenge:
You are tasked with creating a student grading system. Implement functions and logic to manage student grades effectively.
1. Define a TypeScript type alias named Student to represent a student with the following properties:
• name (string): The name of the student.
• grades (number[ ]): An array of grades for different subjects.
2. Create an array named students containing at least three student objects. Each student object should include a name and an array of grades.
3. Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.
4. Display each student's name and average grade. Iterate through the students array, calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade.

*/

type Student = {
    name : string;
    grades : number[];
}

let students : Student[] = [
    {
        name : "Musab",
        grades : [78, 65, 78, 80]
    },
    {
        name : "Umar",
        grades : [83, 65, 78, 76]
    },
    {
        name : "Shayan",
        grades : [86, 67, 75, 69]
    }
];

function calculateAverageGrade(grades: number[]) {
    const total : number = grades.reduce((sum, grade) => sum + grade, 0);
    console.log(total / grades.length);
}

calculateAverageGrade(students[2].grades);

function nameAndAverageGrade(students : Student[]) {
    for (let i = 0; i < students.length; i++) {
    let n = students[i].grades;
    const total : number = n.reduce((sum, grade) => sum + grade, 0);
    let averageGrade : number = total / students[i].grades.length;
    console.log(`name: ${students[i].name}`);
    console.log(`grades: ${students[i].grades}`);
    console.log(`average grades: ${averageGrade} \n`);
    }
}

nameAndAverageGrade(students);