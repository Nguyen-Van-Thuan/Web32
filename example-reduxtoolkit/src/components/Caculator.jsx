import { Button } from "@mui/material"
import useStyles from "../themes/CustomStyles";

const Caculator = () => {
  const count = 0;
  // Su dung Mui custom styles
  const classes = useStyles()

  return (
    <>
      <h1>Caculator</h1>
      <Button
        variant="outlined"
        className={classes.buttonBlack}
      >
        Tang +
      </Button>

      {count}
      <Button
        variant="outlined"
        className={classes.buttonViolet}
      >
        Giam -
      </Button>
    </>

  )
}

export default Caculator