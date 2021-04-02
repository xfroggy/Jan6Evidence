import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Crime = () => {

  //const [criminal, setCriminal] = useState();

  useEffect(() => {
    axios
      .get("/api/crimes")
      .then((response) => {

        console.log(response);
      }).catch((error => {
        console.log(error);
      }))
  }, [])

  return (
    <section>
      <h1>Crime Page</h1>
      <div className="crime__list">

      </div>
    </section>
  );
}

export default Crime;
