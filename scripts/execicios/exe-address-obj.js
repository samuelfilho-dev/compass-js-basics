const address = {
    street: 'Rua',
    city: 'Porto Alegre',
    zipCode: '55555-000'
}

function showAddress(address) {
    for (let key in address) {
        console.log(`${key}: ${address[key]}`)
    }
}

showAddress(address);