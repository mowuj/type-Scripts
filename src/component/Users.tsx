import React, { useEffect, useState } from 'react';
import UserModel from '../types/model';
// import User from '../types/model';
import User from './User';

const Users = () => {
    const [team,setTeam]=useState<UserModel[]>([])
    const [users, setUsers] = useState<UserModel[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
            setUsers(data)
        })
    },[])
    const handleAddUser = (user:UserModel): void => {
        const newTeam = [...team, user];
        setTeam(newTeam);
    }
    return (
        <div>
            <h2>my users:</h2>
            <h3>Team size:{ team.length}</h3>
            {/* <User name="rohomot" age={55} addUser={handleAddUser}></User> */}
            {
                users.map(user=><User user={user} addUser={handleAddUser}></User>)
            }
        </div>
    );
};

export default Users;