import { User } from "firebase/auth";
import Joi from "joi";
import { ChangeEvent, FormEvent, useState } from "react";
import useAddUser from "../../hooks/useAddUser";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
}

function ResigterUserToDb({ gUser }: { gUser: User }): JSX.Element {
  const initialCustomer = {
    uid: gUser.uid,
    name: gUser.displayName ?? "",
    email: gUser.email ?? "",
    phone: "",
    address: "",
  };
  const [customer, setCustomer] = useState<Customer>(initialCustomer);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // console.log(gUser);
  const { state } = useLocation();
  const navigate = useNavigate();
  const schema = Joi.object({
    uid: Joi.string(),
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    phone: Joi.string().min(5).max(30).required(),
    address: Joi.string().min(10).max(100).required(),
  });

  const validate = (): Record<string, string> | null => {
    const { error } = schema.validate(customer, { abortEarly: false });
    if (!error) return null;

    const validationErrors: Record<string, string> = {};
    for (const item of error.details) {
      validationErrors[item.path[0]] = item.message;
    }
    return validationErrors;
  };
  const { addUser, error, loading } = useAddUser();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }
    const user = await addUser(customer);
    if (user) {
     
      setCustomer(initialCustomer);
      toast("User added successfully!", { autoClose: 1500 });
      const from = state?.pathname || "/";
      navigate(from, { replace: true, state: { ...state } });
    }
    setErrors({});
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto mt-8 p-4 rounded border border-gray-800"
    >
      <div className="mb-4">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={customer.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.name && <div className="text-red-500">{errors.name}</div>}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={customer.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Phone:
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={customer.phone}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.phone && <div className="text-red-500">{errors.phone}</div>}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="address"
        >
          Shipping Address:
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={customer.address}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.address && <div className="text-red-500">{errors.address}</div>}
      </div>
      {/* <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Create Account
      </button> */}
      {error && <div className="text-center text-red-500 py-2">{error}</div>}
      <Button
        loading={loading}
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold w-full"
      >
        {" "}
        Create Account
      </Button>
    </form>
  );
}

export default ResigterUserToDb;
