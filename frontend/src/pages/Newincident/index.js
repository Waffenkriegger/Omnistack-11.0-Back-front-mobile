import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('Incidents', data,{
                headers: {
                    Authorization: ongId,
                }
            })
            
            history.push('/profile');
        }catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.');
        }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontar um heroi para fazer isso.</p>
                
                <Link className='back-link' to="/Profile">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar para a pagina de casos
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder="Titulo do caso" 
                    value ={title}
                    onChange={e =>setTitle(e.target.value)}
                />

                <textarea 
                    placeholder= "Descrição" 
                    value ={description}
                    onChange={e =>setDescription(e.target.value)}
                />

                <input 
                    placeholder="Valor em Reais" 
                    value ={value}
                    onChange={e =>setValue(e.target.value)}
                />


                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}