import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '../../routes/app.routes';

export const useAppNavigator = () => useNavigation<AppNavigatorRoutesProps>();
