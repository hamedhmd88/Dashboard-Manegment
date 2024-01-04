
import { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

export default function Add({imform, setImform, setIsAdding}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');


  const textInput = useRef(null);

  useEffect(() => {
      textInput.current.focus();
  }, [])


  const handleAdd = e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !age || !date) {
        return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true
        });
    }

    const id = imform.length + 1;
    const newEmployee = {
        id,
        firstName,
        lastName,
        email,
        age,
        date
    }
    imform.push(newEmployee);
    setImform(imform);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500
  });
}



  return (
    <div className="small-container">
    <form onSubmit={handleAdd} style={{backgroundColor:'#7077A1', padding:'45px', marginTop:'15px', marginBottom:'15px', color:'white',borderRadius:'12px'}}>
        <h1  style={{color:'white'}}>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          style={{borderColor:'white', color:'white'}}
            id="firstName"
            type="text"
            ref={textInput}
            name="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
         style={{borderColor:'white', color:'white'}}
            id="lastName"
            type="text"
            name="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
        style={{borderColor:'white', color:'white'}}
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Age</label>
        <input
       style={{borderColor:'white', color:'white'}}
            id="age"
            type="number"
            name="age"
            value={age}
            onChange={e => setAge(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
        style={{borderColor:'white', color:'white'}}
            id="date"
            type="date"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
            <input type="submit" value="Add" />
            <input
                style={{ marginLeft: '12px', backgroundColor:'#d33c40', color: "white" }}
                className="muted-button"
                type="button"
                value="Cancel"
                onClick={() => setIsAdding(false)}
            />
        </div>
    </form>
</div>
  )
}
