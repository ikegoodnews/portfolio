// import { useRouter } from 'next/router';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/redux/reducers';
// import { ReactNode } from 'react';

// type LayoutProps = {
//   children: ReactNode;
//   query?: string;
// };

// const PrivateRoute: React.FC<LayoutProps> = ({ children }) => {
//   const IsAuthenticated = useSelector(
//     (state: RootState) => state.auth.IsAuthenticated
//   );

//   const router = useRouter();

//   if (!IsAuthenticated) {
//     router.replace({
//       pathname: `/admin/login`,
//       query: {
//         from: encodeURIComponent(router.pathname),
//       },
//     });

//     return null;
//   }

//   return <>{children}</>;
// };

// export default PrivateRoute;



// USAGE
// const router = useRouter();
//   const query = router?.query;
//   const decodedFrom = decodeURIComponent(
//     Array.isArray(query?.from) ? query.from[0] : (query?.from ?? '')
//   );

//   useEffect(() => {
//     const listener = AppEmitter.addListener(
//       authConstants.LOGIN_SUCCESS,
//       (evt: Event) => {
//         const customEvent = evt as CustomEvent;
//         const data = customEvent.detail?.data;

//         if (data && decodedFrom?.length) {
//           router.push({
//             pathname: decodedFrom,
//           });
//           return;
//         }

//         if (data) {
//           router.push('/admin/dashboard');
//           return;
//         }
//       }
//     );

//     return () => listener.remove();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
