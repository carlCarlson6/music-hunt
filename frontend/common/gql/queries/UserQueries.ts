import {gql} from '@apollo/client';

export const reqisterMutation = gql`
    mutation RegisterUser($email: String!, $password: string!) {
        register(data:{email:$email, password:$password}) {
            id
            email
        }
    }
`;

export const loginMutation = gql`
    mutation LoginUser($email: String!, $password: string!) {
        login(data:{email:$email, password:$password}) {
            id
            email
        }
    }
`;

export const logoutMutation = gql`
    mutation LogoutUser() {
        login()
    }
`;

export const userQuery = gql`
    query {
        me {
            id
            email
        }
    }
`;