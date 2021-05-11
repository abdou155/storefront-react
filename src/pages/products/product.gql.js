export const productQuery ={
    query: `
        {
          products(search: "", pageSize: 10) {
            total_count
            items {
              name
              sku
              price_range {
                minimum_price {
                  regular_price {
                    value
                    currency
                  }
                }
              }
            }
            page_info {
              page_size
              current_page
            }
          }
        }
      
      `
}