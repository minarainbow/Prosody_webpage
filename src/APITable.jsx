
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.grey[300],
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const styles = theme =>({
  root: {
    marginLeft: '4%',
    marginTop: '40px',
    width: '65%',
    overflowX: 'auto',
    display: 'block',
  },
  table: {
    minWidth: 700,
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
    // fontWeight: 'bold'
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, explanation, calls) {
  id += 1;
  return { id, name, explanation, calls};
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

  return (
      <div  className={classes.root}>
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
                    <CustomTableCell component="th" scope="row" style={{fontSize: '15px'}}>
                    {n.name}
                    </CustomTableCell>
                    <CustomTableCell align="left" style={{fontSize: '15px'}}>{n.explanation}</CustomTableCell>
                    <CustomTableCell align="left" style={{fontSize: '15px'}}>{n.calls}</CustomTableCell>
                </TableRow>
                );
            })}
            </TableBody>
        </Table>
        </Paper>
      </div>
    
  );
}

APITable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(APITable);