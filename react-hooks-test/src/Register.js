import { useForm } from "react-hook-form";

export default function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    function onFormSubmit(data){
        console.log(data);
    }

  return (
    <div>
      <h1>Register</h1>
      <div className="container">
        <div className="row text-start">
            <div className="col">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-group">
                        <label htmlFor="txtEmail">Email *</label>
                        <input type="email" className="form-control" id="txtEmail" aria-describedby="emailHelp"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="txtName">Name *</label>
                        <input type="text" className="form-control" id="txtName"
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