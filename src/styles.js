
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
      width: 'auto',
      marginTop: '3%',
      marginLeft: '3%',
      marginRight: '3%',
      borderBottom: `2px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
      marginLeft: theme.spacing.unit,
      flex: 1,
      color: theme.palette.grey[600],
    },
    toolbarMenu: {
      width: '35%',
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
      marginBottom: "8%",
    },
    featureContainer: {
      paddingLeft: '10%',
      paddingRight: '10%',
      marginBottom: '5%',
      width: '80%',
      display: 'flex',
    },
    featureContainerTablet: {
      marginBottom: '5%',
      width: '100%',
      display: 'flex',
    },
    featureContainerPhone: {
      paddingLeft: '20%',
      paddingRight: '20%',
      width: '60%',
      textAlign: 'center',
    },
    keySentence: {
      marginBottom: '3%',
      fontSize: '1.7vw',
      fontWeight: 'bold',
  
    },
    APITitle: {
      position: 'absolute',
      top: '300px',
      left: '200px',
      color: 'white',
      fontSize: '2vw',
    },
    APIDetail: {
      position: 'absolute',
      top: '370px',
      left: '200px',
      color: 'white',
      fontSize: '1.1vw',
    },
    feature: {
      width: '50%',
      textAlign: 'center',
    },
    featureTablet: {
      width: '40%',
      textAlign: 'center',
      justifyContent: 'space-between',
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
    // markdown: {
    //   padding: `${theme.spacing.unit * 3}px 0`,
    // },
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