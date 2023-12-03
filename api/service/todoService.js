import Todo from "../models/todoModel.js";

export default class todoService {
    static async createTodo(data) {
        return Todo.create(data)
    }

    static async getTodo() {
        return Todo.find();
    }

    static async updateTodo(id,data) {
        return Todo.findByIdAndUpdate(id,data,{new:true});
    }

    static async deleteTask(taskId) {
        return Todo.findByIdAndDelete(taskId)
    }
}