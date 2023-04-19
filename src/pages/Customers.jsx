import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import StickyHeadTable from '../component/table/StickyHeadTable';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from "react-redux"
import { readData } from "../actions/index"
import { Helmet } from "react-helmet";
const Customers = () => {
  let customerData = useSelector(state => state.createData); //to map state values
  const dispatch = useDispatch() //to call the action function in actions(triggers action)
  const [pageApi, setPageApi] = useState();

  useEffect(() => {
    dispatch(readData(pageApi))
  }, [pageApi])


  const pageCount = (val) => {
    setPageApi(val + 1)
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Customer Details</title>
      </Helmet>
      <Grid item xs={12} md={12} lg={12}>
        <h2>Customer Details</h2>

        {(customerData.length !== 0) ?
          <StickyHeadTable
            data={customerData}
            pageCount={pageCount}
          /> :
          <>
            <h2>Data Not Found </h2>
          </>

        }
      </Grid>
    </>
  );
}

export default Customers;
