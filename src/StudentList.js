import React, { useState, useEffect } from 'react';

const getInitialValues = ()=>{
    return[
        {
          name: "David",
          dept: "CSE",
          score: 7.8,
          attendance: 57,
          grade : 'B'
        },
        {
          name: "John",
          dept: "ECE",
          score: 8.8,
          attendance: 77,
          grade: 'A'
        },
        {
            name: "James",
            dept: "ECE",
            score: 5,
            attendance: 85,
            grade: 'C'
          }
      ]
}
 
const StudentList = () =>{
    const [students, setStudents] = useState(getInitialValues())
    const [selectedSort , setSelectedSort] = useState()
    const [sortedList, setSortedList] = useState([])
    const [isSorted, setIsSorted] = useState(false)

    useEffect(()=>{
        setSortedList(students)
    },[students])


    useEffect(()=>{
        if(selectedSort && selectedSort.length > 0){
            switch (selectedSort) {
                case 'Score':
                    let res1 = students.sort((x,y)=>{
                        return x.score - y.score
                    })
                    setSortedList(res1)
                    setIsSorted(!isSorted)
                    break;
                case 'Attendance':
                    let res2 = students.sort((x,y)=>{
                        return x.attendance - y.attendance
                    })
                    setSortedList(res2)
                    setIsSorted(!isSorted)
                    break;
                case 'Grade':
                
                    let res3 = students.sort((x,y)=>{
                        //return x.grade - y.grade
                        if (x.grade < y.grade)
                    return -1;
                return 1;
                    })
                setSortedList(res3)
                setIsSorted(!isSorted)
                    break;
            
                default:
                    break;
            }
        }
    },[selectedSort])
    const getRows = () =>{
        let rows = []
        sortedList.forEach((st,i) => {
            rows.push(<tr key={i}>
                <td>
                    <span>Image</span>
                </td>
                <td>
                    <div>Name:{st.name}</div>
                    <div>Dept:{st.dept}</div>
                    <div data-testid={'score-'+i}>Score:{st.score}</div>
                    <div>Attendance:{st.attendance}</div>
                </td>
                <td>
                    <div><span>{'Grade '+st.grade}</span></div>
                </td>
            </tr>)
        });
        return rows
    }
    const getDropdown =() =>{
       return <select onChange={(e) => setSelectedSort(e.target.value)} data-testid={'sort-btn'}>
            <option></option>
            <option selected={selectedSort === 'Score' ? true: false}>Score</option>
            <option selected={selectedSort === 'Attendance' ? true: false}>Attendance</option>
            <option selected={selectedSort === 'Grade'? true : false}>Grade</option>
        </select>
    }
    return (
        <>
        <h1 data-testid='heading'>Student List</h1>
        <table>
            <tr>
                <th colSpan={2}>
                    <span>Students</span>
                </th>
                <th>
                    <span>{getDropdown()}</span>
                </th>
            </tr>
            {getRows()}            
        </table>
        </>
    );
}
export default StudentList