import { useMemo, useRef } from "react";
import Card from "./card";
import DummyCardSource from "./lib/dummy";
import { useAppStore } from "./store";

const ColumnCounter = () => {
	const { columns, setColumns } = useAppStore((state) => state);
	return (
		<div className="flex w-full mb-[1rem]">
			<div className="h-full flex bg-white px-[1rem] py-[0.5rem] rounded shadow-gray-400 shadow-sm ">
				<span className="mr-[0.5rem]">Column:</span>
				<button
					type="button"
					className="w-[2rem] bg-gray-2 border-0 rounded"
					onClick={() => {
						setColumns(columns + 1);
					}}
				>
					+
				</button>
				<span className="mx-[0.5rem]">{columns}</span>
				<button
					type="button"
					className="w-[2rem] bg-gray-2 border-0 rounded"
					onClick={() => {
						columns > 1 && setColumns(columns - 1);
					}}
				>
					-
				</button>
			</div>
		</div>
	);
};

const Container = () => {
	const columns = useAppStore((state) => state.columns);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const cards = useMemo(() => {
		const remSize = Number.parseFloat(
			getComputedStyle(document.documentElement).fontSize,
		);

		const containerSizeInRem = (window.innerHeight * 0.8) / remSize;
		const columnRemains = new Array(columns).fill(containerSizeInRem);

		return DummyCardSource.instance.cards.map((card, index) => {
			const columnIndex = index % columns;
			const heightInRem = 16 * card.ratio;

			const element =
				columnRemains[columnIndex] > 0 ? (
					<Card
						key={`${index}-${JSON.stringify(card)}`}
						color={`rgb(${card.color[0]},${card.color[1]},${card.color[2]})`}
						width="16rem"
						height={`${heightInRem}rem`}
						top={`${containerSizeInRem - columnRemains[columnIndex]}rem`}
						left={`${columnIndex * 16}rem`}
					/>
				) : (
					<div key={`${index}-${JSON.stringify(card)}`} />
				);

			columnRemains[columnIndex] -= heightInRem;

			return element;
		});
	}, [columns]);

	return (
		<div
			className="flex flex-col h-[80vh] "
			style={{ width: `${columns * 16}rem` }}
			ref={containerRef}
		>
			<ColumnCounter />
			<div className="bg-white rounded-xl shadow-gray-500 shadow-md flex-1 overflow-hidden relative">
				{cards}
			</div>
		</div>
	);
};

export default Container;
