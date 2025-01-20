import Image from 'next/image';
import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link';
import FreeSessionBtn from '@/app/Components/FreeSessionBtn';
import RegularSessionBtn from '@/app/Components/RegularSessionBtn';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type




const playfair = Playfair_Display({subsets: ['latin'], weight: ['400', '700'], style: ['italic', 'normal']})

type PageProps = {
    params: {
        id: string;
    };
}

type Params = Promise<{id : string}>
const coaches = [
    {
        coachid: "1",
        name: "Coach 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis quam vitae nibh vestibulum consequat. Cras ut tincidunt sem, id tristique massa. In lobortis blandit porta. Nullam a rutrum eros. Aliquam sit amet consectetur arcu, vel fermentum sapien. Curabitur feugiat molestie interdum. Cras tempor justo pharetra, luctus tellus nec, suscipit libero. Nam tincidunt ex eu lectus pellentesque, nec interdum urna facilisis.        Praesent sodales dapibus augue, ut euismod felis feugiat nec. Donec leo justo, sodales a vulputate ultricies, porta at leo. Sed nec gravida ipsum. Pellentesque ultrices dictum sapien, ac consequat purus pretium fringilla. Cras et enim erat. Aliquam eget molestie dui. Sed congue dui lacus, eget consectetur urna vestibulum at. Morbi vel lectus enim. Aliquam erat volutpat. Sed ac efficitur arcu, sit amet aliquet massa. Nunc in posuere est, euismod euismod lectus. Phasellus scelerisque orci enim, viverra condimentum ex cursus ac. Vestibulum eros felis, porttitor ac commodo ut, aliquam tristique purus. Sed laoreet elementum volutpat. Aliquam id tortor in leo blandit ullamcorper at in erat. Donec eu urna massa. Cras id ipsum urna. Nam tincidunt porttitor facilisis. Pellentesque sodales lectus nisi, nec ullamcorper lacus porttitor nec. Curabitur purus urna, luctus id aliquet eget, imperdiet a leo. Vivamus sed nisl vitae mi commodo varius. Nullam porta magna vitae diam porttitor, non tristique risus aliquam. Curabitur finibus velit leo, sit amet elementum lacus sodales eget.",
        image: "/phimage.webp",
        link: "/coaches",
        regularmeetinglink: '/coaches',
        freemeetinglink: '/coaches',
    },
    {
        coachid: "2",
        name: "Coach 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis quam vitae nibh vestibulum consequat. Cras ut tincidunt sem, id tristique massa. In lobortis blandit porta. Nullam a rutrum eros. Aliquam sit amet consectetur arcu, vel fermentum sapien. Curabitur feugiat molestie interdum. Cras tempor justo pharetra, luctus tellus nec, suscipit libero. Nam tincidunt ex eu lectus pellentesque, nec interdum urna facilisis.        Praesent sodales dapibus augue, ut euismod felis feugiat nec. Donec leo justo, sodales a vulputate ultricies, porta at leo. Sed nec gravida ipsum. Pellentesque ultrices dictum sapien, ac consequat purus pretium fringilla. Cras et enim erat. Aliquam eget molestie dui. Sed congue dui lacus, eget consectetur urna vestibulum at. Morbi vel lectus enim. Aliquam erat volutpat. Sed ac efficitur arcu, sit amet aliquet massa. Nunc in posuere est, euismod euismod lectus. Phasellus scelerisque orci enim, viverra condimentum ex cursus ac. Vestibulum eros felis, porttitor ac commodo ut, aliquam tristique purus. Sed laoreet elementum volutpat. Aliquam id tortor in leo blandit ullamcorper at in erat. Donec eu urna massa. Cras id ipsum urna. Nam tincidunt porttitor facilisis. Pellentesque sodales lectus nisi, nec ullamcorper lacus porttitor nec. Curabitur purus urna, luctus id aliquet eget, imperdiet a leo. Vivamus sed nisl vitae mi commodo varius. Nullam porta magna vitae diam porttitor, non tristique risus aliquam. Curabitur finibus velit leo, sit amet elementum lacus sodales eget",
        image: "/phimage.webp",
        link: "/coaches",
        regularmeetinglink: '/coaches',
        freemeetinglink: '/coaches',
    },
    {
        coachid: "3",
        name: "Coach 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis quam vitae nibh vestibulum consequat. Cras ut tincidunt sem, id tristique massa. In lobortis blandit porta. Nullam a rutrum eros. Aliquam sit amet consectetur arcu, vel fermentum sapien. Curabitur feugiat molestie interdum. Cras tempor justo pharetra, luctus tellus nec, suscipit libero. Nam tincidunt ex eu lectus pellentesque, nec interdum urna facilisis.        Praesent sodales dapibus augue, ut euismod felis feugiat nec. Donec leo justo, sodales a vulputate ultricies, porta at leo. Sed nec gravida ipsum. Pellentesque ultrices dictum sapien, ac consequat purus pretium fringilla. Cras et enim erat. Aliquam eget molestie dui. Sed congue dui lacus, eget consectetur urna vestibulum at. Morbi vel lectus enim. Aliquam erat volutpat. Sed ac efficitur arcu, sit amet aliquet massa. Nunc in posuere est, euismod euismod lectus. Phasellus scelerisque orci enim, viverra condimentum ex cursus ac. Vestibulum eros felis, porttitor ac commodo ut, aliquam tristique purus. Sed laoreet elementum volutpat. Aliquam id tortor in leo blandit ullamcorper at in erat. Donec eu urna massa. Cras id ipsum urna. Nam tincidunt porttitor facilisis. Pellentesque sodales lectus nisi, nec ullamcorper lacus porttitor nec. Curabitur purus urna, luctus id aliquet eget, imperdiet a leo. Vivamus sed nisl vitae mi commodo varius. Nullam porta magna vitae diam porttitor, non tristique risus aliquam. Curabitur finibus velit leo, sit amet elementum lacus sodales eget",
        image: "/phimage.webp",
        link: "/coaches",
        regularmeetinglink: '/coaches',
        freemeetinglink: '/coaches',
    }
];


