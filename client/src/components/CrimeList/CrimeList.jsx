import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import SimpleCard from '../../components/Card/Card';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

const CrimeList = () => {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 1000,
        maxColumns: 6,
    });

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid pagination {...data} />
        </div>
    );


}

export default CrimeList;

