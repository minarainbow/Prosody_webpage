import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    marginLeft: '4%',
    marginTop: '40px',
    width: '65%',
    overflowX: 'visible',
    display: 'block',
  },
  rootMobile: {
    marginLeft: '10%',
    marginTop: '40px',
    width: '80%',
    overflowX: 'visible',
    display: 'block',
  },
  title: {
    marginLeft: '20px',
    fontSize: '25px',
    paddingBottom: '20px',
    marginBottom: '20px',
    borderBottom: `1.5px solid ${theme.palette.grey[300]}`,
  },
  columnTitle: {
    marginLeft: '20px',
    marginBottom: '20px',
    fontSize: '15px',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.grey[300],
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

let id = 0;
function createData(name, explanation, calls) {
  id += 1;
  return { id, name, explanation, calls };
}

const data = [
  createData('검색', '네이버 블로그, 이미지, 웹, 뉴스, 백과사전, 책, 카페, 지식iN 등 검색', '25,000회/일'),
  createData('검색', '이미지, 웹, 뉴스, 백과사전, 책, 카페, 지식iN 등 검색', '25,000회/일'),
  createData('검색', '네이버 블로그, 이미지, 웹, 뉴스, 백과사전, 책, 카페, 지식iN 등 검색', '25,000회/일'),
  createData('검색', '네이버 블로그, 이미지, 웹, 뉴스, 백과사전, 책, 카페, 지식iN 등 검색', '25,000회/일'),
  createData('검색', '네이버 블로그, 이미지, 웹, 뉴스, 백과사전, 책, 카페, 지식iN 등 검색', '25,000회/일'),
  createData('검색', '네이버 블로그, 이미지, 웹, 뉴스, 백과사전, 책, 카페, 지식iN 등 검색', '25,000회/일'),
  createData('검색', '네이버 블로그, 이미지, 웹, 뉴스, 백과사전, 책, 카페, 지식iN 등 검색', '25,000회/일'),
  createData('검색', '네이버 블로그, 이미지, 웹, 뉴스, 백과사전, 책, 카페, 지식iN 등 검색', '25,000회/일'),
];

function APITable(props) {
  const { classes } = props;

  const state = {
    mobile: props.mobile,
  };

  return (
    <div className={(state.mobile? classes.rootMobile : classes.root) }>
      <div className={classes.title} >
        휴멜로 오픈 API 목록
        </div>
      <div className={classes.columnTitle} >
        휴멜로의 오픈 API 목록 및 안내입니다.
        </div>
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell align="center" className={classes.columnTitle} >API명</CustomTableCell>
              <CustomTableCell align="center" className={classes.columnTitle} >설명</CustomTableCell>
              <CustomTableCell align="center" className={classes.columnTitle} >호출제한</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow className={classes.row} key={n.id}>
                  <CustomTableCell component="th" scope="row" style={{ fontSize: '15px' }}>
                    {n.name}
                  </CustomTableCell>
                  <CustomTableCell align="left" style={{ fontSize: '15px', width: '60%' }}>{n.explanation}</CustomTableCell>
                  <CustomTableCell align="left" style={{ fontSize: '15px' }}>{n.calls}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
    </div>

  );
}

APITable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(APITable);