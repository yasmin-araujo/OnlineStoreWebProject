import { TextField } from "@mui/material";

export default function NumberTextField({ name, label, value, setValue, style, min = 0, max = undefined, maxLenght = 6, required = false,
    onChange = (e) => setValue(e.target.value) }) {
    return (
        <TextField required={required} name={name} value={value} onChange={onChange} label={label} variant='outlined'
            type='number' size='small' sx={style} inputProps={{ min: min, max: max }}
            onKeyDown={(e) => {
                if (e.key === "Backspace") {
                    return;
                }
                if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+" || value.toString().length >= maxLenght) {
                    e.preventDefault();
                }
            }}
        />
    );
}