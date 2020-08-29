import {gql} from '@apollo/client';

export const reqisterMutation = gql`
    mutation RegisterUser($email: String!, $password: String!) {
        register(data:{email:$email, password:$password}) {
            id
            email
        }
    }
`;

export const loginMutation = gql`
    mutation LoginUser($email: String!, $password: String!) {
        login(data:{email:$email, password:$password}) {
            authToken
            user { id email }
        }
    }
`;

//export const logoutMutation = gql`
//    mutation LogoutUser() {
//        logout
//    }
//`;

export const userQuery = gql`
    query {
        me {
            id
            email
        }
    }
`;