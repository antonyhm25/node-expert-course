/**
 * El callback hell o infierno de los callbacks es un termino para referirse
 * a la llamada de funciones con callbacks dentro de otros funciones
 * con callbacks y asi sucesivamente
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

const getEmployee = (id, callback) => {
    const employee = employees.find(e => e.id === id)?.name;
    if (employee) {
        callback(null, employee)
    } else {
        callback(`Empleado con id ${id} no existe.`, null)
    }
}

const getSalary = (id, callback) => {
    const salary = salaries.find(e => e.id === id)?.salary;
    if (salary) {
        callback(null, salary)
    } else {
        callback(`El salario del empleado ${id} no se encontro.`)
    }
}

const id = 2

getEmployee(id, (err, employee) => {
    if (err) {
        console.log(err);
        return;
    }

    getSalary(id, (err, salary) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(`${employee} gana un salrio de $${salary}`);
    });
});