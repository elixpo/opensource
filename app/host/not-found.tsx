import Link from 'next/link';
import { Icon } from '@/components/icons';
import { EmptyState } from '@/components/states/EmptyState';

export default function HostNotFound() {
  return (
    <div className="flex-1 py-12">
      <EmptyState
        icon={
          <Icon size={24}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </Icon>
        }
        title="Page not found"
        description="The host workspace page you are looking for does not exist."
        action={
          <Link href="/host" className="button-primary">
            Return to Host Dashboard
          </Link>
        }
      />
    </div>
  );
}
