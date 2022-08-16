export interface Task {
    id: String,
    title: String,
    createdAt: String,
    category: String
    todos: [Todo]

}

export interface Todo {
    id: String,
    title: String,
    isComplete: boolean
}