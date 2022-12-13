const users = [{
    name: 'Andrea Moreno',
    numberID: '1192763570',
    password: 'prueba123',
    userType: 1,
},
{
    name: 'Jesus Montoya',
    numberID: '1192763571',
    password: 'holaMundo1',
    userType: 2,
},
{
    name: 'Francisco Perez',
    numberID: '1192763572',
    password: 'password1',
    userType: 1,
},
{
    name: 'Erika Mendoza',
    numberID: '1192763573',
    password: 'hamburguesas1',
    userType: 2,
},
{
    name: 'Erick Rivero',
    numberID: '1192763574',
    password: 'javascript1',
    userType: 1,
},
{
    name: 'Ludwing Barrera',
    numberID: '1192763575',
    password: 'oldDog',
    userType: 2,
},
{
    name: 'Andres Marino',
    numberID: '1192763576',
    password: 'nopassword1',
    userType: 1,
},
{
    name: 'Maria Martinez',
    numberID: '1192763577',
    password: 'codeprogramming',
    userType: 2,
},
{
    name: 'Rafael Uzcategui',
    numberID: '1192763578',
    password: 'rafa111',
    userType: 1,
},
{
    name: 'Amparo Pereira',
    numberID: '1192763579',
    password: '123654',
    userType: 2,
}
]

function login(form) {
    if (form.doc.value===numberID) {
        if (form.pass.value===password) {
            location='main.html'
        } else {
            alert('incorrect password')
        }
    } else {
        alert('Incorrect identification number')
    }
}
console.log(login);