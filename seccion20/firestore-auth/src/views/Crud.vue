<template>
  <div v-if="isAuthenticated">
    <h1>Crud</h1>
  <cargando v-if="cargando"></cargando>
  <div v-else>
    <Error v-if="pintarError"></Error>
    <TodoForm></TodoForm>

    <Todo v-for="todo in todos" :key="todo.id" :todo="todo"></Todo>
    <p v-if="todos.length === 0">
      Sin Todos

    </p>
  </div>
  </div>
</template>

<script>
import { useAuth } from '@vueuse/firebase'
import {useDb} from '../components/useDb.js'
import Cargando from '../components/Cargando.vue'
import Error from '../components/Error.vue'
import TodoForm from '../components/TodoForm.vue'
import Todo from '../components/Todo.vue'
import { computed, onMounted, provide, ref } from 'vue'

export default {
  components:{
    Cargando,
    Error,
    TodoForm,
    Todo
  },
  setup(){
  // const {isAuthenticated} = useAuth()
   const { isAuthenticated } = useAuth() 

  const {getTodos, cargando} = useDb()
  const todos = ref([])
  const error=ref(null)

  provide('error' ,error)
  provide('todos',todos)

  const pintarError=computed(() => error.value ? true : false)

  onMounted(async()=>{
    todos.value = await getTodos()
    if(todos.value.res){
      console.log(todos.value.error)
      error.value=todos.value.error
    }
  })

  return{
    isAuthenticated,
    todos,
    cargando,
    pintarError
  }

 }

}
</script>

