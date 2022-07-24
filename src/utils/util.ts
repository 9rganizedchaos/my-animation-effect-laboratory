export const getRandomArbitrary = (min: number, max: number): number => {
	return Math.random() * (max - min) + min;
};

export const getCircleY = (radians: number, radius: number): number => {
	return Math.sin(radians) * radius;
};
