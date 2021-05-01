export const TokenGraph = (props) => {
    const { email, password } = props
    return {
      query: `
      mutation  ( $email: String! , $password: String! ) {
        generateCustomerToken( 
            email: $email
            password: $password
        ){
          token
        }
      }
        `,
      variables: {
        email: email,
        password: password
      }
    }
  
  }