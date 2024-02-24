import Heart from '@/public/heart-48.png'
import Image from 'next/image'

export default function Latestnews() {
    return (
        <>
            <div id="latest__news">
                <h1 className='text-center text-white'>
                    Latest News
                </h1>
                <div className="flex flex-row">
                    <div className="flex flex-col m-auto bg-white">
                        <div className="m-auto text-center bg-gray-600">IMG</div>
                        <div className="flex flex-row justify-start">
                            <div className="ml-10"><h2>Title</h2></div>
                            <Image src={Heart} alt="heart" className='relative ml-4' />
                        </div>
                        <div className="p-1">
                            <div className="p-1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing
                                elit. Vero maiores exercitationem autem cum iste.
                                Quidem obcaecati ea, a hic accusantium voluptate
                                temporibus fugiat. Ullam dolorum, vero illo
                                \pariatur id placeat!
                            </div>
                            <div className="p-1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing
                                elit. Vero maiores exercitationem autem cum iste.
                                Quidem obcaecati ea, a hic accusantium voluptate
                                temporibus fugiat. Ullam dolorum, vero illo
                                \pariatur id placeat!
                            </div>
                        </div>
                        <div className="mb-8 text-center">2022-06-01</div>
                    </div>
                </div>
            </div>
        </>
    )
}