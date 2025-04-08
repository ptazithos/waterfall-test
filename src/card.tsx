type CardProps = {
	color: string;
	width: string;
	height: string;
	top: string;
	left: string;
};

const Card = (props: CardProps) => {
	const { color, width, height, top, left } = props;

	return (
		<div
			className="absolute p-[0.3rem]"
			style={{ width, height, top: top, left }}
		>
			<div
				className="h-full w-full rounded shadow-gray-500 shadow-sm"
				style={{ background: color }}
			/>
		</div>
	);
};

export default Card;
