import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type RecipeCardProps = {
  title: string;
  copy: string;
  source: string;
  // href: string;
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  copy,
  source,
  // href,
}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea component="a" target="_blank">
        <CardMedia component="img" height="250" image={source} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {copy}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeCard;
