import React, { createContext, useContext, useState } from 'react';
import { View, Modal, ActivityIndicator, StyleSheet } from 'react-native';

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {children}
      {loading && (
        <Modal transparent={true} animationType="none" visible={loading}>
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator size="large" color="#42B4E5" />
            </View>
          </View>
        </Modal>
      )}
    </LoaderContext.Provider>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// import React from 'react';
// import Spinner from 'react-native-loading-spinner-overlay';
// export const loaderRef = React.createRef();

// export function showLoader() {
//     let ref = loaderRef.current;
//     if (ref) {
//         ref.showLoader();
//     }
// }

// export function hideLoader() {
//     let ref = loaderRef.current;
//     if (ref) {
//         ref.hideLoader();
//     }
// }

// class AppLoader extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { loader: false };
//         this.showLoader = this.showLoader.bind(this);  // Binding methods
//         this.hideLoader = this.hideLoader.bind(this);
//     }

//     showLoader() {
//         this.setState({ loader: true });
//     }

//     hideLoader() {
//         this.setState({ loader: false });
//     }

//     render() {
//         return (
//             <Spinner visible={this.state.loader} />
//         );
//     }
// };

// // Attach the ref to the AppLoader component
// export default React.forwardRef((props, ref) => <AppLoader ref={loaderRef} {...props} />);
