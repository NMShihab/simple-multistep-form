import Signup from "@/components/Signup/Signup";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-10">Welcome Abroad! Create Your Account</h1>
      <Signup />
    </div>
  );
};

export default page;
