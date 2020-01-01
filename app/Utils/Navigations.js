import { NavigationActions, StackActions } from 'react-navigation';

const resetNavigationTo = routeName =>
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: routeName })],
    key: null,
  });

export { resetNavigationTo };
