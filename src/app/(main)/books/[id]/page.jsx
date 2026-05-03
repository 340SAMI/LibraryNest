import React from 'react';

const page = async ({params}) => {

    const id= await params;
    console.log(id, "show me");
    return (
        <div>
            <h3>fsdfsdh</h3>
        </div>
    );
};

export default page;