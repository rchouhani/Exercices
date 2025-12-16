function getBusinessAddress(business) {
const number = business.address.number
const street = business.address.street
const zipCode = business.address.zipCode

const add = {
    address: {
        number,
        street,
        zipCode,
    },
    name: business.name
}
     return `${number}, ${street}, ${zipCode}`;
}
console.log(
    getBusinessAddress({
        name: "King Jouet",
        address:{ number: 3, street:"avenue Park", zipCode: 32000 } 
    }
    ))
export { getBusinessAddress };