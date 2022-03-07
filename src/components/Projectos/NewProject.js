
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const NewProject=()=> {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '17ch' },
      backgroundColor:'primary.dark',
      width:'20vw',
      ml:5,
    }}
    noValidate
    autoComplete="off"
  >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField error
          id="outlined-error" label="Outlined" variant="outlined" />
      </Box>
  );
}

