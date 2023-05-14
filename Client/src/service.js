import axios from 'axios';
axios.defaults.baseURL="http://localhost:5080/todoitems";
// const apiUrl="http://localhost:5080/todoitems";
export default {


 getTasks: async () => {
    const result = await axios.get()
    return result.data;
  }, 

  addTask: async(task)=>{
    const result=await axios.post(`/`,{name:task, isComplete:false}).then(function (response) {
      console.log(response);  
        return result.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    // console.log('addTask', task)
    //TODO

  },

  setCompleted: async(id, isComplete)=>{
    // console.log('setCompleted', {id, isComplete})
    //TODO
await axios.put(`/${id}?isComplete=${isComplete}`).then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
    // return {};
  },

  deleteTask:async(id)=>{
    // console.log('deleteTask')
    const result=await axios.delete(`/${id}`).then(function (response) {
      console.log(response); 
      return result.data;
    })
    .catch(function (error) {
      console.log(error);
    });
 
  }
};
