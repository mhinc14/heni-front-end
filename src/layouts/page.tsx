import { Grid } from "@mui/material";

interface PageProps {
  content: JSX.Element;
  toolbar: JSX.Element;
  title: JSX.Element;
}
export default function Page({ content, toolbar, title }: PageProps) {
  return (
    <Grid
      container
      alignContent="flex-start"
      justifyContent="center"
      sx={styles.container}
    >
      <Grid container alignContent="flex-start" justifyContent="center">
        {title}
      </Grid>
      <Grid
        container
        item
        alignContent="flex-start"
        justifyContent="flex-end"
        sx={styles.toolbar}
      >
        {toolbar}
      </Grid>
      <Grid container>{content}</Grid>
    </Grid>
  );
}

const styles = {
  container: { px: 2, py: 2, height: "100vh", overflow: "auto" },
  toolbar: { my: 2 },
};
