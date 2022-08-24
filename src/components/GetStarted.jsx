import styles from '../style';
import { arrowUp } from '../assets';

export default function GetStarted() {
	return (
		<div
			className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[1px] cursor-pointer`}
		>
			<div
				className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
			>
				<div className={`${styles.flexStart} flex-row`}>
					<p className='font-medium text-[22px] leading-[23.4px]'>
						<span className='text-gradient'>Get</span>
					</p>
					<img
						src={arrowUp}
						alt='arrow-up'
						className='w-6 object-contain'
					/>
				</div>

				<p className='font-medium text-[22px] leading-[23.4px]'>
					<span className='text-gradient'>Started</span>
				</p>
			</div>
		</div>
	);
}
