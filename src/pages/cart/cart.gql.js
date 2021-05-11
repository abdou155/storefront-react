export const createCartQuery = {
  query: `
   {
  customerCart {
    id
    items {
      id
      product {
        name
        sku
      }
      quantity
    }
  }
}

      `
}