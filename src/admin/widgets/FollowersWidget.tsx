import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import React from "react";
import { useTranslation } from "react-i18next";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonIcon from "@material-ui/icons/Person";

const socials = [
  {
    bgcolor: "primary.main",
    icon: <PersonIcon sx={{ color: "#fff" }} />,
    name: "Users",
    trend: <ArrowDropUpIcon sx={{ color: "success.main" }} />,
    unitKey: "admin.home.summary.units.users",
    value: "3",
  },
  {
    bgcolor: "error.main",
    icon: <MonetizationOnIcon style={{ color: "#fff" }} />,
    name: "Commands",
    trend: <ArrowRightIcon sx={{ color: "action.disabled" }} />,
    unitKey: "admin.home.summary.units.commands",
    value: "42",
  },
  {
    bgcolor: "warning.main",
    icon: <LocalTaxiIcon style={{ color: "#fff" }} />,
    name: "Cars",
    trend: <ArrowDropDownIcon sx={{ color: "error.main" }} />,
    unitKey: "admin.home.summary.units.cars",
    value: "5",
  },
];

const FollowersWidget = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {socials.map((social) => (
        <Card key={social.name} sx={{ mb: 2 }}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              aria-label={`${social.name} avatar`}
              sx={{ bgcolor: social.bgcolor, mr: 2 }}
            >
              {social.icon}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography component="div" variant="h6">
                {social.value}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                {t(social.unitKey)}
              </Typography>
            </Box>
            {social.trend}
          </CardContent>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default FollowersWidget;
