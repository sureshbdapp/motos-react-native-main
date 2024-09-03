import { Alert } from "react-native";

// Utility function to show alerts
export const showAlert = ({
  title = "",
  message = "",
  showCancelButton = false,
  cancelButtonText = "Cancel",
  confirmButtonText = "OK",
  onConfirm = () => {},
  onClose = () => {},
}) => {
  const buttons = [
    {
      text: confirmButtonText,
      onPress: onConfirm,
    },
  ];

  if (showCancelButton) {
    buttons.unshift({
      text: cancelButtonText,
      onPress: onClose,
      style: "cancel",
    });
  }

  Alert.alert(
    title,
    message,
    buttons,
    { cancelable: true, onDismiss: onClose }
  );
};
