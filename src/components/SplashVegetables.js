import React from 'react';
import Svg, { Path, G, Rect } from 'react-native-svg';

const SplashVegetables = ({ size = 200 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Spinach leaf */}
      <G transform="translate(60, 40) rotate(-15)">
        <Path
          d="M40 100C40 100 0 70 0 40C0 10 20 0 40 0C60 0 80 10 80 40C80 70 40 100 40 100Z"
          fill="#2E7D32"
        />
        <Path
          d="M40 90C40 90 10 65 10 40C10 15 25 10 40 10C55 10 70 15 70 40C70 65 40 90 40 90Z"
          fill="#4CAF50"
        />
        <Path d="M40 10V90" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" />
        <Path d="M40 30L20 20" stroke="#1B5E20" strokeWidth="1.5" strokeLinecap="round" />
        <Path d="M40 50L15 45" stroke="#1B5E20" strokeWidth="1.5" strokeLinecap="round" />
        <Path d="M40 30L60 20" stroke="#1B5E20" strokeWidth="1.5" strokeLinecap="round" />
        <Path d="M40 50L65 45" stroke="#1B5E20" strokeWidth="1.5" strokeLinecap="round" />
      </G>

      {/* Bell Pepper */}
      <G transform="translate(10, 100) rotate(10)">
        <Path
          d="M10 30C10 15 25 10 40 10C55 10 70 15 70 30V60C70 75 55 80 40 80C25 80 10 75 10 60V30Z"
          fill="#EF6C00"
        />
        <Path
          d="M15 35C15 20 30 15 40 15C50 15 65 20 65 35V60C65 70 50 75 40 75C30 75 15 70 15 60V35Z"
          fill="#FF9800"
        />
        <Path
          d="M35 15C35 5 45 5 45 15"
          stroke="#1B5E20"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </G>

      {/* Chili */}
      <G transform="translate(120, 110) rotate(-30)">
        <Path
          d="M0 0C20 40 60 40 80 0"
          stroke="#C62828"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        <Path
          d="M5 2C20 35 55 35 75 2"
          stroke="#F44336"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        <Path
          d="M0 0C-5 -10 5 -10 0 0"
          stroke="#1B5E20"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </G>

      {/* Leek */}
      <G transform="translate(130, 20) rotate(45)">
        <Rect x="15" y="40" width="10" height="60" fill="#E8F5E9" rx="2" />
        <Rect x="15" y="40" width="10" height="20" fill="#A5D6A7" rx="2" />
        <Path d="M15 40L5 10" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
        <Path d="M20 40L20 5" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
        <Path d="M25 40L35 10" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
      </G>
    </Svg>
  );
};

export default SplashVegetables;
