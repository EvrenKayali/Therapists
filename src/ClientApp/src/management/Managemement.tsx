import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { usePostApiPopulateMutation } from "../generated/api";

export const Management = () => {
  const [populate, { isLoading }] = usePostApiPopulateMutation();

  return (
    <Box>
      <Box border={1} padding="1rem" mt="1rem">
        <Typography variant="h5">Populate Database</Typography>
        <Box display="flex" justifyContent={"space-between"}>
          <Typography>
            This will populate the database by crawling the data from web site
          </Typography>
          <Box>
            <Button variant="contained" onClick={() => populate()}>
              Run
            </Button>
          </Box>
        </Box>
        {isLoading && (
          <Box mt="0.5rem">
            <LinearProgress />
          </Box>
        )}
      </Box>
      <Box border={1} padding="1rem" mt="1rem">
        <Typography variant="h5">Kibana</Typography>
        <Box display="flex" justifyContent={"space-between"}>
          <Typography>
            goto{" "}
            <a href="http://localhost:5601/" target="_blank" rel="noreferrer">
              Kibana
            </a>
          </Typography>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};
