import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { useTheme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  {
    name: "Jan",
    pv: 2,
  },
  {
    name: "Feb",
    pv: 10,
  },
  {
    name: "Mar",
    pv: 30,
  },
  {
    name: "Apr",
    pv: 0,
  },
  {
    name: "May",
    pv: 0,
  },
  {
    name: "Jun",
    pv: 0,
  },
  {
    name: "Jul",
    pv: 0,
  },
  {
    name: "Aug",
    pv: 0,
  },
  {
    name: "Sep",
    pv: 0,
  },
  {
    name: "Oct",
    pv: 0,
  },
  {
    name: "Nov",
    pv: 0,
  },
  {
    name: "Dec",
    pv: 0,
  },
];

const ActivityWidget = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title={t("dashboard.activity.title") + ` [${new Date().getFullYear()}]`}
      />
      <CardContent>
        <ResponsiveContainer width="99%" height={244}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 16,
              left: 16,
              bottom: 5,
            }}
          >
            <XAxis
              axisLine={false}
              tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
              tickLine={false}
              dataKey="name"
            />
            <Tooltip
              contentStyle={{
                borderRadius: 16,
                boxShadow: theme.shadows[3],
                backgroundColor: theme.palette.background.paper,
                borderColor: theme.palette.background.paper,
              }}
            />
            <Line
              name="Value"
              type="monotone"
              dataKey="pv"
              stroke={theme.palette.primary.main}
              strokeWidth={6}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityWidget;