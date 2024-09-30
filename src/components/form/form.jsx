import React from "react";

const Form = ({ onSubmit, fields }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
      <form onSubmit={onSubmit} className="space-y-6">
        {fields.map((field, index) => (
          <div key={index} className="space-y-2">
            <label htmlFor={field.name} className="block text-sm font-medium text-blue-900">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                placeholder={field.placeholder}
                required={field.required}
                rows={field.rows || 4}
                className="w-full px-3 py-2 text-blue-600 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-3 py-2 text-blue-600 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
