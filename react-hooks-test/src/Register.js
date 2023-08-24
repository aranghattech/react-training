import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

class Employee {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export default function Register() {

    const { register, handleSubmit, watch,formState: { errors, isDirty } } = useForm({mode: 'onChange'});

    function onFormSubmit(data){
        console.log(data);
    }

    let emplyee = new Employee("Ravi","ravi@gmail.com", "123456");
   

  return (
    <div>
      <h1>Register</h1>
      <div className="container">
        <div className="row text-start">
            <div className="col">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-group">
                        <label htmlFor="txtEmail">Email *</label>
                        <input value={emplyee.email} type="email" className={"form-control " + (errors?.email ? "is-invalid": "")} id="txtEmail" aria-describedby="emailHelp"

                            {...register("email", { required: true, minLength: 5, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email?.type == "required" && <span className="text-danger">Email is required</span>}
                        {errors.email?.type == "minLength" && <span className="text-danger">Email must be atleast 5 chars</span>}
                        {errors.email?.type == "pattern" && <span className="text-danger">Doen't look like a email</span>}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="txtName">Name *</label>
                        <input value={emplyee.name} type="text" className="form-control" id="txtName"
                         {...register("name", { required: true })}
                        />
                          {errors.name && <span className="text-danger">Name is required</span>}
                    </div>


                    <div className="form-group mt-4">
                        <label htmlFor="txtPassword">Password *</label>
                        <input type="password" className="form-control" id="txtPassword"
                         {...register("password", { required: true })}
                        />
                          {errors.password && <span className="text-danger">Password is required</span>}
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Register</button>

                </form>
            </div>
        </div>
      </div>
    </div>
  );
}