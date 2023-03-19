import { Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Logo from "./Logo";

const Loader = () => {
  const theme = useTheme();
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
    >
      <Logo
        size={250}
        sx={{
          "@keyframes pulse": {
            "0%": {
              opacity: 1,
            },
            "50%": {
              opacity: 0.4,
            },
            "100%": {
              opacity: 1,
            },
          },
          animation: "pulse 1.5s ease-in-out 0.5s infinite",
          color: theme.palette.mode === "light" ? "grey.300" : "grey.600",
          textAlign: "center",
          px: 3,
          py: 8,
        }}
      />
    </Box>
  );
};

export default Loader;
