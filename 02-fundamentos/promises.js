/**
 * El objeto Promise (Promesa) es usado para computaciones asíncronas.
 * Una promesa representa un valor que puede estar disponible ahora,
 * en el futuro, o nunca.
 */
const employees = [
    {
        id: 1,
        name: 'Antony'
    },
    {
        id: 2,
        name: 'Sara'
    },
    {
        id: 3,
        name: 'Iker'
    }
];

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    }
];

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find(e => e.id === id)?.name;

        employee
            ? resolve(employee)
            :  reject(`Empleado con id ${id} no existe.`)
    });
}

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(e => e.id === id)?.salary;

        salary
            ? resolve(salary)
            : reject(`El empleado con id ${id} no tiene salario.`)
    });
}

const id = 5;

// getEmployee(id)
//     .then(employee => console.log(employee))
//     .catch(err => console.error(err));

// getSalary(id)
//     .then(salary => console.log(salary))
//     .catch(err => console.error(err));

let firstName;

getEmployee(id)
    .then(employee => {
        firstName = employee;
        return getSalary(id)
    })
    .then(salary => console.log(`El empleado ${firstName} tiene un salario de $${salary}`))
    .catch(err => console.log(err));