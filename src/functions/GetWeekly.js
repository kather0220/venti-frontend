import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants';
/*
function GetWeekly() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const getBannerEvents = async () => {
    try {
      setError(null);
      setLoading(true);

      const res = await axios.get(API_BASE_URL + '/api/weekly/');

      console.log(res.data);
      setResponse(res.data);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
}

export default GetWeekly();
*/
