import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function Search({ businessSuppliers }) {
  const classes = useStyles();

  return (
    <Autocomplete
      id="country-select-demo"
      style={{ width: 300 }}
      options={businessSuppliers}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option: { displayName: string; id: string }) =>
        option.displayName
      }
      renderOption={(option) => (
        <React.Fragment>{option.displayName}</React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="select business supplier"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}
