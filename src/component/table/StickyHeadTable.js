import React, { useState } from 'react';

//Material UI
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function StickyHeadTable({ data, flag, pageCount }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(data.per_page);
  const jsonObj = [{
        prefix : data.results[0].name.title,
        firstName : data.results[0].name.first,
        lastName : data.results[0].name.last,
        email : data.results[0].email
  }]

  const headers = Object.keys(jsonObj[0]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    pageCount(newPage)
  };

 
  return (

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <StyledTableCell align="center">{(header.toUpperCase()).split('_').join(' ')}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
            <TableBody>
              {jsonObj
                .map((emp, index) => (
                  <TableRow key={index}>
                    {headers.map(header => (
                      <TableCell align="center">{emp[header]}</TableCell>
                    ))}
                  </TableRow>
                ))}

            </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[1]}
        component="div"
        count={12}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
      />
    </Paper>
  );
}
