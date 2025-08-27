import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface StepProps {
  stepNum: number;
  title: string;
  description: string;
}

export default function Step({ stepNum, title, description }: StepProps) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="step number">{stepNum}</Avatar>}
        title={title}
      />
      <CardMedia
        component="img"
        image="https://placehold.co/900x600"
        alt="Paella dish"
        width="100%"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
