import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../reducers';

import { getWeather } from '../actions/weather';
import { getCountries } from '../actions/countries';

import './Header.scss';

const Header: React.FC = () => {

  const [country, setCountry] = useState('Serbia');
  const [flag, setFlag] = useState('https://flagcdn.com/rs.svg');
  const [dropdown, setDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // const countriesLoading = useSelector((state: RootState) => state.countries['countriesLoading']);

  const countries = useSelector((state: RootState) => state.countries['countries']);

  // const countriesError = useSelector((state: RootState) => state.countries['countriesError']);

  const handleDropdownButtonClick = () => {
    setDropdown(!dropdown)
  };

  const handleDropdownItemClick = (countryName: string, countryFlag: string) => {
    setCountry(countryName);
    setFlag(countryFlag);
    setDropdown(false);
    dispatch(getWeather(countryName));
  };

  const handleGetLatestWeatherButtonClick = () => {
    dispatch(getWeather(country));
  };
  
  return (
    <div className='header'>
      <h3>Weather App</h3>
      <img src={flag} alt='flag' />
      <div className='dropdown'>
        <button onClick={handleDropdownButtonClick}>Select country {dropdown ? <code>&#9650;</code> : <code>&#9660;</code>}</button>
        {dropdown && (
          <div ref={dropdownRef} className='dropdown-items'>
            {countries?.map((country: any, i: number) => 
              <p key={i} onClick={() => handleDropdownItemClick(country.name.common, country.flags.svg)}>{country.name.common}</p>
            )}
          </div>
        )}
      </div>
      <button onClick={handleGetLatestWeatherButtonClick}>Get latest weather</button>
    </div>
  );
};

export default Header;