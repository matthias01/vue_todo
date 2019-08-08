import axios from 'axios';

const state = {
    todos: []
}; 

const getters = {
    allTodos : (state) => state.todos,

}; 


const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

       commit('setTodos', response.data); //response.data = alltodos passed to the mutation
    },

    async addTodo({commit}, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
        {title, completed : false});
        commit('addNewTodo', response.data);
    },

    async deleTodo({commit}, id){
        const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/${id}');
        commit('delTodo', id);
    },

    async filterTodos({commit}, limit){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit='+limit);
        commit('setTodos', response.data);
    },

    async updateTodos({commit}, updatedTodo){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit='+limit);
        commit('setTodos', response.data);
    }
    
}; 

const mutations = {
    setTodos: (state, alltodos) =>(state.todos = alltodos),
    addNewTodo : (state, newTodo) => state.todos.unshift(newTodo),
    delTodo : (state, id) => state.todos =  state.todos.filter(todo => todo.id !== id),
 

}; 

export default {
    state,
    getters,
    actions,
    mutations
}