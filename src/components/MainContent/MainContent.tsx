import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UserList from "../UserList/UserList";
import { Search } from "../Search/Search"; // Asegúrate de la ruta correcta

const MainContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Usuarios
        </Typography>
        <Typography>Empleados de Double V Partners</Typography>
      </div>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Search onChange={handleSearchChange} />
      </Box>
      <UserList searchTerm={searchTerm} />
    </Box>
  );
};

export default MainContent;
