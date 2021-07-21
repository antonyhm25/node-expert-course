/**
 * Una función de callback es una función que se pasa a otra función
 * como un argumento, que luego se invoca dentro de la función
 * externa para completar algún tipo de rutina o acción.
 */

const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Antony'
    };

    setTimeout(() => {
        callback(user, null)
    }, 1500);
}

getUserById(1, (user, err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(user)
});