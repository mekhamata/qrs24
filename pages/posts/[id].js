import { useRouter } from 'next/router';

export default function Posts() {
  const router = useRouter();
  const { id } = router.query;
  return <div>i am post page! {id} and my name is</div>;
}
