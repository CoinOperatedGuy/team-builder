import React, { useState } from 'react';
import Members from './components/Members';
import MemberForm from './components/MemberForm';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);

  const addNewMember = member => {
    const newMember = setMembers([...members, member]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm addNewMember={addNewMember}/>
      <Members members={members} />
    </div>
  );
}

export default App;
