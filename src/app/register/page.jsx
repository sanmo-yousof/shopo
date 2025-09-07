
import image from "@/asset/registerImages/register.png"
import Image from "next/image";
import Discount from "@/components/shopParts/discount";
import RegisterForm from "@/components/loginRegisterParts/registerForm";



const Register = () => {
  return (
    
      <div className=" bg-gray-100 ">
        <div className="max-w-7xl flex gap-6 py-12  flex-col md:flex-row mx-auto items-center px-4 ">
          <RegisterForm/>
          <div className="w-full md:w-1/2">
          <Image
          src={image}
          alt="register"
          className="w-full"
          />
          </div>
        </div>
      </div>
      
  );
};

export default Register;
