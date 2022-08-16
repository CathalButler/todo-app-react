export interface Task {
    id: String,
    title: String,
    createdAt: String,
    category: String
    todo: [Todo]

}

export interface Todo {
    id: String,
    title: String,
    isComplete: boolean
}