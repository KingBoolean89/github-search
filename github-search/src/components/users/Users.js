import React from 'react'
import UserItem from './UserItem'

 const Users = ({  users,loading  }) => {
     
        return (
            <div style = {userStyles}>
                {users.map(user=> (
                    <UserItem key = {user.id} user = {user} />
                ))}
            </div>
        )
}

const userStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
