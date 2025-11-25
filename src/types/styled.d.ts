import 'styled-components';
import { ColorScheme } from '../data/types';

declare module 'styled-components' {
    export interface DefaultTheme extends ColorScheme { }
}
