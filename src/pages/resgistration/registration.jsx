import './registration.css';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import axios from 'axios';

const Registration = () => {

    let { school } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:3002/schools/info/${school}`).then(res => {
            console.log(res);
        });
        console.log(school);
    }, [])

    return (
        <div className="root">
            <div className="form-wrapper">
                <h4 className="form-title">Fill out this form to be directed to PA's registation page and better inform New Voters' youth civic engagement efforts!</h4>

            </div>
        </div>
    )
}

export default Registration;