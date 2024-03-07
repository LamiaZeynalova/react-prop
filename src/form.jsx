import React from 'react';

function Form({ setName, setSurname, setInfo, setAge, setGender }) {
  return (
    <form>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Surname" onChange={(e) => setSurname(e.target.value)} />
      <input type="text" placeholder="Info" onChange={(e) => setInfo(e.target.value)} />
      <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Gender" onChange={(e) => setGender(e.target.value)} />
    </form>
  );
}

export default Form;
