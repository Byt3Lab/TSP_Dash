import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const meetings = [
  {
    id: "1",
    person: "Whatever Whatever",
    date: "17/03/2023",
    image: "",
  },
  {
    id: "2",
    person: "Noumecha",
    date: "10/03/2023",
    image: "",
  },
  {
    id: "3",
    person: "Milo",
    date: "08/03/2023",
    image: "",
  },
  {
    id: "4",
    person: "Tester Testing",
    date: "08/03/2023",
    image: "",
  },
];

const MeetingWidgets = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Typography component="h2" marginBottom={3} variant="h4">
        {t("admin.home.registration.title")}
      </Typography>
      {meetings.map((meeting) => (
        <Card key={meeting.id} sx={{ mb: 2 }}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt={`${meeting.person} avatar`}
              src={meeting.image}
              sx={{ mr: 2 }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography component="div" variant="h6">
                {meeting.person}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                {meeting.date}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default MeetingWidgets;
