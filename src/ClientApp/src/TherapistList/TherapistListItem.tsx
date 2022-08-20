import { Avatar, Box, Chip, Typography } from "@mui/material";

interface props {
  fullName: string;
  title: string;
  image: string;
  resume: string;
  expertises: string[];
}

export const TherapistListItem: React.FC<props> = ({
  fullName,
  title,
  image,
  resume,
  expertises,
}) => {
  return (
    <Box border={1} display="flex">
      <Box>
        <Avatar
          variant="rounded"
          src={image}
          alt=""
          sx={{
            width: 128,
            height: 128,
            border: "3px solid #5abb4a;",
            borderRadius: "50%",
            margin: "1rem 1rem 0 1rem",
          }}
        />
      </Box>
      <Box m="1rem">
        <Typography variant="h5">{fullName}</Typography>
        <Typography variant="body1" color="#6c757d">
          {title}
        </Typography>
        <Box
          sx={{
            "& > *": {
              marginRight: "0.5rem",
              marginTop: "1rem",
            },
          }}
        >
          {expertises.map((e) => (
            <Chip label={e} key={e} sx={{ textTransform: "lowercase" }} />
          ))}
        </Box>
        <Typography
          height={"6rem"}
          textOverflow="ellipsis"
          variant="body2"
          overflow="hidden"
          color="#6c757d"
          mt="1rem"
        >
          {resume}
        </Typography>
      </Box>
    </Box>
  );
};
