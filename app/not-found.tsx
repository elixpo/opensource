import { EmptyState } from '@/components/states/EmptyState';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function HostNotFound() {
  return (
    <div className="flex-1 py-12">
      <EmptyState 
        icon={<Icon size={24}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></Icon>}
        title="Page not found" 
        description="The host workspace page you are looking for does not exist."
        action={
          <Link href="/host" passHref>
            <Button variant="primary">Return to Host Dashboard</Button>
          </Link>
        }
      />
    </div>
  );
}
