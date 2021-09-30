import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                complete: false
            });
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id)
                state[index].complete = action.payload.complete;
        },
        deleteTodo: (state, action) => {
           return state.filter((todo) => todo.id !== action.payload.id)
        },
    }
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
