import  { useState } from 'react'
import Swal from 'sweetalert2';
export default function Edit({imform, selectedImform, setImform, setIsEditing}) {


  const id = selectedImform.id;

  const [firstName, setFirstName] = useState(selectedImform.firstName);
  const [lastName, setLastName] = useState(selectedImform.lastName);
  const [email, setEmail] = useState(selectedImform.email);
  const [age, setAge] = useState(selectedImform.age);
  const [date, setDate] = useState(selectedImform.date);


  const handleUpdate = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !age || !date) {
        return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true
        });
    }

    


      const user = {
          id,
          firstName,
          lastName,
          email,
          age,
          date
      };

      for (let i = 0; i < imform.length; i++) {
          if (imform[i].id === id) {
            imform.splice(i, 1, user);
              break;
          }
      }

      setImform(imform);
      setIsEditing(false);

      Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: `${user.firstName} ${user.lastName}'s data has been updated.`,
          showConfirmButton: false,
          timer: 2500
      });
  };
  



  return (
    <div>
       <div className="small-container">
            <form onSubmit={handleUpdate} style={{backgroundColor:'#7077A1', padding:'45px', marginTop:'15px', marginBottom:'15px', color:'white',borderRadius:'12px'}}>
                <h1 style={{color:'white'}}>Edit Imformation</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                  style={{color:'white'}}
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                style={{color:'white'}}
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                style={{color:'white'}}
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="age">Age</label>
                <input
                style={{color:'white'}}
                    id="age"
                    type="number"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                style={{color:'white'}}
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px', backgroundColor:'#d33c40', color: "white" }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    </div>
  );
}

