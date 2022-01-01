import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';

type QAProps = {
  question: string;
  answer: string | JSX.Element;
  startOpen?: boolean;
};

export const QA = (p: QAProps) => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(p.startOpen ?? false);
  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <Box
          py={2}
          display="flex"
          flexWrap="wrap"
          justifyContent={isSmallScreen ? 'center' : 'left'}
          width={isSmallScreen ? '100%' : '50%'}
        >
          <Typography color="secondary" variant="h4" align={isSmallScreen ? 'center' : 'left'}>
            {p.question}
          </Typography>
        </Box>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box py={4}>
          <Typography align={isSmallScreen ? 'center' : 'left'} gutterBottom>
            {p.answer}
          </Typography>
        </Box>
      </Collapse>
    </>
  );
};
