import { useState } from "react";
import { Box, Button, TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import { AccountCircle, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import "./App.css";

function Header({ titulo, children }) {
  return (
    <div className="contend-header">
      <h3>{titulo}</h3>
      <div>{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <Header titulo="Sección de Inicio">
      <p>Este es el contenido que va dentro del children del header.</p>
    </Header>
  );
}