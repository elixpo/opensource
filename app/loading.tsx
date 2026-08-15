import { LoadingState } from '@/components/states/LoadingState';

export default function HostLoading() {
  return (
    <div className="flex-1 py-12">
      <LoadingState text="Loading workspace..." />
    </div>
  );
}
