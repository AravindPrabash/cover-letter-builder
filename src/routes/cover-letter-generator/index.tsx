import { Card, Grid } from '@mui/material';

const CoverLetterGenerator = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xl={4}>
        <Card variant='outlined'>
          Step 1
        </Card>
      </Grid>
      <Grid item xl={4}>
        <Card variant='outlined'>
          Step 2
        </Card>
      </Grid>
      <Grid item xl={4}>
        <Card variant='outlined'>
          Step 3
        </Card>
      </Grid>
    </Grid>
  );
};

export default CoverLetterGenerator;