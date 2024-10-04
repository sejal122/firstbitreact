import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Egcomponent() {
    const [data, setData] = useState([]);
  const [newData, setNewData] = useState({ name: '' });
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  function addData(e) {
e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', newData)
      .then(response => {
        setData([...data, response.data]);
        setNewData({ name: '' });
      })
      .catch(error => {
        console.log(error);
      })
  }

  function updateData() {

    axios.put(`https://jsonplaceholder.typicode.com/users${selectedData.id}`,selectedData)
      .then(response => {
        const newData = data.map(item => {
          if (item.id === selectedData.id) {
            return response.data;
          }
          return item;
        });
        setData(newData);
        setSelectedData(null);
      })
      .catch(error => {
        console.log(error);
      })
  }

  function deleteData(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
      })
      .catch(error => {
        console.log(error);
      })
  }

  function handleInputChange(event) {
    setNewData({ ...newData, [event.target.name]: event.target.value });
  }

  function handleEdit(item) {
    setSelectedData(item);
  }

  function handleCancel() {
    setSelectedData(null);
  }

    return (
        <div>
      <h1>Data List</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => deleteData(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedData && (
        <div>
          <h2>Edit Data</h2>
          <form onSubmit={updateData}>
            <label>
              Name:
              <input type="text" name="name" value={selectedData.name} onChange={(event) => setSelectedData({ ...selectedData, name: event.target.value })} />
            </label>
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      )}
      <div>
        <h2>Add Data</h2>
        <form onSubmit={(e)=>addData(e)}>
          <label>
            Name:
            <input type="text" name="name" value={newData.name} onChange={handleInputChange} />
          </label>
          <button type="submit">Add Data</button>
        </form>
      </div>
    </div>
    )
}

export default Egcomponent
