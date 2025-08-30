const ResetPassword = () => {
  return (
    <>
      <h2 className="lg:text-2xl text-base sm:text-xl font-semibold text-gray-700">
        Reset Your Password
      </h2>

      <div className="max-w-[450px]  overflow-hidden mt-6 mx-auto rounded-2xl  border">
        <h2 className="text-center text-sm py-5 font-semibold sm:text-base text:lg bg-blue-100">
          Change Your Password
        </h2>
        <form className="text-xs bg-white md:text-sm space-y-3 p-4" action="">
          <div className="flex flex-col space-y-1">
            <label htmlFor="pass">Old Password</label>
            <input
              id="pass"
              type="password"
              placeholder="Enter Your Old Password"
              className="border p-3 focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="npass">New Password</label>
            <input
              id="npass"
              type="password"
              placeholder="Enter Your New Password"
              className="border p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="cpass">Confirm New Password</label>
            <input
              id="cpass"
              type="password"
              placeholder="Confirm Your Password"
              className="border p-3 focus:outline-none focus:ring-0"
            />
          </div>

          <div className="mt-6">
            <input className="bg-[#1867d6] py-3 w-full text-white text-sm md:text-base" type="submit" value={"Update Password"} />
          </div>

        </form>
      </div>
    </>
  );
};

export default ResetPassword;
