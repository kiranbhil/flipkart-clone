import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export default function AddressForm() {
  const { control } = useFormContext;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                required
                id="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                required
                id="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="address1"
            render={({ field }) => (
              <TextField
                required
                id="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="address2"
            render={({ field }) => (
              <TextField
                id="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <TextField
                required
                id="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <TextField
                id="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="zip"
            render={({ field }) => (
              <TextField
                required
                id="zip"
                label="Zip / Postal code"
                type={"number"}
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <TextField
                required
                id="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
