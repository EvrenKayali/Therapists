import { Therapistlist } from "./TherapistList/Therapistlist";
import { Routes, Route, Link } from "react-router-dom";
import { Management } from "./management/Managemement";
import { Box } from "@mui/material";

function App() {
  return (
    <Box width="960px" margin="0 auto">
      <Box
        mb="2rem"
        sx={{
          "& > *": {
            marginRight: "1rem",
          },
        }}
      >
        <Link to="/management">Management</Link>
        <Link to="/">Search</Link>
      </Box>

      <Routes>
        <Route path="/" element={<Therapistlist />} />
        <Route path="management" element={<Management />} />
      </Routes>
    </Box>
  );
}

export default App;
