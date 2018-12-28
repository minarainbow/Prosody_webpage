
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
      borderBottom: `3px solid ${theme.palette.grey[300]}`,
    },
    toolbarMainPhone: {
      width: 'auto',
      marginTop: '3%',
      marginRight: '3%',
      borderBottom: `3px solid ${theme.palette.grey[300]}`,
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
      paddingLeft: '10%',
      paddingRight: '10%',
      width: '80%',
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
    cardBasic: {
      marginLeft: '10%',
      marginRight: '10%',
      display: 'flex',
      width: '80%',
      border: `3px solid ${theme.palette.grey[200]}`,
      borderRadius: '10px',
      boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    },
    cardPro: {
      marginLeft: '10%',
      marginRight: '10%',
      display: 'flex',
      width: '80%',
      border: `3px solid ${theme.palette.grey[200]}`,
      borderRadius: '10px',
      boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
      background: 'linear-gradient(to right, #264C56 , #393253)',
      color: 'white',
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
    phoneTitle: {
      fontSize: "22px", 
      fontWeight: "bold",
    },
    phoneDescription: {
      fontSize: "16px",
    },
    tabletTitle: {
      fontSize: "1.8vw", 
      fontWeight: "bold",
    },
    tabletDescription: {
      fontSize: "1.5vw", 
      lineHeight: "200%"
    },
    desktopTitle: {
      fontSize: "28px", 
      fontWeight: "bold"
    },
    desktopDescription: {
      fontSize: "21px", 
      lineHeight: "200%"
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
    featureDivider: {
      width: "80%",
      paddingRight: "10%",
      borderRight: `3px solid ${theme.palette.grey[300]}`,
    },
    featureDividerPhone: {
      paddingTop: "2.4vw",
      paddingBottom: "3.2vw",
      marginLeft: "25%",
      marginRight:"50%", 
      width: "50%", 
      borderBottom: `3px solid ${theme.palette.grey[300]}`,
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