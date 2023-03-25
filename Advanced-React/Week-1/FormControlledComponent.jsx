// Controlled Component

const Form = () => {
  const [value, setValue] = useState('Type someting new...');

  // each time update the user input
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return (
      <div>
        <h2>Controlled Component using State</h2>
        <form >
         <label> Type: 
            <input value={value} onChange={handleChange} type="text" />
         </label>
        </form>
        <p>{value.toUpperCase()}</p>
      </div>
  );
}