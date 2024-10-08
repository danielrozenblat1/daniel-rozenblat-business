import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GiftIcon from '@mui/icons-material/CardGiftcard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import ChatIcon from '@mui/icons-material/Chat';
import QusetionIcon from '@mui/icons-material/QuestionAnswer';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WebIcon from '@mui/icons-material/Language';
import iconn from "../images/דניאל אייקון.png";
import { Link as ScrollLink } from "react-scroll";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: 'relative',
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const closeDrawer = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{background:"linear-gradient(744deg,#350051,#dbdcff9e 60%,#b8b4ca4d)",height:70,display:"flex",justifyContent:"center", backdropFilter: 'blur(50px)' }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, color: "black" }} component="div">
            <img src={iconn} style={{alignItems:"center", justifyContent:"center", display:"flex"}} alt="icon" width="50" />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }), color: "black" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: "linear-gradient(744deg,#350051,#dbdcff9e 60%,#b8b4ca4d)",
            backdropFilter: 'blur(50px)' 
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ direction: "rtl", height: "60%", display:"flex", justifyContent:"space-evenly", flexDirection:"column" }}>
          {['קצת עלי', 'לקוחות ממליצים', 'שאלות נפוצות', 'צור קשר', 'מתנה ממני', 'עבודות'].map((text, index) => (
            <ListItem key={text} disablePadding >
              <ScrollLink to={text} spy={true} smooth={true} duration={1500} offset={-70} onClick={closeDrawer}>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <InfoIcon />}
                    {index === 1 && <ChatIcon />}
                    {index === 2 && <QusetionIcon />}
                    {index === 3 && <ContactMailIcon />}
                    {index === 4 && <GiftIcon />}
                    {index === 5 && <WebIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{width:"100%" }} />
                </ListItemButton>
              </ScrollLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}