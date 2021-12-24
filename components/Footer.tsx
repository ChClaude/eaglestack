import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => (
	<footer className='bg-blue-50'>
		<div className='flex flex-col py-12 px-44 md:justify-between md:flex-row'>
			<div className='flex justify-between'>
				<ul className='flex text-5xl'>
					<li className='mr-6'>
						<a href='#' className='text-gray-600 hover:text-gray-900'>
							<FontAwesomeIcon
								icon={['fab', 'facebook-square']}
							/>
						</a>
					</li>
					<li className='mr-6'>
						<a href='#' className='text-gray-600 hover:text-gray-900'>
							<FontAwesomeIcon
								icon={['fab', 'github-square']}
							/>
						</a>
					</li>
					<li className='mr-6'>
						<a href='#' className='text-gray-600 hover:text-gray-900'>
							<FontAwesomeIcon
								icon={['fab', 'instagram-square']}
							/>
						</a>
					</li>
					<li className='mr-6'>
						<a href='#' className='text-gray-600 hover:text-gray-900'>
							<FontAwesomeIcon
								icon={['fab', 'linkedin']}
							/>
						</a>
					</li>
					<li className='text-gray-500'>
						<a href='#' className='text-gray-600 hover:text-gray-900'>
							<FontAwesomeIcon
								icon={['fab', 'twitter-square']}
							/>
						</a>
					</li>
				</ul>
			</div>
			<div className='mt-4 md:mt-0 md:flex md:items-end'>
				<ul className='flex'>
					<li className='md:mr-16'>
						<Link href='/'>
							<a className="hover:text-primary">Privacy Policy</a>
						</Link>
					</li>
					<li className='md:mr-16'>
						<Link href='/'>
							<a className="hover:text-primary">Terms of service</a>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<a className="hover:text-primary">Contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>

		<div
			className='flex py-7 px-44 px-2 flex-col items-center border-t-2 border-solid border-gray-300 md:items-start md:justify-between md:flex-row'>
			<p className="text-sm"><FontAwesomeIcon
				icon='heart'
				className='text-base text-red-500'
			/> Made with love in Cape Town.</p>
			<p className="text-sm">&copy;2021 Eaglestack Software. All rights reserved</p>
		</div>
	</footer>
);

export default Footer;
