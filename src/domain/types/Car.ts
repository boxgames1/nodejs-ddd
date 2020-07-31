type UnvalidatedCar = {
    id: number,
    model: string,
    manufacturer: string,
    fuel: Fuel,
    description: string,
    seats: number
}

type ValidatedCar = {
    id: number,
    model: string,
    manufacturer: string,
    fuel: Fuel,
    description: string,
    seats: number
}