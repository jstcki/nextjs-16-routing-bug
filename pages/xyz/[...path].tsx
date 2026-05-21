import { useRouter } from "next/router";

export default function Page() {
  const { query } = useRouter();
  return (
    <div>
      <h1>XYZ {(query?.path as string[])?.join("/")}</h1>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {
      foo: "bar",
    },
  };
}
