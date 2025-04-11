import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve, 2000));
    console.log("Form Submitted", data);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center flex-col h-screen bg-gray-3100 gap-4"
      >
        <h1 className="text-4xl">Login</h1>
        <div className="flex flex-col">
          <label htmlFor="text">Username</label>
          <input
            {...register("Username", {
              required: true,
              minLength: {value:3, message:"Minimum Lenght Atleast 3"},
              maxLength: {value: 20, message:"Maximum Length Atmost 20"}
            })}
            className="border-1 rounded-sm pl-1 bg-white"
            type="text"
            placeholder="Username"
          />
          {errors.Username && <p className="text-red-600 font">{errors.Username.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            {...register("Password", {
              required: true,
              minLength: { value: 6, message: "Minimum Lenght Atleast 6" },
              maxLength: { value: 20, message: "Maximum Lenght Atmost 20"}
            })}
            className="border-1 rounded-sm pl-1 bg-white"
            type="password"
            placeholder="Password"
          />
          {errors.Password && <p className="text-red-600">{errors.Password.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-800 hover:text-white rounded-md border-1 px-4 py-1 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting?"Submitting":"Click Me" }
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
