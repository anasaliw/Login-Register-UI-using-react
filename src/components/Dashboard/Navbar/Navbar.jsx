import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  Button,
  styled,
  Typography,
  Avatar,
  Icon,
  TextField,
  Badge,
  Chip,
  Divider,
  Stack,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import {
  Home2,
  Graph,
  DocumentText,
  People,
  ShoppingCart,
  CloseSquare,
  Location,
  DiscountCircle,
  Profile,
  Note,
  MessageText,
  InfoCircle,
  Bookmark,
  NoteAdd,
  Unlock,
  Lock1,
  Category,
  FilterSearch,
  TicketStar,
  Danger,
  SearchNormal,
  Notification,
  Ticket,
  TickSquare,
  Game,
} from "iconsax-react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TooltipLinks = styled(Box)`
  display: flex;
  padding: 5px 5px;
  justify-content: space-between;
  text-transform: none;
  color: #636e72;
  font-family: "Manrope", sans-serif;
  line-height: 1.5715;
  &:hover {
    color: #0010f7;
  }
`;
const TooltipBox = styled(Tooltip)`
  background-color: white;
  padding: 10px 0px;
`;
const TooltipLinks2 = styled(Box)`
  display: flex;
  padding: 10px 0px;
  text-transform: none;
  color: #636e72;
  font-family: "Manrope", sans-serif;
  line-height: 1.5715;
  &:hover {
    color: #0010f7;
  }
`;

const TooltipLinkText = styled(Typography)`
  padding: 0px 10px;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  color: #636e72;
  &:hover {
    color: #0010f7;
  }
`;
const TooltipLinkText2 = styled(Typography)`
  padding: 10px 10px;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  color: #636e72;
  &:hover {
    color: #0010f7;
  }
`;
const TooltipTitleBox = styled(Typography)`
  height: auto;
  background-color: white;
  width: auto;
  display: flex;
  flex-direction: column;
  &:hover {
    color: #0010f7;
  }
`;

const Btn = styled(Button)`
  text-transform: none;
  color: #636e72;
  font-family: "Manrope", sans-serif;
  line-height: 1.5715;
  &:hover {
    color: #0010f7;
  }
`;
const Popover = styled(Tooltip)`
  padding: 7px 20px;
  border-radius: 10px;
  background-color: white;
`;
const tooltipStyling = {
  "& .MuiTooltip-tooltip": {
    backgroundColor: "white",
  },
};

const IconHover = styled(Icon)`
  padding: 5px 6px 6.4px 6px;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    /* background-color: rgba(255, 255, 255, 0); */
    background-color: aliceblue;
  }
`;
const RightNavigationContainer = styled(Box)`
  display: flex;
  align-items: center;
  & > {
    margin: 10px;
  }
`;
const TextInputField = styled(TextField)`
  width: 67%;
  color: #2d3436;
  transition-duration: 0.5s;
  transition: all 0.3s ease 0.3s;
  background-color: #fff;
  border: 1px solid #b2bec3;
  border-radius: 10px;
  @media (max-width: 1000px) {
    width: 95%;
    position: absolute;
    margin-top: 140px;
  }
`;
const CartItemTitle = styled(Typography)`
  color: #2d3436;
  font-size: 14px;
  font-family: "Manrope", sans-serif;
`;
const NotificationSectionText1 = styled(Typography)`
  color: #2d3436;
  font-size: 13px;
  font-family: "Manrope", sans-serif;
`;
const NotificationSectionText2 = styled(Typography)`
  color: #ced4d1;
  font-size: 14px;
  font-family: "Manrope", sans-serif;
`;
const AvatarHoverText = styled(Typography)`
  font-size: 16px;
  margin-bottom: 10px;
  font-family: "Manrope", sans-serif;
`;
const ShoppingHoverCenterBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  /* &:hover {
    background-color: aliceblue;
  } */
`;
// const NotificationHoverCenterBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0px 0px;
//   /* &:hover {
//     background-color: aliceblue;
//   } */
// `;
const ShoppingHoverCenterBoxHover = styled(Box)`
  border-radius: 8px;
  margin: 2px 0px;
  &:hover {
    background-color: aliceblue;
  }
`;
const AvatarHoverCenterBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 4px;
  /* text-align: center; */
  border-radius: 7px;
  &:hover {
    background-color: #ebfafa;
  }
