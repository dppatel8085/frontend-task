
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";
import axios from "axios";

export const Book = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState({});

    const validateForm = () => {
        const newError = {};

        if (!name.trim()) newError.name = "Name is required";
        else if (name.length < 3) newError.name = "Name should be at least 3 characters";

        if (!email.trim()) newError.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newError.email = "Enter a valid email";

        if (!address.trim()) newError.address = "Address is required";
        else if (address.length < 5) newError.address = "Address should be at least 5 characters";

        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const userData = { name, email, address };

        axios.post("http://localhost:3000/book-appointment", userData)
            .then(() => {
                setName("");
                setEmail("");
                setAddress("");
            })
            .catch((error) => console.log(error));
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
                <Typography variant="h5" textAlign="center" gutterBottom>
                    Book Appointment
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Name"
                            type="text"
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
                            label="Address"
                            type="text"
                            variant="outlined"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            error={!!error.address}
                            helperText={error.address}
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Book
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};
