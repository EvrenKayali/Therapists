import { Box } from "@mui/material";
import { useGetApiProfilesQuery } from "../generated/api";
import { TherapistListItem } from "./TherapistListItem";

export const Therapistlist: React.FC = () => {
  const { data } = useGetApiProfilesQuery();

  return (
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
  );
};
