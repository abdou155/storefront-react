export const mygraph = (props) => {
    const { firstname, lastname, email, password } = props
    return {
      query: `
      mutation {
        createCustomerAddress(input: {
          region: {
            region: "Arizona"
            region_code: "AZ"
          }
          country_code: US
          street: ["123 Main Street"]
          telephone: "7777777777"
          postcode: "77777"
          city: "Phoenix"
          firstname: "Bob"
          lastname: "Loblaw"
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
        `
      ,
      variables: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        is_subscribed: true
      }
    }
  
  }