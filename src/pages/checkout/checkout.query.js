export const setShippingAddressesOnCart = (adress , cart_id) => {
    const {firstname , lastname , city , country_code , postcode , street ,telephone } = adress
    return {
        query: `     
        mutation ( $firstname: String! , $lastname: String! , $city: String! , $country_code: String! , $postcode: String! , $telephone: String! , $street: [String]!, $cart_id: String!  ) {
            setShippingAddressesOnCart(
                input: {
                cart_id: $cart_id
                shipping_addresses: [
                    {
                    address: {
                    firstname: $firstname
                    lastname: $lastname
                    company: ""
                    street: $street
                    city: $city
                    postcode: $postcode
                    country_code: $country_code
                    telephone: $telephone
                        }
                    }
                ]
            }
            ) {
                cart {
                    shipping_addresses {
                        firstname
                        lastname
                        company
                        street
                        city
                        region {
                            code
                            label
                        }
                        postcode
                        telephone
                        country {
                            code
                            label
                        }
                        available_shipping_methods{
                            carrier_code
                            carrier_title
                            method_code
                            method_title
                        }
                    }
                }
            }
        }
      `,
      variables: {
        cart_id : cart_id,
        firstname: firstname,
        lastname: lastname,
        city: city,
        country_code: "TN",
        postcode: postcode,
        street: street,
        telephone: telephone,
        
      }
    }
}


export const setAdressBook = (adress) => {
    const {firstname , lastname , city , postcode , street ,telephone } = adress
    return {
        query: `     
        mutation ( $firstname: String! , $lastname: String! , $city: String! , $postcode: String! , $telephone: String! , $street: [String]!  ) {
                createCustomerAddress(input: {
                  region: {
                    region: ""
                    region_code: ""
                  }
                  country_code: TN
                  firstname: $firstname
                  lastname: $lastname
                  street: $street
                  city: $city
                  postcode: $postcode
                  telephone: $telephone
                  default_shipping: true
                  default_billing: false
                }) {
                  id
                  region {
                    region
                    region_code
                  }
                  country_code
                  street
                  telephone
                  postcode
                  city
                  default_shipping
                  default_billing
                }            
        }
      `,
      variables: {
        firstname: firstname,
        lastname: lastname,
        city: city,
        postcode: postcode,
        street: street,
        telephone: telephone,
        
      }
    }
}

