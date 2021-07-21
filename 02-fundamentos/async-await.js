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

const getInfoUsuario = async (id) => {
    try {
        const firstName = await getEmployee(id);
        const salary = await getSalary(id)

        return `el salario del empleado ${firstName} es de $${salary}`;
    } catch (err) {
        throw err
    }
}

getInfoUsuario(5)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));