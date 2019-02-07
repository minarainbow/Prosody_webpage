import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles.js'
import SearchBar from 'material-ui-search-bar';
import APITable from '../APITable';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import { sections, APIfeatures, prices } from '../scripts';

class APIAbout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.layout}>
                    <Toolbar className={classes.toolbarMain}>
                        <Link to="/" className={classes.toolbarTitlePhone}>
                            <Button >
                                <img src={logo} className={classes.mainLogoPhone} />
                                <div className={classes.logoTitlePhone} >
                                    Phone
                                </div>
                            </Button>
                        </Link>
                        <SearchBar
                            onChange={() => console.log('onChange')}
                            onRequestSearch={() => console.log('onRequestSearch')}
                            className={classes.searchBar} />
                        <Link to="/">
                            <IconButton color="action">
                                <HomeIcon className={classes.mypageIcon} />
                            </IconButton>
                        </Link>
                        <IconButton
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}>
                            <MenuIcon className={classes.mypageIcon} />
                        </IconButton>
                    </Toolbar>
                    <Drawer
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open} anchor="right" >
                        <div>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronRightIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        {sections.map(section => (
                            <div >
                                <Button color="inherit" style={{ fontSize: '18px', width: '100%', paddingTop: '15%', paddingBottom: '15%' }} key={section} >
                                    <section.icon color="action" style={{ position: 'absolute', left: '15px', fontSize: '30px', paddingRight: '10px' }} />
                                    <div style={{ position: 'absolute', left: '60px' }}>
                                        {section.title}
                                    </div>
                                </Button>
                            </div>
                        ))}
                    </Drawer>
                    <APITable phone={true}/>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(APIAbout);