`;
const NotificationHoverCenterBox = styled(Box)`
  display: flex;
  align-items: center;
  margin: 7px 0px;
`;

function Navbar() {
  const [searchBar, setSearchBar] = React.useState(false);
  const searchToggle = () => {
    setSearchBar((prevState) => !prevState);
  };

  return (
    <>
      <AppBar
        elevation={0}
        position='static'
        style={{
          padding: "16px 32px 10px 32px",
          backgroundColor: "#ecf5f0",
        }}
      >
        <Toolbar
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            minHeight: 55,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* //!Left */}
          <Box>
            <img src='assets/images/navbarLogo.svg' alt='navbarLogo' />
            <sup
              style={{
                color: "#0010F7",
                position: "absolute",
                fontWeight: 800,
                marginTop: 15,
              }}
            >
              .
            </sup>
            <sup
              style={{
                position: "absolute",
                color: "#dfe6e9",
                marginLeft: 10,
              }}
            >
              v.3.1
            </sup>
          </Box>

          {/* // ! Center  */}
          {searchBar ? (
            <>
              <TextInputField placeholder='Search...' />
            </>
          ) : (
            <Box>
              <Popover
                title={
                  <React.Fragment>
                    <TooltipTitleBox>
                      <MainHover />
                    </TooltipTitleBox>
                  </React.Fragment>
                }
                placement='bottom'
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-tooltip": {
                      backgroundColor: "white",
                    },
                  },
                }}
              >
                <Btn endIcon={<KeyboardArrowDownIcon />}>Main</Btn>
              </Popover>

              <Popover
                title={
                  <React.Fragment>
                    <TooltipTitleBox>
                      <TooltipLinks2>
                        <People />
                        <TooltipLinkText>Contact</TooltipLinkText>
                      </TooltipLinks2>
                      <ApplicationsHover />
                    </TooltipTitleBox>
                  </React.Fragment>
                }
                placement='bottom'
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-tooltip": {
                      backgroundColor: "white",
                    },
                  },
                }}
              >
                <Btn endIcon={<KeyboardArrowDownIcon />}>Applications</Btn>
              </Popover>

              <Popover
                title={
                  <React.Fragment>
                    <TooltipTitleBox>
                      <PagesHover />
                    </TooltipTitleBox>
                  </React.Fragment>
                }
                placement='bottom'
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-tooltip": {
                      backgroundColor: "white",
                    },
                  },
                }}
              >
                <Btn endIcon={<KeyboardArrowDownIcon />}>Pages</Btn>
              </Popover>

              <Popover
                title={
                  <React.Fragment>
                    <TooltipTitleBox>
                      <ComponentsHover />
                    </TooltipTitleBox>
                  </React.Fragment>
                }
                placement='bottom'
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-tooltip": {
                      backgroundColor: "white",
                    },
                  },
                }}
              >
                <Btn endIcon={<KeyboardArrowDownIcon />}>Components</Btn>
              </Popover>
            </Box>
          )}

          {/* //!Right Navigation */}

          <RightNavigationContainer>
            <div onClick={searchToggle} style={{ marginTop: 5 }}>
              {searchBar ? (
                <>
                  <IconHover>
                    <CloseIcon style={{ color: "#b2bec3" }} />
                  </IconHover>
                </>
              ) : (
                <IconHover>
                  <SearchNormal style={{ color: "#b2bec3" }} />
                </IconHover>
              )}
            </div>

            <TooltipBox
              title={
                <React.Fragment>
                  <ShoppingCartHover />
                </React.Fragment>
              }
              placement='bottom-start'
              PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    backgroundColor: "white",
                  },
                },
              }}
            >
              <IconHover style={{ padding: "5px 7px 5px 7px", marginLeft: 10 }}>
                <ShoppingCart style={{ color: "#b2bec3" }} />
              </IconHover>
            </TooltipBox>

            <TooltipBox
              title={
                <React.Fragment>
                  <NotificationHover />
                </React.Fragment>
              }
              placement='bottom-start'
              PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    backgroundColor: "white",
                  },
                },
              }}
            >
              <IconHover style={{ padding: "0px 7px 7px 7px", marginLeft: 10 }}>
                <Badge
                  color='primary'
                  overlap='circular'
                  badgeContent=' '
                  variant='dot'
                >
                  <Notification style={{ color: "#b2bec3" }} />
                </Badge>
              </IconHover>
            </TooltipBox>

            <TooltipBox
              style={{ marginLeft: 10 }}
              title={
                <React.Fragment>
                  <AvatarHover />
                </React.Fragment>
              }
              placement='bottom-start'
              PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    backgroundColor: "white",
                  },
                },
              }}
            >
              <Avatar alt='Remy Sharp' src='assets/images/avatarEmoji.png' />
            </TooltipBox>
          </RightNavigationContainer>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

const MainHover = () => {
  return (
    <>
      <Tooltip
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Analytics</TooltipLinkText2>
              <TooltipLinkText2>Ecommerce</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Home2 />
          <TooltipLinkText>Dashboards</TooltipLinkText>
          <ChevronRightIcon />
        </TooltipLinks>
      </Tooltip>
      <Tooltip
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <YodoCard />
              <TooltipLinkText2>Analytics</TooltipLinkText2>
              <TooltipLinkText2>Charts</TooltipLinkText2>
              <TooltipLinkText2>Select Box</TooltipLinkText2>
              <TooltipLinkText2>Illustration set</TooltipLinkText2>
              <TooltipLinkText2>Crypto Icons</TooltipLinkText2>
              <TooltipLinkText2>User Icons</TooltipLinkText2>
              <TooltipLinkText2>Flags</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Graph style={{ color: "#636e72" }} />
          <TooltipLinkText>Widgets</TooltipLinkText>
          <ChevronRightIcon style={{ color: "#636e72" }} />
        </TooltipLinks>
      </Tooltip>
      <Tooltip
        style={{
          backgroundColor: "white",
        }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Divider</TooltipLinkText2>
              <TooltipLinkText2>Grid Systems</TooltipLinkText2>
              <PageLayout />
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <DocumentText style={{ color: "#636e72" }} />
          <TooltipLinkText>Layout</TooltipLinkText>
          <ChevronRightIcon style={{ color: "#636e72" }} />
        </TooltipLinks>
      </Tooltip>
    </>
  );
};

const YodoCard = () => {
  return (
    <>
      <Tooltip
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Advance</TooltipLinkText2>
              <TooltipLinkText2>Statistics</TooltipLinkText2>
              <TooltipLinkText2>Analytics</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Typography style={{ fontSize: 14 }}>YodoCards</Typography>
          <ChevronRightIcon />
        </TooltipLinks>
      </Tooltip>
    </>
  );
};
const PageLayout = () => {
  return (
    <>
      <Tooltip
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Boxed Layout</TooltipLinkText2>
              <TooltipLinkText2>Vertical Layout</TooltipLinkText2>
              <TooltipLinkText2>Horizontal Layout</TooltipLinkText2>
              <TooltipLinkText2>Full Layout</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Typography style={{ fontSize: 14 }}>YodoCards</Typography>
          <ChevronRightIcon />
        </TooltipLinks>
      </Tooltip>
    </>
  );
};

const ApplicationsHover = () => {
  return (
    <>
      <Tooltip
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Shop</TooltipLinkText2>
              <TooltipLinkText2>Wishlist</TooltipLinkText2>
              <TooltipLinkText2>Product Detail</TooltipLinkText2>
              <TooltipLinkText2>Checkout</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <ShoppingCart />
          <TooltipLinkText>Dashboards</TooltipLinkText>
          <ChevronRightIcon />
        </TooltipLinks>
      </Tooltip>
    </>
  );
};

const PagesHover = () => {
  return (
    <>
      <TooltipBox
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>404</TooltipLinkText2>
              <TooltipLinkText2>403</TooltipLinkText2>
              <TooltipLinkText2>500</TooltipLinkText2>
              <TooltipLinkText2>503</TooltipLinkText2>
              <TooltipLinkText2>502</TooltipLinkText2>
              <TooltipLinkText2>Maintenance</TooltipLinkText2>
              <TooltipLinkText2>Coming soon</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks style={{ justifyContent: "space-between" }}>
          <Box style={{ display: "flex" }}>
            <CloseSquare />
            <TooltipLinkText>Error Pages</TooltipLinkText>
          </Box>

          <ChevronRightIcon />
        </TooltipLinks>
      </TooltipBox>

      <TooltipLinks2>
        <Location />
        <TooltipLinkText>Landing</TooltipLinkText>
      </TooltipLinks2>

      <TooltipLinks2>
        <DiscountCircle />
        <TooltipLinkText>Pricing</TooltipLinkText>
      </TooltipLinks2>

      <TooltipBox
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Personal Information</TooltipLinkText2>
              <TooltipLinkText2>Notifications</TooltipLinkText2>
              <TooltipLinkText2>Activity Monitor</TooltipLinkText2>
              <TooltipLinkText2>Security Setting</TooltipLinkText2>
              <TooltipLinkText2>Password Change</TooltipLinkText2>
              <TooltipLinkText2>Connect with Social</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Box style={{ display: "flex" }}>
            <Profile style={{ color: "#636e72" }} />
            <TooltipLinkText>Profile</TooltipLinkText>
          </Box>
          <ChevronRightIcon style={{ color: "#636e72" }} />
        </TooltipLinks>
      </TooltipBox>

      <TooltipLinks2>
        <Note />
        <TooltipLinkText>Invoice</TooltipLinkText>
      </TooltipLinks2>

      <Tooltip
        style={{
          backgroundColor: "white",
        }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Hello</TooltipLinkText2>
              <TooltipLinkText2>Promotional</TooltipLinkText2>
              <TooltipLinkText2>Verify</TooltipLinkText2>
              <TooltipLinkText2>Reset Password</TooltipLinkText2>
              <TooltipLinkText2>Term</TooltipLinkText2>
              <TooltipLinkText2>Deactivate Account</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Box style={{ display: "flex" }}>
            <MessageText style={{ color: "#636e72" }} />
            <TooltipLinkText>E-mail Templates</TooltipLinkText>
          </Box>
          <ChevronRightIcon style={{ color: "#636e72" }} />
        </TooltipLinks>
      </Tooltip>

      <TooltipLinks2>
        <InfoCircle />
        <TooltipLinkText>FAQ</TooltipLinkText>
      </TooltipLinks2>

      <TooltipBox
        style={{
          backgroundColor: "white",
        }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Knowledge Base 1</TooltipLinkText2>
              <TooltipLinkText2>Knowledge Base 2</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Box style={{ display: "flex" }}>
            <Bookmark style={{ color: "#636e72" }} />
            <TooltipLinkText>Knowledge Base</TooltipLinkText>
          </Box>
          <ChevronRightIcon style={{ color: "#636e72" }} />
        </TooltipLinks>
      </TooltipBox>

      <TooltipLinks2>
        <NoteAdd />
        <TooltipLinkText>Blank Page</TooltipLinkText>
      </TooltipLinks2>

      <TooltipBox
        style={{
          backgroundColor: "white",
        }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Login Page</TooltipLinkText2>
              <TooltipLinkText2>Register Page</TooltipLinkText2>
              <TooltipLinkText2>Recover Password</TooltipLinkText2>
              <TooltipLinkText2>Reset Password</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Box style={{ display: "flex" }}>
            <Unlock style={{ color: "#636e72" }} />
            <TooltipLinkText>Authentication</TooltipLinkText>
          </Box>
          <ChevronRightIcon style={{ color: "#636e72" }} />
        </TooltipLinks>
      </TooltipBox>

      <TooltipBox
        style={{
          backgroundColor: "white",
        }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Welcome </TooltipLinkText2>
              <TooltipLinkText2>Password is Changed</TooltipLinkText2>
              <TooltipLinkText2>Deactivated </TooltipLinkText2>
              <TooltipLinkText2>Lock</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Box style={{ display: "flex" }}>
            <Lock1 style={{ color: "#636e72" }} />
            <TooltipLinkText>Lock Screen</TooltipLinkText>
          </Box>
          <ChevronRightIcon style={{ color: "#636e72" }} />
        </TooltipLinks>
      </TooltipBox>
    </>
  );
};
const ComponentsHover = () => {
  return (
    <>
      <TooltipBox
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Style Guide</TooltipLinkText2>
              <TooltipLinkText2>Buttons</TooltipLinkText2>
              <TooltipLinkText2>Remix Icons</TooltipLinkText2>
              <TooltipLinkText2>Iconly Icons</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Box style={{ display: "flex" }}>
            <Category />
            <TooltipLinkText>General</TooltipLinkText>
          </Box>
          <ChevronRightIcon />
        </TooltipLinks>
      </TooltipBox>

      <TooltipBox
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Breadcrumbs</TooltipLinkText2>
              <TooltipLinkText2>Dropdown</TooltipLinkText2>
              <TooltipLinkText2>Menu</TooltipLinkText2>
              <TooltipLinkText2>Pagination</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Box style={{ display: "flex" }}>
            <Location />
            <TooltipLinkText>Navigation</TooltipLinkText>
          </Box>
          <ChevronRightIcon />
        </TooltipLinks>
      </TooltipBox>

      <TooltipBox
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Checkbox</TooltipLinkText2>
              <TooltipLinkText2>Form</TooltipLinkText2>
              <TooltipLinkText2>Input</TooltipLinkText2>
              <TooltipLinkText2>Input Number</TooltipLinkText2>
              <TooltipLinkText2>Radio</TooltipLinkText2>
              <TooltipLinkText2>Select</TooltipLinkText2>
              <TooltipLinkText2>Slider</TooltipLinkText2>
              <TooltipLinkText2>Switch</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Box style={{ display: "flex" }}>
            <FilterSearch />
            <TooltipLinkText>Data Entry</TooltipLinkText>
          </Box>
          <ChevronRightIcon />
        </TooltipLinks>
      </TooltipBox>

      <TooltipBox
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Avatar</TooltipLinkText2>
              <TooltipLinkText2>Badge</TooltipLinkText2>
              <TooltipLinkText2>Card</TooltipLinkText2>
              <TooltipLinkText2>Carousal</TooltipLinkText2>
              <TooltipLinkText2>Accordion</TooltipLinkText2>
              <TooltipLinkText2>Collapse</TooltipLinkText2>
              <TooltipLinkText2>List</TooltipLinkText2>
              <TooltipLinkText2>Popover</TooltipLinkText2>
              <TooltipLinkText2>Table</TooltipLinkText2>
              <TooltipLinkText2>Tabs</TooltipLinkText2>
              <TooltipLinkText2>Tooltip</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Box style={{ display: "flex" }}>
            <TicketStar />
            <TooltipLinkText>Data Display</TooltipLinkText>
          </Box>
          <ChevronRightIcon />
        </TooltipLinks>
      </TooltipBox>

      <TooltipBox
        style={{ backgroundColor: "white" }}
        title={
          <React.Fragment>
            <TooltipTitleBox>
              <TooltipLinkText2>Alert</TooltipLinkText2>
              <TooltipLinkText2>Drawer</TooltipLinkText2>
              <TooltipLinkText2>Modal</TooltipLinkText2>
              <TooltipLinkText2>Notification</TooltipLinkText2>
              <TooltipLinkText2>Progress</TooltipLinkText2>
              <TooltipLinkText2>Spinner</TooltipLinkText2>
            </TooltipTitleBox>
          </React.Fragment>
        }
        placement='right-start'
        PopperProps={{
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <TooltipLinks>
          <Box style={{ display: "flex" }}>
            <Danger />
            <TooltipLinkText>Feedback</TooltipLinkText>
          </Box>
          <ChevronRightIcon />
        </TooltipLinks>
      </TooltipBox>
    </>
  );
};

const ShoppingCartHover = () => {
  return (
    <Box style={{ padding: 15, color: "black" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Typography>My Cart</Typography>
        <Chip
          style={{
            color: "#0010f7",
            backgroundColor: "aliceblue",
            padding: "0px 5px",
          }}
          label='1 Item'
        />
      </Box>
      <Divider />
      <ShoppingHoverCenterBoxHover>
        <ShoppingHoverCenterBox>
          <img
            src='assets/images/watch.png'
            style={{ width: 32, height: 32 }}
            alt='cart-image'
          />

          <Box style={{ margin: "0px 15px", minWidth: 70 }}>
            <CartItemTitle>Smart Watches 3</CartItemTitle>
            <Typography style={{ fontSize: 12 }}>By Sony</Typography>
          </Box>

          <Box style={{ marginRight: 2 }}>
            <TextField value='4' />
            <Typography
              style={{
                fontSize: 12,
                textDecoration: "underline",
                color: "#ced4d1",
                cursor: "pointer",
              }}
            >
              Remove Item
            </Typography>
          </Box>

          <Typography style={{ color: "#0010f7", paddingLeft: 4 }}>
            $59.00
          </Typography>
        </ShoppingHoverCenterBox>
      </ShoppingHoverCenterBoxHover>
      <Divider />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0px",
          alignItems: "center",
        }}
      >
        <Typography style={{ color: "#0010f7", fontSize: 14 }}>
          View Cart
        </Typography>
        <Button style={{ padding: "7px 40px" }} variant='contained'>
          Checkout
        </Button>
      </Box>
    </Box>
  );
};
const NotificationHover = () => {
  return (
    <Box style={{ padding: 15, color: "black" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Typography>Notification</Typography>
        <Chip
          style={{
            color: "#FFF",
            backgroundColor: "#0010f7",
            padding: "0px 5px",
          }}
          label='1 Item'
        />
      </Box>
      <Divider />
      <NotificationHoverCenterBox>
        <Avatar
          alt='Remy Sharp'
          src='assets/images/notificationsEmoji.png'
          style={{ paddingRight: 10 }}
        />

        <Box>
          <NotificationSectionText1>
            New Message Received 💌
          </NotificationSectionText1>
          <NotificationSectionText2>
            24 unread messages
          </NotificationSectionText2>
        </Box>
      </NotificationHoverCenterBox>

      <Divider />
      <NotificationHoverCenterBox>
        <Avatar
          alt='Remy Sharp'
          // src='assets/images/notificationsEmoji.png'
          style={{ marginRight: 10, backgroundColor: "#eafff8" }}
        >
          <TickSquare style={{ color: "#00f7bf" }} />
        </Avatar>

        <Box>
          <NotificationSectionText1>
            Congratulations Teams🎉
          </NotificationSectionText1>
          <NotificationSectionText2>
            You have 12 new sales
          </NotificationSectionText2>
        </Box>
      </NotificationHoverCenterBox>

      <Divider />
      <NotificationHoverCenterBox>
        <Avatar
          alt='Remy Sharp'
          // src='assets/images/notificationsEmoji.png'
          style={{ marginRight: 10, backgroundColor: "#ffe7ea" }}
        >
          <CloseSquare style={{ color: "#ff0022" }} />
        </Avatar>

        <Box>
          <NotificationSectionText1>Network Error ⛔</NotificationSectionText1>
          <NotificationSectionText2>
            Operation Couldn't be completed
          </NotificationSectionText2>
        </Box>
      </NotificationHoverCenterBox>
      <Divider />
      <NotificationHoverCenterBox>
        <Avatar
          alt='Remy Sharp'
          // src='assets/images/notificationsEmoji.png'
          style={{ marginRight: 10, backgroundColor: "#fff9e9" }}
        >
          <Danger style={{ color: "#ffc212" }} />
        </Avatar>

        <Box>
          <NotificationSectionText1>Disk Utility 💥</NotificationSectionText1>
          <NotificationSectionText2>
            You have not enough disk capacity
          </NotificationSectionText2>
        </Box>
      </NotificationHoverCenterBox>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0px",
          alignItems: "center",
        }}
      >
        <Button
          // startIcon={<Delete}
          style={{ padding: "4px 30px", textTransform: "none" }}
          variant='contained'
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};
const AvatarHover = () => {
  return (
    <Box style={{ padding: 15, color: "black" }}>
      <AvatarHoverText style={{ fontFamily: "Manrope" }}>
        Profile Setting
      </AvatarHoverText>
      <Typography
        style={{
          color: "#0010f7",
          fontSize: 14,
          marginBottom: 8,
          fontFamily: "Manrope",
        }}
      >
        View Profile
      </Typography>
      <Divider />
      <Box style={{ margin: "10px 0px" }}>
        <AvatarHoverCenterBox>
          <People style={{ color: "#adb5bd", marginRight: 5 }} />
          <Typography style={{ color: "#adb5bd", fontFamily: "Manrope" }}>
            Explore Creators
          </Typography>
        </AvatarHoverCenterBox>

        <AvatarHoverCenterBox>
          <Game style={{ color: "#adb5bd", marginRight: 5 }} />
          <Typography style={{ color: "#adb5bd", fontFamily: "Manrope" }}>
            Help Desk
          </Typography>
        </AvatarHoverCenterBox>
      </Box>
      <Divider />
      <Typography
        style={{
          color: "#adb5bd",
          margin: "10px 0px",
          fontFamily: "Manrope",
          fontSize: 18,
        }}
      >
        Logout
      </Typography>
    </Box>
  );
};
