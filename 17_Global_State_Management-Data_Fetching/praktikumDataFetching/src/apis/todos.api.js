import axiosInstance from "../config/axiosInstance";

export const APITodos = {
  async getAllTodos() {
    try {
      const response = await axiosInstance.get("/todos");
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async deleteToDo(id) {
    try {
      const response = await axiosInstance.delete(`todos/${id}`);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};
