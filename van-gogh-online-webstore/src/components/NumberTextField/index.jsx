import { TextField } from "@mui/material";

export default function NumberTextField({ name, label, value, setValue, style, onChange = (e) => setValue(e.target.value) }) {
    return (
        <TextField name={name} value={value} onChange={onChange} label={label} variant='outlined'
            type='number' size='small' sx={style} inputProps={{ min: 0 }}
            onKeyDown={(e) => {
                if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                    e.preventDefault()
                }
            }}
        />
    );
}