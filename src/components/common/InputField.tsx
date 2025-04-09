import { UseFormRegister, FieldValues, FieldError, RegisterOptions, Path } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: keyof T;
  type: string;
  placeholder: string;
  icon: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  validation?: RegisterOptions<T, Path<T>>;
}

const InputField = <T extends FieldValues>({
  label,
  name,
  type,
  placeholder,
  icon,
  register,
  error,
  validation,
}: InputFieldProps<T>) => {
  return (
    <div className="mb-[24px] relative">
      <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">
        {label}
      </label>
      <div className="relative">
        <img 
          src={icon} 
          alt={name as string} 
          className='w-[30px] h-[18px] absolute sm:left-[30px] left-[15px] top-1/2 transform -translate-y-1/2' 
        />
        <input
          {...register(name as Path<T>, validation)}
          type={type}
          className="w-full py-[17px] px-[18px] sm:ps-[70px] ps-[50px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
          placeholder={placeholder}
        />
      </div>
      {error && (
        <span className="text-red-500 text-sm mt-1">{error.message}</span>
      )}
    </div>
  );
};

export default InputField; 