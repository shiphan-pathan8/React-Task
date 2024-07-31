import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const RegistrationForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', password: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formState.name) {
      errors.name = 'Name is required';
    }
    if (!formState.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formState.password) {
      errors.password = 'Password is required';
    } else if (formState.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      // Handle form submission
      console.log('Form submitted successfully:', formState);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg bg-purple-400 ">
      <div className="mb-4 ">
        <label htmlFor="name" className="block text-sm font-bold text-black">
          Name
        </label>
        <input type="text" id="name" name="name" value={formState.name} onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold text-black">
          Email
        </label>
        <input type="email" id="email" name="email" value={formState.email} onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-bold text-black">
          Password
        </label>
        <input type="password" id="password" name="password" value={formState.password} onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
      </div>
      <button type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
