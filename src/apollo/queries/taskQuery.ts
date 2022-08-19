import {gql} from "@apollo/client";

export const TASK_QUERY = gql`
    {
        getAllUserTasksById {
            id
            title
            createdAt
            category
            todos {
                title
                isComplete
                note
                link
            }
        }

    }
`;