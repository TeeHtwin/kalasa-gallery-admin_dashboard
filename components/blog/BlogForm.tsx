import React, { useState } from 'react';

function UploadImageForm() {
  // State variables to hold form data
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(0);

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const apiUrl = 'https://staging.kalasa.gallery/api/admin/artist'; // Replace this with your API endpoint

    // Create FormData object to send form data
    const formData = new FormData();
    formData.append('profile_image', profileImage);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('status', status);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error while sending data to the server.');
      }

      const responseData = await response.json();
      console.log('Response from server:', responseData);
      // Handle response data as needed
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="imageInput">Image:</label>
          <input
            type="file"
            id="profile_image"
            name="profile_image"
            accept="image/*"
            required
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="nameInput">Name:</label>
          <input
            type="text"
            id="nameInput"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descriptionInput">Description:</label><br />
          <textarea
            id="descriptionInput"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="flagInput">Flag (0 or 1):</label>
          <input
            type="number"
            id="status"
            name="status"
            min="0"
            max="1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadImageForm;
