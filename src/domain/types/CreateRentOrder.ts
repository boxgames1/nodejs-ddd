type CreateRentOrderResult =
  | RentOrderCreated
  | InvalidCarError
  | CarNotAvailableError;

type CreateRentOrder = (
  productStock: ProductStock // dependency
) => (unvalidatedOrder: UnvalidatedOrder) => CreateRentOrderResult;
