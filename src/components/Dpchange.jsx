import React, { useState } from 'react';

const Dpchange = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

 

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="uploadInput"
      />
     
      
      <label
      
        htmlFor="uploadInput"
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Choose Image
      </label>

      {selectedImage && (
        <div className="mt-4">
          <img
            src={selectedImage}
            alt="Selected"
            className="rounded-full h-24 w-24 object-cover"
          />
        </div>
      )}

    
    </div>
  );
};

export default Dpchange;
