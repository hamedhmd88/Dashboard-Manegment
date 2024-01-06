


export default function List({imform, handleEdit, handleDelete}) {



  return (
    <div className='contain-table'>
     
    <table className='striped-table'>
        <thead  style={{backgroundColor:'#9a9a9a', color: "white"}}>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Date</th>
                <th colSpan={2} className="text-center">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {imform.length > 0 ? (
                imform.map((item, i) => (
                    <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                        <td>{item.date} </td>
                        <td className="text-right">
                            <button
                               
                                onClick={() => handleEdit(item.id)}
                                className="button muted-button"
                                style={{backgroundColor:'#29de7d', color: "white"}}
                            >
                                Edit
                            </button>
                        </td>
                        <td className="text-left">
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="button muted-button"
                                style={{backgroundColor:'#d33c40', color: "white"}}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={7}>No Employees</td>
                </tr>
            )}
        </tbody>
    </table>
</div>
  )
}
