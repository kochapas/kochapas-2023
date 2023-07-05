import { useRouter } from 'next/router';
import { GrabCarTools } from '@/components/apps';

// Lazy version of apps router. Don't overkill it just yet.
const APPS_ROUTER = {
  "001": GrabCarTools
}

export default function AppsRouter() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return <div>Invalid App ID</div>;
  }
  const key = (id as string || "000") as keyof typeof APPS_ROUTER;
  const TheApp = APPS_ROUTER[key] ;

  return (
    <TheApp />
  );
}
