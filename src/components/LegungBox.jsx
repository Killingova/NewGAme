import React from 'react';

function LegungBox({ title, image, info, onClick }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg cursor-pointer" onClick={onClick}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="mt-2">{info}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Start
      </button>
    </div>
  );
}

export default LegungBox;
