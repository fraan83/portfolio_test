import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Portfolio.module.css';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const Portfolio = () => {




    const [utente, setUtente] = useState({
        gender: '', // 
        name: {
            title: '',
            first: '',
            last: ''
        },
        location: {
            street: {
                number: 0,
                name: ''
            },
            city: '',
            state: '',
            country: '',
            postcode: 66666,
            coordinates: {
                langitude: '',
                longitude: ''
            },
            timezone: {
                offset: '',
                description: ''
            }
        },
        email: '', //
        login: {
            uuid: '',
            username: '',
            password: '',
            salt: '',
            md5: '',
            sha1: '',
            sha512: ''
        },
        dob: {
            date: '',
            age: 0
        }, //
        registered: {
            date: '',
            age: 0

        }, //
        phone: '',
        cell: '',
        id: {
            name: '',
            value: null
        },
        picture: {
            large: '',
            medium: '',
            thumbnail: ''
        },
        nat: ''
    })

    useEffect(() => {
        axios.get('https://randomuser.me/api')
            .then(res => {
                console.log(res.data.results[0]);
                let user = res.data.results[0]
                setUtente(user);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const [isShown, setIsShown] = useState(false);
    const [info, setInfo] = useState('');
    const [titolo, setTitolo] = useState('');
    const mostraDettagli = (e) => {
        console.log('event', e.target.name)
        setIsShown(true);
        if (e.target.name === 'name') {
            setTitolo('Nome e Cognome')
            setInfo(`${utente.name.title + ' ' + utente.name.first + ' ' + utente.name.last}`)
        } else if (e.target.name === 'email') {
            setTitolo('Email')
            setInfo(`${utente.email}`)
        } else if (e.target.name === 'phone') {
            setTitolo('Telefono')
            setInfo(`${utente.cell}`)
        } else if (e.target.name === 'location') {
            setTitolo('Indirizzo')
            setInfo(`${utente.location.street.name + '\n' + utente.location.street.number + '\n' + utente.location.city + ' ' + utente.location.state}`)
        } else if (e.target.name === 'password') {
            setTitolo('Password')
            setInfo(`${utente.login.password}`)
        }
    }
    const mostraDettagliClick = (e) => {
        console.log('event', e.target.name)
        setIsShown(true);
        if (e.target.name === 'name') {
            setTitolo('Nome e Cognome')
            setInfo(`${utente.name.title + ' ' + utente.name.first + ' ' + utente.name.last}`)
        } else if (e.target.name === 'email') {
            setTitolo('Email')
            setInfo(`${utente.email}`)
        } else if (e.target.name === 'phone') {
            setTitolo('Telefono')
            setInfo(`${utente.cell}`)
        } else if (e.target.name === 'location') {
            setTitolo('Indirizzo')
            setInfo(`${utente.location.street.name + '\n' + utente.location.street.number + '\n' + utente.location.city + ' ' + utente.location.state}`)
        } else if (e.target.name === 'password') {
            setTitolo('Password')
            setInfo(`${utente.login.password}`)
        }
    }


    return (
        <div className="container d-flex centrato" style={{ border: '1px solid lightgrey', borderRadius: '6px' }}>
            <div className={styles.content}>
                <picture className={styles.containerImg}>
                    <img className={styles.roundedImg} src={utente.picture.medium} alt={utente.name.first + ' ' + utente.name.last} title={utente.name.first + ' ' + utente.name.last} />
                    <div className={styles.overlayImg}>
                        <img src={utente.picture.large} ></img>
                    </div>
                </picture>
            </div>


            <div className={styles.flexContainer}>

                <div className={styles.flexItem}>
                    {isShown && (

                        <div className={styles.textToshow}>

                            <h4>{titolo}</h4>
                            <br />
                            {info}
                        </div>
                    )}
                </div>

                <div className={styles.flexItem}>
                    <ul className={styles.listaIcone}>
                        <li>
                            <button
                                name="name"
                                onMouseOver={(e) => mostraDettagliClick(e)}
                                                           
                            >
                                <PersonIcon  />
                            </button>

                        </li>
                        <li>
                            <button
                                name="email"
                                onMouseOver={(e) => mostraDettagliClick(e)}
                            >
                                <MailOutlineIcon  />
                            </button>

                        </li>
                        <li>
                            <button
                                name="phone"
                        
                                onMouseOver={(e) => mostraDettagliClick(e)}
                            >
                                <PhoneIcon  />
                            </button>


                        </li>
                        <li>
                            <button
                                name="location"
                              
                                onMouseOver={(e) => mostraDettagliClick(e)}
                            >
                                <PinDropIcon />
                            </button>
                        </li>
                        <li>
                            <button
                                name="password"
                            
                                onMouseOver={(e) => mostraDettagliClick(e)}
                            >
                                <LockOpenIcon />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Portfolio
