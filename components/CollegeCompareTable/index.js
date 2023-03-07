import React from 'react';
import { isBrowser } from '../../utils/utilsFunctions';
import { getContent } from '../Blog';
import styles from "./collegeCompareTable.module.css";

const CollegeCompareTable = ({ college1, college2, college3 }) => {
    return (
        <div className={styles.fixWidth}>
            <h3 className='Form_main_heading'>Comparision Details </h3>
            <table className={styles.contentTable}>
                <thead>
                    <tr>
                        <th>Features</th>
                        <th>{college1?.college_name}</th>
                        <th>{college2?.college_name}</th>
                        <th>{college3?.college_name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>City</td>
                        <td>{college1?.city || "-"}</td>
                        <td>{college2?.city || "-"}</td>
                        <td>{college3?.city || "-"}</td>
                    </tr>
                    <tr className={styles.activeRow}>
                        <td>State</td>
                        <td>{college1?.state || "-"}</td>
                        <td>{college2?.state || "-"}</td>
                        <td>{college3?.state || "-"}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{college1?.address || "-"}</td>
                        <td>{college2?.address || "-"}</td>
                        <td>{college3?.address || "-"}</td>
                    </tr>

                    <tr>
                        <td>Video information</td>
                        <td><a target="_blank" rel="noreferrer" href={college1?.website_url}>{college1?.website_url || "-"}</a></td>
                        <td><a target="_blank" rel="noreferrer" href={college2?.website_url}>{college2?.website_url || "-"}</a></td>
                        <td><a target="_blank" rel="noreferrer" href={college3?.website_url}>{college3?.website_url || "-"}</a></td>
                    </tr>
                    {
                        isBrowser() &&
                        <tr className={styles.activeRow}>
                            <td>Discription</td>
                            <td dangerouslySetInnerHTML={getContent(college1?.description)}></td>
                            <td dangerouslySetInnerHTML={getContent(college2?.description)}></td>
                            <td dangerouslySetInnerHTML={getContent(college3?.description)}></td>
                        </tr>
                    }
                    <tr >
                        <td>Available Courses</td>
                        <td>{college1?.available_courses || "-"}</td>
                        <td>{college2?.available_courses || "-"}</td>
                        <td>{college3?.available_courses || "-"}</td>
                    </tr>
                    {/* <tr className={styles.activeRow}>
                        <td>Phone</td>
                        <td>{college1?.phone || "-"}</td>
                        <td>{college2?.phone || "-"}</td>
                        <td>{college3?.phone || "-"}</td>
                    </tr> */}
                    {/* <tr>
                        <td>Email</td>
                        <td>{college1?.email || "-"}</td>
                        <td>{college2?.email || "-"}</td>
                        <td>{college3?.email || "-"}</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default CollegeCompareTable;