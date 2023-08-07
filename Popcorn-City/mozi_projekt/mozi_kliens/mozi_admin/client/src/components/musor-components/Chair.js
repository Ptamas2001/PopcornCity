import React from 'react'

function Chair({ szekAdatok }) {
    return (
        <>
            {szekAdatok.type === "foglalt" ?
                <div className="chair-box">
                    <i
                        className="fa-solid fa-couch foglalt"></i>
                </div> :
                <div className="chair-box">
                    <i
                        className="fa-solid fa-couch"></i>
                </div>
            }

        </>
    )
}

export default Chair