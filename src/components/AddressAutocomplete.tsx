import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  TextField,
  Autocomplete,
  Box,
  Typography,
  CircularProgress,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface AddressOption {
  label: string;
  description: string;
  placeId?: string;
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
}

const useDebounce = (callback: Function, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onChange,
  label = "Address",
  placeholder = "Enter address...",
  required = false,
  fullWidth = true,
  error = false,
  helperText,
}) => {
  const [options, setOptions] = useState<AddressOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  // Use Nominatim (OpenStreetMap) for free geocoding
  const searchAddresses = useCallback(async (searchText: string) => {
    if (searchText.length < 3) {
      setOptions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&countrycodes=us&q=${encodeURIComponent(searchText)}`,
      );

      if (response.ok) {
        const data = await response.json();
        const suggestions: AddressOption[] = data.map((item: any) => ({
          label: item.display_name,
          description: item.display_name,
          placeId: item.place_id,
        }));
        setOptions(suggestions);
      } else {
        setOptions([]);
      }
    } catch (error) {
      console.warn("Address autocomplete error:", error);
      setOptions([]);
    }
    setLoading(false);
  }, []);

  const debouncedSearch = useDebounce(searchAddresses, 300);

  useEffect(() => {
    if (inputValue && inputValue !== value) {
      debouncedSearch(inputValue);
    }
  }, [inputValue, debouncedSearch, value]);

  const handleInputChange = (_: any, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  const handleChange = (_: any, newValue: AddressOption | string | null) => {
    if (typeof newValue === "string") {
      onChange(newValue);
      setInputValue(newValue);
    } else if (newValue) {
      onChange(newValue.label);
      setInputValue(newValue.label);
    } else {
      onChange("");
      setInputValue("");
    }
  };

  const handleBlur = () => {
    // Update the parent component when user types without selecting
    if (inputValue !== value) {
      onChange(inputValue);
    }
  };

  return (
    <Autocomplete
      freeSolo
      value={value}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onChange={handleChange}
      options={options}
      loading={loading}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.label
      }
      filterOptions={(x) => x}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          required={required}
          fullWidth={fullWidth}
          error={error}
          helperText={helperText}
          autoComplete="street-address"
          onBlur={handleBlur}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <LocationOnIcon fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {option.label.split(",")[0]}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {option.label.split(",").slice(1).join(",").trim()}
            </Typography>
          </ListItemText>
        </Box>
      )}
      noOptionsText={
        inputValue.length < 3
          ? "Type at least 3 characters to search..."
          : "No addresses found"
      }
      loadingText="Searching addresses..."
    />
  );
};

export default AddressAutocomplete;

