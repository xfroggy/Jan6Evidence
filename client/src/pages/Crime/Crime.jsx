import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import SimpleCard from '../../components/Card/Card';
import axios from 'axios';
import Header from '../../components/Header/Header';
import CrimeList from '../../components/CrimeList/CrimeList';



const Crime = () => {
    const [criminalList, setCriminalList] = useState();

    useEffect(() => {
        axios
            .get('/api/crimes')
            .then((response) => {
                // console.log(response);
                setCriminalList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //console.log(criminalList);
    return (
        <>
            {criminalList && (
                <>
                    <section>
                        <Header />
                        <h1>Crime Page</h1>
                        <Typography> Crime page</Typography>

                        <article className="cardContainer">
                            {criminalList.map((criminal) => {

                                return <SimpleCard name={criminal.name} count={criminal.count} />
                            })}
                        </article>
                    </section>
                </>
            )
            }
        </>

    );

};



export default Crime;
