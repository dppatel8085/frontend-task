import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";
import axios from "axios";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    const validateForm = () => {
        const newError = {};

        if (!name.trim()) newError.name = "Name is required";
        else if (name.length < 3) newError.name = "Name should be at least 3 characters";

        if (!email.trim()) newError.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newError.email = "Enter a valid email";

        if (!password.trim()) newError.password = "Password is required";
        else if (password.length < 5) newError.password = "Password should be at least 5 characters";

        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const userData = { name, email, password };

        axios
            .post("http://localhost:3000/", userData)
            .then(() => {
                setName("");
                setEmail("");
                setPassword("");
                setError({});
            })
            .catch((error) => console.log(error));
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
                <Typography variant="h5" textAlign="center" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={!!error.name}
                            helperText={error.name}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!error.email}
                            helperText={error.email}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!error.password}
                            helperText={error.password}
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Register
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};
