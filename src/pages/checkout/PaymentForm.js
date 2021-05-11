import React from 'react';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


export default function PaymentForm() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Méthode de payement
      </Typography>
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Espèce" />
        <FormControlLabel value="male" control={<Radio />} label="RunPay" />
        <FormControlLabel value="other" control={<Radio />} label="ClickToPay" />
      </RadioGroup>
    </FormControl>
    </React.Fragment>
  );
}