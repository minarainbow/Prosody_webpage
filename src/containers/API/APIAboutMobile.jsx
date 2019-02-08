import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import APITable from '../../components/APITable';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import { APImenu } from '../../scripts';

class APIAboutMobile extends Component {

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
                        <Link to="/" className={classes.toolbarTitleMobile}>
                            <Button >
                                <img src={logo} className={classes.mainLogoMobile} />
                                <div className={classes.logoTitleMobile} >
                                    Mobile
                                </div>
                            </Button>
                        </Link>
                        <SearchBar
                            onChange={() => console.log('onChange')}
                            onRequestSearch={() => console.log('onRequestSearch')}
                            className={classes.searchBar} />
                        <Link to="/">
                            <IconButton color="action">
                                <HomeIcon className={classes.defaultIcon} />
                            </IconButton>
                        </Link>
                        <IconButton
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}>
                            <MenuIcon className={classes.defaultIcon} />
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
                        {APImenu.map(menuItem => (
                            <div >
                                <Link to={menuItem.link} style={{ textDecoration: 'none', outline: 'none', }}>
                                    <Button style={{ fontSize: '18px', width: '100%', paddingTop: '15%', paddingBottom: '15%' }} key={menuItem} >
                                        <div style={{ position: 'absolute', left: '60px' }}>
                                            {menuItem.title}
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </Drawer>
                    <APITable mobile={true} />
                </div>
            </React.Fragment>
        );
    }
}

export default APIAboutMobile;
