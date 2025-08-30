import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "@tanstack/react-router";

interface ArticleProps {
  title: string;
  thumbnail: string;
  description: string;
  href: string;
}

export default function Article({
  title,
  thumbnail,
  description,
  href,
}: ArticleProps) {
  const navigate = useNavigate();

  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Card>
        <CardActionArea onClick={() => navigate({ to: href })}>
          <CardMedia image={thumbnail} title={title} sx={{ height: 200 }} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="caption">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
