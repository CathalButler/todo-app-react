import {gql} from "@apollo/client";

export const CREATE_NEW_TODO_MUTATION = gql`
    mutation CreateMutation(
        $taskId: String!
        $title: String!
        $isComplete: Boolean!
        $note: String
        $link: String
    ) {
        addTodo(taskId: $taskId, title: $title, isComplete: $isComplete, note: $note, link: $link) {
            id
        }
    }
`;