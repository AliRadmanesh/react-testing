import React from 'react';

export default function Author({
  instructors: {
    id: instructorId,
    first_name,
    last_name,
    position,
    description: instructorDescription,
    image: instructorImage,
  },
}) {
  return (
    <div>
      <h1 className="">Author</h1>
    </div>
  );
}
