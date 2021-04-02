import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import SimpleCard from '../../components/Card/Card';
import axios from 'axios';

const Crime = () => {
  //const [criminal, setCriminal] = useState();

  useEffect(() => {
    axios
      .get('/api/crimes')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <h1>Crime Page</h1>
      <Typography> Crime page</Typography>
      <SimpleCard />
      <div className="crime__list"></div>
    </section>
  );
};

export default Crime;
