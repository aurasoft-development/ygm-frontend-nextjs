import React from 'react';
import CollegeCompareTable from '../../components/CollegeCompareTable';
import apiCall from '../../utils/apiCall';

const CompareCollege = ({ DataToCompare }) => {
  const { college1, college2, college3 } = DataToCompare;
  return (
    <CollegeCompareTable college1={college1} college2={college2} college3={college3} />
  )
}

export async function compareCollege(query) {
  const { college1, college2, college3 } = query || {};
  const result = await apiCall(`college_comparison.php?college1=${college1}&college2=${college2}&college3=${college3}`, "get");
  return result.data
}


export async function getServerSideProps(context) {
  const { query } = context;
  const data = await compareCollege(query)
  return {
    props: {
      DataToCompare: data
    }
  }
}

export default CompareCollege;