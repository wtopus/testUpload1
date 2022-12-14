
const Input_hecto = ({ type, name, placeholder, onChange}) => {
  return (
    <>
      <input 
        onChange={onChange}
        type={type} 
        name={name}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  rounded-md sm:text-sm focus:ring-1" placeholder={placeholder} />
    </>
  )
}

export default Input_hecto;