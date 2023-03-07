import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getItem } from '../../utils/utilsFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from '../../redux/slices/historySlice';
import { Stack } from '@mui/material';

export default function DataTable() {
    const history = useSelector((state) => state.history.data);
    const dispatch = useDispatch();
    useEffect(() => {
        let localData = getItem("GYC_login_user_data");
        if (localData) {
            localData = JSON.parse(localData);
            dispatch(fetchHistory(localData.token));
        }
    }, []);
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'institute_name', headerName: 'Institute Name', width: 400 },
        { field: 'course_name', headerName: 'Course Name', width: 430 },
    ];
    const NoRowsOverlay = () => {
        return (
          <Stack height="100%" alignItems="center" justifyContent="center">
            No history available.
          </Stack>
        );
      }
    return (

        <div className='historyTable'>
            <DataGrid
                rows={history}
                columns={columns}
                components={{ NoRowsOverlay }}
            />
        </div>
    );
}
