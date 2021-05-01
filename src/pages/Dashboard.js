import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {

    const currentUser = useSelector(state => state.currentUser)
/*     console.log(currentUser);
 */
   /*  useEffect(() => {

    }, []) */

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard
