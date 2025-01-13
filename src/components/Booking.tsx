import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Alert,
  MenuItem,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  setBookingStatus,
  setBookingError,
  selectBookingState,
} from "../store/store";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  expectedGuests: string;
  date: dayjs.Dayjs | null;
  location: string;
  additionalDetails: string;
}

const eventTypes = [
  "Fair",
  "Rodeo",
  "Private Event",
  "Corporate Event",
  "Festival",
  "Other",
];

const Booking: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(selectBookingState);

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    expectedGuests: "",
    date: null,
    location: "",
    additionalDetails: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setBookingStatus("loading"));

    try {
      // SIMULATION SUCCESSFUL SUBMISSION
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setBookingStatus("succeeded"));
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        expectedGuests: "",
        date: null,
        location: "",
        additionalDetails: "",
      });
    } catch (err) {
      dispatch(
        setBookingError(
          err instanceof Error ? err.message : "An error occurred",
        ),
      );
      dispatch(setBookingStatus("failed"));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            mb: 2,
            color: "primary.main",
          }}
        >
          Book Us!
        </Typography>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            mb: 4,
            color: "text.secondary",
          }}
        >
          Let's bring the sweetness to your special occasion (no email set up
          yet)
        </Typography>

        <Paper
          elevation={2}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
            maxWidth: 800,
            mx: "auto",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {status === "failed" && <Alert severity="error">{error}</Alert>}
              {status === "succeeded" && (
                <Alert severity="success">
                  Booking request submitted successfully! We'll contact you
                  soon.
                </Alert>
              )}

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Event Type"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    {eventTypes.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="Event Date"
                    value={formData.date}
                    onChange={(newValue) =>
                      setFormData((prev) => ({
                        ...prev,
                        date: newValue,
                      }))
                    }
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Expected Number of Guests"
                    name="expectedGuests"
                    type="number"
                    value={formData.expectedGuests}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Additional Details"
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size={isMobile ? "medium" : "large"}
                disabled={status === "loading"}
                sx={{ mt: 2 }}
              >
                {status === "loading"
                  ? "Submitting..."
                  : "Submit Booking Request"}
              </Button>
            </Stack>
          </form>
        </Paper>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            * We'll review your request and get back to you within 24-48 hours.
            For urgent inquiries, please contact us directly at [your phone
            number].
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Booking;
