import type { ViewStyle } from 'react-native';

import type { Colors } from './colors';

interface IconSharedProperties {
  accessibilityLabel?: string;
  accessible?: boolean;
  color?: Colors;
  testID?: string;
  style?: ViewStyle;
}

export interface IconInterface extends IconSharedProperties {
  size?: number | string;
  opacity?: number;
  color2?: Colors;
}

export interface BicolorIconInterface extends IconInterface {
  color2?: Colors;
  thin?: boolean;
}

export interface RectangleIconInterface extends IconSharedProperties {
  width?: number | string;
  height?: number | string;
}
