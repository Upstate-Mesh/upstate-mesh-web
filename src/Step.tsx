import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface StepProps {
  stepNum: number;
  title: string;
  imgSrc?: string;
  vidSrc?: string;
  description: string;
}

export default function Step({
  stepNum,
  title,
  imgSrc,
  vidSrc,
  description,
}: StepProps) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={<Avatar aria-label="step number">{stepNum}</Avatar>}
        title={title}
        titleTypographyProps={{ variant: "h6" }}
      />
      {vidSrc && (
        <CardMedia
          component="iframe"
          src={vidSrc}
          sx={{
            width: "100%",
            aspectRatio: "16/9",
            border: 0,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
      {imgSrc && (
        <CardMedia component="img" image={imgSrc} alt={title} width="100%" />
      )}
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
