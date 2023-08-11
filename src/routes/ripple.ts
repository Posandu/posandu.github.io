export function Ripple(node: HTMLElement) {
	function findFurthestPoint(
		clickPointX: number,
		elementWidth: number,
		offsetX: number,
		clickPointY: number,
		elementHeight: number,
		offsetY: number
	) {
		let x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
		let y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
		let d = Math.hypot(
			x - (clickPointX - offsetX),
			y - (clickPointY - offsetY)
		);
		return d;
	}

	node.addEventListener("pointerdown", function (e) {
		let rect = node.getBoundingClientRect();
		let radius = findFurthestPoint(
			e.clientX,
			node.offsetWidth,
			rect.left,
			e.clientY,
			node.offsetHeight,
			rect.top
		);

		let circle = document.createElement("div");
		circle.classList.add("ripple");
		circle.style.left = e.clientX - rect.left - radius + "px";
		circle.style.top = e.clientY - rect.top - radius + "px";
		circle.style.width = circle.style.height = radius * 2 + "px";
		node.appendChild(circle);

		const removeRipple = () => {
			circle.style.opacity = "0";
			setTimeout(() => {
				circle.remove();
			}, 300);
		};

		node.addEventListener("pointerup", removeRipple);
		node.addEventListener("mouseleave", removeRipple);
		node.addEventListener("dragleave", removeRipple);
		node.addEventListener("touchmove", removeRipple);
		node.addEventListener("touchend", removeRipple);
		node.addEventListener("touchcancel", removeRipple);
	});
}
