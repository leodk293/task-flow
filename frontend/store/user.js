import {create} from 'zustand';

export const useUserStore = create((set) => ({
    user: null,
    setUser: (user) => set({user}),
    login: async (email, password) => {
        if (!email || !password) {
            return {success: false, message: "Please fill all fields"};
        }

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const data = await res.json();
        if (!res.ok) {
            return {success: false, message: data.message};
        }
        set({user: data.user});
        return {success: true, message: "Login successful"};
    },

    register: async (email, password) => {
        if (!email || !password) {
            return {success: false, message: "Please fill all fields"};
        }

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const data = await res.json();
        if (!res.ok) {
            return {success: false, message: data.message};
        }
        set({user: data.user});
        return {success: true, message: "Registration successful"};
    },

    logout: async () => {
        const res = await fetch('/api/auth/logout');
        if (!res.ok) {
            return {success: false, message: "Failed to logout"};
        }
        set({user: null});
        return {success: true, message: "Logout successful"};
    }
}));