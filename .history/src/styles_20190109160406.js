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
    marginLeft: '3%',
    marginRight: '3%',
    borderBottom: `3px solid ${theme.palette.grey[300]}`,
    marginBottom: '3%',
  },
  toolbarTitle: {
    display: 'flex',
    width: '240px',
    marginLeft: '2%',
    marginRight: '78%',
  },
  toolbarTitleTablet: {
    display: 'flex',
    width: '220px',
    marginLeft: '2%',
    marginRight: '70%',
  },
  toolbarTitlePhone: {
    display: 'flex',
    width: '160px',
    marginLeft: '1px',
    marginRight: 'auto',
  },
  toolbarMenu: {
    width: '35%',
    margin: 'auto',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  mainLogo: {
    height: '50px',
    width: '50px',
    marginRight: '10px',
  },
  mainLogoPhone: {
    height: '40px',
    width: '40px',
    marginRight: '10px',
  },
  logoTitle: {
    fontSize: '30px',
  },
  logoTitlePhone: {
    fontSize: '24px',
  },
  mypageIcon: {
    fontSize: '38px',
    marginLeft: 'auto',
    marginRight: '8px',
  },
  container: {
    width: '100%',
    height: '31vw',
    overflow: 'hidden',
  },
  defaultImage: {
    width: "100%", 
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3*theme.transitions.duration.leavingScreen,
    }),
  },
  containerZoomImage: {
    width: "110%",
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3*theme.transitions.duration.leavingScreen,
    }),
  },
  featureZoomImage: {
    boxShadow: `0px -8px 10px ${theme.palette.grey[300]}`,
    borderRadius: '10px',
    width: "100%",
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3*theme.transitions.duration.leavingScreen,
    }),
    cursor: 'pointer',
  },
  featureContainer: {
    marginLeft: '7%',
    marginRight: '8%',
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
    cursor: 'pointer',
  },
  featureTablet: {
    width: '40%',
    textAlign: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  priceContainer: {
    marginBottom: '20%',
  },
  cardBasic: {
    paddingLeft: '3%',
    marginLeft: '20%',
    marginRight: '10%',
    paddingTop: '20%',
    width: '70%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3*theme.transitions.duration.leavingScreen,
    }),
  },
  cardPro: {
    paddingLeft: '3%',
    marginLeft: '10%',
    marginRight: '20%',
    paddingTop: '20%',
    width: '70%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    background: 'linear-gradient(to right, #264C56 , #393253)',
    color: 'white',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3*theme.transitions.duration.leavingScreen,
    }),
  },
  cardZoomInBasic: {
    paddingLeft: '3%',
    marginLeft: '20%',
    paddingTop: '20%',
    width: '90%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3*theme.transitions.duration.leavingScreen,
    }),
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3*theme.transitions.duration.leavingScreen,
    }),
    cursor: 'pointer',
  },
  cardZoomOutBasic: {
    paddingLeft: '3%',
    marginLeft: '20%',
    paddingTop: '20%',
    width: '50%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3*theme.transitions.duration.leavingScreen,
    }),
  },
  cardZoomInPro: {
    paddingLeft: '3%',
    paddingTop: '20%',
    marginLeft: '-10%',
    marginRight: '20%',
    width: '90%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    background: 'linear-gradient(to right, #264C56 , #393253)',
    color: 'white',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3*theme.transitions.duration.leavingScreen,
    }),
    cursor: 'pointer',
  },
  cardZoomOutPro: {
    paddingLeft: '3%',
    marginLeft: '30%',
    marginRight: '20%',
    paddingTop: '20%',
    width: '50%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    background: 'linear-gradient(to right, #264C56 , #393253)',
    color: 'white',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3*theme.transitions.duration.leavingScreen,
    }),
  },
  cardBasicPhone: {
    paddingLeft: '3%',
    paddingRight: '3%',
    marginLeft: '30%',
    marginRight: '10%',
    paddingTop: '10%',
    paddingBottom: '10%',
    width: '60%',
    height: '220px',
    border: `3px solid ${theme.palette.grey[200]}`,
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
  },
  cardProPhone: {
    position: 'relative',
    top: '-30%',
    left: '10%',
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingTop: '10%',
    paddingBottom: '5%',
    width: '60%',
    height: '200px',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    background: 'linear-gradient(to right, #264C56 , #393253)',
    color: 'white',
  },
  cardDetails: {
    display: 'flex',
  },
  priceTitle: {
    paddingBottom: '15px',
    borderBottom: '6px double',
    fontStyle: 'italic',
    textShadow: `4px 4px 8px ${theme.palette.grey[600]}`,
    fontSize: '65px',
  }, 
  price: {
    marginLeft: '45%',
    fontStyle: 'italic',
    textShadow: `4px 4px 8px ${theme.palette.grey[600]}`,
    fontSize: '50px',
  },
  pricePhone: {
    fontSize: '40px',
    marginTop: '20px',
    marginBottom: '20px',
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
    alignItems: 'left',
    whiteSpace: 'nowrap',
    width: 200,
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
    paddingRight: '12%',
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
  loadingPage: {
    color: '#fff',
    fontSize: "30px",
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(to right, #58C2DF  , #393253)',
  },
  loadingAnimation: {
    position: 'relative',
    top: '25%',
    left: '47%',
  },
  loadingTitle: {
    paddingTop: '100px',
    textAlign: 'center',
    color: "#fff",
  },

  mypageMenu: {
    marginLeft: '100px',
    margin: '30px',
    width: '100%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },

 /*Below are for LoginDialog*/
 dialog: {
   fullWidth: true,
   marginBottom: '20px',
 }
  
});

export default styles;