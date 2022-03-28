import axios from "axios";

const baseUrl = "http://localhost:9090";

//app axios methods

export const login = async (val)=>{
    const res = await axios({
        method: 'post',
        url: `${baseUrl}/login`,
        data: val
      });
    return res;
}

export const signup = async(val) => {
    const res = await axios({
        method: 'POST',
        url: `${baseUrl}/signup`,
        data: val
    });
    return res;
}

//admin axios methods

export const addCenter = async(val)=>{
    const res = await axios({
        method:'post',
        url:`${baseUrl}/addServiceCenter`,
        data:val
      });
    return res;
}

export const deleteCenter = async(deleteUrl)=>{
    const res = await axios({
        method:'delete',
        url:`${baseUrl}/${deleteUrl}`
    });
    return res;
}

export const editCenter = async(val,editURL)=>{
    const res = await axios({
        method: 'PUT',
        url: `${baseUrl}/${editURL}`,
        data: val
    });
    return res;
}

export const fetchAllCenter = async()=>{
    const res = await axios({
        method:'get',
        url:`${baseUrl}/getServiceCenter`
      });
    return res;
}

export const fetchCenterById = async(URL)=>{
    const res = await axios({
        method:'GET',
        url:`${baseUrl}/${URL}`
    });
    return res;
}

//user axios methods

export const bookAppointment = async(val)=>{
    const res = await axios({
        method:'post',
        url:`${baseUrl}/bookappointment`,
        data:val
      });
    return res;
}

export const deleteBooking = async(deleteUrl)=>{
    const res = await axios({
        method:'delete',
        url:`${baseUrl}/${deleteUrl}`
    });
    return res;
}


export const updateBooking = async(val,editUrl)=>{
    const res = await axios({
        method: 'PUT',
        url: `${baseUrl}/${editUrl}`,
        data: val
    });
    return res;
}

export const fetchUserBookings = async(userId)=>{
    const res = await axios({
        method:'get',
        url:`${baseUrl}/getAppointments/${userId}`,
        headers: {
          'Access-Control-Allow-Origin': true,
        }
      });
    return res;
}
export const fetchAllBookings = async(userId)=>{
    const res = await axios({
        method:'get',
        url:`${baseUrl}/getAppointments/`,
        headers: {
          'Access-Control-Allow-Origin': true,
        }
      });
    return res;
}

