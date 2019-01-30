import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    sideMenu: {
        marginLeft: '60px',
        marginTop: '40px',
        height: '400px',
        width: 200,
        border: `3px solid ${theme.palette.grey[300]}`,
    },
})

function MypageMenu(props) {
    const { classes } = props;

    const state = {
        selectedIndex: props.selectedIndex,
    };

    const handleListItemClick = (event, index) => {
        if (index != state.selectedIndex) {
            state.selectedIndex = index;
        }
    };

    return (
        <div className={classes.sideMenu}>
            <List component="nav">
                <Link to="/mypage/profile" style={{ textDecoration: 'none', outline: 'none', }}>
                    <ListItem
                        button
                        selected={state.selectedIndex === 0}
                        onClick={event => handleListItemClick(event, 0)}
                    >
                        <ListItemText primary="프로필" />
                    </ListItem>
                </Link>
                <Divider />
                <ListItem
                    button
                    selected={state.selectedIndex === 1}
                    onClick={event => handleListItemClick(event, 1)}
                >
                    <ListItemText primary="메일함" />
                </ListItem>
                <Divider />
                <ListItem
                    button
                    selected={state.selectedIndex === 2}
                    onClick={event => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="더미" />
                </ListItem>
                <Divider />
                <ListItem
                    button
                    selected={state.selectedIndex === 3}
                    onClick={event => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="더미2" />
                </ListItem>
                <Divider />
            </List>
        </div>
    )
}

export default withStyles(styles)(MypageMenu);