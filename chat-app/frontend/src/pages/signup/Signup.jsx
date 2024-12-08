import GenderCheckbox from "./GenderCheckbox"

const Signup = () => {
  return (
    <div className="flex flex-col items-center  justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter 
      backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-yellow-500 ml-2">
                 Chattie
          </span>
        </h1>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">
                Full Name
              </span>
            </label>
            <input type="text" placeholder="Jane Doe" className="w-full input input-bordered h-10"/>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">
                UserName
              </span>
            </label>
            <input type="text" placeholder="Janedoe" className="w-full input input-bordered h-10"/>
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">
                Password
              </span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">
                Confirm Password
              </span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"/>
          </div>

          <GenderCheckbox/>
          <a href="#" className="text-sm hover:underline hover:text-yellow-400 mt-2 inline-block">
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-50-700">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
