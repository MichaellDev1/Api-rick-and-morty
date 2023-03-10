import { useState } from "react";

export default function useVisibilityModal() {
  const [visibility, isVisibility] = useState(true);
  const [dataModal, getDataModal] = useState({});

  const handleCloseClick = () => {
    isVisibility(true);
  };

  const handleClickOpen = ({ image, gender, species, status, name }) => {
    isVisibility(false);
    getDataModal({ image, gender, species, status, name });
  };

  return {
    visibility,
    isVisibility,
    handleCloseClick,
    handleClickOpen,
    dataModal,
  };
}
