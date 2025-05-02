import IndexStack from '@/app_old_routes';
import { RootStackParamList } from '@/app_old_routes/navigation-prop';
import { createNavigationContainerRef, getPathFromState, NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { usePathname, useRouter } from 'expo-router';
import { useEffect } from 'react';

/**
 * This catch-all route handles all paths under /test/
 * It loads the old stack navigator and passes the route information to it
 */

const navigationRef = createNavigationContainerRef<RootStackParamList>();

const navigate = (name: keyof RootStackParamList, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
}

export default function TestRoute() {
  const router = useRouter();
  // const navigation = useNavigation();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.startsWith('/test')) {
      return;
    }
    const innerPath = getPathFromState(navigationRef.getRootState());
    if (`/test${innerPath}` !== pathname) {
      console.log('pathname', pathname);
      const newPath = pathname.replace(/\/test\/?/, '');
      if (newPath !== '') {
        navigate(newPath as keyof RootStackParamList);
      }
    }
  }, [pathname]);

  useEffect(() => {
    navigationRef.addListener('state', (data) => {
      const path = getPathFromState(navigationRef.getRootState());
      if (path) {
        router.replace(`/test${path}`);
      }
    });
  }, [router])
  
  return (
    <NavigationIndependentTree>
      <NavigationContainer ref={navigationRef}>
        <IndexStack />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
