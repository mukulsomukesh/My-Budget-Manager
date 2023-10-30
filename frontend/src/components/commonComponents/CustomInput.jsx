import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function CustomInput({ label, type, onChange, error, value, name, placeholder }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-2">
            <label className="block text-lg font-semibold">{label}</label>
            <div className="relative w-full">
                <input
                    placeholder={placeholder}
                    name={name}
                    type={showPassword ? 'text' : type}
                    onChange={onChange}
                    value={value}
                    className="border-2 border-primary-400 rounded-lg block w-full p-2 focus:outline-none focus:ring focus:border-primary-500"
                />
                {type === 'password' && (
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent"
                        onClick={handleTogglePassword}
                    >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </button>
                )}
            </div>
            {error && <span className="text-red-500 text-sm font-semibold mt-1">{error}</span>}
        </div>
    );
}
