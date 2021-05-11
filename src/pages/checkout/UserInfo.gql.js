export const mygraph = {
    query: `
    query {
        customer {
          firstname
          lastname
          suffix
          email
          addresses {
            firstname
            lastname
            street
            city
            region {
              region_code
              region
            }
            postcode
            country_code
            telephone
          }
        }
      }
      
      `
}