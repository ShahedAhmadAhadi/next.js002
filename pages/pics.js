import Image from 'next/image'
import img from '../public/4.jpg'

function PicsPage() {
    return (
        <>
            <Image src={img} placeholder='blue' alt="tomato" width="200px" height="150px" />
            <div>
                {['1', '2', '3', '4', '5'].map(path => {
                    return (
                        <div key={path}>
                            <Image src={`/${path}.jpg`} alt="pics" width="180px" height="200px" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PicsPage
