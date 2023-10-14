import React from 'react';

type Props = {
    variant: 'orange' | "green" | 'yellow';
}

const Circle = ({ variant }: Props) => {
    return <div className='bg-orange-500 w-14 h-14 p-2 rounded-full'></div>
}

export default Circle;