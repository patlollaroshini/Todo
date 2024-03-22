import {useForm}  from 'react-hook-form'

function Formdemo(){

let {register,
  handleSubmit,
  formState:{errors},
  }=useForm()
// console.log("error obj is",errors)
let submitForm=(userObj)=>{
console.log(userObj)

fetch("https://localhost:4000/users",{
  method:"POST",
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify(userObj)
})
.then(res=>res.json())
.then(message =>console.log(message))
.catch(err=>console.log("err is",err))
}
    return(
        <div className="container">
            <h1 className="text-success display-4 mb-3">Form</h1>
  <div className="row">
    <div className="col-11 col-sm-8 col-md-6 mx-auto">
    <form onSubmit={handleSubmit(submitForm)} >
            <input 
            type="text"
            id="username" 
            className="form-control mb-3"
            placeholder="Username"
            {...register("username",{required:true,minLength:"5",maxLength:"6"})}
            />

      {errors.username?.type==="required" && <p className='text-danger'>*Username is required</p>}

      {errors.username?.type==="minLength" && <p className='text-danger'>*Min Length is 5</p>}

      {errors.username?.type==="maxLength" && <p className='text-danger'>*Max Length is 6</p>}

       <button type="submit" className="btn btn-success">
        Add User</button>       
          </form>
  </div>
        </div>
        </div>
    )
}
export default Formdemo;