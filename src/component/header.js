import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
    const token = localStorage.getItem('token');

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    {token ? (
                        <>
                        <Button color="inherit" component={Link} to="/list">
                            appointment
                        </Button>
                          <Button color="inherit" component={Link} to="/user">
                          Users
                      </Button>
                      </>
                    ) : (
                        <>
                            <Button color="inherit" component={Link} to="/register">
                                Register
                            </Button>
                            <Button color="inherit" component={Link} to="/login">
                                Login
                            </Button>
                            <Button color="inherit" component={Link} to="/">
                                Book Appointment
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
