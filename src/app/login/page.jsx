
import image from "@/asset/registerImages/register.png";
import Image from "next/image";

import LoginForm from "@/components/loginRegisterParts/loginForm";

const Login = () => {
  
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl flex gap-6 py-12  flex-col md:flex-row mx-auto items-center px-4 ">
        <LoginForm/>
        <div className="w-full">
          <Image src={image} alt="login" className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default Login;
