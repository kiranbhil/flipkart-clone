import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export default function PaymentForm() {
  const { control } = useFormContext;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            name="cardname"
            render={({ field }) => (
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            name="cardnumber"
            render={({ field }) => (
              <TextField
                required
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
                type={"number"}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            name="exp_date"
            render={({ field }) => (
              <TextField
                required
                id="expDate"
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            name="CVV"
            render={({ field }) => (
              <TextField
                required
                id="cvv"
                type={"number"}
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
