import React, { useState } from 'react';

const ColaboradorForm = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [empresa, setEmpresa] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const colaborador = { nombre, email, telefono, empresa };

        try {
            const response = await fetch('/api/colaboradores', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(colaborador),
            });
            if (response.ok) {
                console.log('Colaborador agregado');
            }
        } catch (error) {
            console.error('Error al agregar colaborador', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Teléfono"
            />
            <input
                type="text"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                placeholder="Empresa"
            />
            <button type="submit">Agregar Colaborador</button>
        </form>
    );
};

export default ColaboradorForm;
