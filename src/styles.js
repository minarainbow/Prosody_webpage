
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
    toolbarMainPhone: {
      width: 'auto',
      marginTop: '3%',
      marginRight: '3%',
      borderBottom: `2px solid ${theme.palette.grey[300]}`,
      marginBottom: '3%',
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
      marginBottom: theme.spacing.unit,
    },
    defaultIcon: {
      fontSize: '38px',
    },
    container: {
      width: '100%',
      marginBottom: "8%",
    },
    featureContainer: {
      marginLeft: '7%',
      marginRight: '7%',
      marginBottom: '10%',
      width: '86%',
      display: 'flex',
    },
    featureContainerTablet: {
      marginBottom: '5%',
      width: '100%',
      display: 'flex',
    },
    featureContainerPhone: {
      paddingLeft: '13%',
      paddingRight: '13%',
      width: '74%',
      textAlign: 'center',
    },
    keySentence: {
      marginTop: '10%',
      marginBottom: '5%',
      fontSize: '2.1vw',
      fontWeight: 'bold',
    },
    keySentencePhone: {
      marginTop: '6%',
      marginBottom: '6%',
      fontSize: '21px',
      fontWeight: 'bold',
    },
    APITitle: {
      position: 'absolute',
      top: '18vw',
      left: '12vw',
      color: 'white',
      fontSize: '35px',
    },
    APIDetail: {
      position: 'absolute',
      top: '22vw',
      left: '12vw',
      color: 'white',
      fontSize: '22px',
    },
    APITitleTablet: {
      position: 'absolute',
      top: '20vw',
      left: '14vw',
      color: 'white',
      fontSize: '2.2vw',
    },
    APIDetailTablet: {
      position: 'absolute',
      top: '24vw',
      left: '14vw',
      color: 'white',
      fontSize: '1.4vw',
      lineHeight: '150%',
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
    priceContainer: {
      textAlign: 'center',
      marginBottom: '20%',
    },
    card: {
      marginLeft: '10%',
      marginRight: '10%',
      display: 'flex',
      width: '80%',
      border: `2px solid ${theme.palette.grey[200]}`,
      borderRadius: '10px',
      boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 'auto',
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


    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      whiteSpace: 'nowrap',
      width: 220,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },

    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    
  });

  export default styles;