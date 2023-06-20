import { useEffect } from "react";

const useObserveCurrentPage = (pageRef, setIsIntersecting) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				setIsIntersecting(entries[0].isIntersecting);
			},
			{
				rootMargin: "-100px",
			}
		);
		observer.observe(pageRef.current);

		return () => observer.disconnect();
	}, [setIsIntersecting, pageRef]);
};

export default useObserveCurrentPage;
