import React from 'react';

import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import NumberTextField from '../NumberTextField';
import { collectionsEnum } from '../../utils/collectionsEnum';
import './style.css';

export default function Filters({ filter, setFilter }) {
    const isAdmin = localStorage.getItem('isAdmin');;

    const checkboxStyle = {
        color: '#D6A324',
        '&.Mui-checked': {
            color: '#D6A324',
        },
    };

    const handlePriceFieldUpdate = (e) => {
        setFilter({ ...filter, price: { ...filter.price, [e.target.name]: e.target.value } })
    }

    const isCollectionChecked = (id) => {
        return filter.collections.find((element) => element === id) !== undefined;
    }

    const handleCollectionCheckbox = (id) => {
        if (isCollectionChecked(id)) {
            const updatedList = filter.collections.filter((element) => element !== id);
            setFilter({ ...filter, collections: updatedList });
        }
        else {
            setFilter({ ...filter, collections: [...filter.collections, id] });
        }
    }

    return (
        <div className='filters'>
            <Typography variant='smallTitle'>Filters</Typography>

            <div>
                <Typography variant='mediumText'>Price</Typography>
                <div className='price-filter'>
                    <NumberTextField name='min' label={'Min.'} value={filter.price.min} setValue={setFilter}
                        onChange={handlePriceFieldUpdate} style={{ width: '80px' }} />
                    <NumberTextField name='max' label={'Max.'} value={filter.price.max} setValue={setFilter}
                        onChange={handlePriceFieldUpdate} style={{ width: '80px' }} />
                </div>
            </div>

            <div>
                <Typography variant='mediumText'>Collection</Typography>
                <div className='filter-checkbox'>
                    {Object.values(collectionsEnum).map((collection) => (
                        <FormControlLabel
                            key={'collection-checkbox-' + collection.id}
                            value={collection.id}
                            control={<Checkbox
                                checked={isCollectionChecked(collection.id)}
                                onChange={() => handleCollectionCheckbox(collection.id)}
                                sx={checkboxStyle} />}
                            label={collection.name}
                            labelPlacement="end"
                            sx={{ marginBottom: '-10px', }}
                        />
                    ))}
                </div>
            </div>

            {isAdmin ?
                <div>
                    <Typography variant='mediumText'>Availability</Typography>
                    <div className='filter-checkbox'>
                        <FormControlLabel
                            value="outOfStock"
                            control={<Checkbox
                                checked={filter.showUnavailable}
                                onChange={() => setFilter({ ...filter, showUnavailable: !filter.showUnavailable })}
                                sx={checkboxStyle} />}
                            label='Out of stock'
                            labelPlacement="end"
                        />
                    </div>
                </div>
                : <></>
            }
        </div >
    );
}