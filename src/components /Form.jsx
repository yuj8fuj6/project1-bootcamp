import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [medicalConditions, setMedicalConditions] = useState("");
  const [allergies, setAllergies] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emer1Name, setEmer1Name] = useState("");
  const [emer1Phone, setEmer1Phone] = useState("");
  const [emer1Email, setEmer1Email] = useState("");
  const [emer2Name, setEmer2Name] = useState("");
  const [emer2Phone, setEmer2Phone] = useState("");
  const [emer2Email, setEmer2Email] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form className="grid grid-cols-1 gap-3 text-xl text-dark-pink text-left font-light p-3 m-1 w-80 bg-white drop-shadow-lg rounded-xl">
        <label>Name:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="name"
          required
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="number"
          min="0"
          max="120"
          id="age"
          required
          placeholder="60"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Weight:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="number"
          min="0"
          max="200"
          id="weight"
          required
          placeholder="60"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label>Blood Type:</label>
        <select
          className="border-solid border-2 border-dark-pink rounded focus:ring-blue-500 focus:border-blue-500 block w-full"
          id="bloodtype"
          required
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        >
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <label>Medical Conditions:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="medical"
          required
          placeholder="hypertension, etc."
          value={medicalConditions}
          onChange={(e) => setMedicalConditions(e.target.value)}
        />
        <label>Allergies:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="allergies"
          required
          placeholder="food, medication, etc."
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
        />
        <label for="phone">Phone Number:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="tel"
          id="phone"
          name="phone"
          pattern="+65[0-9]{8}"
          required
          placeholder="+659111111"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label for="email">Email Address:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="email"
          id="email"
          name="email"
          required
          placeholder="John_Doe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Emergency Contact 1:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="contact1"
          required
          placeholder="John Doe"
          value={emer1Name}
          onChange={(e) => setEmer1Name(e.target.value)}
        />
        <label for="contact1num">Contact 1 Phone Number:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="tel"
          id="contact1num"
          name="contact1num"
          pattern="+65[0-9]{8}"
          required
          placeholder="+659111111"
          value={emer1Phone}
          onChange={(e) => setEmer1Phone(e.target.value)}
        />
        <label for="contact1email">Contact 1 Email Address:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="email"
          id="contact1email"
          name="contact1email"
          required
          placeholder="John_Doe@gmail.com"
          value={emer1Email}
          onChange={(e) => setEmer1Email(e.target.value)}
        />
        <label>Emergency Contact 2:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="contact2"
          required
          placeholder="John Doe"
          value={emer2Name}
          onChange={(e) => setEmer2Name(e.target.value)}
        />
        <label for="contact2num">Contact 2 Phone Number:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="tel"
          id="contact2num"
          name="contact2num"
          pattern="+65[0-9]{8}"
          required
          placeholder="+659111111"
          value={emer2Phone}
          onChange={(e) => setEmer2Phone(e.target.value)}
        />
        <label for="email">Contact 2 Email Address:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="email"
          id="contact2email"
          name="contact2email"
          required
          placeholder="John_Doe@gmail.com"
          value={emer2Email}
          onChange={(e) => setEmer2Email(e.target.value)}
        />
        <label>Username:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="username"
          required
          placeholder="abcde"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Password:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="password"
          required
          placeholder="abcde"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <p>{name}</p>
      <p>{age}</p>
      <p>{weight}</p>
      <p>{bloodType}</p>
      <p>{medicalConditions}</p>
      <p>{allergies}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{emer1Name}</p>
      <p>{emer1Phone}</p>
      <p>{emer1Email}</p>
      <p>{emer2Name}</p>
      <p>{emer2Phone}</p>
      <p>{emer2Email}</p>
      <p>{userName}</p>
      <p>{password}</p>
    </div>
  );
};

export default Form;
