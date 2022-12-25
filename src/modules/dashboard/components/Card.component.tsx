import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ApartamentType } from "../../../store/modules/dashboard/reducers/dashboard.reducer";
import { useNavigate } from "react-router-dom";

type Props = {} & ApartamentType;

const CardComponent: React.FC<Props> = ({
  title,
  description,
  apartamentGallery,
  id,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/create-entry/${id}`);
  return (
    <Card sx={{ margin: "auto" }}>
      <CardMedia
        component="img"
        alt={title}
        height="190"
        image={!!apartamentGallery ? apartamentGallery[0]?.url : ""}
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
        <Button size="small" onClick={handleNavigate}>
          Ver publicación
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
