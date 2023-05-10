import { Modal } from "components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { editLocation } from "store/Actions/location";

export const EditLocation = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state?.locations)
  
  const initialValues = {
    id: location?.id,
    state: location?.state,
    district: location?.district,
    location: location?.location,
  };

  const addFields = [
    {
      type: "id",
      name: "id",
      placeholder: location?.id,
      title: t("ID"),

    },
    {
      type: "input",
      name: "state",
      placeholder: location?.state,
      title: t("State"),
  
    },
    {
      type: "input",
      name: "district",
      placeholder: location?.district,
      title: "District",
    
    }, 
    {
      type: "input",
      name: "location",
      title: t("Location"),
      placeholder: location?.location,
  
    },
  ];
  return (
    <Modal
      heading="Edit Location"
      submitText="Edit Location"
      show={show}
      setShow={setShow}
      fields={addFields}
      initialValues={initialValues}
      handleSubmit={async (values) => {
        const newValues = {
          ...values,
          id:Number(values?.id),
        };
        await dispatch(editLocation(newValues,setShow));
      }}
    />
  );
};
