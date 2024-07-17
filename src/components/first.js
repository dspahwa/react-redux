import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../data/actions';

const First = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(state => state.someReducer);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        <ul>
            {data && data.length>0 && data.map((list,index)=>{
                    return (
                        <li key={index}>{list.title}</li>
                    )
                })
            }
         </ul>
    </div>
  );
};

export default First;
