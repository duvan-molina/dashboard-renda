import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  description: string;
};

const CardComponent: React.FC<Props> = ({ title, description }) => {
  return (
    <Card sx={{ maxWidth: 380, margin: "auto" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="190"
        image="data:image/jpeg;base64,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"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Ver publicación</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
