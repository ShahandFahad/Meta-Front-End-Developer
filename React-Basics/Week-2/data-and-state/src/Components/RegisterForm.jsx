import { useState, useRef } from "react";

export default function RegisterForm(){

    const [form, setForm] = useState(
        {
            firstName: 'Luke', 
            lastName: 'Jones', 
            email: 'lukeJones@sculpture.com',
        }
    );


    return (
    <>
    <h1>Registeration From</h1>
    {/* Input Field 1 */}
    <label> 
        First name: 
        <input 
        
          value={form.firstName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              firstName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <br/>
      {/* Inout Field 2 */}

      <label>
        Last Name:
        <input value={form.lastName} 
        onChange={e => {
            setForm({...form, lastName: e.target.value});
        }}
        />
        
        
      </label>
      <br/>
      {/* Input Filed 3 */}
      <label>
        Email:
        <input value={form.email}
        onChange={
            e => {
                setForm({
                    email: e.target.value
                });
            }
        }
        />
      </label>
      <div>
        <h1>{form.firstName}{' '}</h1>
        <h1>{form.lastName}</h1>
        <h1>{form.email}</h1>
      </div>
      <div>
              <p> 
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.email})
      </p> 
      </div>
    </>
    )
};