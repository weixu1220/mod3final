// import { Icon } from '@iconify/react';

function Footer() {
    return (
        <div className="border-t-2 border-gray-300 p-1">
            <div className='p-10'>
                <div className='flex flex-wrap justify-around'>
                    <ul className='mx-1'>
                        <h1 className='font-semibold'>About Us</h1>
                        <li>Our Company</li>
                        <li>Our Coffee</li>
                        <li>Stories and News</li>
                        <li>Starbucks Archive</li>
                        <li>Investor Relations</li>
                        <li>Customer Service</li>
                        <li>Contact Us</li>
                    </ul>

                    <ul className='mx-1'>
                        <h1 className='font-semibold'>Careers</h1>
                        <li>Culture and Values</li>
                        <li>Inclusion, Diversity, and Equity</li>
                        <li>College Achievement Plan</li>
                        <li>Alumni Community</li>
                        <li>U.S. Careers</li>
                        <li>International Careers</li>
                    </ul>

                    <ul className='mx-1'>
                        <h1 className='font-semibold'>Social Impact</h1>
                        <li>People</li>
                        <li>Planet</li>
                        <li>Environmental and Social Impact Reporting</li>
                    </ul>

                    <ul>
                        <h1 className='font-semibold'>For Business Partners</h1>
                        <li>Landlord Support Center</li>
                        <li>Suppliers</li>
                        <li>Corporate Gift Card Sales</li>
                        <li>Office and Foodservice Coffee</li>
                    </ul>
                    <ul className='mx-1'>
                        <h1 className='font-semibold'>Order and Pick Up</h1>
                        <li>Order on the App</li>
                        <li>Order on the Web</li>
                        <li>Delivery</li>
                        <li>Order and Pick Up Options</li>
                        <li>Explore and Find Coffee for Home</li>
                    </ul>
                </div>
            </div>
            <div className='border-t-2 border-gray-300 m-10' >
                {/* <div className='flex my-5'>
                    <Icon className='mx-2 my-4' icon="entypo-social:spotify-with-circle" width="40" height="40" color="black" />
                    <Icon className='mx-2 my-4' icon="entypo-social:facebook-with-circle" width="40" height="40" color="black" />
                    <Icon className='mx-2 my-4' icon="entypo-social:pinterest-with-circle" width="40" height="40" color="black" />
                    <Icon className='mx-2 my-4' icon="entypo-social:instagram-with-circle" width="40" height="40" color="black" />
                    <Icon className='mx-2 my-4' icon="entypo-social:youtube-with-circle" width="40" height="40" color="black" />
                    <Icon className='mx-2 my-4' icon="entypo-social:twitter-with-circle" width="40" height="40" color="black" />
                </div> */}
                <div className='my-5'>
                    <p>Privacy Notice | Terms of Use | Do Not Share My Personal Information | CA Supply Chain Act | Cookie Preferences</p>
                </div>
                <div className='my-5'>
                    <p>© 2023 This is a clone of Starbucks Coffee for Study purpose only. </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;