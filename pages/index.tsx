import Link from "next/link";

export default function Page() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/xyz/foo/bar">
            This should match the xyz/[...path] route
          </Link>
        </li>
        <li>
          <Link href="/foo/bar">This should match the [...path] route</Link>
        </li>
      </ul>
    </div>
  );
}
