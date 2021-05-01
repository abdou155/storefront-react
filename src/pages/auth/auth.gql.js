export const mygraph = (props) => {
  const { firstname, lastname, email, password } = props
  return {
    query: `
    mutation ( $firstname: String! , $lastname: String! , $email: String! , $password: String! , $is_subscribed: Boolean! ){
        createCustomer(
            input: {
              firstname: $firstname,
              lastname: $lastname
              email: $email
              password: $password
              is_subscribed: $is_subscribed
            }
          ) {
            customer {
              firstname
              lastname
              email
              is_subscribed
            }
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