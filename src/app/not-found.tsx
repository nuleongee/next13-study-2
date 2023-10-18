import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>이 페이지는 존재하지 않습니다. 다시 검색하세요.</h1>
      <Link href="/search">검색</Link>
    </div>
  );
}
