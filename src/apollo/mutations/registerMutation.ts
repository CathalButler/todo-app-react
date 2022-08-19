import {gql} from "@apollo/client";

export const REGISTER_MUTATION = gql`
    mutation Signup(
        $email: String!
        $password: String!
        $name: String!
    ) {
        signup(
            email: $email
            password: $password
            name: $name
        ) {
            token
        }
    }
`;