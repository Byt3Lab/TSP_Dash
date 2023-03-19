import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Stack from "@material-ui/core/Stack";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../auth/contexts/AuthProvider";
import LandingLayout from "../components/LandingLayout";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Landing = () => {
  const { userInfo } = useAuth();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <LandingLayout>
      <main>
        <Box
          height="80vh"
          sx={{
            py: 30,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h1"
              align="center"
              color="text.primary"
              marginBottom={2}
            >
              {t("landing.title")}
            </Typography>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {userInfo ? (
                <Button
                  component={RouterLink}
                  to={`/${process.env.PUBLIC_URL}/admin`}
                  variant="contained"
                >
                  <AccountCircleIcon
                    sx={{
                      mr: 2,
                    }}
                  />{" "}
                  {t("landing.cta.mainAuth", { name: userInfo.firstName })}
                </Button>
              ) : (
                <Button
                  component={RouterLink}
                  to={`/${process.env.PUBLIC_URL}/login`}
                  variant="contained"
                >
                  {t("landing.cta.main")}
                </Button>
              )}
            </Stack>
          </Container>
        </Box>
      </main>
    </LandingLayout>
  );
};

export default Landing;
