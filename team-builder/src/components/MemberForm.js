import React, { useState } from 'react';

const MemberForm = props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
        console.log(newMember);
        setMember({ name: '', email: '', role: '' });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>{member.name}</h1>
                <label htmlFor='name'>Member Name</label>
                <input
                    onChange={handleChanges}
                    id='name'
                    type='text'
                    name='name'
                    placeholder='John Doe'
                    value={member.name}
                />

                <label htmlFor='email'>Member Email</label>
                <input
                    onChange={handleChanges}
                    id='email'
                    type='text'
                    name='email'
                    placeholder='testes@gmail.com'
                    value={member.email}
                />

                <label htmlFor='role'>Member Role</label>
                <input 
                    onChange={handleChanges}
                    id='role'
                    type='text'
                    name='role'
                    placeholder='what is your role?'
                    value={member.role}
                />

                <button name='submitButton' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MemberForm;