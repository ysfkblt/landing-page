import { stats } from '../constants';
import styles from '../style';

export default function Stats() {
	return (
		<section
			className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
		>
			{stats.map((s) => (
				<div
					key={s.id}
					className={`flex-1 flex justify-start items-center flex-row m-3`}
				>
					<h4 className='font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white'>
						{s.value}
					</h4>
					<p className='font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3'>
						{s.title}
					</p>
				</div>
			))}
		</section>
	);
}
