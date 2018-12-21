const styles = theme => ({
  
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    toolbarMain: {
      margin: '30px',
      marginBottom: '0px',
      borderBottom: `2px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
      marginLeft: theme.spacing.unit,
      flex: 1,
      color: theme.palette.grey[600],
    },
    toolbarMenu: {
      width: '30%',
      margin: 'auto',
      textAlign: 'center',
      justifyContent: 'space-between',
      marginTop: theme.spacing.unit,
    },
    mypageIcon: {
      fontSize: '40px',
    },
    container: {
      width: '100%',
    },
    featureContainer: {
      paddingLeft: '10%',
      paddingRight: '10%',
      marginBottom: '5%',
      width: '80%',
      display: 'flex',
      felxDirection: 'column',
    },
    keySentence: {
      marginBottom: '3%',
      fontSize: '25px',
      fontWeight: 'bold',
  
    },
    APITitle: {
      position: 'relative',
      top: '-400px',
      right: '-200px',
      color: 'white'
    },
    APIDetail: {
      position: 'relative',
      top: '-370px',
      right: '-200px',
      color: 'white',
    },
    feature: {
      textAlign: 'center',
      width: '80%',
    },
    mainGrid: {
      marginTop: theme.spacing.unit * 3,
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    markdown: {
      padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
      padding: theme.spacing.unit * 2,
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing.unit * 3,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing.unit * 8,
      padding: `${theme.spacing.unit * 6}px 0`,
    },
  });

  export default styles;