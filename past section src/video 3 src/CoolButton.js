import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  buttonText: (props) => {
    return {
      color: props.cool ? 'blue' : 'red',
      //   [theme.breakpoints.up('sm')]: {
      //     color: 'cyan',
      //   },
    };
  },
  buttonBackground: {
    backgroundColor: 'orange',
  },
}));

const CoolButton = (props) => {
  const classes = useStyles(props);

  return (
    <Button
      fullWidth
      className={(classes.buttonStyle, classes.buttonBackground)}
    >
      The button
    </Button>
  );
};

export default CoolButton;
