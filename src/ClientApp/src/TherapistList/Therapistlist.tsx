import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetApiProfilesQuery } from "../generated/api";
import { TherapistListItem } from "./TherapistListItem";

export const Therapistlist: React.FC = () => {
  const { data, isLoading } = useGetApiProfilesQuery(undefined, {
    refetchOnFocus: true,
  });

  return (
    <>
      {isLoading && (
        <Box display="flex" justifyContent="center" mt="25%">
          <CircularProgress size="5rem" />
        </Box>
      )}

      {Boolean(data?.length) ? (
        <>
          {data?.map((p: any) => (
            <Box key={p.id}>
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
      ) : (
        <Typography>Database not populated yet.</Typography>
      )}
    </>
  );
};
