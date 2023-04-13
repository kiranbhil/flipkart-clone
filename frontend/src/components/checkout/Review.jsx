import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";


export default function Review() {
  const data = JSON.parse(localStorage.getItem("userInfo"));
  const payments = [
    { name: "Card type", detail: data.cardname },
    {
      name: "Card holder",
      detail: "Mr " + data.firstName + " " + data.lastName,
    },
    { name: "Card number", detail: data.cardnumber },
    { name: "Expiry date", detail: data.exp_date },
  ];

  const [product, setProduct] = useState([]);
  const [ids,setIds]=useState([])

  React.useEffect(() => {
    axios
      .get("https://concerned-rose-bighorn-sheep.cyclic.app/cartproduct")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  var sum = [];

  if (product.length > 0) {
    let intval = 0;
    sum = product.map((elem) => {
      const val1 = elem.price.mrp;
      return (intval = intval + val1);
    });
  }

  const total = sum[sum.length - 1];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {product.map((elem, i) => (
          <ListItem fontWeight={"bold"} key={elem.title.longTitle} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={elem.title.longTitle}
              secondary={elem.title.shortTitle}
            />
            <Typography variant="body2">₹{elem.price.mrp}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ₹{total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {data.firstName} {data.lastName}
          </Typography>
          <Typography gutterBottom>{data.address1}</Typography>
          <Typography gutterBottom>{data.address2}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={data.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
