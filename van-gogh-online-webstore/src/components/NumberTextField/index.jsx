import { TextField } from "@mui/material";

export default function NumberTextField({ label, value, setValue, style }) {
    return (
        <TextField value={value} onChange={(e) => setValue(e.target.value)} label={label} variant='outlined'
            type='number' size='small' sx={style} inputProps={{ min: 0 }}
            onKeyDown={(e) => {
                if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                    e.preventDefault()
                }
            }}
        />
    );
}