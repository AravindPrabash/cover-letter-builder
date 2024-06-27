import { Grid } from '@mui/material';
import styles from './header.module.scss';

const Header = () => (
  <Grid container>
    <Grid className={styles.top} item xs={12}>
      <h2>✨ Cover Letter with Ai</h2>
    </Grid>
  </Grid>
);

export default Header;