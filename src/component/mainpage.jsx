import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
  // State for text data
  const [textData, setTextData] = useState([
    { text: 'Text 1' },
    { text: 'Text 2' },
    // Add more text data if needed
  ]);

  // State for text form
  const [textFormData, setTextFormData] = useState({
    text: ''
  });

  // Function to add new text item
  const addTextItem = () => {
    const newItem = { ...textFormData };
    setTextData([...textData, newItem]);
    setTextFormData({ text: '' });
  };

  // Function to delete text item
  const deleteTextItem = (index) => {
    setTextData(textData.filter((_, i) => i !== index));
  };

  // State for data
  const [data, setData] = useState([
    { name: 'Item 1', image: 'https://via.placeholder.com/150', description: 'Description 1' },
    { name: 'Item 2', image: 'https://via.placeholder.com/150', description: 'Description 2' },
    // Add more data if needed
  ]);

  // State for form
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: ''
  });

  // Function to add new item
  const addItem = () => {
    const newItem = { ...formData };
    setData([...data, newItem]);
    setFormData({ name: '', image: '', description: '' });
  };

  // Function to delete item
  const deleteItem = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Main Page - Text and Data</h1>

      {/* Form to add new text item */}
      <form onSubmit={(e) => { e.preventDefault(); addTextItem(); }} >
        <input 
          type="text" 
          placeholder="Text" 
          value={textFormData.text} 
          onChange={(e) => setTextFormData({ text: e.target.value })} 
        />
        <button type="submit">Add Text</button>
      </form>

      {/* Table to display text data */}
      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {textData.map((item, index) => (
            <tr key={index}>
              <td>{item.text}</td>
              <td>
                <button onClick={() => deleteTextItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to add new data item */}
      <form onSubmit={(e) => { e.preventDefault(); addItem(); }}>
        <input 
          type="text" 
          placeholder="Name" 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
        />
        <input 
          type="url" 
          placeholder="Image URL" 
          value={formData.image} 
          onChange={(e) => setFormData({ ...formData, image: e.target.value })} 
        />
        <textarea 
          placeholder="Description" 
          value={formData.description} 
          onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
        />
        <button type="submit">Add Data</button>
      </form>

      {/* Table to display data */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td><img src={item.image} alt={item.name} style={{ width: '180px' }} /></td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Main;


