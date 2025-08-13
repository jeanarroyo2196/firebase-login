export const Login = () => {
  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen lg:flex">
        <div
          className="absolute inset-0 my-auto h-screen bg-[url('src/assets/images/wave.svg')] bg-cover bg-no-repeat"
        ></div>
      </div>
      <div className="flex-1 flex item-center justify-center h-screen pt-20">
        <div className="w-full max-w-md space-y-8 px-4 text-white sm:px-0">
          <div className="pt-24">
            <div className="mt-5 space-y-2">
              <h3 className="text-white text-2xl font-bold sm:text-3xl">Log in to your account</h3>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div>
              <label className="font-medium text-white">
                Email
              </label>
              <input type="email" required className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
            </div>
            <div>
              <label className="font-medium">
                Password
              </label>
              <input type="password" required className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
            </div>
            <button className="w-full mt-2 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Sign in
            </button>
          </form>
          <p className="text-center text-white">Don't have an account? <a className="font-medium text-indigo-600 hover:text-idnigo-500">Sign up</a></p>
        </div>
      </div>
    </main>
  );
};
