import { TextField } from "@mui/material";

export default function NumberTextField({ label, value, setValue, style, min = 0, max = 100, onChange = (e) => setValue(e.target.value) }) {
    return (
        <TextField value={value} onChange={onChange} label={label} variant='outlined'
            type='number' size='small' sx={style} inputProps={{ min: min, max: max, maxLenght: 3}}
            onKeyDown={(e) => {
                e.preventDefault()
            }}
        />
    );
}