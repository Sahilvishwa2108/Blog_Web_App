import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    error = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='block text-sm font-medium text-gray-700 mb-2' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''} ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    )
})

export default Input