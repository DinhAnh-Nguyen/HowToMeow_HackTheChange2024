import React, { useState } from 'react';

type PetProfile = {
  name: string;
  breed: string;
  age: number;
  weight: number;
  size: string;
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<PetProfile>({
    name: '',
    breed: '',
    age: 0,
    weight: 0,
    size: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: name === 'age' || name === 'weight' ? Number(value) : value,
    }));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Pet Profile</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
        <label>
          Breed:
          <input type="text" name="breed" value={profile.breed} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={profile.age} onChange={handleChange} />
        </label>
        <label>
          Weight (kg):
          <input type="number" name="weight" value={profile.weight} onChange={handleChange} />
        </label>
        <label>
          Size:
          <input type="text" name="size" value={profile.size} onChange={handleChange} />
        </label>
      </form>
      <h2>Profile Summary</h2>
      <p>Name: {profile.name}</p>
      <p>Breed: {profile.breed}</p>
      <p>Age: {profile.age}</p>
      <p>Weight: {profile.weight} kg</p>
      <p>Size: {profile.size}</p>
    </div>
  );
}
