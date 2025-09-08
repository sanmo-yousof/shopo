"use client";

const ResetPassword = () => {
  const handleChangePassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const oldPassword = form.oldpass.value;
    const newPassword = form.newpass.value;
    const confirmPassword = form.confirmpass.value;

    const updatePassword = { oldPassword, newPassword, confirmPassword };
    console.log(updatePassword);
  };
  return (
    <>
      <h2 className="lg:text-2xl text-base sm:text-xl font-semibold text-gray-700">
        Reset Your Password
      </h2>

      <div className="max-w-[500px]  overflow-hidden mt-6 mx-auto rounded-2xl  border">
        <h2 className="text-center text-sm py-8 font-semibold sm:text-base text:lg bg-blue-100">
          Change Your Password
        </h2>
        <form
          onSubmit={handleChangePassword}
          className="text-xs bg-white md:text-sm space-y-3 p-8"
        >
          <div className="flex flex-col space-y-1">
            <label className="text-gray-500" htmlFor="pass">
              Old Password
            </label>
            <input
              id="pass"
              type="password"
              name="oldpass"
              placeholder="Enter Your Old Password"
              className="border p-3 rounded-md focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-gray-500" htmlFor="npass">
              New Password
            </label>
            <input
              id="npass"
              name="newpass"
              type="password"
              placeholder="Enter Your New Password"
              className="border rounded-md p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-gray-500" htmlFor="cpass">
              Confirm New Password
            </label>
            <input
              id="cpass"
              type="password"
              name="confirmpass"
              placeholder="Confirm Your Password"
              className="border rounded-md p-3 focus:outline-none focus:ring-0"
            />
          </div>

          <div className="mt-6">
            <input
              className="bg-[#1867d6] py-3 w-full text-white text-sm md:text-base cursor-pointer"
              type="submit"
              value={"Update Password"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
