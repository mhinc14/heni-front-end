import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { Country } from "model";

export interface CountriesListProps {
  countries: Country[] | undefined;
  loading: boolean;
}

export default function CountriesList({
  countries,
  loading,
}: CountriesListProps) {
  if (loading) {
    return <CountriesLoader />;
  }
  return (
    <>
      <Grid container alignContent="center" spacing={2}>
        {countries?.map((country) => (
          <Grid
            key={country.code}
            container
            justifyContent="center"
            item
            xs={12}
            sm={6}
            md={3}
          >
            <Card sx={styles.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`}
                  alt="nft image"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {country.name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Currency: {country.currency}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

function CountriesLoader() {
  return (
    <Grid container spacing={2}>
      <Grid
        data-testid="countries-loader"
        container
        justifyContent="center"
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Skeleton
          variant="rectangular"
          width={320}
          height={200}
          sx={styles.skeleton}
        />
      </Grid>
    </Grid>
  );
}

const styles = {
  card: { flexGrow: 1 },
  skeleton: { mx: 2 },
};
