import React from 'react';
import client1 from '../assets/clients1.png';
import client2 from '../assets/clients2.png';
import client3 from '../assets/clients3.png';
import client4 from '../assets/clients4.png';
import client5 from '../assets/clients5.png';

function Clients() {
    const data = [client1, client2, client3, client4, client5];

    return (
        <div className = "clients">
            <div className = "container">
                <div className = "clients-container">
                    {data.map((client, index) => (
                        <div className = "client" key = {index}>
                            <img src={client} alt = "client" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients;