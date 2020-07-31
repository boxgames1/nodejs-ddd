type UnvalidatedOrder = {
  unvalidatedCar: UnvalidatedCar;
  fuelPolicy: FuelPolicy;
  unvalidatedPickUp: UnvalidatedOffice;
  unvalidatedDropOff: UnvalidatedOffice;
  unvalidatedStart: UnvalidatedStart;
  unvalidatedEnd: UnvalidatedEnd;
  userId: number;
};

type ValidatedOrder = {
  unvalidatedCar: ValidatedCar;
  fuelPolicy: FuelPolicy;
  validatedPickUp: ValidatedOffice;
  validatedDropOff: ValidatedOffice;
  validatedStart: ValidatedStart;
  validatedEnd: ValidatedEnd;
  userId: number;
};

type PricedOrder = {
  validatedOrder: ValidatedOrder;
  amountToBill: number;
};
