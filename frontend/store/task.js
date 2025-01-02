import {create} from 'zustand'

export const useTaskStore = create((set) => ({
    tasks: [],
    setTasks: (tasks) => set({tasks}),
    createTask: async (newTask) => {
        if (!newTask.name || !newTask.description || !newTask.status) {
            return {success: false, message: "Please fill all fields"};
        }

        const res = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });
        const data = await res.json();
        set((state) => ({
            tasks: [...state.tasks, data.task]
        }));
        return {success: true, message: "Task created successfully"};
    },

    fetchTasks: async () => {
        try {
            const res = await fetch('/api/tasks');
            if (!res.ok) throw new Error('Failed to fetch tasks');
            const data = await res.json();
            set({tasks: data});
        } catch (error) {
            console.error("Error in fetchTasks:", error);
        }
    },

    deleteTask: async (id) => {
        const res = await fetch(`/api/tasks/${id}`, {
            method: 'DELETE'
        });
        if (!res.ok) throw new Error('Failed to delete task');
        set((state) => ({
            tasks: state.tasks.filter((task) => task._id !== id)
        }));
        return {success: true, message: "Task deleted successfully"};
    },

    updateTask: async (id, updatedTask) => {
        try {
            const res = await fetch(`/api/tasks/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedTask),
            });
            if (!res.ok) throw new Error('Failed to update task');
            const data = await res.json();
            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task._id === id ? data.task : task
                ),
            }));
        } catch (error) {
            console.error("Error in updateTask:", error);
        }
    }
}))