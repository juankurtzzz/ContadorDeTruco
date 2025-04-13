import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

function BotaoTruco({ onSelecionar }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (valor) => {
    setAnchorEl(null);
    if (valor) onSelecionar(valor);
  };

  return (
    <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
      <Button
        variant="contained"
        onClick={handleClick}
        style={{
          backgroundImage: 'linear-gradient(to right, rgb(255, 0, 0), rgb(0, 225, 255))',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '12px',
          padding: '12px 24px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          textTransform: 'uppercase',
          fontSize: '16px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.filter = 'brightness(1.1)';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.filter = 'none';
          e.target.style.transform = 'scale(1)';
        }}
      >
        Selecionar Valor de Truco
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            backgroundImage: 'linear-gradient(to right, rgb(255, 0, 0), rgb(0, 225, 255))',
            textAlign: 'center',
            marginTop: '0.5rem',
            color: 'white',
          },
        }}
      >
        {[3, 6, 9, 12].map((valor) => (
          <MenuItem
            key={valor}
            onClick={() => handleClose(valor)}
            style={{ fontWeight: 'bold' }}
          >
            {valor}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default BotaoTruco;
