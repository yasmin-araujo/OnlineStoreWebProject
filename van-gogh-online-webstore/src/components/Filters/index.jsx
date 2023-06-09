import React from 'react';

import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import NumberTextField from '../NumberTextField';
import './style.css';

export default function Filters() {
    const [priceFilter, setPriceFilter] = React.useState({ min: undefined, max: undefined });
    const collections = ['Almond Blossom', 'Sunflowers', 'Starry Night', 'Self Portraits'];

    return (
        <div className='filters'>
            <Typography variant='smallTitle'>Filters</Typography>

            <div>
                <Typography variant='mediumText'>Price</Typography>
                <div className='price-filter'>
                    <NumberTextField label={'Min.'} value={priceFilter.min} setValue={(value) => setPriceFilter({ min: value })} style={{ width: '80px' }} />
                    <NumberTextField label={'Max.'} value={priceFilter.max} setValue={(value) => setPriceFilter({ max: value })} style={{ width: '80px' }} />
                </div>
            </div>

            <div>
                <Typography variant='mediumText'>Collection</Typography>
                <div className='filter-checkbox'>
                    {collections.map((label, index) => (
                        <FormControlLabel
                            key={'collection-checkbox-' + index}
                            value="top"
                            control={<Checkbox sx={{
                                color: '#D6A324',
                                '&.Mui-checked': {
                                    color: '#D6A324',
                                },

                            }} />}
                            label={label}
                            labelPlacement="end"
                            sx={{ marginBottom: '-10px', }}
                        />
                    ))}
                </div>
            </div>

            <div>
                <Typography variant='mediumText'>Availability</Typography>
                <div className='filter-checkbox'>
                    <FormControlLabel
                        value="top"
                        control={<Checkbox sx={{
                            color: '#D6A324',
                            '&.Mui-checked': {
                                color: '#D6A324',
                            },
                        }} />}
                        label='Out of stock'
                        labelPlacement="end"
                    />
                </div></div>
        </div >
    );
}