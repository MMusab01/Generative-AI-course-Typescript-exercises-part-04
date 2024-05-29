/*

Part 3: Array with Types and Indexing - Employee Salaries
Challenge:
You are managing employee salaries for a company. Implement logic to calculate salaries and handle bonuses.
1. Define a type alias named Employee with the following properties:
• name (string): The name of the employee.
• hoursWorked (number): The number of hours the employee worked.
• hourlyRate (number): The hourly rate of the employee.
• salary (number): The base salary of the employee.
2. Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary.
3. Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.

*/

type Employee = {
    name : string;
    hoursWorked : number;
    hourlyRate : number;
    salary : number;
};

const employees : Employee[] = [
    {
        name : "Umar",
        hoursWorked : 15,
        hourlyRate : 134,
        salary : 0
    },
    {
        name : "Tariq",
        hoursWorked : 20,
        hourlyRate : 200,
        salary : 0
    },
    {
        name : "Kashif",
        hoursWorked : 8,
        hourlyRate : 334,
        salary : 0
    }
];

function calculateSalary(employee : Employee) {
    employee.salary = employee.hourlyRate * employee.hoursWorked
    if (employee.hoursWorked >= 20) {
        employee.salary *= 0.10
    }
    console.log(employee);
};

calculateSalary(employees[0]);
calculateSalary(employees[1]);
calculateSalary(employees[2]);