import React from 'react'
import './pit.css';

function Pit() {
    return (
        <>
            <div className='title'>
                <h2>Pit Scouting</h2>
            </div>

            <form action='submit'>
                <div className='inputs'>
                    <label>
                        Team Number: <input name='teamNumber' defaultValue="Team #" />
                    </label>
                </div>

                <div className='inputs'>
                    <label>
                        Drivetrain: {" "}
                        <select name='drivetrain' id='drivetrain'>
                            <option id='tank' value='tank'>Tank</option>
                            <option id='swerve' value='swerve'>Swerve</option>
                            <option id='mecanum' value='mecanum'>Mecanum</option>
                        </select>
                    </label>
                </div>


                <div className='submit'>
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </form>
        </>
    )
}

export default Pit