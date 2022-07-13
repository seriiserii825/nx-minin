import { useRouter } from "next/router";

export default function Post() {
  const {query: {id}} = useRouter();
	return (
		<>
			<h3>Post: {id}</h3>
		</>
	);
}
