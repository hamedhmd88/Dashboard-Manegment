import { useState } from 'react'

import { information } from '../data/information'
import Swal from 'sweetalert2'
import Add from './Add'
import Edit from './Edit'
import Header from './Header'
import List from './List'

function Dashboard() {
    const [imform, setImform] = useState(information);
    const [selectedImform, setSelectedImform] = useState(null)
    const [isAdding, setIsAdding] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = (id) => {
        const [user] = imform.filter(item => item.id === id);

        setSelectedImform(user);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes it is',

            cancelButtonText: 'No, cancel!',
            cancelButtonColor: 'red',
            
        }).then(result => {
            if (result.value) {
                const [user] = imform.filter(item => item.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${user.firstName} ${user.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 2500,
                });

                setImform(imform.filter(item => item.id !== id));
            }
        });
    }



  return (

        <div className='container'>
             {/* List */}
             {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        imform={imform}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}

            {/* Add */}
            {isAdding && (
                <Add
                    imform={imform}
                    setImform={setImform}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    imform={imform}
                    selectedImform={selectedImform}
                    setImform={setImform}
                    setIsEditing={setIsEditing}
                />
            )}

        </div>
    
  )
}

export default Dashboard