const page = async ({params}:{params:Params}) => {

    const { id } = await params;
    const activid = coaches.findIndex(coach => coach.coachid === id);

    if (activid === -1) {
        return <div>Coach not found</div>; // Handle the case where the coach is not found
    }

    const coach = coaches[activid];

    return (


        <div className={``}>
            <div className="gap-10 flex flex-col sm:flex-row w-[100%]  bg-green-900 h-auto justify-center items-center sm:items-start sm:justify-start p-10 text-center">
            <Image
                src={coach.image}
                width={500}
                height={500}
                alt={coach.name}
                className="w-full sm:w-[30%] h-auto"
            />
            <h1 className={`${playfair.className} h-auto w-auto text-4xl sm:text-7xl text-stone-100 my-auto font-bold`}>{coach.name}</h1>
            </div>
            <div className="flex flex-col m-auto p-5 sm:p-10 w-full sm:w-[50%] h-full justify-start">
                        
                        <div className="px-10 flex-col flex items-center pt-10 h-full justify-between w-full">
                        <h1 className={`${playfair.className} h-auto w-full text-2xl sm:text-5xl text-black text-center sm:text-start my-auto mb-10 font-bold`}>Description</h1>
                                <p className='text-center sm:text-start'>{coach.description}</p>
                            <ul className="flex mt-10 justify-between items-center sm:items-start flex-col sm:flex-row w-full my-auto">
                                <FreeSessionBtn freeLink={coach.freemeetinglink} />
                                <RegularSessionBtn regularLink={coach.regularmeetinglink}/>
                            </ul>
                        </div>
                        <Link href={'/coaches'}>
                            <div className='text-center border w-full border-green-900 sm:w-fit m-auto p-5 mt-[5rem] sm:mt-[10rem]'>View More</div>
                        </Link>
                    </div>
        </div>
    );
}

export default page