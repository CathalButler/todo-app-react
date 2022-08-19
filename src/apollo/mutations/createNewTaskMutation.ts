import {gql} from "@apollo/client";

export const CREATE_NEW_TASK_MUTATION = gql`
    mutation CreateMutation(
        $title: String!
        $category: String!
    ) {
        createTask(title: $title, category: $category) {
            id
            title
            category
            createdAt
        }
    }
`;