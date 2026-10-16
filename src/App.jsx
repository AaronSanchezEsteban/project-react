import { useState } from "react";
import { Box, Button, TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import { AccountCircle, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import "./App.css"; // <-- Importamos tu archivo CSS aquí

function Micomponent() {
  const [nombre, setNombre] = useState("");
  const [ApellidoP, setApellidoP] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert('Datos Guardados e Inicio de Sesión Exitoso');
  };

  return (
    <Box className="page-wrapper">
      <Box component="form" onSubmit={manejarEnvio} className="glass-card">
        
        <Box>
          <Typography variant="h4" className="title">
            Welcome
          </Typography>
          <Typography variant="body2" className="subtitle">
            Sign in to access your dashboard
          </Typography>
        </Box>

        <TextField label="Correo Electrónico o Username" variant="outlined" fullWidth required value={nombre} onChange={(e) => setNombre(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <TextField label="Password" type={showPassword ? "text" : "password"}
        variant="outlined" fullWidth required value={ApellidoP}onChange={(e) => setApellidoP(e.target.value)} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  onClick={() => setShowPassword(!showPassword)} edge="end" style={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Button type="submit" variant="contained" fullWidth className="submit-button">
          Iniciar Sesión
        </Button>

      </Box>
    </Box>
  );
}

export default Micomponent;
