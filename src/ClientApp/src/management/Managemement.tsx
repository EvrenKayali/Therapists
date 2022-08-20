import { Box, Button, Typography } from "@mui/material";

export const Management = () => (
  <Box>
    <Box border={1} padding="1rem">
      <Typography variant="h5">Populate Database</Typography>
      <Box display="flex" justifyContent={"space-between"}>
        <Typography>
          This will populate the database by crawling the data from web site
        </Typography>
        <Box>
          <Button variant="contained">Run</Button>
        </Box>
      </Box>
    </Box>
  </Box>
);
