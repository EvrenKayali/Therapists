import { Box } from "@mui/material";
import { TherapistListItem } from "./Components/TherapistListItem";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("api/profiles")
      .then((response) => {
        return response.json();
      })
      .then((actualData) => setData(actualData));
  }, []);

  return (
    <>
      {data?.map((p: any) => (
        <Box width="960px" margin="0 auto" key={p.id}>
          <Box mt="1rem">
            <TherapistListItem
              fullName={p.fullName}
              image={p.image}
              title={p.title}
              resume={p.resume}
              expertises={p.expertises}
            />
          </Box>
        </Box>
      ))}
    </>
  );
}

export default App;
