<template>
    <div>
        <h3>Filter Todo</h3>
        <select v-model="filterLimit" @change="setFilter">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:"FilterTodo",
    data(){
        return{
            todo:'',
            filterLimit: 200
        }
    },
    methods:{

         ...mapActions(['filterTodos']),
        setFilter(filterLimit){
            this.filterTodos(this.filterLimit)
            //alert(this.filterLimit);
        }
    }
}
</script>

<style>
select{
    margin-top:20px;
    padding: 6px;
    border: #41b883 1px solid; 
}
</style>
