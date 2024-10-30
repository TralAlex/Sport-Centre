import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Dodaj useNavigate import
import './ProgramDetails.css'; // Uvozimo stilove

const programData = {
    'combat-sport-group-training': {
        name: 'Combat Sport grupni trening',
        description: 'Intenzivni treninzi fokusirani na tehnike borbenih sportova i fitnes.',
        imageUrl: 'https://mensfitnesstoday.com/wp-content/uploads/sites/2/2022/07/WildBM-10-of-159-2.jpg?w=731',
        details: 'Ovaj program uključuje niz tehnika borbenih sportova, vežbi i kondicionih vežbi dizajniranih da poboljšaju ukupnu kondiciju i veštinu.'
    },
    'yoga-and-flexibility-training': {
        name: 'Yoga i trening fleksibilnosti',
        description: 'Poboljšajte svoju fleksibilnost i bezbrižnost uz naše sveobuhvatne sesije joge.',
        imageUrl: 'https://www.arhantayoga.org/wp-content/uploads/2022/02/yin-yoga-training-course.jpg',
        details: 'Naš program treninga joge i fleksibilnosti fokusira se na poboljšanje fleksibilnosti, smanjenje stresa i promicanje cjelokupnog blagostanja kroz vođene sesije joge.'
    },
    'strength-and-conditioning': {
        name: 'Snaga i kondicija',
        description: 'Poboljšajte svoju snagu i kondiciju uz naše specijalizovane programe treninga.',
        imageUrl: 'https://cdn.evolve-mma.com/wp-content/uploads/2021/11/15-Strength-And-Conditioning-Training-Exercises-You-Can-Add-To-Your-Workout.jpg',
        details: 'Naš program snage i kondicije osmišljen je da poboljša ukupnu snagu, izdržljivost i kondiciju kroz razne vežbe i rutine.'
    }
};

const ProgramDetails = () => {
    const { programId } = useParams();
    const program = programData[programId];
    const navigate = useNavigate(); // Inicijalizuj useNavigate

    const handleBuyClick = () => {
        navigate('/korpa', { state: { package: program.name } }); // Proslijedi naziv paketa
    };

    if (!program) {
        return <p>Program not found</p>;
    }

    return (
        <div className="program-details">
            <h1>{program.name}</h1>
            <img src={program.imageUrl} alt={program.name} />
            <p>{program.description}</p>
            <p>{program.details}</p>
            <button className="button" onClick={handleBuyClick}>Kupi paket</button>
        </div>
    );
};

export default ProgramDetails;
