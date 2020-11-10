import React from 'react';

export default function List ({item, setFormValues}) {
    const editUser = () => {
        setFormValues(item)
    }

    return (
        <div>
            <h2> {item.name} </h2>
            <h2> {item.email} </h2>
            <h2> {item.role} </h2>
            <button onClick={editUser}>Edit User</button>
        </div>   
        
        )
}