import React from 'react'
import { Grid } from '@material-ui/core'
import styled from '@emotion/styled'

const StyledGrades = styled(Grid)`
padding: 5%;
padding-left: 39%;
`
export const Grades = () => {
    return(
    <StyledGrades>
        <img src="https://www.gstatic.com/classroom/empty_states_students.png" alt=""></img>
        <div>Your class doesn't have any students.</div>
        <div>Add students in the People page.</div>
    </StyledGrades>
    )
}