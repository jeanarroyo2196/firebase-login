export const Form = () => {
  return (
    <main className="w-full flex h-screen">
      <div className="relative flex-1 hidden lg:flex">
        <div className="absolute inset-0 bg-[url('src/assets/images/wave.svg')] bg-cover bg-no-repeat"></div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-900 p-3">
        <div className="w-full max-w-2xl p-10 rounded-lg shadow border bg-gray-800 border-gray-700">
          <h1 className="text-3xl font-bold text-white mb-6">
            Sign in to your account
          </h1>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full mt-2 p-3 bg-gray-700 text-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full mt-2 p-3 bg-gray-700 text-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full mt-2 px-5 py-2.5 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 cursor-pointer">
              Sign in
            </button>
            <p className="text-center text-white">Don't have an account? <a className="font-medium text-indigo-600 hover:text-idnigo-500 cursor-pointer">Sign up</a></p>
          </form>
        </div>
      </div>
    </main>
  );
};
