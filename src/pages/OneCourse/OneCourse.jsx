import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCourses } from '../../features/courseSlice';

const OneCourse = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch])

    const course = useSelector(state => state.course.courses)

    return (
        <div>
            {course.map(item => {
                return <>
                    {id === item._id && item.title}
                </>
            })}
        </div>
    );
};

export default OneCourse;