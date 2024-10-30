import React, { useState } from 'react';
import axios from 'axios';
import './Registracija.css';

const Registracija = () => {
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [email, setEmail] = useState('');
    const [datumrodjenja, setDatumrodjenja] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/registracija', {
                ime,
                prezime,
                email,
                datumrodjenja,
            });
            alert('Registracija uspešna: ' + response.data.ime);
            setIme('');
            setPrezime('');
            setEmail('');
            setDatumrodjenja('');
        } catch (error) {
            console.error('Greška prilikom registracije:', error);
            alert('Greška prilikom registracije.');
        }
    };

    return (
        <div className="registracija">
            <h1>Registracija</h1>
            <form onSubmit={handleSubmit}>
                <label>Ime:</label>
                <input type="text" value={ime} onChange={(e) => setIme(e.target.value)} required />
                <br />
                <label>Prezime:</label>
                <input type="text" value={prezime} onChange={(e) => setPrezime(e.target.value)} required />
                <br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label>Datum rođenja:</label>
                <input type="text" value={datumrodjenja} onChange={(e) => setDatumrodjenja(e.target.value)}  />
                <br />
                <button type="submit">Registruj se</button>
            </form>
        </div>
    );
};

export default Registracija;
