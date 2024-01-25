import React from "react";
import { useSelector } from "react-redux";

export function DisplayComponent() {
	const score = useSelector((state) => state.counter.value);

	return (
		<div>
			<p>score = {score}</p>
		</div>
	);
}
