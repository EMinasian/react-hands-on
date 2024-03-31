// first install MUI
import Box from "@mui/material/Box";

export default function MaterialUIStyling() {
  return (
    <Box //imported Box from "@mui/material/Box";
      width={100}
      m={2}
      display="flex"
      alignItems="center"
      p={4}
      sx={{ border: "4px solid blue" }}
      borderRadius={2}
      bgcolor={'red'}
      color={'white'}
    >
      A MUI styled box.
    </Box>
  );
}
