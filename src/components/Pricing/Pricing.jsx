import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricing = [
      {id: 1, name: 'Free', price: 0, features: [
        'Free video 2 min',
        '2 tickets free',
        'per day 5 times',
        '5 times free',
        'no full access'
      ]},  
      {id: 2, name: 'Standard', price: 9.99, features: [
        'Free video unlimited',
        '20 tickets free',
        'per day 100 times',
        '50 times free',
        'partial access'
      ]},
      {id: 3, name: 'Premium', price: 21.99, features: [
        'Free video unlimited',
        'unlimited tickets free',
        'per day unlimited times',
        'unlimted times free',
        'full access'
      ]}  
    ];
    return (
        <div>
            <div>
                <h1 className='bg-purple-500 p-10 text-5xl text-center'>Pricing</h1>
            </div>
            <div className='grid grid-cols-3 gap-3'>
            {
                pricing.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;