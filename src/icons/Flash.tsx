import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { BicolorGradient } from '../utils/BicolorGradient';
import { svgIdentifier } from '../utils/svgIdentifier';
import type { IconInterface } from '../types';
import { Colors } from '../colors';

export const Flash: React.FunctionComponent<IconInterface> = ({
  size = 32,
  color = Colors.BLACK,
  color2,
  testID,
}) => {
  const { id, fill: fillBicolor } = svgIdentifier();
  const fill = color2 ? fillBicolor : color;

  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" testID={testID}>
      {!!color2 && <BicolorGradient id={id} color1={color} color2={color2} />}
      <Path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8098 5.08855C19.9798 4.73037 20.3556 4.5 20.77 4.5H33.9645C34.3334 4.5 34.6754 4.68304 34.866 4.98245C35.0565 5.28187 35.0678 5.65397 34.8956 5.96324L27.4028 19.4264H36.7933C37.1944 19.4264 37.5607 19.6424 37.7378 19.9834C37.915 20.3244 37.8723 20.7312 37.6278 21.0325L32.9306 26.8195C32.576 27.2562 31.9151 27.3379 31.4542 27.002C30.9934 26.666 30.9072 26.0395 31.2617 25.6028L34.6552 21.4219H25.6572C25.2883 21.4219 24.9463 21.2389 24.7557 20.9395C24.5652 20.64 24.5539 20.2679 24.726 19.9587L32.2189 6.49551H21.4509L18.8802 11.9134C18.6417 12.416 18.0185 12.6402 17.4882 12.4142C16.958 12.1882 16.7214 11.5976 16.9598 11.095L19.8098 5.08855ZM16.4601 15.9687L5.79622 5.88881C5.38455 5.49968 4.71796 5.50051 4.30737 5.89067C3.89678 6.28083 3.89766 6.91257 4.30933 7.30171L14.4868 16.9218L10.2809 26.248C10.1491 26.5402 10.1721 26.8745 10.3428 27.1481C10.5135 27.4216 10.8115 27.6017 11.1452 27.633L20.5478 28.5156L16.4794 43.2496C16.3532 43.7064 16.5822 44.1845 17.0281 44.3951C17.474 44.6058 18.0147 44.4914 18.3237 44.121L29.3181 30.941L42.2038 43.1211C42.6155 43.5102 43.282 43.5094 43.6926 43.1192C44.1032 42.7291 44.1023 42.0973 43.6907 41.7082L29.9813 28.7495C29.9735 28.7419 29.9656 28.7344 29.9575 28.727L16.4964 16.0031C16.4846 15.9914 16.4725 15.9799 16.4601 15.9687ZM27.8174 29.5225L16.0922 18.4393L12.7812 25.7813L21.9822 26.645C22.2887 26.6738 22.5665 26.8283 22.7425 27.0679C22.9184 27.3075 22.9749 27.6081 22.8969 27.8905L19.7886 39.1473L27.8174 29.5225Z"
      />
    </Svg>
  );
};
