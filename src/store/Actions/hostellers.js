import axios from "axios";
import { toast } from "react-toastify";
import { getHosteller, getHostellers } from "store/Slices/hostellersSlice";

export const getAllHostellers = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:9000/api/v1/hostellers`,
    );
    dispatch(getHostellers(response?.data));
  };
};

export const addHosteller = (newValues,setShow) => {
  return async (dispatch) => {
    const response = await axios.post(
      `http://localhost:9000/api/v1/hosteller`,newValues
    );
    if(response?.status === 200){
      toast("Hosteller Added Successfully")
      dispatch(getAllHostellers())
      setShow(false)
    }
  };
};

export const viewHosteller = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:9000/api/v1/hosteller/${id}`
    );
    if(response?.status === 200){
      console.log("response",response)
      dispatch(getHosteller(response?.data))
    }
  };
};

export const editHosteller = (newValues,setShow) => {
  return async (dispatch) => {
    const response = await axios.put(
      `http://localhost:9000/api/v1/hosteller/${newValues?.id}`,newValues
    );
    if(response?.status === 200){
      toast("Hosteller Edited Successfully")
      dispatch(getAllHostellers())
      setShow(false)
    }
  };
};